declare namespace mylib {
    abstract class UIBase extends eui.Component {
        isShow: boolean;
        private static _grouplist;
        constructor(skin?: string);
        groupname(): string;
        /**
        * 居中显示UI
        * @param view 居中显示对象
        * @returns void
        */
        center(view: egret.DisplayObject): void;
        /**
         * 添加事件监听，在调用show方法后，会自动调用该方法
         * @param
         */
        abstract addEvts(): void;
        /**
         * 移除事件监听，在调用close方法后，会自动调用该方法
         * @param
         */
        abstract rmEvts(): void;
        /**
         * 显示在指定层
         * @param parent 父容器
         * @param  index 显示层级
         */
        showAt(parent: egret.DisplayObjectContainer): void;
        /**
         * 关闭UI
         * 在关闭UI是，应该移除所有事件监听，缓动效果，停止动画播放
         * @param
         * @returns  void
         */
        close(): void;
        private __checkShowView(view);
        private __afterLoad(ok);
        showUILeft(view: any, time?: number): void;
        showUIRight(view: any, time?: number): void;
        showUIUp(view: any, time?: number): void;
        showUIDown(view: any, time?: number): void;
        showUIAlpha(view: any, time?: number): void;
    }
}
declare namespace mylib {
    class SingleOperation implements IOperation {
        protected _progressInfo: ProgressInfo;
        protected _onProgress: Function;
        protected _onComplete: Function;
        protected _thisObj: any;
        private _sTime;
        private _timer;
        private _autoStep;
        constructor();
        execute(onProgress: Function, onComplete: Function, thisObj: any): void;
        autoProgress(num: number): void;
        private onAutoProgress();
        notifyProgress(): void;
        notifyComplete(ok: any): void;
        stop(): void;
        protected clear(): void;
    }
}
declare namespace mylib {
    class GmGlobal {
        static VERSION: number;
        /** http通信模式 */
        static HTTP: string;
        /** 游戏是否隐藏 */
        static GAME_HIDDEN: boolean;
        /** 游戏帧率 */
        static GAME_FRAMERATE: number;
        /** 游戏根节点 */
        static root: egret.DisplayObjectContainer;
        /** 声音控制实例 */
        static sound: SoundManager;
        /** 服务器控制实例 */
        static server: ServerManager;
        /** 页面控制实例 */
        static page: PageManager;
        /** 游戏舞台宽度 */
        private static stageWidth;
        /** 游戏舞台高度 */
        private static stageHeight;
        /** 标记资源是否初始化好，游戏中如果需要资源初始化好后才能做操作，就是用该字段判断 */
        static isResInit: boolean;
        /** 游戏数据准备好 */
        static isDataInit: boolean;
        static bannerHeight: number;
        static bannerHas: boolean;
        static showBannerCnt: number;
        static init(): void;
        static initManager(): void;
        static initStageRect(width: any, height: any): void;
        /**
        * 上下铺满
        */
        static fullstage(view: egret.DisplayObject): void;
        /**
        * 底边对齐
        */
        static bottomstage(view: egret.DisplayObject): void;
        /**
        * 底边对齐
        */
        static topstage(view: egret.DisplayObject): void;
        /**
        * 截图
        */
        static cutImg(cmd: string, data: any, cb?: Function, thisObj?: any): void;
        static uiLayer: egret.DisplayObjectContainer;
        static loadingLayer: egret.DisplayObjectContainer;
        static noticeLayer: egret.DisplayObjectContainer;
        static myadLayer: egret.DisplayObjectContainer;
        static initRootLayers(): void;
    }
    /** 游戏运行环境类型 */
    class RuntimeType {
        static WEB: string;
        static NATIVE: string;
    }
    class Colors {
        static WHILE: number;
        static GREEN: number;
        static BLUE: number;
        static PURPLE: number;
        static ORANGE: number;
        static GOLDEN: number;
        static RED: number;
        static UI_NUM_COLOR: number;
        static QUNXIA: number;
        static HAOHAN: number;
    }
    class KeyBorardCode {
        static UP: number;
        static DOWN: number;
        static LEFT: number;
        static RIGHT: number;
        static ENTER: number;
        static SPACE: number;
        static SHIFT: number;
        static CTRL: number;
        static ALT: number;
        static ESC: number;
        static DELETE: number;
        static DEL: number;
        static char(c: any): any;
    }
}
declare namespace mylib {
    abstract class IMain extends egret.DisplayObjectContainer {
        private _isThemeOk;
        private _isResOk;
        constructor();
        private onAddToStage(event);
        private onVersionLoaded(json);
        private onThemeLoadComplete(e);
        private initGame();
        private enterMainView();
        private getQuery(data);
        abstract run(): void;
        abstract listen(): void;
        abstract getJumpView(data: any, curinfo: any): any;
    }
}
declare namespace mylib {
    class InitView extends UIBase {
        protected pTxt: eui.Label;
        private _cb;
        private _obj;
        constructor(cb: any, obj: any);
        showAt(p: egret.DisplayObjectContainer): void;
        private onResCfgLoaded();
        enterMain(): void;
        private onProgress(p);
        private onComplete(ok);
        private loginEnd(ok);
        addEvts(): void;
        rmEvts(): void;
        protected childrenCreated(): void;
        start(): void;
    }
}
declare namespace mylib {
    class LoadGroupRes extends SingleOperation {
        private _progressName;
        private _group;
        constructor(group: string, progressName: string);
        execute(onProgress: Function, onComplete: Function, thisObj: any): void;
        private LoadPackage(ok);
        private LoadMp3Package(ok);
        private onResLoadProgress(e);
        private onResLoadComplete(e);
        private onResLoadError(e);
        private onItemLoadError(e);
    }
}
declare function pfCommand(cmd: string, data: any, cb: Function, thisObj: any): any;
declare namespace mylib {
    class MyGameBanner extends UIBase {
        constructor();
        showAt(p: egret.DisplayObjectContainer): void;
        addEvts(): void;
        rmEvts(): void;
    }
}
declare namespace mylib {
    class PFConst {
        static RES_ROOT: string;
        static URL_ARGS: string;
        static APP_JUMP: Array<String>;
        static PF_CONST: {};
        static SUBPACK: {};
        static IPHONEX: number;
        static LOGINACCOUNT: number;
        static FIXTOP: number;
        static BANNER_HEIGHT: number;
        static updatePFData(): void;
    }
}
declare namespace mylib {
    class TexiaoTuijian {
        private btn;
        private idx;
        private timerid;
        static Idx: number;
        static create(ubtn: any): TexiaoTuijian;
        private constructor();
        effect1(): void;
        changeGame(): void;
        rmEvts(): void;
        private onIcon(e);
    }
    class TexiaoCount {
        private lable;
        private score;
        private sObj;
        private tscale;
        constructor(lable: any, num: any);
        getscore(): number;
        reset(num: any): void;
        add(num: any): void;
        private onUping();
        private onUpEnd();
    }
}
declare namespace mylib {
    class ThemeAdapter implements eui.IThemeAdapter {
        /**
         * 解析主题
         * @param url 待解析的主题url
         * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
         * @param onError 解析失败回调函数，示例：errorFunc():void;
         * @param thisObject 回调的this引用
         */
        getTheme(url: string, onSuccess: Function, onError: Function, thisObject: any): void;
    }
}
declare namespace mylib {
    class WaitingNoneView extends UIBase {
        private static _instance;
        static getInstance(): WaitingNoneView;
        constructor();
        showit(): void;
        hideit(): void;
        showAt(p: egret.DisplayObjectContainer): void;
        addEvts(): void;
        rmEvts(): void;
    }
    class LoadingView extends UIBase {
        private static _instance;
        static getInstance(): LoadingView;
        private _pRect1;
        private _pRect2;
        private _Txt;
        _view: any;
        constructor();
        showit(loadview: any): void;
        hideit(): any;
        showAt(p: egret.DisplayObjectContainer): void;
        addEvts(): void;
        rmEvts(): void;
    }
}
declare namespace mylib {
    class PageManager {
        private _cb;
        private _obj;
        private _shareinfo;
        constructor();
        setPage(shareinfo?: {}, jumpcb?: any, jumpobj?: any): void;
        jump(data: any, createViewcb: any, obj: any): void;
    }
}
declare namespace mylib {
    class Game {
        constructor(root: egret.DisplayObjectContainer);
        run(): void;
        private onActivate();
        private onDeActivate();
        private bgStateChange();
        /**
         * 根据舞台大小调整地图等相关设置
         * @param
         * @returns void
         */
        static adjustSize(stageWidth: number, stageHeight: number): void;
    }
}
declare namespace mylib {
    class SoundManager {
        private _sounds;
        private _bEffectState;
        private _bShakeState;
        private _musicId;
        private _bgChannel;
        private _bgPosition;
        private _effectChannels;
        constructor();
        /**
         * 停止所有音效
         */
        stop(): void;
        /**
         * 开启所有音效
         */
        start(): void;
        private startBgm();
        /**
         * 播放背景音乐
         * @param id 音乐ID
         */
        playBgm(id: string, volume?: number, postition?: number): void;
        clearBgm(): void;
        private stopBgm();
        /**
         * 播放音效
         * @param id 声音ID
         * @param volume 音量0-1
         * @param postition 起始播放位置
         */
        playSoundEffect(id: string, volume?: number, postition?: number, url?: string): void;
        preloadSound(id: string): void;
        private loadSound(id, idurl, volume, position, isBgMusic?);
        private playSound(id, sound, volume, position);
        private addPlayingEffect(id, ch);
        private removeEffectChannel(ch);
        /**
         * 清除播放中的音效
         * @param id
         */
        clearEffects(id: string): void;
        /**
         * 清除所有播放中的音效
         */
        clearAllEffects(): void;
        private onEffectPlayEnd(e);
        private playBgMusic(sound);
        private clearChannelEvent();
        private onBGMPlauEnd();
        private initSoundState();
        isSoundOpen(): boolean;
        switchSoundOpen(): boolean;
        isShakeOpen(): boolean;
        switchShakeOpen(): boolean;
        playShake(type?: number): void;
    }
}
declare namespace mylib {
    class Utils {
        private static _disableFiles;
        private static _liangFiles;
        constructor();
        /**
        * 格式化到计时
        * @param time 秒
        * @param formatType 格式化样式(D(日)h(时)m(分)s(秒))
        * @returns string
        */
        static formatTime(time: number, formatType: string): string;
        static getCacheNumber(name: string): number;
        static setCacheNumber(name: string, num: number): void;
        static delCache(name: string): void;
        static Post(url: string, params?: any, obj?: any, onGetComplete?: any, onGetIOError?: any, onGetProgress?: any): void;
        static distence(x1: number, y1: number, x2: number, y2: number): number;
        static random(start: number, end: number): number;
        static getStrlen(str: string): number;
        static getRandChar(num: any): string;
        static getYoukeUid(): string;
        /**
         * 闪动一下
         * @param object 提示内容
         */
        static SfObject(obj: any, time?: number, liang?: boolean, scale?: number, loop?: boolean): void;
        /**
     * 滚动对象
     * @param object 提示内容
     */
        static MoveObject(parent: any, pool: any, obj: any, waittime?: number, movetime?: number, toattr?: {}, onEnd?: Function, thisObj?: any, ...args: any[]): void;
        static MoveObjectEnd(parent: any, pool: any, obj: any, onEnd?: Function, thisObj?: any, ...args: any[]): void;
        /**
         * 滚动文字
         * @param text 提示内容
         */
        static MoveText(parent: any, pool: any, text: string, fromattr?: any, waittime?: number, movetime?: number, toattr?: {}, onEnd?: Function, thisObj?: any, ...args: any[]): void;
        static getRgbFilter(r: any, g: any, b: any, alpha?: number): any[];
        static getMergeRgbFilter(r: any, g: any, b: any, alpha?: number): egret.ColorMatrixFilter[];
        static getDisabledFilter(): any[];
        static getLiangFilter(): any[];
        static loadGroup(group: any, onComplete?: Function, thisObj?: any, onProgress?: Function): void;
        static getEmptyFilter(): any[];
        private static CreateSuipian(suipianpool, imgsrc, width?);
        static showBreakSuipian(x: number, y: number, imgsrc: any, parent: any, width: any, pool: any): void;
    }
}
declare namespace mylib {
    class EvtBus {
        private static _evt;
        static addListener(type: string, cb: Function, thisObj: any): void;
        static rmListener(type: string, cb: Function, thisObj: any): void;
        static dispatchEvt(type: string, data?: any): void;
    }
}
declare namespace mylib {
    class EvtType {
        /** 前后台状态改变 */
        static HIDDE_CHANGE: string;
        /**preload资源加载完毕 */
        static RES_PRELOAD: string;
        /** socket关闭 */
        static S_CLOSE: string;
        /** socket错误 */
        static S_ERROR: string;
        /** 游戏服重连成功 */
        static S_RECONNECT: string;
        /** 初始化完成 */
        static INITED: string;
        /** 登陆成功服务器成功  */
        static LOGIN_GAME: string;
        /** 跨天事件 */
        static NEXTDAY: string;
        /** JSON Data更新 */
        static M_JUPD: string;
        static ITEM_UPD: string;
        /**监听键盘事件 */
        static KEY_BOARD_DOWN: string;
        static KEY_BOARD_UP: string;
    }
}
declare namespace mylib {
    class McDataFactory {
        private _mcDataFactory;
        resId: string;
        dir: string;
        ref: number;
        constructor(movieClipDataFactory: egret.MovieClipDataFactory, resId: string, dir: string);
        readonly mcDataFactory: egret.MovieClipDataFactory;
        release(): void;
        destroy(): void;
    }
}
declare namespace mylib {
    class MovieClipDataLoader {
        resId: string;
        dir: string;
        loadedCb: Function;
        loadedObj: any;
        cbs: any[];
        data: any;
        txtr: egret.Texture;
        constructor(resId: string, dir: string, loadedCallback: Function, loadedObj: any);
        bingCb(cb: Function, thisObj: any): void;
        unbindCb(cb: Function, thisObj: any): void;
        cbLength(): number;
        indexOf(cb: Function, thisObj: any): number;
        doCb(factory: McDataFactory): void;
        private onPngLoaded(txtr);
        private onJsonLoaded(data);
        private checkComplete();
        clear(): void;
    }
}
declare namespace mylib {
    class MovieClipEx extends egret.DisplayObjectContainer {
        private _mc;
        private _effectId;
        private _isPlay;
        private _loop;
        private _cb;
        private _thisObj;
        private _args;
        constructor(effectId: string);
        readonly effectId: string;
        readonly isPlay: boolean;
        private onEffectLoaded(mcFactory);
        play(loop?: number, cb?: Function, thisObj?: any, ...args: any[]): void;
        private onComplete();
        stop(): void;
        clear(destroyRes?: boolean): void;
    }
}
declare namespace mylib {
    class ResManager {
        private static _instance;
        private _mcDataFts;
        private _mcDataLds;
        private _mapRefer;
        private _urlRefer;
        private _uiLayer;
        private _uiLoadCb;
        private _fightMapDisposeTimer;
        private _fubenMapDisposeTimer;
        constructor();
        static getInstance(): ResManager;
        init(uiLayer: egret.DisplayObjectContainer): void;
        getMovieClipData(dir: string, resId: string, cb: Function, target: any): void;
        /**
         * 保持动画引用
         */
        retainMCData(resId: string): void;
        /**
         * 释放动画资源
         *
         * resId 动画资源ID
         * destroy 是否销毁资源（如果动画常用，释放时选择false)
         *
         */
        releaseMCData(resId: string, destroy: boolean, cb: Function, thisObj: any): void;
        /**
         * 释放引用为0的动画资源
         */
        destroyUnuseMCData(): void;
        /**
         *释放模型用到的特效，
         * @param modelId 模型ID
         * @returns void
         */
        destroyModelEffect(modelId: string): void;
        /**
         * 查询为未使用的动画数量
         */
        getUnuseMcDataNum(): number;
        /**
         * 停止动画加载
         */
        stopMovieClipLoad(resId: string, cb: Function, thisObj: any): void;
        private movieClipDataLoaded(loader);
    }
}
declare namespace mylib {
    interface IOperation {
        /**
         * 执行操作
         * @param onProgress 进度回调
         * @param onComplete 完成回调
         * @param thisObj 回调this
         */
        execute(onProgress: Function, onComplete: Function, thisObj: any): void;
        /**
         * 停止操作
         */
        stop(): void;
    }
}
declare namespace mylib {
    class ProgressInfo {
        name: string;
        current: number;
        total: number;
        childProgress: ProgressInfo;
        constructor();
    }
}
declare namespace mylib {
    class AssetAdapter implements eui.IAssetAdapter {
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         */
        getAsset(source: string, compFunc: Function, thisObject: any): void;
    }
}
declare namespace mylib {
    class ServerManager {
        private _host;
        private _host1;
        private _host2;
        private _roleId;
        private _sign;
        private _cb;
        private _obj;
        private _logindata;
        private _logining;
        constructor();
        private initLogin();
        loginout(): void;
        login(loginCb?: any, loginObj?: any): void;
        loginYouke(loginCb?: any, loginObj?: any): void;
        private LoginRole(data);
        private tryLogin();
        private GetRoleFail(event);
        private GetRoleOk(event);
        Request(api: string, params?: any, obj?: any, onGetComplete?: any, onGetIOError?: any, onGetProgress?: any): void;
        reportGameData(id: number, subid: number, num?: number): void;
        getRoleId(): number;
    }
}
