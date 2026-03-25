lime.ui.Gamepad = function (b) {
    this.onDisconnect = new lime.app._Event_Void_Void();
    this.onButtonUp = new lime.app._Event_lime_ui_GamepadButton_Void();
    this.onButtonDown = new lime.app._Event_lime_ui_GamepadButton_Void();
    this.onAxisMove = new lime.app._Event_lime_ui_GamepadAxis_Float_Void();
    this.id = b;
    this.connected = !0;
}
m["lime.ui.Gamepad"] = lime.ui.Gamepad
lime.ui.Gamepad.__name__ = "lime.ui.Gamepad"
lime.ui.Gamepad.__connect = function (b) {
    if (!lime.ui.Gamepad.devices.h.hasOwnProperty(b)) {
        var a = new lime.ui.Gamepad(b);
        lime.ui.Gamepad.devices.h[b] = a;
        lime.ui.Gamepad.onConnect.dispatch(a);
    }
}
lime.ui.Gamepad.__disconnect = function (b) {
    var a = lime.ui.Gamepad.devices.h[b];
    null != a && (a.connected = !1);
    lime.ui.Gamepad.devices.remove(b);
    null != a && a.onDisconnect.dispatch();
}
lime.ui.Gamepad.prototype = {
    __class__: lime.ui.Gamepad
}
lime.ui.Gamepad.devices = new haxe.ds.IntMap()
lime.ui.Gamepad.onConnect = new lime.app._Event_lime_ui_Gamepad_Void()