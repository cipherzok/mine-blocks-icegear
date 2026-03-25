lime.app._Event_Int_lime_ui_JoystickHatPosition_Void = function () {
    this.canceled = !1;
    this.__listeners = [];
    this.__priorities = [];
    this.__repeat = [];
}
m["lime.app._Event_Int_lime_ui_JoystickHatPosition_Void"] = lime.app._Event_Int_lime_ui_JoystickHatPosition_Void
lime.app._Event_Int_lime_ui_JoystickHatPosition_Void.__name__ = "lime.app._Event_Int_lime_ui_JoystickHatPosition_Void"
lime.app._Event_Int_lime_ui_JoystickHatPosition_Void.prototype = {
    add: function (b, a, c) {
        null == c && (c = 0);
        null == a && (a = !1);
        for (var d = 0, f = this.__priorities.length; d < f;) {
            var g = d++;
            if (c > this.__priorities[g]) {
                this.__listeners.splice(g, 0, b);
                this.__priorities.splice(g, 0, c);
                this.__repeat.splice(g, 0, !a);
                return;
            }
        }
        this.__listeners.push(b);
        this.__priorities.push(c);
        this.__repeat.push(!a);
    },
    __class__: lime.app._Event_Int_lime_ui_JoystickHatPosition_Void
}