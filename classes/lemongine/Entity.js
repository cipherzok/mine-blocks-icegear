lemongine.Entity = function (b, a, c, d, f) {
    null == d && (d = 4);
    this.useCamera = !1;
    this.transform = new lemongine.Matrix4();
    this.ignoreBuffers = new haxe.ds.StringMap();
    this.attribs = new haxe.ds.StringMap();
    this.uniforms = new haxe.ds.StringMap();
    this.textureBuffers = new haxe.ds.StringMap();
    this.forceNoCulling = !1;
    this.customBlendFunc = null;
    this.isTransparent = !1;
    this.layer = 0;
    this.blendMode = lemongine.shader.BlendMode.NORMAL;
    this.visible = !0;
    this.tags = b;
    this.shaderProgram = c;
    this.primitiveMode = d;
    this.mesh = a;
    this.vboIndex = lemongine.Lemongine.gl.createBuffer();
    this.camera = f;
}
m["lemongine.Entity"] = lemongine.Entity
lemongine.Entity.__name__ = "lemongine.Entity"
lemongine.Entity.entitySortFunction = function (b, a) {
    return b.isTransparent != a.isTransparent ? (b.isTransparent ? 1 : 0) - (a.isTransparent ? 1 : 0) : b.layer != a.layer ? b.layer - a.layer : b.shaderProgram != a.shaderProgram ? b.shaderProgram.id > a.shaderProgram.id ? 1 : -1 : 0;
}
lemongine.Entity.prototype = {
    render: function (b, a, c, d) {
        null == d && (d = !0);
        null == c && (c = !0);
        null == a && (a = !0);
        a && this.shaderProgram.useProgram();
        var f = this.attribs;
        a = this.shaderProgram.getBuiltin("vertex");
        f.h[a] = this.mesh.vertices;
        if (this.mesh.hasUVs && this.shaderProgram.hasBuiltin("uv")) f = this.attribs, a = this.shaderProgram.getBuiltin("uv"), f.h[a] != this.mesh.uvs && (f = this.attribs, a = this.shaderProgram.getBuiltin("uv"), f.h[a] = this.mesh.uvs);else if (f = this.attribs, a = this.shaderProgram.getBuiltin("uv"), Object.prototype.hasOwnProperty.call(f.h, a)) {
            f = this.attribs;
            a = this.shaderProgram.getBuiltin("uv");
            var g = f;
            Object.prototype.hasOwnProperty.call(g.h, a) && delete g.h[a];
        }
        this.mesh.hasNormals && this.shaderProgram.hasBuiltin("normal") ? (f = this.attribs, a = this.shaderProgram.getBuiltin("normal"), f.h[a] != this.mesh.normals && (f = this.attribs, a = this.shaderProgram.getBuiltin("normal"), f.h[a] = this.mesh.normals)) : (f = this.attribs, a = this.shaderProgram.getBuiltin("normal"), Object.prototype.hasOwnProperty.call(f.h, a) && (f = this.attribs, a = this.shaderProgram.getBuiltin("normal"), g = f, Object.prototype.hasOwnProperty.call(g.h, a) && delete g.h[a]));
        this.mesh.isIndexed ? this.attribs.h["~index"] != this.mesh.indices && (this.attribs.h["~index"] = this.mesh.indices) : Object.prototype.hasOwnProperty.call(this.attribs.h, "~index") && (g = this.attribs, Object.prototype.hasOwnProperty.call(g.h, "~index") && delete g.h["~index"]);
        c ? (c = this.useCamera && null != this.camera ? this.camera : b.camera, this.shaderProgram.updateProjectionMatrix(c), this.shaderProgram.hasBuiltin("viewMatrix") && this.shaderProgram.setUniform(this.shaderProgram.builtinBuffers.h.viewMatrix, c.getTransformValues(), "matrix4")) : (this.ignoreBuffer(this.shaderProgram.getBuiltin("vertex")), this.mesh.hasUVs && this.shaderProgram.hasBuiltin("uv") && this.ignoreBuffer(this.shaderProgram.getBuiltin("uv")), this.mesh.hasNormals && this.shaderProgram.hasBuiltin("normal") && this.ignoreBuffer(this.shaderProgram.getBuiltin("normal")), this.shaderProgram.hasBuiltin("viewMatrix") && this.ignoreBuffer(this.shaderProgram.getBuiltin("viewMatrix")));
        this.shaderProgram.hasBuiltin("modelMatrix") && this.shaderProgram.setUniform(this.shaderProgram.builtinBuffers.h.modelMatrix, this.transform.values, "matrix4");
        this.shaderProgram.hasBuiltin("time") && this.shaderProgram.setUniform(this.shaderProgram.builtinBuffers.h.time, new Date().getTime() / 1E3, "float");
        c = this.shaderProgram.uniforms.h;
        a = Object.keys(c);
        g = a.length;
        for (var p = 0; p < g;) {
            var k = c[a[p++]];
            if (1 == this.ignoreBuffers.h[k.name]) this.ignoreBuffers.h[k.name] = !1;else {
                var h = k.value;
                if (Object.prototype.hasOwnProperty.call(this.uniforms.h, k.name)) h = this.uniforms.h[k.name].value;else if (!k.set) {
                    haxe.Log.trace("Warning! '" + k.name + "' is a null uniform.", {
                        fileName: "lemongine/Entity.hx",
                        lineNumber: 138,
                        className: "lemongine.Entity",
                        methodName: "render"
                    });
                    continue;
                }
                if ("matrix4" == k.type) h = js.Boot.__cast(h, Array), f = null != h ? new Float32Array(h) : null, uc.uniformMatrix4fv(lemongine.Lemongine.gl, k.location, !1, f);else if ("float" == k.type) lemongine.Lemongine.gl.uniform1f(k.location, js.Boot.__cast(h, ie));else if ("float2" == k.type) {
                    h = js.Boot.__cast(h, Array);
                    var n = null != h ? new Float32Array(h) : null;
                    dj.uniform2fv(lemongine.Lemongine.gl, k.location, n);
                } else "float3" == k.type ? (h = js.Boot.__cast(h, Array), h = null != h ? new Float32Array(h) : null, lemongine.Lemongine.gl.uniform3fv(k.location, h)) : "float4" == k.type ? (h = js.Boot.__cast(h, Array), f = null != h ? new Float32Array(h) : null, lemongine.Lemongine.gl.uniform4fv(k.location, f)) : haxe.Log.trace("Warning! Uniform type '" + k.type + "' not defined (on '" + k.name + "').", {
                    fileName: "lemongine/Entity.hx",
                    lineNumber: 179,
                    className: "lemongine.Entity",
                    methodName: "render"
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.attribs.h, "~index") && (h = this.attribs.h["~index"], this.ignoreBuffers.h["~index"] = !0, lemongine.Lemongine.gl.bindBuffer(lemongine.Lemongine.gl.ELEMENT_ARRAY_BUFFER, h.buffer), h.dirtyBuffer)) if (h.dirtyBuffer = !1, h.dirtyLength) {
            n = lemongine.Lemongine.gl;
            var m = lemongine.Lemongine.gl.ELEMENT_ARRAY_BUFFER;
            h = h.getValue();
            f = null != h ? new Uint16Array(h) : null;
            uc.bufferData(n, m, f, lemongine.Lemongine.gl.STATIC_DRAW);
        } else if (-1 == h.dirtyStart) {
            f = lemongine.Lemongine.gl;
            var ka = lemongine.Lemongine.gl.ELEMENT_ARRAY_BUFFER;
            h = h.getValue();
            n = null != h ? new Uint16Array(h) : null;
            f.bufferSubData(ka, 0, n);
        } else f = lemongine.Lemongine.gl, ka = lemongine.Lemongine.gl.ELEMENT_ARRAY_BUFFER, m = 2 * h.dirtyStart, h = h.getValue().slice(h.dirtyStart, h.dirtyEnd), n = null != h ? new Uint16Array(h) : null, f.bufferSubData(ka, m, n);
        c = this.shaderProgram.attribs.h;
        a = Object.keys(c);
        g = a.length;
        for (p = 0; p < g;) k = c[a[p++]], 1 == this.ignoreBuffers.h[k.name] ? this.ignoreBuffers.h[k.name] = !1 : (h = this.attribs.h[k.name], "float" == k.type ? (lemongine.Lemongine.gl.bindBuffer(lemongine.Lemongine.gl.ARRAY_BUFFER, h.buffer), h.dirtyBuffer && (h.dirtyBuffer = !1, h.dirtyLength ? (n = lemongine.Lemongine.gl, m = lemongine.Lemongine.gl.ARRAY_BUFFER, h = h.getValue(), f = null != h ? new Float32Array(h) : null, uc.bufferData(n, m, f, lemongine.Lemongine.gl.STATIC_DRAW)) : -1 == h.dirtyStart ? (n = lemongine.Lemongine.gl, ka = lemongine.Lemongine.gl.ARRAY_BUFFER, h = h.getValue(), h = null != h ? new Float32Array(h) : null, n.bufferSubData(ka, 0, h)) : (f = lemongine.Lemongine.gl, n = lemongine.Lemongine.gl.ARRAY_BUFFER, m = 4 * h.dirtyStart, h = h.getValue().slice(h.dirtyStart, h.dirtyEnd), h = null != h ? new Float32Array(h) : null, f.bufferSubData(n, m, h))), lemongine.Lemongine.gl.vertexAttribPointer(k.location, k.dataCount, lemongine.Lemongine.gl.FLOAT, !1, 4 * k.dataStride, 4 * k.dataOffset), lemongine.Lemongine.gl.enableVertexAttribArray(k.location)) : "uint" == k.type ? (lemongine.Lemongine.gl.bindBuffer(lemongine.Lemongine.gl.ARRAY_BUFFER, h.buffer), h.dirtyBuffer && (h.dirtyBuffer = !1, h.dirtyLength ? (f = lemongine.Lemongine.gl, n = lemongine.Lemongine.gl.ARRAY_BUFFER, h = h.getValue(), h = null != h ? new Uint16Array(h) : null, uc.bufferData(f, n, h, lemongine.Lemongine.gl.STATIC_DRAW)) : -1 == h.dirtyStart ? (f = lemongine.Lemongine.gl, n = lemongine.Lemongine.gl.ARRAY_BUFFER, h = h.getValue(), h = null != h ? new Uint16Array(h) : null, f.bufferSubData(n, 0, h)) : (f = lemongine.Lemongine.gl, n = lemongine.Lemongine.gl.ARRAY_BUFFER, m = 2 * h.dirtyStart, h = h.getValue().slice(h.dirtyStart, h.dirtyEnd), h = null != h ? new Uint16Array(h) : null, f.bufferSubData(n, m, h))), lemongine.Lemongine.gl.vertexAttribPointer(k.location, k.dataCount, lemongine.Lemongine.gl.FLOAT, !1, 2 * k.dataStride, 2 * k.dataOffset), lemongine.Lemongine.gl.enableVertexAttribArray(k.location)) : haxe.Log.trace("Warning! Attrib type '" + k.type + "' not defined (on '" + k.name + "').", {
            fileName: "lemongine/Entity.hx",
            lineNumber: 327,
            className: "lemongine.Entity",
            methodName: "render"
        }));
        if (d) for (d = 0, c = Object.keys(this.shaderProgram.textureBuffers.h), a = c.length, g = 0; g < a;) k = c[g++], p = this.shaderProgram.textureBuffers.h[k], Object.prototype.hasOwnProperty.call(this.textureBuffers.h, k) && (p = this.textureBuffers.h[k]), p.dirtyRender = !1, k = lemongine.Lemongine.gl.getUniformLocation(this.shaderProgram.program, k), lemongine.Lemongine.gl.uniform1i(k, d), lemongine.Lemongine.gl.activeTexture(lemongine.Lemongine.gl.TEXTURE0 + d), p.isCubemap ? lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_CUBE_MAP, p.getTextureBuffer()) : lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_2D, p.getTextureBuffer()), ++d;
        if (!(0 == this.mesh.numVertices() || this.mesh.isIndexed && 0 == this.mesh.numIndices())) {
            null != this.customBlendFunc ? lemongine.Lemongine.gl.blendFuncSeparate(this.customBlendFunc[0], this.customBlendFunc[1], this.customBlendFunc[2], this.customBlendFunc[3]) : this.blendMode == lemongine.shader.BlendMode.ADD ? lemongine.Lemongine.gl.blendFunc(lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE) : this.isTransparent ? lemongine.Lemongine.gl.blendFuncSeparate(lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE) : lemongine.Lemongine.gl.blendFuncSeparate(lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ZERO);
            this.forceNoCulling && lemongine.Renderer.setCulling(!1);
            this.mesh.isIndexed ? lemongine.Lemongine.gl.drawElements(this.primitiveMode, this.mesh.numIndices(), lemongine.Lemongine.gl.UNSIGNED_SHORT, 0) : lemongine.Lemongine.gl.drawArrays(this.primitiveMode, 0, Math.floor(this.mesh.numVertices()));
            c = this.shaderProgram.attribs.h;
            a = Object.keys(c);
            g = a.length;
            for (p = 0; p < g;) lemongine.Lemongine.gl.disableVertexAttribArray(c[a[p++]].location);
            this.forceNoCulling && lemongine.Renderer.setCulling(b.cull, b.isBackFace);
        }
    },
    setUniform: function (b, a) {
        null == a && (a = "");
        Object.prototype.hasOwnProperty.call(this.uniforms.h, b) ? this.uniforms.h[b].value = a : this.uniforms.h[b] = {
            name: b,
            value: a
        };
        return this.shaderProgram.uniforms.h[b].location;
    },
    setAttrib: function (b, a, c, d, f) {
        null == f && (f = -1);
        null == d && (d = -1);
        null == c && (c = !0);
        if (!Object.prototype.hasOwnProperty.call(this.attribs.h, b)) {
            if (null == this.shaderProgram.attribs.h[b]) return -1;
            var g = this.attribs,
                p = new lemongine.pieces.Attrib(b, this.shaderProgram.attribs.h[b].type);
            g.h[b] = p;
        }
        this.attribs.h[b].setValue(a, c, d, f);
        return this.shaderProgram.attribs.h[b].location;
    },
    getAttrib: function (b) {
        return Object.prototype.hasOwnProperty.call(this.attribs.h, b) ? this.attribs.h[b] : null;
    },
    setTextureBuffer: function (b, a) {
        Object.prototype.hasOwnProperty.call(this.shaderProgram.textureBuffers.h, b) || (this.shaderProgram.textureBuffers.h[b] = a);
        Object.prototype.hasOwnProperty.call(this.textureBuffers.h, b) && this.textureBuffers.h[b] == a || (this.textureBuffers.h[b] = a, a.dirtyRender = !0);
    },
    ignoreBuffer: function (b) {
        this.ignoreBuffers.h[b] = !0;
    },
    __class__: lemongine.Entity
}