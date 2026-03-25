lime.media.AudioBuffer = function () {}
m["lime.media.AudioBuffer"] = lime.media.AudioBuffer
lime.media.AudioBuffer.__name__ = "lime.media.AudioBuffer"
lime.media.AudioBuffer.fromBytes = function (b) {
    if (null == b) return null;
    var a = new lime.media.AudioBuffer();
    a.set_src(new Howl({
        src: ["data:" + lime.media.AudioBuffer.__getCodec(b) + ";base64," + lime._internal.format.Base64.encode(b)],
        html5: !0,
        preload: !1
    }));
    return a;
}
lime.media.AudioBuffer.fromFile = function (b) {
    if (null == b) return null;
    var a = new lime.media.AudioBuffer();
    a.__srcHowl = new Howl({
        src: [b],
        preload: !1
    });
    return a;
}
lime.media.AudioBuffer.fromFiles = function (b) {
    var a = new lime.media.AudioBuffer();
    a.__srcHowl = new Howl({
        src: b,
        preload: !1
    });
    return a;
}
lime.media.AudioBuffer.loadFromFile = function (b) {
    var a = new lime.app.Promise(),
        c = lime.media.AudioBuffer.fromFile(b);
    null != c ? null != c && (c.__srcHowl.on("load", function () {
        a.complete(c);
    }), c.__srcHowl.on("loaderror", function (b, c) {
        a.error(c);
    }), c.__srcHowl.load()) : a.error(null);
    return a.future;
}
lime.media.AudioBuffer.loadFromFiles = function (b) {
    var a = new lime.app.Promise(),
        c = lime.media.AudioBuffer.fromFiles(b);
    null != c ? (c.__srcHowl.on("load", function () {
        a.complete(c);
    }), c.__srcHowl.on("loaderror", function () {
        a.error(null);
    }), c.__srcHowl.load()) : a.error(null);
    return a.future;
}
lime.media.AudioBuffer.__getCodec = function (b) {
    switch (b.getString(0, 4)) {
    case "OggS":
        return "audio/ogg";
    case "RIFF":
        if ("WAVE" == b.getString(8, 4)) return "audio/wav";
        var a = b.b[1],
            c = b.b[2];
        switch (b.b[0]) {
        case 73:
            if (68 == a && 51 == c) return "audio/mp3";
            break;
        case 255:
            switch (a) {
            case 243:
            case 250:
            case 251:
                return "audio/mp3";
            }
        }
        break;
    case "fLaC":
        return "audio/flac";
    default:
        switch (a = b.b[1], c = b.b[2], b.b[0]) {
        case 73:
            if (68 == a && 51 == c) return "audio/mp3";
            break;
        case 255:
            switch (a) {
            case 243:
            case 250:
            case 251:
                return "audio/mp3";
            }
        }
    }
    lime.utils.Log.error("Unsupported sound format", {
        fileName: "lime/media/AudioBuffer.hx",
        lineNumber: 440,
        className: "lime.media.AudioBuffer",
        methodName: "__getCodec"
    });
    return null;
}
lime.media.AudioBuffer.prototype = {
    get_src: function () {
        return this.__srcHowl;
    },
    set_src: function (b) {
        return this.__srcHowl = b;
    },
    __class__: lime.media.AudioBuffer
}