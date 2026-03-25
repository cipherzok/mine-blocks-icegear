lemongine.Matrix4 = function (b) {
    this.values = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    null != b && this.set(b);
}
m["lemongine.Matrix4"] = lemongine.Matrix4
lemongine.Matrix4.__name__ = "lemongine.Matrix4"
lemongine.Matrix4.prototype = {
    reset: function () {
        this.values[0] = lemongine.Matrix4.identity.values[0];
        this.values[1] = lemongine.Matrix4.identity.values[1];
        this.values[2] = lemongine.Matrix4.identity.values[2];
        this.values[3] = lemongine.Matrix4.identity.values[3];
        this.values[4] = lemongine.Matrix4.identity.values[4];
        this.values[5] = lemongine.Matrix4.identity.values[5];
        this.values[6] = lemongine.Matrix4.identity.values[6];
        this.values[7] = lemongine.Matrix4.identity.values[7];
        this.values[8] = lemongine.Matrix4.identity.values[8];
        this.values[9] = lemongine.Matrix4.identity.values[9];
        this.values[10] = lemongine.Matrix4.identity.values[10];
        this.values[11] = lemongine.Matrix4.identity.values[11];
        this.values[12] = lemongine.Matrix4.identity.values[12];
        this.values[13] = lemongine.Matrix4.identity.values[13];
        this.values[14] = lemongine.Matrix4.identity.values[14];
        this.values[15] = lemongine.Matrix4.identity.values[15];
        return this;
    },
    rotate: function (b, a) {
        a.normalize();
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = a.x,
            f = a.y;
        a = a.z;
        return this.multiply([c + d * d * (1 - c), d * f * (1 - c) - a * b, d * a * (1 - c) + f * b, 0, f * d * (1 - c) + a * b, c + f * f * (1 - c), f * a * (1 - c) - d * b, 0, a * d * (1 - c) - f * b, a * f * (1 - c) + d * b, c + a * a * (1 - c), 0, 0, 0, 0, 1]);
    },
    rotate2D: function (b, a) {
        null == a && (a = !1);
        var c = Math.cos(b);
        b = Math.sin(b);
        a = a ? -1 : 1;
        return this.multiply([c, -a * b, 0, 0, a * b, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    },
    translate: function (b, a, c) {
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        return this.multiply([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, a, c, 1]);
    },
    setPosition: function (b, a, c) {
        null == c && (c = 1);
        null == a && (a = 1);
        null == b && (b = 1);
        this.values[12] = b;
        this.values[13] = a;
        this.values[14] = c;
        return this;
    },
    scale: function (b, a, c) {
        null == c && (c = 1);
        null == a && (a = 1);
        null == b && (b = 1);
        return this.multiply([b, 0, 0, 0, 0, a, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]);
    },
    scale2D: function (b) {
        null == b && (b = 1);
        return this.multiply([b, 0, 0, 0, 0, b, 0, 0, 0, 0, b, 0, 0, 0, 0, 1]);
    },
    shear: function (b, a, c, d, f, g) {
        null == g && (g = 0);
        null == f && (f = 0);
        null == d && (d = 0);
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        return this.multiply([1, c, f, 0, b, 1, g, 0, a, d, 1, 0, 0, 0, 0, 1]);
    },
    shear2D: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 0);
        return this.shear(b, 0, a);
    },
    invert: function () {
        var b = lemongine.Matrix4.identity.values.slice(),
            a = this.values,
            c = a[9] * a[14] * a[7] - a[13] * a[10] * a[7] + a[13] * a[6] * a[11] - a[5] * a[14] * a[11] - a[9] * a[6] * a[15] + a[5] * a[10] * a[15],
            d = a[12] * a[10] * a[7] - a[8] * a[14] * a[7] - a[12] * a[6] * a[11] + a[4] * a[14] * a[11] + a[8] * a[6] * a[15] - a[4] * a[10] * a[15],
            f = a[8] * a[13] * a[7] - a[12] * a[9] * a[7] + a[12] * a[5] * a[11] - a[4] * a[13] * a[11] - a[8] * a[5] * a[15] + a[4] * a[9] * a[15],
            g = a[12] * a[9] * a[6] - a[8] * a[13] * a[6] - a[12] * a[5] * a[10] + a[4] * a[13] * a[10] + a[8] * a[5] * a[14] - a[4] * a[9] * a[14],
            k = a[0] * c + a[1] * d + a[2] * f + a[3] * g;
        if (0 == k) return haxe.Log.trace("Warning! Matrix can not be inverted.", {
            fileName: "lemongine/Matrix4.hx",
            lineNumber: 115,
            className: "lemongine.Matrix4",
            methodName: "invert"
        }), this.set(lemongine.Matrix4.identity.values), this;
        k = 1 / k;
        b[0] = c * k;
        b[1] = (a[13] * a[10] * a[3] - a[9] * a[14] * a[3] - a[13] * a[2] * a[11] + a[1] * a[14] * a[11] + a[9] * a[2] * a[15] - a[1] * a[10] * a[15]) * k;
        b[2] = (a[5] * a[14] * a[3] - a[13] * a[6] * a[3] + a[13] * a[2] * a[7] - a[1] * a[14] * a[7] - a[5] * a[2] * a[15] + a[1] * a[6] * a[15]) * k;
        b[3] = (a[9] * a[6] * a[3] - a[5] * a[10] * a[3] - a[9] * a[2] * a[7] + a[1] * a[10] * a[7] + a[5] * a[2] * a[11] - a[1] * a[6] * a[11]) * k;
        b[4] = d * k;
        b[5] = (a[8] * a[14] * a[3] - a[12] * a[10] * a[3] + a[12] * a[2] * a[11] - a[0] * a[14] * a[11] - a[8] * a[2] * a[15] + a[0] * a[10] * a[15]) * k;
        b[6] = (a[12] * a[6] * a[3] - a[4] * a[14] * a[3] - a[12] * a[2] * a[7] + a[0] * a[14] * a[7] + a[4] * a[2] * a[15] - a[0] * a[6] * a[15]) * k;
        b[7] = (a[4] * a[10] * a[3] - a[8] * a[6] * a[3] + a[8] * a[2] * a[7] - a[0] * a[10] * a[7] - a[4] * a[2] * a[11] + a[0] * a[6] * a[11]) * k;
        b[8] = f * k;
        b[9] = (a[12] * a[9] * a[3] - a[8] * a[13] * a[3] - a[12] * a[1] * a[11] + a[0] * a[13] * a[11] + a[8] * a[1] * a[15] - a[0] * a[9] * a[15]) * k;
        b[10] = (a[4] * a[13] * a[3] - a[12] * a[5] * a[3] + a[12] * a[1] * a[7] - a[0] * a[13] * a[7] - a[4] * a[1] * a[15] + a[0] * a[5] * a[15]) * k;
        b[11] = (a[8] * a[5] * a[3] - a[4] * a[9] * a[3] - a[8] * a[1] * a[7] + a[0] * a[9] * a[7] + a[4] * a[1] * a[11] - a[0] * a[5] * a[11]) * k;
        b[12] = g * k;
        b[13] = (a[8] * a[13] * a[2] - a[12] * a[9] * a[2] + a[12] * a[1] * a[10] - a[0] * a[13] * a[10] - a[8] * a[1] * a[14] + a[0] * a[9] * a[14]) * k;
        b[14] = (a[12] * a[5] * a[2] - a[4] * a[13] * a[2] - a[12] * a[1] * a[6] + a[0] * a[13] * a[6] + a[4] * a[1] * a[14] - a[0] * a[5] * a[14]) * k;
        b[15] = (a[4] * a[9] * a[2] - a[8] * a[5] * a[2] + a[8] * a[1] * a[6] - a[0] * a[9] * a[6] - a[4] * a[1] * a[10] + a[0] * a[5] * a[10]) * k;
        this.values[0] = b[0];
        this.values[1] = b[1];
        this.values[2] = b[2];
        this.values[3] = b[3];
        this.values[4] = b[4];
        this.values[5] = b[5];
        this.values[6] = b[6];
        this.values[7] = b[7];
        this.values[8] = b[8];
        this.values[9] = b[9];
        this.values[10] = b[10];
        this.values[11] = b[11];
        this.values[12] = b[12];
        this.values[13] = b[13];
        this.values[14] = b[14];
        this.values[15] = b[15];
        return this;
    },
    inverse: function () {
        return new lemongine.Matrix4(this.values).invert();
    },
    multiply: function (b) {
        var a = [];
        a[0] = this.values[0] * b[0] + this.values[1] * b[4] + this.values[2] * b[8] + this.values[3] * b[12];
        a[1] = this.values[0] * b[1] + this.values[1] * b[5] + this.values[2] * b[9] + this.values[3] * b[13];
        a[2] = this.values[0] * b[2] + this.values[1] * b[6] + this.values[2] * b[10] + this.values[3] * b[14];
        a[3] = this.values[0] * b[3] + this.values[1] * b[7] + this.values[2] * b[11] + this.values[3] * b[15];
        a[4] = this.values[4] * b[0] + this.values[5] * b[4] + this.values[6] * b[8] + this.values[7] * b[12];
        a[5] = this.values[4] * b[1] + this.values[5] * b[5] + this.values[6] * b[9] + this.values[7] * b[13];
        a[6] = this.values[4] * b[2] + this.values[5] * b[6] + this.values[6] * b[10] + this.values[7] * b[14];
        a[7] = this.values[4] * b[3] + this.values[5] * b[7] + this.values[6] * b[11] + this.values[7] * b[15];
        a[8] = this.values[8] * b[0] + this.values[9] * b[4] + this.values[10] * b[8] + this.values[11] * b[12];
        a[9] = this.values[8] * b[1] + this.values[9] * b[5] + this.values[10] * b[9] + this.values[11] * b[13];
        a[10] = this.values[8] * b[2] + this.values[9] * b[6] + this.values[10] * b[10] + this.values[11] * b[14];
        a[11] = this.values[8] * b[3] + this.values[9] * b[7] + this.values[10] * b[11] + this.values[11] * b[15];
        a[12] = this.values[12] * b[0] + this.values[13] * b[4] + this.values[14] * b[8] + this.values[15] * b[12];
        a[13] = this.values[12] * b[1] + this.values[13] * b[5] + this.values[14] * b[9] + this.values[15] * b[13];
        a[14] = this.values[12] * b[2] + this.values[13] * b[6] + this.values[14] * b[10] + this.values[15] * b[14];
        a[15] = this.values[12] * b[3] + this.values[13] * b[7] + this.values[14] * b[11] + this.values[15] * b[15];
        this.values[0] = a[0];
        this.values[1] = a[1];
        this.values[2] = a[2];
        this.values[3] = a[3];
        this.values[4] = a[4];
        this.values[5] = a[5];
        this.values[6] = a[6];
        this.values[7] = a[7];
        this.values[8] = a[8];
        this.values[9] = a[9];
        this.values[10] = a[10];
        this.values[11] = a[11];
        this.values[12] = a[12];
        this.values[13] = a[13];
        this.values[14] = a[14];
        this.values[15] = a[15];
        return this;
    },
    set: function (b) {
        for (var a = 0; 16 > a;) {
            var c = a++;
            this.values[c] = b.length < c ? 0 : b[c];
        }
        return this;
    },
    getX: function () {
        return this.values[12];
    },
    getY: function () {
        return this.values[13];
    },
    getZ: function () {
        return this.values[14];
    },
    setPerspectiveMatrix: function (b, a, c, d) {
        null == d && (d = 1E3);
        null == c && (c = .1);
        null == a && (a = 1);
        null == b && (b = 45);
        b = 1 / Math.tan(b * Math.PI / 360);
        this.set([b / a, 0, 0, 0, 0, -b, 0, 0, 0, 0, (c + d) / (c - d), -1, 0, 0, 2 * c * d / (c - d), 0]);
        return this;
    },
    setOrthographicMatrix: function (b, a, c, d) {
        null == d && (d = 1E3);
        null == c && (c = .1);
        null == a && (a = 1);
        null == b && (b = 400);
        this.set([2 / (b * a), 0, 0, 0, 0, -2 / b, 0, 0, 0, 0, 2 / (d - c), 0, 0, 0, -(d + c) / (d - c), 1]);
        return this;
    },
    apply: function (b, a) {
        null == a && (a = !0);
        var c = b.x * this.values[1] + b.y * this.values[5] + b.z * this.values[9] + this.values[13],
            d = b.x * this.values[2] + b.y * this.values[6] + b.z * this.values[10] + this.values[14];
        return a ? (b.x = b.x * this.values[0] + b.y * this.values[4] + b.z * this.values[8] + this.values[12], b.y = c, b.z = d, b) : new lemongine.Vector3(b.x, b.y, b.z);
    },
    __class__: lemongine.Matrix4
}
lemongine.Matrix4.identity = new lemongine.Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])