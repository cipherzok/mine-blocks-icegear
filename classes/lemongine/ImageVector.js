lemongine.ImageVector = function (b, a, c) {
    null == c && (c = 0);
    null == a && (a = 0);
    null == b && (b = 0);
    this.currentPoint = new lemongine.Point(0, 0);
    this.strokeColor = new lemongine.Color(-16777216);
    lemongine.Image.call(this, b, a, c);
    this.canvas = window.document.createElement("canvas");
    this.canvas.width = b;
    this.canvas.height = a;
    this.context = this.canvas.getContext("2d", null);
}
m["lemongine.ImageVector"] = lemongine.ImageVector
lemongine.ImageVector.__name__ = "lemongine.ImageVector"
lemongine.ImageVector.__super__ = lemongine.Image
lemongine.ImageVector.prototype = z(lemongine.Image.prototype, {
    setDimensions: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 0);
        lemongine.Image.prototype.setDimensions.call(this, b, a);
        null != this.canvas && (this.canvas.width = b, this.canvas.height = a);
    },
    lineStyle: function (b, a, c, d) {
        null == d && (d = "");
        null == c && (c = "");
        null == b && (b = 1);
        null != a && (this.strokeColor = a);
        this.context.lineWidth = b;
        "" != c && (this.context.lineCap = c);
        "" != c && (this.context.lineJoin = d);
        return this;
    },
    beginPath: function () {
        this.context.beginPath();
        return this;
    },
    endPath: function () {
        this.context.closePath();
        return this;
    },
    moveTo: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 0);
        this.context.moveTo(b, a);
        this.currentPoint.set(b, a);
        return this;
    },
    lineTo: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 0);
        this.context.lineTo(b, a);
        this.currentPoint.set(b, a);
        return this;
    },
    curveTo: function (b, a, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        this.context.quadraticCurveTo(b, a, c, d);
        this.currentPoint.set(c, d);
        return this;
    },
    stroke: function () {
        this.dirtyBuffer = !0;
        var b = this.strokeColor.getHexString(!1);
        this.context.strokeStyle = "#" + b;
        this.context.globalAlpha = G.toFloat(this.strokeColor.a) / G.toFloat(255);
        this.context.stroke();
        return this;
    },
    clear: function () {
        this.dirtyBuffer = !0;
        lemongine.Image.prototype.clear.call(this);
        this.context.clearRect(0, 0, G.toFloat(this.width), G.toFloat(this.height));
        this.context.fillStyle = "#000000";
        this.context.globalAlpha = 0;
        this.context.fillRect(0, 0, G.toFloat(this.width), G.toFloat(this.height));
    },
    updateTextureBuffer: function () {
        this.dirtyBuffer && (this.dirtyBuffer = !1, null != this.textureLocation ? lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_2D, this.textureLocation) : (this.textureLocation = lemongine.Lemongine.gl.createTexture(), lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_2D, this.textureLocation), lemongine.Lemongine.gl.pixelStorei(lemongine.Lemongine.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_WRAP_S, lemongine.Lemongine.gl.CLAMP_TO_EDGE), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_WRAP_T, lemongine.Lemongine.gl.CLAMP_TO_EDGE), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_MAG_FILTER, lemongine.Lemongine.gl.NEAREST), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_MIN_FILTER, lemongine.Lemongine.gl.NEAREST)), uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_2D, 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, this.canvas));
    },
    __class__: lemongine.ImageVector
})