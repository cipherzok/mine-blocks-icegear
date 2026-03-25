lime.math.Rectangle = function (b, a, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    null == a && (a = 0);
    null == b && (b = 0);
    this.x = b;
    this.y = a;
    this.width = c;
    this.height = d;
}
m["lime.math.Rectangle"] = lime.math.Rectangle
lime.math.Rectangle.__name__ = "lime.math.Rectangle"
lime.math.Rectangle.prototype = {
    intersection: function (b, a) {
        null == a && (a = new lime.math.Rectangle());
        var c = this.x < b.x ? b.x : this.x,
            d = this.get_right() > b.get_right() ? b.get_right() : this.get_right();
        if (d <= c) return a.setEmpty(), a;
        var f = this.y < b.y ? b.y : this.y;
        b = this.get_bottom() > b.get_bottom() ? b.get_bottom() : this.get_bottom();
        if (b <= f) return a.setEmpty(), a;
        a.x = c;
        a.y = f;
        a.width = d - c;
        a.height = b - f;
        return a;
    },
    offset: function (b, a) {
        this.x += b;
        this.y += a;
    },
    setEmpty: function () {
        this.x = this.y = this.width = this.height = 0;
    },
    setTo: function (b, a, c, d) {
        this.x = b;
        this.y = a;
        this.width = c;
        this.height = d;
    },
    __toFlashRectangle: function () {
        return null;
    },
    get_bottom: function () {
        return this.y + this.height;
    },
    get_right: function () {
        return this.x + this.width;
    },
    __class__: lime.math.Rectangle
}