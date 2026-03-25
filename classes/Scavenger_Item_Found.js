var Scavenger_Item_Found = function (b, a, c, d) {
    null == a && (a = !1);
    this.didParticleEffect = !1;
    this.index = -1;
    this.index = b;
    this.collected = a;
    this.collectedFirst = !1;
    this.score = c;
    this.collectionTime = d;
    this.collectionTimeClient = new Date().getTime();
};
m.Scavenger_Item_Found = Scavenger_Item_Found
Scavenger_Item_Found.__name__ = "Scavenger_Item_Found"
Scavenger_Item_Found.prototype = {
    __class__: Scavenger_Item_Found
}