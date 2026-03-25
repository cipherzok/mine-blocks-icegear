lemongine.Rectangle = function (b, a, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    null == a && (a = 0);
    null == b && (b = 0);
    this.x = this.y = this.width = this.height = this.centerX = this.centerY = 0;
    this.x = b;
    this.y = a;
    this.set_width(c);
    this.set_height(d);
}
m["lemongine.Rectangle"] = lemongine.Rectangle
lemongine.Rectangle.__name__ = "lemongine.Rectangle"
lemongine.Rectangle.prototype = {
    set: function (b, a, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        this.x = b;
        this.y = a;
        this.set_width(c);
        this.set_height(d);
        return this;
    },
    clone: function () {
        return new lemongine.Rectangle(this.x, this.y, this.width, this.height);
    },
    contains: function (b, a) {
        return b >= this.x && a >= this.y && b < this.x + this.width ? a < this.y + this.height : !1;
    },
    containsPoint: function (b) {
        return b.x >= this.x && b.y >= this.y && b.x < this.x + this.width ? b.y < this.y + this.height : !1;
    },
    intersects: function (b) {
        return !(b.get_right() <= this.get_left() || b.get_left() >= this.get_right() || b.get_top() >= this.get_bottom() || b.get_bottom() <= this.get_top());
    },
    intersection: function (b) {
        var a = Math.max(this.get_left(), b.get_left()),
            c = Math.min(this.get_right(), b.get_right()),
            d = Math.max(this.get_top(), b.get_top());
        b = Math.min(this.get_bottom(), b.get_bottom());
        return new lemongine.Rectangle(a, d, Math.max(0, c - a), Math.max(0, b - d));
    },
    translate: function (b, a) {
        this.x += b;
        this.y += a;
        return this;
    },
    get_position: function () {
        null == this._position ? this._position = new lemongine.Point(this.x, this.y) : this._position.set(this.x, this.y);
        return this._position;
    },
    get_size: function () {
        null == this._size ? this._size = new lemongine.Point(this.width, this.height) : this._size.set(this.width, this.height);
        return this._size;
    },
    toLimeRectangle: function () {
        return new lime.math.Rectangle(this.x, this.y, this.width, this.height);
    },
    toArray: function () {
        return [this.x, this.y, this.width, this.height];
    },
    set_width: function (b) {
        0 > b ? (this.x += b, this.width = -b) : this.width = b;
        return b;
    },
    set_height: function (b) {
        0 > b ? (this.y += b, this.height = -b) : this.height = b;
        return b;
    },
    get_left: function () {
        return this.x;
    },
    get_right: function () {
        return this.x + this.width;
    },
    get_top: function () {
        return this.y;
    },
    get_bottom: function () {
        return this.y + this.height;
    },
    get_centerX: function () {
        return this.x + .5 * this.width;
    },
    get_centerY: function () {
        return this.y + .5 * this.height;
    },
    __class__: lemongine.Rectangle
}