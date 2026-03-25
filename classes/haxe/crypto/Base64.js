haxe.crypto.Base64 = function () {}
m["haxe.crypto.Base64"] = haxe.crypto.Base64
haxe.crypto.Base64.__name__ = "haxe.crypto.Base64"
haxe.crypto.Base64.encode = function (b, a) {
    null == a && (a = !0);
    var c = new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).encodeBytes(b).toString();
    if (a) switch (b.length % 3) {
    case 1:
        c += "==";
        break;
    case 2:
        c += "=";
    }
    return c;
}
haxe.crypto.Base64.decode = function (b, a) {
    null == a && (a = !0);
    if (a) for (; 61 == HxOverrides.cca(b, b.length - 1);) b = HxOverrides.substr(b, 0, -1);
    return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(b));
}
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS)