lemongine.Renderer = function () {}
m["lemongine.Renderer"] = lemongine.Renderer
lemongine.Renderer.__name__ = "lemongine.Renderer"
lemongine.Renderer.clear = function (b) {
    lemongine.Renderer.activate(b);
    lemongine.Renderer.setDepthMask(!0);
    lemongine.Lemongine.gl.clear(lemongine.Lemongine.gl.COLOR_BUFFER_BIT | lemongine.Lemongine.gl.DEPTH_BUFFER_BIT);
    lemongine.Renderer.lastProgram = null;
    lemongine.Renderer.lastMesh = null;
    lemongine.Renderer.lastTextures = null;
}
lemongine.Renderer.render = function (b, a) {
    for (var c = 0; c < a.length;) {
        var d = a[c];
        ++c;
        d.visible && lemongine.Renderer.renderEntity(d, b);
    }
}
lemongine.Renderer.renderEntity = function (b, a) {
    var c = b.shaderProgram == lemongine.Renderer.lastProgram,
        d = !1,
        f = !1;
    lemongine.Renderer.currentScene != a && lemongine.Renderer.activate(a);
    b.isTransparent && lemongine.Renderer.setDepthMask(!1);
    c && (b.mesh == lemongine.Renderer.lastMesh && null != b.mesh.vertices && 0 == b.mesh.vertices.dirtyBuffer && null != b.mesh.indices && 0 == b.mesh.indices.dirtyBuffer && (d = !0), lemongine.Renderer.buffersChanged(b.textureBuffers, lemongine.Renderer.lastTextures) || (f = !0));
    lemongine.Renderer.callCount++;
    b.render(lemongine.Renderer.currentScene, !c, !d, !f);
    lemongine.Renderer.lastProgram = b.shaderProgram;
    lemongine.Renderer.lastMesh = b.mesh;
    lemongine.Renderer.lastTextures = b.textureBuffers;
}
lemongine.Renderer.buffersChanged = function (b, a) {
    for (var c = Object.keys(b.h), d = c.length, f = 0; f < d;) {
        var g = c[f++];
        if (!Object.prototype.hasOwnProperty.call(a.h, g) || b.h[g] != a.h[g] || b.h[g].dirtyRender) return !0;
    }
    c = Object.keys(a.h);
    d = c.length;
    for (f = 0; f < d;) if (!Object.prototype.hasOwnProperty.call(b.h, c[f++])) return !0;
    return !1;
}
lemongine.Renderer.resetCallCount = function () {
    lemongine.Renderer.callCount = 0;
}
lemongine.Renderer.activate = function (b, a) {
    null == a && (a = !1);
    if (lemongine.Renderer.currentScene != b || a) {
        lemongine.Renderer.currentScene = b;
        if (b.isInternalScene()) lemongine.Lemongine.gl.bindFramebuffer(lemongine.Lemongine.gl.FRAMEBUFFER, null);else if (b.firstActivation) {
            if (b.firstActivation = !1, null != b.cubemap) null != b.glRenderBuffer && lemongine.Lemongine.gl.deleteRenderbuffer(b.glRenderBuffer), null == b.glFrameBuffer && (b.glFrameBuffer = lemongine.Lemongine.gl.createFramebuffer()), b.glRenderBuffer = lemongine.Lemongine.gl.createRenderbuffer(), lemongine.Lemongine.gl.bindRenderbuffer(lemongine.Lemongine.gl.RENDERBUFFER, b.glRenderBuffer), lemongine.Lemongine.gl.bindFramebuffer(lemongine.Lemongine.gl.FRAMEBUFFER, b.glFrameBuffer), lemongine.Lemongine.gl.renderbufferStorage(lemongine.Lemongine.gl.RENDERBUFFER, lemongine.Lemongine.gl.DEPTH_COMPONENT16, b.get_width(), b.get_height()), lemongine.Lemongine.gl.framebufferRenderbuffer(lemongine.Lemongine.gl.FRAMEBUFFER, lemongine.Lemongine.gl.DEPTH_ATTACHMENT, lemongine.Lemongine.gl.RENDERBUFFER, b.glRenderBuffer), lemongine.Lemongine.gl.framebufferTexture2D(lemongine.Lemongine.gl.FRAMEBUFFER, lemongine.Lemongine.gl.COLOR_ATTACHMENT0, b.cubemapSide, b.cubemap.getTextureBuffer(), 0);else {
                null != b.get_glTexture() && lemongine.Lemongine.gl.deleteTexture(b.get_glTexture());
                null != b.glRenderBuffer && lemongine.Lemongine.gl.deleteRenderbuffer(b.glRenderBuffer);
                null == b.glFrameBuffer && (b.glFrameBuffer = lemongine.Lemongine.gl.createFramebuffer());
                a = lemongine.Lemongine.gl.createTexture();
                b.glRenderBuffer = lemongine.Lemongine.gl.createRenderbuffer();
                lemongine.Lemongine.gl.bindRenderbuffer(lemongine.Lemongine.gl.RENDERBUFFER, b.glRenderBuffer);
                lemongine.Lemongine.gl.bindFramebuffer(lemongine.Lemongine.gl.FRAMEBUFFER, b.glFrameBuffer);
                lemongine.Lemongine.gl.renderbufferStorage(lemongine.Lemongine.gl.RENDERBUFFER, lemongine.Lemongine.gl.DEPTH_COMPONENT16, b.get_width(), b.get_height());
                lemongine.Lemongine.gl.framebufferRenderbuffer(lemongine.Lemongine.gl.FRAMEBUFFER, lemongine.Lemongine.gl.DEPTH_ATTACHMENT, lemongine.Lemongine.gl.RENDERBUFFER, b.glRenderBuffer);
                lemongine.Lemongine.gl.bindTexture(lemongine.Lemongine.gl.TEXTURE_2D, a);
                lemongine.Lemongine.gl.pixelStorei(lemongine.Lemongine.gl.UNPACK_ALIGNMENT, 1);
                var c = lemongine.Lemongine.gl,
                    d = lemongine.Lemongine.gl.TEXTURE_2D,
                    f = lemongine.Lemongine.gl.RGBA,
                    g = b.get_width(),
                    k = b.get_height(),
                    h = lemongine.Lemongine.gl.RGBA,
                    m = lemongine.Lemongine.gl.UNSIGNED_BYTE,
                    n = b.get_width() * b.get_height() * 4 | 0;
                n = null != n ? new Uint8Array(n) : null;
                uc.texImage2D(c, d, 0, f, g, k, 0, h, m, n);
                lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_WRAP_S, lemongine.Lemongine.gl.CLAMP_TO_EDGE);
                lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_WRAP_T, lemongine.Lemongine.gl.CLAMP_TO_EDGE);
                lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_MIN_FILTER, lemongine.Lemongine.gl.NEAREST);
                lemongine.Lemongine.gl.texParameteri(lemongine.Lemongine.gl.TEXTURE_2D, lemongine.Lemongine.gl.TEXTURE_MAG_FILTER, lemongine.Lemongine.gl.NEAREST);
                null == b.get_glTexture() ? (b.set_glTexture(a), lemongine.Lemongine.gl.framebufferTexture2D(lemongine.Lemongine.gl.FRAMEBUFFER, lemongine.Lemongine.gl.COLOR_ATTACHMENT0, lemongine.Lemongine.gl.TEXTURE_2D, b.get_glTexture(), 0)) : b.set_glTexture(a);
            }
        } else lemongine.Lemongine.gl.bindFramebuffer(lemongine.Lemongine.gl.FRAMEBUFFER, b.glFrameBuffer);
        lemongine.Renderer.initialize();
    }
}
lemongine.Renderer.setViewport = function () {
    if (lemongine.Renderer.currentScene.isInternalScene()) {
        var b = lemongine.Renderer.currentScene.get_width(),
            a = lemongine.Renderer.currentScene.get_height();
        if (0 < Main.Instance.viewportScale) var c = Main.Instance.viewportScale;else c = Math.min(lime.app.Application.current.__window.__width / lemongine.Renderer.currentScene.get_width(), lime.app.Application.current.__window.__height / lemongine.Renderer.currentScene.get_height()), Main.Instance.viewportScaleSnap && (c = Math.floor(c));
        Main.Instance.__internal_scale = c;
        lemongine.Lemongine.gl.viewport((lime.app.Application.current.__window.__width - b * c) / 2 | 0, (lime.app.Application.current.__window.__height - a * c) / 2 | 0, b * c | 0, a * c | 0);
    } else lemongine.Lemongine.gl.viewport(0, 0, lemongine.Renderer.currentScene.get_width() | 0, lemongine.Renderer.currentScene.get_height() | 0);
}
lemongine.Renderer.initialize = function () {
    lemongine.Lemongine.gl.clearColor(G.toFloat(lemongine.Renderer.currentScene.backgroundColor.r) / G.toFloat(255), G.toFloat(lemongine.Renderer.currentScene.backgroundColor.g) / G.toFloat(255), G.toFloat(lemongine.Renderer.currentScene.backgroundColor.b) / G.toFloat(255), G.toFloat(lemongine.Renderer.currentScene.backgroundColor.a) / G.toFloat(255));
    lemongine.Renderer.setCulling(lemongine.Renderer.currentScene.cull, lemongine.Renderer.currentScene.isBackFace);
    lemongine.Renderer.setViewport();
}
lemongine.Renderer.setDepthMask = function (b) {
    lemongine.Renderer.depthMask != b && (lemongine.Renderer.depthMask = b, lemongine.Lemongine.gl.depthMask(b));
}
lemongine.Renderer.setDepthTest = function (b) {
    lemongine.Renderer.depthTest != b && (lemongine.Renderer.depthTest = b, lemongine.Renderer.depthTest ? lemongine.Lemongine.gl.enable(lemongine.Lemongine.gl.DEPTH_TEST) : lemongine.Lemongine.gl.disable(lemongine.Lemongine.gl.DEPTH_TEST));
}
lemongine.Renderer.setCulling = function (b, a) {
    lemongine.Renderer.culling != b && (lemongine.Renderer.culling = b, lemongine.Renderer.culling ? lemongine.Lemongine.gl.enable(lemongine.Lemongine.gl.CULL_FACE) : lemongine.Lemongine.gl.disable(lemongine.Lemongine.gl.CULL_FACE));
    null != a && lemongine.Renderer.cullFaceBack != a && (lemongine.Renderer.cullFaceBack = a, lemongine.Renderer.cullFaceBack ? lemongine.Lemongine.gl.cullFace(lemongine.Lemongine.gl.BACK) : lemongine.Lemongine.gl.cullFace(lemongine.Lemongine.gl.FRONT));
}
lemongine.Renderer.globalInitialize = function () {
    lemongine.Lemongine.gl.depthFunc(lemongine.Lemongine.gl.LEQUAL);
    lemongine.Lemongine.gl.enable(lemongine.Lemongine.gl.BLEND);
    lemongine.Lemongine.gl.blendFunc(lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA);
    lemongine.Renderer.setDepthTest(!0);
    lemongine.Renderer.setDepthMask(!0);
    lemongine.Renderer.setCulling(!0, !0);
}
lemongine.Renderer.callCount = 0
lemongine.Renderer.depthMask = !1
lemongine.Renderer.culling = !1
lemongine.Renderer.cullFaceBack = !0
lemongine.Renderer.depthTest = !1