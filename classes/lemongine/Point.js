lemongine.Point = function (b, a) {
    null == a && (a = 0);
    null == b && (b = 0);
    this.x = this.y = 0;
    this.x = b;
    this.y = a;
}
m["lemongine.Point"] = lemongine.Point
lemongine.Point.__name__ = "lemongine.Point"
lemongine.Point.prototype = {
    set: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 0);
        this.x = b;
        this.y = a;
        return this;
    },
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    normalize: function () {
        var b = this.length();
        this.x /= b;
        this.y /= b;
        return this;
    },
    multiply: function (b) {
        this.x *= b;
        this.y *= b;
        return this;
    },
    add: function (b) {
        this.x += b.x;
        this.y += b.y;
        return this;
    },
    distanceTo: function (b) {
        return Math.sqrt((this.x - b.x) * (this.x - b.x) + (this.y - b.y) * (this.y - b.y));
    },
    toLimeVector: function () {
        return new lime.math.Vector2(this.x, this.y);
    },
    __class__: lemongine.Point
}