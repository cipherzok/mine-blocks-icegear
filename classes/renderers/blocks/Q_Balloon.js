renderers.blocks.Q_Balloon = function (b, a, c) {
    renderers.blocks.Q_Wool.call(this, b, a, c);
}
m["renderers.blocks.Q_Balloon"] = renderers.blocks.Q_Balloon
renderers.blocks.Q_Balloon.__name__ = "renderers.blocks.Q_Balloon"
renderers.blocks.Q_Balloon.__super__ = renderers.blocks.Q_Wool
renderers.blocks.Q_Balloon.prototype = z(renderers.blocks.Q_Wool.prototype, {
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        var a = "";
        this.color = "";
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, Object.prototype.hasOwnProperty.call(Colors.colors.h, b) ? (this.color = b, "rainbow" == this.color && (this.hasFrameEvent = !0)) : "ghast" == b && (a = "ghast"));
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    __class__: renderers.blocks.Q_Balloon
})