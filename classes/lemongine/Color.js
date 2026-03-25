lemongine.Color = function (b) {
    null == b && (b = 0);
    this.hexUpdated = !1;
    this.fromHex(b);
}
m["lemongine.Color"] = lemongine.Color
lemongine.Color.__name__ = "lemongine.Color"
lemongine.Color.ARBGtoRGBA = function (b) {
    return (b << 8) + (b >>> 24 & 255);
}
lemongine.Color.prototype = {
    fromHex: function (b) {
        this.set_a(b >>> 24);
        this.set_r(b >>> 16 & 255);
        this.set_g(b >>> 8 & 255);
        this.set_b(b & 255);
        this._hex = b;
        this.hexUpdated = !0;
        return this;
    },
    fromRGB: function (b, a, c, d) {
        null == d && (d = 1);
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        this.set_a(255 * d | 0);
        this.set_r(255 * b | 0);
        this.set_g(255 * a | 0);
        this.set_b(255 * c | 0);
        this.setHex();
        return this;
    },
    toFloatArray: function () {
        return [G.toFloat(this.r) / G.toFloat(255), G.toFloat(this.g) / G.toFloat(255), G.toFloat(this.b) / G.toFloat(255), G.toFloat(this.a) / G.toFloat(255)];
    },
    setHex: function () {
        this.hexUpdated || (this.hexUpdated = !0, this._hex = 16777216 * this.a + 65536 * this.r + 256 * this.g + this.b);
    },
    getHexString: function (b) {
        null == b && (b = !1);
        return b ? StringTools.hex(16777216 * this.a + 65536 * this.r + 256 * this.g + this.b, 8) : StringTools.hex(65536 * this.r + 256 * this.g + this.b, 6);
    },
    equals: function (b) {
        return null == b ? !1 : b.r == this.r && b.g == this.g && b.b == this.b ? b.a == this.a : !1;
    },
    set_r: function (b) {
        this.r = b;
        this.hexUpdated = !1;
        return b;
    },
    set_g: function (b) {
        this.g = b;
        this.hexUpdated = !1;
        return b;
    },
    set_b: function (b) {
        this.b = b;
        this.hexUpdated = !1;
        return b;
    },
    set_a: function (b) {
        this.a = b;
        this.hexUpdated = !1;
        return b;
    },
    get_hex: function () {
        this.setHex();
        return this._hex;
    },
    set_hex: function (b) {
        this.fromHex(b);
        return this._hex;
    },
    __class__: lemongine.Color
}
lemongine.Color.white = new lemongine.Color(-1)
lemongine.Color.black = new lemongine.Color(-16777216)
lemongine.Color.clear = new lemongine.Color(0)