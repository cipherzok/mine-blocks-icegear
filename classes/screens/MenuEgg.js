screens.MenuEgg = function (b, a, c) {
    this.cracking = this.crackAnimation = 0;
    this.clickOffset = new lemongine.Point();
    this.dragging = !1;
    this.speed = new lemongine.Point();
    this.position = null;
    this.id = 0;
    this.position = b;
    this.speed.set(a, c);
    Main.Instance.MUTED || lemongine.AssetManager.getSound("layEgg_0").play(GlobalSave.soundVol / 100, this.position.x / Main.Instance.scene.get_width() - .5);
    this.id = screens.MenuEgg.chickenNum++;
}
m["screens.MenuEgg"] = screens.MenuEgg
screens.MenuEgg.__name__ = "screens.MenuEgg"
screens.MenuEgg.prototype = {
    __class__: screens.MenuEgg
}
screens.MenuEgg.chickenNum = 0