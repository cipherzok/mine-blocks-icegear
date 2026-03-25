lemongine.Image = function (b, a, c, d) {
    null == d && (d = !1);
    null == c && (c = 0);
    null == a && (a = 0);
    null == b && (b = 0);
    this.filterEntityNeedsResize = !0;
    this.isCubemap = this.smoothing = this.isShaderPass = !1;
    this.width = this.height = 0;
    this.dirtyBuffer = this.dirtyRender = !0;
    this.imageLoaded = !1;
    this.premultiplied = !0;
    0 != b && (this.smoothing = d, this.setDimensions(Math.abs(b) | 0, Math.abs(a) | 0), b = this.width * this.height * 4, b = null != b ? new Uint8Array(b) : null, this.data = new lime.graphics.Image(new lime.graphics.ImageBuffer(b, this.width, this.height)), 0 != c && this.fillRect(null, c, !0), this.imageLoaded = !0);
}
m["lemongine.Image"] = lemongine.Image
lemongine.Image.__name__ = "lemongine.Image"
lemongine.Image.getWhitePixel = function () {
    null == lemongine.Image.whitePixel && (lemongine.Image.whitePixel = new lemongine.Image(1, 1, -1), lemongine.Image.whitePixel.set_premultiplied(!0));
    return lemongine.Image.whitePixel;
}
lemongine.Image.prototype = {
    fromScene: function (b) {
        this.fromGLTexture(b.get_width(), b.get_height(), b.get_glTexture());
        return this;
    },
    fromData: function (b, a) {
        this.data = b;
        this.dirtyRender = !0;
        this.setDimensions(b.width, b.height);
        null != a ? this.textureLocation = a : this.dirtyBuffer = !0;
        this.imageLoaded = !0;
        return this;
    },
    fromGLTexture: function (b, a, c) {
        this.setDimensions(b, a);
        this.textureLocation = c;
        this.dirtyBuffer = this.imageLoaded = !1;
        return this;
    },
    updateImageFromTexture: function () {
        var b = lemongine.Lemongine.gl.createFramebuffer();
        lemongine.Lemongine.gl.bindFramebuffer(lemongine.Lemongine.gl.FRAMEBUFFER, b);
        lemongine.Lemongine.gl.framebufferTexture2D(lemongine.Lemongine.gl.FRAMEBUFFER, lemongine.Lemongine.gl.COLOR_ATTACHMENT0, lemongine.Lemongine.gl.TEXTURE_2D, this.textureLocation, 0);
        var a = this.width * this.height * 4;
        a = null != a ? new Uint8Array(a) : null;
        lemongine.Lemongine.gl.readPixels(0, 0, this.width, this.height, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, a);
        lemongine.Lemongine.gl.deleteFramebuffer(b);
        b = new lime.graphics.Image(new lime.graphics.ImageBuffer(a, this.width, this.height, 32, 0));
        b.buffer.premultiplied = this.premultiplied;
        this.fromData(b);
        this.imageLoaded = !0;
        return this;
    },
    clone: function (b, a) {
        null == b && (b = !1);
        null == a && (a = new lemongine.Image());
        if (null == this.textureLocation) if (b) this.updateTextureBuffer();else return a.fromData(this.data.clone()), a;
        var c = new lemongine.Scene(1, 1, lemongine.CameraType.ORTHOGRAPHIC, lemongine.Color.clear);
        c.setup2D(this.width, this.height, lemongine.Color.clear);
        a.fromGLTexture(this.width, this.height, c.get_glTexture());
        b ? c.draw2D(this) : c.draw2DFlipped(this);
        c.render();
        return a;
    },
    setDimensions: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 0);
        if (this.width != b || this.height != a) this.width = b, this.height = a, this.rectangle = new lemongine.Rectangle(0, 0, G.toFloat(b), G.toFloat(a)), this.limeRectangle = new lime.math.Rectangle(0, 0, G.toFloat(b), G.toFloat(a)), this.dirtyBuffer = this.filterEntityNeedsResize = !0;
    },
    updateImageIfNotLoaded: function () {
        this.imageLoaded || null == this.textureLocation || this.updateImageFromTexture();
    },
    copyPixels: function (b, a, c, d, f, g) {
        null == g && (g = !0);
        this.updateImageIfNotLoaded();
        b.updateImageIfNotLoaded();
        a = null == a ? new lime.math.Vector2(0, 0) : a.toLimeVector();
        c = null == c ? new lime.math.Rectangle(0, 0, G.toFloat(b.width), G.toFloat(b.height)) : c.toLimeRectangle();
        d = null == d ? null : d.data;
        f = null == f ? null : f.toLimeVector();
        this.data.copyPixels(b.data, c, a, d, f, g);
        this.dirtyBuffer = this.dirtyRender = !0;
        return this;
    },
    clear: function () {
        this.imageLoaded && this.fillRect();
    },
    fillRect: function (b, a, c) {
        null == c && (c = !0);
        null == a && (a = 0);
        this.updateImageIfNotLoaded();
        c || (a = (a & 16777215) + -16777216);
        b = null == b ? this.limeRectangle : b.toLimeRectangle();
        this.data.fillRect(b, lemongine.Color.ARBGtoRGBA(a));
        this.dirtyBuffer = this.dirtyRender = !0;
        return this;
    },
    setPixel: function (b, a, c, d) {
        null == d && (d = !0);
        this.updateImageIfNotLoaded();
        d ? this.data.setPixel32(b, a, lemongine.Color.ARBGtoRGBA(c)) : this.data.setPixel(b, a, lemongine.Color.ARBGtoRGBA(c));
        this.dirtyBuffer = this.dirtyRender = !0;
        return this;
    },
    getPixel: function (b, a) {
        this.updateImageIfNotLoaded();
        return this.data.getPixel(Math.floor(b), Math.floor(a), 1);
    },
    getPixel32: function (b, a) {
        this.updateImageIfNotLoaded();
        return this.data.getPixel32(Math.floor(b), Math.floor(a), 1);
    },
    getPixels: function (b) {
        this.updateImageIfNotLoaded();
        null == b && (b = this.rectangle);
        return this.data.getPixels(b.toLimeRectangle(), 1);
    },
    setPixels: function (b, a) {
        null == a && (a = this.rectangle);
        this.data.setPixels(a.toLimeRectangle(), fj.fromLimeBytes(b), 1);
        this.dirtyBuffer = this.dirtyRender = !0;
        return this;
    },
    toEntity: function (b, a, c) {
        null == c && (c = !1);
        null == a && (a = !1);
        null == b && (b = new lemongine.Rectangle(0, 0, G.toFloat(this.width), G.toFloat(this.height)));
        var d = lemongine.shader.BasicTexture.getShader();
        d = new lemongine.Entity([], lemongine.Geom.createQuad(b.width, b.height), d);
        d.setTextureBuffer("texture", this);
        d.setAttrib("texClip", lemongine.Mathz.repeatArray([b.x, c ? b.height - b.y : b.y, b.width, (c ? -1 : 1) * b.height], 6));
        d.setUniform("texSize", [this.width, this.height]);
        a || d.transform.translate(b.width / 2, b.height / 2);
        return d;
    },
    getTextureBuffer: function () {
        this.updateTextureBuffer();
        return this.textureLocation;
    },
    updateTextureBuffer: function () {
        this.dirtyBuffer && (this.dirtyBuffer = !1, this.data.set_premultiplied(this.premultiplied), lime._internal.graphics.ImageCanvasUtil.convertToData(this.data), null != this.textureLocation ? (lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_2D, this.textureLocation), uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_2D, 0, lemongine.Lemongine.gl.RGBA, this.data.buffer.width, this.data.buffer.height, 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, this.data.get_data())) : (this.textureLocation = lemongine.Lemongine.gl.createTexture(), lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_2D, this.textureLocation), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_WRAP_S, lemongine.Lemongine.gl.CLAMP_TO_EDGE), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_WRAP_T, lemongine.Lemongine.gl.CLAMP_TO_EDGE), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_MAG_FILTER, this.smoothing ? lemongine.Lemongine.gl.LINEAR : lemongine.Lemongine.gl.NEAREST), lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_MIN_FILTER, this.smoothing ? lemongine.Lemongine.gl.LINEAR : lemongine.Lemongine.gl.NEAREST), this.isShaderPass ? uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_2D, 0, js.Boot.__cast(lemongine.Lemongine.gl, WebGL2RenderingContext).RGBA32F, this.data.buffer.width, this.data.buffer.height, 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.FLOAT, null) : uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_2D, 0, lemongine.Lemongine.gl.RGBA, this.data.buffer.width, this.data.buffer.height, 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, this.data.get_data())));
    },
    blurFilter: function (b, a, c, d) {
        null == d && (d = !0);
        this.createFilterEntity(lemongine.shader.BlurFilter.getShader(c, d), !0);
        this.filterEntity.setUniform("texSize", [this.width, this.height]);
        this.filterEntity.setTextureBuffer("texture", this);
        this.filterEntity.setUniform("blur", [b, .5]);
        this.filterScene.clear();
        this.filterScene.draw(this.filterEntity, !0);
        this.filterScene.set_glTexture(this.filterSceneImageSecondPass.getTextureBuffer());
        this.filterEntity.setTextureBuffer("texture", this.filterSceneImage);
        this.filterEntity.setUniform("blur", [.5, a]);
        this.filterScene.clear();
        this.filterScene.set_cull(!1);
        this.filterEntity.transform.scale(1, -1).translate(0, G.toFloat(this.height), 0);
        this.filterScene.draw(this.filterEntity, !0);
        this.filterScene.set_cull(!0);
        this.filterEntity.transform.scale(1, -1).translate(0, G.toFloat(this.height), 0);
        this.filterScene.set_glTexture(this.filterSceneImage.getTextureBuffer());
        return this.filterSceneImageSecondPass;
    },
    createFilterEntity: function (b, a) {
        null == a && (a = !1);
        null == this.filterEntity && (this.filterScene = new lemongine.Scene(1, 1, lemongine.CameraType.ORTHOGRAPHIC, lemongine.Color.clear), this.filterEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), b), this.filterEntity.isTransparent = !0, this.filterSceneImage = new lemongine.Image());
        this.filterEntity.shaderProgram != b && (this.filterEntity.shaderProgram = b);
        this.filterEntityNeedsResize ? (this.filterEntityNeedsResize = !1, this.filterScene.setup2D(this.width, this.height, lemongine.Color.clear), this.filterSceneImage.fromGLTexture(this.width, this.height, this.filterScene.get_glTexture()), a && (this.filterSceneImageSecondPass = new lemongine.Image(G.toFloat(this.width), G.toFloat(this.height), 0)), this.filterEntity.transform.reset().translate(.5, .5, 0).scale(G.toFloat(this.width), G.toFloat(this.height))) : a && null == this.filterSceneImageSecondPass && (this.filterSceneImageSecondPass = new lemongine.Image(G.toFloat(this.width), G.toFloat(this.height), 0));
    },
    set_premultiplied: function (b) {
        this.data.set_premultiplied(b);
        return this.premultiplied = b;
    },
    destroy: function () {
        null != this.textureLocation && lemongine.Lemongine.gl.deleteTexture(this.textureLocation);
        null != this.filterSceneImage && this.filterSceneImage.destroy();
        null != this.filterSceneImageSecondPass && this.filterSceneImageSecondPass.destroy();
        null != this.filterSceneImageFloat && this.filterSceneImageFloat.destroy();
    },
    __class__: lemongine.Image
}