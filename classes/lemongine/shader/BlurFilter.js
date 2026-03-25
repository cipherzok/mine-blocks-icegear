lemongine.shader.BlurFilter = function () {}
m["lemongine.shader.BlurFilter"] = lemongine.shader.BlurFilter
lemongine.shader.BlurFilter.__name__ = "lemongine.shader.BlurFilter"
lemongine.shader.BlurFilter.getShader = function (b, a) {
    null == a && (a = !0);
    null == b && (b = lemongine.shader.Quality.MEDIUM);
    switch (b._hx_index) {
    case 0:
        var c = 10;
        var d = "low";
        break;
    case 1:
        c = 25;
        d = "medium";
        break;
    case 2:
        c = 100, d = "high";
    }
    b = "lemongine.shader.BlurFilter." + (a ? "clamp" : "wrap") + "." + d;
    Object.prototype.hasOwnProperty.call(lemongine.shader.BlurFilter.shaders.h, b) || (a = new lemongine.ShaderProgram(b, lemongine.shader.BlurFilter.getFragmentShader(a, c), lemongine.shader.BlurFilter.getVertexShader()), a.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix", "uvPosition"), a.setUniform("blur", [0, 0], "float2"), a.setUniform("texSize", [0, 0], "float2"), lemongine.shader.BlurFilter.shaders.h[b] = a);
    return lemongine.shader.BlurFilter.shaders.h[b];
}
lemongine.shader.BlurFilter.getFragmentShader = function (b, a) {
    return "precision mediump float;\r\n\t\t\t\r\n\t\t\tvarying vec2 uvPositionF;\r\n\t\t\t\r\n\t\t\tuniform vec2 blur;\r\n\t\t\tuniform vec2 texSize;\r\n\t\t\tuniform sampler2D texture;\r\n\t\t\t\r\n\t\t\tvoid main() {\r\n\t\t\t\t\r\n\t\t\t\tvec4 accumulation = vec4(0.0, 0.0, 0.0, 0.0);\r\n\t\t\t\tfloat totalGain = 0.0;\r\n\t\t\t\tfloat maxSide = max(blur.x, blur.y);\r\n\t\t\t\tfor (int x = -" + a + "; x <= " + a + "; x++) {\r\n\t\t\t\t\tfor (int y = -" + a + "; y <= " + a + "; y++) {\r\n\t\t\t\t\t\tfloat xNorm = float(x) * " + 1 / a + ";\r\n\t\t\t\t\t\tfloat yNorm = float(y) * " + 1 / a + ";\r\n\t\t\t\t\t\tfloat dist = xNorm * xNorm / (blur.x / maxSide * blur.x / maxSide) + yNorm * yNorm / (blur.y / maxSide * blur.y / maxSide);\r\n\t\t\t\t\t\tif (dist <= 1.0) {\r\n\t\t\t\t\t\t\tfloat gain = (1.0 - dist);\r\n\t\t\t\t\t\t\ttotalGain += gain;\r\n\t\t\t\t\t\t\tvec2 newUV = uvPositionF + vec2(1.0 / texSize.x * xNorm * maxSide, 1.0 / texSize.y * yNorm * maxSide);\r\n\t\t\t\t\t\t\t" + (b ? "\r\n\t\t\t\t\t\t\t\tnewUV.x = clamp(newUV.x, 1.0 / texSize.x, 1.0 - 1.0 / texSize.x * xNorm);\r\n\t\t\t\t\t\t\t\tnewUV.y = clamp(newUV.y, 1.0 / texSize.y, 1.0 - 1.0 / texSize.y * yNorm);\r\n\t\t\t\t\t\t\t" : "") + "\r\n\t\t\t\t\t\t\taccumulation += texture2D(texture, newUV) * gain;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\taccumulation /= max(0.01, totalGain);\r\n\t\t\t\t\r\n\t\t\t\tgl_FragColor = accumulation.xyzw;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t";
}
lemongine.shader.BlurFilter.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\tattribute vec2 uvPosition;\r\n\t\t\t//attribute vec4 texClip;\r\n\t\t\t\r\n\t\t\t//varying vec4 texClipF;\r\n\t\t\tvarying vec2 uvPositionF;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tuvPositionF = uvPosition;\r\n\t\t\t\t//texClipF = texClip;\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}
lemongine.shader.BlurFilter.shaders = new haxe.ds.StringMap()