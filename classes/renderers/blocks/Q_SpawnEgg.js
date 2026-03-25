renderers.blocks.Q_SpawnEgg = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_SpawnEgg"] = renderers.blocks.Q_SpawnEgg
renderers.blocks.Q_SpawnEgg.__name__ = "renderers.blocks.Q_SpawnEgg"
renderers.blocks.Q_SpawnEgg.__super__ = renderers.Q_Base
renderers.blocks.Q_SpawnEgg.prototype = z(renderers.Q_Base.prototype, {
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        var a = "";
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, Textures.hasTexture(this.textureID, b) && (a = b));
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    __class__: renderers.blocks.Q_SpawnEgg
})