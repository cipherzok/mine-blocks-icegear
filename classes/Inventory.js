var Inventory = function (b, a) {
    this.enchantmentButtons = [{
        text: "",
        lvl: 0,
        canAfford: !1
    }, {
        text: "",
        lvl: 0,
        canAfford: !1
    }, {
        text: "",
        lvl: 0,
        canAfford: !1
    }];
    this.totalBooks = 0;
    this.chest = this.sign = this.dispenseName = this.dispenserType = "";
    this.brewingBubblesFrame = 0;
    this.brewingBubblesPlaying = !1;
    this.brewingBubbleHeights = [0, 5, 14, 20, 31, 38];
    this.newName = this.smelter = this.brewer = "";
    this.craftCoords = null;
    this.tableSize = 2;
    this.r = [2, null, 4, null];
    this.l = [null, 1, null, 3];
    this.d = [3, 4, null, null];
    this.blocks2 = [[1, 2], [3, 4]];
    this.blocks = [1, 2, 3, 4];
    this.levelsText = "";
    this.anvilWillCombine = this.anvilWillRename = !1;
    this.anvilCantCombine = !0;
    this.anvilCanAnvil = this.anvilGettingItem = !1;
    this.anvilCombineWorth = this.anvilChangeNameWorth = this.anvilLevelsRequired = this.anvilItemsToTake = 0;
    this.anvilEcksVisible = this.anvilRenameTextVisible = !1;
    this.page = 1;
    this.gotoAtStartOfFrame = null;
    this.tab = 0;
    this.currentItems = [];
    var c = new haxe.ds.StringMap();
    c.h.name = "Building Blocks";
    c.h.icon = ["wp", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
    c.h.items = ["r", "cs", "sb", "ms", "ob", "br", "dt", "dtg", "cdt", "farm", "myc", "gdt", "wd", "wd1", "wp", "b", "clore", "in", "gd", "dmore", "rs", "os", "lap", "to", "egem", "tob", "ib", "gb", "db", "lapb", "clb", "sd", "ss", "cy1", "brick", "bricks", "snowblock", "ice", "fice", "gv", "books", "staircs", "stairr", "stairn", "stairbrick", "stairwp", "stairsb", "stairib", "stairgb", "stairdb", "stairob", "stairbr", "stairbbb", "halfcs", "halfr", "halfn", "halfbrick", "halfwp", "halfsb", "halfib", "halfgb", "halfdb", "halfob", "halfbr", "halfbbb", ["cloth", "white"], ["cloth", "lightgray"], ["cloth", "gray"], ["cloth", "black"], ["cloth", "brown"], ["cloth", "purple"], ["cloth", "magenta"], ["cloth", "red"], ["cloth", "orange"], ["cloth", "pink"], ["cloth", "yellow"], ["cloth", "lightgreen"], ["cloth", "green"], ["cloth", "cyan"], ["cloth", "lightblue"], ["cloth", "blue"], ["cloth", "rainbow"], "gs", ["gs", "white"], ["gs", "lightgray"], ["gs", "gray"], ["gs", "black"], ["gs", "brown"], ["gs", "purple"], ["gs", "magenta"], ["gs", "red"], ["gs", "orange"], ["gs", "pink"], ["gs", "yellow"], ["gs", "lightgreen"], ["gs", "green"], ["gs", "cyan"], ["gs", "lightblue"], ["gs", "blue"], "portalstone", "n", "nb", "rnb", "glow", "magma", "nwb", "ssd", "boneb", "es", "pf", "dsb", "hcl", "bbb", "bdob", "bddt", "bdwp", "bdr", "bdcs", "bdbricks", "bdnb", "bdsb", "bdbooks", "bdbbb"];
    var d = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Decorations";
    c.h.icon = ["shrub", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
    c.h.items = ["craft", "oven", "chest", "echest", "cmp", "enchant", "anvil", "tag", ["bed", "red"], "dr", "idr", "bbdr", "td1", "sign", "sl", "lv", "lv1", "lv2", "lv3", "lv4", "st", "ladder", "fnc", "fncg", "nfnc", "nfncg", "ibar", "th", "degg", "lgr", "shrub", "ds", "fw1", "fw2", "ms1", "ms2", "msb1", "msb2", "msb3", "msb4", "bb", "ct", "sw", "lp", "coral", "lant", "bk", "wbk", "lbk", "abk", "web", "rp", "mobSpawner", "moss", "ortorch", ["carpet", "white"], ["carpet", "lightgray"], ["carpet", "gray"], ["carpet", "black"], ["carpet", "brown"], ["carpet", "purple"], ["carpet", "magenta"], ["carpet", "red"], ["carpet", "orange"], ["carpet", "pink"], ["carpet", "yellow"], ["carpet", "lightgreen"], ["carpet", "green"], ["carpet", "cyan"], ["carpet", "lightblue"], ["carpet", "blue"], ["carpet", "rainbow"]];
    var f = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Tools and Armor";
    c.h.icon = ["DiamondPickaxe", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
    c.h.items = "WoodenPickaxe StonePickaxe IronPickaxe GoldPickaxe DiamondPickaxe WoodenShovel StoneShovel IronShovel GoldShovel DiamondShovel WoodenAxe StoneAxe IronAxe GoldAxe DiamondAxe WoodenHoe StoneHoe IronHoe GoldHoe DiamondHoe WoodenSword StoneSword IronSword GoldSword DiamondSword bow arrow spear bshur Shear fas fr coas clock compass LeatherCap LeatherShirt LeatherPants LeatherShoes IronCap IronShirt IronPants IronShoes GoldCap GoldShirt GoldPants GoldShoes DiamondCap DiamondShirt DiamondPants DiamondShoes DragonCap DragonShirt DragonPants DragonShoes SnowCap AfroCap PartyCap ShadesCap MustacheCap".split(" ");
    var l = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Food and Crops";
    c.h.icon = ["bread", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
    c.h.items = "egg fireegg or lemon lemonb ap gap gasd capple crml sc sugar cake ccake icec cegg ppotato bseed beet wseed mel mels gmels jl pseed lade apade orade mbk pk pkp carrot gcarrot wheat hay bread ccb cookie ccane potato bpotato seed pork cpork bacon cbacon beef cbeef chicken cchicken nugget mutton cmutton rabbit crabbit fi cfi salmon csalmon clown puff se fse rf bowl soup rabbitsoup beetsoup".split(" ");
    var p = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Redstone";
    c.h.icon = ["rsd", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
    c.h.items = "rsd rstorch button wpp pp lever piston spiston dispense dropper light note TNT".split(" ");
    var k = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Transportation";
    c.h.icon = ["railp", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
    c.h.items = "raft cart cartTNT cartoven cartchest rail raila raild railp saddle".split(" ");
    var n = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Brewing";
    var m = new haxe.ds.StringMap();
    m.h.type = "healing";
    c.h.icon = ["potion", 1, 0, Game.makeDynamicMap(m)];
    m = new haxe.ds.StringMap();
    m.h.type = "healing";
    m.h.category = "splash";
    var M = new haxe.ds.StringMap();
    M.h.type = "harming";
    M.h.category = "splash";
    var ka = new haxe.ds.StringMap();
    ka.h.type = "swiftness";
    ka.h.category = "splash";
    var x = new haxe.ds.StringMap();
    x.h.type = "slowness";
    x.h.category = "splash";
    var t = new haxe.ds.StringMap();
    t.h.type = "poison";
    t.h.category = "splash";
    var w = new haxe.ds.StringMap();
    w.h.type = "regeneration";
    w.h.category = "splash";
    var q = new haxe.ds.StringMap();
    q.h.type = "strength";
    q.h.category = "splash";
    var C = new haxe.ds.StringMap();
    C.h.type = "weakness";
    C.h.category = "splash";
    var v = new haxe.ds.StringMap();
    v.h.type = "fireresistance";
    v.h.category = "splash";
    var r = new haxe.ds.StringMap();
    r.h.type = "waterbreathing";
    r.h.category = "splash";
    var K = new haxe.ds.StringMap();
    K.h.type = "leaping";
    K.h.category = "splash";
    var la = new haxe.ds.StringMap();
    la.h.type = "invisibility";
    la.h.category = "splash";
    var A = new haxe.ds.StringMap();
    A.h.type = "nightvision";
    A.h.category = "splash";
    c.h.items = ["brew", "cauldron", "bp", ["potion", "empty"], "boe", ["potion", "water"], ["potion", "healing"], ["potion", "harming"], ["potion", "swiftness"], ["potion", "slowness"], ["potion", "poison"], ["potion", "regeneration"], ["potion", "strength"], ["potion", "weakness"], ["potion", "fireresistance"], ["potion", "waterbreathing"], ["potion", "leaping"], ["potion", "invisibility"], ["potion", "nightvision"], ["potion", m], ["potion", M], ["potion", ka], ["potion", x], ["potion", t], ["potion", w], ["potion", q], ["potion", C], ["potion", v], ["potion", r], ["potion", K], ["potion", la], ["potion", A]];
    M = Game.makeDynamicMap(c);
    c = new haxe.ds.StringMap();
    c.h.name = "Miscellaneous Items";
    m = new haxe.ds.StringMap();
    m.h.type = "chicken";
    c.h.icon = ["megg", 1, 0, Game.makeDynamicMap(m)];
    c.h.items = ["dm", "ii", "ironn", "gi", "goldn", "cl", "cl2", "oddrock", "topaz", "egemd", "cy", "snowb", "gss", "nbr", "yellowdust", "nw", "bone", "bonem", "paper", "book", "ep", "eoe", "blazer", "dscl", "slimeball", "slimeb", "magmac", "gt", "fiber", "gp", "flint", "feather", "leather", "rleather", "rfoot", ["megg", "pig"], ["megg", "sheep"], ["megg", "wolf"], ["megg", "chicken"], ["megg", "cow"], ["megg", "mooshroom"], ["megg", "cowctus"], ["megg", "zombie"], ["megg", "skeleton"], ["megg", "creeper"], ["megg", "spider"], ["megg", "enderman"], ["megg", "nethereye"], ["megg", "blaze"], ["megg", "slime"], ["megg", "magmacube"], ["megg", "rabbit"], ["megg", "squid"], ["megg", "zombiepigman"], ["megg", "ghast"], ["megg", "bat"], ["dye", "lightgray"], ["dye", "gray"], ["dye", "purple"], ["dye", "magenta"], ["dye", "red"], ["dye", "orange"], ["dye", "pink"], ["dye", "yellow"], ["dye", "lightgreen"], ["dye", "green"], ["dye", "cyan"], ["dye", "lightblue"], "ll", "ink", ["bl", "white"], ["bl", "lightgray"], ["bl", "gray"], ["bl", "black"], ["bl", "brown"], ["bl", "purple"], ["bl", "magenta"], ["bl", "red"], ["bl", "orange"], ["bl", "pink"], ["bl", "yellow"], ["bl", "lightgreen"], ["bl", "green"], ["bl", "cyan"], ["bl", "lightblue"], ["bl", "blue"], ["bl", "ghast"], ["mh", "zombie"], ["mh", "skeleton"], ["mh", "creeper"], ["mh", "enderdragon"], ["mh", "1"]];
    this.creativeItems = [d, f, l, p, k, n, M, Game.makeDynamicMap(c)];
    this.bookOpen = !1;
    this.bookFrame = 0;
    this.inventorySlots = new haxe.ds.StringMap();
    this.currentFrame = 0;
    this.tooltipText = [];
    this.showTooltip = !1;
    this.lastSavedText = "";
    this.currentCommandNumber = -1;
    this.lastCommand = [];
    this.lastSearchText = this.lastAnvilText = "";
    this.searchOpen = !1;
    this.jAnimation = 0;
    this.game = b;
    this.world = a;
    this.set_currentFrame(0);
};
m.Inventory = Inventory
Inventory.__name__ = "Inventory"
Inventory.prototype = {
    resize: function () {
        null != this.backgroundEntity && this.backgroundEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryEntity && this.inventoryEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory").height) / G.toFloat(2)).scale2D(1.7005).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-154, -29);
        null != this.inventoryArmorEntity && this.inventoryArmorEntity.transform.reset().scale2D(1.633).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-140, -118);
        null != this.inventoryCraftingEntity && this.inventoryCraftingEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_crafting").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_crafting").height) / G.toFloat(2)).scale2D(1.718).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(9, -130);
        null != this.inventoryCraftingTableEntity && this.inventoryCraftingTableEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height) / G.toFloat(2)).scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-53, -152);
        null != this.inventoryFurnaceEntity && this.inventoryFurnaceEntity.transform.reset().translate(31, 31).scale2D(1.718).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-52, -149);
        null != this.inventoryFurnaceBarsEntity && this.inventoryFurnaceBarsEntity.transform.reset().scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-52, -149);
        null != this.inventoryChestEntity && this.inventoryChestEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_chest").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_chest").height) / G.toFloat(2)).scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-154, -155);
        null != this.inventoryJBackgroundEntity && this.inventoryJBackgroundEntity.transform.reset().scale(this.game.scene.get_width(), this.game.scene.get_height()).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        null != this.inventorySignEntity && this.inventorySignEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7 - 32);
        null != this.inventorySignTextBackground && this.inventorySignTextBackground.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(0, -63);
        null != this.inventorySignInput && this.inventorySignInput.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2 - 63, this.game.scene.get_height() / 2 - 7).translate(0, -64);
        null != this.inventoryCreativeEntity && this.inventoryCreativeEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryCreativeItemsEntity && this.inventoryCreativeItemsEntity.transform.reset().scale2D(17.5067175).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryCreativeSearchEntity && this.inventoryCreativeSearchEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryCreativeSearchInput && this.inventoryCreativeSearchInput.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-44, -130);
        null != this.inventoryEnchantmentButtonEntity && this.inventoryEnchantmentButtonEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryDispenserEntity && this.inventoryDispenserEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height) / G.toFloat(2)).scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-53, -152);
        null != this.inventoryCommandsInput && this.inventoryCommandsInput.transform.reset().translate(30, this.game.scene.get_height() - 101 + 3);
        null != this.inventoryAnvilEntity && this.inventoryAnvilEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryAnvilInput && this.inventoryAnvilInput.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-86, -145);
        null != this.inventoryBrewingEntity && this.inventoryBrewingEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryBrewingItemsEntity && this.inventoryBrewingItemsEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryBrewingIconsEntity && this.inventoryBrewingIconsEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
        null != this.inventoryTrashEntity && this.inventoryTrashEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height) / G.toFloat(2)).scale2D(1.65).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(170, 114);
        null != this.inventoryTrashIcon && this.inventoryTrashIcon.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("trash_bin").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("trash_bin").height) / G.toFloat(2)).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(180, 120);
        if (null != this.inventorySlots && null != this.slotPositions) for (var b = Object.keys(this.slotPositions.h), a = b.length, c = 0; c < a;) {
            var d = b[c++];
            this.inventorySlots.h[d].set_x(this.game.scene.get_width() / 2 + this.slotPositions.h[d].x - 2);
            this.inventorySlots.h[d].set_y(this.game.scene.get_height() / 2 - 7 + this.slotPositions.h[d].y);
        }
        if (null != this.inventoryCommandsEntity) {
            b = this.inventoryCommandsEntity;
            a = new lemongine.Vector3(0, .7 * this.game.scene.get_height());
            c = new lemongine.Point(0, 0);
            d = new lemongine.Point(1, 1);
            var f = new lemongine.Point(this.game.scene.get_width(), .3 * this.game.scene.get_height()),
                l = new haxe.ds.StringMap();
            l.h.color = [0, .30980392156862746, .4470588235294118, 0, 0, .2235294117647059, .30980392156862746, .5, 0, .30980392156862746, .4470588235294118, 0, 0, .30980392156862746, .4470588235294118, 0, 0, .2235294117647059, .30980392156862746, .5, 0, .2235294117647059, .30980392156862746, .5];
            b.updateQuad(0, a, c, d, f, null, null, l);
            b = this.inventoryCommandsEntity;
            a = new lemongine.Vector3(26, this.game.scene.get_height() - 101);
            c = new lemongine.Point(0, 0);
            d = new lemongine.Point(1, 1);
            f = new lemongine.Point(this.game.scene.get_width() - 52, 21);
            l = new haxe.ds.StringMap();
            var p = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
            l.h.color = p;
            b.updateQuad(1, a, c, d, f, null, null, l);
            b = this.inventoryCommandsEntity;
            a = new lemongine.Vector3(27, this.game.scene.get_height() - 101 + 1);
            c = new lemongine.Point(0, 0);
            d = new lemongine.Point(1, 1);
            f = new lemongine.Point(this.game.scene.get_width() - 52 - 2, 19);
            l = new haxe.ds.StringMap();
            p = lemongine.Mathz.repeatArray([1, 1, 1, 1], 6);
            l.h.color = p;
            b.updateQuad(2, a, c, d, f, null, null, l);
            this.inventoryCommandsInput.size.set(this.game.scene.get_width() - 52 - 2 - 4, Fonts.get_basis33().height);
        }
        this.updateBackground();
    },
    prepareRenderer: function (b) {
        var a = this;
        if (0 != b) {
            if (null == this.tooltipEntity) {
                var c = lemongine.AssetManager.getImage("ui"),
                    d = shader.BlockShader.getShader(),
                    f = new haxe.ds.StringMap(),
                    l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.tooltipEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.tooltipEntity.isTransparent = !0;
                this.tooltipEntity.layer = 55;
                this.tooltipEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
            }
            null == this.backgroundEntity && (c = lemongine.AssetManager.getImage("ui"), d = shader.BlockShader.getShader(), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.backgroundEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.backgroundEntity.isTransparent = !0, this.backgroundEntity.layer = 15, this.backgroundEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.backgroundEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE]);
            null == this.inventoryEntity && (this.inventoryEntity = lemongine.AssetManager.getImage("inventory").toEntity(), this.inventoryEntity.isTransparent = !0, this.inventoryEntity.layer = 16, this.inventoryEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory").height) / G.toFloat(2)).scale2D(1.7005).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-154, -29));
            1 == b && (null == this.inventoryArmorEntity && (c = lemongine.AssetManager.getImage("inventory_armor"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryArmorEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryArmorEntity.isTransparent = !0, this.inventoryArmorEntity.layer = 16, this.inventoryArmorEntity.updateQuad(0, new lemongine.Vector3(), new lemongine.Point(), new lemongine.Point(81, 22), new lemongine.Point(81, 22), null, null), this.inventoryArmorEntity.updateQuad(1, new lemongine.Vector3(5, 6), new lemongine.Point(16, 22), new lemongine.Point(8, 6), new lemongine.Point(8, 6).multiply(1.3), null, null), this.inventoryArmorEntity.updateQuad(2, new lemongine.Vector3(25, 6), new lemongine.Point(0, 22), new lemongine.Point(8, 8), new lemongine.Point(8, 8).multiply(1.3), null, null), this.inventoryArmorEntity.updateQuad(3, new lemongine.Vector3(45, 6), new lemongine.Point(8, 22), new lemongine.Point(8, 8), new lemongine.Point(8, 8).multiply(1.3), null, null), this.inventoryArmorEntity.updateQuad(4, new lemongine.Vector3(65, 9), new lemongine.Point(24, 22), new lemongine.Point(12, 4), new lemongine.Point(12, 4), null, null), this.inventoryArmorEntity.transform.reset().scale2D(1.633).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-140, -118)), null == this.inventoryCraftingEntity && (this.inventoryCraftingEntity = lemongine.AssetManager.getImage("inventory_crafting").toEntity(), this.inventoryCraftingEntity.isTransparent = !0, this.inventoryCraftingEntity.layer = 16, this.inventoryCraftingEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_crafting").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_crafting").height) / G.toFloat(2)).scale2D(1.718).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(9, -130)));
            2 == b && null == this.inventoryCraftingTableEntity && (this.inventoryCraftingTableEntity = lemongine.AssetManager.getImage("inventory_craftingtable").toEntity(), this.inventoryCraftingTableEntity.isTransparent = !0, this.inventoryCraftingTableEntity.layer = 16, this.inventoryCraftingTableEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height) / G.toFloat(2)).scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-53, -152));
            if (3 == b && null == this.inventoryFurnaceEntity) {
                this.inventoryFurnaceEntity = lemongine.AssetManager.getImage("inventory_furnace").toEntity(new lemongine.Rectangle(0, 0, 62, 62));
                this.inventoryFurnaceEntity.isTransparent = !0;
                this.inventoryFurnaceEntity.layer = 17;
                this.inventoryFurnaceEntity.transform.reset().translate(31, 31).scale2D(1.718).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-52, -149);
                c = lemongine.AssetManager.getImage("inventory_furnace");
                d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.inventoryFurnaceBarsEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.inventoryFurnaceBarsEntity.isTransparent = !0;
                this.inventoryFurnaceBarsEntity.layer = 16;
                c = this.inventoryFurnaceBarsEntity;
                d = new lemongine.Vector3(8, 24, 0);
                var p = new lemongine.Point(63, 0),
                    Q = new lemongine.Point(5, 62),
                    n = new lemongine.Point(7, 14);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
                f.h.colorOffset = l;
                c.updateQuad(0, d, p, Q, n, null, null, f);
                this.inventoryFurnaceBarsEntity.updateQuad(1, new lemongine.Vector3(8, 38, 0), new lemongine.Point(63, 0), new lemongine.Point(5, 62), new lemongine.Point(7, 0));
                c = this.inventoryFurnaceBarsEntity;
                d = new lemongine.Vector3(24, 24, 0);
                p = new lemongine.Point(63, 0);
                Q = new lemongine.Point(5, 62);
                n = new lemongine.Point(15, 13);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
                f.h.colorOffset = l;
                c.updateQuad(2, d, p, Q, n, null, null, f);
                c = this.inventoryFurnaceBarsEntity;
                d = new lemongine.Vector3(24, 24, 0);
                p = new lemongine.Point(63, 0);
                Q = new lemongine.Point(5, 62);
                n = new lemongine.Point(0, 13);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([1, 0, 0, 1], 6);
                f.h.colorOffset = l;
                c.updateQuad(3, d, p, Q, n, null, null, f);
                this.inventoryFurnaceBarsEntity.transform.reset().scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-52, -149);
            }
            4 == b && null == this.inventoryChestEntity && (this.inventoryChestEntity = lemongine.AssetManager.getImage("inventory_chest").toEntity(), this.inventoryChestEntity.isTransparent = !0, this.inventoryChestEntity.layer = 16, this.inventoryChestEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_chest").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_chest").height) / G.toFloat(2)).scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-154, -155));
            5 == b && (this.jAnimation = 0, null == this.inventoryJBackgroundEntity && (this.inventoryJBackgroundEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.GradientRadial.getShader()), lemongine.shader.GradientRadial.setupEntity(this.inventoryJBackgroundEntity, lemongine.Geom.quadUVs, new lemongine.Color(-1023410176), new lemongine.Color(-65536), new lemongine.Rectangle(.5, .5, 0, .7)), this.inventoryJBackgroundEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE], this.inventoryJBackgroundEntity.isTransparent = !0, this.inventoryJBackgroundEntity.transform.reset().scale(this.game.scene.get_width(), this.game.scene.get_height()).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2), this.inventoryJBackgroundEntity.layer = 15));
            6 == b && (null == this.inventorySignEntity && (this.inventorySignEntity = lemongine.AssetManager.getImage("sign").toEntity(), this.inventorySignEntity.isTransparent = !0, this.inventorySignEntity.layer = 16, this.inventorySignEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7 - 32), this.inventorySignTextBackground = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", new lemongine.Color(-3111370), lemongine.TextAlignment.CENTER), this.inventorySignTextBackground.layer = 17, this.inventorySignTextBackground.setWordWrap(127), this.inventorySignTextBackground.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(0, -63), this.inventorySignTextBackground.set_mask(new lemongine.Rectangle(-63, 0, 127, 3 * Fonts.get_volter().height)), this.inventorySignText = TextCache.get("inventorySignText", "", new lemongine.Point(), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER), this.inventorySignText.layer = 18, this.inventorySignInput = new lemongine.InputField(this.inventorySignText, new lemongine.Point(127, 3 * Fonts.get_volter().height), 2), this.inventorySignInput.set_maxLength(45), this.inventorySignInput.set_multiline(!0), this.inventorySignInput.set_wordWrap(!0), this.inventorySignInput.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2 - 63, this.game.scene.get_height() / 2 - 7).translate(0, -64), c = lemongine.AssetManager.getImage("ui"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventorySignButtonEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventorySignButtonEntity.isTransparent = !0, this.inventorySignButtonEntity.layer = 16), Object.prototype.hasOwnProperty.call(this.world.signs.h, this.sign) ? this.inventorySignInput.set_text(this.world.signs.h[this.sign]) : this.inventorySignInput.set_text(""), this.inventorySignInput.set_focused(!0));
            if (7 == b && null == this.inventoryCreativeEntity) {
                c = lemongine.AssetManager.getImage("inventory_creative");
                d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.inventoryCreativeEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.inventoryCreativeEntity.isTransparent = !0;
                this.inventoryCreativeEntity.layer = 16;
                this.inventoryCreativeEntity.updateQuad(0, new lemongine.Vector3(-154, -105, 0), new lemongine.Point(0), new lemongine.Point(181, 102), new lemongine.Point(181, 102).multiply(1.700592));
                this.inventoryCreativeEntity.updateQuad(1, new lemongine.Vector3(-154, 114, 0), new lemongine.Point(0, 103), new lemongine.Point(181, 22), new lemongine.Point(181, 22).multiply(1.700592));
                f = 0;
                for (l = this.creativeItems.length; f < l;) c = f++, 0 == c ? this.inventoryCreativeEntity.updateQuad(c + 2, new lemongine.Vector3(-154 + 34.01184 * c, -135, 0), new lemongine.Point(0, 126), new lemongine.Point(21, 19), new lemongine.Point(21, 19).multiply(1.700592)) : this.inventoryCreativeEntity.updateQuad(c + 2, new lemongine.Vector3(-154 + 34.01184 * c, -135, 0), new lemongine.Point(22, 126), new lemongine.Point(21, 19), new lemongine.Point(21, 19).multiply(1.700592));
                this.inventoryCreativeEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
                c = lemongine.AssetManager.getImage("ui");
                d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.inventoryCreativeButtonsEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.inventoryCreativeButtonsEntity.isTransparent = !0;
                this.inventoryCreativeButtonsEntity.layer = 16;
                c = Textures.blockTextures;
                d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.inventoryCreativeItemsEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.inventoryCreativeItemsEntity.transform.scale2D(17.5067175).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
                this.inventoryCreativeItemsEntity.isTransparent = !0;
                this.inventoryCreativeItemsEntity.layer = 18;
                f = 0;
                for (l = this.creativeItems.length; f < l;) c = f++, new Item(this.inventoryCreativeItemsEntity, (-146 + 34.01184 * c) / 16 / 1.09416984375, -7.197237289057757, this.game, this.creativeItems[c].h.icon);
                this.currentItems = this.creativeItems[this.tab].h.items;
                c = lemongine.AssetManager.getImage("inventory_creative");
                d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.inventoryCreativeSearchEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.inventoryCreativeSearchEntity.isTransparent = !0;
                this.inventoryCreativeSearchEntity.layer = 19;
                this.inventoryCreativeSearchEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7);
                this.inventoryCreativeSearchEntity.updateQuad(0, new lemongine.Vector3(122, -135), new lemongine.Point(135, 126), new lemongine.Point(16, 15), new lemongine.Point(16, 15).multiply(2));
                this.inventoryCreativeSearchText = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", lemongine.Color.black, lemongine.TextAlignment.LEFT);
                this.inventoryCreativeSearchText.layer = 20;
                this.inventoryCreativeSearchInput = new lemongine.InputField(this.inventoryCreativeSearchText, new lemongine.Point(82, Fonts.get_volter().height));
                this.inventoryCreativeSearchInput.set_maxLength(16);
                this.inventoryCreativeSearchInput.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-44, -130);
            }
            8 == b && null == this.inventoryEnchantmentEntity && (this.inventoryEnchantmentEntity = lemongine.AssetManager.getImage("inventory_enchanting").toEntity(new lemongine.Rectangle(0, 0, G.toFloat(lemongine.AssetManager.getImage("inventory_enchanting").width), G.toFloat(lemongine.AssetManager.getImage("inventory_enchanting").height))), this.inventoryEnchantmentEntity.isTransparent = !0, this.inventoryEnchantmentEntity.layer = 16, this.inventoryEnchantmentEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_enchanting").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_enchanting").height) / G.toFloat(2)).scale2D(1.537094).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-153, -152), this.inventoryEnchantmentItemEntity = lemongine.AssetManager.getImage("inventory_single").toEntity(), this.inventoryEnchantmentItemEntity.isTransparent = !0, this.inventoryEnchantmentItemEntity.layer = 17, this.inventoryEnchantmentItemEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height) / G.toFloat(2)).scale2D(1.65).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-126, -100), c = lemongine.AssetManager.getImage("inventory_enchantment_button"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryEnchantmentButtonEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryEnchantmentButtonEntity.isTransparent = !0, this.inventoryEnchantmentButtonEntity.layer = 17, this.inventoryEnchantmentButtonEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.buyEnchants = [function () {
                a.buyEnchant(0);
            }, function () {
                a.buyEnchant(1);
            }, function () {
                a.buyEnchant(2);
            }]);
            9 == b && null == this.inventoryDispenserEntity && (this.inventoryDispenserEntity = lemongine.AssetManager.getImage("inventory_craftingtable").toEntity(new lemongine.Rectangle(0, 0, G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height), G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height))), this.inventoryDispenserEntity.isTransparent = !0, this.inventoryDispenserEntity.layer = 16, this.inventoryDispenserEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_craftingtable").height) / G.toFloat(2)).scale2D(1.711).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-53, -152));
            10 == b && (null == this.inventoryCommandsEntity && (c = lemongine.shader.BasicVertexColor.getShader(), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([0], 24), f.h.color = l, this.inventoryCommandsEntity = new lemongine.QuadPoolEntity(null, null, c, f), this.inventoryCommandsEntity.isTransparent = !0, this.inventoryCommandsEntity.layer = 16, this.inventoryCommandsEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE], c = this.inventoryCommandsEntity, d = new lemongine.Vector3(0, .7 * this.game.scene.get_height()), p = new lemongine.Point(0, 0), Q = new lemongine.Point(1, 1), n = new lemongine.Point(this.game.scene.get_width(), .3 * this.game.scene.get_height()), f = new haxe.ds.StringMap(), f.h.color = [0, .30980392156862746, .4470588235294118, 0, 0, .2235294117647059, .30980392156862746, .5, 0, .30980392156862746, .4470588235294118, 0, 0, .30980392156862746, .4470588235294118, 0, 0, .2235294117647059, .30980392156862746, .5, 0, .2235294117647059, .30980392156862746, .5], c.updateQuad(0, d, p, Q, n, null, null, f), c = this.inventoryCommandsEntity, d = new lemongine.Vector3(26, this.game.scene.get_height() - 101), p = new lemongine.Point(0, 0), Q = new lemongine.Point(1, 1), n = new lemongine.Point(this.game.scene.get_width() - 52, 21), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6), f.h.color = l, c.updateQuad(1, d, p, Q, n, null, null, f), c = this.inventoryCommandsEntity, d = new lemongine.Vector3(27, this.game.scene.get_height() - 101 + 1), p = new lemongine.Point(0, 0), Q = new lemongine.Point(1, 1), n = new lemongine.Point(this.game.scene.get_width() - 52 - 2, 19), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1, 1, 1, 1], 6), f.h.color = l, c.updateQuad(2, d, p, Q, n, null, null, f), this.inventoryCommandsText = new lemongine.BitmapFontEntity(Fonts.get_basis33(), "", lemongine.Color.black, lemongine.TextAlignment.LEFT), this.inventoryCommandsText.layer = 19, this.inventoryCommandsInput = new lemongine.InputField(this.inventoryCommandsText, new lemongine.Point(this.game.scene.get_width() - 52 - 2 - 4, Fonts.get_basis33().height)), this.inventoryCommandsInput.set_maxLength(this.game.isScavenger ? 128 : 1024), this.inventoryCommandsInput.transform.reset().translate(30, this.game.scene.get_height() - 101 + 3), this.inventoryCommandsInput.set_leftScrollPadding(1)), this.inventoryCommandsInput.set_focused(!0), this.currentCommandNumber = -1, this.lastSavedText = "", this.inventoryCommandsInput.set_text(""));
            11 == b && null == this.inventoryAnvilEntity && (c = lemongine.AssetManager.getImage("inventory_anvil"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryAnvilEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryAnvilEntity.isTransparent = !0, this.inventoryAnvilEntity.layer = 16, this.inventoryAnvilEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.inventoryAnvilEntity.updateQuad(0, new lemongine.Vector3(-147, -173, 0), new lemongine.Point(0, 16), new lemongine.Point(16, 16), new lemongine.Point(16, 16).multiply(3)), this.inventoryAnvilEntity.updateQuad(1, new lemongine.Vector3(-40, -102, 0), new lemongine.Point(16, 16), new lemongine.Point(16, 16), new lemongine.Point(16, 16).multiply(1.5)), this.inventoryAnvilEntity.updateQuad(2, new lemongine.Vector3(55, -102, 0), new lemongine.Point(0, 32), new lemongine.Point(23, 15), new lemongine.Point(23, 15).multiply(1.5)), this.inventoryAnvilEntity.updateQuad(3, new lemongine.Vector3(60, -103, 0), new lemongine.Point(16, 0), new lemongine.Point(16, 16), new lemongine.Point(16, 16).multiply(1.5)), this.inventoryAnvilEntity.add9Slice(new lemongine.Rectangle(-90, -148, 235, 24), new lemongine.Rectangle(0, 0, 16, 16), new lemongine.Rectangle(3, 3, 10, 10)), c = lemongine.AssetManager.getImage("inventory_single"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryAnvilItemsEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryAnvilItemsEntity.isTransparent = !0, this.inventoryAnvilItemsEntity.layer = 16, this.inventoryAnvilItemsEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.inventoryAnvilItemsEntity.addQuad(new lemongine.Vector3(-90, -108, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryAnvilItemsEntity.addQuad(new lemongine.Vector3(-1, -108, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryAnvilItemsEntity.addQuad(new lemongine.Vector3(110, -108, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryAnvilText = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", lemongine.Color.black, lemongine.TextAlignment.LEFT), this.inventoryAnvilText.layer = 19, this.inventoryAnvilInput = new lemongine.InputField(this.inventoryAnvilText, new lemongine.Point(113, Fonts.get_volter().height)), this.inventoryAnvilInput.set_maxLength(20), this.inventoryAnvilInput.set_allowedCharacters("a-zA-Z0-9\\-=+|_!.,()[\\]<>'@\\$%\\^&\\*#\\?\\/ "), this.inventoryAnvilInput.transform.reset().scale2D(2).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(-86, -145));
            12 == b && null == this.inventoryBrewingEntity && (c = lemongine.AssetManager.getImage("inventory_brewing"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryBrewingEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryBrewingEntity.isTransparent = !0, this.inventoryBrewingEntity.layer = 16, this.inventoryBrewingEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(-76, -128, 0), new lemongine.Point(0, 40), new lemongine.Point(32, 26)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(-45, -105, 0), new lemongine.Point(0, 66), new lemongine.Point(22, 6)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(-45, -105, 0), new lemongine.Point(0, 72), new lemongine.Point(0, 6)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(-43, -143, 0), new lemongine.Point(32, 40), new lemongine.Point(19, 38)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(-43, -143, 0), new lemongine.Point(51, 40), new lemongine.Point(19, 0)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(-24, -118, 0), new lemongine.Point(), new lemongine.Point(55, 40)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(31, -141, 0), new lemongine.Point(55, 0), new lemongine.Point(17, 36)), this.inventoryBrewingEntity.addQuad(new lemongine.Vector3(31, -141, 0), new lemongine.Point(72, 0), new lemongine.Point(17, 0)), c = lemongine.AssetManager.getImage("inventory_single"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryBrewingItemsEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryBrewingItemsEntity.isTransparent = !0, this.inventoryBrewingItemsEntity.layer = 16, this.inventoryBrewingItemsEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.inventoryBrewingItemsEntity.addQuad(new lemongine.Vector3(-13, -152, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryBrewingItemsEntity.addQuad(new lemongine.Vector3(-108, -152, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryBrewingItemsEntity.addQuad(new lemongine.Vector3(-56, -92, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryBrewingItemsEntity.addQuad(new lemongine.Vector3(-14, -81, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), this.inventoryBrewingItemsEntity.addQuad(new lemongine.Vector3(28, -92, 0), new lemongine.Point(), new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height)), null, new lemongine.Point(35, 35)), c = lemongine.AssetManager.getImage("inventory_brewing"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.inventoryBrewingIconsEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.inventoryBrewingIconsEntity.isTransparent = !0, this.inventoryBrewingIconsEntity.layer = 16, this.inventoryBrewingIconsEntity.transform.reset().translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), this.inventoryBrewingIconsEntity.addQuad(new lemongine.Vector3(-100, -144, 0), new lemongine.Point(70, 36), new lemongine.Point(16, 16), null, new lemongine.Point(18, 18)), this.inventoryBrewingIconsEntity.addQuad(new lemongine.Vector3(-48, -84, 0), new lemongine.Point(70, 52), new lemongine.Point(16, 16), null, new lemongine.Point(18, 18)), this.inventoryBrewingIconsEntity.addQuad(new lemongine.Vector3(-6, -73, 0), new lemongine.Point(70, 52), new lemongine.Point(16, 16), null, new lemongine.Point(18, 18)), this.inventoryBrewingIconsEntity.addQuad(new lemongine.Vector3(36, -84, 0), new lemongine.Point(70, 52), new lemongine.Point(16, 16), null, new lemongine.Point(18, 18)));
            1 != b && 2 != b && 3 != b && 4 != b && 7 != b && 8 != b && 9 != b && 11 != b && 12 != b || null != this.inventoryTrashEntity || (this.inventoryTrashEntity = lemongine.AssetManager.getImage("inventory_single").toEntity(), this.inventoryTrashEntity.isTransparent = !0, this.inventoryTrashEntity.layer = 16, this.inventoryTrashEntity.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("inventory_single").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("inventory_single").height) / G.toFloat(2)).scale2D(1.65).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(170, 114), this.inventoryTrashIcon = lemongine.AssetManager.getImage("trash_bin").toEntity(), this.inventoryTrashIcon.isTransparent = !0, this.inventoryTrashIcon.layer = 18, this.inventoryTrashIcon.transform.reset().translate(G.toFloat(lemongine.AssetManager.getImage("trash_bin").width) / G.toFloat(2), G.toFloat(lemongine.AssetManager.getImage("trash_bin").height) / G.toFloat(2)).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7).translate(180, 120));
            null == this.itemsEntity && (c = lemongine.AssetManager.getImage("ui"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.slotsEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.slotsEntity.isTransparent = !0, this.slotsEntity.layer = 17, c = Textures.blockTextures, d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.itemsEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.itemsEntity.transform.scale2D(17.5067175), this.itemsEntity.isTransparent = !0, this.itemsEntity.layer = 18, this.itemNumbersEntity = new lemongine.QuadPoolEntity(this.game.itemNumberTexture), this.itemNumbersEntity.isTransparent = !0, this.itemNumbersEntity.layer = 19);
            this.slotPositions = new haxe.ds.StringMap();
            if (1 == b || 2 == b || 3 == b || 4 == b || 8 == b || 9 == b || 11 == b || 12 == b) f = new haxe.ds.StringMap(), f.h.i1 = {
                x: -134,
                y: 132,
                number: 0,
                data: function () {
                    return a.world.inventoryItem(0);
                }
            }, f.h.i2 = {
                x: -100,
                y: 132,
                number: 1,
                data: function () {
                    return a.world.inventoryItem(1);
                }
            }, f.h.i3 = {
                x: -66,
                y: 132,
                number: 2,
                data: function () {
                    return a.world.inventoryItem(2);
                }
            }, f.h.i4 = {
                x: -32,
                y: 132,
                number: 3,
                data: function () {
                    return a.world.inventoryItem(3);
                }
            }, f.h.i5 = {
                x: 2,
                y: 132,
                number: 4,
                data: function () {
                    return a.world.inventoryItem(4);
                }
            }, f.h.i6 = {
                x: 36,
                y: 132,
                number: 5,
                data: function () {
                    return a.world.inventoryItem(5);
                }
            }, f.h.i7 = {
                x: 70,
                y: 132,
                number: 6,
                data: function () {
                    return a.world.inventoryItem(6);
                }
            }, f.h.i8 = {
                x: 104,
                y: 132,
                number: 7,
                data: function () {
                    return a.world.inventoryItem(7);
                }
            }, f.h.i9 = {
                x: 138,
                y: 132,
                number: 8,
                data: function () {
                    return a.world.inventoryItem(8);
                }
            }, f.h.i10 = {
                x: -134,
                y: -11,
                number: 9,
                data: function () {
                    return a.world.inventoryItem(9);
                }
            }, f.h.i11 = {
                x: -100,
                y: -11,
                number: 10,
                data: function () {
                    return a.world.inventoryItem(10);
                }
            }, f.h.i12 = {
                x: -66,
                y: -11,
                number: 11,
                data: function () {
                    return a.world.inventoryItem(11);
                }
            }, f.h.i13 = {
                x: -32,
                y: -11,
                number: 12,
                data: function () {
                    return a.world.inventoryItem(12);
                }
            }, f.h.i14 = {
                x: 2,
                y: -11,
                number: 13,
                data: function () {
                    return a.world.inventoryItem(13);
                }
            }, f.h.i15 = {
                x: 36,
                y: -11,
                number: 14,
                data: function () {
                    return a.world.inventoryItem(14);
                }
            }, f.h.i16 = {
                x: 70,
                y: -11,
                number: 15,
                data: function () {
                    return a.world.inventoryItem(15);
                }
            }, f.h.i17 = {
                x: 104,
                y: -11,
                number: 16,
                data: function () {
                    return a.world.inventoryItem(16);
                }
            }, f.h.i18 = {
                x: 138,
                y: -11,
                number: 17,
                data: function () {
                    return a.world.inventoryItem(17);
                }
            }, f.h.i19 = {
                x: -134,
                y: 23,
                number: 18,
                data: function () {
                    return a.world.inventoryItem(18);
                }
            }, f.h.i20 = {
                x: -100,
                y: 23,
                number: 19,
                data: function () {
                    return a.world.inventoryItem(19);
                }
            }, f.h.i21 = {
                x: -66,
                y: 23,
                number: 20,
                data: function () {
                    return a.world.inventoryItem(20);
                }
            }, f.h.i22 = {
                x: -32,
                y: 23,
                number: 21,
                data: function () {
                    return a.world.inventoryItem(21);
                }
            }, f.h.i23 = {
                x: 2,
                y: 23,
                number: 22,
                data: function () {
                    return a.world.inventoryItem(22);
                }
            }, f.h.i24 = {
                x: 36,
                y: 23,
                number: 23,
                data: function () {
                    return a.world.inventoryItem(23);
                }
            }, f.h.i25 = {
                x: 70,
                y: 23,
                number: 24,
                data: function () {
                    return a.world.inventoryItem(24);
                }
            }, f.h.i26 = {
                x: 104,
                y: 23,
                number: 25,
                data: function () {
                    return a.world.inventoryItem(25);
                }
            }, f.h.i27 = {
                x: 138,
                y: 23,
                number: 26,
                data: function () {
                    return a.world.inventoryItem(26);
                }
            }, f.h.i28 = {
                x: -134,
                y: 57,
                number: 27,
                data: function () {
                    return a.world.inventoryItem(27);
                }
            }, f.h.i29 = {
                x: -100,
                y: 57,
                number: 28,
                data: function () {
                    return a.world.inventoryItem(28);
                }
            }, f.h.i30 = {
                x: -66,
                y: 57,
                number: 29,
                data: function () {
                    return a.world.inventoryItem(29);
                }
            }, f.h.i31 = {
                x: -32,
                y: 57,
                number: 30,
                data: function () {
                    return a.world.inventoryItem(30);
                }
            }, f.h.i32 = {
                x: 2,
                y: 57,
                number: 31,
                data: function () {
                    return a.world.inventoryItem(31);
                }
            }, f.h.i33 = {
                x: 36,
                y: 57,
                number: 32,
                data: function () {
                    return a.world.inventoryItem(32);
                }
            }, f.h.i34 = {
                x: 70,
                y: 57,
                number: 33,
                data: function () {
                    return a.world.inventoryItem(33);
                }
            }, f.h.i35 = {
                x: 104,
                y: 57,
                number: 34,
                data: function () {
                    return a.world.inventoryItem(34);
                }
            }, f.h.i36 = {
                x: 138,
                y: 57,
                number: 35,
                data: function () {
                    return a.world.inventoryItem(35);
                }
            }, f.h.i37 = {
                x: -134,
                y: 91,
                number: 36,
                data: function () {
                    return a.world.inventoryItem(36);
                }
            }, f.h.i38 = {
                x: -100,
                y: 91,
                number: 37,
                data: function () {
                    return a.world.inventoryItem(37);
                }
            }, f.h.i39 = {
                x: -66,
                y: 91,
                number: 38,
                data: function () {
                    return a.world.inventoryItem(38);
                }
            }, f.h.i40 = {
                x: -32,
                y: 91,
                number: 39,
                data: function () {
                    return a.world.inventoryItem(39);
                }
            }, f.h.i41 = {
                x: 2,
                y: 91,
                number: 40,
                data: function () {
                    return a.world.inventoryItem(40);
                }
            }, f.h.i42 = {
                x: 36,
                y: 91,
                number: 41,
                data: function () {
                    return a.world.inventoryItem(41);
                }
            }, f.h.i43 = {
                x: 70,
                y: 91,
                number: 42,
                data: function () {
                    return a.world.inventoryItem(42);
                }
            }, f.h.i44 = {
                x: 104,
                y: 91,
                number: 43,
                data: function () {
                    return a.world.inventoryItem(43);
                }
            }, f.h.i45 = {
                x: 138,
                y: 91,
                number: 44,
                data: function () {
                    return a.world.inventoryItem(44);
                }
            }, lemongine.Helpers.mapConcat(this.slotPositions, f);
            1 != this.world.gamemode || 1 != b && 2 != b && 3 != b && 4 != b && 7 != b && 8 != b && 9 != b && 11 != b && 12 != b || (f = new haxe.ds.StringMap(), f.h.trashItem = {
                x: 190,
                y: 133,
                number: 0,
                data: null
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            1 == b && (f = new haxe.ds.StringMap(), f.h.a1 = {
                x: -121,
                y: -100,
                number: 0,
                data: function () {
                    return a.world.armorsAsItem(0);
                }
            }, f.h.a2 = {
                x: -89,
                y: -100,
                number: 1,
                data: function () {
                    return a.world.armorsAsItem(1);
                }
            }, f.h.a3 = {
                x: -56,
                y: -100,
                number: 2,
                data: function () {
                    return a.world.armorsAsItem(2);
                }
            }, f.h.a4 = {
                x: -24,
                y: -100,
                number: 3,
                data: function () {
                    return a.world.armorsAsItem(3);
                }
            }, f.h.c1 = {
                x: 30,
                y: -112,
                number: 0,
                data: null
            }, f.h.c2 = {
                x: 64,
                y: -112,
                number: 1,
                data: null
            }, f.h.c3 = {
                x: 30,
                y: -78,
                number: 2,
                data: null
            }, f.h.c4 = {
                x: 64,
                y: -78,
                number: 3,
                data: null
            }, f.h.output = {
                x: 107,
                y: -95,
                number: 0,
                data: null
            }, lemongine.Helpers.mapConcat(this.slotPositions, f), this.blocks = [1, 2, 3, 4], this.blocks2 = [[1, 2], [3, 4]], this.d = [3, 4, null, null], this.l = [null, 1, null, 3], this.r = [2, null, 4, null], this.tableSize = 2);
            2 == b && (f = new haxe.ds.StringMap(), f.h.c1 = {
                x: -31,
                y: -134,
                number: 0,
                data: null
            }, f.h.c2 = {
                x: 2,
                y: -134,
                number: 1,
                data: null
            }, f.h.c3 = {
                x: 35,
                y: -134,
                number: 2,
                data: null
            }, f.h.c4 = {
                x: -31,
                y: -99,
                number: 3,
                data: null
            }, f.h.c5 = {
                x: 2,
                y: -99,
                number: 4,
                data: null
            }, f.h.c6 = {
                x: 35,
                y: -99,
                number: 5,
                data: null
            }, f.h.c7 = {
                x: -31,
                y: -65,
                number: 6,
                data: null
            }, f.h.c8 = {
                x: 2,
                y: -65,
                number: 7,
                data: null
            }, f.h.c9 = {
                x: 35,
                y: -65,
                number: 8,
                data: null
            }, f.h.output = {
                x: 79,
                y: -100,
                number: 0,
                data: null
            }, lemongine.Helpers.mapConcat(this.slotPositions, f), this.blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9], this.blocks2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], this.d = [4, 5, 6, 7, 8, 9, null, null, null], this.l = [null, 1, 2, null, 4, 5, null, 7, 8], this.r = [2, 3, null, 5, 6, null, 8, 9, null], this.tableSize = 3);
            3 == b && (f = new haxe.ds.StringMap(), f.h.cook = {
                x: -31,
                y: -131,
                number: 0,
                data: function () {
                    var b = a.world.toSmelt.h[a.game.inventario.smelter];
                    return null == b ? null : b.h.input;
                }
            }, f.h.fuel = {
                x: -31,
                y: -63,
                number: 0,
                data: function () {
                    var b = a.world.toSmelt.h[a.game.inventario.smelter];
                    return null == b ? null : b.h.fuel;
                }
            }, f.h.output2 = {
                x: 38,
                y: -96,
                number: 0,
                data: function () {
                    var b = a.world.toSmelt.h[a.game.inventario.smelter];
                    return null == b ? null : b.h.output;
                }
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            4 == b && (f = new haxe.ds.StringMap(), f.h.h1 = {
                x: -133,
                y: -137,
                number: 0,
                data: function () {
                    return a.chestSlotFetchData(0);
                }
            }, f.h.h2 = {
                x: -98,
                y: -137,
                number: 1,
                data: function () {
                    return a.chestSlotFetchData(1);
                }
            }, f.h.h3 = {
                x: -64,
                y: -137,
                number: 2,
                data: function () {
                    return a.chestSlotFetchData(2);
                }
            }, f.h.h4 = {
                x: -30,
                y: -137,
                number: 3,
                data: function () {
                    return a.chestSlotFetchData(3);
                }
            }, f.h.h5 = {
                x: 4,
                y: -137,
                number: 4,
                data: function () {
                    return a.chestSlotFetchData(4);
                }
            }, f.h.h6 = {
                x: 38,
                y: -137,
                number: 5,
                data: function () {
                    return a.chestSlotFetchData(5);
                }
            }, f.h.h7 = {
                x: 72,
                y: -137,
                number: 6,
                data: function () {
                    return a.chestSlotFetchData(6);
                }
            }, f.h.h8 = {
                x: 106,
                y: -137,
                number: 7,
                data: function () {
                    return a.chestSlotFetchData(7);
                }
            }, f.h.h9 = {
                x: 141,
                y: -137,
                number: 8,
                data: function () {
                    return a.chestSlotFetchData(8);
                }
            }, f.h.h10 = {
                x: -133,
                y: -103,
                number: 9,
                data: function () {
                    return a.chestSlotFetchData(9);
                }
            }, f.h.h11 = {
                x: -99,
                y: -103,
                number: 10,
                data: function () {
                    return a.chestSlotFetchData(10);
                }
            }, f.h.h12 = {
                x: -64,
                y: -103,
                number: 11,
                data: function () {
                    return a.chestSlotFetchData(11);
                }
            }, f.h.h13 = {
                x: -30,
                y: -103,
                number: 12,
                data: function () {
                    return a.chestSlotFetchData(12);
                }
            }, f.h.h14 = {
                x: 4,
                y: -103,
                number: 13,
                data: function () {
                    return a.chestSlotFetchData(13);
                }
            }, f.h.h15 = {
                x: 38,
                y: -103,
                number: 14,
                data: function () {
                    return a.chestSlotFetchData(14);
                }
            }, f.h.h16 = {
                x: 72,
                y: -103,
                number: 15,
                data: function () {
                    return a.chestSlotFetchData(15);
                }
            }, f.h.h17 = {
                x: 106,
                y: -103,
                number: 16,
                data: function () {
                    return a.chestSlotFetchData(16);
                }
            }, f.h.h18 = {
                x: 141,
                y: -103,
                number: 17,
                data: function () {
                    return a.chestSlotFetchData(17);
                }
            }, f.h.h19 = {
                x: -133,
                y: -68,
                number: 18,
                data: function () {
                    return a.chestSlotFetchData(18);
                }
            }, f.h.h20 = {
                x: -99,
                y: -68,
                number: 19,
                data: function () {
                    return a.chestSlotFetchData(19);
                }
            }, f.h.h21 = {
                x: -64,
                y: -68,
                number: 20,
                data: function () {
                    return a.chestSlotFetchData(20);
                }
            }, f.h.h22 = {
                x: -30,
                y: -68,
                number: 21,
                data: function () {
                    return a.chestSlotFetchData(21);
                }
            }, f.h.h23 = {
                x: 4,
                y: -68,
                number: 22,
                data: function () {
                    return a.chestSlotFetchData(22);
                }
            }, f.h.h24 = {
                x: 38,
                y: -68,
                number: 23,
                data: function () {
                    return a.chestSlotFetchData(23);
                }
            }, f.h.h25 = {
                x: 72,
                y: -68,
                number: 24,
                data: function () {
                    return a.chestSlotFetchData(24);
                }
            }, f.h.h26 = {
                x: 106,
                y: -68,
                number: 25,
                data: function () {
                    return a.chestSlotFetchData(25);
                }
            }, f.h.h27 = {
                x: 141,
                y: -68,
                number: 26,
                data: function () {
                    return a.chestSlotFetchData(26);
                }
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            7 == b && (f = new haxe.ds.StringMap(), f.h.i1 = {
                x: -134,
                y: 132,
                number: 0,
                data: function () {
                    return a.world.inventoryItem(0);
                }
            }, f.h.i2 = {
                x: -100,
                y: 132,
                number: 1,
                data: function () {
                    return a.world.inventoryItem(1);
                }
            }, f.h.i3 = {
                x: -66,
                y: 132,
                number: 2,
                data: function () {
                    return a.world.inventoryItem(2);
                }
            }, f.h.i4 = {
                x: -32,
                y: 132,
                number: 3,
                data: function () {
                    return a.world.inventoryItem(3);
                }
            }, f.h.i5 = {
                x: 2,
                y: 132,
                number: 4,
                data: function () {
                    return a.world.inventoryItem(4);
                }
            }, f.h.i6 = {
                x: 36,
                y: 132,
                number: 5,
                data: function () {
                    return a.world.inventoryItem(5);
                }
            }, f.h.i7 = {
                x: 70,
                y: 132,
                number: 6,
                data: function () {
                    return a.world.inventoryItem(6);
                }
            }, f.h.i8 = {
                x: 104,
                y: 132,
                number: 7,
                data: function () {
                    return a.world.inventoryItem(7);
                }
            }, f.h.i9 = {
                x: 138,
                y: 132,
                number: 8,
                data: function () {
                    return a.world.inventoryItem(8);
                }
            }, f.h.p1 = {
                x: -134,
                y: -87,
                number: 0,
                data: function () {
                    return a.game.inventario.getCreativeItem(0);
                }
            }, f.h.p2 = {
                x: -100,
                y: -87,
                number: 1,
                data: function () {
                    return a.game.inventario.getCreativeItem(1);
                }
            }, f.h.p3 = {
                x: -66,
                y: -87,
                number: 2,
                data: function () {
                    return a.game.inventario.getCreativeItem(2);
                }
            }, f.h.p4 = {
                x: -32,
                y: -87,
                number: 3,
                data: function () {
                    return a.game.inventario.getCreativeItem(3);
                }
            }, f.h.p5 = {
                x: 2,
                y: -87,
                number: 4,
                data: function () {
                    return a.game.inventario.getCreativeItem(4);
                }
            }, f.h.p6 = {
                x: 36,
                y: -87,
                number: 5,
                data: function () {
                    return a.game.inventario.getCreativeItem(5);
                }
            }, f.h.p7 = {
                x: 70,
                y: -87,
                number: 6,
                data: function () {
                    return a.game.inventario.getCreativeItem(6);
                }
            }, f.h.p8 = {
                x: 104,
                y: -87,
                number: 7,
                data: function () {
                    return a.game.inventario.getCreativeItem(7);
                }
            }, f.h.p9 = {
                x: 138,
                y: -87,
                number: 8,
                data: function () {
                    return a.game.inventario.getCreativeItem(8);
                }
            }, f.h.p10 = {
                x: -134,
                y: -53,
                number: 9,
                data: function () {
                    return a.game.inventario.getCreativeItem(9);
                }
            }, f.h.p11 = {
                x: -100,
                y: -53,
                number: 10,
                data: function () {
                    return a.game.inventario.getCreativeItem(10);
                }
            }, f.h.p12 = {
                x: -66,
                y: -53,
                number: 11,
                data: function () {
                    return a.game.inventario.getCreativeItem(11);
                }
            }, f.h.p13 = {
                x: -32,
                y: -53,
                number: 12,
                data: function () {
                    return a.game.inventario.getCreativeItem(12);
                }
            }, f.h.p14 = {
                x: 2,
                y: -53,
                number: 13,
                data: function () {
                    return a.game.inventario.getCreativeItem(13);
                }
            }, f.h.p15 = {
                x: 36,
                y: -53,
                number: 14,
                data: function () {
                    return a.game.inventario.getCreativeItem(14);
                }
            }, f.h.p16 = {
                x: 70,
                y: -53,
                number: 15,
                data: function () {
                    return a.game.inventario.getCreativeItem(15);
                }
            }, f.h.p17 = {
                x: 104,
                y: -53,
                number: 16,
                data: function () {
                    return a.game.inventario.getCreativeItem(16);
                }
            }, f.h.p18 = {
                x: 138,
                y: -53,
                number: 17,
                data: function () {
                    return a.game.inventario.getCreativeItem(17);
                }
            }, f.h.p19 = {
                x: -134,
                y: -18,
                number: 18,
                data: function () {
                    return a.game.inventario.getCreativeItem(18);
                }
            }, f.h.p20 = {
                x: -100,
                y: -18,
                number: 19,
                data: function () {
                    return a.game.inventario.getCreativeItem(19);
                }
            }, f.h.p21 = {
                x: -66,
                y: -18,
                number: 20,
                data: function () {
                    return a.game.inventario.getCreativeItem(20);
                }
            }, f.h.p22 = {
                x: -32,
                y: -18,
                number: 21,
                data: function () {
                    return a.game.inventario.getCreativeItem(21);
                }
            }, f.h.p23 = {
                x: 2,
                y: -18,
                number: 22,
                data: function () {
                    return a.game.inventario.getCreativeItem(22);
                }
            }, f.h.p24 = {
                x: 36,
                y: -18,
                number: 23,
                data: function () {
                    return a.game.inventario.getCreativeItem(23);
                }
            }, f.h.p25 = {
                x: 70,
                y: -18,
                number: 24,
                data: function () {
                    return a.game.inventario.getCreativeItem(24);
                }
            }, f.h.p26 = {
                x: 104,
                y: -18,
                number: 25,
                data: function () {
                    return a.game.inventario.getCreativeItem(25);
                }
            }, f.h.p27 = {
                x: 138,
                y: -18,
                number: 26,
                data: function () {
                    return a.game.inventario.getCreativeItem(26);
                }
            }, f.h.p28 = {
                x: -134,
                y: 15,
                number: 27,
                data: function () {
                    return a.game.inventario.getCreativeItem(27);
                }
            }, f.h.p29 = {
                x: -100,
                y: 15,
                number: 28,
                data: function () {
                    return a.game.inventario.getCreativeItem(28);
                }
            }, f.h.p30 = {
                x: -66,
                y: 15,
                number: 29,
                data: function () {
                    return a.game.inventario.getCreativeItem(29);
                }
            }, f.h.p31 = {
                x: -32,
                y: 15,
                number: 30,
                data: function () {
                    return a.game.inventario.getCreativeItem(30);
                }
            }, f.h.p32 = {
                x: 2,
                y: 15,
                number: 31,
                data: function () {
                    return a.game.inventario.getCreativeItem(31);
                }
            }, f.h.p33 = {
                x: 36,
                y: 15,
                number: 32,
                data: function () {
                    return a.game.inventario.getCreativeItem(32);
                }
            }, f.h.p34 = {
                x: 70,
                y: 15,
                number: 33,
                data: function () {
                    return a.game.inventario.getCreativeItem(33);
                }
            }, f.h.p35 = {
                x: 104,
                y: 15,
                number: 34,
                data: function () {
                    return a.game.inventario.getCreativeItem(34);
                }
            }, f.h.p36 = {
                x: 138,
                y: 15,
                number: 35,
                data: function () {
                    return a.game.inventario.getCreativeItem(35);
                }
            }, f.h.p37 = {
                x: -134,
                y: 49,
                number: 36,
                data: function () {
                    return a.game.inventario.getCreativeItem(36);
                }
            }, f.h.p38 = {
                x: -100,
                y: 49,
                number: 37,
                data: function () {
                    return a.game.inventario.getCreativeItem(37);
                }
            }, f.h.p39 = {
                x: -66,
                y: 49,
                number: 38,
                data: function () {
                    return a.game.inventario.getCreativeItem(38);
                }
            }, f.h.p40 = {
                x: -32,
                y: 49,
                number: 39,
                data: function () {
                    return a.game.inventario.getCreativeItem(39);
                }
            }, f.h.p41 = {
                x: 2,
                y: 49,
                number: 40,
                data: function () {
                    return a.game.inventario.getCreativeItem(40);
                }
            }, f.h.p42 = {
                x: 36,
                y: 49,
                number: 41,
                data: function () {
                    return a.game.inventario.getCreativeItem(41);
                }
            }, f.h.p43 = {
                x: 70,
                y: 49,
                number: 42,
                data: function () {
                    return a.game.inventario.getCreativeItem(42);
                }
            }, f.h.p44 = {
                x: 104,
                y: 49,
                number: 43,
                data: function () {
                    return a.game.inventario.getCreativeItem(43);
                }
            }, f.h.p45 = {
                x: 138,
                y: 49,
                number: 44,
                data: function () {
                    return a.game.inventario.getCreativeItem(44);
                }
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            8 == b && (f = new haxe.ds.StringMap(), f.h.enchant = {
                x: -107,
                y: -83,
                number: 0,
                data: null
            }, lemongine.Helpers.mapConcat(this.slotPositions, f), this.bookFrame = 0, this.unArrange(0), this.unArrange(1), this.unArrange(2));
            9 == b && (f = new haxe.ds.StringMap(), f.h.dis1 = {
                x: -31,
                y: -134,
                number: 0,
                data: function () {
                    return a.dispenserSlotFetchData(0);
                }
            }, f.h.dis2 = {
                x: 2,
                y: -134,
                number: 1,
                data: function () {
                    return a.dispenserSlotFetchData(1);
                }
            }, f.h.dis3 = {
                x: 35,
                y: -134,
                number: 2,
                data: function () {
                    return a.dispenserSlotFetchData(2);
                }
            }, f.h.dis4 = {
                x: -31,
                y: -99,
                number: 3,
                data: function () {
                    return a.dispenserSlotFetchData(3);
                }
            }, f.h.dis5 = {
                x: 2,
                y: -99,
                number: 4,
                data: function () {
                    return a.dispenserSlotFetchData(4);
                }
            }, f.h.dis6 = {
                x: 35,
                y: -99,
                number: 5,
                data: function () {
                    return a.dispenserSlotFetchData(5);
                }
            }, f.h.dis7 = {
                x: -31,
                y: -65,
                number: 6,
                data: function () {
                    return a.dispenserSlotFetchData(6);
                }
            }, f.h.dis8 = {
                x: 2,
                y: -65,
                number: 7,
                data: function () {
                    return a.dispenserSlotFetchData(7);
                }
            }, f.h.dis9 = {
                x: 35,
                y: -65,
                number: 8,
                data: function () {
                    return a.dispenserSlotFetchData(8);
                }
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            11 == b && (f = new haxe.ds.StringMap(), f.h.ai1 = {
                x: -71,
                y: -91,
                number: 0,
                data: null
            }, f.h.ai2 = {
                x: 18,
                y: -91,
                number: 0,
                data: null
            }, f.h.aoutput = {
                x: 129,
                y: -91,
                number: 0,
                data: null
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            12 == b && (f = new haxe.ds.StringMap(), f.h.brewFuel = {
                x: -89,
                y: -134,
                number: 0,
                data: function () {
                    var b = a.world.toBrew.h[a.game.inventario.brewer];
                    return null == b ? null : b.h.fuel;
                }
            }, f.h.brewInput = {
                x: 6,
                y: -134,
                number: 0,
                data: function () {
                    var b = a.world.toBrew.h[a.game.inventario.brewer];
                    return null == b ? null : b.h.input;
                }
            }, f.h.brewOutput1 = {
                x: -37,
                y: -75,
                number: 0,
                data: function () {
                    var b = a.world.toBrew.h[a.game.inventario.brewer];
                    return null == b ? null : b.h.output[0];
                }
            }, f.h.brewOutput2 = {
                x: 5,
                y: -64,
                number: 1,
                data: function () {
                    var b = a.world.toBrew.h[a.game.inventario.brewer];
                    return null == b ? null : b.h.output[1];
                }
            }, f.h.brewOutput3 = {
                x: 47,
                y: -75,
                number: 2,
                data: function () {
                    var b = a.world.toBrew.h[a.game.inventario.brewer];
                    return null == b ? null : b.h.output[2];
                }
            }, lemongine.Helpers.mapConcat(this.slotPositions, f));
            b = Object.keys(this.inventorySlots.h);
            f = b.length;
            for (l = 0; l < f;) c = b[l++], "dragger" != this.inventorySlots.h[c].name && (this.inventorySlots.h[c].remove(), d = this.inventorySlots, Object.prototype.hasOwnProperty.call(d.h, c) && delete d.h[c]);
            b = Object.keys(this.slotPositions.h);
            f = b.length;
            for (l = 0; l < f;) c = b[l++], d = this.inventorySlots, p = new ItemSlot(this.slotsEntity, this.itemsEntity, this.itemNumbersEntity, this.game.scene.get_width() / 2 + this.slotPositions.h[c].x - 2, this.game.scene.get_height() / 2 - 7 + this.slotPositions.h[c].y, 1.6716900000000001, this.game, this.world, null, this.slotPositions.h[c].data), d.h[c] = p, this.inventorySlots.h[c].number = this.slotPositions.h[c].number, this.inventorySlots.h[c].name = c;
            null == this.draggerItemEntity && (c = Textures.blockTextures, d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.draggerItemEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.draggerItemEntity.transform.scale2D(17.5067175), this.draggerItemEntity.isTransparent = !0, this.draggerItemEntity.layer = 21, this.draggerItemNumberEntity = new lemongine.QuadPoolEntity(this.game.itemNumberTexture), this.draggerItemNumberEntity.isTransparent = !0, this.draggerItemNumberEntity.layer = 22, c = lemongine.AssetManager.getImage("ui"), d = shader.BlockShader.getShader(shader.BlendMode.NORMAL), f = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([1], 24), f.h.color = l, l = lemongine.Mathz.repeatArray([0], 24), f.h.colorOffset = l, this.draggerSlotEntity = new lemongine.QuadPoolEntity(c, null, d, f), this.draggerSlotEntity.isTransparent = !0, this.draggerSlotEntity.layer = 20, d = this.inventorySlots, l = new ItemSlot(this.draggerSlotEntity, this.draggerItemEntity, this.draggerItemNumberEntity, -100, -100, 1.6716900000000001, this.game, this.world, Game.emptyItem()), d.h.dragger = l, this.inventorySlots.h.dragger.name = "dragger");
        }
    },
    chestSlotFetchData: function (b) {
        var a = "ender" == this.chest ? this.world.enderChests.h[this.world.player.id] : this.world.chests.h[this.game.inventario.chest];
        return null == a ? null : a[b];
    },
    dispenserSlotFetchData: function (b) {
        var a = this.world.states.h[this.dispenseName + "_2"];
        return null == a ? null : a[b];
    },
    getCreativeItem: function (b) {
        var a = b + 45 * (this.page - 1);
        b = ["air", 0, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
        if (this.currentItems.length > a) {
            if ("Array" == lemongine.Helpers.getQualifiedClassName(this.currentItems[a])) {
                a = this.currentItems[a];
                b[0] = a[0];
                if ("Object" == lemongine.Helpers.getQualifiedClassName(a[1])) for (var c = a[1], d = Object.keys(c.h), f = d.length, l = 0; l < f;) {
                    var p = d[l++];
                    Game.makeDynamicMap(b[3]).h[p] = c.h[p];
                } else c = new haxe.ds.StringMap(), c.h.type = a[1], b[3] = Game.makeDynamicMap(c);
                "potion" == a[0] && Object.prototype.hasOwnProperty.call(this.game.potionData.h, Game.makeDynamicMap(b[3]).h.type) && (a = Game.makeDynamicMap(b[3]), c = lemongine.Helpers.clone(this.game.potionData.h[Game.makeDynamicMap(b[3]).h.type].h.effects), a.h.effects = c);
            } else b[0] = this.currentItems[a];
            b[1] = 1;
        }
        return b;
    },
    update: function () {
        var b = this;
        null != this.gotoAtStartOfFrame && (this.gotoAndStop(this.gotoAtStartOfFrame), this.gotoAtStartOfFrame = null);
        switch (this.currentFrame) {
        case 1:
            var a = this.inventorySlots.h,
                c = a;
            a = Object.keys(a);
            for (var d = a.length, f = 0; f < d;) {
                var l = c[a[f++]];
                l.refetchItem();
                l.checkInteraction();
            }
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleArmor", "Armor", new lemongine.Point(this.game.scene.get_width() / 2 - 137, this.game.scene.get_height() / 2 - 7 - 135), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleCrafting", "Crafting", new lemongine.Point(this.game.scene.get_width() / 2 + 13, this.game.scene.get_height() / 2 - 7 - 150 + 2), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            1 == this.world.gamemode && null != this.inventoryCreativeButtonsEntity && (this.inventoryCreativeButtonsEntity.clearPool(), f = Main.addSimpleButton("switch", this.inventoryCreativeButtonsEntity, this.game.scene.get_width() / 2 + 10 | 0, this.game.scene.get_height() / 2 - 7 - 169 | 0, 147, 20, 1, function () {
                b.gotoAtStartOfFrame = 7;
            }) ? TextCache.get("inventorySwitchButtonText", "Show creative inventory", new lemongine.Point(this.game.scene.get_width() / 2 + 86, this.game.scene.get_height() / 2 - 7 - 169 + 12), Fonts.get_volter(), lemongine.Color.white, 1.125, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("inventorySwitchButtonText", "Show creative inventory", new lemongine.Point(this.game.scene.get_width() / 2 + 85, this.game.scene.get_height() / 2 - 7 - 169 + 11), Fonts.get_volter(), lemongine.Color.white, 1.125, lemongine.TextAlignment.CENTER, 1.5), f.layer = 16, this.game.scene.draw(f), this.inventoryCreativeButtonsEntity.resetUnusedQuads());
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryArmorEntity);
            this.game.scene.draw(this.inventoryCraftingEntity);
            1 == this.world.gamemode && null != this.inventoryCreativeButtonsEntity && this.game.scene.draw(this.inventoryCreativeButtonsEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 2:
            if ("craft" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleCrafting", "Crafting", new lemongine.Point(this.game.scene.get_width() / 2 - 54 + 4, this.game.scene.get_height() / 2 - 7 - 172 + 4), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryCraftingTableEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 3:
            if ("oven" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleFurnace", "" == this.newName ? "Furnace" : this.newName, new lemongine.Point(this.game.scene.get_width() / 2 - 49, this.game.scene.get_height() / 2 - 7 - 168), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            c = Math.ceil(js.Boot.__cast(this.world.toSmelt.h[this.smelter], haxe.ds.StringMap).h.fuelTimer / js.Boot.__cast(this.world.toSmelt.h[this.smelter], haxe.ds.StringMap).h.fuelTimerTotal * 8) / 8;
            a = Math.floor(js.Boot.__cast(this.world.toSmelt.h[this.smelter], haxe.ds.StringMap).h.smeltTimer);
            this.inventoryFurnaceBarsEntity.updateQuad(1, new lemongine.Vector3(8, 24 + 14 * (1 - c), 0), new lemongine.Point(63, 0), new lemongine.Point(5, 62), new lemongine.Point(7, 14 * c));
            this.inventoryFurnaceBarsEntity.updateQuad(3, new lemongine.Vector3(24, 24, 0), new lemongine.Point(63, 0), new lemongine.Point(5, 62), new lemongine.Point(15 * a / 9, 13));
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryFurnaceBarsEntity);
            this.game.scene.draw(this.inventoryFurnaceEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 4:
            if ("cart" == HxOverrides.substr(this.chest, 0, 4)) {
                if (null == this.world.carts.h[this.chest]) {
                    this.requestClose();
                    return;
                }
                this.craftCoords = [this.world.carts.h[this.chest].h.x, -this.world.carts.h[this.chest].h.y];
            } else if ("ender" == this.chest) {
                if ("echest" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                    this.requestClose();
                    return;
                }
            } else if ("chest" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleChest", "ender" == this.chest ? "Ender Chest" : "" == this.newName ? "Chest" : this.newName, new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 172), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryChestEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 5:
            this.jAnimation++;
            f = 80 > this.jAnimation ? TextCache.get("inventoryJText", "Hello.", new lemongine.Point(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), Fonts.get_volter(), lemongine.Color.white, 2.8, lemongine.TextAlignment.CENTER, 0) : 208 > this.jAnimation ? TextCache.get("inventoryJText", "Hello.\nI am J.", new lemongine.Point(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), Fonts.get_volter(), lemongine.Color.white, 2.8, lemongine.TextAlignment.CENTER, 0) : 382 > this.jAnimation ? TextCache.get("inventoryJText", "Hello.\nI am J.\nI am quite useless.", new lemongine.Point(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), Fonts.get_volter(), lemongine.Color.white, 2.8, lemongine.TextAlignment.CENTER, 0) : 482 > this.jAnimation ? TextCache.get("inventoryJText", "Hello.\nI am J.\nI am quite useless.\nFor now.", new lemongine.Point(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), Fonts.get_volter(), lemongine.Color.white, 2.8, lemongine.TextAlignment.CENTER, 0) : TextCache.get("inventoryJText", "Hello.\nI am J.\nI am quite useless.\nFor now.\nStill!", new lemongine.Point(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2 - 7), Fonts.get_volter(), lemongine.Color.white, 2.8, lemongine.TextAlignment.CENTER, 0);
            586 <= this.jAnimation && this.requestClose();
            f.transform.translate(0, -f.calculatedHeight / 2 * 3.5 + 5);
            f.layer = 16;
            this.game.scene.draw(f);
            this.game.scene.draw(this.inventoryJBackgroundEntity);
            break;
        case 6:
            f = TextCache.get("inventoryTitleSign", "Sign", new lemongine.Point(this.game.scene.get_width() / 2 - 129, this.game.scene.get_height() / 2 - 7 - 90), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            this.inventorySignButtonEntity.clearPool();
            f = Main.addSimpleButton("close", this.inventorySignButtonEntity, this.game.scene.get_width() / 2 + 76 | 0, this.game.scene.get_height() / 2 - 7 + 12 | 0, 54, 22, 1, function () {
                var a = b.world.signs,
                    c = b.sign,
                    d = b.inventorySignInput.get_text();
                a.h[c] = d;
                b.gotoAndStop(0);
            }) ? TextCache.get("inventorySignCloseText", "Close", new lemongine.Point(this.game.scene.get_width() / 2 + 105, this.game.scene.get_height() / 2 - 7 + 25), Fonts.get_volter(), lemongine.Color.white, 1.5, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("inventorySignCloseText", "Close", new lemongine.Point(this.game.scene.get_width() / 2 + 104, this.game.scene.get_height() / 2 - 7 + 24), Fonts.get_volter(), lemongine.Color.white, 1.5, lemongine.TextAlignment.CENTER, 1.5);
            f.layer = 16;
            this.game.scene.draw(f);
            this.inventorySignInput.containsPoint(Main.Instance.mouse) ? this.inventorySignInput.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (this.inventorySignInput.set_focused(!0), this.inventorySignInput.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : this.inventorySignInput.focused && 1 == Main.Instance.mouseDown() && this.inventorySignInput.set_focused(!1);
            this.inventorySignTextBackground.setText(this.inventorySignInput.get_text());
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventorySignEntity);
            this.game.scene.draw(this.inventorySignButtonEntity);
            this.game.scene.draw(this.inventorySignTextBackground);
            this.inventorySignInput.update(this.game.scene);
            break;
        case 7:
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleCreative", "Item Library", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 156), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            this.inventoryCreativeButtonsEntity.clearPool();
            f = Main.addSimpleButton("back", this.inventoryCreativeButtonsEntity, this.game.scene.get_width() / 2 - 152 | 0, this.game.scene.get_height() / 2 - 7 + 72 | 0, 123, 25, 1, function () {
                b.creativeBack();
            }, 1 >= this.page) ? TextCache.get("inventoryPreviousButtonText", "Previous page", new lemongine.Point(this.game.scene.get_width() / 2 - 152 + 62, this.game.scene.get_height() / 2 - 7 + 87), Fonts.get_volter(), lemongine.Color.white, 1.5, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("inventoryPreviousButtonText", "Previous page", new lemongine.Point(this.game.scene.get_width() / 2 - 152 + 61, this.game.scene.get_height() / 2 - 7 + 86), Fonts.get_volter(), 1 >= this.page ? new lemongine.Color(-10132123) : lemongine.Color.white, 1.5, lemongine.TextAlignment.CENTER, 1.5);
            f.layer = 16;
            this.game.scene.draw(f);
            f = Main.addSimpleButton("next", this.inventoryCreativeButtonsEntity, this.game.scene.get_width() / 2 + 31 | 0, this.game.scene.get_height() / 2 - 7 + 72 | 0, 123, 25, 1, function () {
                b.creativeForward();
            }, this.page >= this.getPages()) ? TextCache.get("inventoryNextButtonText", "Next page", new lemongine.Point(this.game.scene.get_width() / 2 + 93, this.game.scene.get_height() / 2 - 7 + 87), Fonts.get_volter(), lemongine.Color.white, 1.5, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("inventoryNextButtonText", "Next page", new lemongine.Point(this.game.scene.get_width() / 2 + 92, this.game.scene.get_height() / 2 - 7 + 86), Fonts.get_volter(), this.page >= this.getPages() ? new lemongine.Color(-10132123) : lemongine.Color.white, 1.5, lemongine.TextAlignment.CENTER, 1.5);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryPageNumber", this.page + "/" + this.getPages(), new lemongine.Point(this.game.scene.get_width() / 2 + 2, this.game.scene.get_height() / 2 - 7 + 87), Fonts.get_volter(), new lemongine.Color(-6710887), 1.625, lemongine.TextAlignment.CENTER, 1.5);
            f.layer = 16;
            this.game.scene.draw(f);
            f = Main.addSimpleButton("switch", this.inventoryCreativeButtonsEntity, this.game.scene.get_width() / 2 + 10 | 0, this.game.scene.get_height() / 2 - 7 - 169 | 0, 147, 20, 1, function () {
                b.gotoAtStartOfFrame = 1;
            }) ? TextCache.get("inventorySwitchButtonText", "Show survival inventory", new lemongine.Point(this.game.scene.get_width() / 2 + 86, this.game.scene.get_height() / 2 - 7 - 169 + 12), Fonts.get_volter(), lemongine.Color.white, 1.125, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("inventorySwitchButtonText", "Show survival inventory", new lemongine.Point(this.game.scene.get_width() / 2 + 85, this.game.scene.get_height() / 2 - 7 - 169 + 11), Fonts.get_volter(), lemongine.Color.white, 1.125, lemongine.TextAlignment.CENTER, 1.5);
            f.layer = 16;
            this.game.scene.draw(f);
            this.inventoryCreativeButtonsEntity.resetUnusedQuads();
            !this.searchOpen && new lemongine.Rectangle(this.game.scene.get_width() / 2 - 154, this.game.scene.get_height() / 2 - 7 - 135, 34.01184 * this.creativeItems.length, 32.311248).containsPoint(Main.Instance.mouse) ? (Main.Instance.setUIHover("buttonTabs", !1), "buttonTabs" == Main.Instance.getUIHover() && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER, c = Math.floor((Main.Instance.mouse.x - (this.game.scene.get_width() / 2 - 154)) / 34.01184), this.showTooltip = !0, this.tooltipText = [this.creativeItems[c].h.name], 1 == Main.Instance.mouseDown() ? (Main.Instance.setUIDown(!0, !1), this.inventoryCreativeEntity.updateQuad(this.tab + 2, new lemongine.Vector3(-154 + 34.01184 * this.tab, -135, 0), new lemongine.Point(22, 126), new lemongine.Point(21, 19), new lemongine.Point(21, 19).multiply(1.700592)), this.tab = c, this.page = 1, this.inventoryCreativeEntity.updateQuad(this.tab + 2, new lemongine.Vector3(-154 + 34.01184 * this.tab, -135, 0), new lemongine.Point(0, 126), new lemongine.Point(21, 19), new lemongine.Point(21, 19).multiply(1.700592)), this.currentItems = this.creativeItems[this.tab].h.items) : Main.Instance.setUIDown(!1, !1))) : "buttonTabs" == Main.Instance.getUIHover() && Main.Instance.setUIHover("");
            new lemongine.Rectangle(this.game.scene.get_width() / 2 + 122, this.game.scene.get_height() / 2 - 7 - 135, 32, 30).containsPoint(Main.Instance.mouse) ? (c = "searchTab" == Main.Instance.getUIHover(), Main.Instance.setUIHover("searchTab", !1), "searchTab" == Main.Instance.getUIHover() && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER, this.showTooltip = !0, this.tooltipText = ["Search All Items"], G.gt(Main.Instance.mouseDown(), 0) ? Main.Instance.setUIDown(!0, !1) : Main.Instance.setUIDown(!1, !1), c && 1 == Main.Instance.mouseUp() && this.setSearchOpen(!this.searchOpen))) : "searchTab" == Main.Instance.getUIHover() && Main.Instance.setUIHover("");
            this.searchOpen && (this.inventoryCreativeSearchInput.containsPoint(Main.Instance.mouse) ? this.inventoryCreativeSearchInput.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (this.inventoryCreativeSearchInput.set_focused(!0), this.inventoryCreativeSearchInput.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : this.inventoryCreativeSearchInput.focused && 1 == Main.Instance.mouseDown() && this.inventoryCreativeSearchInput.set_focused(!1));
            this.inventoryCreativeSearchInput.focused && 1 == Main.Instance.keyDown(27) && this.setSearchOpen(!1);
            if (!this.searchOpen) {
                for (f = Main.Instance.isDown.keys(); f.hasNext();) c = f.next(), 97 <= c && 122 >= c && 1 == Main.Instance.keyDown(c) && c != GlobalSave.getKeyBinding("inventory") && (this.setSearchOpen(!0), this.inventoryCreativeSearchInput.insertText(String.fromCodePoint(97 + (c - 97))));
                1 == Main.Instance.keyDown(32) && this.setSearchOpen(!0);
            }
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryCreativeEntity);
            this.game.scene.draw(this.inventoryCreativeButtonsEntity);
            this.game.scene.draw(this.inventoryCreativeItemsEntity);
            this.game.scene.draw(this.inventoryCreativeSearchEntity);
            this.inventoryCreativeSearchInput.update(this.game.scene);
            this.lastSearchText != this.inventoryCreativeSearchText.text && (this.searchTextChange(), this.lastSearchText = this.inventoryCreativeSearchText.text);
            this.game.scene.draw(this.inventoryTrashEntity);
            this.game.scene.draw(this.inventoryTrashIcon);
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 8:
            if ("enchant" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleEnchant", "" == this.newName ? "Enchantment Table" : this.newName, new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 172), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            this.bookOpen ? 16 > this.bookFrame && this.bookFrame++ : 0 < this.bookFrame && this.bookFrame--;
            this.inventoryEnchantmentButtonEntity.clearPool();
            16 == this.bookFrame ? (f = (Math.floor(this.bookFrame / 2) + 2) % 8 * 16, l = 135 + 16 * Math.floor((Math.floor(this.bookFrame / 2) + 2) / 8), this.inventoryEnchantmentButtonEntity.addQuad(new lemongine.Vector3(-131, -144), new lemongine.Point(f, l), new lemongine.Point(19, 16), !0, new lemongine.Point(47.5, 40))) : (f = (Math.floor(this.bookFrame / 2) + 2) % 8 * 16, l = 135 + 16 * Math.floor((Math.floor(this.bookFrame / 2) + 2) / 8), this.inventoryEnchantmentButtonEntity.addQuad(new lemongine.Vector3(-128, -144), new lemongine.Point(f, l), new lemongine.Point(16, 16), !0, new lemongine.Point(40, 40)));
            for (c = 0; 3 > c;) {
                a = c++;
                var p = this.enchantmentButtons[a];
                d = Main.buttonBehavior("enchantButton" + a, !p.canAfford, -59 + this.game.scene.get_width() / 2 | 0, -148 + 29 * a + this.game.scene.get_height() / 2 - 7 | 0, 210, 29, this.buyEnchants[a], !1);
                f = p.canAfford ? 1 == d ? 2 : 1 : 0;
                this.inventoryEnchantmentButtonEntity.addQuad(new lemongine.Vector3(-59.4, -147.9 + 29 * a), new lemongine.Point(0, 29 * f), new lemongine.Point(140, 29), !0, new lemongine.Point(210.54684, 29));
                for (var Q = 0, B = p.text.length; Q < B;) {
                    f = Q++;
                    var m = HxOverrides.cca(p.text, f);
                    32 != m && (l = 87 + 16 * Math.floor((m - 97) / 8), this.inventoryEnchantmentButtonEntity.addQuad(new lemongine.Vector3(-50.8 + f % 16 * 11.32 - 5.76, -139.7 + 29 * a + 11.9 * Math.floor(f / 16) - 5.76), new lemongine.Point((m - 97) % 8 * 16, l), new lemongine.Point(16, 16), !0, new lemongine.Point(11.52, 11.52)));
                }
                0 < p.lvl && (f = TextCache.get("enchantText" + a + "Shadow", Std.string(this.enchantmentButtons[a].lvl), new lemongine.Point(this.game.scene.get_width() / 2 + 151.54684 - 5 + 1 | 0, -148 + 29 * a + this.game.scene.get_height() / 2 - 7 + 6 | 0), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.RIGHT), f.layer = 18, this.game.scene.draw(f), f = TextCache.get("enchantText" + a, Std.string(this.enchantmentButtons[a].lvl), new lemongine.Point(this.game.scene.get_width() / 2 + 151.54684 - 5 | 0, -148 + 29 * a + this.game.scene.get_height() / 2 - 7 + 5 | 0), Fonts.get_volter(), 1 == d ? lemongine.Color.white : new lemongine.Color(-256), 2, lemongine.TextAlignment.RIGHT), f.layer = 18, this.game.scene.draw(f));
            }
            this.inventoryEnchantmentButtonEntity.resetUnusedQuads();
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryEnchantmentEntity);
            this.game.scene.draw(this.inventoryEnchantmentItemEntity);
            this.game.scene.draw(this.inventoryEnchantmentButtonEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 9:
            if ("dispense" != this.world.getFG(this.craftCoords[0], this.craftCoords[1]) && "dropper" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleDispenser", "" == this.newName ? this.dispenserType : this.newName, new lemongine.Point(this.game.scene.get_width() / 2 - 54 + 4, this.game.scene.get_height() / 2 - 7 - 172 + 4), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryDispenserEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 10:
            if (1 == Main.Instance.keyDown(13) || 1 == Main.Instance.keyUp(13)) {
                this.inventoryCommandsInput.set_focused(!1);
                if ("" != this.inventoryCommandsInput.get_text()) {
                    this.game.interpretCommand(this.inventoryCommandsInput.get_text());
                    for (this.lastCommand.unshift(this.inventoryCommandsInput.get_text()); 100 < this.lastCommand.length;) this.lastCommand.pop();
                    this.inventoryCommandsInput.set_text("");
                }
                this.gotoAndStop(0);
                return;
            }
            1 == Main.Instance.keyDown(1073741906) && (-1 == this.currentCommandNumber && (this.lastSavedText = this.inventoryCommandsInput.get_text()), null != this.lastCommand[Math.min(99, this.currentCommandNumber + 1) | 0] && (this.currentCommandNumber = Math.min(99, this.currentCommandNumber + 1) | 0, this.inventoryCommandsInput.set_text(this.lastCommand[this.currentCommandNumber]), this.inventoryCommandsInput.setSelection(this.inventoryCommandsInput.get_length(), this.inventoryCommandsInput.get_length())));
            1 == Main.Instance.keyDown(1073741905) && (this.currentCommandNumber = Math.max(-1, this.currentCommandNumber - 1) | 0, -1 < this.currentCommandNumber ? this.inventoryCommandsInput.set_text(this.lastCommand[this.currentCommandNumber]) : this.inventoryCommandsInput.set_text(this.lastSavedText), this.inventoryCommandsInput.setSelection(this.inventoryCommandsInput.get_length(), this.inventoryCommandsInput.get_length()));
            this.inventoryCommandsInput.containsPoint(Main.Instance.mouse) ? this.inventoryCommandsInput.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (this.inventoryCommandsInput.set_focused(!0), this.inventoryCommandsInput.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : this.inventoryCommandsInput.focused && 1 == Main.Instance.mouseDown() && this.inventoryCommandsInput.set_focused(!1);
            c = this.game.isScavenger && !ScavengerManager.chatDisabled ? "Chat. Press enter to send." : "Commands. Type /help for help.";
            f = TextCache.get("commandHelpTextShadow", c, new lemongine.Point(29, this.game.scene.get_height() - 78 + 1), Fonts.get_volter(), new lemongine.Color(-16777216), 2, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("commandHelpText", c, new lemongine.Point(28, this.game.scene.get_height() - 78), Fonts.get_volter(), new lemongine.Color(-1), 2, lemongine.TextAlignment.LEFT, .5);
            f.layer = 16;
            this.game.scene.draw(f);
            this.game.scene.draw(this.inventoryCommandsEntity);
            this.inventoryCommandsInput.update(this.game.scene);
            break;
        case 11:
            if ("anvil" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleAnvil", "Anvil - Repair & Rename", new lemongine.Point(this.game.scene.get_width() / 2 - 90, this.game.scene.get_height() / 2 - 7 - 175), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryAnvilResultShadow", this.levelsText, new lemongine.Point(this.game.scene.get_width() / 2 + 146, this.game.scene.get_height() / 2 - 7 - 67 + 1), Fonts.get_volter(), new lemongine.Color(1426063615), 1.7, lemongine.TextAlignment.RIGHT, .35);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryAnvilResult", this.levelsText, new lemongine.Point(this.game.scene.get_width() / 2 + 145, this.game.scene.get_height() / 2 - 7 - 67), Fonts.get_volter(), new lemongine.Color(-13434880), 1.7, lemongine.TextAlignment.RIGHT, .35);
            f.layer = 16;
            this.game.scene.draw(f);
            this.anvilEcksVisible ? this.inventoryAnvilEntity.updateQuad(3, new lemongine.Vector3(60, -103, 0), new lemongine.Point(16, 0), new lemongine.Point(16, 16), new lemongine.Point(16, 16).multiply(1.5)) : this.inventoryAnvilEntity.updateQuad(3, null, null, null, new lemongine.Point());
            this.anvilRenameTextVisible ? this.inventoryAnvilInput.containsPoint(Main.Instance.mouse) ? this.inventoryAnvilInput.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (this.inventoryAnvilInput.set_focused(!0), this.inventoryAnvilInput.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : this.inventoryAnvilInput.focused && 1 == Main.Instance.mouseDown() && this.inventoryAnvilInput.set_focused(!1) : this.inventoryAnvilInput.set_focused(!1);
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryAnvilEntity);
            this.game.scene.draw(this.inventoryAnvilItemsEntity);
            this.anvilRenameTextVisible && (this.inventoryAnvilInput.update(this.game.scene), this.lastAnvilText != this.inventoryAnvilText.text && (this.doAnvilyThings(!1), this.lastAnvilText = this.inventoryAnvilText.text));
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
            break;
        case 12:
            if ("brew" != this.world.getFG(this.craftCoords[0], this.craftCoords[1])) {
                this.requestClose();
                return;
            }
            if (Math.pow(this.craftCoords[0] - this.world.worldX, 2) + Math.pow(-this.craftCoords[1] - this.world.worldY, 2) > Math.pow(5, 2)) {
                this.requestClose();
                return;
            }
            c = a = this.inventorySlots.h;
            a = Object.keys(a);
            d = a.length;
            for (f = 0; f < d;) l = c[a[f++]], l.refetchItem(), l.checkInteraction();
            f = TextCache.get("inventoryTitleInventory", "Inventory", new lemongine.Point(this.game.scene.get_width() / 2 - 152, this.game.scene.get_height() / 2 - 7 - 46), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            f = TextCache.get("inventoryTitleBrewer", "" == this.newName ? "Brewing" : this.newName, new lemongine.Point(this.game.scene.get_width() / 2 - 111, this.game.scene.get_height() / 2 - 7 - 175), Fonts.get_volter(), lemongine.Color.black, 1.7, lemongine.TextAlignment.LEFT, .7);
            f.layer = 16;
            this.game.scene.draw(f);
            a = this.world.toBrew.h[this.brewer];
            if (0 != a.h.fuelUsed && null != a.h.input[0] && 0 < a.h.input[1] && (null != a.h.output[0][0] || null != a.h.output[1][0] || null != a.h.output[2][0])) {
                d = !1;
                for (c = 0; 3 > c;) if (f = a.h.output[c++], null != this.game.potionData.h[Game.makeDynamicMap(f[3]).h.type] && null != Game.makeDynamicMap(this.game.potionData.h[Game.makeDynamicMap(f[3]).h.type].h.recipes).h[a.h.input[0]] || "gp" == a.h.input[0] && "splash" != Game.makeDynamicMap(f[3]).h.category && !this.game.emptyPotion(Game.makeDynamicMap(f[3]).h.type)) {
                    d = !0;
                    break;
                }
                this.brewingBubblesPlaying = d ? !0 : !1;
            } else this.brewingBubblesPlaying = !1;
            this.brewingBubblesPlaying ? (this.brewingBubblesFrame++, this.brewingBubblesFrame > 27 * Main.Instance.get_fps() / 25 && (this.brewingBubblesFrame = 0)) : this.brewingBubblesFrame = 0;
            f = a.h.fuelUsed / 20 * 22;
            this.inventoryBrewingEntity.updateQuad(2, new lemongine.Vector3(-45, -105, 0), new lemongine.Point(0, 72), new lemongine.Point(f, 6));
            this.inventoryBrewingEntity.updateQuad(4, new lemongine.Vector3(-43, -105 - this.brewingBubbleHeights[Math.floor(this.brewingBubblesFrame / (27 * Main.Instance.get_fps() / 25) * 6)], 0), new lemongine.Point(51, 78 - this.brewingBubbleHeights[Math.floor(this.brewingBubblesFrame / (27 * Main.Instance.get_fps() / 25) * 6)]), new lemongine.Point(19, this.brewingBubbleHeights[Math.floor(this.brewingBubblesFrame / (27 * Main.Instance.get_fps() / 25) * 6)]));
            f = 36 * Math.min(1, a.h.brewTimer / 19);
            this.inventoryBrewingEntity.updateQuad(7, new lemongine.Vector3(31, -141, 0), new lemongine.Point(72, 0), new lemongine.Point(17, f));
            this.game.scene.draw(this.backgroundEntity);
            this.game.scene.draw(this.inventoryEntity);
            this.game.scene.draw(this.inventoryBrewingIconsEntity);
            this.game.scene.draw(this.inventoryBrewingItemsEntity);
            this.game.scene.draw(this.inventoryBrewingEntity);
            1 == this.world.gamemode && (this.game.scene.draw(this.inventoryTrashEntity), this.game.scene.draw(this.inventoryTrashIcon));
            this.game.scene.draw(this.slotsEntity);
            this.game.scene.draw(this.itemsEntity);
            this.game.scene.draw(this.itemNumbersEntity);
            this.game.scene.draw(this.draggerSlotEntity);
            this.game.scene.draw(this.draggerItemEntity);
            this.game.scene.draw(this.draggerItemNumberEntity);
        }
        this.showTooltip && (this.showTooltip = !1, c = TextCache.get("tooltip1", this.tooltipText[0], new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 1.625, lemongine.TextAlignment.LEFT, 1), c.layer = 56, a = TextCache.get("tooltip2", this.tooltipText.join("\n").substring(this.tooltipText[0].length + 1), new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 1.01, lemongine.TextAlignment.LEFT, 1), a.layer = 56, d = new lemongine.Point(Math.max(19, Math.max(13 * c.calculatedWidth / 8, a.calculatedWidth) / 2 + 8), (13 * c.calculatedHeight / 8 + (0 < a.text.length ? a.calculatedHeight + 4 : 0)) / 2 + 8), f = new lemongine.Point(Main.Instance.mouse.x - 2 * d.x + 28, Main.Instance.mouse.y - 2 * d.y), this.tooltipEntity.update9Slice(0, new lemongine.Rectangle(0, 0, d.x, d.y), new lemongine.Rectangle(0, 112, 19, 8), new lemongine.Rectangle(2, 2, 1, 1)), this.tooltipEntity.transform.reset().scale2D(2).translate(f.x, f.y), this.game.scene.draw(this.tooltipEntity), c.transform.reset().scale2D(1.625).translate(f.x + 8, f.y + 6), this.game.scene.draw(c), 0 < a.text.length && (a.transform.reset().scale2D(1.01).translate(f.x + 8, f.y + 6 + 13 * c.calculatedHeight / 8 + 2), this.game.scene.draw(a)));
    },
    creativeBack: function () {
        1 != this.page && this.page--;
    },
    creativeForward: function () {
        this.page != this.getPages() && this.page++;
    },
    getPages: function () {
        return Math.floor(this.currentItems.length / 45) + 1;
    },
    setSearchOpen: function (b) {
        null == b && (b = !0);
        this.searchOpen = b;
        this.inventoryCreativeSearchInput.set_text("");
        this.searchOpen ? (this.inventoryCreativeSearchEntity.updateQuad(1, new lemongine.Vector3(-50, -135), new lemongine.Point(44, 126), new lemongine.Point(90, 16), new lemongine.Point(90, 16).multiply(2)), this.inventoryCreativeSearchInput.set_focused(!0), this.searchTextChange()) : (this.inventoryCreativeSearchEntity.updateQuad(1, null, null, null, new lemongine.Point()), this.inventoryCreativeSearchInput.set_focused(!1), this.currentItems = this.creativeItems[this.tab].h.items, this.page = 1);
    },
    searchTextChange: function () {
        if (this.searchOpen) {
            this.currentItems = [];
            for (var b = 0, a = this.creativeItems.length; b < a;) for (var c = b++, d = 0, f = this.creativeItems[c].h.items.length; d < f;) {
                var l = d++;
                if ("Array" == lemongine.Helpers.getQualifiedClassName(this.creativeItems[c].h.items[l])) {
                    if ("Object" == lemongine.Helpers.getQualifiedClassName(this.creativeItems[c].h.items[l][1])) var p = this.game.getItemName(Game.makeDynamicArray([this.creativeItems[c].h.items[l][0], 1, 0, this.creativeItems[c].h.items[l][1]]));else {
                        p = this.creativeItems[c].h.items[l][0];
                        var k = new haxe.ds.StringMap();
                        k.h.type = this.creativeItems[c].h.items[l][1];
                        p = this.game.getItemName(Game.makeDynamicArray([p, 1, 0, Game.makeDynamicMap(k)]));
                    }
                } else p = this.game.getItemName(Game.makeDynamicArray([this.creativeItems[c].h.items[l], 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())]));
                -1 != p.toLowerCase().indexOf(this.inventoryCreativeSearchText.text.toLowerCase()) && this.currentItems.push(this.creativeItems[c].h.items[l]);
            }
            this.page = 1;
        }
    },
    renameChange: function () {
        this.anvilChangeNameWorth = 0;
        if (this.inventorySlots.h.ai1.empty) this.anvilWillRename = !1;else {
            if ("" != this.inventoryAnvilInput.get_text() && this.inventoryAnvilInput.get_text() != this.game.getItemName(this.inventorySlots.h.ai1.item.item)) {
                this.inventorySlots.h.aoutput.empty && this.inventorySlots.h.aoutput.item.set_item(Game.item(this.inventorySlots.h.ai1.get_type(), 1, this.inventorySlots.h.ai1.get_damage(), lemongine.Helpers.clone(this.inventorySlots.h.ai1.get_extras())));
                var b = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]),
                    a = this.inventoryAnvilInput.get_text();
                b.h.nameChange = a;
                b = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]);
                a = null != this.inventorySlots.h.ai1.get_extras().h.anvilUses ? this.inventorySlots.h.ai1.get_extras().h.anvilUses : 1;
                var c = null != this.inventorySlots.h.ai2.get_extras().h.anvilUses ? this.inventorySlots.h.ai2.get_extras().h.anvilUses : 1;
                b.h.anvilUses = Math.max(a, c) + 1;
                this.anvilWillRename = !0;
                this.anvilChangeNameWorth = 1;
            } else this.inventorySlots.h.aoutput.empty || (null == this.inventorySlots.h.ai1.get_extras().h.nameChange ? (b = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]), Object.prototype.hasOwnProperty.call(b.h, "nameChange") && delete b.h.nameChange) : (b = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]), a = this.inventorySlots.h.ai1.get_extras().h.nameChange, b.h.nameChange = a), 0 == this.anvilCombineWorth && this.inventorySlots.h.aoutput.setItem(Game.emptyItem())), this.anvilWillRename = !1;
            this.inventorySlots.h.aoutput.setItem(this.inventorySlots.h.aoutput.item.item);
        }
        this.recalculateCost();
    },
    doAnvilyThings: function (b) {
        null == b && (b = !1);
        if (!this.anvilGettingItem) {
            this.resetAnvil(b);
            this.inventorySlots.h.aoutput.setItem(Game.item(this.inventorySlots.h.ai1.get_type(), 1, this.inventorySlots.h.ai1.get_damage(), lemongine.Helpers.clone(this.inventorySlots.h.ai1.get_extras())));
            this.anvilWillCombine = this.anvilCantCombine = !1;
            if (this.inventorySlots.h.ai1.empty) this.anvilCantCombine = !0, this.anvilWillCombine = !1;else {
                if (1 == this.inventorySlots.h.ai1.get_isTool() || "ebook" == this.inventorySlots.h.ai1.get_type()) {
                    if (!this.inventorySlots.h.ai2.empty) {
                        if (this.inventorySlots.h.ai2.get_type() == this.inventorySlots.h.ai1.get_type() || "ebook" == this.inventorySlots.h.ai2.get_type()) {
                            "ebook" != this.inventorySlots.h.ai1.get_type() && "ebook" != this.inventorySlots.h.ai2.get_type() && (this.inventorySlots.h.aoutput.item.item[2] = Math.max(0, -1.6 * BlockData.get(this.inventorySlots.h.ai1.get_type(), "life") + 1.3 * this.inventorySlots.h.ai1.get_damage() + 1.3 * this.inventorySlots.h.ai2.get_damage()), this.anvilCombineWorth += Math.max(1, 3 * (this.inventorySlots.h.ai1.get_damage() - this.inventorySlots.h.aoutput.get_damage()) / BlockData.get(this.inventorySlots.h.ai1.get_type(), "life")) | 0);
                            this.anvilItemsToTake = 1;
                            for (var a = Object.keys(this.inventorySlots.h.ai2.get_extras().h), c = a.length, d = 0; d < c;) {
                                var f = a[d++];
                                if (null != Game.enchantmentNames.h[f]) {
                                    for (var g = !0, p = Object.keys(this.inventorySlots.h.ai1.get_extras().h), k = p.length, n = 0; n < k;) {
                                        var m = p[n++];
                                        if (HxOverrides.substr(f, 0, f.length - 1) == HxOverrides.substr(m, 0, m.length - 1)) {
                                            p = Std.parseInt(HxOverrides.substr(f, -1, 1));
                                            if (!isNaN(p)) {
                                                p = Std.parseInt(HxOverrides.substr(f, -1, 1)) + Std.parseInt(HxOverrides.substr(m, -1, 1));
                                                for (k = !1; null == Game.enchantmentNames.h[HxOverrides.substr(f, 0, f.length - 1) + (null == p ? "null" : "" + p)];) if (--p, 0 >= p) {
                                                    g = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]);
                                                    Object.prototype.hasOwnProperty.call(g.h, m) && delete g.h[m];
                                                    g = !1;
                                                    k = !0;
                                                    break;
                                                }
                                                if (k) break;
                                                p >= Std.parseInt(HxOverrides.substr(m, -1, 1)) && (this.anvilCombineWorth++, g = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]), Object.prototype.hasOwnProperty.call(g.h, m) && delete g.h[m], Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]).h[HxOverrides.substr(f, 0, f.length - 1) + (null == p ? "null" : "" + p)] = "enchant");
                                            }
                                            g = !1;
                                            break;
                                        } else if ("silkTouch" == m && "fortune" == HxOverrides.substr(f, 0, 7) || "silkTouch" == f && "fortune" == HxOverrides.substr(m, 0, 7)) {
                                            g = !1;
                                            break;
                                        }
                                    }
                                    g && (null != BlockData.get(this.inventorySlots.h.ai1.get_type(), "enchantType") && "Random" != BlockData.get(this.inventorySlots.h.ai1.get_type(), "enchantType") ? (m = Game.enchantTypes, g = BlockData.get(this.inventorySlots.h.ai1.get_type(), "enchantType"), m = null != m.h[g].h[f]) : m = !0, m && (Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]).h[f] = ["enchant"], this.anvilCombineWorth++));
                                }
                            }
                            this.anvilCantCombine = !1;
                            this.anvilWillCombine = !0;
                            m = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]);
                            a = null != this.inventorySlots.h.ai1.get_extras().h.anvilUses ? this.inventorySlots.h.ai1.get_extras().h.anvilUses : 1;
                            c = null != this.inventorySlots.h.ai2.get_extras().h.anvilUses ? this.inventorySlots.h.ai2.get_extras().h.anvilUses : 1;
                            m.h.anvilUses = Math.max(a, c) + 1;
                        } else if (0 != this.inventorySlots.h.ai1.get_damage() && ("wp" == this.inventorySlots.h.ai2.get_type() && "Wood" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 4) || "cs" == this.inventorySlots.h.ai2.get_type() && "Stone" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 5) || "ii" == this.inventorySlots.h.ai2.get_type() && "Iron" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 4) || "gi" == this.inventorySlots.h.ai2.get_type() && "Gold" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 4) || "dm" == this.inventorySlots.h.ai2.get_type() && "Diamond" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 7) || "leather" == this.inventorySlots.h.ai2.get_type() && "Leather" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 7) || "dscl" == this.inventorySlots.h.ai2.get_type() && "Dragon" == HxOverrides.substr(this.inventorySlots.h.ai1.get_type(), 0, 6))) {
                            this.inventorySlots.h.aoutput.empty && this.inventorySlots.h.aoutput.item.set_item(Game.item(this.inventorySlots.h.ai1.get_type(), 1, this.inventorySlots.h.ai1.get_damage(), lemongine.Helpers.clone(this.inventorySlots.h.ai1.get_extras())));
                            a = Object.keys(this.inventorySlots.h.ai2.get_extras().h);
                            c = a.length;
                            for (d = 0; d < c;) if (f = a[d++], null != Game.enchantmentNames.h[f]) {
                                g = !0;
                                p = Object.keys(this.inventorySlots.h.ai1.get_extras().h);
                                k = p.length;
                                for (n = 0; n < k;) if (m = p[n++], HxOverrides.substr(f, 0, f.length - 1) == HxOverrides.substr(m, 0, m.length - 1)) {
                                    p = Std.parseInt(HxOverrides.substr(f, -1, 1));
                                    if (!isNaN(p)) {
                                        p = Std.parseInt(HxOverrides.substr(f, -1, 1)) + Std.parseInt(HxOverrides.substr(m, -1, 1));
                                        for (k = !1; null == Game.enchantmentNames.h[HxOverrides.substr(f, 0, f.length - 1) + (null == p ? "null" : "" + p)];) if (--p, 0 >= p) {
                                            g = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]);
                                            Object.prototype.hasOwnProperty.call(g.h, m) && delete g.h[m];
                                            g = !1;
                                            k = !0;
                                            break;
                                        }
                                        if (k) break;
                                        p >= Std.parseInt(HxOverrides.substr(m, -1, 1)) && (this.anvilCombineWorth++, g = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]), Object.prototype.hasOwnProperty.call(g.h, m) && delete g.h[m], Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]).h[HxOverrides.substr(f, 0, f.length - 1) + (null == p ? "null" : "" + p)] = "enchant");
                                    }
                                    g = !1;
                                    break;
                                } else if ("silkTouch" == m && "fortune" == HxOverrides.substr(f, 0, 7) || "silkTouch" == f && "fortune" == HxOverrides.substr(m, 0, 7)) {
                                    g = !1;
                                    break;
                                }
                                g && (null != BlockData.get(this.inventorySlots.h.ai1.get_type(), "enchantType") && "Random" != BlockData.get(this.inventorySlots.h.ai1.get_type(), "enchantType") ? (m = Game.enchantTypes, g = BlockData.get(this.inventorySlots.h.ai1.get_type(), "enchantType"), m = null != m.h[g].h[f]) : m = !0, m && (Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]).h[f] = ["enchant"], this.anvilCombineWorth++));
                            }
                            this.anvilWillCombine = !0;
                            this.anvilCantCombine = !1;
                            this.inventorySlots.h.aoutput.item.item[2] = Math.max(0, this.inventorySlots.h.ai1.get_damage() - BlockData.get(this.inventorySlots.h.ai1.get_type(), "life") / 3 * this.inventorySlots.h.ai2.get_count());
                            this.inventorySlots.h.aoutput.render();
                            this.inventorySlots.h.aoutput.refetchItem();
                            this.anvilItemsToTake = Math.min(this.inventorySlots.h.ai2.get_count(), Math.ceil(3 * this.inventorySlots.h.ai1.get_damage() / BlockData.get(this.inventorySlots.h.ai1.get_type(), "life"))) | 0;
                            this.anvilCombineWorth += this.anvilItemsToTake;
                            m = Game.makeDynamicMap(this.inventorySlots.h.aoutput.item.item[3]);
                            a = null != this.inventorySlots.h.ai1.get_extras().h.anvilUses ? this.inventorySlots.h.ai1.get_extras().h.anvilUses : 1;
                            c = null != this.inventorySlots.h.ai2.get_extras().h.anvilUses ? this.inventorySlots.h.ai2.get_extras().h.anvilUses : 1;
                            m.h.anvilUses = Math.max(a, c) + 1;
                        } else this.anvilCantCombine = !0, this.anvilWillCombine = !1;
                        this.inventorySlots.h.aoutput.renderDamage();
                    }
                } else this.inventorySlots.h.ai2.empty || (this.anvilCantCombine = !0, this.anvilWillCombine = !1);
                this.anvilCantCombine || (this.anvilRenameTextVisible = !0, b && this.inventoryAnvilInput.set_text(this.game.getItemName(this.inventorySlots.h.ai1.item.item)));
                this.inventorySlots.h.ai2.empty && (this.anvilWillCombine = !1);
            }
            this.renameChange();
        }
    },
    resetAnvil: function (b) {
        this.anvilRenameTextVisible = !1;
        this.anvilChangeNameWorth = 0;
        this.anvilEcksVisible = !1;
        this.anvilItemsToTake = this.anvilCombineWorth = this.anvilLevelsRequired = 0;
        this.levelsText = "";
    },
    recalculateCost: function () {
        this.anvilLevelsRequired = (this.anvilCombineWorth + this.anvilChangeNameWorth) * Math.max(null != this.inventorySlots.h.ai1.get_extras().h.anvilUses ? this.inventorySlots.h.ai1.get_extras().h.anvilUses : 1, null != this.inventorySlots.h.ai2.get_extras().h.anvilUses ? this.inventorySlots.h.ai2.get_extras().h.anvilUses : 1) | 0;
        var b = !1;
        this.anvilCanAnvil = !1;
        0 != this.anvilLevelsRequired ? (this.levelsText = "Levels cost: " + this.anvilLevelsRequired, this.anvilLevelsRequired <= this.world.experience / 100 ? this.anvilCanAnvil = !0 : 1 == this.world.gamemode ? this.anvilCanAnvil = !0 : (this.levelsText = "Not enough levels! Cost: " + this.anvilLevelsRequired, b = !0)) : this.levelsText = "";
        if (this.anvilCantCombine || !this.anvilCanAnvil || !this.anvilWillCombine && !this.anvilWillRename) {
            this.anvilCanAnvil = !1;
            this.anvilEcksVisible = !0;
            if (this.anvilCantCombine || !b) this.levelsText = "";
            this.inventorySlots.h.aoutput.empty || this.inventorySlots.h.aoutput.setItem(Game.emptyItem());
        } else this.anvilEcksVisible = !1, this.inventorySlots.h.aoutput.setItem(this.inventorySlots.h.aoutput.item.item);
        this.inventorySlots.h.ai1.empty && (this.anvilRenameTextVisible = !1);
    },
    damageAnvilMaybe: function () {
        if (.12 > Math.random() && null != this.world.states.h[this.dispenseName]) {
            var b = this.dispenseName;
            this.world.states.h[b] += 1;
        }
    },
    requestClose: function (b) {
        null == b && (b = !1);
        switch (this.currentFrame) {
        case 0:
            break;
        case 1:
            this.dropDragger();
            for (b = 1; 5 > b;) {
                var a = b++;
                0 == this.inventorySlots.h["c" + a].empty && (this.game.addDrop(this.inventorySlots.h["c" + a].get_type(), this.world.worldX, this.world.worldY, this.inventorySlots.h["c" + a].get_count(), this.inventorySlots.h["c" + a].get_damage(), this.inventorySlots.h["c" + a].get_extras()), this.inventorySlots.h["c" + a].setItem(Game.emptyItem()));
            }
            this.gotoAndStop(0);
            break;
        case 2:
            this.dropDragger(this.craftCoords[0] + .5, -this.craftCoords[1] - .5);
            for (b = 1; 10 > b;) a = b++, 0 == this.inventorySlots.h["c" + a].empty && (this.game.addDrop(this.inventorySlots.h["c" + a].get_type(), this.craftCoords[0] + .5, -this.craftCoords[1] - .5, this.inventorySlots.h["c" + a].get_count(), this.inventorySlots.h["c" + a].get_damage(), this.inventorySlots.h["c" + a].get_extras()), this.inventorySlots.h["c" + a].setItem(Game.emptyItem()));
            this.gotoAndStop(0);
            break;
        case 5:
            this.gotoAndStop(0);
            break;
        case 6:
            b && this.gotoAndStop(0);
            break;
        case 7:
            b && this.inventoryCreativeSearchInput.set_focused(!1);
            if (this.inventoryCreativeSearchInput.focused) break;
            this.setSearchOpen(!1);
            this.dropDragger();
            this.gotoAndStop(0);
            break;
        case 8:
            this.dropDragger(this.craftCoords[0] + .5, -this.craftCoords[1] - .5);
            0 == this.inventorySlots.h.enchant.empty && (this.game.addDrop(this.inventorySlots.h.enchant.get_type(), this.world.worldX, this.world.worldY, this.inventorySlots.h.enchant.get_count(), this.inventorySlots.h.enchant.get_damage(), this.inventorySlots.h.enchant.get_extras()), this.inventorySlots.h.enchant.setItem(Game.emptyItem()));
            this.gotoAndStop(0);
            break;
        case 10:
            (G.gt(Main.Instance.keyDown(27), 0) || b) && this.inventoryCommandsInput.set_focused(!1);
            if (this.inventoryCommandsInput.focused) break;
            this.gotoAndStop(0);
            break;
        case 11:
            (G.gt(Main.Instance.keyDown(27), 0) || b) && this.inventoryAnvilInput.set_focused(!1);
            if (this.inventoryAnvilInput.focused) break;
            this.dropDragger(this.craftCoords[0] + .5, -this.craftCoords[1] - .5);
            0 == this.inventorySlots.h.ai1.empty && (this.game.addDrop(this.inventorySlots.h.ai1.get_type(), this.world.worldX, this.world.worldY, this.inventorySlots.h.ai1.get_count(), this.inventorySlots.h.ai1.get_damage(), this.inventorySlots.h.ai1.get_extras()), this.inventorySlots.h.ai1.setItem(Game.emptyItem()));
            0 == this.inventorySlots.h.ai2.empty && (this.game.addDrop(this.inventorySlots.h.ai2.get_type(), this.world.worldX, this.world.worldY, this.inventorySlots.h.ai2.get_count(), this.inventorySlots.h.ai2.get_damage(), this.inventorySlots.h.ai2.get_extras()), this.inventorySlots.h.ai2.setItem(Game.emptyItem()));
            0 == this.inventorySlots.h.aoutput.empty && (this.game.addDrop(this.inventorySlots.h.aoutput.get_type(), this.world.worldX, this.world.worldY, this.inventorySlots.h.aoutput.get_count(), this.inventorySlots.h.aoutput.get_damage(), this.inventorySlots.h.aoutput.get_extras()), this.inventorySlots.h.aoutput.setItem(Game.emptyItem()));
            this.gotoAndStop(0);
            break;
        case 3:
        case 4:
        case 9:
        case 12:
            this.dropDragger(this.craftCoords[0] + .5, -this.craftCoords[1] - .5);
            this.gotoAndStop(0);
            break;
        default:
            haxe.Log.trace("No requestClose was created for frame " + this.currentFrame + ".", {
                fileName: "src/Inventory.hx",
                lineNumber: 2201,
                className: "Inventory",
                methodName: "requestClose"
            }), this.gotoAndStop(0);
        }
    },
    dropDragger: function (b, a) {
        if (null == b || null == a) b = this.world.worldX, a = this.world.worldY;
        0 == this.inventorySlots.h.dragger.empty && (this.game.addDrop(this.inventorySlots.h.dragger.get_type(), b, a, this.inventorySlots.h.dragger.get_count(), this.inventorySlots.h.dragger.get_damage(), this.inventorySlots.h.dragger.get_extras()), this.inventorySlots.h.dragger.setItem(Game.emptyItem()));
    },
    only: function (b) {
        for (var a = 0, c = this.blocks.length; a < c;) {
            for (var d = a++, f = !0, g = 0, p = b.length; g < p;) {
                var k = g++;
                if (this.blocks[d] == b[k]) {
                    f = !1;
                    if (this.inventorySlots.h["c" + b[k]].empty) return !1;
                    break;
                }
            }
            if (f && !this.inventorySlots.h["c" + this.blocks[d]].empty) return !1;
        }
        return !0;
    },
    containItems: function (b) {
        for (var a = [], c = 0, d = b.length; c < d;) a[c++] = !1;
        c = 0;
        for (d = this.blocks.length; c < d;) {
            var f = c++,
                g = !1;
            if (!this.inventorySlots.h["c" + this.blocks[f]].empty) {
                for (var p = 0, k = b.length; p < k;) {
                    var n = p++;
                    if ("String" == lemongine.Helpers.getQualifiedClassName(b[n])) {
                        if (this.inventorySlots.h["c" + this.blocks[f]].get_type() == b[n] && 0 == a[n]) {
                            g = a[n] = !0;
                            break;
                        }
                    } else {
                        var m = b[n];
                        if (1 == m.h.exactExtras) {
                            if (this.inventorySlots.h["c" + this.blocks[f]].get_type() == m.h.ty && this.game.sameExtras(this.inventorySlots.h["c" + this.blocks[f]].get_extras(), m.h.extra) && 0 == a[n]) {
                                g = a[n] = !0;
                                break;
                            }
                        } else if (this.inventorySlots.h["c" + this.blocks[f]].get_type() == m.h.ty && Game.hasExtras(this.inventorySlots.h["c" + this.blocks[f]].get_extras(), m.h.extra) && 0 == a[n]) {
                            g = a[n] = !0;
                            break;
                        }
                    }
                }
                if (!g) return !1;
            }
        }
        c = 0;
        for (d = b.length; c < d;) if (0 == a[c++]) return !1;
        return !0;
    },
    rainbow: function () {
        for (var b = [], a = 0, c = this.blocks.length; a < c;) {
            var d = a++;
            if (0 == this.inventorySlots.h["c" + this.blocks[d]].empty) if ("cloth" == this.inventorySlots.h["c" + this.blocks[d]].get_type()) {
                if (null != this.inventorySlots.h["c" + this.blocks[d]].get_extras().h.type && "rainbow" != this.inventorySlots.h["c" + this.blocks[d]].get_extras().h.type) {
                    for (var f = 0, g = b.length; f < g;) if (this.inventorySlots.h["c" + this.blocks[d]].get_extras().h.type == b[f++] || 7 < b.length) return !1;
                    b.push(this.inventorySlots.h["c" + this.blocks[d]].get_extras().h.type);
                }
            } else return !1;
        }
        return 7 == b.length ? !0 : !1;
    },
    rainbowCap: function () {
        for (var b = [], a = !1, c = 0, d = this.blocks.length; c < d;) {
            var f = c++;
            if (0 == this.inventorySlots.h["c" + this.blocks[f]].empty) if ("dye" == this.inventorySlots.h["c" + this.blocks[f]].get_type()) {
                if (null != this.inventorySlots.h["c" + this.blocks[f]].get_extras().h.type) {
                    for (var g = 0, p = b.length; g < p;) if (this.inventorySlots.h["c" + this.blocks[f]].get_extras().h.type == b[g++] || 3 < b.length) return !1;
                    b.push(this.inventorySlots.h["c" + this.blocks[f]].get_extras().h.type);
                }
            } else if ("ll" == this.inventorySlots.h["c" + this.blocks[f]].get_type() || "bonem" == this.inventorySlots.h["c" + this.blocks[f]].get_type() || "ink" == this.inventorySlots.h["c" + this.blocks[f]].get_type()) {
                g = 0;
                for (p = b.length; g < p;) if (this.inventorySlots.h["c" + this.blocks[f]].get_type() == b[g++] || 3 < b.length) return !1;
                b.push(this.inventorySlots.h["c" + this.blocks[f]].get_type());
            } else {
                if ("paper" != this.inventorySlots.h["c" + this.blocks[f]].get_type() || a) return !1;
                a = !0;
            }
        }
        return 3 == b.length && a ? !0 : !1;
    },
    carpet: function () {
        for (var b = 0, a = this.blocks.length - 1; b < a;) {
            var c = b++;
            if (0 == this.inventorySlots.h["c" + this.blocks[c]].empty && "cloth" == this.inventorySlots.h["c" + this.blocks[c]].get_type() && null != this.r[c] && 0 == this.inventorySlots.h["c" + this.r[c]].empty && this.inventorySlots.h["c" + this.r[c]].get_type() == this.inventorySlots.h["c" + this.blocks[c]].get_type() && this.inventorySlots.h["c" + this.r[c]].get_extras().h.type == this.inventorySlots.h["c" + this.blocks[c]].get_extras().h.type && this.only([c + 1 | 0, this.r[c] | 0])) return this.inventorySlots.h["c" + this.blocks[c]].get_extras().h.type;
        }
        return "undefined";
    },
    doWhatYouDoWithWheatThins: function () {
        for (var b = null, a = 0, c = this.blocks.length; a < c;) {
            var d = a++;
            if (0 == this.inventorySlots.h["c" + (d + 1)].empty) {
                b = d + 1;
                break;
            }
        }
        var f = [0, 0];
        a = 0;
        for (c = this.blocks2.length; a < c;) {
            d = a++;
            for (var l = !1, p = 0, k = this.blocks2[d].length; p < k;) {
                var n = p++;
                if (0 == this.inventorySlots.h["c" + this.blocks2[d][n]].empty) {
                    f = [n, d];
                    l = !0;
                    break;
                }
            }
            if (l) break;
        }
        this.inventorySlots.h.output.setItem(Game.emptyItem());
        if (!this.only([])) for (a = 0, c = this.game.recipes.length; a < c;) if (l = this.game.recipes[a++], "absolute" == l.h.inputType || "relative" == l.h.inputType) {
            d = !0;
            n = [];
            p = 0;
            for (k = l.h.input.length; p < k;) {
                var m = l.h.input[p++],
                    M = null;
                "relative" == l.h.inputType ? (M = null, null != this.blocks2[f[1] + m.h.y] && (M = this.blocks2[f[1] + m.h.y | 0][f[0] + m.h.x | 0])) : "absolute" == l.h.inputType && (M = null, null != this.blocks2[m.h.y] && (M = this.blocks2[m.h.y | 0][m.h.x | 0]));
                var ka = !1;
                null != M && 0 != M && (this.inventorySlots.h["c" + M].get_type() == m.h.ty ? null != m.h.damage && this.inventorySlots.h["c" + M].get_damage() != m.h.damage || null != m.h.type && this.inventorySlots.h["c" + M].get_extras().h.type != m.h.type || (n.push(M), ka = !0) : null == m.h.ty2 || this.inventorySlots.h["c" + M].get_type() != m.h.ty2 || null != m.h.damage2 && this.inventorySlots.h["c" + M].get_damage() != m.h.damage2 || null != m.h.type2 && this.inventorySlots.h["c" + M].get_extras().h.type != m.h.type2 || (n.push(M), ka = !0));
                if (!ka) {
                    d = !1;
                    break;
                }
            }
            if (d && this.only(n)) {
                b = l.h.output;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, b.h.damage, js.Boot.__cast(b.h.extra, haxe.ds.StringMap)]);
                break;
            }
        } else if ("large box" == l.h.inputType) {
            p = !0;
            if (3 == this.tableSize) for (k = 0; 9 > k;) {
                if (d = k++, this.inventorySlots.h["c" + this.blocks[d]].get_type() != l.h.input || 1 == this.inventorySlots.h["c" + this.blocks[d]].empty) {
                    p = !1;
                    break;
                }
            } else p = !1;
            if (p) {
                b = l.h.output;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, b.h.damage, js.Boot.__cast(b.h.extra, haxe.ds.StringMap)]);
                break;
            }
        } else if ("contains" == l.h.inputType) {
            if (this.containItems(l.h.input)) {
                b = l.h.output;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, b.h.damage, js.Boot.__cast(b.h.extra, haxe.ds.StringMap)]);
                break;
            }
        } else if ("rainbow" == l.h.inputType) {
            if (this.rainbow()) {
                b = l.h.output;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, b.h.damage, js.Boot.__cast(b.h.extra, haxe.ds.StringMap)]);
                break;
            }
        } else if ("rainbowcap" == l.h.inputType) {
            if (this.rainbowCap()) {
                b = l.h.output;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, b.h.damage, js.Boot.__cast(b.h.extra, haxe.ds.StringMap)]);
                break;
            }
        } else if ("carpet" == l.h.inputType) {
            if (p = this.carpet(), "undefined" != p) {
                b = l.h.output;
                l = lemongine.Helpers.clone(b.h.extra);
                null == l && (l = new haxe.ds.StringMap());
                l.h.type = p;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, b.h.damage, l]);
                break;
            }
        } else if ("keepextra" == l.h.inputType) {
            if (this.containItems(l.h.input) && this.only([b])) {
                l = l.h.output;
                a = lemongine.Helpers.clone(l.h.extra);
                null == a && (a = new haxe.ds.StringMap());
                c = Object.keys(this.inventorySlots.h["c" + b].get_extras().h);
                f = c.length;
                for (p = 0; p < f;) k = c[p++], d = this.inventorySlots.h["c" + b].get_extras().h[k], a.h[k] = d;
                this.inventorySlots.h.output.setItem([l.h.ty, l.h.count, l.h.damage, a]);
                break;
            }
        } else if ("dye" == l.h.inputType || "dyekeepextra" == l.h.inputType) {
            k = p = "";
            d = Colors.colors.h;
            n = Object.keys(d);
            m = n.length;
            for (M = 0; M < m;) if (ka = d[n[M++]], "NONE" != ka.h.dye && !l.h.exclude[ka.h.id]) if ("DYE" == ka.h.dye) {
                var x = js.Boot.__cast(l.h.input, Array),
                    t = new haxe.ds.StringMap();
                t.h.ty = "dye";
                var w = new haxe.ds.StringMap();
                w.h.type = ka.h.id;
                t.h.extra = Game.makeDynamicMap(w);
                if (this.containItems(x.concat([Game.makeDynamicMap(t)]))) {
                    p = ka.h.id;
                    k = "dye";
                    break;
                }
            } else if (x = js.Boot.__cast(l.h.input, Array), t = new haxe.ds.StringMap(), t.h.ty = ka.h.dye, t.h.extra = new haxe.ds.StringMap(), this.containItems(x.concat([Game.makeDynamicMap(t)]))) {
                p = ka.h.id;
                k = ka.h.dye;
                break;
            }
            if ("" != p) {
                b = l.h.output;
                a = lemongine.Helpers.clone(b.h.extra);
                null == a && (a = new haxe.ds.StringMap());
                c = b.h.damage;
                if ("dyekeepextra" == l.h.inputType) for (f = 0, d = this.tableSize * this.tableSize; f < d;) if (l = f++, this.inventorySlots.h["c" + this.blocks[l]].get_type() != k && 0 == this.inventorySlots.h["c" + this.blocks[l]].empty) {
                    c = this.inventorySlots.h["c" + this.blocks[l]].get_extras().h;
                    f = Object.keys(c);
                    k = f.length;
                    for (d = 0; d < k;) n = c[f[d++]], m = this.inventorySlots.h["c" + this.blocks[l]].get_extras().h[n], a.h[n] = m;
                    c = this.inventorySlots.h["c" + this.blocks[l]].get_damage();
                    break;
                }
                a.h.type = p;
                this.inventorySlots.h.output.setItem([b.h.ty, b.h.count, c, a]);
                break;
            }
        } else if ("fix" == l.h.inputType) {
            p = -1;
            if (1 == BlockData.get(this.inventorySlots.h["c" + b].get_type(), "tool")) for (k = b, n = this.blocks.length; k < n;) if (d = k++, 0 == this.inventorySlots.h["c" + (d + 1)].empty && this.inventorySlots.h["c" + b].get_type() == this.inventorySlots.h["c" + (d + 1)].get_type()) {
                p = d + 1;
                break;
            }
            if (-1 != p && this.only([b, p])) {
                l = l.h.output;
                this.inventorySlots.h.output.setItem([this.inventorySlots.h["c" + b].get_type(), l.h.count, Math.max(0, -1.2999999999999998 * BlockData.get(this.inventorySlots.h["c" + b].get_type(), "life") + 1.15 * this.inventorySlots.h["c" + b].get_damage() + 1.15 * this.inventorySlots.h["c" + p].get_damage()), js.Boot.__cast(l.h.extra, haxe.ds.StringMap)]);
                break;
            }
        }
    },
    arrange: function (b) {
        var a = this.enchantmentButtons[b],
            c = Math.floor(8 * Math.random()) + 1 + Math.floor(this.totalBooks / 2) + Math.floor(Math.random() * (this.totalBooks + 1)),
            d = Math.floor(Math.max(c / 3, 1)),
            f = Math.floor(2 * c / 3 + 1);
        c = Math.floor(Math.max(c, 2 * this.totalBooks));
        a.text = "";
        for (var g = 0, p = Math.floor(2 * Math.random()) + 3; g < p;) ++g, a.text += Inventory.wordArray[Math.floor(Math.random() * Inventory.wordArray.length)] + " ";
        0 == b ? a.lvl = d : 1 == b ? a.lvl = f : 2 == b && (a.lvl = c);
        0 == b && "potion" == this.inventorySlots.h.enchant.get_type() && (a.lvl = 10);
        a.canAfford = Math.floor(this.world.experience / 100) < a.lvl && 1 != this.world.gamemode ? !1 : !0;
    },
    unArrange: function (b) {
        this.enchantmentButtons[b] = {
            text: "",
            lvl: 0,
            canAfford: !1
        };
    },
    buyEnchant: function (b) {
        "potion" == this.inventorySlots.h.enchant.get_type() ? (this.world.experience = Math.floor(Math.max(0, this.world.experience - 1E3)), this.inventorySlots.h.enchant.item.item[0] = "boe", this.inventorySlots.h.enchant.setItem(this.inventorySlots.h.enchant.item.item)) : ("book" == this.inventorySlots.h.enchant.get_type() && (this.inventorySlots.h.enchant.item.item[0] = "ebook"), this.world.experience = Math.floor(Math.max(0, this.world.experience - 100 * this.enchantmentButtons[b].lvl)), this.game.enchant(this.inventorySlots.h.enchant.get_type(), this.inventorySlots.h.enchant.item.get_extras(), this.enchantmentButtons[b].lvl, !1), this.inventorySlots.h.enchant.setItem(this.inventorySlots.h.enchant.item.item), this.game.unlockAchieve(45));
        this.unArrange(0);
        this.unArrange(1);
        this.unArrange(2);
    },
    updateBackground: function () {
        switch (this.currentFrame) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
        case 9:
        case 11:
        case 12:
            var b = this.backgroundEntity,
                a = new lemongine.Vector3(-this.game.scene.get_width() / 2, -this.game.scene.get_height() / 2 + 7),
                c = new lemongine.Point(0, 0),
                d = new lemongine.Point(0, 0),
                f = new lemongine.Point(this.game.scene.get_width(), this.game.scene.get_height()),
                l = new haxe.ds.StringMap(),
                p = lemongine.Mathz.repeatArray([0], 24);
            l.h.color = p;
            l.h.colorOffset = [0, .30980392156862746, .4470588235294118, .3, 0, .2235294117647059, .30980392156862746, .5, 0, .30980392156862746, .4470588235294118, .3, 0, .30980392156862746, .4470588235294118, .3, 0, .2235294117647059, .30980392156862746, .5, 0, .2235294117647059, .30980392156862746, .5];
            b.updateQuad(0, a, c, d, f, null, null, l);
        }
        null == this.backgroundEntityRect && (this.backgroundEntityRect = new lemongine.Rectangle());
        switch (this.currentFrame) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 8:
        case 9:
            this.backgroundEntityRect.set(-163, -175, 326, 338);
            break;
        case 11:
        case 12:
            this.backgroundEntityRect.set(-163, -191, 326, 354);
            break;
        default:
            null != this.backgroundEntity && this.backgroundEntityRect.set();
        }
        0 != this.backgroundEntityRect.width ? this.backgroundEntity.update9Slice(1, this.backgroundEntityRect, new lemongine.Rectangle(96, 80, 32, 32), new lemongine.Rectangle(11, 11, 10, 10), 0, null, 1.3) : null != this.backgroundEntity && this.backgroundEntity.remove9Slice(1);
    },
    set_currentFrame: function (b) {
        this.currentFrame = b;
        ItemSlot.globallyWaitingForMouseUp = !0;
        this.prepareRenderer(this.currentFrame);
        this.updateBackground();
        return b;
    },
    gotoAndStop: function (b) {
        this.set_currentFrame(b);
        1 == this.currentFrame && this.game.unlockAchieve(2);
    },
    __class__: Inventory
}
Inventory.wordArray = "wind earth mind time energy evolve twist rise spark sense focus ether war shadow freeze zanz notch jeb ghostid jawn igp mcman dekdev adee weasel".split(" ")