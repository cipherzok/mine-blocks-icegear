io.newgrounds.components.AppComponent = function (b) {
    this._core = b;
}
m["io.newgrounds.components.AppComponent"] = io.newgrounds.components.AppComponent
io.newgrounds.components.AppComponent.__name__ = "io.newgrounds.components.AppComponent"
io.newgrounds.components.AppComponent.__super__ = io.newgrounds.components.Component
io.newgrounds.components.AppComponent.prototype = z(io.newgrounds.components.Component.prototype, {
    startSession: function (b) {
        null == b && (b = !1);
        return new io.newgrounds.Call(this._core, "App.startSession").addComponentParameter("force", b, !1);
    },
    checkSession: function () {
        return new io.newgrounds.Call(this._core, "App.checkSession", !0);
    },
    __class__: io.newgrounds.components.AppComponent
})