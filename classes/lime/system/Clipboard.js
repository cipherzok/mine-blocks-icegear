lime.system.Clipboard = function () {}
m["lime.system.Clipboard"] = lime.system.Clipboard
lime.system.Clipboard.__name__ = "lime.system.Clipboard"
lime.system.Clipboard.__update = function () {
    var b = lime.system.Clipboard._text;
    lime.system.Clipboard._text = b;
    lime.system.Clipboard.__updated = !0;
    lime.system.Clipboard._text != b && lime.system.Clipboard.onUpdate.dispatch();
}
lime.system.Clipboard.get_text = function () {
    lime.system.Clipboard.__update();
    return lime.system.Clipboard._text;
}
lime.system.Clipboard.set_text = function (b) {
    var a = lime.system.Clipboard._text;
    lime.system.Clipboard._text = b;
    var c = lime.app.Application.current.__window;
    null != c && c.__backend.setClipboard(b);
    lime.system.Clipboard._text != a && lime.system.Clipboard.onUpdate.dispatch();
    return b;
}
lime.system.Clipboard.onUpdate = new lime.app._Event_Void_Void()
lime.system.Clipboard.__updated = !1