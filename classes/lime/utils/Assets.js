lime.utils.Assets = function () {}
m["lime.utils.Assets"] = lime.utils.Assets
lime.utils.Assets.__name__ = "lime.utils.Assets"
lime.utils.Assets.getAsset = function (b, a, c) {
    if (c && lime.utils.Assets.cache.enabled) switch (a) {
    case "FONT":
        var d = lime.utils.Assets.cache.font.h[b];
        if (null != d) return d;
        break;
    case "IMAGE":
        d = lime.utils.Assets.cache.image.h[b];
        if (lime.utils.Assets.isValidImage(d)) return d;
        break;
    case "MUSIC":
    case "SOUND":
        d = lime.utils.Assets.cache.audio.h[b];
        if (lime.utils.Assets.isValidAudio(d)) return d;
        break;
    case "TEMPLATE":
        throw haxe.Exception.thrown("Not sure how to get template: " + b);
    case "BINARY":
    case "TEXT":
        c = !1;
        break;
    default:
        return null;
    }
    var f = b.indexOf(":");
    d = b.substring(0, f);
    f = b.substring(f + 1);
    var g = lime.utils.Assets.getLibrary(d);
    if (null != g) {
        if (g.exists(f, a)) {
            if (g.isLocal(f, a)) return d = g.getAsset(f, a), c && lime.utils.Assets.cache.enabled && lime.utils.Assets.cache.set(b, a, d), d;
            lime.utils.Log.error(a + ' asset "' + b + '" exists, but only asynchronously', {
                fileName: "lime/utils/Assets.hx",
                lineNumber: 133,
                className: "lime.utils.Assets",
                methodName: "getAsset"
            });
        } else lime.utils.Log.error("There is no " + a + ' asset with an ID of "' + b + '"', {
            fileName: "lime/utils/Assets.hx",
            lineNumber: 138,
            className: "lime.utils.Assets",
            methodName: "getAsset"
        });
    } else lime.utils.Log.error(lime.utils.Assets.__libraryNotFound(d), {
        fileName: "lime/utils/Assets.hx",
        lineNumber: 143,
        className: "lime.utils.Assets",
        methodName: "getAsset"
    });
    return null;
}
lime.utils.Assets.getBytes = function (b) {
    return lime.utils.Assets.getAsset(b, "BINARY", !1);
}
lime.utils.Assets.getLibrary = function (b) {
    if (null == b || "" == b) b = "default";
    return lime.utils.Assets.libraries.h[b];
}
lime.utils.Assets.getText = function (b) {
    return lime.utils.Assets.getAsset(b, "TEXT", !1);
}
lime.utils.Assets.isLocal = function (b, a, c) {
    null == c && (c = !0);
    if (c && lime.utils.Assets.cache.enabled && lime.utils.Assets.cache.exists(b, a)) return !0;
    c = b.indexOf(":");
    var d = lime.utils.Assets.getLibrary(b.substring(0, c));
    return null != d ? d.isLocal(b.substring(c + 1), a) : !1;
}
lime.utils.Assets.isValidAudio = function (b) {
    return null != b;
}
lime.utils.Assets.isValidImage = function (b) {
    return null != b ? null != b.buffer : !1;
}
lime.utils.Assets.loadAsset = function (b, a, c) {
    if (c && lime.utils.Assets.cache.enabled) switch (a) {
    case "FONT":
        var d = lime.utils.Assets.cache.font.h[b];
        if (null != d) return lime.app.Future.withValue(d);
        break;
    case "IMAGE":
        d = lime.utils.Assets.cache.image.h[b];
        if (lime.utils.Assets.isValidImage(d)) return lime.app.Future.withValue(d);
        break;
    case "MUSIC":
    case "SOUND":
        d = lime.utils.Assets.cache.audio.h[b];
        if (lime.utils.Assets.isValidAudio(d)) return lime.app.Future.withValue(d);
        break;
    case "TEMPLATE":
        throw haxe.Exception.thrown("Not sure how to get template: " + b);
    case "BINARY":
    case "TEXT":
        c = !1;
        break;
    default:
        return null;
    }
    var f = b.indexOf(":");
    d = b.substring(0, f);
    f = b.substring(f + 1);
    var g = lime.utils.Assets.getLibrary(d);
    if (null != g) {
        if (g.exists(f, a)) {
            d = g.loadAsset(f, a);
            if (c && lime.utils.Assets.cache.enabled) d.onComplete(function (c) {
                lime.utils.Assets.cache.set(b, a, c);
            });
            return d;
        }
        return lime.app.Future.withError("There is no " + a + ' asset with an ID of "' + b + '"');
    }
    return lime.app.Future.withError(lime.utils.Assets.__libraryNotFound(d));
}
lime.utils.Assets.loadAudioBuffer = function (b, a) {
    null == a && (a = !0);
    return lime.utils.Assets.loadAsset(b, "SOUND", a);
}
lime.utils.Assets.loadImage = function (b, a) {
    null == a && (a = !0);
    return lime.utils.Assets.loadAsset(b, "IMAGE", a);
}
lime.utils.Assets.loadLibrary = function (b) {
    var a = new lime.app.Promise(),
        c = lime.utils.Assets.getLibrary(b);
    if (null != c) return c.load();
    c = b;
    var d = null;
    if (Object.prototype.hasOwnProperty.call(lime.utils.Assets.bundlePaths.h, b)) lime.utils.AssetBundle.loadFromFile(lime.utils.Assets.bundlePaths.h[b]).onComplete(function (c) {
        null == c ? a.error('Cannot load bundle for library "' + b + '"') : (c = lime.utils.AssetLibrary.fromBundle(c), null == c ? a.error('Cannot open library "' + b + '"') : (lime.utils.Assets.libraries.h[b] = c, c.onChange.add((ea = lime.utils.Assets.onChange, F(ea, ea.dispatch))), a.completeWith(c.load())));
    }).onError(function (c) {
        a.error('There is no asset library with an ID of "' + b + '"');
    });else Object.prototype.hasOwnProperty.call(lime.utils.Assets.libraryPaths.h, b) ? (c = lime.utils.Assets.libraryPaths.h[b], d = haxe.io.Path.directory(c)) : (StringTools.endsWith(c, ".bundle") ? (d = c, c += "/library.json") : d = haxe.io.Path.directory(c), c = lime.utils.Assets.__cacheBreak(c)), lime.utils.AssetManifest.loadFromFile(c, d).onComplete(function (c) {
        null == c ? a.error('Cannot parse asset manifest for library "' + b + '"') : (c = lime.utils.AssetLibrary.fromManifest(c), null == c ? a.error('Cannot open library "' + b + '"') : (lime.utils.Assets.libraries.h[b] = c, c.onChange.add((ea = lime.utils.Assets.onChange, F(ea, ea.dispatch))), a.completeWith(c.load())));
    }).onError(function (c) {
        a.error('There is no asset library with an ID of "' + b + '"');
    });
    return a.future;
}
lime.utils.Assets.registerLibrary = function (b, a) {
    if (null == b || "" == b) b = "default";
    if (Object.prototype.hasOwnProperty.call(lime.utils.Assets.libraries.h, b)) {
        if (lime.utils.Assets.libraries.h[b] == a) return;
        lime.utils.Assets.unloadLibrary(b);
    }
    null != a && a.onChange.add(lime.utils.Assets.library_onChange);
    lime.utils.Assets.libraries.h[b] = a;
}
lime.utils.Assets.unloadLibrary = function (b) {
    lime.utils.Assets.removeLibrary(b, !0);
}
lime.utils.Assets.removeLibrary = function (b, a) {
    null == a && (a = !0);
    if (null == b || "" == b) b = "default";
    var c = lime.utils.Assets.libraries.h[b];
    null != c && (lime.utils.Assets.cache.clear(b + ":"), c.onChange.remove(lime.utils.Assets.library_onChange), a && c.unload());
    a = lime.utils.Assets.libraries;
    Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
}
lime.utils.Assets.__cacheBreak = function (b) {
    0 < lime.utils.Assets.cache.version && (b = -1 < b.indexOf("?") ? b + ("&" + lime.utils.Assets.cache.version) : b + ("?" + lime.utils.Assets.cache.version));
    return b;
}
lime.utils.Assets.__libraryNotFound = function (b) {
    if (null == b || "" == b) b = "default";
    return null == lime.app.Application.current || null == lime.app.Application.current.__preloader || lime.app.Application.current.__preloader.complete ? 'There is no asset library named "' + b + '"' : 'There is no asset library named "' + b + '", or it is not yet preloaded';
}
lime.utils.Assets.library_onChange = function () {
    lime.utils.Assets.cache.clear();
    lime.utils.Assets.onChange.dispatch();
}
lime.utils.Assets.cache = new lime.utils.AssetCache()
lime.utils.Assets.onChange = new lime.app._Event_Void_Void()
lime.utils.Assets.bundlePaths = new haxe.ds.StringMap()
lime.utils.Assets.libraries = new haxe.ds.StringMap()
lime.utils.Assets.libraryPaths = new haxe.ds.StringMap()