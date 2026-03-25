renderers.blocks.Q_LilyPad = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_LilyPad"] = renderers.blocks.Q_LilyPad
renderers.blocks.Q_LilyPad.__name__ = "renderers.blocks.Q_LilyPad"
renderers.blocks.Q_LilyPad.__super__ = renderers.Q_Base
renderers.blocks.Q_LilyPad.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1)), this.flip = .5 > Math.random());
        if (this.flip) {
            var b = this.textureClip.x + this.textureClip.width;
            this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y + .125), new lemongine.Point(b, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        } else this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y + .125), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    __class__: renderers.blocks.Q_LilyPad
})