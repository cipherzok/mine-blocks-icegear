renderers.blocks.Q_Portal = function (b, a, c) {
    this.isItem = !1;
    this.worldLocation = new lemongine.Point(0, 0);
    this.rotSpeed = 0;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Portal"] = renderers.blocks.Q_Portal
renderers.blocks.Q_Portal.__name__ = "renderers.blocks.Q_Portal"
renderers.blocks.Q_Portal.__super__ = renderers.Q_Base
renderers.blocks.Q_Portal.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (0 == this.quadPositions.length) {
            var b = this.entity.nearestConsecutiveEmpty(2);
            this.quadPositions.push(b);
            this.quadPositions.push(b + 1);
        } else if (!this.isItem) {
            this.frameEvent();
            return;
        }
        this.textureClip = Textures.getTexture(this.textureID);
        b = Textures.getTexture(this.textureID, "gradient");
        this.rotSpeed = (0 == (this.worldLocation.x + this.worldLocation.y) % 2 ? -3 : 3) / 180 * Math.PI / 2;
        var a = .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed),
            c = .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed),
            d = .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2),
            f = .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2),
            g = .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2),
            h = .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2),
            m = .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2),
            x = .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2),
            t = .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2),
            q = .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2),
            w = .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + Math.PI),
            v = .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + Math.PI);
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [a, c, d, f, g, h, m, x, t, q, w, v]);
        this.isItem ? this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(), new lemongine.Point(), new lemongine.Point()) : this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x, this.destination.y - 1), new lemongine.Point(b.x, b.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    frameEvent: function () {
        this.entity.updateQuad(this.quadPositions[0], null, null, null, null, null, [.5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed), .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed), .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2), .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2), .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2), .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2), .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2), .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + 3 * Math.PI / 2), .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2), .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + Math.PI / 2), .5 + .5 * Math.cos(Main.Instance.game.world.tick * this.rotSpeed + Math.PI), .5 + .5 * Math.sin(Main.Instance.game.world.tick * this.rotSpeed + Math.PI)]);
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.hasFrameEvent = !0;
        null != b.x && (this.worldLocation.x = b.x);
        null != b.y && (this.worldLocation.y = b.y);
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
    __class__: renderers.blocks.Q_Portal
})