var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var mylib;
(function (mylib) {
    var UIBase = (function (_super) {
        __extends(UIBase, _super);
        function UIBase(skin) {
            if (skin === void 0) { skin = null; }
            var _this = _super.call(this) || this;
            if (skin) {
                _this.skinName = skin;
            }
            return _this;
        }
        UIBase.prototype.groupname = function () {
            return "";
        };
        /**
        * 居中显示UI
        * @param view 居中显示对象
        * @returns void
        */
        UIBase.prototype.center = function (view) {
            view.x = Math.floor((this.width - view.width) / 2);
            view.y = Math.floor((this.height - view.height) / 2);
        };
        /**
         * 显示在指定层
         * @param parent 父容器
         * @param  index 显示层级
         */
        UIBase.prototype.showAt = function (parent) {
            if (this.isShow)
                return;
            this.isShow = true;
            this.height = parent.height;
            this.width = parent.width;
            parent.addChildAt(this, 0);
            this.addEvts();
        };
        /**
         * 关闭UI
         * 在关闭UI是，应该移除所有事件监听，缓动效果，停止动画播放
         * @param
         * @returns  void
         */
        UIBase.prototype.close = function () {
            if (!this.isShow)
                return;
            this.rmEvts();
            this.isShow = false;
            this.parent.removeChild(this);
        };
        UIBase.prototype.__checkShowView = function (view) {
            var group = view.groupname();
            if (group == "") {
                view.showAt(mylib.GmGlobal.uiLayer);
            }
            else if (UIBase._grouplist[group]) {
                view.showAt(mylib.GmGlobal.uiLayer);
            }
            else {
                mylib.LoadingView.getInstance().showit(view);
                mylib.Utils.loadGroup(group, this.__afterLoad, this);
                return false;
            }
            return true;
        };
        UIBase.prototype.__afterLoad = function (ok) {
            if (ok) {
                var view = mylib.LoadingView.getInstance().hideit();
                var group = view.groupname();
                UIBase._grouplist[group] = 1;
                this.showUIRight(view, 200);
            }
            else {
                mylib.LoadingView.getInstance().hideit();
            }
        };
        // 自己往右走 显示左边的
        UIBase.prototype.showUILeft = function (view, time) {
            if (time === void 0) { time = 400; }
            if (!this.__checkShowView(view)) {
                return;
            }
            egret.Tween.get(this).to({ x: this.width }, time).call(this.close, this);
            mylib.WaitingNoneView.getInstance().showit();
            egret.Tween.get(mylib.WaitingNoneView.getInstance()).wait(time).call(mylib.WaitingNoneView.getInstance().hideit, mylib.WaitingNoneView.getInstance());
        };
        // 自己不动 右边的拉过来
        UIBase.prototype.showUIRight = function (view, time) {
            if (time === void 0) { time = 400; }
            if (!this.__checkShowView(view)) {
                return;
            }
            view.x = this.width;
            this.parent.setChildIndex(this, 0);
            egret.Tween.get(this).wait(time).call(this.close, this);
            egret.Tween.get(view).to({ x: 0 }, time);
            mylib.WaitingNoneView.getInstance().showit();
            egret.Tween.get(mylib.WaitingNoneView.getInstance()).wait(time).call(mylib.WaitingNoneView.getInstance().hideit, mylib.WaitingNoneView.getInstance());
        };
        // 自己不动 上边的拉过来
        UIBase.prototype.showUIUp = function (view, time) {
            if (time === void 0) { time = 400; }
            if (!this.__checkShowView(view)) {
                return;
            }
            view.y = -this.height;
            this.parent.setChildIndex(this, 0);
            egret.Tween.get(this).wait(time).call(this.close, this);
            egret.Tween.get(view).to({ y: 0 }, time);
            mylib.WaitingNoneView.getInstance().showit();
            egret.Tween.get(mylib.WaitingNoneView.getInstance()).wait(time).call(mylib.WaitingNoneView.getInstance().hideit, mylib.WaitingNoneView.getInstance());
        };
        // 自己外上走 显示下面的
        UIBase.prototype.showUIDown = function (view, time) {
            if (time === void 0) { time = 400; }
            if (!this.__checkShowView(view)) {
                return;
            }
            egret.Tween.get(this).to({ y: -this.height }, time).call(this.close, this);
            mylib.WaitingNoneView.getInstance().showit();
            egret.Tween.get(mylib.WaitingNoneView.getInstance()).wait(time).call(mylib.WaitingNoneView.getInstance().hideit, mylib.WaitingNoneView.getInstance());
        };
        // 渐变跳转
        UIBase.prototype.showUIAlpha = function (view, time) {
            if (time === void 0) { time = 400; }
            if (!this.__checkShowView(view)) {
                return;
            }
            egret.Tween.get(this).to({ alpha: 0 }, time).call(this.close, this);
            mylib.WaitingNoneView.getInstance().showit();
            egret.Tween.get(mylib.WaitingNoneView.getInstance()).wait(time).call(mylib.WaitingNoneView.getInstance().hideit, mylib.WaitingNoneView.getInstance());
        };
        UIBase._grouplist = {};
        return UIBase;
    }(eui.Component));
    mylib.UIBase = UIBase;
    __reflect(UIBase.prototype, "mylib.UIBase");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var SingleOperation = (function () {
        function SingleOperation() {
            this._timer = 0;
            this._progressInfo = new mylib.ProgressInfo();
        }
        SingleOperation.prototype.execute = function (onProgress, onComplete, thisObj) {
            this._onProgress = onProgress;
            this._onComplete = onComplete;
            this._thisObj = thisObj;
            if (true)
                this._sTime = egret.getTimer();
        };
        SingleOperation.prototype.autoProgress = function (num) {
            this._progressInfo.total = 100;
            this._autoStep = 100 / num;
            this._timer = egret.setInterval(this.onAutoProgress, this, 0);
        };
        SingleOperation.prototype.onAutoProgress = function () {
            this._progressInfo.current += this._autoStep;
            if (this._progressInfo.current > 100)
                this._progressInfo.current = 100;
            this.notifyProgress();
        };
        SingleOperation.prototype.notifyProgress = function () {
            if (this._onProgress != null) {
                this._onProgress.call(this._thisObj, this._progressInfo);
            }
            if (this._progressInfo.total == this._progressInfo.current) {
                egret.clearInterval(this._timer);
                this._timer = 0;
            }
        };
        SingleOperation.prototype.notifyComplete = function (ok) {
            if (true) {
                var uTime = egret.getTimer() - this._sTime;
                console.log(this._progressInfo.name + " 消耗时间 " + uTime);
            }
            if (this._timer != 0) {
                egret.clearInterval(this._timer);
                this._timer = 0;
            }
            if (this._onComplete != null)
                this._onComplete.call(this._thisObj, ok);
            this.clear();
        };
        SingleOperation.prototype.stop = function () {
        };
        SingleOperation.prototype.clear = function () {
            this._onProgress = null;
            this._onComplete = null;
            this._thisObj = null;
        };
        return SingleOperation;
    }());
    mylib.SingleOperation = SingleOperation;
    __reflect(SingleOperation.prototype, "mylib.SingleOperation", ["mylib.IOperation"]);
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var GmGlobal = (function () {
        function GmGlobal() {
        }
        GmGlobal.init = function () {
            GmGlobal.VERSION = window['VERSION'] || 1;
            GmGlobal.HTTP = window['HTTP'] || 'https:';
        };
        GmGlobal.initManager = function () {
            GmGlobal.sound = new mylib.SoundManager();
            GmGlobal.server = new mylib.ServerManager();
            GmGlobal.page = new mylib.PageManager();
        };
        GmGlobal.initStageRect = function (width, height) {
            GmGlobal.stageWidth = width;
            GmGlobal.stageHeight = height;
        };
        /**
        * 上下铺满
        */
        GmGlobal.fullstage = function (view) {
            view.y = 0 - GmGlobal.uiLayer.y;
            view.height = GmGlobal.stageHeight;
            view.x = 0 - GmGlobal.uiLayer.x;
            view.width = GmGlobal.stageWidth;
        };
        /**
        * 底边对齐
        */
        GmGlobal.bottomstage = function (view) {
            view.y = GmGlobal.stageHeight - view.height - GmGlobal.uiLayer.y - view.anchorOffsetY;
        };
        /**
        * 底边对齐
        */
        GmGlobal.topstage = function (view) {
            view.y = 0 - GmGlobal.uiLayer.y;
        };
        /**
        * 截图
        */
        GmGlobal.cutImg = function (cmd, data, cb, thisObj) {
            if (cb === void 0) { cb = null; }
            if (thisObj === void 0) { thisObj = null; }
            data.x = data.x / GmGlobal.stageWidth;
            data.y = (data.y + GmGlobal.uiLayer.y) / GmGlobal.stageHeight;
            data.width = data.width / GmGlobal.stageWidth;
            data.height = data.height / GmGlobal.stageHeight;
            pfCommand(cmd, data, cb, thisObj);
        };
        GmGlobal.initRootLayers = function () {
            GmGlobal.uiLayer = new egret.DisplayObjectContainer();
            GmGlobal.loadingLayer = new egret.DisplayObjectContainer();
            GmGlobal.loadingLayer.touchEnabled = false;
            GmGlobal.noticeLayer = new egret.DisplayObjectContainer();
            GmGlobal.noticeLayer.touchEnabled = false;
            GmGlobal.myadLayer = new egret.DisplayObjectContainer();
            GmGlobal.myadLayer.touchEnabled = true;
            GmGlobal.uiLayer.y = 0;
            GmGlobal.uiLayer.width = GmGlobal.stageWidth;
            if (mylib.PFConst.IPHONEX > 0) {
                GmGlobal.uiLayer.y = 70;
                GmGlobal.uiLayer.height = GmGlobal.stageHeight - mylib.PFConst.BANNER_HEIGHT - GmGlobal.stageHeight * 0.03 - 70;
            }
            else if (GmGlobal.stageHeight > 1450) {
                GmGlobal.uiLayer.y = 70;
                GmGlobal.uiLayer.height = GmGlobal.stageHeight - mylib.PFConst.BANNER_HEIGHT - 70;
            }
            else {
                GmGlobal.uiLayer.height = GmGlobal.stageHeight - mylib.PFConst.BANNER_HEIGHT;
            }
            if (mylib.PFConst.FIXTOP > 0) {
                GmGlobal.uiLayer.y = mylib.PFConst.FIXTOP;
                GmGlobal.uiLayer.height = GmGlobal.stageHeight - mylib.PFConst.BANNER_HEIGHT - mylib.PFConst.FIXTOP;
            }
            GmGlobal.loadingLayer.y = 0;
            GmGlobal.loadingLayer.height = GmGlobal.stageHeight;
            GmGlobal.loadingLayer.width = GmGlobal.stageWidth;
            GmGlobal.noticeLayer.y = 0;
            GmGlobal.noticeLayer.height = GmGlobal.stageHeight;
            GmGlobal.noticeLayer.width = GmGlobal.stageWidth;
            if (mylib.PFConst.IPHONEX > 0) {
                GmGlobal.myadLayer.y = GmGlobal.stageHeight - 168 - GmGlobal.stageHeight * 0.03;
            }
            else {
                GmGlobal.myadLayer.y = GmGlobal.stageHeight - 168;
            }
            GmGlobal.myadLayer.height = 168;
            GmGlobal.myadLayer.width = GmGlobal.stageWidth;
            GmGlobal.myadLayer.visible = false;
            GmGlobal.root.addChild(GmGlobal.uiLayer);
            GmGlobal.root.addChild(GmGlobal.loadingLayer);
            GmGlobal.root.addChild(GmGlobal.noticeLayer);
            GmGlobal.root.addChild(GmGlobal.myadLayer);
        };
        /** 游戏是否隐藏 */
        GmGlobal.GAME_HIDDEN = false;
        /** 游戏帧率 */
        GmGlobal.GAME_FRAMERATE = 30;
        /** 标记资源是否初始化好，游戏中如果需要资源初始化好后才能做操作，就是用该字段判断 */
        GmGlobal.isResInit = false;
        /** 游戏数据准备好 */
        GmGlobal.isDataInit = false;
        // banner广告的高度
        GmGlobal.bannerHeight = 0;
        // 是否有banner广告
        GmGlobal.bannerHas = false;
        GmGlobal.showBannerCnt = 0;
        return GmGlobal;
    }());
    mylib.GmGlobal = GmGlobal;
    __reflect(GmGlobal.prototype, "mylib.GmGlobal");
    /** 游戏运行环境类型 */
    var RuntimeType = (function () {
        function RuntimeType() {
        }
        RuntimeType.WEB = "web";
        RuntimeType.NATIVE = "native";
        return RuntimeType;
    }());
    mylib.RuntimeType = RuntimeType;
    __reflect(RuntimeType.prototype, "mylib.RuntimeType");
    var Colors = (function () {
        function Colors() {
        }
        Colors.WHILE = 0xFFFFFF;
        Colors.GREEN = 0x26AA09;
        Colors.BLUE = 0x20A7EA;
        Colors.PURPLE = 0xFF5AEA;
        Colors.ORANGE = 0xEE912B;
        Colors.GOLDEN = 0xFFFF00;
        Colors.RED = 0xFF0000;
        Colors.UI_NUM_COLOR = 0x653524;
        Colors.QUNXIA = 0x0bb0fa;
        Colors.HAOHAN = 0xee433f;
        return Colors;
    }());
    mylib.Colors = Colors;
    __reflect(Colors.prototype, "mylib.Colors");
    var KeyBorardCode = (function () {
        function KeyBorardCode() {
        }
        KeyBorardCode.char = function (c) {
            return c.charCodeAt(0);
        };
        KeyBorardCode.UP = 38;
        KeyBorardCode.DOWN = 40;
        KeyBorardCode.LEFT = 37;
        KeyBorardCode.RIGHT = 39;
        KeyBorardCode.ENTER = 13;
        KeyBorardCode.SPACE = 32;
        KeyBorardCode.SHIFT = 16;
        KeyBorardCode.CTRL = 17;
        KeyBorardCode.ALT = 18;
        KeyBorardCode.ESC = 27;
        KeyBorardCode.DELETE = 46;
        KeyBorardCode.DEL = 110;
        return KeyBorardCode;
    }());
    mylib.KeyBorardCode = KeyBorardCode;
    __reflect(KeyBorardCode.prototype, "mylib.KeyBorardCode");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var IMain = (function (_super) {
        __extends(IMain, _super);
        function IMain() {
            var _this = _super.call(this) || this;
            _this._isThemeOk = false;
            _this._isResOk = false;
            //注入自定义的素材解析器
            egret.registerImplementation("eui.IAssetAdapter", new mylib.AssetAdapter());
            egret.registerImplementation("eui.IThemeAdapter", new mylib.ThemeAdapter());
            mylib.PFConst.updatePFData();
            mylib.GmGlobal.init();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        IMain.prototype.onAddToStage = function (event) {
            console.log("RES_ROOT:" + mylib.PFConst.RES_ROOT);
            mylib.Game.adjustSize(this.stage.stageWidth, this.stage.stageHeight);
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.onVersionLoaded(null);
        };
        IMain.prototype.onVersionLoaded = function (json) {
            // let versionControoler: GameVersionController = new GameVersionController(json);
            // RES.registerVersionController(versionControoler);
            this._isResOk = true;
            //加载皮肤文件
            var theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
            this.initGame();
        };
        IMain.prototype.onThemeLoadComplete = function (e) {
            e.target.removeEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
            this._isThemeOk = true;
            this.initGame();
        };
        //初始化游戏，显示初始化界面
        IMain.prototype.initGame = function () {
            if (!this._isResOk || !this._isThemeOk)
                return;
            console.log('run game');
            var game = new mylib.Game(this);
            game.run();
            if (true) {
                document.addEventListener("keydown", function (evt) {
                    console.log("evt.keyCode down:" + evt.keyCode);
                    mylib.EvtBus.dispatchEvt(mylib.EvtType.KEY_BOARD_DOWN, evt.keyCode);
                });
                document.addEventListener("keyup", function (evt) {
                    console.log("evt.keyCode up:" + evt.keyCode);
                    mylib.EvtBus.dispatchEvt(mylib.EvtType.KEY_BOARD_UP, evt.keyCode);
                });
            }
            new mylib.InitView(this.enterMainView, this).showAt(mylib.GmGlobal.loadingLayer);
        };
        // 进入首页
        IMain.prototype.enterMainView = function () {
            // 打开首页
            this.run();
            // 监听跳转参数
            pfCommand("query", {}, this.getQuery, this);
        };
        IMain.prototype.getQuery = function (data) {
            // console.log("login evnt "+JSON.stringify(data));
            mylib.GmGlobal.page.jump(data, this.getJumpView, this);
        };
        return IMain;
    }(egret.DisplayObjectContainer));
    mylib.IMain = IMain;
    __reflect(IMain.prototype, "mylib.IMain");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var InitView = (function (_super) {
        __extends(InitView, _super);
        function InitView(cb, obj) {
            var _this = _super.call(this) || this;
            _this._cb = cb;
            _this._obj = obj;
            return _this;
        }
        InitView.prototype.showAt = function (p) {
            _super.prototype.showAt.call(this, p);
            var rect = new eui.Rect(this.width, this.height, 0x0);
            rect.x = 0;
            rect.y = 0;
            this.addChild(rect);
            this.pTxt = new eui.Label();
            this.pTxt.textAlign = "center";
            this.pTxt.textColor = 0xa8a8a8;
            this.pTxt.stroke = 1;
            this.pTxt.width = 508;
            this.pTxt.height = 30;
            this.center(this.pTxt);
            this.pTxt.text = "正在启动";
            this.addChild(this.pTxt);
            this.start();
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onResCfgLoaded, this);
            RES.loadConfig(mylib.PFConst.RES_ROOT + "resource/default.res.json", mylib.PFConst.RES_ROOT + "resource/");
        };
        InitView.prototype.onResCfgLoaded = function () {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onResCfgLoaded, this);
            mylib.Utils.loadGroup("preload", this.onComplete, this, this.onProgress);
            this.pTxt.text = "正在初始化资源";
        };
        InitView.prototype.enterMain = function () {
            //标记资源初始化完成
            if (mylib.PFConst.APP_JUMP.length > 1) {
                new mylib.MyGameBanner().showAt(mylib.GmGlobal.myadLayer);
                mylib.GmGlobal.myadLayer.visible = true;
            }
            this._cb.call(this._obj);
            this.close();
        };
        InitView.prototype.onProgress = function (p) {
            if (p.childProgress) {
                var parcent;
                if (p.childProgress)
                    parcent = (p.current / p.total + p.childProgress.current / p.childProgress.total / p.total);
                else
                    parcent = p.current / p.total;
                {
                    this.pTxt.text = "正在初始化资源" + (Math.floor(parcent * 100)) + "%";
                }
            }
        };
        InitView.prototype.onComplete = function (ok) {
            console.log("aflter load preload res");
            mylib.GmGlobal.isResInit = true;
            // 连接服务器
            if (mylib.GmGlobal.server.getRoleId() == 0 && mylib.PFConst.LOGINACCOUNT > 0) {
                this.pTxt.text = "正在登陆账号";
                console.log("must login");
                mylib.GmGlobal.server.login(this.loginEnd, this);
                return;
            }
            this.enterMain();
        };
        InitView.prototype.loginEnd = function (ok) {
            if (mylib.GmGlobal.server.getRoleId() > 0) {
                this._obj.listen();
            }
            this.enterMain();
        };
        InitView.prototype.addEvts = function () {
        };
        InitView.prototype.rmEvts = function () {
        };
        InitView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        InitView.prototype.start = function () {
            this.pTxt.visible = true;
        };
        return InitView;
    }(mylib.UIBase));
    mylib.InitView = InitView;
    __reflect(InitView.prototype, "mylib.InitView");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var LoadGroupRes = (function (_super) {
        __extends(LoadGroupRes, _super);
        function LoadGroupRes(group, progressName) {
            var _this = _super.call(this) || this;
            _this._progressName = progressName;
            _this._group = group;
            return _this;
        }
        LoadGroupRes.prototype.execute = function (onProgress, onComplete, thisObj) {
            _super.prototype.execute.call(this, onProgress, onComplete, thisObj);
            this._progressInfo.name = this._progressName;
            this.notifyProgress();
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResLoadError, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResLoadProgress, this);
            if ((mylib.PFConst.SUBPACK[this._group] || 0) == 1) {
                // console.log("load package: " + this._group + " begin");
                pfCommand("pack", { name: this._group }, this.LoadPackage, this);
            }
            else if ((mylib.PFConst.SUBPACK[this._group + "_mp3"] || 0) == 1) {
                // console.log("load package: " + this._group + " begin");
                pfCommand("pack", { name: this._group + "_mp3" }, this.LoadMp3Package, this);
            }
            else {
                RES.loadGroup(this._group);
            }
        };
        LoadGroupRes.prototype.LoadPackage = function (ok) {
            if (ok) {
                if (mylib.PFConst.SUBPACK[this._group]) {
                    delete mylib.PFConst.SUBPACK[this._group];
                }
                if ((mylib.PFConst.SUBPACK[this._group + "_mp3"] || 0) == 1) {
                    // console.log("load package: " + this._group + " begin");
                    pfCommand("pack", { name: this._group + "_mp3" }, this.LoadMp3Package, this);
                }
                else {
                    RES.loadGroup(this._group);
                }
            }
            else {
                console.warn("load package: " + this._group + " failed");
                this.notifyComplete(false);
            }
        };
        LoadGroupRes.prototype.LoadMp3Package = function (ok) {
            if (ok) {
                if (mylib.PFConst.SUBPACK[this._group + "_mp3"]) {
                    delete mylib.PFConst.SUBPACK[this._group + "_mp3"];
                }
                RES.loadGroup(this._group);
            }
            else {
                console.warn("load package: " + this._group + " failed");
                this.notifyComplete(false);
            }
        };
        LoadGroupRes.prototype.onResLoadProgress = function (e) {
            this._progressInfo.current = e.itemsLoaded;
            this._progressInfo.total = e.itemsTotal;
            this.notifyProgress();
        };
        LoadGroupRes.prototype.onResLoadComplete = function (e) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResLoadProgress, this);
            this.notifyComplete(true);
        };
        LoadGroupRes.prototype.onResLoadError = function (e) {
            console.warn("Group: " + e.groupName + " load failed");
            //跳过错误，继续
            this.notifyComplete(false);
        };
        LoadGroupRes.prototype.onItemLoadError = function (e) {
            console.warn("url: " + e.resItem.url + " load failed");
        };
        return LoadGroupRes;
    }(mylib.SingleOperation));
    mylib.LoadGroupRes = LoadGroupRes;
    __reflect(LoadGroupRes.prototype, "mylib.LoadGroupRes");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var MyGameBanner = (function (_super) {
        __extends(MyGameBanner, _super);
        function MyGameBanner() {
            return _super.call(this) || this;
        }
        MyGameBanner.prototype.showAt = function (p) {
            _super.prototype.showAt.call(this, p);
            // if (PFConst.APP_JUMP.length < 2)
            // {
            // 	return;
            // }
            // var group=new eui.Group();
            // var rect=new eui.Rect(this.width, this.height, 0xEAEAEB);
            // rect.ellipseHeight=48;
            // rect.ellipseWidth=48;
            // rect.alpha=0.4;
            // group.addChild(rect);
            // var num = Math.floor(this.width/144);
            // if (num > PFConst.APP_JUMP.length)
            // {
            // 	num = PFConst.APP_JUMP.length;
            // }
            // var offx = Math.floor( (this.width - num*144 + 24)/2);
            // rect.width = this.width - offx*2 + 48;
            // rect.x = offx - 24;
            // for (var i=0; i < PFConst.APP_JUMP.length; i++)
            // {
            // 	var img = new eui.Image(PFConst.APP_JUMP[i].toString().split(":")[0] + "_png");
            // 	img.x = i*144 + offx;
            // 	img.y = 24;
            // 	img.width=120;
            // 	img.height=120;
            // 	group.addChild(img);
            // }
            // if(PFConst.APP_JUMP.length > num)
            // {
            // 	rect.width = 144*PFConst.APP_JUMP.length;
            // 	rect.x=0;
            // 	rect.ellipseHeight=0;
            // 	rect.ellipseWidth=0;
            // }
            // this.addChild(group);
            // egret.setTimeout(this.merageImage, this, 4000);
        };
        // public merageImage()
        // {
        // 	var group = this.getChildAt(0);
        // 	var renderTexture2:egret.RenderTexture = new egret.RenderTexture();
        // 	renderTexture2.drawToTexture(group, new egret.Rectangle(0, 0, group.width, group.height));
        // 	var allimg=new egret.Bitmap();
        // 	allimg.texture = renderTexture2;
        // 	this.removeChild(group);
        // 	this.addChild(allimg);
        // 	var num = Math.floor(this.width/144);
        // 	if (num < PFConst.APP_JUMP.length)
        // 	{
        // 		var allimg2=new egret.Bitmap();
        // 		allimg2.texture = renderTexture2;
        // 		allimg2.x=group.width;
        // 		this.addChild(allimg2);
        // 		egret.setInterval(this.moveGames, this, 0);
        // 	}
        // }
        // private moveGames()
        // {
        // 	var allimg = this.getChildAt(0);
        // 	var allimg2 = this.getChildAt(1);
        // 	allimg.x -= 0.5;
        // 	allimg2.x -= 0.5;
        // 	if(allimg.x < allimg2.x && allimg2.x + allimg2.width < this.width)
        // 	{
        // 		allimg2.x=this.width-allimg2.width;
        // 		allimg.x =this.width;
        // 	}
        // 	else if(allimg2.x < allimg.x && allimg.x + allimg.width < this.width)
        // 	{
        // 		allimg.x=this.width-allimg.width;
        // 		allimg2.x =this.width;
        // 	}
        // }
        MyGameBanner.prototype.addEvts = function () {
            // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onIcon, this);
        };
        MyGameBanner.prototype.rmEvts = function () {
            // this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onIcon, this);
        };
        return MyGameBanner;
    }(mylib.UIBase));
    mylib.MyGameBanner = MyGameBanner;
    __reflect(MyGameBanner.prototype, "mylib.MyGameBanner");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var PFConst = (function () {
        function PFConst() {
        }
        PFConst.updatePFData = function () {
            PFConst.RES_ROOT = window['RES_ROOT'] || '';
            PFConst.URL_ARGS = window['URL_ARGS'] || null;
            PFConst.APP_JUMP = window['APP_JUMP'] || [];
            PFConst.PF_CONST = window['PF_CONST'] || {};
            PFConst.IPHONEX = window['IPHONEX'] || 0;
            var subpack = window['SUBPACK'] || [];
            for (var i = 0; i < subpack.length; i++) {
                PFConst.SUBPACK[subpack[i]] = 1;
            }
            PFConst.LOGINACCOUNT = window['LOGINACCOUNT'] || 0;
            PFConst.FIXTOP = window['FIXTOP'] || 0;
            PFConst.BANNER_HEIGHT = window['BANNER_HEIGHT'] || 250;
        };
        PFConst.APP_JUMP = []; //APP跳转
        PFConst.PF_CONST = {}; //APP跳转
        PFConst.SUBPACK = {}; //分包加载
        PFConst.IPHONEX = 0; //是不是iphoneX
        PFConst.LOGINACCOUNT = 0; //是否强制登陆
        PFConst.FIXTOP = 0; //固定顶
        PFConst.BANNER_HEIGHT = 250; //固定顶
        return PFConst;
    }());
    mylib.PFConst = PFConst;
    __reflect(PFConst.prototype, "mylib.PFConst");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    // 推荐特效
    var TexiaoTuijian = (function () {
        function TexiaoTuijian(ubtn) {
            this.idx = -1;
            this.timerid = -1;
            this.btn = ubtn;
            this.btn.visible = false;
            if (mylib.PFConst.APP_JUMP.length > 0) {
                if (TexiaoTuijian.Idx < 0) {
                    TexiaoTuijian.Idx = Math.floor(Math.random() * mylib.PFConst.APP_JUMP.length);
                }
                else {
                    TexiaoTuijian.Idx++;
                    TexiaoTuijian.Idx = TexiaoTuijian.Idx % mylib.PFConst.APP_JUMP.length;
                }
                this.idx = TexiaoTuijian.Idx;
                this.btn.source = (mylib.PFConst.APP_JUMP[this.idx].toString().split(":")[0] + "_png");
            }
            if (this.idx < 0)
                return;
        }
        TexiaoTuijian.create = function (ubtn) {
            return new TexiaoTuijian(ubtn);
        };
        TexiaoTuijian.prototype.effect1 = function () {
            if (mylib.PFConst.APP_JUMP.length > 0) {
                this.btn.visible = true;
                this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onIcon, this);
                this.timerid = egret.setInterval(this.changeGame, this, 5000);
            }
        };
        TexiaoTuijian.prototype.changeGame = function () {
            TexiaoTuijian.Idx++;
            TexiaoTuijian.Idx = TexiaoTuijian.Idx % mylib.PFConst.APP_JUMP.length;
            this.idx = TexiaoTuijian.Idx;
            this.btn.source = (mylib.PFConst.APP_JUMP[this.idx].toString().split(":")[0] + "_png");
        };
        TexiaoTuijian.prototype.rmEvts = function () {
            if (this.idx < 0)
                return;
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onIcon, this);
            egret.clearInterval(this.timerid);
            this.timerid = -1;
        };
        TexiaoTuijian.prototype.onIcon = function (e) {
            if (this.idx < 0)
                return;
            var data = mylib.PFConst.APP_JUMP[this.idx].toString().split(":");
            if (data.length > 1) {
                pfCommand("jumpapp", { appid: data[1] }, null, null);
            }
            else {
                pfCommand("jumpapp", { appid: data[0] }, null, null);
            }
        };
        TexiaoTuijian.Idx = -1;
        return TexiaoTuijian;
    }());
    mylib.TexiaoTuijian = TexiaoTuijian;
    __reflect(TexiaoTuijian.prototype, "mylib.TexiaoTuijian");
    ;
    // 加数特效
    var TexiaoCount = (function () {
        function TexiaoCount(lable, num) {
            this.tscale = 1;
            this.lable = lable;
            this.sObj = { num: 0 };
            this.lable.text = String(num);
            this.score = parseInt(num);
            this.lable.scaleX = 1;
            this.lable.scaleY = 1;
            this.sObj.num = 0;
            this.tscale = 1;
        }
        TexiaoCount.prototype.getscore = function () {
            return this.score;
        };
        TexiaoCount.prototype.reset = function (num) {
            this.lable.scaleX = 1;
            this.lable.scaleY = 1;
            this.sObj.num = 0;
            this.tscale = 1;
            if (parseInt(num) > this.score) {
                this.add(parseInt(num) - this.score);
            }
            else {
                this.score = parseInt(num);
                this.lable.text = String(num);
            }
        };
        TexiaoCount.prototype.add = function (num) {
            if (num == 0) {
                return;
            }
            this.score += parseInt(num);
            this.sObj.num = parseInt(this.lable.text);
            egret.Tween.removeTweens(this.sObj);
            egret.Tween.removeTweens(this.lable);
            this.tscale += 0.1;
            if (this.tscale > 1.5) {
                this.tscale = 1.5;
            }
            if (this.lable.scaleX < this.tscale) {
                egret.Tween.get(this.lable).to({ scaleX: this.tscale, scaleY: this.tscale }, 500);
            }
            egret.Tween.get(this.sObj, { loop: false, onChange: this.onUping, onChangeObj: this })
                .to({ num: this.score }, 500).call(this.onUpEnd, this);
        };
        TexiaoCount.prototype.onUping = function () {
            this.lable.text = String(Math.floor(this.sObj.num));
        };
        TexiaoCount.prototype.onUpEnd = function () {
            egret.Tween.removeTweens(this.lable);
            egret.Tween.get(this.lable).to({ scaleX: 1, scaleY: 1 }, 500);
            this.tscale = 1;
        };
        return TexiaoCount;
    }());
    mylib.TexiaoCount = TexiaoCount;
    __reflect(TexiaoCount.prototype, "mylib.TexiaoCount");
    ;
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var ThemeAdapter = (function () {
        function ThemeAdapter() {
        }
        /**
         * 解析主题
         * @param url 待解析的主题url
         * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
         * @param onError 解析失败回调函数，示例：errorFunc():void;
         * @param thisObject 回调的this引用
         */
        ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
            var _this = this;
            function onResGet(e) {
                onSuccess.call(thisObject, e);
            }
            function onResError(e) {
                if (e.resItem.url == url) {
                    RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                    onError.call(thisObject);
                }
            }
            if (typeof generateEUI !== 'undefined') {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI);
                }, this);
            }
            else if (typeof generateEUI2 !== 'undefined') {
                RES.getResByUrl("resource/gameEui.json", function (data, url) {
                    window["JSONParseClass"]["setData"](data);
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateEUI2);
                    }, _this);
                }, this, RES.ResourceItem.TYPE_JSON);
            }
            else if (typeof generateJSON !== 'undefined') {
                if (url.indexOf(".exml") > -1) {
                    var dataPath = url.split("/");
                    dataPath.pop();
                    var dirPath = dataPath.join("/") + "_EUI.json";
                    if (!generateJSON.paths[url]) {
                        RES.getResByUrl(dirPath, function (data) {
                            window["JSONParseClass"]["setData"](data);
                            egret.callLater(function () {
                                onSuccess.call(thisObject, generateJSON.paths[url]);
                            }, _this);
                        }, this, RES.ResourceItem.TYPE_JSON);
                    }
                    else {
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, this);
                    }
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON);
                    }, this);
                }
            }
            else {
                RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
            }
        };
        return ThemeAdapter;
    }());
    mylib.ThemeAdapter = ThemeAdapter;
    __reflect(ThemeAdapter.prototype, "mylib.ThemeAdapter", ["eui.IThemeAdapter"]);
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var WaitingNoneView = (function (_super) {
        __extends(WaitingNoneView, _super);
        function WaitingNoneView() {
            return _super.call(this) || this;
        }
        WaitingNoneView.getInstance = function () {
            if (!this._instance) {
                this._instance = new WaitingNoneView();
                this._instance.showAt(mylib.GmGlobal.loadingLayer);
            }
            return this._instance;
        };
        WaitingNoneView.prototype.showit = function () {
            this.visible = true;
        };
        WaitingNoneView.prototype.hideit = function () {
            this.visible = false;
        };
        WaitingNoneView.prototype.showAt = function (p) {
            _super.prototype.showAt.call(this, p);
            var rect = new eui.Rect(this.width, this.height + 320, 0x0);
            rect.alpha = 0;
            rect.x = 0;
            rect.y = -70;
            this.addChild(rect);
        };
        WaitingNoneView.prototype.addEvts = function () {
        };
        WaitingNoneView.prototype.rmEvts = function () {
        };
        return WaitingNoneView;
    }(mylib.UIBase));
    mylib.WaitingNoneView = WaitingNoneView;
    __reflect(WaitingNoneView.prototype, "mylib.WaitingNoneView");
    var LoadingView = (function (_super) {
        __extends(LoadingView, _super);
        function LoadingView() {
            return _super.call(this) || this;
        }
        LoadingView.getInstance = function () {
            if (!this._instance) {
                this._instance = new LoadingView();
                this._instance.showAt(mylib.GmGlobal.loadingLayer);
            }
            return this._instance;
        };
        LoadingView.prototype.showit = function (loadview) {
            this._view = loadview;
            this.visible = true;
            var y = this.height / 2;
            this._pRect1.y = y;
            this._pRect2.y = y;
            egret.Tween.get(this._pRect1, { loop: true }).wait(100).to({ y: y - 50 }, 300).to({ y: y }, 300).wait(300);
            egret.Tween.get(this._pRect2, { loop: true }).wait(400).to({ y: y - 50 }, 300).to({ y: y }, 300);
            egret.Tween.get(this._Txt).wait(2000).to({ visible: true }, 100);
        };
        LoadingView.prototype.hideit = function () {
            this.visible = false;
            this._Txt.visible = false;
            egret.Tween.removeTweens(this._pRect1);
            egret.Tween.removeTweens(this._pRect2);
            egret.Tween.removeTweens(this._Txt);
            var view = this._view;
            this._view = null;
            return view;
        };
        LoadingView.prototype.showAt = function (p) {
            _super.prototype.showAt.call(this, p);
            var rect = new eui.Rect(this.width, this.height, 0x0);
            rect.x = 0;
            rect.y = 0;
            rect.alpha = 0;
            this.addChild(rect);
            var rect1 = new eui.Rect(30, 30, 0xFFD957);
            rect1.x = this.width / 2 - 40;
            rect1.y = this.height / 2;
            rect1.anchorOffsetX = 15;
            rect1.anchorOffsetY = 15;
            this.addChild(rect1);
            this._pRect1 = rect1;
            var rect2 = new eui.Rect(30, 30, 0x8CBBFF);
            rect2.x = this.width / 2 + 40;
            rect2.y = this.height / 2;
            rect2.anchorOffsetX = 15;
            rect2.anchorOffsetY = 15;
            this.addChild(rect2);
            this._pRect2 = rect2;
            this.addChild(rect);
            var text = new eui.Label("请检查网络是否正常");
            text.x = this.width / 2;
            text.size = 25;
            text.textColor = 0xff0000;
            text.fontFamily = "Microsoft YaHei";
            text.stroke = 1;
            text.strokeColor = 0xffffff;
            text.anchorOffsetX = text.width / 2;
            text.y = this.height / 2 + 50;
            this._Txt = text;
            this._Txt.visible = false;
            this.addChild(text);
        };
        LoadingView.prototype.addEvts = function () {
        };
        LoadingView.prototype.rmEvts = function () {
        };
        return LoadingView;
    }(mylib.UIBase));
    mylib.LoadingView = LoadingView;
    __reflect(LoadingView.prototype, "mylib.LoadingView");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var PageManager = (function () {
        function PageManager() {
            this._cb = null;
            this._obj = null;
            this._shareinfo = {};
        }
        PageManager.prototype.setPage = function (shareinfo, jumpcb, jumpobj) {
            if (shareinfo === void 0) { shareinfo = {}; }
            if (jumpcb === void 0) { jumpcb = null; }
            if (jumpobj === void 0) { jumpobj = null; }
            this._cb = jumpcb;
            this._obj = jumpobj;
            this._shareinfo = shareinfo;
            pfCommand("setsharepage", shareinfo, null, null);
        };
        PageManager.prototype.jump = function (data, createViewcb, obj) {
            if (this._cb == null || this._obj == null) {
                return;
            }
            var view = createViewcb.call(obj, data, this._shareinfo);
            if (view) {
                this._shareinfo = {};
                var cb = this._cb;
                var obj = this._obj;
                this._cb = null;
                this._obj = null;
                cb.call(obj, view);
            }
        };
        return PageManager;
    }());
    mylib.PageManager = PageManager;
    __reflect(PageManager.prototype, "mylib.PageManager");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var Game = (function () {
        function Game(root) {
            mylib.GmGlobal.root = root;
            mylib.GmGlobal.initStageRect(root.stage.stageWidth, root.stage.stageHeight);
            root.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
            root.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeActivate, this);
        }
        //开始游戏
        Game.prototype.run = function () {
            // 初始化层级
            mylib.GmGlobal.initRootLayers();
            // 初始化数据
            mylib.GmGlobal.initManager();
            Game.adjustSize(mylib.GmGlobal.root.stage.stageWidth, mylib.GmGlobal.root.stage.stageHeight);
            //监听浏览器状态改变
            var self = this;
            document.addEventListener("gamestatechange", function () {
                mylib.GmGlobal.GAME_HIDDEN = window['gameHidden'];
                self.bgStateChange();
            });
        };
        Game.prototype.onActivate = function () {
            mylib.GmGlobal.GAME_HIDDEN = false;
            this.bgStateChange();
        };
        Game.prototype.onDeActivate = function () {
            mylib.GmGlobal.GAME_HIDDEN = true;
            this.bgStateChange();
        };
        Game.prototype.bgStateChange = function () {
            mylib.EvtBus.dispatchEvt(mylib.EvtType.HIDDE_CHANGE);
            if (mylib.GmGlobal.GAME_HIDDEN) {
                mylib.GmGlobal.sound.stop();
                //IOS下，切到后台需要停止渲染
                if (egret.Capabilities.os == 'iOS') {
                    mylib.GmGlobal.root.stage.frameRate = 0.0000001;
                }
            }
            else {
                mylib.GmGlobal.sound.start();
                if (egret.Capabilities.os == 'iOS') {
                    mylib.GmGlobal.root.stage.frameRate = mylib.GmGlobal.GAME_FRAMERATE;
                }
            }
        };
        /**
         * 根据舞台大小调整地图等相关设置
         * @param
         * @returns void
         */
        Game.adjustSize = function (stageWidth, stageHeight) {
            mylib.GmGlobal.initStageRect(stageWidth, stageHeight);
            console.log("stageWidth:" + stageWidth);
            console.log("stageHeight:" + stageHeight);
        };
        return Game;
    }());
    mylib.Game = Game;
    __reflect(Game.prototype, "mylib.Game");
})(mylib || (mylib = {}));
// declare function playSound(url:string, volume:number);
var mylib;
(function (mylib) {
    var SoundManager = (function () {
        function SoundManager() {
            this._bEffectState = true; // 声音
            this._bShakeState = true; // 震动
            this._musicId = "";
            this._bgChannel = null;
            this._bgPosition = 0;
            this._sounds = {};
            this._effectChannels = {};
            this.initSoundState();
        }
        /**
         * 停止所有音效
         */
        SoundManager.prototype.stop = function () {
            this.stopBgm();
            this.clearAllEffects();
        };
        /**
         * 开启所有音效
         */
        SoundManager.prototype.start = function () {
            if (this._bEffectState) {
                this.startBgm();
            }
        };
        SoundManager.prototype.startBgm = function () {
            if (this._musicId != "")
                this.playBgm(this._musicId);
        };
        /**
         * 播放背景音乐
         * @param id 音乐ID
         */
        SoundManager.prototype.playBgm = function (id, volume, postition) {
            if (volume === void 0) { volume = 0.5; }
            if (postition === void 0) { postition = 0; }
            if (this._musicId == id && this._bgChannel) {
                return;
            }
            if (this._musicId != id) {
                this._bgPosition = postition;
            }
            this._musicId = id;
            if (this._bEffectState == false || mylib.GmGlobal.GAME_HIDDEN) {
                return;
            }
            if (this._bgChannel && this._bgChannel.volume > 0) {
                this.stopBgm();
            }
            var sound = this._sounds[id];
            if (!sound) {
                this.loadSound(id, id, volume, this._bgPosition, true);
            }
            else {
                this.playBgMusic(sound);
            }
        };
        SoundManager.prototype.clearBgm = function () {
            this.stopBgm();
            this._musicId = "";
        };
        // 暂停背景音乐
        SoundManager.prototype.stopBgm = function () {
            if (!this._bgChannel)
                return;
            this.clearChannelEvent();
            this._bgPosition = this._bgChannel.position;
            this._bgChannel.stop();
            this._bgChannel = null;
        };
        /**
         * 播放音效
         * @param id 声音ID
         * @param volume 音量0-1
         * @param postition 起始播放位置
         */
        SoundManager.prototype.playSoundEffect = function (id, volume, postition, url) {
            if (volume === void 0) { volume = 0.5; }
            if (postition === void 0) { postition = 0; }
            if (url === void 0) { url = ""; }
            if (mylib.GmGlobal.GAME_HIDDEN)
                return;
            if (!this._bEffectState)
                return;
            if (url == "") {
                url = id;
            }
            var sound = this._sounds[id];
            if (!sound) {
                this.loadSound(id, url, volume, postition);
            }
            else {
                if (this._effectChannels[id] && this._effectChannels[id].length > 0) {
                    this.playSoundEffect(id + "-", volume, postition, url);
                    return;
                }
                // console.log("play music : "+id);
                this.playSound(id, sound, volume, postition);
            }
        };
        SoundManager.prototype.preloadSound = function (id) {
            var sound = this._sounds[id];
            if (sound) {
                return;
            }
            var self = this;
            var loader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE, function loaded(e) {
                var sound = loader.data;
                self._sounds[id] = sound;
            }, this);
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            var url = mylib.PFConst.RES_ROOT + "resource/sound/" + id;
            if (id.indexOf("http") != -1) {
                //console.log(id);
                loader.load(new egret.URLRequest(id));
            }
            else {
                //console.log(url);
                loader.load(new egret.URLRequest(RES.getVersionController().getVirtualUrl(url)));
            }
        };
        SoundManager.prototype.loadSound = function (id, idurl, volume, position, isBgMusic) {
            if (isBgMusic === void 0) { isBgMusic = false; }
            var self = this;
            var loader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE, function loaded(e) {
                //console.log("load ok =  "+id);
                var sound = loader.data;
                self._sounds[id] = sound;
                if (isBgMusic) {
                    self.playBgMusic(sound);
                }
                else {
                    self.playSound(id, sound, volume, position);
                }
            }, this);
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            var url = mylib.PFConst.RES_ROOT + "resource/sound/" + idurl;
            if (idurl.indexOf("http") != -1) {
                //console.log(id);
                loader.load(new egret.URLRequest(idurl));
            }
            else {
                //console.log(url);
                loader.load(new egret.URLRequest(RES.getVersionController().getVirtualUrl(url)));
            }
        };
        SoundManager.prototype.playSound = function (id, sound, volume, position) {
            //console.log("play id =  "+id + "position = "+ position+ " length " + sound.length);
            var channel = sound.play(position, 1);
            channel.volume = volume;
            channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onEffectPlayEnd, this);
            this.addPlayingEffect(id, channel);
        };
        SoundManager.prototype.addPlayingEffect = function (id, ch) {
            var chs = this._effectChannels[id];
            if (!chs) {
                this._effectChannels[id] = [ch];
                // console.log("add effect : "+ id);
            }
            else {
                chs.push(ch);
            }
        };
        SoundManager.prototype.removeEffectChannel = function (ch) {
            for (var id in this._effectChannels) {
                var chs = this._effectChannels[id];
                var index = chs.indexOf(ch);
                if (index >= 0) {
                    chs.splice(index, 1);
                    // console.log("remove effect : "+ id);
                    break;
                }
            }
        };
        /**
         * 清除播放中的音效
         * @param id
         */
        SoundManager.prototype.clearEffects = function (id) {
            var chs = this._effectChannels[id];
            if (chs) {
                for (var i = 0; i < chs.length; i++) {
                    var ch = chs[i];
                    ch.removeEventListener(egret.Event.SOUND_COMPLETE, this.onEffectPlayEnd, this);
                    ch.stop();
                    ch = null;
                }
                delete this._effectChannels[id];
            }
        };
        /**
         * 清除所有播放中的音效
         */
        SoundManager.prototype.clearAllEffects = function () {
            for (var id in this._effectChannels) {
                this.clearEffects(id);
            }
        };
        SoundManager.prototype.onEffectPlayEnd = function (e) {
            var ch = e.target;
            ch.removeEventListener(egret.Event.SOUND_COMPLETE, this.onEffectPlayEnd, this);
            this.removeEffectChannel(e.target);
        };
        SoundManager.prototype.playBgMusic = function (sound) {
            if (this._bgChannel) {
                return;
            }
            this._bgChannel = sound.play(this._bgPosition, 1);
            this._bgChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onBGMPlauEnd, this);
            //缓动到正常音量
            this._bgChannel.volume = 1.0;
        };
        SoundManager.prototype.clearChannelEvent = function () {
            if (this._bgChannel) {
                this._bgChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onBGMPlauEnd, this);
            }
        };
        //背景音乐播放完，重头开始播放
        SoundManager.prototype.onBGMPlauEnd = function () {
            this.clearChannelEvent();
            this._bgPosition = 0;
            //清掉ch
            this._bgChannel.stop();
            this._bgChannel = null;
            var sound = this._sounds[this._musicId];
            if (sound) {
                this.playBgMusic(sound);
            }
        };
        //初始化本地声音设置
        SoundManager.prototype.initSoundState = function () {
            var soundState = mylib.Utils.getCacheNumber("soundstate");
            var bool = soundState == 0 ? true : false;
            this._bEffectState = bool;
        };
        //获取声音状态
        SoundManager.prototype.isSoundOpen = function () {
            var soundState = mylib.Utils.getCacheNumber("soundstate");
            return (soundState == 0 ? true : false);
        };
        //切换声音状态
        SoundManager.prototype.switchSoundOpen = function () {
            var soundState = mylib.Utils.getCacheNumber("soundstate");
            if (soundState == 0) {
                soundState = 1;
            }
            else {
                soundState = 0;
            }
            var bool = soundState == 0 ? true : false;
            this._bEffectState = bool;
            if (soundState > 0) {
                mylib.Utils.setCacheNumber("soundstate", soundState);
            }
            else {
                mylib.Utils.delCache("soundstate");
            }
            return bool;
        };
        //获取震动状态
        SoundManager.prototype.isShakeOpen = function () {
            var state = mylib.Utils.getCacheNumber("shakestate");
            return (state == 0 ? true : false);
        };
        //切换震动状态
        SoundManager.prototype.switchShakeOpen = function () {
            var state = mylib.Utils.getCacheNumber("shakestate");
            if (state == 0) {
                state = 1;
            }
            else {
                state = 0;
            }
            var bool = state == 0 ? true : false;
            this._bShakeState = bool;
            if (state > 0) {
                mylib.Utils.setCacheNumber("shakestate", state);
            }
            else {
                mylib.Utils.delCache("shakestate");
            }
            return bool;
        };
        // type=1 轻微 type=2重一点 type=3 长时间震动
        SoundManager.prototype.playShake = function (type) {
            if (type === void 0) { type = 1; }
            if (this._bShakeState == false) {
                return;
            }
            pfCommand("shake", { type: type }, null, null);
        };
        return SoundManager;
    }());
    mylib.SoundManager = SoundManager;
    __reflect(SoundManager.prototype, "mylib.SoundManager");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var Utils = (function () {
        function Utils() {
        }
        /**
        * 格式化到计时
        * @param time 秒
        * @param formatType 格式化样式(D(日)h(时)m(分)s(秒))
        * @returns string
        */
        Utils.formatTime = function (time, formatType) {
            var dd = Math.floor(time / 3600 / 24);
            time = time - dd * 3600 * 24;
            var hh = Math.floor(time / 3600);
            time = time - hh * 3600;
            var mm = Math.floor(time / 60);
            time = time - mm * 60;
            var ss = time % 60;
            var s = formatType.replace("D", dd.toString());
            if (hh < 10)
                s = s.replace("h", "0" + hh);
            else
                s = s.replace("h", hh.toString());
            if (mm < 10)
                s = s.replace("m", "0" + mm);
            else
                s = s.replace("m", mm.toString());
            if (ss < 10)
                s = s.replace("s", "0" + ss);
            else
                s = s.replace("s", ss.toString());
            return s;
        };
        Utils.getCacheNumber = function (name) {
            var data = egret.localStorage.getItem(name);
            var num = 0;
            if (data != null && data != "") {
                num = Number(data);
            }
            return num;
        };
        Utils.setCacheNumber = function (name, num) {
            egret.localStorage.setItem(name, num + "");
        };
        Utils.delCache = function (name) {
            egret.localStorage.removeItem(name);
        };
        Utils.Post = function (url, params, obj, onGetComplete, onGetIOError, onGetProgress) {
            if (params === void 0) { params = null; }
            if (obj === void 0) { obj = null; }
            if (onGetComplete === void 0) { onGetComplete = null; }
            if (onGetIOError === void 0) { onGetIOError = null; }
            if (onGetProgress === void 0) { onGetProgress = null; }
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(url, egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(params);
            if (obj) {
                if (onGetComplete) {
                    request.addEventListener(egret.Event.COMPLETE, onGetComplete, obj);
                }
                if (onGetIOError) {
                    request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, obj);
                }
                if (onGetProgress) {
                    request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, obj);
                }
            }
        };
        Utils.distence = function (x1, y1, x2, y2) {
            var sx = Math.abs(x1 - x2);
            var sy = Math.abs(y1 - y2);
            return Math.floor(Math.sqrt(sx * sx + sy * sy));
        };
        Utils.random = function (start, end) {
            var r = end - start + 1;
            return start + Math.floor(r * Math.random());
        };
        // 获取字符串长度 汉字算2个
        Utils.getStrlen = function (str) {
            var cnt = 0;
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 255) {
                    cnt += 2;
                }
                else {
                    cnt += 1;
                }
            }
            return cnt;
        };
        // 生成随机字符串
        Utils.getRandChar = function (num) {
            var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var pwd = "";
            for (var i = 0; i < num; i++) {
                pwd += chars[Math.floor(Math.random() * chars.length)];
            }
            return pwd;
        };
        // 生成随机的游客账号20随机数+毫秒时间戳
        Utils.getYoukeUid = function () {
            var accout = Utils.getRandChar(20);
            return accout + "_" + new Date().getTime();
        };
        /**
         * 闪动一下
         * @param object 提示内容
         */
        Utils.SfObject = function (obj, time, liang, scale, loop) {
            if (time === void 0) { time = 200; }
            if (liang === void 0) { liang = true; }
            if (scale === void 0) { scale = 1.5; }
            if (loop === void 0) { loop = false; }
            var tw = egret.Tween.get(obj, { loop: loop });
            if (liang) {
                tw.to({ scaleX: scale, scaleY: scale, filters: this.getLiangFilter() }, time)
                    .to({ scaleX: 1, scaleY: 1, filters: null }, time);
            }
            else {
                tw.to({ scaleX: scale, scaleY: scale }, time)
                    .to({ scaleX: 1, scaleY: 1 }, time);
            }
        };
        /**
     * 滚动对象
     * @param object 提示内容
     */
        Utils.MoveObject = function (parent, pool, obj, waittime, movetime, toattr, onEnd, thisObj) {
            if (waittime === void 0) { waittime = 200; }
            if (movetime === void 0) { movetime = 0; }
            if (toattr === void 0) { toattr = {}; }
            if (onEnd === void 0) { onEnd = null; }
            if (thisObj === void 0) { thisObj = null; }
            var args = [];
            for (var _i = 8; _i < arguments.length; _i++) {
                args[_i - 8] = arguments[_i];
            }
            var tw = egret.Tween.get(obj);
            if (waittime > 0) {
                tw.wait(waittime);
            }
            if (movetime > 0) {
                tw.to(toattr, movetime);
            }
            tw.call(Utils.MoveObjectEnd, Utils, [parent, pool, obj, onEnd, thisObj, args]);
        };
        Utils.MoveObjectEnd = function (parent, pool, obj, onEnd, thisObj) {
            if (onEnd === void 0) { onEnd = null; }
            if (thisObj === void 0) { thisObj = null; }
            var args = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                args[_i - 5] = arguments[_i];
            }
            if (pool) {
                pool.push(obj);
                obj.visible = false;
            }
            else {
                parent.removeChild(obj);
            }
            if (onEnd) {
                onEnd.call(thisObj, args);
            }
        };
        /**
         * 滚动文字
         * @param text 提示内容
         */
        Utils.MoveText = function (parent, pool, text, fromattr, waittime, movetime, toattr, onEnd, thisObj) {
            if (fromattr === void 0) { fromattr = {}; }
            if (waittime === void 0) { waittime = 200; }
            if (movetime === void 0) { movetime = 0; }
            if (toattr === void 0) { toattr = {}; }
            if (onEnd === void 0) { onEnd = null; }
            if (thisObj === void 0) { thisObj = null; }
            var args = [];
            for (var _i = 9; _i < arguments.length; _i++) {
                args[_i - 9] = arguments[_i];
            }
            var lable = null;
            if (pool && pool.length > 0) {
                lable = pool[0];
                pool.splice(0, 1);
                lable.visible = true;
                lable.text = text;
            }
            else {
                lable = new eui.Label(text);
                lable.stroke = 1;
                lable.textColor = 0xeaeaea;
                lable.fontFamily = "Microsoft YaHei";
                lable.touchEnabled = false;
                parent.addChild(lable);
            }
            lable.x = fromattr.x;
            lable.y = fromattr.y;
            lable.anchorOffsetX = lable.width / 2;
            lable.anchorOffsetY = lable.height / 2;
            lable.scaleX = 1;
            lable.scaleY = 1;
            lable.alpha = 1;
            this.MoveObject(parent, pool, lable, waittime, movetime, toattr, onEnd, thisObj, args);
        };
        // 纯色
        Utils.getRgbFilter = function (r, g, b, alpha) {
            if (alpha === void 0) { alpha = 1; }
            return [new egret.ColorMatrixFilter([
                    0, 0, 0, 0, r,
                    0, 0, 0, 0, g,
                    0, 0, 0, 0, b,
                    0, 0, 0, alpha, 0
                ])];
        };
        // 混合
        Utils.getMergeRgbFilter = function (r, g, b, alpha) {
            if (alpha === void 0) { alpha = 1; }
            var colorMatrix = [
                r / 255, 0, 0, 0, 0,
                0, g / 255, 0, 0, 0,
                0, 0, b / 255, 0, 0,
                0, 0, 0, alpha, 0
            ];
            return [new egret.ColorMatrixFilter(colorMatrix)];
        };
        Utils.getDisabledFilter = function () {
            if (!Utils._disableFiles) {
                var matrix = [
                    0.3, 0.4, 0, 0, 0,
                    0.3, 0.4, 0, 0, 0,
                    0.3, 0.4, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                Utils._disableFiles = [new egret.ColorMatrixFilter(matrix)];
            }
            return Utils._disableFiles;
        };
        Utils.getLiangFilter = function () {
            if (!Utils._liangFiles) {
                var matrix = [
                    1, 0, 0, 0, 100,
                    0, 1, 0, 0, 100,
                    0, 0, 1, 0, 100,
                    0, 0, 0, 1, 0
                ];
                Utils._liangFiles = [new egret.ColorMatrixFilter(matrix)];
            }
            return Utils._liangFiles;
        };
        // load res group
        Utils.loadGroup = function (group, onComplete, thisObj, onProgress) {
            if (onComplete === void 0) { onComplete = null; }
            if (thisObj === void 0) { thisObj = null; }
            if (onProgress === void 0) { onProgress = null; }
            var load = new mylib.LoadGroupRes(group, "加载资源..");
            load.execute(onProgress, onComplete, thisObj);
        };
        Utils.getEmptyFilter = function () {
            return [new egret.GlowFilter(0xEAEAEB, 0.5, 4, 4, 4, 4, false, true)];
        };
        Utils.CreateSuipian = function (suipianpool, imgsrc, width) {
            if (width === void 0) { width = 10; }
            for (var i = 0; i < suipianpool.length; i++) {
                if (suipianpool[i].visible == false) {
                    suipianpool[i].width = width;
                    suipianpool[i].height = width;
                    suipianpool[i].visible = true;
                    return suipianpool[i];
                }
            }
            var img = new egret.Bitmap(RES.getRes(imgsrc));
            img.width = width;
            img.height = width;
            suipianpool.push(img);
            return img;
        };
        Utils.showBreakSuipian = function (x, y, imgsrc, parent, width, pool) {
            var n = Math.ceil(Math.random() * 5) + 5;
            for (var i = 0; i < n; i++) {
                var img = this.CreateSuipian(pool, imgsrc[Math.floor(Math.random() * imgsrc.length)], width);
                img.x = x;
                img.y = y;
                img.rotation = 360 * Math.random();
                var r = 0.5 + Math.random() * 1.5;
                img.width *= r;
                img.height = img.width;
                parent.addChild(img);
                var funcChange = function () {
                    var t = (this.img.x - this.x) / this.sx / 1000;
                    this.img.y = this.y + t * t * 500 + t * this.sy * 4000;
                };
                var rnd = (Math.random() * 360);
                var t = 1000;
                var sy = 200.0 / r * Math.sin(rnd / 180.0 * 3.14) / t;
                var sx = 300.0 / r * Math.cos(rnd / 180.0 * 3.14) / t;
                egret.Tween.get(img, { onChange: funcChange, onChangeObj: { img: img, x: x, y: y, sx: sx, sy: sy } })
                    .to({ x: x + sx * t, width: 0, height: 0, }, t * r).to({ visible: false }, 1);
            }
        };
        return Utils;
    }());
    mylib.Utils = Utils;
    __reflect(Utils.prototype, "mylib.Utils");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var EvtBus = (function () {
        function EvtBus() {
        }
        EvtBus.addListener = function (type, cb, thisObj) {
            EvtBus._evt.addEventListener(type, cb, thisObj);
        };
        EvtBus.rmListener = function (type, cb, thisObj) {
            EvtBus._evt.removeEventListener(type, cb, thisObj);
        };
        EvtBus.dispatchEvt = function (type, data) {
            if (data === void 0) { data = null; }
            EvtBus._evt.dispatchEvent(new egret.Event(type, false, false, data));
        };
        EvtBus._evt = new egret.EventDispatcher();
        return EvtBus;
    }());
    mylib.EvtBus = EvtBus;
    __reflect(EvtBus.prototype, "mylib.EvtBus");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var EvtType = (function () {
        function EvtType() {
        }
        /** 前后台状态改变 */
        EvtType.HIDDE_CHANGE = "gm_hc";
        /**preload资源加载完毕 */
        EvtType.RES_PRELOAD = "res_preload";
        /** socket关闭 */
        EvtType.S_CLOSE = "GM_SCLOSE";
        /** socket错误 */
        EvtType.S_ERROR = "GM_SERROR";
        /** 游戏服重连成功 */
        EvtType.S_RECONNECT = "GM_RECONNECT";
        /** 初始化完成 */
        EvtType.INITED = "GM_INITED";
        /** 登陆成功服务器成功  */
        EvtType.LOGIN_GAME = "GM_LOGIN";
        /** 跨天事件 */
        EvtType.NEXTDAY = "NEXTDAY";
        /** JSON Data更新 */
        EvtType.M_JUPD = "M_JUPD_";
        EvtType.ITEM_UPD = "ITEM_UPD_";
        /**监听键盘事件 */
        EvtType.KEY_BOARD_DOWN = "KEY_BOARD_DOWN";
        EvtType.KEY_BOARD_UP = "KEY_BOARD_UP";
        return EvtType;
    }());
    mylib.EvtType = EvtType;
    __reflect(EvtType.prototype, "mylib.EvtType");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var McDataFactory = (function () {
        function McDataFactory(movieClipDataFactory, resId, dir) {
            this._mcDataFactory = movieClipDataFactory;
            this.resId = resId;
            this.dir = dir;
            this.ref = 0;
        }
        Object.defineProperty(McDataFactory.prototype, "mcDataFactory", {
            get: function () {
                this.ref++;
                return this._mcDataFactory;
            },
            enumerable: true,
            configurable: true
        });
        //释放引用
        McDataFactory.prototype.release = function () {
            this.ref--;
            if (this.ref < 0) {
                this.ref = 0;
            }
        };
        //释放资源
        McDataFactory.prototype.destroy = function () {
            RES.destroyRes(this.dir + this.resId + ".json");
            RES.destroyRes(this.dir + this.resId + ".png");
            this._mcDataFactory = null;
            this.resId = null;
            this.dir = null;
        };
        return McDataFactory;
    }());
    mylib.McDataFactory = McDataFactory;
    __reflect(McDataFactory.prototype, "mylib.McDataFactory");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var MovieClipDataLoader = (function () {
        function MovieClipDataLoader(resId, dir, loadedCallback, loadedObj) {
            this.resId = resId;
            this.dir = dir;
            this.loadedCb = loadedCallback;
            this.loadedObj = loadedObj;
            this.cbs = [];
            RES.getResByUrl(mylib.PFConst.RES_ROOT + dir + resId + ".json", this.onJsonLoaded, this, RES.ResourceItem.TYPE_JSON);
            RES.getResByUrl(mylib.PFConst.RES_ROOT + dir + resId + ".png", this.onPngLoaded, this, RES.ResourceItem.TYPE_IMAGE);
        }
        MovieClipDataLoader.prototype.bingCb = function (cb, thisObj) {
            if (this.indexOf(cb, thisObj) == -1) {
                if (this.cbs) {
                    this.cbs.push({ cb: cb, obj: thisObj });
                }
                else {
                    this.cbs = [{ cb: cb, obj: thisObj }];
                }
            }
        };
        MovieClipDataLoader.prototype.unbindCb = function (cb, thisObj) {
            var index = this.indexOf(cb, thisObj);
            if (index == -1) {
                return;
            }
            this.cbs.splice(index, 1);
        };
        MovieClipDataLoader.prototype.cbLength = function () {
            if (!this.cbs) {
                return 0;
            }
            return this.cbs.length;
        };
        MovieClipDataLoader.prototype.indexOf = function (cb, thisObj) {
            if (!this.cbs) {
                return -1;
            }
            for (var i = 0; i < this.cbs.length; i++) {
                var obj = this.cbs[i];
                if (obj.cb == cb && obj.obj == thisObj) {
                    return i;
                }
            }
            return -1;
        };
        MovieClipDataLoader.prototype.doCb = function (factory) {
            if (!this.cbs) {
                return;
            }
            for (var i = 0; i < this.cbs.length; i++) {
                var obj = this.cbs[i];
                obj.cb.call(obj.obj, factory.mcDataFactory, this.resId);
            }
        };
        MovieClipDataLoader.prototype.onPngLoaded = function (txtr) {
            this.txtr = txtr;
            this.checkComplete();
        };
        MovieClipDataLoader.prototype.onJsonLoaded = function (data) {
            this.data = data;
            this.checkComplete();
        };
        MovieClipDataLoader.prototype.checkComplete = function () {
            if (this.txtr && this.data) {
                if (this.loadedCb) {
                    this.loadedCb.call(this.loadedObj, this);
                }
            }
        };
        MovieClipDataLoader.prototype.clear = function () {
            this.cbs = null;
            this.resId = null;
            this.dir = null;
            this.loadedCb = null;
            this.loadedObj = null;
        };
        return MovieClipDataLoader;
    }());
    mylib.MovieClipDataLoader = MovieClipDataLoader;
    __reflect(MovieClipDataLoader.prototype, "mylib.MovieClipDataLoader");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var MovieClipEx = (function (_super) {
        __extends(MovieClipEx, _super);
        function MovieClipEx(effectId) {
            var _this = _super.call(this) || this;
            _this._isPlay = true;
            _this._effectId = effectId;
            return _this;
        }
        Object.defineProperty(MovieClipEx.prototype, "effectId", {
            get: function () {
                return this._effectId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieClipEx.prototype, "isPlay", {
            get: function () {
                return this._isPlay;
            },
            enumerable: true,
            configurable: true
        });
        MovieClipEx.prototype.onEffectLoaded = function (mcFactory) {
            if (!this.parent) {
                mylib.ResManager.getInstance().releaseMCData(this._effectId, false, this.onEffectLoaded, this);
                return;
            }
            this._mc = new egret.MovieClip(mcFactory.generateMovieClipData(this._effectId));
            if (this._mc) {
                this.addChild(this._mc);
                if (this._isPlay) {
                    this._mc.gotoAndPlay(this._effectId, this._loop); //循环播放
                    if (this._loop != -1) {
                        this._mc.addEventListener(egret.MovieClipEvent.COMPLETE, this.onComplete, this);
                    }
                }
            }
        };
        MovieClipEx.prototype.play = function (loop, cb, thisObj) {
            if (loop === void 0) { loop = -1; }
            if (cb === void 0) { cb = null; }
            if (thisObj === void 0) { thisObj = null; }
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            this._isPlay = true;
            this._loop = loop;
            this._cb = cb;
            this._thisObj = thisObj;
            this._args = args;
            if (this._mc) {
                this._mc.gotoAndPlay(this._effectId, loop);
                if (loop != -1) {
                    this._mc.addEventListener(egret.MovieClipEvent.COMPLETE, this.onComplete, this);
                }
            }
            else {
                mylib.ResManager.getInstance().getMovieClipData("resource/ui/", this._effectId, this.onEffectLoaded, this);
            }
        };
        MovieClipEx.prototype.onComplete = function () {
            this._mc.removeEventListener(egret.MovieClipEvent.COMPLETE, this.onComplete, this);
            if (this._cb && this._thisObj) {
                (_a = this._cb).call.apply(_a, [this._thisObj].concat(this._args));
            }
            var _a;
        };
        MovieClipEx.prototype.stop = function () {
            this._isPlay = false;
            if (this._mc) {
                this._mc.stop();
            }
        };
        MovieClipEx.prototype.clear = function (destroyRes) {
            if (destroyRes === void 0) { destroyRes = true; }
            mylib.ResManager.getInstance().releaseMCData(this._effectId, destroyRes, this.onEffectLoaded, this);
            if (this._mc) {
                this.stop();
                this.removeChild(this._mc);
                this._mc = null;
            }
            this._cb = null;
            this._thisObj = null;
        };
        return MovieClipEx;
    }(egret.DisplayObjectContainer));
    mylib.MovieClipEx = MovieClipEx;
    __reflect(MovieClipEx.prototype, "mylib.MovieClipEx");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var ResManager = (function () {
        function ResManager() {
            this._fightMapDisposeTimer = 0;
            this._fubenMapDisposeTimer = 0;
            this._mcDataFts = {};
            this._mcDataLds = {};
            this._mapRefer = {};
            this._urlRefer = {};
            this._uiLoadCb = {};
        }
        ResManager.getInstance = function () {
            if (!ResManager._instance) {
                ResManager._instance = new ResManager();
            }
            return ResManager._instance;
        };
        ResManager.prototype.init = function (uiLayer) {
            this._uiLayer = uiLayer;
        };
        ResManager.prototype.getMovieClipData = function (dir, resId, cb, target) {
            var clipData = this._mcDataFts[resId];
            if (clipData) {
                cb.call(target, clipData.mcDataFactory, resId);
            }
            else {
                //不在本地缓存，从远程拉取
                var loader = this._mcDataLds[resId];
                if (!loader) {
                    loader = new mylib.MovieClipDataLoader(resId, dir, this.movieClipDataLoaded, this);
                    this._mcDataLds[resId] = loader;
                }
                loader.bingCb(cb, target);
            }
        };
        /**
         * 保持动画引用
         */
        ResManager.prototype.retainMCData = function (resId) {
            var clipData = this._mcDataFts[resId];
            if (clipData) {
                clipData.ref = 100000;
            }
        };
        /**
         * 释放动画资源
         *
         * resId 动画资源ID
         * destroy 是否销毁资源（如果动画常用，释放时选择false)
         *
         */
        ResManager.prototype.releaseMCData = function (resId, destroy, cb, thisObj) {
            if (destroy === void 0) { destroy = true; }
            var mcDataFactory = this._mcDataFts[resId];
            if (!mcDataFactory) {
                //如果在加载中，先停止加载
                this.stopMovieClipLoad(resId, cb, thisObj);
                return;
            }
            mcDataFactory.release();
            if (destroy && mcDataFactory.ref == 0) {
                mcDataFactory.destroy();
                delete this._mcDataFts[resId];
                //释放模型特效
                this.destroyModelEffect(resId);
            }
        };
        /**
         * 释放引用为0的动画资源
         */
        ResManager.prototype.destroyUnuseMCData = function () {
            for (var key in this._mcDataFts) {
                var mcDataFactory = this._mcDataFts[key];
                if (mcDataFactory && mcDataFactory.ref == 0) {
                    mcDataFactory.destroy();
                    delete this._mcDataFts[key];
                    //释放模型特效
                    this.destroyModelEffect(key);
                }
            }
        };
        /**
         *释放模型用到的特效，
         * @param modelId 模型ID
         * @returns void
         */
        ResManager.prototype.destroyModelEffect = function (modelId) {
            // let battlePlayConfig: BattlePlayCfg = GmGlobal.mc.battleMgr.getModelPlayConfig(modelId);
            // if (!battlePlayConfig)
            //     return;
            // for (let key in battlePlayConfig.labels) {
            //     let labelConfig: BattlePlayLable = battlePlayConfig.labels[key]
            //     if (labelConfig) {
            //         ObjectPool.clear(labelConfig.attackEffect);
            //     }
            // }
        };
        /**
         * 查询为未使用的动画数量
         */
        ResManager.prototype.getUnuseMcDataNum = function () {
            var num = 0;
            for (var key in this._mcDataFts) {
                var mcDataFactory = this._mcDataFts[key];
                if (mcDataFactory && mcDataFactory.ref == 0) {
                    num++;
                }
            }
            return num;
        };
        /**
         * 停止动画加载
         */
        ResManager.prototype.stopMovieClipLoad = function (resId, cb, thisObj) {
            var loader = this._mcDataLds[resId];
            if (loader) {
                loader.unbindCb(cb, thisObj);
                if (loader.cbLength() == 0) {
                    loader.clear();
                    delete this._mcDataLds[resId];
                    loader = null;
                }
            }
        };
        ResManager.prototype.movieClipDataLoaded = function (loader) {
            var mcDataFactory = this._mcDataFts[loader.resId]; //判断是否已经加载过了
            if (!mcDataFactory) {
                var mcFactory = new egret.MovieClipDataFactory(loader.data, loader.txtr);
                mcDataFactory = new mylib.McDataFactory(mcFactory, loader.resId, loader.dir);
                this._mcDataFts[mcDataFactory.resId] = mcDataFactory;
            }
            loader.doCb(mcDataFactory);
            delete this._mcDataLds[loader.resId];
            loader.clear();
            loader = null;
        };
        return ResManager;
    }());
    mylib.ResManager = ResManager;
    __reflect(ResManager.prototype, "mylib.ResManager");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var ProgressInfo = (function () {
        function ProgressInfo() {
            this.current = 0; //当前进度
            this.total = 1; //总进度
        }
        return ProgressInfo;
    }());
    mylib.ProgressInfo = ProgressInfo;
    __reflect(ProgressInfo.prototype, "mylib.ProgressInfo");
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var AssetAdapter = (function () {
        function AssetAdapter() {
        }
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         */
        AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
            function onGetRes(data) {
                compFunc.call(thisObject, data, source);
            }
            if (RES.hasRes(source)) {
                var data = RES.getRes(source);
                if (data) {
                    onGetRes(data);
                }
                else {
                    RES.getResAsync(source, onGetRes, this);
                }
            }
            else {
                var url = source.indexOf('http') == 0 ? source : mylib.PFConst.RES_ROOT + source;
                RES.getResByUrl(url, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return AssetAdapter;
    }());
    mylib.AssetAdapter = AssetAdapter;
    __reflect(AssetAdapter.prototype, "mylib.AssetAdapter", ["eui.IAssetAdapter"]);
})(mylib || (mylib = {}));
var mylib;
(function (mylib) {
    var ServerManager = (function () {
        function ServerManager() {
            this._host = "https://www.likexyx.com/pintuxyx";
            this._host1 = "https://www.likexyx.com/pintuxyx";
            this._host2 = "https://api.7tiao.net/pintuxyx";
            this._roleId = 0;
            this._sign = ""; //签名
            this._logining = 0;
            this.initLogin();
        }
        //初始化本地设置
        ServerManager.prototype.initLogin = function () {
            var data = egret.localStorage.getItem("accountData");
            if (data != null && data != "") {
                var tmpdata = JSON.parse(data);
                this._roleId = tmpdata.roleid;
                this._sign = tmpdata.sign;
                this._host = tmpdata.host;
            }
        };
        // 离线
        ServerManager.prototype.loginout = function () {
            this._roleId = 0;
            this._sign = "";
            egret.localStorage.removeItem("accountData");
        };
        // 登陆
        ServerManager.prototype.login = function (loginCb, loginObj) {
            if (loginCb === void 0) { loginCb = null; }
            if (loginObj === void 0) { loginObj = null; }
            if (this._logining > Math.floor(new Date().getTime() / 1000)) {
                return;
            }
            this._logining = Math.floor(new Date().getTime() / 1000) + 10;
            this._cb = loginCb;
            this._obj = loginObj;
            pfCommand("gameLogin", null, this.LoginRole, this);
        };
        // 游客登陆
        ServerManager.prototype.loginYouke = function (loginCb, loginObj) {
            if (loginCb === void 0) { loginCb = null; }
            if (loginObj === void 0) { loginObj = null; }
            if (this._logining > Math.floor(new Date().getTime() / 1000)) {
                return;
            }
            this._logining = Math.floor(new Date().getTime() / 1000) + 10;
            this._cb = loginCb;
            this._obj = loginObj;
            pfCommand("gameLoginYouke", null, this.LoginRole, this);
        };
        ServerManager.prototype.LoginRole = function (data) {
            // 登陆
            console.log("登陆中" + JSON.stringify(data));
            if (data.userId == "" || data.userId == null || data.userId == undefined) {
                this._logining = 0;
                this._cb.call(this._obj, false);
                return;
            }
            //连接服务器
            if (data.host) {
                this._host = data.host;
            }
            if (data.youke == 1) {
                // 游客登陆
                this._logindata = "openid=" + data.userId + "&youke=1&platid=" + data.platid + "&sid=" + data.serverId;
            }
            else {
                this._logindata = "openid=" + data.userId + "&sign=" + data.sig + "&sid=" + data.serverId + "&platid=" + data.platid + "&tm=" + data.time;
            }
            this.tryLogin();
        };
        ServerManager.prototype.tryLogin = function () {
            mylib.Utils.Post(this._host + "/login/getroleid", this._logindata, this, this.GetRoleOk, this.GetRoleFail);
        };
        ServerManager.prototype.GetRoleFail = function (event) {
            if (this._host == this._host2) {
                this._host = this._host1;
                this._logining = 0;
                this._cb.call(this._obj, false);
                return;
            }
            this._host = this._host2;
            egret.setTimeout(this.tryLogin, this, 2000);
        };
        //检测账号是否有角色
        ServerManager.prototype.GetRoleOk = function (event) {
            var request = event.currentTarget;
            console.log("get data : ", request.response);
            var ret = JSON.parse(request.response);
            if (ret.ret == 0) {
                this._roleId = ret.roleid;
                this._sign = ret.sign;
                egret.localStorage.setItem("accountData", JSON.stringify({ roleid: this._roleId, sign: this._sign, host: this._host }));
                this._logining = 0;
                this._cb.call(this._obj, true);
            }
            else {
                // 提示弹框
                this.GetRoleFail(event);
            }
        };
        ServerManager.prototype.Request = function (api, params, obj, onGetComplete, onGetIOError, onGetProgress) {
            if (params === void 0) { params = null; }
            if (obj === void 0) { obj = null; }
            if (onGetComplete === void 0) { onGetComplete = null; }
            if (onGetIOError === void 0) { onGetIOError = null; }
            if (onGetProgress === void 0) { onGetProgress = null; }
            if (this._roleId == 0) {
                return;
            }
            if (this._host == "" || this._host == null || this._host == undefined) {
                return;
            }
            var paramstr = "roleid=" + this._roleId + "&sign=" + this._sign;
            if (params) {
                paramstr += "&" + params;
            }
            mylib.Utils.Post(this._host + api, paramstr, obj, onGetComplete, onGetIOError, onGetProgress);
        };
        ServerManager.prototype.reportGameData = function (id, subid, num) {
            if (num === void 0) { num = 1; }
            if (true) {
                console.log('reportGameData id:' + id + " subid =" + subid);
                return;
            }
            if (this._host == "") {
                return;
            }
            mylib.Utils.Post(this._host + "/log/addlog", "id=" + id + "&sub=" + subid + "&num=" + num);
        };
        ServerManager.prototype.getRoleId = function () {
            return this._roleId;
        };
        return ServerManager;
    }());
    mylib.ServerManager = ServerManager;
    __reflect(ServerManager.prototype, "mylib.ServerManager");
})(mylib || (mylib = {}));
