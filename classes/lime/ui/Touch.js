lime.ui.Touch = function (b, a, c, d, f, g, k) {
    this.x = b;
    this.y = a;
    this.id = c;
    this.dx = d;
    this.dy = f;
    this.pressure = g;
    this.device = k;
}
m["lime.ui.Touch"] = lime.ui.Touch
lime.ui.Touch.__name__ = "lime.ui.Touch"
lime.ui.Touch.prototype = {
    __class__: lime.ui.Touch
}
lime.ui.Touch.onCancel = new lime.app._Event_lime_ui_Touch_Void()
lime.ui.Touch.onEnd = new lime.app._Event_lime_ui_Touch_Void()
lime.ui.Touch.onMove = new lime.app._Event_lime_ui_Touch_Void()
lime.ui.Touch.onStart = new lime.app._Event_lime_ui_Touch_Void()