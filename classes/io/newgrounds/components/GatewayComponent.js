io.newgrounds.components.GatewayComponent = function (b) {
    this._core = b;
}
m["io.newgrounds.components.GatewayComponent"] = io.newgrounds.components.GatewayComponent
io.newgrounds.components.GatewayComponent.__name__ = "io.newgrounds.components.GatewayComponent"
io.newgrounds.components.GatewayComponent.__super__ = io.newgrounds.components.Component
io.newgrounds.components.GatewayComponent.prototype = z(io.newgrounds.components.Component.prototype, {
    ping: function () {
        return new io.newgrounds.Call(this._core, "Gateway.ping");
    },
    __class__: io.newgrounds.components.GatewayComponent
})