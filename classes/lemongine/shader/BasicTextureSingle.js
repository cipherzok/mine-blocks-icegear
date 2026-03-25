lemongine.shader.BasicTextureSingle = function () {}
m["lemongine.shader.BasicTextureSingle"] = lemongine.shader.BasicTextureSingle
lemongine.shader.BasicTextureSingle.__name__ = "lemongine.shader.BasicTextureSingle"
lemongine.shader.BasicTextureSingle.getShader = function (b) {
    if (null == b || b == lemongine.shader.BlendMode.ADD) b = lemongine.shader.BlendMode.NORMAL;
    if (!lemongine.shader.BasicTextureSingle.shaders.exists(b)) {
        var a = new lemongine.ShaderProgram("lemongine.shader.BasicTexture." + fa[b.__enum__].__constructs__[b._hx_index]._hx_name, lemongine.shader.BasicTextureSingle.getFragmentShader(b), lemongine.shader.BasicTextureSingle.getVertexShader());
        a.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix", "uvPosition");
        a.setUniform("texClip", [0, 0, 0, 0], "float4");
        a.setUniform("texSize", [0, 0], "float2");
        a.setUniform("color", [1, 1, 1, 1], "float4");
        a.setUniform("colorOffset", [0, 0, 0, 0], "float4");
        a.setUniform("wrap", [1, 1], "float2");
        b != lemongine.shader.BlendMode.NORMAL && (a.setUniform("texClipBG", [0, 0, 0, 0], "float4"), a.setUniform("texSizeBG", [0, 0], "float2"));
        lemongine.shader.BasicTextureSingle.shaders.set(b, a);
    }
    return lemongine.shader.BasicTextureSingle.shaders.get(b);
}
lemongine.shader.BasicTextureSingle.setupEntity = function (b, a, c, d, f, g, k, h, m, n) {
    null == k && (k = !0);
    null == g && (g = !0);
    b.setTextureBuffer("texture", a);
    null != c ? b.setUniform("texClip", [c.x, c.y, c.width, c.height]) : b.setUniform("texClip", [0, 0, a.width, a.height]);
    b.setUniform("texSize", [a.width, a.height]);
    null != d ? b.setUniform("color", d.toFloatArray()) : b.setUniform("color", [1, 1, 1, 1]);
    null != f ? b.setUniform("colorOffset", f.toFloatArray()) : b.setUniform("colorOffset", [0, 0, 0, 0]);
    b.setUniform("wrap", [g ? 1 : 0, k ? 1 : 0]);
    null != h && (b.setTextureBuffer("background", a), null != m ? b.setUniform("texClipBG", [m.x, m.y, m.width, m.height]) : b.setUniform("texClipBG", [0, 0, h.width, h.height]), b.setUniform("texSizeBG", [h.width, h.height]));
}
lemongine.shader.BasicTextureSingle.getFragmentShader = function (b) {
    var a = "precision mediump float;\r\n\t\t\tvarying vec2 uvPositionF;\r\n\t\t\t\r\n\t\t\tuniform sampler2D texture;\r\n\t\t\tuniform vec2 texSize;\r\n\t\t\tuniform vec4 colorOffset;\r\n\t\t\tuniform vec4 color;\r\n\t\t\tuniform vec4 texClip;\r\n\t\t\tuniform vec2 wrap;\r\n\t\t";
    if (b == lemongine.shader.BlendMode.NORMAL) a += "\r\n\t\t\t\tvoid main () {\r\n\t\t\t\t\tvec2 val = (uvPositionF * texClip.zw + texClip.xy) / texSize.xy;\r\n\t\t\t\t\tvec4 src = texture2D(texture, mod(val, 1.0)*wrap + clamp(val, 0.0, 1.0)*(1.0-wrap));\r\n\t\t\t\t\t\r\n\t\t\t\t\tsrc.rgb /= src.a;\r\n\t\t\t\t\tsrc.rgba *= color;\r\n\t\t\t\t\tsrc.rgb *= src.a;\r\n\t\t\t\t\t\r\n\t\t\t\t\tgl_FragColor = clamp(colorOffset + src, 0.0, 1.0);\r\n\t\t\t\t}\r\n\t\t\t";else {
        a += "\r\n\t\t\t\tuniform sampler2D background;\r\n\t\t\t\t\r\n\t\t\t\tuniform vec2 texSizeBG;\r\n\t\t\t\tuniform vec4 texClipBG;\r\n\t\t\t\t\r\n\t\t\t\tvoid main () {\r\n\t\t\t\t\tvec4 src1 = texture2D(texture, mod((uvPositionF * texClip.zw + texClip.xy) / texSize.xy, 1.0));\r\n\t\t\t\t\tvec4 dst1 = texture2D(background, mod((uvPositionF * texClipBG.zw + texClipBG.xy) / texSizeBG.xy, 1.0));\r\n\t\t\t\t\t\r\n\t\t\t\t\tvec3 src = src1.rgb;\r\n\t\t\t\t\tvec3 dst = dst1.rgb;\r\n\t\t\t\t\t\r\n\t\t\t\t\tvec4 mixedColor = vec4(";
        switch (b._hx_index) {
        case 1:
            a += "src + dst";
            break;
        case 2:
            a += "src * dst";
            break;
        case 3:
            a += "src - dst";
            break;
        case 4:
            a += "min(src, dst)";
            break;
        case 5:
            a += "vec3((src.x == 0.0) ? 0.0 : (1.0 - ((1.0 - dst.x) / src.x)),\r\n\t\t\t\t\t\t\t\t\t\t  (src.y == 0.0) ? 0.0 : (1.0 - ((1.0 - dst.y) / src.y)),\r\n\t\t\t\t\t\t\t\t\t\t  (src.z == 0.0) ? 0.0 : (1.0 - ((1.0 - dst.z) / src.z)))";
            break;
        case 6:
            a += "(src + dst) - 1.0";
            break;
        case 7:
            a += "max(src, dst)";
            break;
        case 8:
            a += "(src + dst) - (src * dst)";
            break;
        case 9:
            a += "vec3((src.x == 1.0) ? 1.0 : min(1.0, dst.x / (1.0 - src.x)),\r\n\t\t\t\t\t\t\t\t\t\t  (src.y == 1.0) ? 1.0 : min(1.0, dst.y / (1.0 - src.y)),\r\n\t\t\t\t\t\t\t\t\t\t  (src.z == 1.0) ? 1.0 : min(1.0, dst.z / (1.0 - src.z)))";
            break;
        case 10:
            a += "vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\r\n\t\t\t\t\t\t\t\t\t\t  (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\r\n\t\t\t\t\t\t\t\t\t\t  (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)))";
            break;
        case 11:
            a += "vec3((src.x <= 0.5) ? (dst.x - (1.0 - 2.0 * src.x) * dst.x * (1.0 - dst.x)) : (((src.x > 0.5) && (dst.x <= 0.25)) ? (dst.x + (2.0 * src.x - 1.0) * (4.0 * dst.x * (4.0 * dst.x + 1.0) * (dst.x - 1.0) + 7.0 * dst.x)) : (dst.x + (2.0 * src.x - 1.0) * (sqrt(dst.x) - dst.x))),\r\n\t\t\t\t\t\t\t\t\t\t  (src.y <= 0.5) ? (dst.y - (1.0 - 2.0 * src.y) * dst.y * (1.0 - dst.y)) : (((src.y > 0.5) && (dst.y <= 0.25)) ? (dst.y + (2.0 * src.y - 1.0) * (4.0 * dst.y * (4.0 * dst.y + 1.0) * (dst.y - 1.0) + 7.0 * dst.y)) : (dst.y + (2.0 * src.y - 1.0) * (sqrt(dst.y) - dst.y))),\r\n\t\t\t\t\t\t\t\t\t\t  (src.z <= 0.5) ? (dst.z - (1.0 - 2.0 * src.z) * dst.z * (1.0 - dst.z)) : (((src.z > 0.5) && (dst.z <= 0.25)) ? (dst.z + (2.0 * src.z - 1.0) * (4.0 * dst.z * (4.0 * dst.z + 1.0) * (dst.z - 1.0) + 7.0 * dst.z)) : (dst.z + (2.0 * src.z - 1.0) * (sqrt(dst.z) - dst.z))))";
            break;
        case 12:
            a += "vec3((src.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - src.x) * (1.0 - dst.x)),\r\n\t\t\t\t\t\t\t\t\t\t  (src.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - src.y) * (1.0 - dst.y)),\r\n\t\t\t\t\t\t\t\t\t\t  (src.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - src.z) * (1.0 - dst.z)))";
            break;
        case 13:
            a += "vec3((src.x <= 0.5) ? (1.0 - (1.0 - dst.x) / (2.0 * src.x)) : (dst.x / (2.0 * (1.0 - src.x))),\r\n\t\t\t\t\t\t\t\t\t\t  (src.y <= 0.5) ? (1.0 - (1.0 - dst.y) / (2.0 * src.y)) : (dst.y / (2.0 * (1.0 - src.y))),\r\n\t\t\t\t\t\t\t\t\t\t  (src.z <= 0.5) ? (1.0 - (1.0 - dst.z) / (2.0 * src.z)) : (dst.z / (2.0 * (1.0 - src.z))))";
            break;
        case 14:
            a += "2.0 * src + dst - 1.0";
            break;
        case 15:
            a += "vec3((src.x > 0.5) ? max(dst.x, 2.0 * (src.x - 0.5)) : min(dst.x, 2.0 * src.x),\r\n\t\t\t\t\t\t\t\t\t\t  (src.x > 0.5) ? max(dst.y, 2.0 * (src.y - 0.5)) : min(dst.y, 2.0 * src.y),\r\n\t\t\t\t\t\t\t\t\t\t  (src.z > 0.5) ? max(dst.z, 2.0 * (src.z - 0.5)) : min(dst.z, 2.0 * src.z))";
            break;
        case 16:
            a += "abs(dst - src)";
            break;
        case 17:
            a += "src + dst - 2.0 * src * dst";
            break;
        default:
            a = "src";
        }
        a += ", src1.a);\r\n\t\t\t\t\r\n\t\t\t\tgl_FragColor = clamp(colorOffset + color*mixedColor, 0.0, 1.0);\r\n\t\t\t}\r\n\t\t\t";
    }
    return a;
}
lemongine.shader.BasicTextureSingle.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\tattribute vec2 uvPosition;\r\n\r\n\t\t\tvarying vec2 uvPositionF;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tuvPositionF = uvPosition;\r\n\t\t\t\t\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}
lemongine.shader.BasicTextureSingle.shaders = new haxe.ds.EnumValueMap()