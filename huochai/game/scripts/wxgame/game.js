require('./weapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}


function getShareData(idx) {
    return {
        title: "拼音练习",
        imageUrl: "https://mmocgame.qpic.cn/wechatgame/Vo9t8phc3hxln7xhHgQjtnboicChcjaiaib7dianMgzP7Z8MloARUorOicfInZtfX7b1U/0",
        imageUrlId: "WLNhEiDER4GWk9In1wDMpw=="
    };
}

wx.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline']
});
wx.onShareAppMessage(function () {
    return getShareData(0);
})

window.APP_JUMP = ["wx96023ce5d883b557","wx0cddf2edb9edba73","wx17f0c1d5806951a1","wx1f0d964f4b4ab752","wxdf8d2f714fa5fa00"];
window.PF_CONST = {};
window.SUBPACK = [];

window.IPHONEX = 0;
if (wx.getSystemInfoSync().model.search("iPhone X") != -1)
{
    window.IPHONEX = 1;
}

var screenWidth = wx.getSystemInfoSync().screenWidth;
var screenHeight = wx.getSystemInfoSync().screenHeight;
var wxVersion = wx.getSystemInfoSync().SDKVersion; // 已设置最低版本2.5.0

// 创建banner
function createBanner(time)
{
    
    var bottom=window.IPHONEX*0.03*screenHeight;
    {
        var bannerAd = wx.createBannerAd({
        adUnitId: 'adunit-6314a0264e543f1a',
        adIntervals:time,
        style: {
            left: 0,
            top: 0,
            width: screenWidth,
            h: 180 
        }
        })

        bannerAd.onResize((res) => {
            var height = res.height/screenHeight;
            console.log("广告事件 onResize :"+height);
            bannerAd.style.top = screenHeight - res.height - bottom;
        });
        bannerAd.onError(err => {
            console.log("广告事件 onError "+err.errMsg);
            if (err.errCode == 1004)
            {
                bannerAd.hide();
                bannerAd.destroy();
                setTimeout(() => {
                    createGrid();
                }, 20000);
            }
        })
        bannerAd.onLoad(() => {
            console.log('banner 广告加载成功');
            bannerAd.show();
        })
        bannerAd.onClose((res) => {
        })
        
    }
}
// 创建grid
function createGrid()
{
    var bottom=window.IPHONEX*0.03*screenHeight;
    if (compareVersion(wxVersion, '2.9.2') >= 0) {
        // 创建格子广告实例，提前初始化
        let gridAd = wx.createGridAd({
        adUnitId: 'adunit-f1fcd8eb32971830',
        adTheme: 'white',
        adIntervals:60,
        gridCount: 5,
        style: {
            left: 0,
            top: 0,
            width: screenWidth,
            opacity: 1
        }
        })
        gridAd.onError(err => {
            console.log("广告事件 onError "+err.errMsg);
            if (err.errCode == 1004)
            {
                gridAd.hide();
                gridAd.destroy();
                setTimeout(() => {
                    createBanner(60);
                }, 20000);
            }
        })
        gridAd.onResize((res) => {
            var height = res.height/screenHeight;
            console.log("广告事件 onResize :"+height);
            gridAd.style.top = screenHeight - res.height - bottom;
        });

        // 在适合的场景显示格子广告
        gridAd.show();
    }
    else
    {
        createBanner(60);
    }
}

createBanner(30);
//观看视频广告
var _videoCloseCb = null;
var _videoThisObj = null;
var _videoAd = null;
var _interstitialAd = null;

// 创建弹框广告
if (wx.createInterstitialAd){
    _interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-0ec259f5bbc03163'
    })
}
function showVideoAd(cb, thisObj) {
    {
        wx.showLoading({ title: '视频打开中' });
        _videoCloseCb = cb;
        _videoThisObj = thisObj;
        if (!_videoAd) {
            _videoAd = wx.createRewardedVideoAd({
                adUnitId: 'adunit-347fd01985d4f3af'
            })

            _videoAd.onError(err => {
                wx.hideLoading();
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
                    wx.hideLoading();
                })
                .catch(err => {
                    _videoAd.load()
                    .then(() => _videoAd.show()
                    .then(()=>{
                        console.log("广告显示成功");
                        wx.hideLoading();
                    })
                    .catch(err => {
                            wx.hideLoading();
                            if (_videoCloseCb && _videoThisObj) {
                                _videoCloseCb.call(_videoThisObj);
                            }
                    }))
        }))
    }
}

function onVideoClose(res) {
    if (res && res.isEnded || res === undefined) {
        if (_videoCloseCb && _videoThisObj) {
            _videoCloseCb.call(_videoThisObj, 1);
        }
    }
    else {
        console.log("未完成观看");
        if (_videoCloseCb && _videoThisObj) {
            _videoCloseCb.call(_videoThisObj, 2);
        }
    }

    _videoCloseCb = null;
    _videoThisObj = null;
}

function gameLogin(appId, wxxyx) {
    // wx.showLoading({ title: '登陆中' });
    wx.login({
        success: function (res) {
            wx.request({
                url: 'https://api.7tiao.net/wx/xyxlogin',
                data: {
                    code: res.code,
                    appid: appId
                },
                success: function (res) {
                    // wx.hideLoading();
                    if (res.statusCode == 200) {
                        if (res.data.ret == 0) {
                            var loginData = {}
                            loginData.openId = res.data.openid;
                            loginData.sign = res.data.sign;
                            loginData.session = res.data.session;
                            loginData.time = res.data.tm;
                            if (wxxyx.logincb)
                            {
                                wxxyx.logincb(loginData);
                            }
                        }
                        else {
                            //登陆失败
                            wxAlert("登陆失败： " + ret.msg);
                        }
                    }
                    else {
                        //请求失败
                        wxAlert("登陆接口请求失败 statusCode: " + res.statusCode);
                    }
                }
            });
        }
    })

}

//平台登录
function pfLogin(wxxyx, data, cb, thisObj) {
    wxxyx.logincb=function (loginData) {
        //登陆成功
        var data = {};
        data.userId = loginData.openId;
        data.serverId = 9;
        data.sig = loginData.sign;
        data.time = loginData.time;
        data.host = "https://www.likexyx.com/pintuxyx";
        data.host2 = "https://api.7tiao.net/pintuxyx";
        data.platid = 20009;

        cb.call(thisObj, data);
    };
}


let wxxyx={Adcb:null, AdObj:null, bannerAd:null, bottom:0, logincb:null};
//let { screenWidth, screenHeight } = wx.getSystemInfoSync();
// 预登陆


function pfCommand(cmd, data, cb, thisObj) {
    switch (cmd) {
        case "gameLogin":
                pfLogin(wxxyx, data, cb, thisObj);
                gameLogin("wxdf8d2f714fa5fa00", wxxyx);
                break;
        case "pfViewAd":
            showVideoAd(cb, thisObj);
            break;
        case "showRectAd":
            if (_interstitialAd) {
                _interstitialAd.show().catch((err) => {
                    console.error(err)
                })
            }
            break;
         case "pack":
            wx.loadSubpackage({
                name: data.name,
                success: function(res) {
                    cb.call(thisObj, true,data.name);
                },
                fail: function(res) {
                    cb.call(thisObj, false,data.name);
                }
            })
            break;
        case "jumpapp":
            wx.navigateToMiniProgram({
                appId: data.appid,
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
                })
                break;
        case "imgShare":
            creatImage(data, function(res){
                    if (res != "")
                    {
                        if (data.page)
                        {
                            wx.shareAppMessage({
                                title: data.title,
                                imageUrl:res,
                                query: "page="+data.page + "&level="+data.level+ "&type="+data.type
                            });
                        }
                        else
                        {
                            wx.shareAppMessage({
                                title: data.title,
                                imageUrl:res
                            });
                        }
                    }

                    if (cb && thisObj) {
                        cb.call(thisObj);
                        cb = null;
                        thisObj = null;
                    }
                }, 3);
            break;
       case "query":
            if ( wx.getLaunchOptionsSync().query )
            {
                cb.call(thisObj, wx.getLaunchOptionsSync().query);
            }
            wx.onShow(function (res) {
                if (res.query) {
                    cb.call(thisObj, res.query);
                };
            });
            break;
        case "setsharepage":
            console.log("set share page "+(data.page || " none "));
            if (data.page=="" || data.page == undefined || data.page == null)
            {
                wx.onShareAppMessage(function () {
                    return {
                        title: "巧移火柴棒",
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/Vo9t8phc3hw3AVZbaibyZwEG2Wth3rt317HkicMfHtAPc5HficibLKyzwT1DdGTKkJvia/0",
                        imageUrlId: "UAApQwIHT5WloX3RTmxXVQ=="
                    };
                })
            }
            if (data.page=="help")
            {
                wx.onShareAppMessage(function () {
                    return {
                        title: "火柴拼图",
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/Vo9t8phc3hw3AVZbaibyZwEG2Wth3rt317HkicMfHtAPc5HficibLKyzwT1DdGTKkJvia/0",
                        imageUrlId: "UAApQwIHT5WloX3RTmxXVQ==",
                        query: "page=help",
                    };
                })
            }
            break;
        }
}

function creatImage(data, cb, idx)
{
    var cwidth=canvas.width;
    var cheight=canvas.height;
    canvas.toTempFilePath({
        x:data.x*cwidth,y:data.y*cheight,width:data.width*cwidth,height:data.height*cheight,destWidth:data.destWidth,destHeight:data.destHeight,
        success:function(res)
        {
            cb(res.tempFilePath);
        }
        ,fail:function(res){
            idx--;
            if (idx > 0)
            {
                return creatImage(data, cb, idx);
            }
            cb("");
        },complete:function(res){
            
        }})
}

function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
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
window.BANNER_HEIGHT=250;