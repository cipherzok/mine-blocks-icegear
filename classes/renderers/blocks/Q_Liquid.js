renderers.blocks.Q_Liquid = function (b, a, c) {
    this.isItem = !1;
    this.liquidStates = 0;
    this.worldLocation = new lemongine.Point(0, 0);
    this.water = [10, 10];
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Liquid"] = renderers.blocks.Q_Liquid
renderers.blocks.Q_Liquid.__name__ = "renderers.blocks.Q_Liquid"
renderers.blocks.Q_Liquid.__super__ = renderers.Q_Base
renderers.blocks.Q_Liquid.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (0 == this.quadPositions.length) this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));else if (0 != Main.Instance.game.world.tick % 4 && !this.isItem) return;
        if (this.isItem) this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width / 5, this.textureClip.height / 5), new lemongine.Point(1, 1));else {
            var b = this.destination.x,
                a = this.destination.y,
                c = this.textureClip,
                d = 0,
                f = 0;
            9 > this.water[0] && (d = Math.pow(1 - (this.water[0] - (10 - this.liquidStates)) / (8 - (10 - this.liquidStates)) * .775, .5));
            9 > this.water[1] && (f = Math.pow(1 - (this.water[1] - (10 - this.liquidStates)) / (8 - (10 - this.liquidStates)) * .775, .5));
            var g = this.worldLocation.x % 4 * .25,
                h = Math.floor(16 * -this.worldLocation.y - Main.Instance.game.world.tick / 16) / 16 % 4 * .25 + .25 * d,
                m = this.worldLocation.x % 4 * .25,
                x = .25 + Math.floor(16 * -this.worldLocation.y - Main.Instance.game.world.tick / 16) / 16 % 4 * .25,
                t = .25 + this.worldLocation.x % 4 * .25,
                q = Math.floor(16 * -this.worldLocation.y - Main.Instance.game.world.tick / 16) / 16 % 4 * .25 + .25 * f,
                w = .25 + this.worldLocation.x % 4 * .25,
                v = Math.floor(16 * -this.worldLocation.y - Main.Instance.game.world.tick / 16) / 16 % 4 * .25 + .25 * f,
                r = this.worldLocation.x % 4 * .25,
                C = .25 + Math.floor(16 * -this.worldLocation.y - Main.Instance.game.world.tick / 16) / 16 % 4 * .25,
                K = .25 + this.worldLocation.x % 4 * .25,
                la = .25 + Math.floor(16 * -this.worldLocation.y - Main.Instance.game.world.tick / 16) / 16 % 4 * .25;
            this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(b, a), new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), new lemongine.Point(1, 1), [b, a + d, 0, b, a + 1, 0, b + 1, a + f, 0, b + 1, a + f, 0, b, a + 1, 0, b + 1, a + 1, 0], [g, h, m, x, t, q, w, v, r, C, K, la]);
        }
    },
    setWater: function (b) {
        this.water[0] = b[0];
        this.water[1] = b[1];
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.hasFrameEvent = !0;
        null != b.water && (this.water = b.water);
        this.worldLocation = new lemongine.Point(b.x, b.y);
        this.liquidStates = BlockData.get(b.type, "liquidStates");
        this.textureClip = Textures.getTexture(this.textureID);
        this.isItem = !1;
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.isItem = !0;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Liquid
})