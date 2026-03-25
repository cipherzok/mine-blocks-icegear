var Scavenger_Member = function (b, a, c, d, f, l) {
    null == l && (l = !0);
    var p = new haxe.ds.StringMap();
    p.h.falling = 0;
    p.h.wasFalling = 0;
    var k = new haxe.ds.StringMap();
    k.h.left = 0;
    k.h.right = 0;
    k.h.up = 0;
    k.h.down = 0;
    p.h.keys = k;
    p.h.x = 0;
    p.h.y = 0;
    p.h.xSpeed = 0;
    p.h.ySpeed = 0;
    p.h.characterCurrentFrame = 1;
    p.h.characterFrameNumber = 0;
    p.h.characterFrameTimer = 0;
    p.h.sneaking = !1;
    p.h.wasSprinting = !1;
    p.h.dead = 0;
    p.h.dimension = 1;
    p.h.lastTick = 0;
    p.h.collideY = 0;
    this.mobData = p;
    this.handItem = [];
    this.placement = this.smoothPlacementInterpolation = this.smoothPlacementStart = this.headRotation = 1;
    this.score = 0;
    this.entity = null;
    this.removeOnGameOver = !1;
    this.latestItemForLeaderboard = null;
    this.isItemFound = [];
    this.itemsFound = [];
    this.mobHeadRect = null;
    this.isSpectator = !1;
    this.skin = this.skinSlot = null;
    this.joinedGame = !0;
    this.hasPlus = !1;
    this.id = b;
    this.username = a;
    this.isSpectator = c;
    this.hasPlus = f;
    this.joinedGame = l;
    this.skin = new lemongine.Image(272, 22, 0).setPixels(haxe.crypto.Base64.decode(d));
    this.skinSlot = ScavengerManager.playerSkinsTexture.getTextureSlot(b, this.skin);
    this.mobHeadRect = SkinLoader.getMobHeadRect(this.skin);
};
m.Scavenger_Member = Scavenger_Member
Scavenger_Member.__name__ = "Scavenger_Member"
Scavenger_Member.fromPacket = function (b) {
    for (var a = new Scavenger_Member(b.id, b.n, 1 == b.sp, b.s, 1 == b.p, 1 == b.j), c = 0, d = b.i; c < d.length;) {
        var f = a.addItemFromPacket(d[c++], !0);
        f.collectionTimeClient = 0;
        a.score += f.score;
    }
    1 == b.x && (a.removeOnGameOver = !0);
    return a;
}
Scavenger_Member.prototype = {
    addItemFromPacket: function (b, a) {
        null == a && (a = !1);
        var c = new Scavenger_Item_Found(b.i, !0, b.s, b.t),
            d = null == ScavengerManager.items[c.index];
        this.itemsFound.push(c);
        this.isItemFound[b.i] = c;
        this == ScavengerManager.userMember ? (7 == this.itemsFound.length && Main.Instance.unlockNewgroundsMedal("Scavenge 7 Items"), 8 == this.itemsFound.length && Main.Instance.unlockNewgroundsMedal("Scavenge 8 Items"), 9 == this.itemsFound.length && Main.Instance.unlockNewgroundsMedal("Scavenge 9 Items"), this.itemsFound.length == ScavengerManager.items.length ? (Main.Instance.unlockNewgroundsMedal("Become a True Scavenger"), lemongine.AssetManager.getSound("scavengerWin_0").play(GlobalSave.soundVol / 100), null != window.celebrate && window.celebrate()) : d ? lemongine.AssetManager.getSound("scavengerFindItemSecret_" + (5 * Math.random() | 0)).play(.6 * GlobalSave.soundVol / 100) : lemongine.AssetManager.getSound("scavengerFindItem_" + (5 * Math.random() | 0)).play(.6 * GlobalSave.soundVol / 100)) : d ? a || lemongine.AssetManager.getSound("scavengerOtherFindItemSecret_" + (5 * Math.random() | 0)).play(GlobalSave.soundVol / 100) : a || lemongine.AssetManager.getSound("scavengerOtherFindItem_" + (5 * Math.random() | 0)).play(GlobalSave.soundVol / 100);
        return c;
    },
    updateSkin: function (b) {
        this.skin.setPixels(haxe.crypto.Base64.decode(b));
        ScavengerManager.playerSkinsTexture.updateTextureSlot(this.skinSlot, this.skin);
        this.mobHeadRect = SkinLoader.getMobHeadRect(this.skin);
    },
    setPlacement: function (b, a) {
        null == a && (a = 0);
        this.smoothPlacementStart = this.placement;
        this.smoothPlacementInterpolation = a;
        this.placement = b;
    },
    getSmoothPlacement: function () {
        return lemongine.Mathz.interpolateSmootherstep(this.smoothPlacementInterpolation) * (this.placement - this.smoothPlacementStart) + this.smoothPlacementStart;
    },
    incrementSmoothPlacement: function () {
        1 <= this.smoothPlacementInterpolation || (this.smoothPlacementInterpolation = Math.min(1, this.smoothPlacementInterpolation + 1 / Main.Instance.get_fps()));
    },
    __class__: Scavenger_Member
}