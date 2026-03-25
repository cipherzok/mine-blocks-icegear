renderers.blocks.Q_Stairs = function (b, a, c) {
    this.state = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Stairs"] = renderers.blocks.Q_Stairs
renderers.blocks.Q_Stairs.__name__ = "renderers.blocks.Q_Stairs"
renderers.blocks.Q_Stairs.__super__ = renderers.Q_Base
renderers.blocks.Q_Stairs.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        if (1 == this.state) {
            var b = this.textureClip.x + .5 * this.textureClip.width,
                a = this.textureClip.width / 2,
                c = this.textureClip.height / 2;
            this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x + .5, this.destination.y), new lemongine.Point(b, this.textureClip.y), new lemongine.Point(a, c), new lemongine.Point(.5, .5));
            b = this.textureClip.x;
            a = this.textureClip.y + .5 * this.textureClip.height;
            c = this.textureClip.width;
            var d = this.textureClip.height / 2;
            this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x, this.destination.y + .5), new lemongine.Point(b, a), new lemongine.Point(c, d), new lemongine.Point(1, .5));
        } else 2 == this.state ? (b = this.textureClip.width / 2, a = this.textureClip.height / 2, this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(b, a), new lemongine.Point(.5, .5)), b = this.textureClip.x, a = this.textureClip.y + .5 * this.textureClip.height, c = this.textureClip.width, d = this.textureClip.height / 2, this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x, this.destination.y + .5), new lemongine.Point(b, a), new lemongine.Point(c, d), new lemongine.Point(1, .5))) : 3 == this.state ? (b = this.textureClip.width, a = this.textureClip.height / 2, this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(b, a), new lemongine.Point(1, .5)), b = this.textureClip.x + .5 * this.textureClip.width, a = this.textureClip.y + .5 * this.textureClip.height, c = this.textureClip.width / 2, d = this.textureClip.height / 2, this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x + .5, this.destination.y + .5), new lemongine.Point(b, a), new lemongine.Point(c, d), new lemongine.Point(.5, .5))) : 4 == this.state && (b = this.textureClip.width, a = this.textureClip.height / 2, this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(b, a), new lemongine.Point(1, .5)), b = this.textureClip.x, a = this.textureClip.y + .5 * this.textureClip.height, c = this.textureClip.width / 2, d = this.textureClip.height / 2, this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x, this.destination.y + .5), new lemongine.Point(b, a), new lemongine.Point(c, d), new lemongine.Point(.5, .5)));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 1;
        null != b.states1 && (this.state = Std.parseInt(b.states1.toString()));
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Stairs
})