var TextCache = function () {};
m.TextCache = TextCache
TextCache.__name__ = "TextCache"
TextCache.get = function (b, a, c, d, f, g, p, k) {
    null == p && (p = lemongine.TextAlignment.LEFT);
    var l = !1;
    if (Object.prototype.hasOwnProperty.call(TextCache.entityCache.h, b)) b = TextCache.entityCache.h[b], b.entity.textAlignment = p, a != b.entity.text && (l = !0), b.entity.setText(a), b.expires = 10, null == f || f.equals(b.color) || (b.entity.setColor(f), b.color = f);else {
        null == f && (f = new lemongine.Color(-16777216));
        var h = TextCache.entityCache;
        a = {
            entity: new lemongine.BitmapFontEntity(null != d ? d : Fonts.get_volter(), a, f, p),
            color: f,
            expires: 1,
            aliasBleed: 1.5
        };
        h.h[b] = a;
        b = TextCache.entityCache.h[b];
    }
    null != k && k != b.aliasBleed && (b.aliasBleed = k);
    if (null != g && g != b.scale) {
        c = null != c ? new lemongine.Vector3(c.x, c.y, b.entity.transform.getZ()) : new lemongine.Vector3(b.entity.transform.getX(), b.entity.transform.getY(), b.entity.transform.getZ());
        b.entity.transform.reset().scale(g, g, g).setPosition(c.x, c.y, c.z);
        if (null == b.scale || Math.floor(g) == g != (Math.floor(b.scale) == b.scale)) Math.floor(g) != g ? (b.entity.shaderProgram = shader.ScaledText.getShader(), b.entity.setUniform("aliasBleed", b.aliasBleed / 2)) : b.entity.shaderProgram = lemongine.shader.BasicFont.getShader(lemongine.shader.BlendMode.NORMAL), b.entity.updateShaderAttribs();
        b.scale = g;
        p == lemongine.TextAlignment.CENTER ? b.entity.transform.translate(0, -b.entity.calculatedHeight * g / 2) : p == lemongine.TextAlignment.RIGHT && b.entity.transform.translate(-b.entity.calculatedWidth * g, 0);
    } else null == c || b.entity.transform.getX() == c.x && b.entity.transform.getY() == c.y ? l && (p == lemongine.TextAlignment.CENTER ? b.entity.transform.translate(0, -b.entity.calculatedHeight * g / 2) : p == lemongine.TextAlignment.RIGHT && b.entity.transform.translate(-b.entity.calculatedWidth * g, 0)) : (b.point = c, b.entity.transform.setPosition(c.x, c.y, b.entity.transform.getZ()), p == lemongine.TextAlignment.CENTER ? b.entity.transform.translate(0, -b.entity.calculatedHeight * g / 2) : p == lemongine.TextAlignment.RIGHT && b.entity.transform.translate(-b.entity.calculatedWidth * g, 0));
    return b.entity;
}
TextCache.entityCache = new haxe.ds.StringMap()