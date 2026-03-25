var ConfirmationDialogData = function (b, a, c, d, f, l) {
    null == f && (f = "");
    null == c && (c = "");
    this.lastClickedChicken = this.chickenClicks = 0;
    this.chickenHeadFlipped = !1;
    this.lastPrepareTick = 0;
    this.titleText = this.bodyText = this.buttonAffirmText = this.buttonDenyText = "";
    this.size = new lemongine.Point(350, 100);
    this.titleText = b;
    this.bodyText = a;
    this.buttonAffirmText = c;
    this.buttonAffirmAction = d;
    this.buttonDenyText = f;
    this.buttonDenyAction = l;
    this.chickenClicks = 0;
};
m.ConfirmationDialogData = ConfirmationDialogData
ConfirmationDialogData.__name__ = "ConfirmationDialogData"
ConfirmationDialogData.prototype = {
    canClickChicken: function () {
        var b = Main.Instance.tick - this.lastClickedChicken,
            a = .8 * Main.Instance.get_fps();
        return G.toFloat(b) >= a;
    },
    clickChicken: function () {
        this.canClickChicken() && (this.lastClickedChicken = Main.Instance.tick, Main.Instance.MUTED || lemongine.AssetManager.getSound(["chicken1", "chicken2", "chicken3"][Math.floor(3 * Math.random())] + "_0").play(GlobalSave.soundVol / 100, -.3), "menu" == Main.Instance.frame && (this.chickenClicks++, 5 == this.chickenClicks && null == Main.Instance.mainMenu.chickenNonsense && (Main.Instance.mainMenu.chickenNonsense = new screens.ChickenNonsense(new lemongine.Point(this.x + 14 + 26 - 8, this.y + 16 + 46 - 8)))));
    },
    __class__: ConfirmationDialogData
}