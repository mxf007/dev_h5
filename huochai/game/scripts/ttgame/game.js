require('./ttapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.ttgame.js');

// 启动字节跳动小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

window.APP_JUMP = [];
window.PF_CONST = {lupin:"yes" };

function getShareData(idx) {
    return {
        templateId: "4itasgbtgsrcjkjh76",
        title: "超好玩的恐龙拼图游戏推荐给你哦",
        imageUrl: "https://mmocgame.qpic.cn/wechatgame/dFaqeGM0vicn5QAAFSNMCeXxhMRMjkow8atCr5PK3Yk13rJ2To3uxfkrSAuDamO1B/0",
        imageUrlId: "vQ2Gf_YbTH2HdcoE9P05Eg"
    };
}

tt.showShareMenu({
    withShareTicket: true
});
tt.onShareAppMessage(function () {
    return getShareData(0);
})

function showBanner()
{
    var sysinfo = tt.getSystemInfoSync();
    var bannerAd = tt.createBannerAd({
    adUnitId: '240a1ci5nej5bsaaq5',
    adIntervals:30,
    style: {
        left: 0,
        top: sysinfo.screenHeight - (sysinfo.screenWidth/3.0),
        width: sysinfo.screenWidth
    }
    })

    bannerAd.onResize((res) => {
        var height = res.height/sysinfo.screenHeight;
        console.log("广告事件 onResize :"+height);
        bannerAd.style.top = sysinfo.screenHeight - res.height;
        bannerAd.style.left = (sysinfo.screenWidth - res.width)/2;
    });
    bannerAd.onError(err => {
        console.log("广告事件 onError "+err.errMsg)
    })
    bannerAd.onLoad(() => {
        console.log('banner 广告加载成功');
        bannerAd.show();
    })
}

//观看视频广告
var _videoCloseCb = null;
var _videoThisObj = null;
var _videoLoad=false;
var _videoAd = null;
var interstitialAd = tt.createInterstitialAd({
  adUnitId: "olse5wxqnn1nb83gjj"
});

function showVideoAd(cb, thisObj) {
    tt.showLoading({ title: '视频打开中' });
    _videoCloseCb = cb;
    _videoThisObj = thisObj;
    if (!_videoAd) {
        _videoAd = tt.createRewardedVideoAd({
            adUnitId: '57c5f8jcaefbkhk674'
        })

        _videoAd.onError(err => {
            tt.hideLoading();
            console.log(err);
            if (_videoCloseCb && _videoThisObj) {
                _videoCloseCb.call(_videoThisObj);
            }
        });
        _videoAd.onClose(onVideoClose);
    }
    _videoAd.load().then(() => _videoAd.show()
            .then(()=>{
                console.log("广告显示成功");
                tt.hideLoading();
            })
            .catch(err => {
                _videoAd.load()
                .then(() => _videoAd.show()
                .then(()=>{
                    console.log("广告显示成功");
                    tt.hideLoading();
                })
                .catch(err => {
                        tt.hideLoading();
                        if (_videoCloseCb && _videoThisObj) {
                            _videoCloseCb.call(_videoThisObj);
                        }
                }))
    }))
}

function onVideoClose(res) {
    if (res && res.isEnded || res === undefined) {
        if (_videoCloseCb && _videoThisObj) {
            _videoCloseCb.call(_videoThisObj);
        }
    }
    else {
        console.log("未完成观看");
    }

    _videoCloseCb = null;
    _videoThisObj = null;
}

function gameLogin(appId, callback) {
    var wxdata = tt.getStorageSync('wxdata');
    if (!(wxdata == null || wxdata == ""))
    {
        var loginData = JSON.parse(wxdata);
        callback(loginData);
        tt.removeStorageSync('wxdata');
        return;
    }
    
    tt.login({
        force: true,
        success(res) {
            // 是否游客账号
            var isYouke=false;
            if (res.anonymousCode && !res.code) {
                isYouke = true;
            }
            else {
                isYouke = false;
            }

            if (isYouke == true && !(wxdata == null || wxdata == ""))
            {
                // 有游客缓存 并且依然是游客
                var loginData = JSON.parse(wxdata);
                callback(loginData);
                return;
            }

            tt.request({
                url: "https://api.7tiao.net/toutiao/"+(isYouke?"xyxloginyouke":"xyxlogin"),
                data: {
                    code: isYouke ? res.anonymousCode : res.code,
                    appid: appId
                },
                success: function (res) {
                    if (res.statusCode == 200) {
                        if (res.data.ret == 0) {
                            var loginData = {}
                            loginData.openId = res.data.openid;
                            loginData.sign = res.data.sign;
                            loginData.session = res.data.session;
                            loginData.time = res.data.tm;
                            loginData.isYouke=isYouke;
                            // if (isYouke)
                            // {
                            //     tt.setStorageSync('youkeid', res.data.openid);
                            // }

                            // tt.setStorageSync('wxdata', JSON.stringify(loginData));
                            callback(loginData);
                        }
                        else {
                            //登陆失败
                            console.log("登陆失败： " + ret.msg);
                            var loginData = {}
                            loginData.openId = "";
                            callback(loginData);
                        }
                    }
                    else {
                        //请求失败
                        console.log("登陆接口请求失败 statusCode: " + res.statusCode);
                        var loginData = {}
                        loginData.openId = "";
                        callback(loginData);
                    }
                }
            });
        },
        fail(res) 
        {
            console.log("关闭登陆");
            var loginData = {};
            loginData.openId = "";
            callback(loginData);
        }
    })

}

//平台登录
function pfLogin(appId, data, cb, thisObj) {
    gameLogin(appId, function (loginData) {
        //登陆成功
        var data = {};
        data.userId = loginData.openId;
        data.serverId = 1;
        data.sig = loginData.sign;
        data.time = loginData.time;
        data.platid = loginData.isYouke?20016:20015;
        data.host = "https://www.likexyx.com/pintuxyx";
        data.host2 = "https://api.7tiao.net/pintuxyx";
        cb.call(thisObj, data);
    })
}


let ttxyx={Adcb:null, AdObj:null, bannerAd:null, bottom:0, LpTime:null, LpUrl:null, canuseAd:true};
let { screenWidth, screenHeight } = tt.getSystemInfoSync();

function startRecorder() {
    ttxyx.LpUrl = null;
    const recorder = tt.getGameRecorderManager();
    recorder.onStart(function (res) {
        console.log("开始录屏")
        ttxyx.LpTime = new Date().getTime();
    });
    recorder.onStop(function (res) {
        console.log("录制完成");
        var t = new Date().getTime();
        if (t - ttxyx.LpTime < 3000) {
            //时间太短，录屏失败
            ttxyx.LpUrl = null;
        }
        else {
            ttxyx.LpUrl = res.videoPath;
        }
    })
    recorder.start({ duration: 300 });
}

function stopRecorder() {
    if (ttxyx.LpUrl == null)
    {
        const recorder = tt.getGameRecorderManager();
        recorder.stop();
    }

}


function shareVideo(cb, thisObj) {
    if (ttxyx.LpUrl==null) {
        tt.showToast({
                title: '没有录屏，或者录屏时间太短。',
                icon: 'success',
                duration: 1000
            });
        return;
    }
    tt.shareAppMessage({
        channel: "video",
        templateId: "4itasgbtgsrcjkjh76",
        extra: {
            videoPath: ttxyx.LpUrl
        },
        success() {
            console.log("视频分享成功");
            //分享失败
            if (cb && thisObj) {
                cb.call(thisObj, 1);
                cb = null;
                thisObj = null;
            }

        },
        fail() {
            console.log("视频分享失败");
            //分享失败
            if (cb && thisObj) {
                cb.call(thisObj, -1);
                cb = null;
                thisObj = null;
            }
        }
    })
}

///////////////////
// 注意 此处为老游戏老账号的数据兼容 新游戏接入 不需要这部分兼容代码
var wxdata = tt.getStorageSync('wxdata');
if (!(wxdata == null || wxdata == ""))
{
    // 强制登陆一次
    window.LOGINACCOUNT = 1;
}
//////////////////


// 注册上报
tt.request({
    url: "https://api.7tiao.net/toutiao/regist",
    data: {
        appid: "ttf43e82836b14dcb7"
    },
    success: function (res) {
        if (res.statusCode == 200) {
            if (res.data.ret == 0) {
                showBanner();
            }
        }
    }
});


function pfCommand(cmd, data, cb, thisObj) {
    switch (cmd) {
        case "gameLogin":
                pfLogin("ttf43e82836b14dcb7", data, cb, thisObj);
                break;
        case "pfViewAd":
            showVideoAd(cb, thisObj);
            break;
        case "showRectAd":
            if (interstitialAd)
            {
                interstitialAd
                .load()
                .then(() => {
                    interstitialAd.show();
                })
                .catch((err) => {
                    console.log(err);
                });
            }

            break;
        case "LpStart":
            startRecorder(cb, thisObj);
            break;
        case "LpStop":
            stopRecorder();
            break;
        case "LpShare":
            shareVideo(cb, thisObj);
            break;
        case "pack":
            tt.loadSubpackage({
                name: data.name,
                success: function(res) {
                    cb.call(thisObj, true);
                },
                fail: function(res) {
                    cb.call(thisObj, false);
                }
            })
            break;

        case "imgSave":
            var cwidth=canvas.width;
            var cheight=canvas.height;
            canvas.toTempFilePath({
                x:data.x*cwidth,y:data.y*cheight,width:data.width*cwidth,height:data.height*cheight,destWidth:data.destWidth,destHeight:data.destHeight,
                success:function(res){
                    savePhotosAlbum(res.tempFilePath);
                    if (cb && thisObj) {
                        cb.call(thisObj);
                        cb = null;
                        thisObj = null;
                    }
                },fail:function(res){
                    console.log("fail:"+JSON.stringify(res));
                    console.log("data:"+JSON.stringify(data));
                    if (cb && thisObj) {
                        cb.call(thisObj);
                        cb = null;
                        thisObj = null;
                    }
                },complete:function(res){
                    
                }})
            break;
        case "imgShare":
            var cwidth=canvas.width;
            var cheight=canvas.height;
            canvas.toTempFilePath({
                x:data.x*cwidth,y:data.y*cheight,width:data.width*cwidth,height:data.height*cheight,destWidth:data.destWidth,destHeight:data.destHeight,
                success:function(res){
                    tt.shareAppMessage({
                        title: "看我拼的这个真是酷呆了!!!",
                        imageUrl:res.tempFilePath,
                    });

                    if (cb && thisObj) {
                        cb.call(thisObj);
                        cb = null;
                        thisObj = null;
                    }
                },fail:function(res){
                    console.log("fail:"+JSON.stringify(res));
                    console.log("data:"+JSON.stringify(data));
                    if (cb && thisObj) {
                        cb.call(thisObj);
                        cb = null;
                        thisObj = null;
                    }
                },complete:function(res){
                    
                }})
            break;
        case "jumpapp":
            tt.navigateToMiniProgram({
                appId: data.appid,
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
                })
                break;
    }
}

function SaveMyImage(filepath)
{
    tt.saveImageToPhotosAlbum({
        filePath:filepath,
        success(res) {
             tt.showToast({
                title: '拼图已保存至相册,快快分享给好友吧',
                icon: 'success',
                duration: 1000
            });
        }
    })
}

function savePhotosAlbum(filepath)
{
    tt.getSetting({
    success(res) {
        if (!res.authSetting['scope.album']) {
            tt.authorize({
                scope: 'scope.album',
                success () {
                    SaveMyImage(filepath);
                },
                fail(){
                    //拒绝授权过
                    var alertParam = {
                        'title': '相册授权',
                        'content': '保存到相册需要您的授权',
                        'showCancel': true,
                        'canelColor': '#666',
                        'confirmText': '去授权',
                        'confirmColor': '#666',
                        success: function (ssa) {
                        if (ssa.confirm == true) {
                            tt.openSetting({
                            success: function () {
                                SaveMyImage(filepath);
                            }
                            })
                        }
                        }
                    };
                    //这里调用弹窗。
                    tt.showModal(alertParam);
                }
            })
        }
        else
        {
            SaveMyImage(filepath);
        }
    }
    })
}

egret.runEgret({
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 720,
		contentHeight: 1280,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		maxTouches: 3,
		//----auto option end----
    renderMode: 'webgl',
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
});

// require("egret.min.js")
window.pfCommand = pfCommand;