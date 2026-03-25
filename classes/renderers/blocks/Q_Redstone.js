renderers.blocks.Q_Redstone = function (b, a, c) {
    this.colorMultiplier = 1;
    this.power = 0;
    this.state = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Redstone"] = renderers.blocks.Q_Redstone
renderers.blocks.Q_Redstone.__name__ = "renderers.blocks.Q_Redstone"
renderers.blocks.Q_Redstone.__super__ = renderers.Q_Base
renderers.blocks.Q_Redstone.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        if (3 == this.state) var b = this.entity,
            a = this.quadPositions[0],
            c = this.destination,
            d = new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y),
            f = new lemongine.Point(-this.textureClip.width, this.textureClip.height),
            l = new lemongine.Point(1, 1),
            h = new haxe.ds.StringMap(),
            m = lemongine.Mathz.repeatArray([this.colorMultiplier, 1, 1, 1], 6);else b = this.entity, a = this.quadPositions[0], c = this.destination, d = new lemongine.Point(this.textureClip.x, this.textureClip.y), f = new lemongine.Point(this.textureClip.width, this.textureClip.height), l = new lemongine.Point(1, 1), h = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([this.colorMultiplier, 1, 1, 1], 6);
        h.h.color = m;
        b.updateQuad(a, c, d, f, l, null, null, h);
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        1 == BlockData.get(Main.Instance.game.world.getFG(b.x - 1, b.y + 1), "walkThroughBlock") && "rsd" == Main.Instance.game.world.getFG(b.x - 1, b.y + 1) ? 1 == BlockData.get(Main.Instance.game.world.getFG(b.x + 1, b.y + 1), "walkThroughBlock") && "rsd" == Main.Instance.game.world.getFG(b.x + 1, b.y + 1) ? this.state = 4 : this.state = 2 : 1 == BlockData.get(Main.Instance.game.world.getFG(b.x + 1, b.y + 1), "walkThroughBlock") && "rsd" == Main.Instance.game.world.getFG(b.x + 1, b.y + 1) ? this.state = 3 : this.state = 1;
        this.power = null != b.hasSignal ? b.hasSignal[0] / 10 : 0;
        this.colorMultiplier = 0 < this.power ? .5 * this.power + .5 : .4;
        this.textureClip = Textures.getTexture(this.textureID, 1 == this.state ? "floor" : 4 == this.state ? "walls" : "wall");
        return this;
    },
    __class__: renderers.blocks.Q_Redstone
})