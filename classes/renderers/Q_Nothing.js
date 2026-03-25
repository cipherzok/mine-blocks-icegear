renderers.Q_Nothing = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.Q_Nothing"] = renderers.Q_Nothing
renderers.Q_Nothing.__name__ = "renderers.Q_Nothing"
renderers.Q_Nothing.__super__ = renderers.Q_Base
renderers.Q_Nothing.prototype = z(renderers.Q_Base.prototype, {
    update: function () {},
    destroy: function () {},
    fromBlock: function (b) {
        return this;
    },
    __class__: renderers.Q_Nothing
})