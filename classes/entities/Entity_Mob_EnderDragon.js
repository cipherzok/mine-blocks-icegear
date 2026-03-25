entities.Entity_Mob_EnderDragon = function (b, a, c) {
    var d = new haxe.ds.StringMap();
    d.h.h = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t1 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t2 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t3 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t4 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t5 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t6 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t7 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t8 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t9 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t10 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t11 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t12 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t13 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    d.h.t14 = {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        x: 0,
        y: 0,
        rotateTo: 0,
        playing: !1,
        frame: 0
    };
    this.mobMovie = d;
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_EnderDragon"] = entities.Entity_Mob_EnderDragon
entities.Entity_Mob_EnderDragon.__name__ = "entities.Entity_Mob_EnderDragon"
entities.Entity_Mob_EnderDragon.__super__ = entities.Entity_Mob
entities.Entity_Mob_EnderDragon.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 24);
        b = this.world.mobs.h[this.id];
        var a = 0 > b.h.speedX ? 1 : -1;
        this.mobMovie.h.h.scaleY != a * Math.abs(this.mobMovie.h.h.scaleY) && (this.mobMovie.h.h.scaleY = a * Math.abs(this.mobMovie.h.h.scaleY));
        this.mobMovie.h.h.rotateTo = 180 * Math.atan2(b.h.speedY, -b.h.speedX) / Math.PI;
        this.mobMovie.h.h.rotation = this.getRotD(this.mobMovie.h.h.rotateTo, this.mobMovie.h.h.rotation, 10);
        this.mobMovie.h.t1.rotation = this.getRotD(this.mobMovie.h.h.rotation, this.mobMovie.h.t1.rotation, .1);
        this.mobMovie.h.t1.scaleY = -90 > this.mobMovie.h.t1.rotation || 90 < this.mobMovie.h.t1.rotation ? -Math.abs(this.mobMovie.h.t1.scaleY) : Math.abs(this.mobMovie.h.t1.scaleY);
        for (var c = 2; 15 > c;) b = c++, this.mobMovie.h["t" + b].rotation = this.getRotD(this.mobMovie.h["t" + (b - 1)].rotation, this.mobMovie.h["t" + b].rotation, .1), this.mobMovie.h["t" + b].scaleY = -90 > this.mobMovie.h["t" + b].rotation || 90 < this.mobMovie.h["t" + b].rotation ? -Math.abs(this.mobMovie.h["t" + b].scaleY) : Math.abs(this.mobMovie.h["t" + b].scaleY), 5 == b ? (this.mobMovie.h["t" + b].x = this.mobMovie.h["t" + (b - 1)].x + 6.333333333333333 * Math.sin((-this.mobMovie.h["t" + (b - 1)].rotation + 90) / 180 * Math.PI), this.mobMovie.h["t" + b].y = this.mobMovie.h["t" + (b - 1)].y + 6.333333333333333 * Math.cos((-this.mobMovie.h["t" + (b - 1)].rotation + 90) / 180 * Math.PI)) : (this.mobMovie.h["t" + b].x = this.mobMovie.h["t" + (b - 1)].x + .8333333333333334 * Math.sin((-this.mobMovie.h["t" + (b - 1)].rotation + 90) / 180 * Math.PI), this.mobMovie.h["t" + b].y = this.mobMovie.h["t" + (b - 1)].y + .8333333333333334 * Math.cos((-this.mobMovie.h["t" + (b - 1)].rotation + 90) / 180 * Math.PI));
        this.mobMovie.h.h.playing && (b = this.mobMovie.h.h, b.frame++, 23 < this.mobMovie.h.h.frame && (this.mobMovie.h.h.frame = 0, this.mobMovie.h.h.playing = !1));
        this.mobMovie.h.t4.playing && (b = this.mobMovie.h.t4, b.frame++, 79 < this.mobMovie.h.t4.frame && (this.mobMovie.h.t4.frame = 0, this.mobMovie.h.t4.playing = !1));
        b = 0;
        a = Object.keys(entities.Entity_Mob_EnderDragon.pieces.h);
        for (var d = a.length, f = 0; f < d;) {
            c = a[f++];
            var l = entities.Entity_Mob_EnderDragon.pieces.h[c].clip.width / 2 / 30,
                p = -entities.Entity_Mob_EnderDragon.pieces.h[c].clip.height / 2 / 30,
                h = entities.Entity_Mob_EnderDragon.pieces.h[c];
            this.entityMatrix.reset().translate(-l, p).multiply(h.thisTransform.values);
            null != entities.Entity_Mob_EnderDragon.anims.h[c] && this.entityMatrix.multiply(entities.Entity_Mob_EnderDragon.anims.h[c][entities.Entity_Mob_EnderDragon.animFrames.h[c][Math.floor(this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[c].movie].frame / 2)]].values);
            l = this.entityMatrix.scale(this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[c].movie].scaleX, this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[c].movie].scaleY);
            p = this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[c].movie];
            h = this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[c].movie];
            l.rotate2D(-this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[c].movie].rotation / 180 * Math.PI).translate(p.x, h.y).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            l = this.entity;
            p = this.quadPositions[b++];
            h = new lemongine.Point(entities.Entity_Mob_EnderDragon.pieces.h[c].clip.x, entities.Entity_Mob_EnderDragon.pieces.h[c].clip.y);
            var m = new lemongine.Point(entities.Entity_Mob_EnderDragon.pieces.h[c].clip.width, entities.Entity_Mob_EnderDragon.pieces.h[c].clip.height),
                n = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, entities.Entity_Mob_EnderDragon.pieces.h[c].clip.width / 30, entities.Entity_Mob_EnderDragon.pieces.h[c].clip.height / 30), this.entityMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            var x = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            c.h.colorOffset = x;
            x = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            c.h.color = x;
            l.updateQuad(p, null, h, m, null, n, null, c);
        }
    },
    get_bodyCenter: function () {
        return this.getPointOnPart("body", .5, .5);
    },
    get_headCenter: function () {
        return this.getPointOnPart("head", .5, .5);
    },
    getPointOnPart: function (b, a, c) {
        var d = entities.Entity_Mob_EnderDragon.pieces.h[b].clip.width / 2 / 30,
            f = -entities.Entity_Mob_EnderDragon.pieces.h[b].clip.height / 2 / 30,
            g = entities.Entity_Mob_EnderDragon.pieces.h[b],
            p = this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[b].movie],
            h = this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[b].movie];
        g = this.entityMatrix.reset().translate(-d, f).multiply(g.thisTransform.values).scale(p.scaleX, h.scaleY);
        d = this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[b].movie];
        f = this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[b].movie];
        g.rotate2D(-this.mobMovie.h[entities.Entity_Mob_EnderDragon.pieces.h[b].movie].rotation / 180 * Math.PI).translate(d.x, f.y).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entityMatrix.apply(new lemongine.Vector3(entities.Entity_Mob_EnderDragon.pieces.h[b].clip.width / 30 * a, entities.Entity_Mob_EnderDragon.pieces.h[b].clip.height / 30 * c), !0);
        return new lemongine.Point(b.x, b.y);
    },
    __class__: entities.Entity_Mob_EnderDragon
})
entities.Entity_Mob_EnderDragon.animFrames = function (b) {
    b = new haxe.ds.StringMap();
    b.h.jaw = [0, 0, 1, 2, 2, 2, 2, 2, 2, 3, 4, 5];
    b.h.wing1 = [0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 22, 23, 23, 24, 24, 25, 25, 25, 26];
    b.h.wing2 = [0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 22, 23, 23, 24, 24, 25, 25, 25, 26];
    return b;
}(this)
entities.Entity_Mob_EnderDragon.anims = function (b) {
    b = new haxe.ds.StringMap();
    var a = [new lemongine.Matrix4().translate(-.36666666666666664, .016666666666666666).scale2D(4.412704), new lemongine.Matrix4().translate(-.2, .05).rotate2D(.12833333333333333 * Math.PI).translate(-.16666666666666666, -.03333333333333333).scale2D(4.412704), new lemongine.Matrix4().translate(-.2, .05).rotate2D(.19722222222222222 * Math.PI).translate(-.16666666666666666, -.03333333333333333).scale2D(4.412704), new lemongine.Matrix4().translate(-.2, .05).rotate2D(.11388888888888889 * Math.PI).translate(-.16666666666666666, -.03333333333333333).scale2D(4.412704), new lemongine.Matrix4().translate(-.2, .05).rotate2D(.07444444444444444 * Math.PI).translate(-.16666666666666666, -.03333333333333333).scale2D(4.412704), new lemongine.Matrix4().translate(-.2, .05).rotate2D(.03444444444444444 * Math.PI).translate(-.16666666666666666, -.03333333333333333).scale2D(4.412704)];
    b.h.jaw = a;
    a = [new lemongine.Matrix4().shear2D(.9277471957, 0).scale(1, -.247471171007).translate(.5533333333333331, .31333333333333335).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.08286896857, 0).scale(1, -.105052142379).translate(.5533333333333331, .07333333333333333).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.3756611422475, 0).scale(1, .109963362297).translate(.8933333333333338, -.16333333333333336).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.1977635985466668, 0).scale(1, .35648383385).translate(-.06000000000000038, -.5733333333333334).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.8411239989466667, 0).scale(1, .492570189761).translate(.09666666666666686, -.5733333333333334).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.6087503201953334, 0).scale(1, .629163950213).translate(.426666666666667, -.65).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.651891798738, 0).scale(1, .763999469558).translate(.4399999999999996, -.9).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.436889257541, 0).scale(1, .890704573134).translate(.41000000000000036, -1.01).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.256756360368, 0).scale(1, 1.00054640545).translate(.7533333333333332, -.92).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.441052551858, 0).scale(1, .949728135228).translate(.38000000000000017, -1.01).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.656877222401, 0).scale(1, .87341869263).translate(.1433333333333337, -.98).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.929257344636, 0).scale(1, .769902586626).translate(.1600000000000004, -.87).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.29852646588, 0).scale(1, .645533583408).translate(.1600000000000004, -.6966666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.24855571758, 0).scale(1, .501627653499).translate(-.21666666666666667, -.49333333333333335).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.46874035016, 0).scale(1, .345791090982).translate(-.35666666666666674, -.38666666666666666).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.3709501666119999, 0).scale(1, .155904697081).translate(-.16999999999999982, -.10333333333333332).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().scale(0, 0), new lemongine.Matrix4().shear2D(1.195152872886, 0).scale(1, -.180562080812).translate(.3333333333333333, .30333333333333334).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.45210543884, 0).scale(1, -.358124969903).translate(-.45, .35).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.2278472573533332, 0).scale(1, -.528214747607).translate(-.26333333333333353, .5066666666666666).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.28455656218, 0).scale(1, -.68431371291).translate(.0800000000000002, .7100000000000001).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.919547137907, 0).scale(1, -.826637028835).translate(.09666666666666686, .8966666666666666).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.945652991022, 0).scale(1, -.789786667345).translate(.1300000000000002, .9133333333333333).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.979272350726, 0).scale(1, -.751625258974).translate(.11333333333333352, .85).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.00349676506, 0).scale(1, -.718577258951).translate(.1433333333333337, .8200000000000001).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.03905937655, 0).scale(1, -.683234796704).translate(.17333333333333295, .7966666666666666).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.00341399846, 0).scale(1, -.448800546436).translate(.22333333333333297, .5066666666666666).translate(1.5800000000000003, -.08666666666666667)];
    b.h.wing1 = a;
    a = [new lemongine.Matrix4().shear2D(.602376973955, 0).scale(1, -.295701940533).translate(-1.4333333333333333, 1.1400000000000001).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.884725264556, 0).scale(1, -.283854218179).translate(-1.4966666666666668, .7266666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.0020369678333334, 0).scale(1, -.233264638304).translate(-2.0866666666666664, .08666666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.2546435603750001, 0).scale(1, -.0486450428936).translate(-2.58, -.9166666666666666).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.1966825030925, 0).scale(1, .162369865162).translate(-3.033333333333333, -1.45).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.2644458462933332, 0).scale(1, .39782780421).translate(-2.703333333333333, -2.0733333333333333).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.88784154585, 0).scale(1, .631141588381).translate(-2.0933333333333333, -2.856666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.229030574197, 0).scale(1, .839269388199).translate(-.8166666666666667, -3.466666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.121013296765, 0).scale(1, .822003079118).translate(-.03333333333333333, -3.5933333333333333).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.227194425799, 0).scale(1, .805473366656).translate(-.7666666666666667, -3.5).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.34432761329, 0).scale(1, .779107306294).translate(-1.5766666666666667, -3.2633333333333336).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.468434229634, 0).scale(1, .745283121586).translate(-1.9366666666666665, -2.95).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.603238566747, 0).scale(1, .703851543541).translate(-2.296666666666667, -2.606666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.761795854734, 0).scale(1, .652288254301).translate(-3.0633333333333335, -2.17).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.945652991022, 0).scale(1, .595791230196).translate(-3.58, -1.8866666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.3318749515, 0).scale(1, .47913533981).translate(-3.453333333333333, -1.1533333333333333).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.977085673085, 0).scale(1, .354413937828).translate(-2.296666666666667, -.5266666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.58579740118, 0).scale(1, .237858287408).translate(-2.8133333333333335, .07).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.46003560638, 0).scale(1, .100022376884).translate(-3.5966666666666667, .5066666666666666).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(1.59102579769, 0).scale(1, -.0224901034999).translate(-3.393333333333333, 1.1166666666666667).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.983031406214, 0).scale(1, -.13856071442).translate(-3.046666666666667, 1.71).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.85495578948, 0).scale(1, -.245194580569).translate(-3.0166666666666666, 2.29).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.71940571911, 0).scale(1, -.3549838391).translate(-2.6266666666666665, 2.4633333333333334).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.881618592363, 0).scale(1, -.427563309689).translate(-2.3699999999999997, 2.48).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.527240188753, 0).scale(1, -.458212945161).translate(-2.01, 2.48).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.254181316126, 0).scale(1, -.452706609563).translate(-1.3766666666666665, 2.3633333333333337).translate(1.5800000000000003, -.08666666666666667), new lemongine.Matrix4().shear2D(.487732588566, 0).scale(1, -.361315206612).translate(-1.8666666666666667, 1.6266666666666665).translate(1.5800000000000003, -.08666666666666667)];
    b.h.wing2 = a;
    return b;
}(this)
entities.Entity_Mob_EnderDragon.pieces = function (b) {
    b = new haxe.ds.StringMap();
    var a = {
        clip: new lemongine.Rectangle(129, 165, 6, 6),
        movie: "t1",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.neck1 = a;
    a = {
        clip: new lemongine.Rectangle(129, 165, 6, 6),
        movie: "t2",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.neck2 = a;
    a = {
        clip: new lemongine.Rectangle(129, 165, 6, 6),
        movie: "t3",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.neck3 = a;
    a = {
        clip: new lemongine.Rectangle(129, 181, 23, 15),
        movie: "h",
        thisTransform: new lemongine.Matrix4().translate(-.21666666666666667, -.18333333333333332).scale2D(4.412704),
        animated: !1
    };
    b.h.head = a;
    a = {
        clip: new lemongine.Rectangle(152, 181, 12, 3),
        movie: "h",
        thisTransform: new lemongine.Matrix4(),
        animated: !0
    };
    b.h.jaw = a;
    a = {
        clip: new lemongine.Rectangle(137, 190, 8, 4),
        movie: "h",
        thisTransform: new lemongine.Matrix4().translate(-.4666666666666667, -.06666666666666667).scale2D(4.412704),
        animated: !1
    };
    b.h.nose = a;
    a = {
        clip: new lemongine.Rectangle(144, 144, 43, 14),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().translate(.6166666666666667, .11666666666666667).scale2D(4.412704),
        animated: !1
    };
    b.h.body = a;
    a = {
        clip: new lemongine.Rectangle(129, 144, 5, 12),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).rotate2D(.3333333333333333 * Math.PI).translate(.7166666666666667, 1.5766666666666669),
        animated: !1
    };
    b.h.arm = a;
    a = {
        clip: new lemongine.Rectangle(131, 156, 3, 9),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).rotate2D(.08333333333333333 * Math.PI).translate(1.5366666666666668, 2.3266666666666667),
        animated: !1
    };
    b.h.hand = a;
    a = {
        clip: new lemongine.Rectangle(134, 144, 10, 11),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).rotate2D(.25 * Math.PI).translate(5.619999999999999, 1.396666666666667),
        animated: !1
    };
    b.h.leg = a;
    a = {
        clip: new lemongine.Rectangle(136, 155, 8, 14),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).rotate2D(.5 * Math.PI).translate(6.760000000000001, 1.9133333333333336),
        animated: !1
    };
    b.h.calf = a;
    a = {
        clip: new lemongine.Rectangle(141, 169, 3, 12),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).rotate2D(.08333333333333333 * Math.PI).translate(7.669999999999999, 2.2666666666666666),
        animated: !1
    };
    b.h.foot = a;
    a = {
        clip: new lemongine.Rectangle(129, 165, 6, 6),
        movie: "t5",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail1 = a;
    a = {
        clip: new lemongine.Rectangle(129, 165, 6, 6),
        movie: "t6",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail2 = a;
    a = {
        clip: new lemongine.Rectangle(129, 171, 6, 5),
        movie: "t7",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail3 = a;
    a = {
        clip: new lemongine.Rectangle(129, 171, 6, 5),
        movie: "t8",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail4 = a;
    a = {
        clip: new lemongine.Rectangle(129, 171, 6, 5),
        movie: "t9",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail5 = a;
    a = {
        clip: new lemongine.Rectangle(129, 171, 6, 5),
        movie: "t10",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail6 = a;
    a = {
        clip: new lemongine.Rectangle(129, 176, 6, 4),
        movie: "t11",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail7 = a;
    a = {
        clip: new lemongine.Rectangle(129, 176, 6, 4),
        movie: "t12",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail8 = a;
    a = {
        clip: new lemongine.Rectangle(129, 176, 6, 4),
        movie: "t13",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail9 = a;
    a = {
        clip: new lemongine.Rectangle(129, 176, 6, 4),
        movie: "t14",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704),
        animated: !1
    };
    b.h.tail10 = a;
    a = {
        clip: new lemongine.Rectangle(144, 158, 45, 22),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).scale(1, .695694),
        animated: !0
    };
    b.h.wing1 = a;
    a = {
        clip: new lemongine.Rectangle(189, 144, 47, 37),
        movie: "t4",
        thisTransform: new lemongine.Matrix4().scale2D(4.412704).scale(1, .695694),
        animated: !0
    };
    b.h.wing2 = a;
    return b;
}(this)