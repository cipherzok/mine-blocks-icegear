renderers.blocks.Q_Door = function (b, a, c) {
    this.flip = this.isItem = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Door"] = renderers.blocks.Q_Door
renderers.blocks.Q_Door.__name__ = "renderers.blocks.Q_Door"
renderers.blocks.Q_Door.__super__ = renderers.Q_Base
renderers.blocks.Q_Door.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        this.isItem ? this.updateItem() : this.updateBlock();
    },
    updateBlock: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        this.flip ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    updateItem: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x + .25, this.destination.y), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(.5, .5));
        this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x + .25, this.destination.y + .5), new lemongine.Point(this.textureClip2.x, this.textureClip2.y), new lemongine.Point(this.textureClip2.width, this.textureClip2.height), new lemongine.Point(.5, .5));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        "top" == BlockData.get(b.type, "blockAssociation") ? this.flip = Object.prototype.hasOwnProperty.call(Main.Instance.game.world.states.h, "blockX" + b.x + "Y" + (b.y - 1)) && 2 == Main.Instance.game.world.states.h["blockX" + b.x + "Y" + (b.y - 1)] : this.flip = null != b.states1 && 2 == b.states1;
        this.isItem = !1;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.flip = !1;
        this.isItem = !0;
        this.textureClip = Textures.getTexture(this.textureID, "open_top");
        this.textureClip2 = Textures.getTexture(this.textureID, "open_bottom");
        return this;
    },
    __class__: renderers.blocks.Q_Door
})