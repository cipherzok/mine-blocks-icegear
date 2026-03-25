var InterstitialManager = function () {};
m.InterstitialManager = InterstitialManager
InterstitialManager.__name__ = "InterstitialManager"
InterstitialManager.connect = function (b, a) {
    InterstitialManager.onSuccess = b;
    InterstitialManager.onFail = a;
    InterstitialManager.lastRun = new Date();
    if (null != window.CrazyGames) try {
        if (null != window.CrazyGames.SDK) return;
    } catch (c) {}
    if (null != window.PokiSDK) try {
        if (null != window.PokiSDK) return;
    } catch (c) {}
    -1 != window.location.href.indexOf(".ungrounded.net") ? InterstitialManager.waitingForNG = !0 : InterstitialManager.initializeIFrame();
}
InterstitialManager.initializeIFrame = function () {
    var b = window.location.href;
    InterstitialManager.iF = window.document.createElement("iframe");
    b = encodeURIComponent(b);
    InterstitialManager.iF.src = "https://mineblocks.com/1/scripts/if?ref=" + b;
    InterstitialManager.iF.style.visibility = "hidden";
    InterstitialManager.iF.style.pointerEvents = "none";
    InterstitialManager.iF.style.position = "absolute";
    InterstitialManager.iF.style.width = "100%";
    InterstitialManager.iF.style.height = "100%";
    InterstitialManager.iF.style.top = "0";
    InterstitialManager.iF.style.left = "0";
    InterstitialManager.iF.style.border = "0";
    window.document.querySelector("body").appendChild(InterstitialManager.iF);
    window.addEventListener("message", function (a) {
        "https://mineblocks.com" == a.origin && ("adStartCallback" == a.data ? (InterstitialManager.iF.style.visibility = "visible", InterstitialManager.iF.style.pointerEvents = "auto", lemongine.Lemongine.adStartCallback()) : "adEndCallback" == a.data && (InterstitialManager.iF.style.visibility = "hidden", InterstitialManager.iF.style.pointerEvents = "none", lemongine.Lemongine.adEndCallback()));
    }, !1);
    InterstitialManager.iF.onload = function (a) {
        try {
            if (InterstitialManager.loaded = !0, null != InterstitialManager.onSuccess) InterstitialManager.onSuccess();
        } catch (c) {
            haxe.Log.trace("iF failed during success", {
                fileName: "src/InterstitialManager.hx",
                lineNumber: 79,
                className: "InterstitialManager",
                methodName: "initializeIFrame"
            }), InterstitialManager.onFail();
        }
    };
    InterstitialManager.iF.onerror = function (a) {
        InterstitialManager.loaded = !1;
        haxe.Log.trace("iF failed", {
            fileName: "src/InterstitialManager.hx",
            lineNumber: 86,
            className: "InterstitialManager",
            methodName: "initializeIFrame"
        });
        if (null != InterstitialManager.onFail) InterstitialManager.onFail();
    };
}
InterstitialManager.run = function () {
    InterstitialManager.loaded ? null != InterstitialManager.iF && InterstitialManager.canRun() && InterstitialManager.iF.contentWindow.postMessage("runInterstitial", "https://mineblocks.com") : lemongine.Lemongine.requestInterstitial();
}
InterstitialManager.canRun = function () {
    var b = new Date();
    return 3E5 <= b.getTime() - InterstitialManager.lastRun.getTime() ? (InterstitialManager.lastRun = b, !0) : !1;
}
InterstitialManager.loaded = !1
InterstitialManager.waitingForNG = !1