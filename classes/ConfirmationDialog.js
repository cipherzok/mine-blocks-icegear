var ConfirmationDialog = function (b) {
    this.escapePressedWhileDialogOpen = this.returnPressedWhileDialogOpen = !1;
    this.buttonsY = this.denyButtonX = this.denyButtonWidth = this.affirmButtonX = this.affirmButtonWidth = 0;
    this.dialogID = "";
    this.visible = !1;
    this.scene = b;
    b = lemongine.AssetManager.getImage("ui");
    var a = shader.TwoTexture.getShader(shader.BlendMode.NORMAL),
        c = new haxe.ds.StringMap(),
        d = lemongine.Mathz.repeatArray([0], 6);
    c.h.texBlend = d;
    d = lemongine.Mathz.repeatArray([1], 24);
    c.h.color = d;
    d = lemongine.Mathz.repeatArray([0], 24);
    c.h.colorOffset = d;
    this.dialog = new lemongine.QuadPoolEntity(b, null, a, c);
    this.dialog.setTextureBuffer("texture2", lemongine.AssetManager.getImage("mobs"));
    this.dialog.setUniform("texSize2", [lemongine.AssetManager.getImage("mobs").width, lemongine.AssetManager.getImage("mobs").height]);
    this.dialog.layer = 40;
    this.dialog.isTransparent = !0;
    this.dialog.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
};
m.ConfirmationDialog = ConfirmationDialog
ConfirmationDialog.__name__ = "ConfirmationDialog"
ConfirmationDialog.prototype = {
    open: function (b, a) {
        null == a && (a = "");
        this.visible = !0;
        this.dialogData = b;
        this.dialogID = a;
        this.returnPressedWhileDialogOpen = this.escapePressedWhileDialogOpen = !1;
    },
    close: function () {
        this.visible = !1;
    },
    isOpenToDialog: function (b) {
        return this.visible ? this.dialogID == b : !1;
    },
    setBodyText: function (b) {
        this.dialogData.bodyText = b;
    },
    prepareInteraction: function () {
        var b = this;
        if (this.visible && null != this.dialogData) {
            this.dialogData.lastPrepareTick = Main.Instance.tick;
            var a = this.dialogData.bodyText,
                c = new lemongine.Point(0, 0),
                d = Fonts.get_volter();
            this.dialogData.bodyTextEntity = TextCache.get("confirmationDialogBodyTest", a, c, d, lemongine.Color.white);
            this.dialogData.bodyTextEntity.setWordWrap(Math.floor(this.dialogData.size.x - 85 - 15));
            this.dialogData.size.y = 60 + this.dialogData.bodyTextEntity.calculatedHeight + ("" != this.dialogData.buttonDenyText || "" != this.dialogData.buttonAffirmText ? 40 : 0);
            a = this.scene.get_width() / 2;
            this.dialogData.x = Math.floor(a - this.dialogData.size.x / 2);
            a = this.scene.get_height() / 2;
            this.dialogData.y = Math.floor(a - this.dialogData.size.y / 2);
            this.buttonsY = this.scene.get_height() / 2 + this.dialogData.size.y / 2 - 14 - 26 | 0;
            this.denyButtonWidth = 0;
            "" != this.dialogData.buttonDenyText && (this.denyButtonWidth = 12 * TextCache.get("confirmationDialogDeny", this.dialogData.buttonDenyText, new lemongine.Point(), Fonts.get_volter(), null, 1.3333333333333333, lemongine.TextAlignment.CENTER).calculatedWidth / 9 + 20, this.denyButtonX = this.scene.get_width() / 2 + this.dialogData.size.x / 2 - 15 - this.denyButtonWidth | 0, Main.addSimpleButtonBetter("confirmationDialogDeny", this.dialog, this.denyButtonX, this.buttonsY, Math.floor(this.denyButtonWidth), 26, 1.77, function () {}));
            "" != this.dialogData.buttonAffirmText && (this.affirmButtonWidth = 12 * TextCache.get("confirmationDialogAffirm", this.dialogData.buttonAffirmText, new lemongine.Point(), Fonts.get_volter(), null, 1.3333333333333333, lemongine.TextAlignment.CENTER).calculatedWidth / 9 + 20, this.affirmButtonX = this.scene.get_width() / 2 + this.dialogData.size.x / 2 - 15 - (0 == this.denyButtonWidth ? 0 : this.denyButtonWidth + 7) - this.affirmButtonWidth | 0, Main.addSimpleButtonBetter("confirmationDialogAffirm", this.dialog, this.affirmButtonX, this.buttonsY, Math.floor(this.affirmButtonWidth), 26, 1.77, function () {}));
            Main.buttonBehavior("confirmationDialogChicken", !this.dialogData.canClickChicken(), this.dialogData.x + 16 | 0, this.dialogData.y + 16 | 0, 52, 46, function () {
                b.dialogData.clickChicken();
            }, !1);
            "confirmationDialogAffirm" != Main.Instance.getUIHover() && "confirmationDialogDeny" != Main.Instance.getUIHover() && "confirmationDialogChicken" != Main.Instance.getUIHover() && (Main.Instance.setUIHover("confirmationDialog", !1), Main.Instance.cursor = lime.ui.MouseCursor.DEFAULT);
        }
    },
    run: function () {
        var b = this;
        if (this.visible && null != this.dialogData && this.dialogData.lastPrepareTick == Main.Instance.tick) {
            this.dialog.clearPool();
            var a = this.dialog,
                c = new lemongine.Vector3(),
                d = new lemongine.Point(96, 0),
                f = new lemongine.Point(1, 1),
                l = new lemongine.Point(this.scene.get_width(), this.scene.get_height()),
                p = new haxe.ds.StringMap(),
                Q = lemongine.Mathz.repeatArray([0, 0, 0, .5], 6);
            p.h.color = Q;
            a.addQuad(c, d, f, !0, l, null, null, p);
            this.dialog.add9Slice(new lemongine.Rectangle(this.dialogData.x - 7, this.dialogData.y - 4, this.dialogData.size.x + 14, this.dialogData.size.y + 14), new lemongine.Rectangle(0, 32, 32, 32), new lemongine.Rectangle(14, 14, 4, 4));
            a = this.dialog;
            c = new lemongine.Rectangle(this.dialogData.x, this.dialogData.y, this.dialogData.size.x, this.dialogData.size.y);
            d = new lemongine.Rectangle(0, 16, 16, 16);
            f = new lemongine.Rectangle(6, 6, 4, 4);
            p = new haxe.ds.StringMap();
            Q = lemongine.Mathz.repeatArray([0, 0, 0, 5], 6);
            p.h.color = Q;
            Q = lemongine.Mathz.repeatArray([.09803921568627451, .24313725490196078, .5529411764705883, 0], 6);
            p.h.colorOffset = Q;
            a.add9Slice(c, d, f, 0, p);
            this.dialog.addQuad(new lemongine.Vector3(this.dialogData.x + 14 | 0, this.dialogData.y + 16 | 0), new lemongine.Point(194, 170), new lemongine.Point(52, 46));
            a = this.dialog;
            c = new lemongine.Vector3(this.dialogData.x + 16, this.dialogData.y + 16 + 9);
            d = new lemongine.Point(14 * (this.dialogData.canClickChicken() ? 0 : 8), 182);
            f = new lemongine.Point(14, 11);
            l = new lemongine.Point(42, 33);
            var h = lemongine.Geom.flippedQuadUVs;
            p = new haxe.ds.StringMap();
            Q = lemongine.Mathz.repeatArray([1], 6);
            p.h.texBlend = Q;
            a.addQuad(c, d, f, !0, l, null, h, p);
            a = this.dialog;
            c = new lemongine.Vector3(this.dialogData.x + 16 + 33 + (this.dialogData.chickenHeadFlipped ? -6 : 0), this.dialogData.y + 16);
            d = new lemongine.Point(28, 197);
            f = new lemongine.Point(5, 8);
            l = new lemongine.Point(15, 24);
            h = this.dialogData.chickenHeadFlipped ? null : lemongine.Geom.flippedQuadUVs;
            p = new haxe.ds.StringMap();
            Q = lemongine.Mathz.repeatArray([1], 6);
            p.h.texBlend = Q;
            a.addQuad(c, d, f, !0, l, null, h, p);
            Math.random() < 1 / (10 * Main.Instance.get_fps()) && (this.dialogData.chickenHeadFlipped = !0);
            Math.random() < 1 / (6 * Main.Instance.get_fps()) && (this.dialogData.chickenHeadFlipped = !1);
            a = TextCache.get("confirmationDialogTitle", this.dialogData.titleText, new lemongine.Point(this.dialogData.x + 85, this.dialogData.y + 17), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT);
            a.layer = 41;
            this.scene.draw(a);
            a = TextCache.get("confirmationDialogBody", this.dialogData.bodyText, new lemongine.Point(this.scene.get_width() / 2 - this.dialogData.size.x / 2 + 85, this.scene.get_height() / 2 - this.dialogData.size.y / 2 + 43), Fonts.get_volter(), lemongine.Color.white);
            a.setWordWrap(Math.floor(this.dialogData.size.x - 85 - 15));
            a.layer = 41;
            this.scene.draw(a);
            "" != this.dialogData.buttonDenyText && (a = Main.addSimpleButtonBetter("confirmationDialogDeny", this.dialog, this.denyButtonX, this.buttonsY, Math.floor(this.denyButtonWidth), 26, 1.77, function () {
                b.close();
                null != b.dialogData.buttonDenyAction && b.dialogData.buttonDenyAction();
            }) ? TextCache.get("confirmationDialogDeny", this.dialogData.buttonDenyText, new lemongine.Point(this.denyButtonX + this.denyButtonWidth / 2 + 1 + 1.77, this.buttonsY + 13 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("confirmationDialogDeny", this.dialogData.buttonDenyText, new lemongine.Point(this.denyButtonX + this.denyButtonWidth / 2 + 1, this.buttonsY + 13 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER), a.layer = 41, this.scene.draw(a), 1 == Main.Instance.keyDown(27) && (this.escapePressedWhileDialogOpen = !0), 1 != Main.Instance.mouseUp() && this.escapePressedWhileDialogOpen && 1 == Main.Instance.keyUp(27) && (this.close(), null != this.dialogData.buttonDenyAction && this.dialogData.buttonDenyAction()));
            "" != this.dialogData.buttonAffirmText && (a = Main.addSimpleButtonBetter("confirmationDialogAffirm", this.dialog, this.affirmButtonX, this.buttonsY, Math.floor(this.affirmButtonWidth), 26, 1.77, function () {
                b.close();
                null != b.dialogData.buttonAffirmAction && b.dialogData.buttonAffirmAction();
            }) ? TextCache.get("confirmationDialogAffirm", this.dialogData.buttonAffirmText, new lemongine.Point(this.affirmButtonX + this.affirmButtonWidth / 2 + 1 + 1.77, this.buttonsY + 13 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("confirmationDialogAffirm", this.dialogData.buttonAffirmText, new lemongine.Point(this.affirmButtonX + this.affirmButtonWidth / 2 + 1, this.buttonsY + 13 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER), a.layer = 41, this.scene.draw(a), 1 == Main.Instance.keyDown(13) && (this.returnPressedWhileDialogOpen = !0), 1 != Main.Instance.mouseUp() && this.returnPressedWhileDialogOpen && 1 == Main.Instance.keyUp(13) && (this.close(), null != this.dialogData.buttonAffirmAction && this.dialogData.buttonAffirmAction()));
            this.dialog.resetUnusedQuads();
            this.scene.draw(this.dialog);
        }
    },
    __class__: ConfirmationDialog
}