lemongine.ImageCubemap = function (b, a, c) {
    null == c && (c = -16777216);
    null == a && (a = 0);
    null == b && (b = 0);
    this.position = new lemongine.Vector3();
    this.backgroundColor = new lemongine.Color(-16777216);
    this.scenes = [];
    lemongine.Image.call(this);
    this.backgroundColor.set_hex(c);
    this.isCubemap = this.imageLoaded = !0;
    this.textureLocation = lemongine.Lemongine.gl.createTexture();
    lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_CUBE_MAP, this.textureLocation);
    uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, lemongine.Lemongine.gl.RGBA, Math.floor(b), Math.floor(a), 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, null);
    uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 1, 0, lemongine.Lemongine.gl.RGBA, Math.floor(b), Math.floor(a), 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, null);
    uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 2, 0, lemongine.Lemongine.gl.RGBA, Math.floor(b), Math.floor(a), 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, null);
    uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 3, 0, lemongine.Lemongine.gl.RGBA, Math.floor(b), Math.floor(a), 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, null);
    uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 4, 0, lemongine.Lemongine.gl.RGBA, Math.floor(b), Math.floor(a), 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, null);
    uc.texImage2D(lemongine.Lemongine.gl, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 5, 0, lemongine.Lemongine.gl.RGBA, Math.floor(b), Math.floor(a), 0, lemongine.Lemongine.gl.RGBA, lemongine.Lemongine.gl.UNSIGNED_BYTE, null);
    this.scenes[0] = new lemongine.Scene(Math.floor(b), Math.floor(a), null, new lemongine.Color(c));
    this.scenes[0].setupCubemap(this, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X);
    this.scenes[1] = new lemongine.Scene(Math.floor(b), Math.floor(a), null, new lemongine.Color(c));
    this.scenes[1].setupCubemap(this, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 1);
    this.scenes[2] = new lemongine.Scene(Math.floor(b), Math.floor(a), null, new lemongine.Color(c));
    this.scenes[2].setupCubemap(this, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 2);
    this.scenes[3] = new lemongine.Scene(Math.floor(b), Math.floor(a), null, new lemongine.Color(c));
    this.scenes[3].setupCubemap(this, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 3);
    this.scenes[4] = new lemongine.Scene(Math.floor(b), Math.floor(a), null, new lemongine.Color(c));
    this.scenes[4].setupCubemap(this, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 4);
    this.scenes[5] = new lemongine.Scene(Math.floor(b), Math.floor(a), null, new lemongine.Color(c));
    this.scenes[5].setupCubemap(this, lemongine.Lemongine.gl.TEXTURE_CUBE_MAP_POSITIVE_X + 5);
    lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_CUBE_MAP, lemongine.Lemongine.gl.TEXTURE_MAG_FILTER, lemongine.Lemongine.gl.LINEAR);
    lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_CUBE_MAP, lemongine.Lemongine.gl.TEXTURE_MIN_FILTER, lemongine.Lemongine.gl.LINEAR);
    this.initCameras();
}
m["lemongine.ImageCubemap"] = lemongine.ImageCubemap
lemongine.ImageCubemap.__name__ = "lemongine.ImageCubemap"
lemongine.ImageCubemap.__super__ = lemongine.Image
lemongine.ImageCubemap.prototype = z(lemongine.Image.prototype, {
    initCameras: function () {
        for (var b = 0; 6 > b;) {
            var a = b++,
                c = this.scenes[a];
            c.camera.setPerspectiveMatrix(90);
            c.backgroundColor = this.backgroundColor;
            c.camera.projectionMatrix.values[0] *= -1;
            c.camera.setPosition(0, 0, 0);
            c.camera.lookAt(lemongine.ImageCubemap.lookatDirections[a]);
            this.setPosition(this.position.x, this.position.y, this.position.z);
            c.set_isBackFace(!1);
        }
    },
    setPosition: function (b, a, c) {
        this.scenes[0].camera.setPosition(b, a, c);
        this.scenes[1].camera.setPosition(b, a, c);
        this.scenes[2].camera.setPosition(b, a, c);
        this.scenes[3].camera.setPosition(b, a, c);
        this.scenes[4].camera.setPosition(b, a, c);
        this.scenes[5].camera.setPosition(b, a, c);
    },
    updateTextureBuffer: function () {
        this.dirtyBuffer = !1;
    },
    __class__: lemongine.ImageCubemap
})
lemongine.ImageCubemap.lookatDirections = [new lemongine.Vector3(1, 0, 0), new lemongine.Vector3(-1, 0, 0), new lemongine.Vector3(0, 1, 0), new lemongine.Vector3(0, -1, 0), new lemongine.Vector3(0, 0, 1), new lemongine.Vector3(0, 0, -1)]