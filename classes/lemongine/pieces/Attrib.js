lemongine.pieces.Attrib = function (b, a, c) {
    this.dataOffset = this.dataStride = 0;
    this.dataCount = 3;
    this.dirtyStart = this.dirtyEnd = -1;
    this.dirtyBuffer = this.dirtyLength = !0;
    this.name = b;
    this.value = [];
    this.type = a;
    this.buffer = lime.graphics.opengl.GL.context.createBuffer();
}
m["lemongine.pieces.Attrib"] = lemongine.pieces.Attrib
lemongine.pieces.Attrib.__name__ = "lemongine.pieces.Attrib"
lemongine.pieces.Attrib.createForShader = function (b, a, c, d, f, g) {
    null == g && (g = 0);
    null == f && (f = 0);
    null == d && (d = 3);
    var l = new lemongine.pieces.Attrib(b, c, !1);
    l.location = lemongine.Lemongine.gl.getAttribLocation(a.program, b);
    -1 == l.location && haxe.Log.trace("Warning! Attribute '" + b + "' couldn't be found in shader!", {
        fileName: "lemongine/pieces/Attrib.hx",
        lineNumber: 95,
        className: "lemongine.pieces.Attrib",
        methodName: "createForShader"
    });
    l.name = b;
    l.type = c;
    l.dataCount = d;
    l.dataStride = f;
    l.dataOffset = g;
    return l;
}
lemongine.pieces.Attrib.prototype = {
    setValue: function (b, a, c, d) {
        null == d && (d = -1);
        null == c && (c = -1);
        null == a && (a = !0);
        this.value = b;
        this.setDirty(a, c, d);
        return this;
    },
    getValue: function () {
        return this.value;
    },
    setDirty: function (b, a, c) {
        null == c && (c = -1);
        null == a && (a = -1);
        null == b && (b = !0);
        0 == this.dirtyBuffer ? (this.dirtyBuffer = !0, 1 == b ? this.dirtyLength = !0 : (this.dirtyLength = !1, this.dirtyStart = a, this.dirtyEnd = a + c)) : -1 != this.dirtyStart && (1 == b ? this.dirtyLength = !0 : 0 == this.dirtyLength && -1 != this.dirtyStart && (this.dirtyStart = Math.floor(Math.min(this.dirtyStart, a)), this.dirtyEnd = Math.floor(Math.max(this.dirtyEnd, a + c))));
    },
    __class__: lemongine.pieces.Attrib
}