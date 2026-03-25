var ItemSlot = function (b, a, c, d, f, g, p, k, n, m) {
    this.waitingForLeftMouseUp = this.waitingForRightMouseUp = !1;
    this.name = "";
    this.number = -1;
    this.mini = !1;
    this.empty = !0;
    this.hovering = !1;
    this.slotQuads = this.countQuad = -1;
    this.item = new Item(a, ((d - 1) / 16 - .5) / 1.09416984375, ((f - 1) / 16 - .5) / 1.09416984375, p, n);
    this.item.renderer.update();
    this.collisionBounds = new lemongine.Rectangle(d - 20 * g / 2, f - 20 * g / 2, 20 * g, 20 * g);
    null == n && (n = Game.emptyItem());
    this.empty = !0;
    0 < n[1] && "air" != n[0] && (this.empty = !1);
    this.slotEntity = b;
    this.countEntity = c;
    this.size = g;
    this.set_x(d);
    this.set_y(f);
    this.game = p;
    this.world = k;
    this.itemFetch = m;
    this.render();
};
m.ItemSlot = ItemSlot
ItemSlot.__name__ = "ItemSlot"
ItemSlot.prototype = {
    refetchItem: function () {
        null == this.itemFetch ? (this.item.isEnchanted && this.item.render(), this.item.renderer.hasFrameEvent && this.item.render()) : this.setItem(this.itemFetch(), !0);
    },
    setItem: function (b, a) {
        null == a && (a = !1);
        var c = !1,
            d = !1;
        if (null == b || 0 >= b[1]) b = Game.emptyItem();
        a || ("i" == HxOverrides.substr(this.name, 0, 1) ? this.world.setInventoryItem(this.number, b) : "a1" == this.name || "a2" == this.name || "a3" == this.name || "a4" == this.name ? (this.world.armors[this.number] = [b[0], b[2], b[3]], this.game.updateArmorRenderers()) : "fuel" == this.name ? js.Boot.__cast(this.world.toSmelt.h[this.game.inventario.smelter], haxe.ds.StringMap).h.fuel = b : "cook" == this.name ? js.Boot.__cast(this.world.toSmelt.h[this.game.inventario.smelter], haxe.ds.StringMap).h.input = b : "output2" == this.name ? js.Boot.__cast(this.world.toSmelt.h[this.game.inventario.smelter], haxe.ds.StringMap).h.output = b : "brewFuel" == this.name ? js.Boot.__cast(this.world.toBrew.h[this.game.inventario.brewer], haxe.ds.StringMap).h.fuel = b : "brewInput" == this.name ? js.Boot.__cast(this.world.toBrew.h[this.game.inventario.brewer], haxe.ds.StringMap).h.input = b : "brewOutput" == HxOverrides.substr(this.name, 0, 10) ? (js.Boot.__cast(js.Boot.__cast(this.world.toBrew.h[this.game.inventario.brewer], haxe.ds.StringMap).h.output, Array)[this.number] = b, null != this.world.getBlock(this.game.inventario.craftCoords[0], this.game.inventario.craftCoords[1]) && this.world.getBlock(this.game.inventario.craftCoords[0], this.game.inventario.craftCoords[1]).updateEvent()) : "h" == HxOverrides.substr(this.name, 0, 1) ? "ender" == this.game.inventario.chest ? js.Boot.__cast(this.world.enderChests.h[this.world.player.id], Array)[this.number] = b : js.Boot.__cast(this.world.chests.h[this.game.inventario.chest], Array)[this.number] = b : "dis" == HxOverrides.substr(this.name, 0, 3) ? js.Boot.__cast(this.world.states.h[this.game.inventario.dispenseName + "_2"], Array)[this.number] = b : "dragger" == this.name && this.game.isScavenger && this.game.checkForScavengerItem(b));
        this.item.get_count() != b[1] && (c = !0);
        this.item.get_damage() != b[2] && (d = !0);
        this.item.set_item(b);
        a || "enchant" != this.name || (0 < b[1] && "air" != b[0] ? (this.game.inventario.arrange(0), "potion" != b[0] ? (this.game.inventario.arrange(1), this.game.inventario.arrange(2)) : (this.game.inventario.unArrange(1), this.game.inventario.unArrange(2)), this.game.inventario.bookOpen = !0) : (this.game.inventario.unArrange(0), this.game.inventario.unArrange(1), this.game.inventario.unArrange(2), this.game.inventario.bookOpen = !1));
        a = this.empty;
        this.empty = !0;
        0 < b[1] && "air" != b[0] && (this.empty = !1);
        this.empty != a && this.renderSlot();
        d && this.renderDamage();
        c && this.renderCount();
        2 == this.name.length && "c" == HxOverrides.substr(this.name, 0, 1) && this.game.inventario.doWhatYouDoWithWheatThins();
        "ai1" == this.name && this.game.inventario.doAnvilyThings(!0);
        "ai2" == this.name && this.game.inventario.doAnvilyThings(!1);
    },
    showTooltip: function () {
        this.game.inventario.showTooltip = !0;
        var b = this.game.getItemName(this.item.item);
        this.game.inventario.tooltipText = [b];
        if ("potion" == this.get_type()) {
            if (null != this.get_extras().h.effects) {
                var a = this.game.getEffectsTooltips(this.get_extras().h.effects);
                b = 0;
                for (var c = a.length; b < c;) this.game.inventario.tooltipText.push(a[b++]);
            }
        } else "cbook" == this.get_type() && (null != this.get_extras().h.command && 0 < this.get_extras().h.command.length ? (43 < this.get_extras().h.command.length ? this.game.inventario.tooltipText.push('"' + Std.string(this.get_extras().h.command.substr(0, 40)) + '..."') : this.game.inventario.tooltipText.push('"' + Std.string(this.get_extras().h.command) + '"'), null != this.get_extras().h.uses && 0 < this.get_extras().h.uses && this.game.inventario.tooltipText.push("Uses: " + Std.string(this.get_extras().h.uses))) : this.game.inventario.tooltipText.push("No effect"));
        b = Object.keys(this.get_extras().h);
        c = b.length;
        for (a = 0; a < c;) {
            var d = b[a++];
            null != Game.enchantmentNames.h[d] && this.game.inventario.tooltipText.push(Game.enchantmentNames.h[d]);
        }
        if (null != this.get_extras().h.canPlaceOn) {
            var f = this.get_extras().h.canPlaceOn;
            a = "Can place on ";
            -1 != f.indexOf("all") && (a = "Can't place on ");
            b = 0;
            for (c = f.length; b < c;) d = b++, "all" != f[d] && this.game.inventario.tooltipText.push(a + Std.string(BlockData.get(BlockData.identifierToID.h[f[d]], "name")));
        }
        if (null != this.get_extras().h.canDestroy) for (f = this.get_extras().h.canDestroy, a = "Can destroy ", -1 != f.indexOf("all") && (a = "Can't destroy "), b = 0, c = f.length; b < c;) d = b++, "all" != f[d] && this.game.inventario.tooltipText.push(a + Std.string(BlockData.get(BlockData.identifierToID.h[f[d]], "name")));
    },
    checkInteraction: function () {
        if (1 == this.mini) {
            if (this.game.cantMove || this.game.get_pawsed() || !G.gt(Main.Instance.mouseDown(), 0) && !G.gt(Main.Instance.rightMouseDown(), 0) || !this.collisionBounds.containsPoint(Main.Instance.mouse)) return this.set_hovering(this.world.selectedInventoryItem == this.number), !1;
            0 < this.game.rMouseD && (this.game.waitTillRightMouseIsUp = !0);
            this.world.selectedInventoryItem != this.number && (null != this.game.hotbarSlots[this.world.selectedInventoryItem] && this.game.hotbarSlots[this.world.selectedInventoryItem].hovering && this.game.hotbarSlots[this.world.selectedInventoryItem].set_hovering(!1), this.world.set_selectedInventoryItem(this.number), this.set_hovering(this.world.selectedInventoryItem == this.number), this.game.requestSound("tick", 0, 0), this.game.updateSelectedInventoryItemStuff(!1), this.game.currentlyMining = "", this.game.currentlyMiningBlock = [-1E4, -1E4]);
            return !0;
        }
        var b = Main.Instance.mouseDown(),
            a = Main.Instance.rightMouseDown(),
            c = G.gt(Main.Instance.keyDown(GlobalSave.intToKey.h[GlobalSave.keyBindings.h.altClick.h.id]), 0);
        if ("dragger" == this.name) {
            this.empty ? this.set_x(this.set_y(-100)) : (this.set_x(Main.Instance.mouse.x), this.set_y(Main.Instance.mouse.y), Main.Instance.cursor = null);
            if (1 == b || 1 == a) if (null == this.sibling("trashItem") || !this.sibling("trashItem").hovering) if (this.x < this.game.scene.get_width() - 56 || 30 < this.y) if (this.x < this.game.scene.get_width() / 2 + this.game.inventario.backgroundEntityRect.x || this.x > this.game.scene.get_width() / 2 + this.game.inventario.backgroundEntityRect.get_right() || this.y < this.game.scene.get_height() / 2 - 7 + this.game.inventario.backgroundEntityRect.y || this.y > this.game.scene.get_height() / 2 - 7 + this.game.inventario.backgroundEntityRect.get_bottom()) {
                var d = this.game.getFurthestEmptyBlock2(!0);
                1 == b ? (this.game.addDrop(this.get_type(), d[0] + 1 - .5, -(d[1] + 1) + .5, this.get_count(), this.get_damage(), this.get_extras()), this.setItem(Game.emptyItem())) : (this.game.addDrop(this.get_type(), d[0] + 1 - .5, -(d[1] + 1) + .5, 1, this.get_damage(), this.get_extras()), this.addCount(-1));
            }
            return !0;
        }
        this.set_hovering(this.collisionBounds.containsPoint(Main.Instance.mouse));
        GlobalSave.touchControls && (b = this.game.rMouseD, a = this.game.mouseD);
        d = this.sibling("dragger");
        0 == b && (this.waitingForLeftMouseUp = !1);
        0 == a && (this.waitingForRightMouseUp = !1);
        ItemSlot.globallyWaitingForMouseUp && 0 == b && 0 == a && (ItemSlot.globallyWaitingForMouseUp = !1);
        if (this.hovering && !ItemSlot.globallyWaitingForMouseUp) {
            this.empty || this.showTooltip();
            if (3 == this.world.gamemode) return !1;
            if (1 == b && this.waitingForLeftMouseUp || 0 < b && !this.waitingForLeftMouseUp) {
                if (this.waitingForLeftMouseUp = !0, "trashItem" == this.name) d.setItem(Game.emptyItem());else if ("p" == HxOverrides.substr(this.name, 0, 1)) d.empty ? (d.setItem(this.item.item), ItemSlot.globallyWaitingForMouseUp = !0) : this.isSiblingSame("dragger") && d.get_count() <= this.getMaxStack() - this.get_count() ? d.addCount(this.get_count()) : d.setItem(Game.emptyItem());else if ("output" == this.name) {
                    if (c) for (b = !0; b;) this.game.addToInventoryOrDrop(this.get_type(), this.get_count(), this.get_damage(), this.get_extras()), b = this.takeCraftingItem();else d.empty ? (ItemSlot.globallyWaitingForMouseUp = !0, d.setItem(this.item.item), this.takeCraftingItem()) : this.isSiblingSame("dragger") && d.get_count() <= this.getMaxStack() - this.get_count() && (d.addCount(this.get_count()), this.takeCraftingItem());
                } else if (c) {
                    if ("i" == HxOverrides.substr(this.name, 0, 1)) {
                        c = !1;
                        switch (this.game.inventario.currentFrame) {
                        case 1:
                            b = -1;
                            if ("Cap" == HxOverrides.substr(this.get_type(), -3, 3) || "jl" == this.get_type() || "pk" == this.get_type() || "mh" == this.get_type()) b = 0;
                            "Shirt" == HxOverrides.substr(this.get_type(), -5, 5) && (b = 1);
                            "Pants" == HxOverrides.substr(this.get_type(), -5, 5) && (b = 2);
                            "Shoes" == HxOverrides.substr(this.get_type(), -5, 5) && (b = 3);
                            -1 != b && (this.sibling("a" + (b + 1)).empty ? (a = lemongine.Helpers.clone(this.item.item), a[1] = 1, this.sibling("a" + (b + 1)).setItem(a), this.addCount(-1)) : 1 == this.get_count() ? this.swapWithSibling("a" + (b + 1)) : (c = lemongine.Helpers.clone(this.sibling("a" + (b + 1)).item.item), a = lemongine.Helpers.clone(this.item.item), a[1] = 1, this.sibling("a" + (b + 1)).setItem(a), this.addCount(-1), this.game.addToInventoryOrDrop(c[0], c[1], c[2], c[3])), c = !0);
                            break;
                        case 3:
                            null != this.getBlockData("smeltsInto") && (this.sibling("cook").empty ? (this.swapWithSibling("cook"), c = !0) : this.isSiblingSame("cook") && (b = this.sibling("cook").addCount(this.get_count()), b < this.item.item[1] && (c = !0), this.item.item[1] = b, this.setItem(this.item.item), this.renderCount()));
                            c || null == this.getBlockData("fuel") || (this.sibling("fuel").empty ? (this.swapWithSibling("fuel"), c = !0) : this.isSiblingSame("fuel") && (b = this.sibling("fuel").addCount(this.get_count()), b < this.item.item[1] && (c = !0), this.item.item[1] = b, this.setItem(this.item.item), this.renderCount()));
                            break;
                        case 4:
                            this.item.item[1] = "ender" == this.game.inventario.chest ? this.game.storeItemToData(lemongine.Helpers.clone(this.item.item), this.world.enderChests.h[this.world.player.id], 27) : this.game.storeItemToData(lemongine.Helpers.clone(this.item.item), this.world.chests.h[this.game.inventario.chest], 27);
                            this.setItem(this.item.item);
                            this.renderCount();
                            break;
                        case 8:
                            this.sibling("enchant").empty && this.sibling("enchant").acceptsType(this.item.item) && (a = lemongine.Helpers.clone(this.item.item), a[1] = 1, this.sibling("enchant").setItem(a), this.addCount(-1), c = !0);
                            break;
                        case 9:
                            this.item.item[1] = this.game.storeItemToData(lemongine.Helpers.clone(this.item.item), this.world.states.h[this.game.inventario.dispenseName + "_2"], 9);
                            this.setItem(this.item.item);
                            this.renderCount();
                            break;
                        case 11:
                            this.sibling("ai1").empty ? (this.swapWithSibling("ai1"), c = !0) : this.isSiblingSame("ai1") && (b = this.sibling("ai1").addCount(this.get_count()), b < this.item.item[1] && (c = !0), this.item.item[1] = b, this.setItem(this.item.item), this.renderCount());
                            c || (this.sibling("ai2").empty ? (this.swapWithSibling("ai2"), c = !0) : this.isSiblingSame("ai2") && (b = this.sibling("ai2").addCount(this.get_count()), b < this.item.item[1] && (c = !0), this.item.item[1] = b, this.setItem(this.item.item), this.renderCount()));
                            break;
                        case 12:
                            if ("bp" == this.get_type() && (this.sibling("brewFuel").empty ? (this.swapWithSibling("brewFuel"), c = !0) : this.isSiblingSame("brewFuel") && (b = this.sibling("brewFuel").addCount(this.get_count()), b < this.item.item[1] && (c = !0), this.item.item[1] = b, this.setItem(this.item.item), this.renderCount())), !c) if (null != this.getBlockData("brewIngredient")) this.sibling("brewInput").empty ? (this.swapWithSibling("brewInput"), c = !0) : this.isSiblingSame("brewInput") && (b = this.sibling("brewInput").addCount(this.get_count()), b < this.item.item[1] && (c = !0), this.item.item[1] = b, this.setItem(this.item.item), this.renderCount());else for (a = 0; 3 > a;) if (b = a++, this.sibling("brewOutput" + (b + 1)).acceptsType(this.item.item) && this.sibling("brewOutput" + (b + 1)).empty) {
                                a = lemongine.Helpers.clone(this.item.item);
                                a[1] = 1;
                                this.sibling("brewOutput" + (b + 1)).setItem(a);
                                this.addCount(-1);
                                c = !0;
                                break;
                            }
                        }
                        if (!c) {
                            c = 0;
                            var f = 8;
                            9 > this.number && (c = 9, f = 44);
                            a = c;
                            for (var g = f + 1; a < g && !(b = a++, null != this.sibling("i" + (b + 1)) && this.isSiblingSame("i" + (b + 1)) && (b = this.sibling("i" + (b + 1)).addCount(this.get_count()), this.item.item[1] = b), 0 >= this.get_count()););
                            if (0 < this.get_count()) for (a = c, g = f + 1; a < g;) if (b = a++, null != this.sibling("i" + (b + 1)) && this.sibling("i" + (b + 1)).empty) {
                                this.sibling("i" + (b + 1)).setItem(this.item.item);
                                this.setItem(Game.emptyItem());
                                break;
                            }
                            this.setItem(this.item.item);
                            this.renderCount();
                        }
                    } else this.empty || (b = this.game.addToInventory(this.get_type(), this.get_count(), this.get_damage(), this.get_extras()), 0 < b && ("output2" == this.name && this.takeFurnaceItem(), this.addCount(-b), "aoutput" == this.name && this.takeAnvilItem()));
                } else d.empty ? (ItemSlot.globallyWaitingForMouseUp = !0, "output2" == this.name && this.takeFurnaceItem(), this.swapWithSibling("dragger"), "aoutput" == this.name && this.takeAnvilItem()) : this.isSiblingSame("dragger") ? this.acceptsOnlyOne() || (this.acceptsType(d.item.item) ? (b = this.addCount(d.get_count()), d.item.item[1] = b, 0 >= d.item.get_count() ? d.setItem(Game.emptyItem()) : d.setItem(d.item.item)) : ("output2" == this.name && this.takeFurnaceItem(), b = d.addCount(this.get_count()), this.item.item[1] = b, 0 >= this.item.get_count() ? this.setItem(Game.emptyItem()) : this.setItem(this.item.item), "aoutput" == this.name && this.takeAnvilItem())) : this.acceptsType(d.item.item) && (this.acceptsOnlyOne() && 1 < d.get_count() ? this.empty && (b = lemongine.Helpers.clone(d.item.item), b[1] = 1, this.setItem(b), d.addCount(-1)) : this.swapWithSibling("dragger"));
            } else if (1 == a && this.waitingForRightMouseUp || 0 < a && !this.waitingForRightMouseUp) {
                if (this.waitingForRightMouseUp = !0, "trashItem" == this.name) {
                    if (d.empty) for (ItemSlot.globallyWaitingForMouseUp = !0, a = 0; 45 > a;) this.world.setInventoryItem(a++, Game.emptyItem());else d.addCount(-1);
                } else "p" == HxOverrides.substr(this.name, 0, 1) ? d.empty ? (ItemSlot.globallyWaitingForMouseUp = !0, d.item.set_item(this.item.item), d.addCount(d.getMaxStack()), d.setItem(d.item.item)) : d.addCount(-1) : this.acceptsType(d.item.item) && (d.empty ? this.empty || (ItemSlot.globallyWaitingForMouseUp = !0, "output2" == this.name && this.takeFurnaceItem(), 1 == this.get_count() && 1 == this.world.gamemode ? d.setItem(this.item.item) : d.setItem(this.splitStack())) : this.empty ? (b = lemongine.Helpers.clone(d.item.item), b[1] = 1, this.setItem(b), d.addCount(-1)) : this.acceptsOnlyOne() || this.isFullStack() || !this.isSiblingSame("dragger") || (d.addCount(-1), this.addCount(1)));
            } else for (a = 0; 9 > a;) if (b = a++, this.name != "i" + (b + 1) && 1 == Main.Instance.keyDown(49 + b)) {
                a = this.sibling("i" + (b + 1));
                if (null == a) break;
                if (!a.acceptsType(this.item.item)) break;
                if (!this.acceptsType(a.item.item)) break;
                if (this.acceptsOnlyOne() && 1 < a.item.get_count()) {
                    if (!this.empty) break;
                    b = lemongine.Helpers.clone(a.item.item);
                    b[1] = 1;
                    this.setItem(b);
                    a.addCount(-1);
                } else this.swapWithSibling("i" + (b + 1));
                break;
            }
            d.empty && (Main.Instance.cursor = lime.ui.MouseCursor.DEFAULT);
        }
        return !0;
    },
    sibling: function (b) {
        return this.game.inventario.inventorySlots.h[b];
    },
    isSiblingSame: function (b) {
        return this.sibling(b).get_type() == this.get_type() && this.get_damage() == this.sibling(b).get_damage() ? this.game.sameExtras(this.sibling(b).get_extras(), this.get_extras()) : !1;
    },
    swapWithSibling: function (b) {
        var a = lemongine.Helpers.clone(this.sibling(b).item.item);
        this.sibling(b).setItem(this.item.item);
        this.setItem(a);
    },
    splitStack: function () {
        var b = lemongine.Helpers.clone(this.item.item),
            a = lemongine.Helpers.clone(this.item.item);
        b[1] = Math.ceil(this.get_count() / 2);
        a[1] = Math.floor(this.get_count() / 2);
        this.setItem(a);
        0 >= a[1] && this.setItem(Game.emptyItem());
        return b;
    },
    addCount: function (b) {
        var a = lemongine.Helpers.clone(this.item.item);
        if (this.get_count() + b > this.getMaxStack()) return b = this.get_count() + b - this.getMaxStack(), a[1] = this.getMaxStack(), this.setItem(a), b;
        if (0 >= (a[1] += b)) return this.setItem(Game.emptyItem()), -(a[1] | 0);
        this.setItem(a);
        return 0;
    },
    isFullStack: function () {
        return this.get_count() >= this.getMaxStack();
    },
    getMaxStack: function () {
        return BlockData.getMaxStack(this.get_type());
    },
    acceptsType: function (b) {
        var a = b[0];
        if ("output" == this.name || "aoutput" == this.name) return !1;
        if (Game.isEmptyItem(b)) return !0;
        if ("output2" != this.name) if ("a1" == this.name) {
            if ("Cap" == HxOverrides.substr(a, -3, 3) || "jl" == a || "pk" == a || "mh" == a) return !0;
        } else if ("a2" == this.name) {
            if ("Shirt" == HxOverrides.substr(a, -5, 5)) return !0;
        } else if ("a3" == this.name) {
            if ("Pants" == HxOverrides.substr(a, -5, 5)) return !0;
        } else if ("a4" == this.name) {
            if ("Shoes" == HxOverrides.substr(a, -5, 5)) return !0;
        } else if ("cook" == this.name) {
            if (null != BlockData.get(a, "smeltsInto")) return !0;
        } else if ("fuel" == this.name) {
            if (null != BlockData.get(a, "fuel")) return !0;
        } else if ("brewFuel" == this.name) {
            if ("bp" == a) return !0;
        } else if ("brewInput" == this.name) {
            if (1 == BlockData.get(a, "brewIngredient")) return !0;
        } else if ("brewOutput" == HxOverrides.substr(this.name, 0, 10)) {
            if ("potion" == a && !this.game.emptyPotion(null != b[3] ? Game.makeDynamicMap(b[3]).h.type : "")) return !0;
        } else if ("enchant" == this.name) {
            if (b = null != b[3] ? b[3] : new haxe.ds.StringMap(), "book" == a || "potion" == a && this.game.emptyPotion(b.h.type)) {
                if (null == b.h.type || "empty" == b.h.type) return !0;
            } else {
                if (1 == BlockData.get(a, "enchantable")) {
                    a = b.h;
                    b = Object.keys(a);
                    for (var c = b.length, d = 0; d < c;) if ("enchant" == a[b[d++]]) return !1;
                    return !0;
                }
            }
        } else return !0;
        return !1;
    },
    acceptsOnlyOne: function () {
        return "a1" == this.name || "a2" == this.name || "a3" == this.name || "a4" == this.name || "enchant" == this.name || "brewOutput" == HxOverrides.substr(this.name, 0, 10) ? !0 : !1;
    },
    showsHoverState: function () {
        return "output" == this.name || "output2" == this.name || "trashItem" == this.name || "aoutput" == this.name ? !1 : !0;
    },
    takeCraftingItem: function () {
        if (this.empty) return !1;
        "craft" == this.get_type() ? this.game.unlockAchieve(3) : "WoodenPickaxe" == this.get_type() ? this.game.unlockAchieve(4) : "StonePickaxe" == this.get_type() ? this.game.unlockAchieve(5) : "IronPickaxe" == this.get_type() ? this.game.unlockAchieve(6) : "oven" == this.get_type() ? this.game.unlockAchieve(7) : "th" == this.get_type() ? this.game.unlockAchieve(9) : "cake" == this.get_type() ? this.game.unlockAchieve(24) : "portalstone" == this.get_type() && this.game.unlockAchieve(30);
        for (var b = !0, a = 1, c = this.game.inventario.blocks.length + 1; a < c;) {
            var d = a++;
            "bk" == HxOverrides.substr(this.sibling("c" + d).get_type(), -2, 2) ? (this.sibling("c" + d).item.item[0] = "bk", this.sibling("c" + d).setItem(this.sibling("c" + d).item.item), b = !1) : 1 == this.sibling("c" + d).get_count() ? (this.sibling("c" + d).setItem(Game.emptyItem()), b = !1) : this.sibling("c" + d).addCount(-1);
        }
        b || this.game.inventario.doWhatYouDoWithWheatThins();
        return b;
    },
    takeFurnaceItem: function () {
        this.empty || "ii" == this.get_type() && this.game.unlockAchieve(8);
    },
    takeAnvilItem: function () {
        "aoutput" == this.name && this.game.inventario.anvilCanAnvil && (this.world.experience = Math.max(0, this.world.experience - 100 * this.game.inventario.anvilLevelsRequired) | 0, this.game.inventario.damageAnvilMaybe(), this.game.inventario.anvilGettingItem = !0, this.game.inventario.inventorySlots.h.ai1.addCount(-1), this.game.inventario.inventorySlots.h.ai2.empty || this.game.inventario.inventorySlots.h.ai2.addCount(-this.game.inventario.anvilItemsToTake), this.game.unlockAchieve(40), this.game.inventario.anvilGettingItem = !1, this.game.inventario.doAnvilyThings());
    },
    render: function () {
        this.renderSlot();
        this.renderDamage();
        this.renderCount();
    },
    renderSlot: function () {
        -1 == this.slotQuads && (this.slotQuads = this.slotEntity.nearestConsecutiveEmpty(3));
        if (this.hovering && this.showsHoverState()) {
            var b = 23 * this.size,
                a = 23 * this.size;
            this.slotEntity.updateQuad(this.slotQuads, new lemongine.Vector3(this.x - 23 * this.size / 2, this.y - 23 * this.size / 2 + 1, 0), new lemongine.Point(48, 16), new lemongine.Point(22, 22), new lemongine.Point(b, a));
        } else this.empty ? (b = 22 * this.size, a = 22 * this.size, this.slotEntity.updateQuad(this.slotQuads, new lemongine.Vector3(this.x - 22 * this.size / 2, this.y - 22 * this.size / 2, 0), new lemongine.Point(80, 16), new lemongine.Point(22, 22), new lemongine.Point(b, a))) : (b = 22 * this.size, a = 22 * this.size, this.slotEntity.updateQuad(this.slotQuads, new lemongine.Vector3(this.x - 22 * this.size / 2, this.y - 22 * this.size / 2, 0), new lemongine.Point(48, 48), new lemongine.Point(22, 22), new lemongine.Point(b, a)));
    },
    renderDamage: function () {
        -1 == this.slotQuads && (this.slotQuads = this.slotEntity.nearestConsecutiveEmpty(3));
        if (this.get_isTool() && null != this.getBlockData("life") && 0 < this.get_damage()) {
            var b = this.slotEntity,
                a = this.slotQuads + 1,
                c = new lemongine.Vector3(this.x - 13 + 1, this.y - 13 + 1, 0),
                d = new lemongine.Point(96, 0),
                f = new lemongine.Point(1, 1),
                l = new lemongine.Point(26, 2),
                p = new haxe.ds.StringMap(),
                h = lemongine.Mathz.repeatArray([.14, .14, .14, 1], 6);
            p.h.color = h;
            b.updateQuad(a, c, d, f, l, null, null, p);
            h = 1 - this.get_damage() / this.getBlockData("life");
            b = this.slotEntity;
            a = this.slotQuads + 2;
            c = new lemongine.Vector3(this.x - 13 + 1, this.y - 13 + 1, 0);
            d = new lemongine.Point(96, 0);
            f = new lemongine.Point(1, 1);
            l = new lemongine.Point(Math.ceil(26 * h), 2);
            p = new haxe.ds.StringMap();
            h = lemongine.Mathz.repeatArray([.8 * (1 - h), h, 0, 1], 6);
            p.h.color = h;
            b.updateQuad(a, c, d, f, l, null, null, p);
        } else this.slotEntity.updateQuad(this.slotQuads + 1, null, null, new lemongine.Point(), new lemongine.Point()), this.slotEntity.updateQuad(this.slotQuads + 2, null, null, new lemongine.Point(), new lemongine.Point());
    },
    renderCount: function () {
        1 < this.get_count() ? (-1 == this.countQuad && (this.countQuad = this.countEntity.nearestConsecutiveEmpty(1)), this.countEntity.updateQuad(this.countQuad, new lemongine.Vector3(this.x + 15 - 32 + 2, this.y + 1, 0), new lemongine.Point((this.get_count() - 1) % 8 * 32, 32 * Math.floor((this.get_count() - 1) / 8)), new lemongine.Point(32, 32))) : -1 != this.countQuad && (this.countEntity.removeQuad(this.countQuad, !0), this.countQuad = -1);
    },
    remove: function () {
        -1 != this.slotQuads && (this.slotEntity.removeQuad(this.slotQuads, !0), this.slotEntity.removeQuad(this.slotQuads + 1, !0), this.slotEntity.removeQuad(this.slotQuads + 2, !0), this.slotQuads = -1);
        -1 != this.countQuad && (this.countEntity.removeQuad(this.countQuad, !0), this.countQuad = -1);
        null != this.item && this.item.destroy();
    },
    getBlockData: function (b) {
        return BlockData.get(this.get_type(), b);
    },
    set_hovering: function (b) {
        this.hovering != b && (this.hovering = b, this.render());
        return this.hovering;
    },
    get_type: function () {
        return this.item.get_type();
    },
    get_isTool: function () {
        return this.item.get_isTool();
    },
    get_count: function () {
        return this.item.get_count();
    },
    get_damage: function () {
        return this.item.get_damage();
    },
    get_extras: function () {
        return this.item.get_extras();
    },
    set_x: function (b) {
        this.x = b;
        this.item.set_x(((b - 1) / 16 - .5) / 1.09416984375);
        this.collisionBounds.x = b - 20 * this.size / 2;
        this.render();
        return b;
    },
    set_y: function (b) {
        this.y = b;
        this.item.set_y(((b - 1) / 16 - .5) / 1.09416984375);
        this.collisionBounds.y = b - 20 * this.size / 2;
        this.render();
        return b;
    },
    __class__: ItemSlot
}
ItemSlot.globallyWaitingForMouseUp = !1