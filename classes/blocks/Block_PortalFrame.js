blocks.Block_PortalFrame = function (b, a, c, d, f) {
    this.portalQuad = -1;
    this.currentFrame = 1;
    this.cd = 0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_PortalFrame"] = blocks.Block_PortalFrame
blocks.Block_PortalFrame.__name__ = "blocks.Block_PortalFrame"
blocks.Block_PortalFrame.__super__ = blocks.Block
blocks.Block_PortalFrame.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    destroy: function () {
        this.destroyPortal();
        blocks.Block.prototype.destroy.call(this);
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        "eoe" == this.world.get_selectedInventoryItemType() && 2 != this.blockState.states1 ? (1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.world.states.h[this.blockID] = this.blockState.states1 = 2) : this.game.isShiftClickAndContinue = !0;
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (2 == this.blockState.states1) {
            var b = !1;
            "pf" == this.world.getFG(this.x - 1, this.y) && 2 == this.world.states.h["blockX" + (this.x - 1) + "Y" + this.y] && "pf" == this.world.getFG(this.x - 2, this.y) && 2 == this.world.states.h["blockX" + (this.x - 2) + "Y" + this.y] && "pf" == this.world.getFG(this.x - 3, this.y) && 2 == this.world.states.h["blockX" + (this.x - 3) + "Y" + this.y] && "pf" == this.world.getFG(this.x + 1, this.y) && 2 == this.world.states.h["blockX" + (this.x + 1) + "Y" + this.y] && "pf" == this.world.getFG(this.x + 2, this.y) && 2 == this.world.states.h["blockX" + (this.x + 2) + "Y" + this.y] && "pf" == this.world.getFG(this.x + 3, this.y) && 2 == this.world.states.h["blockX" + (this.x + 3) + "Y" + this.y] && (3 != this.currentFrame && (this.game.unlockAchieve(35), this.currentFrame = 3, null != this.renderer && this.renderer.fromBlock(this.blockState).update(), this.generatePortal()), b = !0, this.world.worldX > this.x - 3 && this.world.worldX < this.x + 4 && -this.world.worldY < this.y + 4 && -this.world.worldY >= this.y ? (this.cd++, 100 <= this.cd && this.game.usePortalEnd()) : this.cd = 0);
            b || 2 == this.currentFrame || (this.currentFrame = 2, null != this.renderer && this.renderer.fromBlock(this.blockState).update(), this.destroyPortal());
        } else 1 != this.currentFrame && (this.currentFrame = 1, null != this.renderer && this.renderer.fromBlock(this.blockState).update(), this.destroyPortal());
        -1 != this.portalQuad && this.updatePortal();
    },
    generatePortal: function () {
        if (null == this.entity) if (null == this.game.entityPools.h.endportals) {
            var b = this.game.entityPools,
                a = lemongine.AssetManager.getImage("end_portal"),
                c = shader.TwoTexture.getShader(shader.BlendMode.NORMAL),
                d = new haxe.ds.StringMap(),
                f = lemongine.Mathz.repeatArray([0], 6);
            d.h.texBlend = f;
            f = lemongine.Mathz.repeatArray([1], 24);
            d.h.color = f;
            f = lemongine.Mathz.repeatArray([0], 24);
            d.h.colorOffset = f;
            d = new EntityPool("endportals", new QuadPoolEntity_MatrixState(a, null, c, d), 1);
            b.h.endportals = d;
            this.entity = this.game.entityPools.h.endportals.entity;
            this.entity.isTransparent = !0;
            this.entity.layer = 0;
            this.entity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
            this.entity.setTextureBuffer("texture2", lemongine.AssetManager.getImage("ender_bg"));
            this.entity.setUniform("texSize2", [lemongine.AssetManager.getImage("ender_bg").width, lemongine.AssetManager.getImage("ender_bg").height]);
        } else this.entity = this.game.entityPools.h.endportals.entity;
        this.portalQuad = this.entity.nearestConsecutiveEmpty(4);
        b = this.entity;
        a = this.portalQuad;
        c = new lemongine.Vector3(this.x - 3, -(this.y + 4));
        var l = new lemongine.Point(),
            p = new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("ender_bg").width), G.toFloat(lemongine.AssetManager.getImage("ender_bg").height)),
            h = new lemongine.Point(7, 3);
        d = new haxe.ds.StringMap();
        f = lemongine.Mathz.repeatArray([1], 6);
        d.h.texBlend = f;
        b.updateQuad(a, c, l, p, h, null, [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], d);
    },
    updatePortal: function () {
        var b = this.entity,
            a = this.portalQuad + 1,
            c = new lemongine.Vector3(this.x - 3, -(this.y + 4)),
            d = new lemongine.Point(0, G.toFloat(2 * lemongine.AssetManager.getImage("end_portal").height) / G.toFloat(3)),
            f = new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("end_portal").width), G.toFloat(lemongine.AssetManager.getImage("end_portal").height) / G.toFloat(3)),
            l = new lemongine.Point(7, 3),
            p = [-this.world.tick / 500, 0, -this.world.tick / 500, 4, -this.world.tick / 500 + 2.1538461538461537, 0, -this.world.tick / 500 + 2.1538461538461537, 0, -this.world.tick / 500, 4, -this.world.tick / 500 + 2.1538461538461537, 4],
            h = new haxe.ds.StringMap(),
            n = lemongine.Mathz.repeatArray([0], 6);
        h.h.texBlend = n;
        b.updateQuad(a, c, d, f, l, null, p, h);
        b = this.entity;
        a = this.portalQuad + 2;
        c = new lemongine.Vector3(this.x - 3, -(this.y + 4));
        d = new lemongine.Point(0, G.toFloat(lemongine.AssetManager.getImage("end_portal").height) / G.toFloat(3));
        f = new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("end_portal").width), G.toFloat(lemongine.AssetManager.getImage("end_portal").height) / G.toFloat(3));
        l = new lemongine.Point(7, 3);
        p = [-this.world.tick / 500, 0, -this.world.tick / 500, 2, -this.world.tick / 500 + 1.0769230769230769, 0, -this.world.tick / 500 + 1.0769230769230769, 0, -this.world.tick / 500, 2, -this.world.tick / 500 + 1.0769230769230769, 2];
        h = new haxe.ds.StringMap();
        n = lemongine.Mathz.repeatArray([0], 6);
        h.h.texBlend = n;
        b.updateQuad(a, c, d, f, l, null, p, h);
        b = this.entity;
        a = this.portalQuad + 3;
        c = new lemongine.Vector3(this.x - 3, -(this.y + 4));
        d = new lemongine.Point(0, 0);
        f = new lemongine.Point(G.toFloat(lemongine.AssetManager.getImage("end_portal").width), G.toFloat(lemongine.AssetManager.getImage("end_portal").height) / G.toFloat(3));
        l = new lemongine.Point(7, 3);
        p = [-this.world.tick / 500, 0, -this.world.tick / 500, 1, -this.world.tick / 500 + .5384615384615384, 0, -this.world.tick / 500 + .5384615384615384, 0, -this.world.tick / 500, 1, -this.world.tick / 500 + .5384615384615384, 1];
        h = new haxe.ds.StringMap();
        n = lemongine.Mathz.repeatArray([0], 6);
        h.h.texBlend = n;
        b.updateQuad(a, c, d, f, l, null, p, h);
    },
    destroyPortal: function () {
        -1 != this.portalQuad && (this.entity.removeQuad(this.portalQuad), this.entity.removeQuad(this.portalQuad + 1), this.entity.removeQuad(this.portalQuad + 2), this.entity.removeQuad(this.portalQuad + 3), this.portalQuad = -1);
    },
    __class__: blocks.Block_PortalFrame
})