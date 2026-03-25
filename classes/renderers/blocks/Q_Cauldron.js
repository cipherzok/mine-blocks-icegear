renderers.blocks.Q_Cauldron = function (b, a, c) {
    this.exposed = !1;
    this.state = 0;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Cauldron"] = renderers.blocks.Q_Cauldron
renderers.blocks.Q_Cauldron.__name__ = "renderers.blocks.Q_Cauldron"
renderers.blocks.Q_Cauldron.__super__ = renderers.Q_Base
renderers.blocks.Q_Cauldron.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (0 < this.quadPositions.length) {
            if (this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)), this.exposed) {
                var b = Textures.getTexture(this.textureID, "background");
                this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1, 1));
                b = Textures.hasTexture(this.textureID, "foreground_final") && 1 == this.state ? Textures.getTexture(this.textureID, "foreground_final") : Textures.getTexture(this.textureID, "foreground");
                var a = b.x,
                    c = b.y + (1 - this.state) * b.height,
                    d = b.width;
                b = b.height * this.state;
                this.entity.updateQuad(this.quadPositions[2], new lemongine.Vector3(this.destination.x, this.destination.y + (1 - this.state)), new lemongine.Point(a, c), new lemongine.Point(d, b), new lemongine.Point(1, this.state));
            } else this.entity.updateQuad(this.quadPositions[1], this.destination, null, new lemongine.Point()), this.entity.updateQuad(this.quadPositions[2], this.destination, null, new lemongine.Point());
        } else a = this.entity.nearestConsecutiveEmpty(3), this.quadPositions.push(a), this.quadPositions.push(a + 1), this.quadPositions.push(a + 2), this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)), this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point()), this.entity.updateQuad(this.quadPositions[2], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point());
    },
    __class__: renderers.blocks.Q_Cauldron
})