lime.math.Vector4 = function (b, a, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    null == a && (a = 0);
    null == b && (b = 0);
    this.w = d;
    this.x = b;
    this.y = a;
    this.z = c;
}
m["lime.math.Vector4"] = lime.math.Vector4
lime.math.Vector4.__name__ = "lime.math.Vector4"
lime.math.Vector4.prototype = {
    __class__: lime.math.Vector4
}