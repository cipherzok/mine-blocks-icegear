lemongine.BitmapFontEntity = function (b, a, c, d) {
    null == d && (d = lemongine.TextAlignment.LEFT);
    null == a && (a = "");
    this.passwordCharacter = "*";
    this.lines = [];
    this.maxLineWidth = -1;
    this.calculatedWidth = this.calculatedHeight = 0;
    this.glyphAtQuad = new haxe.ds.IntMap();
    this.charToQuad = [];
    lemongine.QuadPoolEntity.call(this, b.image, lemongine.shader.BlendMode.NORMAL, lemongine.shader.BasicFont.getShader());
    this.useColorUniforms = !0;
    this.set_mask(null);
    this.font = b;
    this.text = a;
    this.setColor(c);
    this.textAlignment = d;
    this.create();
    this.isTransparent = !0;
}
m["lemongine.BitmapFontEntity"] = lemongine.BitmapFontEntity
lemongine.BitmapFontEntity.__name__ = "lemongine.BitmapFontEntity"
lemongine.BitmapFontEntity.__super__ = lemongine.QuadPoolEntity
lemongine.BitmapFontEntity.prototype = z(lemongine.QuadPoolEntity.prototype, {
    setText: function (b) {
        this.text != b && (this.text = b, this.create());
    },
    setWordWrap: function (b) {
        null == b && (b = -1);
        this.maxLineWidth = b;
        this.create();
    },
    insertText: function (b, a, c) {
        null == c && (c = 0);
        null == a && (a = -1);
        -1 == a && (a = this.text.length);
        -1 == c && (c = this.text.length - a);
        b = HxOverrides.substr(this.text, 0, a) + b + HxOverrides.substr(this.text, a + c, null);
        this.text != b && (a >= b.length ? (this.text = b, this.create(a)) : 0 > a ? (this.text = b, this.create()) : (this.text = b, this.create(a), this.resetUnusedQuads()));
    },
    indexAtPoint: function (b) {
        if (0 == this.numQuads) return 0;
        var a = lemongine.Mathz.clamp(-1, this.lines.length, Math.floor((b.y - this.characterRectangle(0).y) / this.font.height)) | 0;
        if (-1 == a) return 0;
        if (a == this.lines.length) return this.text.length;
        var c = this.lines[a];
        a = (null != this.lines[a + 1] ? this.lines[a + 1] : this.text.length) - 1;
        var d = this.characterRectangle(c).x + this.characterRectangle(c).width / 2 | 0;
        if (b.x < d) return c;
        d = this.characterRectangle(a).x + this.characterRectangle(a).width / 2 | 0;
        if (b.x >= d) return " " == this.text.charAt(a) || "\n" == this.text.charAt(a) ? a : a + 1;
        do {
            d = Math.ceil((c + a) / 2);
            var f = this.characterRectangle(d).x + this.characterRectangle(d).width / 2 | 0;
            b.x >= f ? c = d : (a = d - 1, this.characterRectangle(a), this.characterRectangle(a));
        } while (c < a);
        return c + 1;
    },
    internalCharAt: function (b) {
        return this.isPassword ? this.passwordCharacter : this.text.charAt(b);
    },
    characterRectangle: function (b) {
        if (0 == this.numQuads) {
            if (0 == b) return new lemongine.Rectangle(0, 0, 0, this.font.height);
            var a = 0;
            for (b >= this.text.length && (b = this.text.length - 1); 0 <= b - a && "\n" == this.internalCharAt(b - a);) ++a;
            return new lemongine.Rectangle(0, this.font.height * a, 0, this.font.height);
        }
        if (b >= this.text.length) {
            b = this.text.length - 1;
            for (a = 0; 0 <= b - a && "\n" == this.internalCharAt(b - a);) ++a;
            var c = Math.min(this.numQuads - 1, this.charToQuad[b]) | 0;
            if (0 < a) return new lemongine.Rectangle(0, (this.mesh.vertices.getValue()[18 * (this.charToQuad[b] - 1) + 1] | 0) + this.font.height * a, 0, this.font.height);
            a = this.font.glyphs.h[this.glyphAtQuad.h[c]];
            return new lemongine.Rectangle(this.mesh.vertices.getValue()[18 * c] + a.frontOffset + a.backOffset - 1 | 0, this.mesh.vertices.getValue()[18 * c + 1] | 0, 0, this.font.height);
        }
        if ("\n" == this.internalCharAt(b)) {
            for (a = 1; 0 <= b - a && "\n" == this.internalCharAt(b - a);) ++a;
            if (1 < a) return new lemongine.Rectangle(0, (this.mesh.vertices.getValue()[18 * (this.charToQuad[b] - 1) + 1] | 0) + this.font.height * (a - 1), 0, this.font.height);
            a = this.font.glyphs.h[this.glyphAtQuad.h[Math.max(0, this.charToQuad[b] - 1) | 0]];
            return new lemongine.Rectangle(this.mesh.vertices.getValue()[18 * (this.charToQuad[b] - 1)] + a.frontOffset + a.backOffset - 1 | 0, this.mesh.vertices.getValue()[18 * (this.charToQuad[b] - 1) + 1] | 0, 0, this.font.height);
        }
        if (this.charToQuad[b] >= this.numQuads) return a = this.font.glyphs.h[this.glyphAtQuad.h[this.charToQuad[b] - 1]], new lemongine.Rectangle(this.mesh.vertices.getValue()[18 * (this.charToQuad[b] - 1)] + a.frontOffset + a.backOffset - 1 | 0, this.mesh.vertices.getValue()[18 * (this.charToQuad[b] - 1) + 1] | 0, 0, this.font.height);
        c = this.font.glyphs.h[this.glyphAtQuad.h[this.charToQuad[b]]];
        return new lemongine.Rectangle(this.mesh.vertices.getValue()[18 * this.charToQuad[b]] | 0, this.mesh.vertices.getValue()[18 * this.charToQuad[b] + 1] | 0, c.backOffset, this.font.height);
    },
    previousWordBoundary: function (b) {
        if (this.isPassword) return 0;
        b >= this.text.length && (b = this.text.length - 1);
        --b;
        if (0 >= b) return 0;
        do {
            var a = HxOverrides.substr(this.text, b - 2, 2);
            if (new EReg("(?!^)\\b(?!$)", "").match(a)) return b - 1;
            --b;
        } while (0 < b);
        return b;
    },
    nextWordBoundary: function (b) {
        if (this.isPassword || b >= this.text.length) return this.text.length;
        if (0 > b) return 0;
        do {
            var a = HxOverrides.substr(this.text, b + 1, 2);
            if (new EReg("(?!^)\\b(?!$)", "").match(a)) return b + 2;
            ++b;
        } while (b <= this.text.length);
        return b;
    },
    getLineOfChar: function (b) {
        return b > this.text.length - 1 && "\n" == this.internalCharAt(this.text.length - 1) ? this.lines.length : lemongine.Mathz.clamp(0, this.lines.length - 1, Math.floor(this.characterRectangle(b).y / this.font.height)) | 0;
    },
    getPreviousNewline: function (b) {
        return -1 == this.text.lastIndexOf("\n", b) ? 0 : b < this.text.length - 1 && "\n" == this.internalCharAt(this.text.length - 1) ? this.text.length : this.text.lastIndexOf("\n", b);
    },
    getNextNewline: function (b) {
        return this.isPassword || -1 == this.text.indexOf("\n", b) ? this.text.length : this.text.indexOf("\n", b);
    },
    getCharAtLine: function (b) {
        return b > this.lines.length - 1 ? this.text.length : this.lines[lemongine.Mathz.clamp(0, this.lines.length - 1, b) | 0];
    },
    recalculateLines: function () {
        this.lines = [0];
        if (!this.isPassword) {
            var b = this.text.split("\r").join("\n").split("\n");
            if (0 >= this.maxLineWidth) for (var a = 0; a < b.length;) this.lines.push(this.lines[this.lines.length - 1] + (b[a++].length + 1));else {
                var c = 0;
                a = 0;
                for (var d = b.length; a < d;) {
                    var f = a++,
                        g = 0;
                    for (f != b.length - 1 && (b[f] += "\n"); g < b[f].length;) {
                        for (var k = 0, h = 0;;) {
                            var m = this.text.charAt(c + k);
                            Object.prototype.hasOwnProperty.call(this.font.glyphs.h, m) && (h += this.font.glyphs.h[m].backOffset);
                            if (h > this.maxLineWidth && 0 < k || g + k >= b[f].length) break;
                            ++k;
                        }
                        if (g + k < b[f].length) for (h = k, m = !1; 1 < h;) {
                            if (this.isPassword || " " != HxOverrides.substr(b[f], g + h, 1)) m = !0;else if (m) {
                                k = h + 1;
                                break;
                            }
                            --h;
                        }
                        g += k;
                        c += k;
                        this.lines.push(c);
                    }
                }
            }
            this.lines.pop();
        }
    },
    create: function (b) {
        null == b && (b = 0);
        -1 < this.maxLineWidth && (b = 0);
        var a,
            c = 0,
            d = 0,
            f = new lemongine.Vector3(),
            g = new lemongine.Point(),
            h = new lemongine.Point();
        var m = !0;
        this.recalculateLines();
        if (1 < b && this.textAlignment == lemongine.TextAlignment.LEFT && 1 >= this.lines.length) {
            b >= this.text.length - 1 && (b = this.text.length - 2);
            var n = this.font.glyphs.h[this.glyphAtQuad.h[this.charToQuad[b] - 1]];
            if (null != n) {
                m = !1;
                c = this.mesh.vertices.getValue()[18 * this.charToQuad[b - 1]] + n.frontOffset + n.backOffset | 0;
                d = this.mesh.vertices.getValue()[18 * this.charToQuad[b - 1] + 1] | 0;
                this.calculatedWidth = c;
                n = this.charToQuad[b];
                for (var x = this.numQuads; n < x;) {
                    var t = n++;
                    this.removeQuad(t);
                    this.glyphAtQuad.remove(t);
                }
            }
        }
        m && (b = 0, this.clearPool(), this.glyphAtQuad.h = {}, this.calculatedWidth = 0);
        this.charToQuad.splice(b, this.charToQuad.length - b);
        n = 0;
        for (x = this.lines.length; n < x;) {
            d = n++;
            var w = this.lines[d];
            m = this.lines.length > d + 1 ? this.lines[d + 1] : this.text.length;
            0 < b ? w = b : c = 0;
            d *= this.font.height;
            t = a = 0;
            if (this.textAlignment == lemongine.TextAlignment.CENTER && 0 == c) {
                for (t = m - 1; t >= w && "\n" == this.internalCharAt(t) || " " == this.internalCharAt(t);) --t;
                for (t < w && (t = m - 1); t >= w;) {
                    var q = this.internalCharAt(t);
                    Object.prototype.hasOwnProperty.call(this.font.glyphs.h, q) && (a += this.font.glyphs.h[q].backOffset);
                    --t;
                }
                t = 0 - Math.floor(a / 2);
            }
            for (q = m; w < q;) {
                var C = w++;
                m = this.internalCharAt(C);
                this.charToQuad[C] = this.numQuads;
                Object.prototype.hasOwnProperty.call(this.font.glyphs.h, m) && (a = this.font.glyphs.h[m], this.updateQuad(this.charToQuad[C], f.set(c - a.frontOffset + t, d), g.set(a.x, a.y), h.set(this.font.width - 1.01, this.font.height - .01)), this.glyphAtQuad.h[this.charToQuad[C]] = m, c += a.backOffset);
            }
            this.calculatedWidth = Math.max(this.calculatedWidth, c);
        }
        this.resetUnusedQuads();
        this.calculatedWidth = Math.max(this.calculatedWidth, c);
        this.calculatedHeight = d + this.font.height;
    },
    set_mask: function (b) {
        null == b || -1 == b.height ? (this.mask = null, this.setUniform("mask", [-1, -1, -1, -1])) : (this.mask = b, this.setUniform("mask", [b.x, b.y, b.width, b.height]));
        return this.mask;
    },
    set_isPassword: function (b) {
        this.isPassword != b && (this.isPassword = b, this.create());
        return b;
    },
    set_passwordCharacter: function (b) {
        this.passwordCharacter != b && (this.passwordCharacter = b, this.create());
        return b;
    },
    __class__: lemongine.BitmapFontEntity
})