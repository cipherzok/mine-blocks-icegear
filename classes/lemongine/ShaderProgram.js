lemongine.ShaderProgram = function (b, a, c) {
    var d = new haxe.ds.StringMap();
    d.h.vertex = "";
    d.h.uv = "";
    d.h.normal = "";
    d.h.modelMatrix = "";
    d.h.viewMatrix = "";
    d.h.projectionMatrix = "";
    d.h.time = "";
    this.builtinBuffers = d;
    this.attribs = new haxe.ds.StringMap();
    this.uniforms = new haxe.ds.StringMap();
    this.textureBuffers = new haxe.ds.StringMap();
    this.id = b;
    this.setShaders(a, c);
}
m["lemongine.ShaderProgram"] = lemongine.ShaderProgram
lemongine.ShaderProgram.__name__ = "lemongine.ShaderProgram"
lemongine.ShaderProgram.prototype = {
    useProgram: function () {
        lemongine.Lemongine.gl.useProgram(this.program);
        this.lastCamera = null;
        this.updateProjectionMatrix(lemongine.Renderer.currentScene.camera);
    },
    updateProjectionMatrix: function (b) {
        this.lastCamera != b && this.hasBuiltin("projectionMatrix") && this.setUniform(this.builtinBuffers.h.projectionMatrix, b.projectionMatrix.values, "matrix4");
    },
    setShaders: function (b, a) {
        this.fragmentShaderRaw = b;
        this.vertexShaderRaw = a;
        this.fragmentShader = this.createShader(this.fragmentShaderRaw, lemongine.Lemongine.gl.FRAGMENT_SHADER);
        this.vertexShader = this.createShader(this.vertexShaderRaw, lemongine.Lemongine.gl.VERTEX_SHADER);
        this.program = lemongine.Lemongine.gl.createProgram();
        lemongine.Lemongine.gl.attachShader(this.program, this.vertexShader);
        lemongine.Lemongine.gl.attachShader(this.program, this.fragmentShader);
        lemongine.Lemongine.gl.linkProgram(this.program);
    },
    setBuiltInBuffers: function (b, a, c, d, f, g, k) {
        null == k && (k = "");
        null == g && (g = "");
        null == f && (f = "");
        null == d && (d = "");
        null == c && (c = "");
        null == a && (a = "");
        null == b && (b = "");
        "" != b && (this.builtinBuffers.h.vertex = b, this.setAttrib(b, "float"));
        "" != f && (this.builtinBuffers.h.uv = f, this.setAttrib(f, "float", 2));
        "" != g && (this.builtinBuffers.h.normal = g, this.setAttrib(g, "float", 3));
        "" != a && (this.builtinBuffers.h.modelMatrix = a, this.setUniform(a, null, "matrix4"));
        "" != c && (this.builtinBuffers.h.viewMatrix = c, this.setUniform(c, null, "matrix4"));
        "" != d && (this.builtinBuffers.h.projectionMatrix = d, this.setUniform(d, null, "matrix4"));
        "" != k && (this.builtinBuffers.h.time = k, this.setUniform(k, null, "float"));
    },
    setUniform: function (b, a, c) {
        if (Object.prototype.hasOwnProperty.call(this.uniforms.h, b)) this.uniforms.h[b].value = a, this.uniforms.h[b].set = !0;else {
            null == c && haxe.Log.trace("Uniform '" + b + "' doesn't exist on '" + this.id + "'!", {
                fileName: "lemongine/ShaderProgram.hx",
                lineNumber: 115,
                className: "lemongine.ShaderProgram",
                methodName: "setUniform"
            });
            var d = this.uniforms;
            a = {
                location: lemongine.Lemongine.gl.getUniformLocation(this.program, b),
                name: b,
                type: c,
                value: a,
                set: null != a
            };
            d.h[b] = a;
        }
        return this.uniforms.h[b].location;
    },
    setAttrib: function (b, a, c, d, f) {
        null == f && (f = 0);
        null == d && (d = 0);
        null == c && (c = 3);
        null == a && (a = "");
        if (!Object.prototype.hasOwnProperty.call(this.attribs.h, b)) {
            "" == a && haxe.Log.trace("Attrib '" + b + "' doesn't exist on '" + this.id + "'!", {
                fileName: "lemongine/ShaderProgram.hx",
                lineNumber: 141,
                className: "lemongine.ShaderProgram",
                methodName: "setAttrib"
            });
            var g = this.attribs;
            a = lemongine.pieces.Attrib.createForShader(b, this, a, c, d, f);
            g.h[b] = a;
        }
        return this.attribs.h[b].location;
    },
    hasBuiltin: function (b) {
        return "" != this.builtinBuffers.h[b];
    },
    getBuiltin: function (b) {
        return this.hasBuiltin(b) ? this.builtinBuffers.h[b] : null;
    },
    createShader: function (b, a) {
        var c = lemongine.Lemongine.gl.createShader(a);
        lemongine.Lemongine.gl.shaderSource(c, b);
        lemongine.Lemongine.gl.compileShader(c);
        0 == lemongine.Lemongine.gl.getShaderParameter(c, lemongine.Lemongine.gl.COMPILE_STATUS) && (b = lemongine.Lemongine.gl.getShaderInfoLog(c), a == lemongine.Lemongine.gl.FRAGMENT_SHADER ? haxe.Log.trace("Fragment shader error in '" + this.id + "': " + b, {
            fileName: "lemongine/ShaderProgram.hx",
            lineNumber: 183,
            className: "lemongine.ShaderProgram",
            methodName: "createShader"
        }) : a == lemongine.Lemongine.gl.VERTEX_SHADER && haxe.Log.trace("Vertex shader error in '" + this.id + "': " + b, {
            fileName: "lemongine/ShaderProgram.hx",
            lineNumber: 184,
            className: "lemongine.ShaderProgram",
            methodName: "createShader"
        }));
        return c;
    },
    __class__: lemongine.ShaderProgram
}