renderers.blocks.Q_Compass = function (b, a, c) {
    this.rotation = this.targetRotation = 0;
    this.randomize = !0;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Compass"] = renderers.blocks.Q_Compass
renderers.blocks.Q_Compass.__name__ = "renderers.blocks.Q_Compass"
renderers.blocks.Q_Compass.__super__ = renderers.Q_Base
renderers.blocks.Q_Compass.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        (this.randomize = 1 != Main.Instance.game.world.sceneNum) ? (0 == (G.toFloat(Main.Instance.tick) % G.toFloat(8) | 0) && (this.targetRotation = Math.random() * Math.PI * 2), this.targetRotation < this.rotation - Math.PI ? this.rotation -= 2 * Math.PI : this.targetRotation > this.rotation + Math.PI && (this.rotation += 2 * Math.PI), this.rotation += (this.targetRotation - this.rotation) / 10) : this.rotation = Math.atan2(-(Main.Instance.game.world.spawnPoint.y - Main.Instance.game.world.worldY), Main.Instance.game.world.spawnPoint.x - Main.Instance.game.world.worldX);
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1, 1), new lemongine.Matrix4().translate(-.5, -.5).rotate2D(this.rotation - Math.PI / 4).translate(.5, .5).scale2D(1).translate(this.destination.x, this.destination.y)));
        this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClipFrame.x, this.textureClipFrame.y), new lemongine.Point(this.textureClipFrame.width, this.textureClipFrame.height), new lemongine.Point(1, 1));
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.hasFrameEvent = !0;
        this.textureClip = Textures.getTexture(this.textureID, "dial");
        this.textureClipFrame = Textures.getTexture(this.textureID, "frame");
        return this;
    },
    __class__: renderers.blocks.Q_Compass
})