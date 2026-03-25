renderers.blocks.Q_Bed = function (b, a, c) {
    this.isItem = !1;
    this.colorUV = [];
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Bed"] = renderers.blocks.Q_Bed
renderers.blocks.Q_Bed.__name__ = "renderers.blocks.Q_Bed"
renderers.blocks.Q_Bed.__super__ = renderers.Q_Base
renderers.blocks.Q_Bed.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        this.isItem ? this.updateItem() : this.updateBlock();
    },
    updateBlock: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        if (0 < this.colorUV.length) {
            var b = this.quadPositions[1],
                a = new lemongine.Point(this.textureClipSheets.x, this.textureClipSheets.y),
                c = new lemongine.Point(this.textureClipSheets.width, this.textureClipSheets.height),
                d = new lemongine.Point(1, 1),
                f = new haxe.ds.StringMap();
            f.h.color = this.colorUV;
            this.entity.updateQuad(b, this.destination, a, c, d, null, null, f);
        } else this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClipSheets.x, this.textureClipSheets.y), new lemongine.Point(this.textureClipSheets.width, this.textureClipSheets.height), new lemongine.Point(1, 1));
    },
    updateItem: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(4)), this.quadPositions.push(this.quadPositions[0] + 1), this.quadPositions.push(this.quadPositions[0] + 2), this.quadPositions.push(this.quadPositions[0] + 3));
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y + .25), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(.5, .5));
        this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x + .5, this.destination.y + .25), new lemongine.Point(this.textureClip2.x, this.textureClip2.y), new lemongine.Point(this.textureClip2.width, this.textureClip2.height), new lemongine.Point(.5, .5));
        if (0 < this.colorUV.length) {
            var b = this.entity,
                a = this.quadPositions[2],
                c = new lemongine.Vector3(this.destination.x, this.destination.y + .25),
                d = new lemongine.Point(this.textureClipSheets.x, this.textureClipSheets.y),
                f = new lemongine.Point(this.textureClipSheets.width, this.textureClipSheets.height),
                l = new lemongine.Point(.5, .5),
                h = new haxe.ds.StringMap();
            h.h.color = this.colorUV;
            b.updateQuad(a, c, d, f, l, null, null, h);
            b = this.entity;
            a = this.quadPositions[3];
            c = new lemongine.Vector3(this.destination.x + .5, this.destination.y + .25);
            d = new lemongine.Point(this.textureClipSheets2.x, this.textureClipSheets2.y);
            f = new lemongine.Point(this.textureClipSheets2.width, this.textureClipSheets2.height);
            l = new lemongine.Point(.5, .5);
            h = new haxe.ds.StringMap();
            h.h.color = this.colorUV;
            b.updateQuad(a, c, d, f, l, null, null, h);
        } else this.entity.updateQuad(this.quadPositions[2], new lemongine.Vector3(this.destination.x, this.destination.y + .25), new lemongine.Point(this.textureClipSheets.x, this.textureClipSheets.y), new lemongine.Point(this.textureClipSheets.width, this.textureClipSheets.height), new lemongine.Point(.5, .5)), this.entity.updateQuad(this.quadPositions[3], new lemongine.Vector3(this.destination.x + .5, this.destination.y + .25), new lemongine.Point(this.textureClipSheets2.x, this.textureClipSheets2.y), new lemongine.Point(this.textureClipSheets2.width, this.textureClipSheets2.height), new lemongine.Point(.5, .5));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        null != b.states1 && Object.prototype.hasOwnProperty.call(Colors.colors.h, b.states1) && (this.colorUV = lemongine.Mathz.repeatArray([Colors.colors.h[b.states1].h.r, Colors.colors.h[b.states1].h.g, Colors.colors.h[b.states1].h.b, 1], 6));
        this.textureClip = Textures.getTexture(this.textureID, "frame_" + ("bed1" == b.type ? "left" : "right"));
        this.textureClipSheets = Textures.getTexture(this.textureID, "sheets_" + ("bed1" == b.type ? "left" : "right"));
        this.isItem = !1;
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.colorUV = lemongine.Mathz.repeatArray([Colors.colors.h[b].h.r, Colors.colors.h[b].h.g, Colors.colors.h[b].h.b, 1], 6)));
        this.textureClip = Textures.getTexture(this.textureID, "frame_left");
        this.textureClipSheets = Textures.getTexture(this.textureID, "sheets_left");
        this.textureClip2 = Textures.getTexture(this.textureID, "frame_right");
        this.textureClipSheets2 = Textures.getTexture(this.textureID, "sheets_right");
        this.isItem = !0;
        return this;
    },
    __class__: renderers.blocks.Q_Bed
})