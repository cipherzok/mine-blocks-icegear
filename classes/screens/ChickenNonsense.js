screens.ChickenNonsense = function (b) {
    this.seedsToDispense = 30;
    this.seeds = [];
    this.chickens = [];
    this.eggs = [];
    this.eggs.unshift(new screens.MenuEgg(b, -.5, 6));
}
m["screens.ChickenNonsense"] = screens.ChickenNonsense
screens.ChickenNonsense.__name__ = "screens.ChickenNonsense"
screens.ChickenNonsense.prototype = {
    createEntity: function () {
        var b = Textures.blockTextures,
            a = shader.TwoTexture.getShader(shader.BlendMode.NORMAL),
            c = new haxe.ds.StringMap(),
            d = lemongine.Mathz.repeatArray([0], 6);
        c.h.texBlend = d;
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.entity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.entity.setTextureBuffer("texture2", lemongine.AssetManager.getImage("mobs"));
        this.entity.setUniform("texSize2", [lemongine.AssetManager.getImage("mobs").width, lemongine.AssetManager.getImage("mobs").height]);
        this.entity.layer = 42;
        this.entity.isTransparent = !0;
        this.entity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    },
    prepareInteraction: function () {
        for (var b = 0, a = this.eggs; b < a.length;) {
            var c = a[b];
            ++b;
            if (c.dragging || new lemongine.Rectangle(c.position.x - 3, c.position.y - 3, 22, 22).containsPoint(Main.Instance.mouse)) if (Main.Instance.setUIHover("menuChickenEgg" + c.id, !1), Main.Instance.getUIHover() == "menuChickenEgg" + c.id) {
                Main.Instance.cursor = lime.ui.MouseCursor.POINTER;
                1 == Main.Instance.mouseDown() && c.clickOffset.set(Main.Instance.mouse.x - c.position.x, Main.Instance.mouse.y - c.position.y);
                if (c.dragging && 0 == Main.Instance.mouseDown() && c.position.y > Main.Instance.scene.get_height() - 16 - 2 && (c.speed.y = -5, c.cracking++, c.crackAnimation = Math.floor(.5 * Main.Instance.get_fps()), Main.Instance.MUTED || lemongine.AssetManager.getSound(["crunch1", "crunch2", "crunch3"][Math.floor(3 * Math.random())] + "_0").play(GlobalSave.soundVol / 100, c.position.x / Main.Instance.scene.get_width() - .5, 0, 0, 1, !0, 1.5 + .1 * (Math.random() - .5)), new particles.Particle_SS_Mining(c.position.x, c.position.y), new particles.Particle_SS_Mining(c.position.x, c.position.y), new particles.Particle_SS_Mining(c.position.x, c.position.y), 3 <= c.cracking)) {
                    this.chickens.unshift(new screens.MenuChicken(c.position));
                    10 == this.chickens.length && (this.chickens[0].size = 1.8, this.chickens[0].golden = !0, Main.Instance.unlockNewgroundsMedal("Hatch a Golden Chicken"));
                    Main.Instance.MUTED || lemongine.AssetManager.getSound("pop_0").play(GlobalSave.soundVol / 100, c.position.x / Main.Instance.scene.get_width() - .5);
                    HxOverrides.remove(this.eggs, c);
                    continue;
                }
                c.dragging = G.gt(Main.Instance.mouseDown(), 0);
            } else c.dragging = !1;
        }
        b = 0;
        for (a = this.chickens; b < a.length;) if (c = a[b], ++b, c.dragging || new lemongine.Rectangle(c.position.x - 5, c.position.y - 5, 14 * c.size + 10, 18 * c.size + 10).containsPoint(Main.Instance.mouse)) if (Main.Instance.setUIHover("menuChicken" + c.id, !1), Main.Instance.getUIHover() == "menuChicken" + c.id) {
            Main.Instance.cursor = lime.ui.MouseCursor.POINTER;
            1 == Main.Instance.mouseDown() && c.clickOffset.set(Main.Instance.mouse.x - c.position.x, Main.Instance.mouse.y - c.position.y);
            if (c.dragging && 0 == Main.Instance.mouseDown()) {
                if (c.position.y > Main.Instance.scene.get_height() - 18 * c.size - 2) if (c.golden) {
                    new particles.Particle_SS_Heart(c.position.x + 14 * c.size / 2, c.position.y - 10);
                    new particles.Particle_SS_Heart(c.position.x + 14 * c.size / 2, c.position.y - 10);
                    new particles.Particle_SS_Heart(c.position.x + 14 * c.size / 2, c.position.y - 10);
                    new particles.Particle_SS_Heart(c.position.x + 14 * c.size / 2, c.position.y - 10);
                    for (var d = 0, f = this.chickens; d < f.length;) {
                        var g = f[d];
                        ++d;
                        g.jumpTimer = Math.floor(g.position.distanceTo(c.position) / Main.Instance.scene.get_width() * Main.Instance.get_fps() * 1.5) + 1;
                    }
                } else new particles.Particle_SS_Heart(c.position.x + 14 * c.size / 2, c.position.y - 10), c.speed.y = -8, c.makeSound();
                c.movementTimer = Math.floor((10 * Math.random() + 3) * Main.Instance.get_fps());
                c.target = -1;
            }
            c.dragging = G.gt(Main.Instance.mouseDown(), 0);
        } else c.dragging = !1;
    },
    updateAndRender: function (b) {
        if (0 != this.eggs.length || 0 != this.chickens.length) {
            null == this.entity && this.createEntity();
            this.entity.clearPool();
            for (var a = Textures.getTexture("seeds"), c = 0, d = this.seeds; c < d.length;) {
                var f = d[c];
                ++c;
                f.speed.y += .5;
                f.speed.x *= .95;
                f.speed.y *= .95;
                f.position.x += f.speed.x;
                if ((f.position.y += f.speed.y) > b.get_height() - 16) {
                    var l = b.get_height();
                    f.position.y = l - 16;
                    3 < f.speed.y ? f.speed.y = -Math.abs(.5 * f.speed.y) : (f.speed.y = 0, f.speed.x *= .5);
                }
                0 > f.position.x && (f.position.x = 0, f.speed.x = -1 > f.speed.x ? Math.abs(.5 * f.speed.x) : 0);
                f.position.x > b.get_width() - 16 && (l = b.get_width(), f.position.x = l - 16, f.speed.x = 1 < f.speed.x ? -Math.abs(.5 * f.speed.x) : 0);
                var h = this.entity;
                l = Math.floor(f.position.x);
                var m = f.position.y,
                    x = Main.Instance.tick,
                    q = Main.Instance.get_fps();
                h.addQuad(new lemongine.Vector3(l, Math.floor(m + 4 * Math.sin(G.toFloat(x) / G.toFloat(q) * 2 + 2 * f.random * Math.PI) - 4)), new lemongine.Point(a.x, a.y), new lemongine.Point(a.width, a.height), !0, new lemongine.Point(16, 16), null, null);
            }
            c = 0;
            for (d = this.chickens.length; c < d;) {
                a = this.chickens[this.chickens.length - 1 - c++];
                h = -1E4;
                if (3 <= a.seedsEaten) {
                    a.size != (a.golden ? 3 : 2) && (a.position.x -= 14 * ((a.golden ? 3 : 2) - a.size) / 2, a.size = a.golden ? 3 : 2);
                    l = this.eggs;
                    f = [];
                    for (m = 0; m < l.length;) x = l[m], ++m, x.id == a.lastEgg && f.push(x);
                    0 == f.length && a.layTimer--;
                    0 >= a.layTimer && 10 > this.chickens.length + this.eggs.length && (a.setLayTimer(), f = new screens.MenuEgg(new lemongine.Point(a.position.x, a.position.y), a.direction ? -3 : 3, -5), this.eggs.unshift(f), a.lastEgg = f.id, a.speed.y = -8);
                } else {
                    l = 0;
                    for (m = this.seeds; l < m.length;) f = m[l], ++l, f.position.y > b.get_height() - 30 && Math.abs(a.position.x + 14 * a.size / 2 - f.position.x) < Math.abs(a.position.x + 14 * a.size / 2 - h) && (h = Math.floor(f.position.x));
                    if (!a.dragging) for (l = 0, f = this.seeds; l < f.length;) if (m = f[l], ++l, 16 > new lemongine.Point(a.position.x + 14 * a.size / 2, a.position.y + 15 * a.size).distanceTo(new lemongine.Point(m.position.x + 8, m.position.y + 16))) {
                        (a.eatTimer += 2) > 2 * Main.Instance.get_fps() && (a.eatTimer = 0, a.seedsEaten++, 3 <= a.seedsEaten && (new particles.Particle_SS_Grow(a.position.x + 14 * a.size / 2, a.position.y - 10), new particles.Particle_SS_Grow(a.position.x + 14 * a.size / 2, a.position.y - 10), new particles.Particle_SS_Grow(a.position.x + 14 * a.size / 2, a.position.y - 10), new particles.Particle_SS_Grow(a.position.x + 14 * a.size / 2, a.position.y - 10), new particles.Particle_SS_Grow(a.position.x + 14 * a.size / 2, a.position.y - 10)), HxOverrides.remove(this.seeds, m));
                        break;
                    }
                }
                0 < a.eatTimer && a.eatTimer--;
                a.dragging ? (a.speed.x = Main.Instance.mouse.x - a.clickOffset.x - a.position.x, a.speed.y = Main.Instance.mouse.y - a.clickOffset.y - a.position.y, a.position.x = Main.Instance.mouse.x - a.clickOffset.x, a.position.y = Main.Instance.mouse.y - a.clickOffset.y) : (a.speed.y += .5, a.speed.x *= .8, a.speed.y *= .8, a.position.x += a.speed.x, a.position.y += a.speed.y);
                0 > a.position.y && (a.position.y = 0, -3 > a.speed.y && (a.speed.y = Math.abs(.5 * a.speed.y)));
                a.position.y > b.get_height() - 15 * a.size && (l = b.get_height(), a.position.y = l - 15 * a.size, 3 < a.speed.y ? a.speed.y = -Math.abs(.5 * a.speed.y) : (a.speed.y = 0, a.speed.x *= .5));
                0 > a.position.x && (a.position.x = 0, a.speed.x = Math.abs(.5 * a.speed.x));
                a.position.x > b.get_width() - 16 * a.size && (l = b.get_width(), a.position.x = l - 16 * a.size, a.speed.x = -Math.abs(.5 * a.speed.x));
                f = l = !1;
                0 < a.jumpTimer && (a.jumpTimer--, 0 >= a.jumpTimer && (f = !0, a.makeSound()));
                a.dragging ? (a.animation = 3, f = 6, a.target = -1) : a.position.y < b.get_height() - 15 * a.size ? (l = !0, 2 != a.animation && (a.animation = 2, a.animationTick = 0), f = [6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11][Math.floor(a.animationTick / 2) % 12]) : (f && (a.speed.y -= 15), a.movementTimer--, 0 >= a.movementTimer && (a.target = 0 < h ? h : Math.floor(Math.random() * (Main.Instance.scene.get_width() - 16 * a.size)), a.movementTimer = Math.floor((5 * Math.random() + 5) * Main.Instance.get_fps())), -1 != a.target && (5 < a.target - a.position.x ? (a.speed.x += .5 * a.size, 0 == a.direction && (a.direction = !0, a.headFlipped = !1)) : -5 > a.target - a.position.x && (a.speed.x -= .5 * a.size, 1 == a.direction && (a.direction = !1, a.headFlipped = !1))), .3 < Math.abs(a.speed.x) ? (1 != a.animation && (a.animation = 1, a.animationTick = 0), f = [2, 2, 3, 3, 3, 4, 4, 5, 5][Math.floor(a.animationTick / 2) % 9]) : (a.animation = 0, f = 1));
                a.animationTick++;
                Math.random() < 1 / (15 * Main.Instance.get_fps()) && (a.headFlipped = !0);
                Math.random() < 1 / (Main.Instance.get_fps() * (l || a.dragging ? 3 : 8)) && (a.headFlipped = !1);
                h = this.entity;
                l = new lemongine.Vector3(a.position.x, a.position.y);
                m = new lemongine.Point((f - 1) % 9 * 14, 182 + 15 * Math.floor((f - 1) / 9));
                x = new lemongine.Point(14, 15);
                q = new lemongine.Point(14 * a.size, 15 * a.size);
                var w = a.direction ? lemongine.Geom.flippedQuadUVs : null,
                    r = new haxe.ds.StringMap(),
                    v = lemongine.Mathz.repeatArray([1], 6);
                r.h.texBlend = v;
                v = lemongine.Mathz.repeatArray(a.golden ? [1, .8, .3, 1] : [1, 1, 1, 1], 6);
                r.h.color = v;
                h.addQuad(l, m, x, !0, q, null, w, r);
                h = this.entity;
                l = new lemongine.Vector3(a.position.x + ((a.direction ? 11 : -2) + (a.headFlipped ? a.direction ? -2 : 2 : 0)) * a.size, a.position.y + (-3 - (2 == f || 3 == f ? 1 : 0)) * a.size);
                f = new lemongine.Point(28, 197);
                m = new lemongine.Point(5, 8);
                x = new lemongine.Point(5 * a.size, 8 * a.size);
                q = 1 == (a.headFlipped ? -1 : 1) * (a.direction ? 1 : -1) ? lemongine.Geom.flippedQuadUVs : null;
                w = new haxe.ds.StringMap();
                r = lemongine.Mathz.repeatArray([1], 6);
                w.h.texBlend = r;
                a = lemongine.Mathz.repeatArray(a.golden ? [1, .8, .3, 1] : [1, 1, 1, 1], 6);
                w.h.color = a;
                h.addQuad(l, f, m, !0, x, null, q, w);
            }
            c = 0;
            for (d = this.eggs; c < d.length;) f = d[c], ++c, f.dragging ? (f.speed.x = Main.Instance.mouse.x - f.clickOffset.x - f.position.x, f.speed.y = Main.Instance.mouse.y - f.clickOffset.y - f.position.y, f.position.x = Main.Instance.mouse.x - f.clickOffset.x, f.position.y = Main.Instance.mouse.y - f.clickOffset.y) : (f.speed.y += .5, f.speed.x *= .98, f.speed.y *= .98, f.position.x += f.speed.x, f.position.y += f.speed.y), 0 > f.position.y && (f.position.y = 0, !f.dragging && -1 > f.speed.y && !Main.Instance.MUTED && lemongine.AssetManager.getSound("pop_0").play(GlobalSave.soundVol / 100, f.position.x / Main.Instance.scene.get_width() - .5, 0, 0, 1, !0, 1.5 + .5 * Math.random()), -3 > f.speed.y && (f.speed.y = Math.abs(.5 * f.speed.y))), f.position.y > b.get_height() - 16 && (l = b.get_height(), f.position.y = l - 16, !f.dragging && 1 < f.speed.y && !Main.Instance.MUTED && lemongine.AssetManager.getSound("pop_0").play(GlobalSave.soundVol / 100, f.position.x / Main.Instance.scene.get_width() - .5, 0, 0, 1, !0, 1.5 + .5 * Math.random()), 3 < f.speed.y ? f.speed.y = -Math.abs(.5 * f.speed.y) : (f.speed.y = 0, f.speed.x *= .5)), 0 > f.position.x && (f.position.x = 0, -1 > f.speed.x ? (f.speed.x = Math.abs(.5 * f.speed.x), f.dragging || Main.Instance.MUTED || lemongine.AssetManager.getSound("pop_0").play(GlobalSave.soundVol / 100, f.position.x / Main.Instance.scene.get_width() - .5, 0, 0, 1, !0, 1.5 + .5 * Math.random())) : f.speed.x = 0), f.position.x > b.get_width() - 16 && (l = b.get_width(), f.position.x = l - 16, 1 < f.speed.x ? (f.speed.x = -Math.abs(.5 * f.speed.x), f.dragging || Main.Instance.MUTED || lemongine.AssetManager.getSound("pop_0").play(GlobalSave.soundVol / 100, f.position.x / Main.Instance.scene.get_width() - .5, 0, 0, 1, !0, 1.5 + .5 * Math.random())) : f.speed.x = 0), 0 < f.crackAnimation && f.crackAnimation--, a = Textures.getTexture("egg"), this.entity.addQuad(new lemongine.Vector3(f.position.x + (0 < f.crackAnimation ? 1 : 0) * (2 * Math.random() - 1), f.position.y), new lemongine.Point(a.x, a.y), new lemongine.Point(a.width, a.height), !0, new lemongine.Point(16, 16));
            this.entity.resetUnusedQuads();
            0 < this.entity.numQuads && b.draw(this.entity);
        }
    },
    __class__: screens.ChickenNonsense
}