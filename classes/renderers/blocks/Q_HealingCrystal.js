renderers.blocks.Q_HealingCrystal = function (b, a, c) {
    this.rotation = this.width = this.alpha = 0;
    this.matrix = new lemongine.Matrix4();
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_HealingCrystal"] = renderers.blocks.Q_HealingCrystal
renderers.blocks.Q_HealingCrystal.__name__ = "renderers.blocks.Q_HealingCrystal"
renderers.blocks.Q_HealingCrystal.__super__ = renderers.Q_Base
renderers.blocks.Q_HealingCrystal.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(3)), this.quadPositions.push(this.quadPositions[0] + 1), this.quadPositions.push(this.quadPositions[0] + 2));
        var b = Textures.getTexture("ehc_beam");
        this.matrix.reset().translate(0, -.5).scale(this.width, -.64).rotate2D(-this.rotation / 180 * Math.PI).translate(.5, .5).translate(this.destination.x, this.destination.y, this.destination.z);
        var a = this.entity,
            c = this.quadPositions[0],
            d = new lemongine.Point(b.x, b.y),
            f = new lemongine.Point(b.width, b.height),
            l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1, 1), this.matrix),
            h = [-Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + .25, 0, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + .25, 1, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + .25 + this.width * Main.Instance.game.zoom / 256, 0, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + .25 + this.width * Main.Instance.game.zoom / 256, 0, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + .25, 1, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + .25 + this.width * Main.Instance.game.zoom / 256, 1],
            m = new haxe.ds.StringMap(),
            x = lemongine.Mathz.repeatArray([1, 1, 1, .5 * this.alpha], 6);
        m.h.color = x;
        a.updateQuad(c, null, d, f, null, l, h, m);
        this.matrix.reset().translate(0, -.5).scale(this.width, .64).rotate2D(-this.rotation / 180 * Math.PI).translate(.5, .5).translate(this.destination.x, this.destination.y, this.destination.z);
        a = this.entity;
        c = this.quadPositions[1];
        d = new lemongine.Point(b.x, b.y);
        f = new lemongine.Point(b.width, b.height);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1, 1), this.matrix);
        h = [-Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25), 0, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25), 1, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + this.width * Main.Instance.game.zoom / 256, 0, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + this.width * Main.Instance.game.zoom / 256, 0, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25), 1, -Main.Instance.game.world.tick / (40 * Main.Instance.get_fps() / 25) + this.width * Main.Instance.game.zoom / 256, 1];
        m = new haxe.ds.StringMap();
        x = lemongine.Mathz.repeatArray([1, 1, 1, this.alpha], 6);
        m.h.color = x;
        a.updateQuad(c, null, d, f, null, l, h, m);
        this.entity.updateQuad(this.quadPositions[2], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    __class__: renderers.blocks.Q_HealingCrystal
})