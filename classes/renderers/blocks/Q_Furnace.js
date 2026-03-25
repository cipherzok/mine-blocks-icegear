renderers.blocks.Q_Furnace = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Furnace"] = renderers.blocks.Q_Furnace
renderers.blocks.Q_Furnace.__name__ = "renderers.blocks.Q_Furnace"
renderers.blocks.Q_Furnace.__super__ = renderers.Q_Base
renderers.blocks.Q_Furnace.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = !1;
        null != b.toSmelt && Object.prototype.hasOwnProperty.call(js.Boot.__cast(b.toSmelt, haxe.ds.StringMap).h, "fuelTimer") && 0 < js.Boot.__cast(b.toSmelt, haxe.ds.StringMap).h.fuelTimer && (a = !0);
        this.textureClip = Textures.getTexture(this.textureID, a ? "on" : "off");
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "off");
        return this;
    },
    __class__: renderers.blocks.Q_Furnace
})