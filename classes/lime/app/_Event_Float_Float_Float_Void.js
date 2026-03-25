lime.app._Event_Float_Float_Float_Void = function () {
    this.canceled = !1;
    this.__listeners = [];
    this.__priorities = [];
    this.__repeat = [];
}
m["lime.app._Event_Float_Float_Float_Void"] = lime.app._Event_Float_Float_Float_Void
lime.app._Event_Float_Float_Float_Void.__name__ = "lime.app._Event_Float_Float_Float_Void"
lime.app._Event_Float_Float_Float_Void.prototype = {
    remove: function (b) {
        for (var a = this.__listeners.length; 0 <= --a;) this.__listeners[a] == b && (this.__listeners.splice(a, 1), this.__priorities.splice(a, 1), this.__repeat.splice(a, 1));
    },
    dispatch: function (b, a, c) {
        this.canceled = !1;
        for (var d = this.__listeners, f = this.__repeat, g = 0; g < d.length && (d[g](b, a, c), f[g] ? ++g : this.remove(d[g]), !this.canceled););
    },
    __class__: lime.app._Event_Float_Float_Float_Void
}