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

class WechatCloudService {
    private static instance: WechatCloudService;
    
    public static getInstance(): WechatCloudService {
        if (!WechatCloudService.instance) {
            WechatCloudService.instance = new WechatCloudService();
        }
        return WechatCloudService.instance;
    }

    /**
     * 初始化微信云开发
     */
    public init(): void {
        if (typeof wx !== 'undefined' && wx.cloud) {
            wx.cloud.init({
                env: 'your-cloud-env'  // 替换为你的云开发环境ID
            });
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
            const result = await wx.cloud.database().collection('game_data').doc('player_data').set({
                data: {
                    ...gameData,
                    updateTime: Date.now()
                }
            });

            console.log('数据上传成功:', result);
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
            const result = await wx.cloud.database().collection('game_data').doc('player_data').get();
            
            if (result && result.data) {
                console.log('数据下载成功:', result.data);
                return result.data.data as GameData;
            }
            
            return null;
        } catch (error) {
            console.error('数据下载失败:', error);
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
        
        if (remoteData) {
            const mainUIManager = MainUIManager.getInstance();
            
            // 只有当远程数据较新时才合并
            if (remoteData.timestamp > mainUIManager.getLastSaveTime?.() || 0) {
                mainUIManager.score = Math.max(mainUIManager.score, remoteData.score);
                mainUIManager.guanqia = Math.max(mainUIManager.guanqia, remoteData.guanqia);
                mainUIManager.guanqia1 = Math.max(mainUIManager.guanqia1, remoteData.guanqia1);
                mainUIManager.guanqiaReverse = Math.max(mainUIManager.guanqiaReverse, remoteData.guanqiaReverse);
                mainUIManager.selectId = remoteData.selectId;
                
                console.log('云端数据已合并');
            }
        }
    }
}

// 添加一个全局初始化函数
function initWechatCloud(): void {
    WechatCloudService.getInstance().init();
}

// 在MainUIManager中添加保存时间追踪
const originalSaveData = MainUIManager.prototype.saveData;
MainUIManager.prototype.saveData = function() {
    // 执行原始保存逻辑
    originalSaveData.call(this);
    
    // 同时上传到微信云
    if (typeof wx !== 'undefined' && wx.cloud) {
        WechatCloudService.getInstance().autoUpload().catch(err => {
            console.error('自动上传到微信云失败:', err);
        });
    }
};

// 添加获取上次保存时间的方法（如果不存在的话）
if (!MainUIManager.prototype.getLastSaveTime) {
    let lastSaveTime = Date.now();
    
    MainUIManager.prototype.getLastSaveTime = function() {
        return lastSaveTime;
    };
    
    const originalSaveDataWithTime = MainUIManager.prototype.saveData;
    MainUIManager.prototype.saveData = function() {
        lastSaveTime = Date.now();
        originalSaveDataWithTime.call(this);
    };
}