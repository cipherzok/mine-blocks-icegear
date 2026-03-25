lime.utils.AssetManifest = function () {
    this.assets = [];
    this.libraryArgs = [];
    this.version = 2;
}
m["lime.utils.AssetManifest"] = lime.utils.AssetManifest
lime.utils.AssetManifest.__name__ = "lime.utils.AssetManifest"
lime.utils.AssetManifest.fromBytes = function (b, a) {
    return null != b ? lime.utils.AssetManifest.parse(b.getString(0, b.length), a) : null;
}
lime.utils.AssetManifest.fromFile = function (b, a) {
    b = lime.utils.AssetManifest.__resolvePath(b);
    a = lime.utils.AssetManifest.__resolveRootPath(a, b);
    return null == b ? null : lime.utils.AssetManifest.fromBytes(vb.fromFile(b), a);
}
lime.utils.AssetManifest.loadFromBytes = function (b, a) {
    return lime.app.Future.withValue(lime.utils.AssetManifest.fromBytes(b, a));
}
lime.utils.AssetManifest.loadFromFile = function (b, a) {
    b = lime.utils.AssetManifest.__resolvePath(b);
    a = lime.utils.AssetManifest.__resolveRootPath(a, b);
    return null == b ? null : vb.loadFromFile(b).then(function (b) {
        return lime.app.Future.withValue(lime.utils.AssetManifest.fromBytes(b, a));
    });
}
lime.utils.AssetManifest.parse = function (b, a) {
    if (null == b || "" == b) return null;
    b = JSON.parse(b);
    var c = new lime.utils.AssetManifest();
    Object.prototype.hasOwnProperty.call(b, "name") && (c.name = b.name);
    Object.prototype.hasOwnProperty.call(b, "libraryType") && (c.libraryType = b.libraryType);
    Object.prototype.hasOwnProperty.call(b, "libraryArgs") && (c.libraryArgs = b.libraryArgs);
    if (Object.prototype.hasOwnProperty.call(b, "assets")) {
        var d = b.assets;
        Object.prototype.hasOwnProperty.call(b, "version") && 2 >= b.version ? c.assets = haxe.Unserializer.run(d) : c.assets = d;
    }
    Object.prototype.hasOwnProperty.call(b, "rootPath") && (c.rootPath = b.rootPath);
    null != a && "" != a && (c.rootPath = null == c.rootPath || "" == c.rootPath ? a : a + "/" + c.rootPath);
    return c;
}
lime.utils.AssetManifest.__resolvePath = function (b) {
    if (null == b) return null;
    var a = b.indexOf("?");
    var c = -1 < a ? HxOverrides.substr(b, 0, a) : b;
    for (c = StringTools.replace(c, "\\", "/"); StringTools.endsWith(c, "/");) c = HxOverrides.substr(c, 0, c.length - 1);
    return StringTools.endsWith(c, ".bundle") ? -1 < a ? c + "/library.json" + HxOverrides.substr(b, a, null) : c + "/library.json" : b;
}
lime.utils.AssetManifest.__resolveRootPath = function (b, a) {
    if (null != b) return b;
    b = a.indexOf("?");
    b = -1 < b ? HxOverrides.substr(a, 0, b) : a;
    for (b = StringTools.replace(b, "\\", "/"); StringTools.endsWith(b, "/");) {
        if ("/" == b) return b;
        b = HxOverrides.substr(b, 0, b.length - 1);
    }
    return StringTools.endsWith(b, ".bundle") ? b : haxe.io.Path.directory(b);
}
lime.utils.AssetManifest.prototype = {
    __class__: lime.utils.AssetManifest
}