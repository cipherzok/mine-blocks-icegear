renderers.blocks.Q_Fence = function (b, a, c) {
    this.worldLocation = new lemongine.Point(0, 0);
    this.attachLeft = this.attachRight = !0;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Fence"] = renderers.blocks.Q_Fence
renderers.blocks.Q_Fence.__name__ = "renderers.blocks.Q_Fence"
renderers.blocks.Q_Fence.__super__ = renderers.Q_Base
renderers.blocks.Q_Fence.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        if (this.attachLeft != this.attachRight && Textures.hasTexture(this.textureID, "end") && 1 != BlockData.get(Main.Instance.game.world.getFG(this.worldLocation.x, this.worldLocation.y - 1), "walkThroughBlockHit")) this.textureClip = Textures.getTexture(this.textureID, "end"), this.attachLeft ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));else {
            var b = this.textureClip.x + (this.attachLeft ? 0 : .4375) * this.textureClip.width,
                a = (1 - ((this.attachLeft ? 0 : .4375) + (this.attachRight ? 0 : .4375))) * this.textureClip.width,
                c = this.attachLeft ? 0 : .4375,
                d = this.attachRight ? 0 : .4375;
            this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x + (this.attachLeft ? 0 : .4375), this.destination.y), new lemongine.Point(b, this.textureClip.y), new lemongine.Point(a, this.textureClip.height), new lemongine.Point(1 - (c + d), 1));
        }
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.gateConnects = BlockData.get(b.type, "blockAttach");
        this.worldLocation = new lemongine.Point(b.x, b.y);
        if (1 == BlockData.get(Main.Instance.game.world.getFG(b.x - 1, b.y), "walkThroughBlockHit")) {
            var a = this.gateConnects;
            var c = Main.Instance.game.world.getFG(b.x - 1, b.y);
            a = !Object.prototype.hasOwnProperty.call(a.h, c);
        } else a = !1;
        this.attachLeft = a ? !1 : !0;
        1 == BlockData.get(Main.Instance.game.world.getFG(b.x + 1, b.y), "walkThroughBlockHit") ? (a = this.gateConnects, c = Main.Instance.game.world.getFG(b.x + 1, b.y), a = !Object.prototype.hasOwnProperty.call(a.h, c)) : a = !1;
        this.attachRight = a ? !1 : !0;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.attachLeft = this.attachRight = !0;
        this.gateConnects = BlockData.get(b[0], "blockAttach");
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Fence
})