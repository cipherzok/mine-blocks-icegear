io.newgrounds.components.MedalComponent = function (b) {
    this._core = b;
}
m["io.newgrounds.components.MedalComponent"] = io.newgrounds.components.MedalComponent
io.newgrounds.components.MedalComponent.__name__ = "io.newgrounds.components.MedalComponent"
io.newgrounds.components.MedalComponent.__super__ = io.newgrounds.components.Component
io.newgrounds.components.MedalComponent.prototype = z(io.newgrounds.components.Component.prototype, {
    unlock: function (b) {
        return new io.newgrounds.Call(this._core, "Medal.unlock", !0, !0).addComponentParameter("id", b);
    },
    getList: function (b) {
        return new io.newgrounds.Call(this._core, "Medal.getList").addComponentParameter("app_id", b);
    },
    __class__: io.newgrounds.components.MedalComponent
})