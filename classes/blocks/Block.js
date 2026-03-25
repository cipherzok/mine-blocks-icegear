blocks.Block = function (b, a, c, d, f) {
    this.mining = !1;
    this.miningCountdown = this.goingIn = -1;
    this.x = b;
    this.y = a;
    this.blockID = blocks.Block.getID(b, a);
    this.game = c;
    this.world = d;
    this.worldChunk = f;
    this.blockState = BlockState.fromBlock(b, a, d);
    this.fg = d.getFG(b, a);
    this.init();
}
m["blocks.Block"] = blocks.Block
blocks.Block.__name__ = "blocks.Block"
blocks.Block.getID = function (b, a) {
    return "blockX" + b + "Y" + a;
}
blocks.Block.prototype = {
    init: function () {},
    getBlockData: function (b) {
        return BlockData.get(this.fg, b);
    },
    renderInit: function (b, a, c) {
        var d = this.getBlockData("renderer");
        null == d && (d = renderers.Q_Base);
        this.renderer = Type.createInstance(d, [b, a, c]).fromBlock(this.blockState);
    },
    render: function (b, a, c) {
        null == this.renderer && this.renderInit(c, b, a);
        "air" != this.fg && null != this.renderChunk && this.renderChunk.blocksRendering++;
        this.renderer.update();
        this.renderer.hasFrameEvent && this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        null != this.renderer && this.renderer.hasFrameEvent && this.renderer.update();
    },
    updateEvent: function () {},
    mouseOverEvent: function () {},
    mouseOutEvent: function () {},
    punchEvent: function () {},
    useEvent: function () {},
    destroy: function () {
        null != this.renderer && this.renderer.destroy();
        "air" != this.fg && null != this.renderChunk && this.renderChunk.blocksRendering--;
        this.worldChunk.unregisterBlockEventFrame(this);
    },
    reload: function () {
        this.worldChunk.createBlock(this.x, this.y);
    },
    gotoAndStop: function (b) {
        "mining" != b && 2 != b || this.worldChunk.registerBlockEventMine(this);
        1 == b && (this.miningCountdown = -1, this.mining = !1, this.goingIn = -1, this.worldChunk.unregisterBlockEventMine(this));
    },
    onMining: function () {
        1 == this.world.tick % (.52 * Main.Instance.get_fps()) && this.game.blockSound(this.x, this.y, this.x - this.world.worldX, -this.y - this.world.worldY);
        this.punchEvent();
        this.mining = !0;
        this.game.currentlyMining = this.fg;
        if (1 == (6 * Math.random() | 0)) {
            var b = this.game,
                a = new lemongine.Point(this.x + .5, 0),
                c = new lemongine.Point(-this.y - .5, 0),
                d = new haxe.ds.StringMap(),
                f = this.game.getBlockColor(this.x, this.y);
            d.h.color = f;
            b.addParticles("mining", 0, 4, a, c, !1, d);
        }
        this.game.placeDelay = 0;
        if (0 != this.game.inventario.currentFrame || 0 == this.game.mouseD || this.game.closestMinableBlock[0] != this.x || this.game.closestMinableBlock[1] != this.y || this.game.currentlyMiningBlock[0] != this.x || this.game.currentlyMiningBlock[1] != this.y) this.game.miningAnimation = !1, this.game.currentlyMining = "", this.game.currentlyMiningBlock = [-1E4, -1E4], this.gotoAndStop(1);else if (this.game.miningAnimation = !0, 0 < this.miningCountdown) this.miningCountdown--, this.game.renderCracks(this.x, this.y, 1 - this.miningCountdown / this.goingIn);else {
            if (0 == Math.floor(this.miningCountdown)) {
                if (0 != this.world.gamemode || this.goingIn > .5 * Main.Instance.get_fps()) this.game.hasMined = !0;
                this.goingIn = this.miningCountdown = -1;
                this.game.miningAnimation = !1;
                this.game.updateAround(this.x, this.y, !1);
                this.game.mineBlock(this.x, this.y, !1, !1);
            } else this.game.miningAnimation = !1;
            this.gotoAndStop(1);
        }
    },
    addDrop: function (b, a, c, d) {
        null == c && (c = 0);
        null == a && (a = 1);
        null == b && (b = this.fg);
        this.game.addDrop(b, this.x + .5, -this.y + .5, a, c, d);
    },
    inter: function () {},
    updateSignal: function () {},
    abortSignalz: function () {},
    updateState: function () {},
    __class__: blocks.Block
}