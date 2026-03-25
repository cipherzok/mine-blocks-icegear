lime.app._Event_Dynamic_Void = function () {
    this.canceled = !1;
    this.__listeners = [];
    this.__priorities = [];
    this.__repeat = [];
}
m["lime.app._Event_Dynamic_Void"] = lime.app._Event_Dynamic_Void
lime.app._Event_Dynamic_Void.__name__ = "lime.app._Event_Dynamic_Void"
lime.app._Event_Dynamic_Void.prototype = {
    remove: function (b) {
        for (var a = this.__listeners.length; 0 <= --a;) this.__listeners[a] == b && (this.__listeners.splice(a, 1), this.__priorities.splice(a, 1), this.__repeat.splice(a, 1));
    },
    dispatch: function (b) {
        this.canceled = !1;
        for (var a = this.__listeners, c = this.__repeat, d = 0; d < a.length && (a[d](b), c[d] ? ++d : this.remove(a[d]), !this.canceled););
    },
    __class__: lime.app._Event_Dynamic_Void
}