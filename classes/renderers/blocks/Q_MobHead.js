renderers.blocks.Q_MobHead = function (b, a, c) {
    this.isItem = !1;
    this.dragonMPosition = 0;
    this.flipped = !1;
    this.variation = "default";
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_MobHead"] = renderers.blocks.Q_MobHead
renderers.blocks.Q_MobHead.__name__ = "renderers.blocks.Q_MobHead"
renderers.blocks.Q_MobHead.__super__ = renderers.Q_Base
renderers.blocks.Q_MobHead.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (0 == this.quadPositions.length) {
            if ("enderdragon" == this.variation) {
                var b = this.entity.nearestConsecutiveEmpty(3);
                this.quadPositions.push(b);
                this.quadPositions.push(b + 1);
                this.quadPositions.push(b + 2);
            } else this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        } else if (!this.isItem) {
            this.frameEvent();
            return;
        }
        b = this.destination.x;
        var a = this.destination.y;
        if ("enderdragon" == this.variation) {
            if (this.hasFrameEvent = !0, this.jawMatrix = new lemongine.Matrix4(), this.pos = Textures.getTexture(this.textureID, this.variation + "_base"), this.posJaw = Textures.getTexture(this.textureID, this.variation + "_jaw"), this.posNose = Textures.getTexture(this.textureID, this.variation + "_nose"), this.flipped) {
                var c = this.pos.x + this.pos.width;
                this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(b - .875, a), new lemongine.Point(c, this.pos.y), new lemongine.Point(-this.pos.width, this.pos.height), new lemongine.Point(2, 1));
                this.frameEvent();
                c = this.posNose.x + this.posNose.width;
                this.entity.updateQuad(this.quadPositions[2], new lemongine.Vector3(b - .875 + 1, a), new lemongine.Point(c, this.posNose.y), new lemongine.Point(-this.posNose.width, this.posNose.height), new lemongine.Point(1, 1));
            } else this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(b - .125, a), new lemongine.Point(this.pos.x, this.pos.y), new lemongine.Point(this.pos.width, this.pos.height), new lemongine.Point(2, 1)), this.frameEvent(), this.entity.updateQuad(this.quadPositions[2], new lemongine.Vector3(b - .125, a), new lemongine.Point(this.posNose.x, this.posNose.y), new lemongine.Point(this.posNose.width, this.posNose.height), new lemongine.Point(1, 1));
        } else this.loadFromTexture(this.variation);
    },
    fromBlock: function (b) {
        var a = this;
        this.setBlockTextureID(b.type);
        var c = this.variation = "default";
        null != b.states1 && (this.variation = c = b.states1);
        switch (this.variation) {
        case "creeper":
        case "default":
        case "enderdragon":
        case "skeleton":
        case "zombie":
            break;
        default:
            this.variation = "default", Main.Instance.game.getMobHead(c, function () {
                a.variation = c;
                a.loadFromTexture(c);
            }, null, function () {
                c = a.variation = "default";
                a.loadFromTexture("default");
            });
        }
        this.flipped = !1;
        null != b.states2 && (this.flipped = 2 == b.states2);
        this.isItem = !1;
        this.worldLocation = new lemongine.Point(b.x, b.y);
        return this;
    },
    fromItem: function (b) {
        var a = this;
        this.setBlockTextureID(b[0]);
        var c = this.variation,
            d = this.variation = "default";
        null != b[3] && (this.variation = d = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type);
        c != this.variation && this.destroy();
        switch (this.variation) {
        case "creeper":
        case "default":
        case "enderdragon":
        case "skeleton":
        case "zombie":
            break;
        default:
            this.variation = "default", Main.Instance.game.getMobHead(d, function () {
                a.variation = d;
                a.destroy();
                a.loadFromTexture(d);
            }, null, function () {
                d = a.variation = "default";
                a.destroy();
                a.loadFromTexture("default");
            });
        }
        this.isItem = !0;
        this.dragonMPosition = 0;
        this.flipped = !1;
        return this;
    },
    updateMouth: function (b) {
        null == b && (b = 0);
        this.dragonMPosition = 50 * b;
        this.frameEvent();
    },
    loadFromTexture: function (b) {
        if (0 != this.quadPositions.length) if (b = Textures.getTexture(this.textureID, b), this.flipped) {
            var a = b.x + b.width,
                c = 1 / b.width * b.height * 1.4976;
            this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x - .24880000000000002, this.destination.y + (1 - b.height / b.width) - b.height / b.width * .49760000000000004), new lemongine.Point(a, b.y), new lemongine.Point(-b.width, b.height), new lemongine.Point(1.4976, c));
        } else a = 1 / b.width * b.height * 1.4976, this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x - .24880000000000002, this.destination.y + (1 - b.height / b.width) - b.height / b.width * .49760000000000004), new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1.4976, a));
    },
    frameEvent: function () {
        if ("enderdragon" == this.variation) {
            if (null != this.worldLocation) {
                if (0 < Main.Instance.game.world.getSignal(this.worldLocation.x, this.worldLocation.y - 1) || 0 < Main.Instance.game.world.getSignal(this.worldLocation.x + (this.flipped ? 1 : -1), this.worldLocation.y)) {
                    var b = Math.max(Main.Instance.game.world.getSignal(this.worldLocation.x, this.worldLocation.y - 1), Main.Instance.game.world.getSignal(this.worldLocation.x + (this.flipped ? 1 : -1), this.worldLocation.y));
                    this.dragonMPosition += b / 8;
                } else 0 != Math.floor(this.dragonMPosition) && (this.dragonMPosition = 25 > this.dragonMPosition ? this.dragonMPosition - .5 : this.dragonMPosition + .5);
                50 <= this.dragonMPosition && (this.dragonMPosition %= 50);
            }
            if (this.flipped) {
                this.jawMatrix.reset().scale(1, 1).translate(-.25, -.875).rotate(-.08333333333333333 * Math.PI * (.5 * Math.sin(this.dragonMPosition / 50 * Math.PI * 2 + 3 * Math.PI / 2) + .5), new lemongine.Vector3(0, 0, 1)).translate(.25, .875).translate(this.destination.x - .875 + 1, this.destination.y);
                b = this.jawMatrix.apply(new lemongine.Vector3());
                var a = this.jawMatrix.apply(new lemongine.Vector3(0, 1)),
                    c = this.jawMatrix.apply(new lemongine.Vector3(1, 0)),
                    d = this.jawMatrix.apply(new lemongine.Vector3(1, 1));
                this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(this.posJaw.x + this.posJaw.width, this.posJaw.y), new lemongine.Point(-this.posJaw.width, this.posJaw.height), null, [b.x, b.y, 0, a.x, a.y, 0, c.x, c.y, 0, c.x, c.y, 0, a.x, a.y, 0, d.x, d.y, 0]);
            } else this.jawMatrix.reset().scale(1, 1).translate(-.75, -.875).rotate(.08333333333333333 * Math.PI * (.5 * Math.sin(this.dragonMPosition / 50 * Math.PI * 2 + 3 * Math.PI / 2) + .5), new lemongine.Vector3(0, 0, 1)).translate(.75, .875).translate(this.destination.x - .125, this.destination.y), b = this.jawMatrix.apply(new lemongine.Vector3()), a = this.jawMatrix.apply(new lemongine.Vector3(0, 1)), c = this.jawMatrix.apply(new lemongine.Vector3(1, 0)), d = this.jawMatrix.apply(new lemongine.Vector3(1, 1)), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(this.posJaw.x, this.posJaw.y), new lemongine.Point(this.posJaw.width, this.posJaw.height), null, [b.x, b.y, 0, a.x, a.y, 0, c.x, c.y, 0, c.x, c.y, 0, a.x, a.y, 0, d.x, d.y, 0]);
        }
    },
    __class__: renderers.blocks.Q_MobHead
})