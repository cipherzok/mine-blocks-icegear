screens.Menu_Respawn = function (b) {
    this.scene = b;
    this.backgroundEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicColor.getShader());
    lemongine.shader.BasicColor.setupEntity(this.backgroundEntity, Colors.palette.mbBG);
    this.backgroundEntity.transform.reset().translate(.5, .5).scale(b.get_width(), b.get_height());
    this.backgroundEntity.layer = -2;
    b = lemongine.AssetManager.getImage("ui");
    var a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
        c = new haxe.ds.StringMap(),
        d = lemongine.Mathz.repeatArray([1], 24);
    c.h.color = d;
    d = lemongine.Mathz.repeatArray([0], 24);
    c.h.colorOffset = d;
    this.buttonEntity = new lemongine.QuadPoolEntity(b, null, a, c);
    this.buttonEntity.isTransparent = !0;
    this.buttonEntity.layer = -1;
}
m["screens.Menu_Respawn"] = screens.Menu_Respawn
screens.Menu_Respawn.__name__ = "screens.Menu_Respawn"
screens.Menu_Respawn.prototype = {
    resize: function () {
        this.backgroundEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
    },
    run: function () {
        this.scene.draw(this.backgroundEntity);
        var b = TextCache.get("deathText", "You died! " + (Main.Instance.game.world.hardcore ? "Spectate?" : "Respawn?"), new lemongine.Point(this.scene.get_width() / 2, 45), Fonts.get_volter(), lemongine.Color.white, 2.5, lemongine.TextAlignment.CENTER, 1.5);
        this.scene.draw(b);
        this.buttonEntity.clearPool();
        b = Main.addSimpleButtonBetter("respawn", this.buttonEntity, this.scene.get_width() / 2 - 175 | 0, 73, 165, 28, 1.77, function () {
            Main.Instance.fadeOut(.1, function () {
                Main.Instance.game.isScavenger || InterstitialManager.run();
                Main.Instance.fadeIn(.1);
                Main.Instance.set_frame("game");
                null != window.gameplayStart && window.gameplayStart();
            });
        }) ? TextCache.get("respawn", Main.Instance.game.world.hardcore ? "Spectate" : "Respawn", new lemongine.Point(this.scene.get_width() / 2 - 175 + 83, 89), Fonts.get_volter(), lemongine.Color.white, 2.25, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("respawn", Main.Instance.game.world.hardcore ? "Spectate" : "Respawn", new lemongine.Point(this.scene.get_width() / 2 - 175 + 82, 88), Fonts.get_volter(), lemongine.Color.white, 2.25, lemongine.TextAlignment.CENTER, 1.5);
        this.scene.draw(b);
        b = Main.addSimpleButtonBetter("mainMenu", this.buttonEntity, this.scene.get_width() / 2 + 10 | 0, 73, 165, 28, 1.77, function () {
            Main.Instance.game.exit();
        }) ? TextCache.get("mainMenu", "Main menu", new lemongine.Point(this.scene.get_width() / 2 + 93, 89), Fonts.get_volter(), lemongine.Color.white, 2.25, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("mainMenu", "Main menu", new lemongine.Point(this.scene.get_width() / 2 + 92, 88), Fonts.get_volter(), lemongine.Color.white, 2.25, lemongine.TextAlignment.CENTER, 1.5);
        this.scene.draw(b);
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    __class__: screens.Menu_Respawn
}