renderers.blocks.Q_PortalFrame = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_PortalFrame"] = renderers.blocks.Q_PortalFrame
renderers.blocks.Q_PortalFrame.__name__ = "renderers.blocks.Q_PortalFrame"
renderers.blocks.Q_PortalFrame.__super__ = renderers.Q_Base
renderers.blocks.Q_PortalFrame.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "";
        null != b.states1 && 2 == b.states1 && (a = "eye");
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    __class__: renderers.blocks.Q_PortalFrame
})