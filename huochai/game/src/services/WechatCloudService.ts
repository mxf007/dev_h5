/**
 * 微信云开发服务类
 * 用于处理游戏数据的云端存储
 */

interface GameData {
    score: number;           // 玩家积分
    guanqia: number;         // 经典模式关卡进度
    guanqia1: number;        // 数字模式关卡进度
    guanqiaReverse: number;  // 记忆挑战模式关卡进度
    selectId: number;        // 当前选择的关卡
    timestamp: number;       // 数据更新时间戳
    version: string;         // 数据版本
}

export class WechatCloudService {
    private static instance: WechatCloudService;

    /** 本地记住「当前用户」在云上的存档文档 _id（每人一条，勿再用固定 player_data） */
    private static readonly STORAGE_SAVE_DOC_ID = "huochaiCloudSaveDocId";
    /** 历史版本固定文档，仅用于只读兼容；新写入一律走 add 或用户专属 _id */
    private static readonly LEGACY_DOC_ID = "player_data";

    private _cachedSaveDocId: string = "";

    public static getInstance(): WechatCloudService {
        if (!WechatCloudService.instance) {
            WechatCloudService.instance = new WechatCloudService();
        }
        return WechatCloudService.instance;
    }

    private initialized = false;

    private getStoredSaveDocId(): string {
        if (this._cachedSaveDocId) {
            return this._cachedSaveDocId;
        }
        const s = egret.localStorage.getItem(WechatCloudService.STORAGE_SAVE_DOC_ID);
        if (s) {
            this._cachedSaveDocId = s;
        }
        return this._cachedSaveDocId || "";
    }

    private setStoredSaveDocId(id: string): void {
        this._cachedSaveDocId = id;
        egret.localStorage.setItem(WechatCloudService.STORAGE_SAVE_DOC_ID, id);
    }

    /** 从一条云文档解析出 GameData（兼容 doc.get 与 list 元素） */
    private parseDocToGameData(raw: any): GameData | null {
        if (!raw || typeof raw !== "object") {
            return null;
        }
        const payload = raw.data !== undefined ? raw.data : raw;
        if (payload && (typeof payload.score === "number" || typeof payload.guanqia === "number")) {
            return payload as GameData;
        }
        return null;
    }

    /**
     * 在「当前用户可读」的 game_data 列表里选一条最新存档的 _id（排除历史共享 doc player_data）
     */
    private async findPreferredSaveDocIdFromCloud(): Promise<string> {
        try {
            const wxa = wx as any;
            const db = wxa.cloud.database();
            const res = await db.collection("game_data").limit(20).get();
            const list = res && res.data;
            if (!list || !list.length) {
                return "";
            }
            let best: any = null;
            let bestT = -1;
            for (let i = 0; i < list.length; i++) {
                const d = list[i];
                if (!d || d._id === WechatCloudService.LEGACY_DOC_ID) {
                    continue;
                }
                const t = typeof d.updateTime === "number" ? d.updateTime : (typeof d.timestamp === "number" ? d.timestamp : 0);
                if (t >= bestT) {
                    bestT = t;
                    best = d;
                }
            }
            return best && best._id ? String(best._id) : "";
        } catch (e) {
            // 无 where、权限过严等会导致 list get 失败；不应阻断后续 player_data 只读回退
            console.warn("列举云端存档失败（将尝试单条 doc 回退）:", e);
            return "";
        }
    }

    /** 解析并缓存当前用户应使用的存档文档 _id（不含 legacy player_data） */
    private async ensureSaveDocIdForWrite(): Promise<string> {
        let id = this.getStoredSaveDocId();
        if (id && id !== WechatCloudService.LEGACY_DOC_ID) {
            return id;
        }
        if (id === WechatCloudService.LEGACY_DOC_ID) {
            this._cachedSaveDocId = "";
            egret.localStorage.removeItem(WechatCloudService.STORAGE_SAVE_DOC_ID);
        }
        id = await this.findPreferredSaveDocIdFromCloud();
        if (id) {
            this.setStoredSaveDocId(id);
            return id;
        }
        return "";
    }

    /**
     * 初始化微信云开发
     */
    public init(envId: string = ''): void {
        if (this.initialized) {
            return; // 避免重复初始化
        }
        
        if (typeof wx !== 'undefined' && wx.cloud) {
            try {
                wx.cloud.init({
                    env: envId || 'your-cloud-env'  // 使用传入的环境ID，如果为空则使用默认值
                });
                console.log('微信云开发初始化成功，环境ID:', envId || 'your-cloud-env');
                this.initialized = true;
            } catch (error) {
                console.error('微信云开发初始化失败:', error);
            }
        }
    }

    /**
     * 上传游戏数据到云端
     */
    public async uploadGameData(gameData: GameData): Promise<boolean> {
        // 非微信环境或没有云开发能力时，返回成功但不做任何操作
        if (typeof wx === 'undefined' || !wx.cloud) {
            console.log('非微信环境，跳过云存储');
            return true;
        }

        try {
            const db = (wx as any).cloud.database();
            const payload = {
                ...gameData,
                updateTime: Date.now()
            };
            let docId = await this.ensureSaveDocIdForWrite();
            if (docId) {
                await db.collection("game_data").doc(docId).set({
                    data: payload
                });
            } else {
                const addRes = await db.collection("game_data").add({
                    data: payload
                });
                if (addRes && addRes._id) {
                    this.setStoredSaveDocId(addRes._id);
                }
            }

            console.log("数据上传成功");
            return true;
        } catch (error) {
            console.error('数据上传失败:', error);
            return false;
        }
    }

    /**
     * 从云端下载游戏数据
     */
    public async downloadGameData(): Promise<GameData | null> {
        // 非微信环境或没有云开发能力时，返回null
        if (typeof wx === 'undefined' || !wx.cloud) {
            console.log('非微信环境，跳过云存储');
            return null;
        }

        try {
            const db = (wx as any).cloud.database();
            const tryParse = (result: any): GameData | null => {
                const doc = result && result.data;
                if (doc && typeof doc === "object" && !Array.isArray(doc)) {
                    const gd = this.parseDocToGameData(doc);
                    if (gd) {
                        console.log("数据下载成功:", gd);
                    }
                    return gd;
                }
                return null;
            };

            let stored = this.getStoredSaveDocId();
            if (stored === WechatCloudService.LEGACY_DOC_ID) {
                stored = "";
            }
            if (stored) {
                try {
                    const r = await db.collection("game_data").doc(stored).get();
                    const gd = tryParse(r);
                    if (gd) {
                        return gd;
                    }
                } catch (e) {
                    console.warn("按本地缓存 _id 拉取失败（可能已删档或权限变更）:", e);
                }
            }

            const prefId = await this.findPreferredSaveDocIdFromCloud();
            if (prefId) {
                try {
                    this.setStoredSaveDocId(prefId);
                    const r2 = await db.collection("game_data").doc(prefId).get();
                    const gd2 = tryParse(r2);
                    if (gd2) {
                        return gd2;
                    }
                } catch (e) {
                    console.warn("按列举得到的 _id 拉取失败:", e);
                }
            }

            // 只读兼容：旧版共用 player_data
            try {
                const r3 = await db.collection("game_data").doc(WechatCloudService.LEGACY_DOC_ID).get();
                const gd3 = tryParse(r3);
                if (gd3) {
                    return gd3;
                }
            } catch (legacyErr) {
                const msg = legacyErr && ((legacyErr as any).errMsg || (legacyErr as any).message || String(legacyErr));
                if (typeof msg === "string" && (msg.indexOf("cannot find document") >= 0 || msg.indexOf("找不到") >= 0)) {
                    console.log("云端尚无存档文档，使用本地数据");
                    return null;
                }
            }

            console.log('云端暂无数据');
            return null;
        } catch (error) {
            const msg = error && ((error as any).errMsg || (error as any).message || String(error));
            if (typeof msg === "string" && (msg.indexOf("cannot find document") >= 0 || msg.indexOf("找不到") >= 0)) {
                console.log("云端尚无存档文档，使用本地数据");
                return null;
            }
            console.error("数据下载失败:", error);
            return null;
        }
    }

    /**
     * 自动上传当前游戏数据
     */
    public async autoUpload(): Promise<void> {
        const mainUIManager = MainUIManager.getInstance();
        
        const gameData: GameData = {
            score: mainUIManager.score,
            guanqia: mainUIManager.guanqia,
            guanqia1: mainUIManager.guanqia1,
            guanqiaReverse: mainUIManager.guanqiaReverse,
            selectId: mainUIManager.selectId,
            timestamp: Date.now(),
            version: '1.0'
        };

        await this.uploadGameData(gameData);
    }

    /**
     * 自动下载并合并游戏数据
     */
    public async autoDownloadAndMerge(): Promise<void> {
        const remoteData = await this.downloadGameData();
        const mainUIManager = MainUIManager.getInstance();
        const localRaw = egret.localStorage.getItem("huochaiData");
        const hasPersistedLocal = !!(localRaw && localRaw !== "");
        const localData = this.getLocalGameData();
        const localTs = localData ? (localData.timestamp || 0) : 0;

        if (remoteData) {
            // 勿用 getLastSaveTime() 与云端比：启动时 lastSaveTimestamp≈Date.now()，会导致云端永远「更旧」、重装后永远合并不了
            if (!hasPersistedLocal) {
                mainUIManager.score = remoteData.score;
                mainUIManager.guanqia = remoteData.guanqia;
                mainUIManager.guanqia1 = remoteData.guanqia1;
                mainUIManager.guanqiaReverse = remoteData.guanqiaReverse;
                mainUIManager.selectId = remoteData.selectId;
                mainUIManager.saveData();
                console.log("云端数据已恢复到本地（无本地持久化存档）");
            } else if (remoteData.timestamp > localTs) {
                mainUIManager.score = Math.max(mainUIManager.score, remoteData.score);
                mainUIManager.guanqia = Math.max(mainUIManager.guanqia, remoteData.guanqia);
                mainUIManager.guanqia1 = Math.max(mainUIManager.guanqia1, remoteData.guanqia1);
                mainUIManager.guanqiaReverse = Math.max(mainUIManager.guanqiaReverse, remoteData.guanqiaReverse);
                mainUIManager.selectId = remoteData.selectId;
                mainUIManager.saveData();
                console.log("云端数据已合并到本地");
            }
        } else if (hasPersistedLocal) {
            console.log("云端无数据，将本地数据上传至云端");
            await this.autoUpload();
        } else {
            console.log("云端无数据且无本地持久化存档，跳过上传（避免用默认进度覆盖云端）");
        }
    }
    
    /**
     * 尝试同步云端数据，如果失败则使用本地数据
     */
    public async syncCloudData(): Promise<void> {
        try {
            // 先尝试从云端获取数据
            const cloudData = await this.downloadGameData();
            
            if (cloudData) {
                // 云端有数据，与本地数据比较后决定是否更新
                const localData = this.getLocalGameData();
                
                // 如果云端数据更新，则使用云端数据
                if (cloudData.timestamp > (localData?.timestamp || 0)) {
                    const mainUIManager = MainUIManager.getInstance();
                    
                    // 仅在云端数据更高的情况下更新本地数据（防止进度回退）
                    mainUIManager.score = Math.max(mainUIManager.score, cloudData.score);
                    mainUIManager.guanqia = Math.max(mainUIManager.guanqia, cloudData.guanqia);
                    mainUIManager.guanqia1 = Math.max(mainUIManager.guanqia1, cloudData.guanqia1);
                    mainUIManager.guanqiaReverse = Math.max(mainUIManager.guanqiaReverse, cloudData.guanqiaReverse);
                    mainUIManager.selectId = cloudData.selectId;
                    
                    // 保存合并后的数据
                    mainUIManager.saveData();
                    
                    console.log('已从云端更新数据');
                }
            } else {
                const raw = egret.localStorage.getItem("huochaiData");
                if (raw && raw !== "") {
                    console.log("云端无数据，上传本地数据");
                    await this.autoUpload();
                } else {
                    console.log("云端无数据且无本地持久化存档，跳过上传");
                }
            }
        } catch (error) {
            console.error('云端数据同步失败，使用本地数据:', error);
            // 出现错误时，继续使用本地数据，不中断游戏流程
        }
    }
    
    /**
     * 获取本地游戏数据
     */
    private getLocalGameData(): GameData | null {
        try {
            const localDataStr = egret.localStorage.getItem("huochaiData");
            if (!localDataStr) {
                return null;
            }
            
            const localData = JSON.parse(localDataStr);
            return {
                score: localData.score || 0,
                guanqia: localData.guanqia || 1,
                guanqia1: localData.guanqia1 || 1,
                guanqiaReverse: localData.guanqiaReverse || 1,
                selectId: localData.selectId || 1,
                timestamp: localData.timestamp || 0,
                version: localData.version || '1.0'
            };
        } catch (error) {
            console.error('解析本地数据失败:', error);
            return null;
        }
    }
}

let cloudInitialized = false;
export function initWechatCloud(envId: string = ''): void {
    if (!cloudInitialized) {
        WechatCloudService.getInstance().init(envId);
        cloudInitialized = true;
    }
}