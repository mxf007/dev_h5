function getHttpParams(name) {
    var r = new RegExp("(\\?|#|&)" + name + "=([^&#]*)(&|#|$)");
    var m = location.href.match(r);
    return decodeURIComponent(!m ? "" : m[2]);
}



$(window).resize(function () {
resizeWidth()
})

//重新设置宽度
function resizeWidth() {
    var bw = $('body').width();
    var bh = $('body').height();
    var whr = bw / bh;
    console.log("bw " + bw + " bh " + bh + " whr " + whr);
    if (whr > 0.7) { //p
        $('#canvas_container').attr('data-scale-mode', 'showAll');
    }
}


function addEvents() {
    document.addEventListener("visibilitychange", onStateChanged);
    document.addEventListener("webkitvisibilitychange", onStateChanged);
    document.addEventListener("msvisibilitychange", onStateChanged);
    document.addEventListener("qbrowserVisibilityChange", onQBrowserStateChanged);
}

function onStateChanged() {
    if (document.hidden || document.webkitHidden || document.msHidden) {
        window.gameHidden = true;
    }
    else {
        window.gameHidden = false;
    }

    dispatchStateChangeEvent();
}

function onQBrowserStateChanged(e) {
    window.gameHidden = e.hidden;
    dispatchStateChangeEvent();
}

function dispatchStateChangeEvent() {
    var event = document.createEvent("HTMLEvents");
    event.initEvent("gamestatechange", true, true);
    document.dispatchEvent(event);
}

function startGame() {
    window.DisableAvatarUrl = true;
    egret.ImageLoader.crossOrigin = "anonymous";
    var adtype = getAudioType();
    egret.runEgret({
        renderMode: "webgl", audioType: adtype, calculateCanvasScaleFactor: function (context) {
            var backingStore = context.backingStorePixelRatio ||
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        }
    });

    //添加页面隐藏事件
    addEvents();
}

function resizePlayerContainer() {
    var containerList = document.querySelectorAll(".egret-player");
    var length = containerList.length;
    for (var i = 0; i < length; i++) {
        var container = containerList[i];
        var player = container["egret-player"];
        player.updateScreenSize();
    }
}

function gameInited() {
    resizePlayerContainer();
}

//获取音频播放类型，默认为0
function getAudioType() {
    var type = 0;
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/abxcnop/i) == "abxcnop")
        type = 3;
    return type;
}

//调整宽度
resizeWidth();

