lemongine.Scene = function (b, a, c, d) {
    this.isImageDirty = !0;
    this.renderQueue = [];
    this.cull = this.isBackFace = this.firstActivation = this.isDirty = this.toClear = !0;
    this.camera = c == lemongine.CameraType.PERSPECTIVE ? new lemongine.Camera(lemongine.CameraType.PERSPECTIVE) : new lemongine.Camera(lemongine.CameraType.ORTHOGRAPHIC);
    this.setDimensions(b, a);
    null == d && (d = new lemongine.Color(-16777216));
    this.backgroundColor = d;
}
m["lemongine.Scene"] = lemongine.Scene
lemongine.Scene.__name__ = "lemongine.Scene"
lemongine.Scene.prototype = {
    setup2D: function (b, a, c) {
        this.backgroundColor = c;
        this.camera.setOrthographicMatrix(a);
        this.setDimensions(b, a);
        this.camera.setPosition(b / 2, a / 2, -1);
        this.camera.setRotation(0, 0, 0);
        return this;
    },
    setupCubemap: function (b, a) {
        this.cubemap = b;
        this.cubemapSide = a;
        lemongine.Renderer.clear(this);
    },
    isInternalScene: function () {
        return this == Main.Instance.__internal_scene;
    },
    isMainScene: function () {
        return this == Main.Instance.scene;
    },
    clear: function () {
        this.toClear = !0;
        this.renderQueue.splice(0, this.renderQueue.length);
        this.isDirty = this.isImageDirty = !0;
        return this;
    },
    draw: function (b, a) {
        null == a && (a = !1);
        lemongine.Sort.insert(this.renderQueue, b, lemongine.Entity.entitySortFunction, !0);
        this.isDirty = this.isImageDirty = !0;
        a && this.render();
    },
    render: function () {
        1 == this.isDirty && (1 == this.toClear && (lemongine.Renderer.clear(this), this.toClear = !1), lemongine.Renderer.render(this, this.renderQueue), this.renderQueue.splice(0, this.renderQueue.length), this.isDirty = !1);
        return this;
    },
    toImage: function (b) {
        this.render();
        lemongine.Renderer.activate(this, !0);
        var a = !1;
        null == b ? (b = new lemongine.Rectangle(0, 0, this.get_width(), this.get_height()), a = !0) : (b = b.intersection(new lemongine.Rectangle(0, 0, this.get_width(), this.get_height())), 0 == b.x && 0 == b.y && b.width == this.get_width() && b.height == this.get_height() && (a = !0));
        b.y = this.get_height() - b.height - b.y;
        var c = Math.floor(b.width) * Math.floor(b.height) * 4;
        c = null != c ? new Uint8Array(c) : null;
        lemongine.Lemongine.gl.readPixels(Math.floor(b.x), Math.floor(b.y), Math.floor(b.width), Math.floor(b.height), lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, c);
        a ? (null == this._image && (this._image = new lemongine.Image()), a = this._image, this.isImageDirty = !1) : a = new lemongine.Image();
        b = new lime.graphics.Image(new lime.graphics.ImageBuffer(c, Math.floor(b.width), Math.floor(b.height), 32, 0));
        b.buffer.premultiplied = !0;
        return a.fromData(b);
    },
    setDimensions: function (b, a, c) {
        null == c && (c = !1);
        if (c || b != this.get_width() || a != this.get_height()) this.isInternalScene() ? (0 >= b && 0 >= a ? (b = lime.app.Application.current.__window.__width, a = lime.app.Application.current.__window.__height) : 0 >= b ? b = a * lime.app.Application.current.__window.__width / lime.app.Application.current.__window.__height | 0 : 0 >= a && (a = b * lime.app.Application.current.__window.__height / lime.app.Application.current.__window.__width | 0), this._width = b, this._height = a, this.camera.resize(b, a), this.camera.setPosition(b / 2, a / 2, -1), this.camera.setRotation(0, 0, 0)) : (this.isMainScene() && Main.Instance.__internal_scene.setDimensions(b, a, !0), this._width = b, this._height = a, this.camera.resize(b, a), null != this.draw2DEntity && (this.draw2DEntity.camera.resize(b, a), this.draw2DEntity.camera.setPosition(b / 2, a / 2, -1), this.draw2DEntity.camera.setRotation(0, 0, 0)), null != this.fillRectEntity && (this.fillRectEntity.camera.resize(b, a), this.fillRectEntity.camera.setPosition(b / 2, a / 2, -1), this.fillRectEntity.camera.setRotation(0, 0, 0)), this.firstActivation = !0);
    },
    draw2D: function (b, a, c, d, f, g, h, m, n, x, w, q) {
        null == q && (q = 0);
        null == w && (w = !0);
        null == x && (x = !0);
        null == n && (n = 0);
        null == m && (m = !1);
        null == h && (h = 1);
        null == d && (d = lemongine.shader.BlendMode.NORMAL);
        null == a && (a = new lemongine.Point());
        null == b && haxe.Log.trace("Warning: Attempted to draw null Image to scene", {
            fileName: "lemongine/Scene.hx",
            lineNumber: 185,
            className: "lemongine.Scene",
            methodName: "draw2D"
        });
        null == c && (c = new lemongine.Rectangle(0, 0, G.toFloat(b.width), G.toFloat(b.height)));
        if (!(a.x >= this.get_width() || a.y >= this.get_height() || 0 >= a.x + c.width * h || 0 >= a.y + c.height * h)) {
            if (null == this.draw2DEntity) this.draw2DEntity = new lemongine.Entity([], lemongine.Geom.createQuad(), lemongine.shader.BasicTexture.getShader(d)), this.draw2DEntity.camera = new lemongine.Camera(lemongine.CameraType.ORTHOGRAPHIC), this.draw2DEntity.camera.resize(this.get_width(), this.get_height()), this.draw2DEntity.camera.setPosition(this.get_width() / 2, this.get_height() / 2, -1), this.draw2DEntity.camera.setRotation(0, 0, 0);else {
                var l = lemongine.shader.BasicTexture.getShader(d);
                this.draw2DEntity.shaderProgram.id != l.id && (this.draw2DEntity.shaderProgram = l);
            }
            this.draw2DEntity.useCamera = !x;
            this.draw2DEntity.setTextureBuffer("texture", b);
            m ? this.draw2DEntity.setAttrib("texClip", lemongine.Mathz.repeatArray([c.x, c.y + c.height, c.width, -c.height], 6)) : this.draw2DEntity.setAttrib("texClip", lemongine.Mathz.repeatArray([c.x, c.y, c.width, c.height], 6));
            this.draw2DEntity.setUniform("texSize", [b.width, b.height]);
            null == f ? this.draw2DEntity.setUniform("color", [1, 1, 1, 1]) : this.draw2DEntity.setUniform("color", [G.toFloat(f.r) / G.toFloat(255), G.toFloat(f.g) / G.toFloat(255), G.toFloat(f.b) / G.toFloat(255), G.toFloat(f.a) / G.toFloat(255)]);
            null == g ? this.draw2DEntity.setUniform("colorOffset", [0, 0, 0, 0]) : this.draw2DEntity.setUniform("colorOffset", [G.toFloat(g.r) / G.toFloat(255), G.toFloat(g.g) / G.toFloat(255), G.toFloat(g.b) / G.toFloat(255), G.toFloat(g.a) / G.toFloat(255)]);
            this.draw2DEntity.transform.reset().scale(c.width * h, c.height * h);
            0 != q && this.draw2DEntity.transform.rotate(q, new lemongine.Vector3(0, 0, 1));
            this.draw2DEntity.transform.translate(c.width * h / 2, c.height * h / 2).translate(a.x, a.y, n);
            d != lemongine.shader.BlendMode.NORMAL && d != lemongine.shader.BlendMode.ADD && (this.draw2DEntity.setUniform("texClipBG", [c.x + a.x, c.y - a.y + this.get_height(), c.width * h, -c.height * h]), this.draw2DEntity.setUniform("texSizeBG", [this.get_width(), this.get_height()]), this.draw2DEntity.setTextureBuffer("background", this.get_image()));
            this.draw2DEntity.blendMode = d;
            this.draw2DEntity.isTransparent = w ? !0 : !1;
            this.draw(this.draw2DEntity, !0);
        }
    },
    draw2DFlipped: function (b, a, c, d, f, g, k, h, m, n, x) {
        null == x && (x = 0);
        null == n && (n = !0);
        null == m && (m = !0);
        null == h && (h = 0);
        null == k && (k = 1);
        this.draw2D(b, a, c, d, f, g, k, !0, h, m, n, x);
    },
    fillRect: function (b, a, c, d) {
        null == d && (d = !1);
        null == c && (c = 0);
        null == this.fillRectEntity && (this.fillRectEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1, !1, !1), lemongine.shader.BasicColor.getShader()), this.fillRectEntity.isTransparent = !0, this.fillRectEntity.camera = new lemongine.Camera(lemongine.CameraType.ORTHOGRAPHIC), this.fillRectEntity.camera.resize(this.get_width(), this.get_height()), this.fillRectEntity.camera.setPosition(this.get_width() / 2, this.get_height() / 2, -1), this.fillRectEntity.camera.setRotation(0, 0, 0), this.fillRectEntity.useCamera = !0);
        null == b && (b = new lemongine.Rectangle(0, 0, this.get_width(), this.get_height()));
        this.fillRectEntity.setUniform("color", [G.toFloat(a.r) / G.toFloat(255), G.toFloat(a.g) / G.toFloat(255), G.toFloat(a.b) / G.toFloat(255), G.toFloat(a.a) / G.toFloat(255)]);
        this.fillRectEntity.transform.reset().translate(.5, .5).scale(b.width, b.height).translate(b.x, b.y, c);
        d ? (null == lemongine.Scene.replaceBlendFunc && (lemongine.Scene.replaceBlendFunc = [lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ZERO, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ZERO]), this.fillRectEntity.customBlendFunc = lemongine.Scene.replaceBlendFunc) : this.fillRectEntity.customBlendFunc = null;
        this.draw(this.fillRectEntity, !0);
    },
    get_glTexture: function () {
        null == this._glTexture && lemongine.Renderer.activate(this);
        return this._glTexture;
    },
    set_glTexture: function (b) {
        null != this._glTexture && (lemongine.Lemongine.gl.bindFramebuffer(lemongine.Lemongine.gl.FRAMEBUFFER, this.glFrameBuffer), lemongine.Lemongine.gl.framebufferTexture2D(lemongine.Lemongine.gl.FRAMEBUFFER, lemongine.Lemongine.gl.COLOR_ATTACHMENT0, lemongine.Lemongine.gl.TEXTURE_2D, b, 0));
        return this._glTexture = b;
    },
    get_width: function () {
        return this._width;
    },
    get_height: function () {
        return this._height;
    },
    set_cull: function (b) {
        this.cull = b;
        lemongine.Renderer.currentScene == this && lemongine.Renderer.setCulling(b);
        return b;
    },
    set_isBackFace: function (b) {
        this.isBackFace = b;
        lemongine.Renderer.currentScene == this && lemongine.Renderer.setCulling(this.cull, b);
        return b;
    },
    get_image: function () {
        this.isImageDirty && this.toImage();
        return this._image;
    },
    __class__: lemongine.Scene
}