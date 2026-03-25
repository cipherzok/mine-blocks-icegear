lime.math.Vector2 = function (b, a) {
    null == a && (a = 0);
    null == b && (b = 0);
    this.x = b;
    this.y = a;
}
m["lime.math.Vector2"] = lime.math.Vector2
lime.math.Vector2.__name__ = "lime.math.Vector2"
lime.math.Vector2.prototype = {
    offset: function (b, a) {
        this.x += b;
        this.y += a;
    },
    __toFlashPoint: function () {
        return null;
    },
    __class__: lime.math.Vector2
}