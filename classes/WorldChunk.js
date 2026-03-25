var WorldChunk = function (b, a, c) {
    this.blockEventsMineArray = [];
    this.blockEventsMine = new haxe.ds.ObjectMap();
    this.blockEventsFrameArray = [];
    this.blockEventsFrame = new haxe.ds.ObjectMap();
    this.tiles = [];
    this.chunkX = b;
    this.chunkY = a;
    this.world = c;
    this.tiles[0] = [];
    this.createBlock(8 * b, 8 * a, !1);
    this.createBlock(8 * b, 8 * a + 1, !1);
    this.createBlock(8 * b, 8 * a + 2, !1);
    this.createBlock(8 * b, 8 * a + 3, !1);
    this.createBlock(8 * b, 8 * a + 4, !1);
    this.createBlock(8 * b, 8 * a + 5, !1);
    this.createBlock(8 * b, 8 * a + 6, !1);
    this.createBlock(8 * b, 8 * a + 7, !1);
    this.tiles[1] = [];
    this.createBlock(8 * b + 1, 8 * a, !1);
    this.createBlock(8 * b + 1, 8 * a + 1, !1);
    this.createBlock(8 * b + 1, 8 * a + 2, !1);
    this.createBlock(8 * b + 1, 8 * a + 3, !1);
    this.createBlock(8 * b + 1, 8 * a + 4, !1);
    this.createBlock(8 * b + 1, 8 * a + 5, !1);
    this.createBlock(8 * b + 1, 8 * a + 6, !1);
    this.createBlock(8 * b + 1, 8 * a + 7, !1);
    this.tiles[2] = [];
    this.createBlock(8 * b + 2, 8 * a, !1);
    this.createBlock(8 * b + 2, 8 * a + 1, !1);
    this.createBlock(8 * b + 2, 8 * a + 2, !1);
    this.createBlock(8 * b + 2, 8 * a + 3, !1);
    this.createBlock(8 * b + 2, 8 * a + 4, !1);
    this.createBlock(8 * b + 2, 8 * a + 5, !1);
    this.createBlock(8 * b + 2, 8 * a + 6, !1);
    this.createBlock(8 * b + 2, 8 * a + 7, !1);
    this.tiles[3] = [];
    this.createBlock(8 * b + 3, 8 * a, !1);
    this.createBlock(8 * b + 3, 8 * a + 1, !1);
    this.createBlock(8 * b + 3, 8 * a + 2, !1);
    this.createBlock(8 * b + 3, 8 * a + 3, !1);
    this.createBlock(8 * b + 3, 8 * a + 4, !1);
    this.createBlock(8 * b + 3, 8 * a + 5, !1);
    this.createBlock(8 * b + 3, 8 * a + 6, !1);
    this.createBlock(8 * b + 3, 8 * a + 7, !1);
    this.tiles[4] = [];
    this.createBlock(8 * b + 4, 8 * a, !1);
    this.createBlock(8 * b + 4, 8 * a + 1, !1);
    this.createBlock(8 * b + 4, 8 * a + 2, !1);
    this.createBlock(8 * b + 4, 8 * a + 3, !1);
    this.createBlock(8 * b + 4, 8 * a + 4, !1);
    this.createBlock(8 * b + 4, 8 * a + 5, !1);
    this.createBlock(8 * b + 4, 8 * a + 6, !1);
    this.createBlock(8 * b + 4, 8 * a + 7, !1);
    this.tiles[5] = [];
    this.createBlock(8 * b + 5, 8 * a, !1);
    this.createBlock(8 * b + 5, 8 * a + 1, !1);
    this.createBlock(8 * b + 5, 8 * a + 2, !1);
    this.createBlock(8 * b + 5, 8 * a + 3, !1);
    this.createBlock(8 * b + 5, 8 * a + 4, !1);
    this.createBlock(8 * b + 5, 8 * a + 5, !1);
    this.createBlock(8 * b + 5, 8 * a + 6, !1);
    this.createBlock(8 * b + 5, 8 * a + 7, !1);
    this.tiles[6] = [];
    this.createBlock(8 * b + 6, 8 * a, !1);
    this.createBlock(8 * b + 6, 8 * a + 1, !1);
    this.createBlock(8 * b + 6, 8 * a + 2, !1);
    this.createBlock(8 * b + 6, 8 * a + 3, !1);
    this.createBlock(8 * b + 6, 8 * a + 4, !1);
    this.createBlock(8 * b + 6, 8 * a + 5, !1);
    this.createBlock(8 * b + 6, 8 * a + 6, !1);
    this.createBlock(8 * b + 6, 8 * a + 7, !1);
    this.tiles[7] = [];
    this.createBlock(8 * b + 7, 8 * a, !1);
    this.createBlock(8 * b + 7, 8 * a + 1, !1);
    this.createBlock(8 * b + 7, 8 * a + 2, !1);
    this.createBlock(8 * b + 7, 8 * a + 3, !1);
    this.createBlock(8 * b + 7, 8 * a + 4, !1);
    this.createBlock(8 * b + 7, 8 * a + 5, !1);
    this.createBlock(8 * b + 7, 8 * a + 6, !1);
    this.createBlock(8 * b + 7, 8 * a + 7, !1);
};
m.WorldChunk = WorldChunk
WorldChunk.__name__ = "WorldChunk"
WorldChunk.prototype = {
    createBlock: function (b, a, c) {
        null == c && (c = !0);
        var d = b - 8 * this.chunkX,
            f = a - 8 * this.chunkY;
        if (0 > d || 8 <= d || 0 > f || 8 <= f) haxe.Log.trace("ERROR: Block (" + b + ", " + a + ") does not belong to chunk (" + this.chunkX + ", " + this.chunkY + ")", {
            fileName: "src/WorldChunk.hx",
            lineNumber: 34,
            className: "WorldChunk",
            methodName: "createBlock"
        });else {
            var g = BlockData.get(this.world.getFG(b, a), "constructor");
            null == g && (g = blocks.Block);
            null != this.tiles[d][f] && this.tiles[d][f].destroy();
            this.tiles[d][f] = Type.createInstance(g, [b, a, Main.Instance.game, this.world, this]);
            c && Main.Instance.game.renderBlock(b, a);
        }
    },
    registerBlockEventFrame: function (b) {
        null == this.blockEventsFrame.h.__keys__[b.__id__] && (this.blockEventsFrame.set(b, !0), this.blockEventsFrameArray.push(b));
    },
    unregisterBlockEventFrame: function (b) {
        this.blockEventsFrame.remove(b);
    },
    registerBlockEventMine: function (b) {
        null == this.blockEventsMine.h.__keys__[b.__id__] && (this.blockEventsMine.set(b, !0), this.blockEventsMineArray.push(b));
    },
    unregisterBlockEventMine: function (b) {
        this.blockEventsMine.remove(b);
    },
    runBlockEventsFrame: function () {
        for (var b = 0; b < this.blockEventsFrameArray.length;) null == this.blockEventsFrameArray[b] || null == this.blockEventsFrame.h.__keys__[this.blockEventsFrameArray[b].__id__] ? this.blockEventsFrameArray.splice(b, 1) : (this.blockEventsFrameArray[b].frameEvent(), ++b);
        for (b = 0; b < this.blockEventsMineArray.length;) null == this.blockEventsMineArray[b] || null == this.blockEventsMine.h.__keys__[this.blockEventsMineArray[b].__id__] ? this.blockEventsMineArray.splice(b, 1) : (this.blockEventsMineArray[b].onMining(), ++b);
    },
    __class__: WorldChunk
}