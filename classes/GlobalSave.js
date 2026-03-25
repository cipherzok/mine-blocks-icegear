var GlobalSave = function () {};
m.GlobalSave = GlobalSave
GlobalSave.__name__ = "GlobalSave"
GlobalSave.initialize = function (b) {
    GlobalSave.resetKeyBindings();
    SkinLoader.loadDefault(!0, SkinLoader.frames, !0);
    lemongine.Audio.set_musicVolume(GlobalSave.songVol / 100);
    GlobalSave.localStorage = new lemongine.LocalStorage("Mine_Blocks", "", function (a) {
        GlobalSave.localStorage = a;
        GlobalSave.load(a);
        GlobalSave.loaded = !0;
        null != b && b();
    });
}
GlobalSave.load = function (b) {
    null == b && (b = GlobalSave.localStorage);
    null == b.data.h.worldList ? (GlobalSave.save(b), GlobalSave.updateCanvasQuality()) : (GlobalSave.touchControls = b.data.h.touchControls, GlobalSave.hideGUI = b.data.h.hideGUI, GlobalSave.focusPause = b.data.h.focusPause, GlobalSave.showArmor = b.data.h.showArmor, GlobalSave.soundVol = b.data.h.soundVol, GlobalSave.songVol = b.data.h.songVol, GlobalSave.set_qual(b.data.h.qual), GlobalSave.particles = b.data.h.particles, GlobalSave.spaceJump = b.data.h.spaceJump, GlobalSave.useRightClickKey = b.data.h.useRightClickKey, GlobalSave.skins = b.data.h.skins, GlobalSave.keyBindings = b.data.h.keyBindings, GlobalSave.worldList = b.data.h.worldList, GlobalSave.version = b.data.h.version, GlobalSave.scavengerUsername = b.data.h.scavengerUsername, GlobalSave.plusAccessToken = b.data.h.plusAccessToken, GlobalSave.plusRefreshToken = b.data.h.plusRefreshToken, GlobalSave.completedTutorial = null == b.data.h.completedTutorial ? !0 : b.data.h.completedTutorial, null != GlobalSave.scavengerUsername && (ScavengerManager.username = GlobalSave.scavengerUsername), null != GlobalSave.skins && null != GlobalSave.skins[0] && SkinLoader.loadFromData(GlobalSave.skins[0], SkinLoader.frames), lemongine.Audio.set_musicVolume(GlobalSave.songVol / 100));
}
GlobalSave.save = function (b) {
    null == b && (b = GlobalSave.localStorage);
    null == b.data.h.touchControls && new EReg("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini", "i").match(window.navigator.userAgent) && (GlobalSave.touchControls = !0);
    b.data.h.touchControls = GlobalSave.touchControls;
    b.data.h.hideGUI = GlobalSave.hideGUI;
    b.data.h.focusPause = GlobalSave.focusPause;
    b.data.h.showArmor = GlobalSave.showArmor;
    b.data.h.soundVol = GlobalSave.soundVol;
    b.data.h.songVol = GlobalSave.songVol;
    b.data.h.qual = GlobalSave.qual;
    b.data.h.particles = GlobalSave.particles;
    b.data.h.spaceJump = GlobalSave.spaceJump;
    b.data.h.useRightClickKey = GlobalSave.useRightClickKey;
    b.data.h.skins = GlobalSave.skins;
    b.data.h.keyBindings = GlobalSave.keyBindings;
    b.data.h.worldList = GlobalSave.worldList;
    b.data.h.version = GlobalSave.version;
    b.data.h.scavengerUsername = GlobalSave.scavengerUsername;
    b.data.h.plusAccessToken = GlobalSave.plusAccessToken;
    b.data.h.plusRefreshToken = GlobalSave.plusRefreshToken;
    b.data.h.completedTutorial = GlobalSave.completedTutorial;
    b.save();
}
GlobalSave.createBackupObject = function () {
    return {
        touchControls: GlobalSave.touchControls,
        hideGUI: GlobalSave.hideGUI,
        focusPause: GlobalSave.focusPause,
        showArmor: GlobalSave.showArmor,
        soundVol: GlobalSave.soundVol,
        songVol: GlobalSave.songVol,
        qual: GlobalSave.qual,
        particles: GlobalSave.particles,
        spaceJump: GlobalSave.spaceJump,
        useRightClickKey: GlobalSave.useRightClickKey,
        keyBindings: lemongine.Helpers.objectifyObjectsInMap(GlobalSave.keyBindings)
    };
}
GlobalSave.loadBackupObject = function (b) {
    Object.prototype.hasOwnProperty.call(b, "touchControls") && (GlobalSave.touchControls = Reflect.field(b, "touchControls"));
    Object.prototype.hasOwnProperty.call(b, "hideGUI") && (GlobalSave.hideGUI = Reflect.field(b, "hideGUI"));
    Object.prototype.hasOwnProperty.call(b, "focusPause") && (GlobalSave.focusPause = Reflect.field(b, "focusPause"));
    Object.prototype.hasOwnProperty.call(b, "showArmor") && (GlobalSave.showArmor = Reflect.field(b, "showArmor"));
    Object.prototype.hasOwnProperty.call(b, "soundVol") && (GlobalSave.soundVol = Reflect.field(b, "soundVol"));
    Object.prototype.hasOwnProperty.call(b, "songVol") && (GlobalSave.songVol = Reflect.field(b, "songVol"));
    Object.prototype.hasOwnProperty.call(b, "qual") && GlobalSave.set_qual(Reflect.field(b, "qual"));
    Object.prototype.hasOwnProperty.call(b, "particles") && (GlobalSave.particles = Reflect.field(b, "particles"));
    Object.prototype.hasOwnProperty.call(b, "spaceJump") && (GlobalSave.spaceJump = Reflect.field(b, "spaceJump"));
    Object.prototype.hasOwnProperty.call(b, "useRightClickKey") && (GlobalSave.useRightClickKey = Reflect.field(b, "useRightClickKey"));
    Object.prototype.hasOwnProperty.call(b, "keyBindings") && (GlobalSave.keyBindings = lemongine.Helpers.mappifyObjectsInMap(Reflect.field(b, "keyBindings")));
}
GlobalSave.getKeyBinding = function (b) {
    return Object.prototype.hasOwnProperty.call(GlobalSave.keyBindings.h, b) && GlobalSave.intToKey.h.hasOwnProperty(GlobalSave.keyBindings.h[b].h.id) ? GlobalSave.intToKey.h[GlobalSave.keyBindings.h[b].h.id] : null;
}
GlobalSave.resetKeyBindings = function () {
    GlobalSave.keyBindings = new haxe.ds.StringMap();
    for (var b = Object.keys(GlobalSave.defaultKeyBindings.h), a = b.length, c = 0; c < a;) {
        var d = b[c++],
            f = GlobalSave.keyBindings,
            l = lemongine.Helpers.clone(GlobalSave.defaultKeyBindings.h[d]);
        f.h[d] = l;
    }
    GlobalSave.spaceJump = !0;
    GlobalSave.useRightClickKey = !1;
}
GlobalSave.set_qual = function (b) {
    GlobalSave.qual = b;
    GlobalSave.updateCanvasQuality();
    return b;
}
GlobalSave.updateCanvasQuality = function () {
    try {
        var b = Main.Instance.__window.__backend.canvas;
        2 < GlobalSave.qual && !Main.Instance.windowIsSmallerThan1x ? b.style.setProperty("image-rendering", "pixelated") : b.style.removeProperty("image-rendering");
    } catch (a) {
        haxe.Log.trace("Couldn't access Canvas Element.", {
            fileName: "src/GlobalSave.hx",
            lineNumber: 258,
            className: "GlobalSave",
            methodName: "updateCanvasQuality"
        });
    }
}
GlobalSave.loaded = !1
GlobalSave.touchControls = !1
GlobalSave.hideGUI = !1
GlobalSave.focusPause = !0
GlobalSave.showArmor = !0
GlobalSave.soundVol = 100
GlobalSave.songVol = 50
GlobalSave.qual = 3
GlobalSave.particles = 3
GlobalSave.spaceJump = !0
GlobalSave.useRightClickKey = !1
GlobalSave.skins = []
GlobalSave.keyBindings = new haxe.ds.StringMap()
GlobalSave.version = ""
GlobalSave.completedTutorial = !1
GlobalSave.worldList = new haxe.ds.StringMap()
GlobalSave.scavengerUsername = ""
GlobalSave.plusAccessToken = ""
GlobalSave.plusRefreshToken = ""
GlobalSave.defaultKeyBindings = function (b) {
    b = new haxe.ds.StringMap();
    var a = new haxe.ds.StringMap();
    a.h.id = 69;
    a.h.name = "E";
    b.h.inventory = a;
    a = new haxe.ds.StringMap();
    a.h.id = 113;
    a.h.name = "F2";
    b.h.screenshot = a;
    a = new haxe.ds.StringMap();
    a.h.id = 81;
    a.h.name = "Q";
    b.h.dropItem = a;
    a = new haxe.ds.StringMap();
    a.h.id = 84;
    a.h.name = "T";
    b.h.commands = a;
    a = new haxe.ds.StringMap();
    a.h.id = 72;
    a.h.name = "H";
    b.h.openHelp = a;
    a = new haxe.ds.StringMap();
    a.h.id = 82;
    a.h.name = "R";
    b.h.tasks = a;
    a = new haxe.ds.StringMap();
    a.h.id = 65;
    a.h.name = "A";
    b.h.left = a;
    a = new haxe.ds.StringMap();
    a.h.id = 68;
    a.h.name = "D";
    b.h.right = a;
    a = new haxe.ds.StringMap();
    a.h.id = 87;
    a.h.name = "W";
    b.h.up = a;
    a = new haxe.ds.StringMap();
    a.h.id = 83;
    a.h.name = "S";
    b.h.down = a;
    a = new haxe.ds.StringMap();
    a.h.id = 83;
    a.h.name = "S";
    b.h.down2 = a;
    a = new haxe.ds.StringMap();
    a.h.id = 112;
    a.h.name = "F1";
    b.h.gui = a;
    a = new haxe.ds.StringMap();
    a.h.id = 16;
    a.h.name = "Shift";
    b.h.secondClick = a;
    a = new haxe.ds.StringMap();
    a.h.id = 16;
    a.h.name = "Shift";
    b.h.altClick = a;
    a = new haxe.ds.StringMap();
    a.h.id = 67;
    a.h.name = "C";
    b.h.pick = a;
    return b;
}(this)
GlobalSave.intToKey = function (b) {
    b = new haxe.ds.IntMap();
    b.h[-2] = null;
    b.h[65] = 97;
    b.h[66] = 98;
    b.h[67] = 99;
    b.h[68] = 100;
    b.h[69] = 101;
    b.h[70] = 102;
    b.h[71] = 103;
    b.h[72] = 104;
    b.h[73] = 105;
    b.h[74] = 106;
    b.h[75] = 107;
    b.h[76] = 108;
    b.h[77] = 109;
    b.h[78] = 110;
    b.h[79] = 111;
    b.h[80] = 112;
    b.h[81] = 113;
    b.h[82] = 114;
    b.h[83] = 115;
    b.h[84] = 116;
    b.h[85] = 117;
    b.h[86] = 118;
    b.h[87] = 119;
    b.h[88] = 120;
    b.h[89] = 121;
    b.h[90] = 122;
    b.h[32] = 32;
    b.h[16] = 1073742049;
    b.h[37] = 1073741904;
    b.h[39] = 1073741903;
    b.h[38] = 1073741906;
    b.h[40] = 1073741905;
    b.h[13] = 13;
    b.h[17] = 1073742048;
    b.h[9] = 9;
    b.h[191] = 47;
    b.h[220] = 92;
    b.h[187] = 61;
    b.h[188] = 44;
    b.h[190] = 46;
    b.h[189] = 45;
    b.h[112] = 1073741882;
    b.h[113] = 1073741883;
    b.h[114] = 1073741884;
    b.h[115] = 1073741885;
    b.h[116] = 1073741886;
    b.h[117] = 1073741887;
    b.h[118] = 1073741888;
    b.h[119] = 1073741889;
    b.h[120] = 1073741890;
    b.h[122] = 1073741892;
    b.h[123] = 1073741893;
    b.h[124] = 1073741928;
    b.h[125] = 1073741929;
    b.h[126] = 1073741930;
    return b;
}(this)