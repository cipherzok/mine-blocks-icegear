var BlockState = function () {
    this.x = this.y = null;
    this.firstTimes = !1;
};
m.BlockState = BlockState
BlockState.__name__ = "BlockState"
BlockState.fromBlock = function (b, a, c) {
    var d = new BlockState();
    d.type = c.getFG(b, a);
    d.x = b;
    d.y = a;
    b = blocks.Block.getID(b, a);
    d.states1 = c.states.h[b];
    d.states2 = c.states.h[b + "_2"];
    d.states3 = c.states.h[b + "_3"];
    d.firstTimes = c.firstTimes.h[b];
    d.chests = c.chests.h[b];
    d.toSmelt = c.toSmelt.h[b];
    d.toGrow = c.toGrow.h[b];
    d.water = c.water.h[b];
    d.wheat = c.wheat.h[b];
    d.toBrew = c.toBrew.h[b];
    d.signs = c.signs.h[b];
    d.hasSignal = c.hasSignal.h[b];
    return d;
}
BlockState.apply = function (b, a, c, d) {
    null == d && (d = new BlockState());
    b = blocks.Block.getID(b, a);
    if (null != d.states1) {
        a = c.states;
        var f = lemongine.Helpers.clone(d.states1);
        a.h[b] = f;
    } else a = c.states, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
    null != d.states2 ? (a = c.states, f = lemongine.Helpers.clone(d.states2), a.h[b + "_2"] = f) : (a = c.states, f = b + "_2", Object.prototype.hasOwnProperty.call(a.h, f) && delete a.h[f]);
    null != d.states3 ? (a = c.states, f = lemongine.Helpers.clone(d.states3), a.h[b + "_3"] = f) : (a = c.states, f = b + "_3", Object.prototype.hasOwnProperty.call(a.h, f) && delete a.h[f]);
    null != d.firstTimes ? c.firstTimes.h[b] = d.firstTimes : (a = c.firstTimes, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.chests ? (a = c.chests, f = lemongine.Helpers.clone(d.chests), a.h[b] = f) : (a = c.chests, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.toSmelt ? (a = c.toSmelt, f = lemongine.Helpers.clone(d.toSmelt), a.h[b] = f) : (a = c.toSmelt, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.toGrow ? c.toGrow.h[b] = d.toGrow : (a = c.toGrow, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.water ? (a = c.water, f = lemongine.Helpers.clone(d.water), a.h[b] = f) : (a = c.water, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.wheat ? c.wheat.h[b] = d.wheat : (a = c.wheat, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.toBrew ? (a = c.toBrew, f = lemongine.Helpers.clone(d.toBrew), a.h[b] = f) : (a = c.toBrew, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.signs ? c.signs.h[b] = d.signs : (a = c.signs, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    null != d.hasSignal ? (a = c.hasSignal, f = lemongine.Helpers.clone(d.hasSignal), a.h[b] = f) : (a = c.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
    return d;
}
BlockState.prototype = {
    __class__: BlockState
}