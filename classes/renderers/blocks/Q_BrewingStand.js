renderers.blocks.Q_BrewingStand = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_BrewingStand"] = renderers.blocks.Q_BrewingStand
renderers.blocks.Q_BrewingStand.__name__ = "renderers.blocks.Q_BrewingStand"
renderers.blocks.Q_BrewingStand.__super__ = renderers.Q_Base
renderers.blocks.Q_BrewingStand.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "0";
        if (null != b.toBrew) {
            a = 0;
            b = b.toBrew;
            if (null != b && null != b.h.output) {
                var c = b.h.output[0];
                Game.isEmptyItem(c) || (a = 1);
                c = b.h.output[1];
                Game.isEmptyItem(c) || ++a;
                c = b.h.output[2];
                Game.isEmptyItem(c) || ++a;
            }
            a = null == a ? "null" : "" + a;
        }
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "0");
        return this;
    },
    __class__: renderers.blocks.Q_BrewingStand
})