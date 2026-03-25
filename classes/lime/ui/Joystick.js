lime.ui.Joystick = function (b) {
    this.onHatMove = new lime.app._Event_Int_lime_ui_JoystickHatPosition_Void();
    this.onDisconnect = new lime.app._Event_Void_Void();
    this.onButtonUp = new lime.app._Event_Int_Void();
    this.onButtonDown = new lime.app._Event_Int_Void();
    this.onAxisMove = new lime.app._Event_Int_Float_Void();
    this.id = b;
    this.connected = !0;
}
m["lime.ui.Joystick"] = lime.ui.Joystick
lime.ui.Joystick.__name__ = "lime.ui.Joystick"
lime.ui.Joystick.__connect = function (b) {
    if (!lime.ui.Joystick.devices.h.hasOwnProperty(b)) {
        var a = new lime.ui.Joystick(b);
        lime.ui.Joystick.devices.h[b] = a;
        lime.ui.Joystick.onConnect.dispatch(a);
    }
}
lime.ui.Joystick.__disconnect = function (b) {
    var a = lime.ui.Joystick.devices.h[b];
    null != a && (a.connected = !1);
    lime.ui.Joystick.devices.remove(b);
    null != a && a.onDisconnect.dispatch();
}
lime.ui.Joystick.__getDeviceData = function () {
    var b = null;
    try {
        b = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null;
    } catch (a) {}
    return b;
}
lime.ui.Joystick.prototype = {
    __class__: lime.ui.Joystick
}
lime.ui.Joystick.devices = new haxe.ds.IntMap()
lime.ui.Joystick.onConnect = new lime.app._Event_lime_ui_Joystick_Void()