lime.utils.AssetCache = function () {
    this.enabled = !0;
    this.audio = new haxe.ds.StringMap();
    this.font = new haxe.ds.StringMap();
    this.image = new haxe.ds.StringMap();
    this.version = 117199;
}
m["lime.utils.AssetCache"] = lime.utils.AssetCache
lime.utils.AssetCache.__name__ = "lime.utils.AssetCache"
lime.utils.AssetCache.prototype = {
    exists: function (b, a) {
        return ("IMAGE" == a || null == a) && Object.prototype.hasOwnProperty.call(this.image.h, b) || ("FONT" == a || null == a) && Object.prototype.hasOwnProperty.call(this.font.h, b) || ("SOUND" == a || "MUSIC" == a || null == a) && Object.prototype.hasOwnProperty.call(this.audio.h, b) ? !0 : !1;
    },
    set: function (b, a, c) {
        switch (a) {
        case "FONT":
            this.font.h[b] = c;
            break;
        case "IMAGE":
            if (!(c instanceof lime.graphics.Image)) throw haxe.Exception.thrown("Cannot cache non-Image asset: " + Std.string(c) + " as Image");
            this.image.h[b] = c;
            break;
        case "MUSIC":
        case "SOUND":
            if (!(c instanceof lime.media.AudioBuffer)) throw haxe.Exception.thrown("Cannot cache non-AudioBuffer asset: " + Std.string(c) + " as AudioBuffer");
            this.audio.h[b] = c;
            break;
        default:
            throw haxe.Exception.thrown(a + " assets are not cachable");
        }
    },
    clear: function (b) {
        if (null == b) this.audio = new haxe.ds.StringMap(), this.font = new haxe.ds.StringMap(), this.image = new haxe.ds.StringMap();else {
            for (var a = Object.keys(this.audio.h), c = a.length, d = 0; d < c;) {
                var f = a[d++];
                if (StringTools.startsWith(f, b)) {
                    var l = this.audio;
                    Object.prototype.hasOwnProperty.call(l.h, f) && delete l.h[f];
                }
            }
            a = Object.keys(this.font.h);
            c = a.length;
            for (d = 0; d < c;) f = a[d++], StringTools.startsWith(f, b) && (l = this.font, Object.prototype.hasOwnProperty.call(l.h, f) && delete l.h[f]);
            a = Object.keys(this.image.h);
            c = a.length;
            for (d = 0; d < c;) f = a[d++], StringTools.startsWith(f, b) && (l = this.image, Object.prototype.hasOwnProperty.call(l.h, f) && delete l.h[f]);
        }
    },
    __class__: lime.utils.AssetCache
}