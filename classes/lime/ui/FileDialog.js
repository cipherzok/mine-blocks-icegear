lime.ui.FileDialog = function () {
    this.onSave = new lime.app._Event_String_Void();
    this.onCancel = new lime.app._Event_Void_Void();
}
m["lime.ui.FileDialog"] = lime.ui.FileDialog
lime.ui.FileDialog.__name__ = "lime.ui.FileDialog"
lime.ui.FileDialog.prototype = {
    save: function (b, a, c, d, f) {
        null == f && (f = "application/octet-stream");
        if (null == b) return this.onCancel.dispatch(), !1;
        a = "";
        lime.graphics.Image.__isPNG(b) ? (f = "image/png", a = ".png") : lime.graphics.Image.__isJPG(b) ? (f = "image/jpeg", a = ".jpg") : lime.graphics.Image.__isGIF(b) ? (f = "image/gif", a = ".gif") : lime.graphics.Image.__isWebP(b) && (f = "image/webp", a = ".webp");
        c = null != c ? haxe.io.Path.withoutDirectory(c) : "download" + a;
        a = b.b.bufferValue;
        a = a.slice(0, b.length);
        window.saveAs(new Blob([a], {
            type: f
        }), c, !0);
        this.onSave.dispatch(c);
        return !0;
    },
    __class__: lime.ui.FileDialog
}