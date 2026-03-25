lemongine.Vector3 = function (b, a, c) {
    null == c && (c = 0);
    null == a && (a = 0);
    null == b && (b = 0);
    this.x = this.y = this.z = 0;
    this.set(b, a, c);
}
m["lemongine.Vector3"] = lemongine.Vector3
lemongine.Vector3.__name__ = "lemongine.Vector3"
lemongine.Vector3.cross = function (b, a, c) {
    return null != c ? (c.set(b.y * a.z - b.z * a.y, b.z * a.x - b.x * a.z, b.x * a.y - b.y * a.x), c) : new lemongine.Vector3(b.y * a.z - b.z * a.y, b.z * a.x - b.x * a.z, b.x * a.y - b.y * a.x);
}
lemongine.Vector3.prototype = {
    set: function (b, a, c) {
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        this.x = b;
        this.y = a;
        this.z = c;
        return this;
    },
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    normalize: function () {
        var b = this.length();
        this.x /= b;
        this.y /= b;
        this.z /= b;
        return this;
    },
    subtract: function (b) {
        this.x -= b.x;
        this.y -= b.y;
        this.z -= b.z;
        return this;
    },
    clone: function () {
        return new lemongine.Vector3(this.x, this.y, this.z);
    },
    __class__: lemongine.Vector3
}