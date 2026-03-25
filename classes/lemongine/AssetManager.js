lemongine.AssetManager = function () {}
m["lemongine.AssetManager"] = lemongine.AssetManager
lemongine.AssetManager.__name__ = "lemongine.AssetManager"
lemongine.AssetManager.loadImage = function (b, a) {
    null == a && (a = b);
    var c = lemongine.AssetManager.images,
        d = new lemongine.Image();
    c.h[a] = d;
    lemongine.AssetManager.numImages++;
    lime.utils.Assets.loadImage(b).onError(function (b) {
        haxe.Log.trace("Warning! Image '" + a + "' failed to load (" + Std.string(b) + ").", {
            fileName: "lemongine/AssetManager.hx",
            lineNumber: 33,
            className: "lemongine.AssetManager",
            methodName: "loadImage"
        });
    }).onComplete(function (b) {
        lemongine.AssetManager.images.h[a].fromData(b);
        lemongine.AssetManager.numImagesLoaded++;
    });
    return lemongine.AssetManager.images.h[a];
}
lemongine.AssetManager.getImage = function (b) {
    return Object.prototype.hasOwnProperty.call(lemongine.AssetManager.images.h, b) ? lemongine.AssetManager.images.h[b] : null;
}
lemongine.AssetManager.loadSound = function (b, a, c, d) {
    null == d && (d = 1);
    null == a && (a = b);
    if (1 < d) for (var f = 0, g = d; f < g;) {
        var k = lemongine.AssetManager.sounds,
            h = new lemongine.Sound(null, c);
        k.h[a + "_" + f++] = h;
    } else k = lemongine.AssetManager.sounds, h = new lemongine.Sound(null, c), k.h[a] = h;
    lemongine.AssetManager.numSounds++;
    lime.utils.Assets.loadAudioBuffer(b).onError(function (b) {
        haxe.Log.trace("Warning! Sound '" + a + "' failed to load.", {
            fileName: "lemongine/AssetManager.hx",
            lineNumber: 94,
            className: "lemongine.AssetManager",
            methodName: "loadSound"
        });
        if (1 < d) {
            b = 0;
            for (var c = d; b < c;) lemongine.AssetManager.sounds.h[a + "_" + b++].fromBuffer(new lime.media.AudioBuffer());
        } else lemongine.AssetManager.sounds.h[a].fromBuffer(new lime.media.AudioBuffer());
    }).onComplete(function (b) {
        if (null == b.get_src() && null == b.data) haxe.Log.trace("Warning! Sound '" + a + "' failed to load.", {
            fileName: "lemongine/AssetManager.hx",
            lineNumber: 103,
            className: "lemongine.AssetManager",
            methodName: "loadSound"
        });else {
            if (1 < d) for (var c = 0, f = d; c < f;) lemongine.AssetManager.sounds.h[a + "_" + c++].fromBuffer(b);else lemongine.AssetManager.sounds.h[a].fromBuffer(b);
            lemongine.AssetManager.numSoundsLoaded++;
        }
    });
    return 1 < d ? lemongine.AssetManager.sounds.h[a + "_0"] : lemongine.AssetManager.sounds.h[a];
}
lemongine.AssetManager.getSound = function (b) {
    return Object.prototype.hasOwnProperty.call(lemongine.AssetManager.sounds.h, b) ? lemongine.AssetManager.sounds.h[b] : lemongine.AssetManager.blankSound;
}
lemongine.AssetManager.images = new haxe.ds.StringMap()
lemongine.AssetManager.sounds = new haxe.ds.StringMap()
lemongine.AssetManager.numImages = 0
lemongine.AssetManager.numImagesLoaded = 0
lemongine.AssetManager.numSounds = 0
lemongine.AssetManager.numSoundsLoaded = 0
lemongine.AssetManager.blankSound = new lemongine.Sound()