renderers.blocks.Q_Fire = function (b, a, c) {
    this.randomTexture = "1";
    this.litBottom = this.litLeft = this.litRight = this.litTop = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Fire"] = renderers.blocks.Q_Fire
renderers.blocks.Q_Fire.__name__ = "renderers.blocks.Q_Fire"
renderers.blocks.Q_Fire.__super__ = renderers.Q_Base
renderers.blocks.Q_Fire.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (0 == this.quadPositions.length) {
            var b = this.entity.nearestConsecutiveEmpty(4);
            this.quadPositions.push(b);
            this.quadPositions.push(b + 1);
            this.quadPositions.push(b + 2);
            this.quadPositions.push(b + 3);
            this.randomTexture = Std.string(1 + Math.floor(4 * Math.random()));
        } else 0 == Main.Instance.game.world.tick % 2 && (this.randomTexture = Std.string(1 + Math.floor(4 * Math.random())));
        b = this.destination.x;
        var a = this.destination.y,
            c = Textures.getTexture(this.textureID, this.randomTexture);
        this.litTop ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), null, [b + 1, a + .4, 0, b + 1, a, 0, b, a + .4, 0, b, a + .4, 0, b + 1, a, 0, b, a, 0], null, renderers.blocks.Q_Fire.alphaReduction) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), new lemongine.Point());
        this.litLeft ? (c = Textures.getTexture(this.textureID, Std.string(1 + Math.floor(4 * Math.random()))), this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), null, [b + .6, a - .3, 0, b, a, 0, b + .6, a + 1 - .3, 0, b + .6, a + 1 - .3, 0, b, a, 0, b, a + 1, 0], null, renderers.blocks.Q_Fire.alphaReduction)) : this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), new lemongine.Point());
        this.litRight ? (c = Textures.getTexture(this.textureID, Std.string(1 + Math.floor(4 * Math.random()))), this.entity.updateQuad(this.quadPositions[2], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), null, [b + .4, a + 1 - .3, 0, b + 1, a + 1, 0, b + .4, a - .3, 0, b + .4, a - .3, 0, b + 1, a + 1, 0, b + 1, a, 0], null, renderers.blocks.Q_Fire.alphaReduction)) : this.entity.updateQuad(this.quadPositions[2], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), new lemongine.Point());
        this.litBottom ? (c = Textures.getTexture(this.textureID, Std.string(1 + Math.floor(4 * Math.random()))), this.entity.updateQuad(this.quadPositions[3], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), new lemongine.Point(1, 1), null, null, renderers.blocks.Q_Fire.alphaReduction)) : this.entity.updateQuad(this.quadPositions[3], this.destination, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), new lemongine.Point());
    },
    setLit: function (b, a, c, d) {
        this.litBottom = b;
        this.litLeft = a;
        this.litRight = c;
        this.litTop = d;
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.hasFrameEvent = !0;
        this.litBottom = Main.Instance.game.world.canBeOnFire(b.x, b.y - 1);
        this.litLeft = Main.Instance.game.world.canBeOnFire(b.x - 1, b.y);
        this.litRight = Main.Instance.game.world.canBeOnFire(b.x + 1, b.y);
        this.litTop = Main.Instance.game.world.canBeOnFire(b.x, b.y + 1);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.hasFrameEvent = !1;
        this.litBottom = !0;
        this.litTop = this.litRight = this.litLeft = !1;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Fire
})
renderers.blocks.Q_Fire.alphaReduction = function (b) {
    b = new haxe.ds.StringMap();
    b.h.color = [1, 1, 1, .5, 1, 1, 1, .5, 1, 1, 1, .5, 1, 1, 1, .5, 1, 1, 1, .5, 1, 1, 1, .5];
    return b;
}(this)