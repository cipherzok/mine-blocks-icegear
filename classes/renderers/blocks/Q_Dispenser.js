renderers.blocks.Q_Dispenser = function (b, a, c) {
    renderers.blocks.Q_Piston.call(this, b, a, c);
}
m["renderers.blocks.Q_Dispenser"] = renderers.blocks.Q_Dispenser
renderers.blocks.Q_Dispenser.__name__ = "renderers.blocks.Q_Dispenser"
renderers.blocks.Q_Dispenser.__super__ = renderers.blocks.Q_Piston
renderers.blocks.Q_Dispenser.prototype = z(renderers.blocks.Q_Piston.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        1 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : 2 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : 3 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]) : 4 == this.state && this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]);
    },
    __class__: renderers.blocks.Q_Dispenser
})