lemongine.InputField = function (b, a, c) {
    null == c && (c = 1);
    this.mouseOnlyDraggingEnd = !1;
    this.mousePoint = new lemongine.Point();
    this.mouseDownPoint = new lemongine.Point();
    this.mouse = new lemongine.Point();
    this.mouseDown = !1;
    this.clickTime = -100;
    this.focused = this.isDoubleClick = this.isTripleClick = !1;
    this.cursorBlinkOffset = 0;
    this.cursorsDirty = !1;
    this.cursors = [];
    this.scrollPosition = new lemongine.Point(0, 0);
    this.customTextInputParser = null;
    this.leftScrollPadding = 0;
    this.wordWrap = this.multiline = this.isPassword = !1;
    this.fontScale = 1;
    this.size = new lemongine.Point(100, 10);
    this.transform = new lemongine.Matrix4();
    this.allowedRegex = new EReg("[\n\r]", "g");
    this.allowedCharacters = "";
    this.readonly = !1;
    this.length = 0;
    this.maxLength = -1;
    this.textFieldEntity = b;
    this.size.set(a.x, a.y);
    this.fontScale = c;
    this.cursorEntity = new lemongine.QuadPoolEntity(lemongine.Image.getWhitePixel(), null, lemongine.shader.BasicFont.getShader());
    this.cursorEntity.isTransparent = !0;
    this.cursorEntity.customBlendFunc = [lemongine.Lemongine.gl.ONE_MINUS_DST_COLOR, lemongine.Lemongine.gl.ZERO, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ZERO];
    this.cursorEntity.layer = b.layer + 1;
    this.selectionEntity = new lemongine.QuadPoolEntity(lemongine.Image.getWhitePixel(), null, lemongine.shader.BasicFont.getShader());
    this.selectionEntity.isTransparent = !0;
    this.selectionEntity.customBlendFunc = [lemongine.Lemongine.gl.ONE_MINUS_DST_COLOR, lemongine.Lemongine.gl.ZERO, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ZERO];
    this.updateLayers();
    this.clearCursors();
}
m["lemongine.InputField"] = lemongine.InputField
lemongine.InputField.__name__ = "lemongine.InputField"
lemongine.InputField.regainFocus = function () {
    haxe.Timer.delay(function () {
        Main.Instance.__window.__backend.setTextInputEnabled(null != lemongine.InputField.focus);
    }, 0);
}
lemongine.InputField.registerListeners = function () {
    Main.Instance.addEventListener(lemongine.Event.ACTIVATE, lemongine.InputField.regainFocus);
    Main.Instance.addEventListener(lemongine.Event.TEXT_INPUT, lemongine.InputField.textInputHook);
    Main.Instance.addEventListener(lemongine.Event.KEY_DOWN, lemongine.InputField.keyDownHook);
    Main.Instance.addEventListener(lemongine.Event.KEY_DOWN_REPEAT, lemongine.InputField.keyDownRepeatHook);
    Main.Instance.addEventListener(lemongine.Event.MOUSE_DOWN, lemongine.InputField.mouseDownHook);
    Main.Instance.addEventListener(lemongine.Event.MOUSE_MOVE, lemongine.InputField.mouseMoveHook);
    Main.Instance.addEventListener(lemongine.Event.MOUSE_UP, lemongine.InputField.mouseUpHook);
}
lemongine.InputField.textInputHook = function (b) {
    b = b.split("\r\n").join("\n");
    null != lemongine.InputField.focus && lemongine.InputField.focus.textHandler(b);
}
lemongine.InputField.keyDownHook = function (b, a) {
    null != lemongine.InputField.focus && lemongine.InputField.focus.keyDownHandler(b, a);
}
lemongine.InputField.keyDownRepeatHook = function (b, a) {
    null != lemongine.InputField.focus && lemongine.InputField.focus.keyDownRepeatHandler(b, a);
}
lemongine.InputField.mouseDownHook = function (b, a, c) {
    null != lemongine.InputField.focus && lemongine.InputField.focus.mouseDownHandler(b, a, c);
}
lemongine.InputField.mouseMoveHook = function (b, a) {
    null != lemongine.InputField.focus && lemongine.InputField.focus.mouseMoveHandler(b, a);
}
lemongine.InputField.mouseUpHook = function (b, a, c) {
    null != lemongine.InputField.focus && lemongine.InputField.focus.mouseUpHandler(b, a, c);
}
lemongine.InputField.prototype = {
    updateLayers: function () {
        this.cursorEntity.layer = this.textFieldEntity.layer + 1;
        this.selectionEntity.layer = this.textFieldEntity.layer + 1;
    },
    offsetX: function () {
        return this.textFieldEntity.textAlignment == lemongine.TextAlignment.LEFT ? 0 : this.textFieldEntity.textAlignment == lemongine.TextAlignment.CENTER ? this.size.x / 2 | 0 : this.size.x | 0;
    },
    update: function (b) {
        this.textFieldEntity.transform.reset().translate(-this.scrollPosition.x, -this.scrollPosition.y).multiply(this.transform.values);
        this.cursorEntity.transform.reset().translate(-this.scrollPosition.x, -this.scrollPosition.y).multiply(this.transform.values);
        this.selectionEntity.transform.reset().translate(-this.scrollPosition.x, -this.scrollPosition.y).multiply(this.transform.values);
        this.textFieldEntity.transform.translate(this.offsetX());
        this.cursorEntity.transform.translate(this.offsetX());
        this.selectionEntity.transform.translate(this.offsetX());
        this.textFieldEntity.set_mask(new lemongine.Rectangle(this.scrollPosition.x - this.offsetX(), this.scrollPosition.y, this.size.x, this.size.y));
        this.cursorEntity.setUniform("mask", this.textFieldEntity.mask.toArray());
        this.selectionEntity.setUniform("mask", this.textFieldEntity.mask.toArray());
        if (null != b && (b.draw(this.textFieldEntity), this.cursorsDirty && this.updateCursors(), this.focused)) {
            if (this.readonly) var a = !1;else {
                var c = Main.Instance.tick - this.cursorBlinkOffset;
                a = Main.Instance.get_fps();
                c = G.toFloat(c) % G.toFloat(a) | 0;
                a = Main.Instance.get_fps() / 2;
                a = G.toFloat(c) < a;
            }
            a && b.draw(this.cursorEntity);
            b.draw(this.selectionEntity);
        }
        this.focused && (this.containsPoint(this.mouse) ? Main.Instance.cursor = lime.ui.MouseCursor.TEXT : this.mouseDown && (b = this.screenPointToLocalPoint(this.mouse), b.x < this.scrollPosition.x ? (--this.scrollPosition.x, this.handleMouseMove(), this.scrollToCursor()) : b.x > this.scrollPosition.x + this.size.x && (this.scrollPosition.x += 1, this.handleMouseMove(), this.scrollToCursor())));
    },
    deleteBackwards: function (b, a) {
        null == a && (a = !1);
        null == b && (b = !1);
        for (var c = -1, d = null, f = [], g = this.get_text(), k = 0, h = this.cursors.length; k < h;) {
            var m = k++,
                n = this.cursors[m];
            if (n.start == n.end && 0 < n.start && !a) {
                if (b) {
                    var x = this.textFieldEntity.previousWordBoundary(n.end);
                    g = HxOverrides.substr(g, 0, x) + HxOverrides.substr(g, n.start, null);
                    n.start = x;
                } else g = HxOverrides.substr(g, 0, this.first(n) - 1) + HxOverrides.substr(g, this.first(n), null), n.start--;
                n.end = n.start;
            } else g = HxOverrides.substr(g, 0, this.first(n)) + HxOverrides.substr(g, this.last(n), null), n.start = n.end = this.first(n);
            -1 == c && (c = this.first(n));
            null != d && d.start == n.start && f.unshift(m);
            d = n;
            n.anchor = null;
        }
        for (k = 0; k < f.length;) this.cursors.splice(f[k++], 1);
        this.cursorsDirty = !0;
        this.textFieldEntity.insertText(HxOverrides.substr(g, c, null), c, -1);
        this.scrollToCursor();
    },
    deleteForwards: function (b) {
        null == b && (b = !1);
        for (var a = -1, c = null, d = [], f = this.get_text(), g = 0, k = this.cursors.length; g < k;) {
            var h = g++,
                m = this.cursors[h];
            if (m.start == m.end && m.end < this.get_text().length) {
                if (b) {
                    var n = this.textFieldEntity.nextWordBoundary(m.start);
                    f = HxOverrides.substr(f, 0, m.start) + HxOverrides.substr(f, n, null);
                } else f = HxOverrides.substr(f, 0, m.start) + HxOverrides.substr(f, m.start + 1, null);
            } else f = HxOverrides.substr(f, 0, this.first(m)) + HxOverrides.substr(f, this.last(m), null), m.start = m.end = this.first(m);
            -1 == a && (a = this.first(m));
            null != c && c.start == m.start && d.unshift(h);
            c = m;
            m.anchor = null;
        }
        for (g = 0; g < d.length;) this.cursors.splice(d[g++], 1);
        this.cursorsDirty = !0;
        this.textFieldEntity.insertText(HxOverrides.substr(f, a, null), a, -1);
        this.scrollToCursor();
    },
    moveSelections: function (b, a) {
        null == a && (a = !1);
        for (var c = [], d = -1, f = 0, g = this.cursors.length; f < g;) {
            var k = f++,
                h = this.cursors[k];
            h.end = a ? 0 < b ? lemongine.Mathz.clamp(0, this.get_text().length, this.textFieldEntity.nextWordBoundary(h.end)) | 0 : lemongine.Mathz.clamp(0, this.get_text().length, this.textFieldEntity.previousWordBoundary(h.end)) | 0 : lemongine.Mathz.clamp(0, this.get_text().length, h.end + b) | 0;
            h.start == h.end && h.end == d && c.unshift(k);
            d = h.end;
            h.anchor = null;
        }
        for (f = 0; f < c.length;) this.cursors.splice(c[f++], 1);
        this.cursorsDirty = !0;
        this.scrollToCursor();
    },
    moveCursors: function (b, a) {
        null == a && (a = !1);
        for (var c = [], d = -1, f = 0, g = this.cursors.length; f < g;) {
            var k = f++,
                h = this.cursors[k];
            h.end = a ? 0 < b ? h.start = lemongine.Mathz.clamp(0, this.get_text().length, this.textFieldEntity.nextWordBoundary(h.end)) | 0 : h.start = lemongine.Mathz.clamp(0, this.get_text().length, this.textFieldEntity.previousWordBoundary(h.end)) | 0 : h.end != h.start ? 0 < b ? h.start = lemongine.Mathz.clamp(0, this.get_text().length, this.last(h)) | 0 : h.start = lemongine.Mathz.clamp(0, this.get_text().length, this.first(h)) | 0 : h.start = lemongine.Mathz.clamp(0, this.get_text().length, this.first(h) + b) | 0;
            h.end == d && c.unshift(k);
            d = h.end;
            h.anchor = null;
        }
        for (f = 0; f < c.length;) this.cursors.splice(c[f++], 1);
        this.cursorsDirty = !0;
        this.scrollToCursor();
    },
    insertText: function (b) {
        var a = 0,
            c = -1,
            d = null,
            f = [],
            g = this.get_text();
        b = this.cleanText(b);
        if (-1 < this.maxLength) if (1 < this.cursors.length) {
            for (var k = this.get_text().length, h = 0, m = this.cursors; h < m.length;) {
                var n = m[h];
                ++h;
                k += b.length - (this.last(n) - this.first(n));
            }
            if (k > this.maxLength) return;
        } else b = HxOverrides.substr(b, 0, this.maxLength - this.get_text().length + (this.last(this.cursors[0]) - this.first(this.cursors[0])));
        h = 0;
        for (m = this.cursors.length; h < m;) k = h++, n = this.cursors[k], -1 == c && (c = this.first(n)), n.start += a, n.end += a, a = b.length - Math.abs(n.end - n.start) | 0, g = HxOverrides.substr(g, 0, this.first(n)) + b + HxOverrides.substr(g, this.last(n), null), n.start = n.end = this.first(n), this.scrollToCursor(), n.end += b.length, n.start = n.end, n.anchor = null, "" == b && null != d && d.start == n.start && f.unshift(k), d = n;
        for (h = 0; h < f.length;) this.cursors.splice(f[h++], 1);
        this.cursorsDirty = !0;
        0 > c && (c = 0);
        this.textFieldEntity.insertText(HxOverrides.substr(g, c, null), c, -1);
        this.scrollToCursor();
    },
    first: function (b) {
        return Math.min(b.start, b.end) | 0;
    },
    last: function (b) {
        return Math.max(b.start, b.end) | 0;
    },
    textHandler: function (b) {
        null == b || this.readonly || (null != this.customTextInputParser && (b = this.customTextInputParser(b)), b = this.cleanText(b), "" != b && this.insertText(b));
    },
    keyDownRepeatHandler: function (b, a) {
        if (ec.get_ctrlKey(a) || ec.get_metaKey(a)) switch (b) {
        case 8:
            this.readonly || this.deleteBackwards(!0);
            break;
        case 127:
            this.readonly || this.deleteForwards(!0);
            break;
        case 1073741903:
            ec.get_shiftKey(a) ? ec.get_metaKey(a) ? (this.cursors = [{
                start: this.cursors[0].start,
                end: this.get_text().length,
                anchor: null
            }], this.cursorsDirty = !0) : this.moveSelections(1, !0) : ec.get_metaKey(a) ? (this.cursors = [{
                start: this.get_text().length,
                end: this.get_text().length,
                anchor: null
            }], this.cursorsDirty = !0) : this.moveCursors(1, !0);
            break;
        case 1073741904:
            ec.get_shiftKey(a) ? ec.get_metaKey(a) ? (this.cursors = [{
                start: this.cursors[0].start,
                end: 0,
                anchor: null
            }], this.cursorsDirty = !0) : this.moveSelections(-1, !0) : ec.get_metaKey(a) ? (this.cursors = [{
                start: 0,
                end: 0,
                anchor: null
            }], this.cursorsDirty = !0) : this.moveCursors(-1, !0);
        } else switch (b) {
        case 8:
            this.readonly || this.deleteBackwards();
            break;
        case 13:
            this.multiline && this.insertText("\n");
            break;
        case 127:
            this.readonly || this.deleteForwards();
            break;
        case 1073741903:
            ec.get_shiftKey(a) ? this.moveSelections(1) : this.moveCursors(1);
            break;
        case 1073741904:
            ec.get_shiftKey(a) ? this.moveSelections(-1) : this.moveCursors(-1);
            break;
        case 1073741905:
            b = this.textFieldEntity.characterRectangle(this.cursors[0].end);
            var c = this.cursors[0].anchor,
                d = this.textFieldEntity.indexAtPoint(new lemongine.Point(null != c ? c : b.x, b.y + this.textFieldEntity.font.height));
            this.cursors[0].end == d && (d = this.get_text().length);
            ec.get_shiftKey(a) ? this.setSelection(this.cursors[0].start, d) : this.setSelection(d, d);
            this.cursors[0].anchor = null != c ? c : b.x;
            break;
        case 1073741906:
            b = this.textFieldEntity.characterRectangle(this.cursors[0].end), c = this.cursors[0].anchor, d = this.textFieldEntity.indexAtPoint(new lemongine.Point(null != c ? c : b.x, b.y - this.textFieldEntity.font.height)), this.cursors[0].end == d && (d = 0), ec.get_shiftKey(a) ? this.setSelection(this.cursors[0].start, d) : this.setSelection(d, d), this.cursors[0].anchor = null != c ? c : b.x;
        }
    },
    keyDownHandler: function (b, a) {
        if (ec.get_ctrlKey(a) || ec.get_metaKey(a)) switch (b) {
        case 97:
            ec.get_shiftKey(a) ? this.setSelection(this.get_text().length, this.get_text().length) : this.selectAll();
            break;
        case 118:
            lemongine.InputField.regainFocus();
            break;
        case 99:
        case 120:
            a = "";
            for (var c = 0, d = this.cursors; c < d.length;) {
                var f = d[c];
                ++c;
                f.start != f.end && (a += this.get_text().substring(this.first(f), this.last(f)));
            }
            "" != a && lime.system.Clipboard.set_text(a);
            120 == b && (this.readonly || this.deleteBackwards(!1, !0));
            lemongine.InputField.regainFocus();
            break;
        case 1073741898:
            ec.get_shiftKey(a) ? (this.cursors = [{
                start: this.cursors[0].start,
                end: 0,
                anchor: null
            }], this.cursorsDirty = !0) : this.setSelection(0, 0);
            break;
        case 1073741901:
            ec.get_shiftKey(a) ? (this.cursors = [{
                start: this.cursors[0].start,
                end: this.get_text().length,
                anchor: null
            }], this.cursorsDirty = !0) : this.setSelection(this.get_text().length, this.get_text().length);
        } else switch (b) {
        case 1073741898:
            b = this.textFieldEntity.getCharAtLine(this.textFieldEntity.getLineOfChar(this.cursors[0].end));
            this.cursors[0].end == b && (b = this.textFieldEntity.getPreviousNewline(this.cursors[0].end - 1), 0 != b && ++b);
            ec.get_shiftKey(a) ? (this.cursors = [{
                start: this.cursors[0].start,
                end: b,
                anchor: null
            }], this.cursorsDirty = !0) : this.setSelection(b, b);
            break;
        case 1073741901:
            b = this.textFieldEntity.getCharAtLine(this.textFieldEntity.getLineOfChar(this.cursors[0].end) + 1), this.cursors[0].end <= this.get_text().length - 1 && b == this.get_text().length && (b = this.get_text().length - 1), this.cursors[0].end == b && (b = this.textFieldEntity.getNextNewline(this.cursors[0].end)), ec.get_shiftKey(a) ? (this.cursors = [{
                start: this.cursors[0].start,
                end: b,
                anchor: null
            }], this.cursorsDirty = !0) : this.setSelection(b, b);
        }
    },
    mouseDownHandler: function (b, a, c) {
        0 == c && this.containsPoint(new lemongine.Point(b, a)) && (Main.Instance.__window.__backend.setTextInputEnabled(!0), this.mouseDown = !0, this.mouse.set(b, a), this.mousePoint = this.screenPointToLocalPoint(this.mouse), 0 == Main.Instance.keyDown(1073742049) && (this.mouseDownPoint = this.mousePoint), this.cursors.splice(1, this.cursors.length - 1), this.cursors[0].end = this.indexAtPoint(this.mousePoint), 0 == Main.Instance.keyDown(1073742049) && (this.cursors[0].start = this.cursors[0].end), this.cursorsDirty = !0, this.mouseOnlyDraggingEnd = G.gt(Main.Instance.keyDown(1073742049), 0), .3 > new Date().getTime() / 1E3 - this.clickTime ? this.isDoubleClick ? (this.isDoubleClick = !1, this.isTripleClick = !0, this.selectAll()) : (this.isDoubleClick = !0, this.isTripleClick = !1, this.mouseOnlyDraggingEnd || (this.cursors[0].start = this.textFieldEntity.previousWordBoundary(this.cursors[0].start + 1)), this.cursors[0].end = this.textFieldEntity.nextWordBoundary(this.cursors[0].end - 1)) : this.isTripleClick = this.isDoubleClick = !1, this.clickTime = new Date().getTime() / 1E3);
    },
    mouseMoveHandler: function (b, a) {
        this.mouse.set(b, a);
        this.mouseDown && this.handleMouseMove();
    },
    handleMouseMove: function () {
        this.mousePoint = this.screenPointToLocalPoint(new lemongine.Point(this.mouse.x, this.mouse.y));
        if (this.isDoubleClick) {
            this.cursorsDirty = !0;
            var b = this.textFieldEntity,
                a = this.indexAtPoint(this.mousePoint) - 1;
            this.cursors[0].end = b.nextWordBoundary(a);
            this.mouseOnlyDraggingEnd || (b = this.textFieldEntity.previousWordBoundary(this.indexAtPoint(this.mouseDownPoint) + 1), this.cursors[0].end < b ? (b = this.textFieldEntity, a = this.indexAtPoint(this.mousePoint), this.cursors[0].end = b.previousWordBoundary(a), b = this.textFieldEntity, a = this.indexAtPoint(this.mouseDownPoint) - 1, this.cursors[0].start = b.nextWordBoundary(a)) : (this.cursors[0].start = b, b = Math.max(this.cursors[0].end, this.textFieldEntity.nextWordBoundary(this.indexAtPoint(this.mouseDownPoint) - 1)) | 0, this.cursors[0].end = b));
        } else this.isTripleClick || (this.cursorsDirty = !0, this.cursors[0].end = this.indexAtPoint(this.mousePoint));
    },
    mouseUpHandler: function (b, a, c) {
        0 == c && (this.mouseDown = !1);
    },
    updateCursors: function () {
        this.selectionEntity.clearPool();
        this.cursorEntity.clearPool();
        for (var b = 0, a = this.cursors; b < a.length;) {
            var c = a[b];
            ++b;
            var d;
            if (c.start < c.end) {
                var f = this.textFieldEntity.characterRectangle(c.start);
                c = d = this.textFieldEntity.characterRectangle(c.end);
            } else d = this.textFieldEntity.characterRectangle(c.start), c = f = this.textFieldEntity.characterRectangle(c.end);
            if (d.y != f.y) {
                var g = this.size.x - f.x;
                this.selectionEntity.addQuad(new lemongine.Vector3(f.x, f.y, 0), new lemongine.Point(), new lemongine.Point(), !0, new lemongine.Point(g, f.height));
                this.selectionEntity.addQuad(new lemongine.Vector3(-this.offsetX(), f.get_bottom(), 0), new lemongine.Point(), new lemongine.Point(), !0, new lemongine.Point(this.size.x, d.y - f.get_bottom()));
                this.selectionEntity.addQuad(new lemongine.Vector3(-this.offsetX(), d.y, 0), new lemongine.Point(), new lemongine.Point(), !0, new lemongine.Point(d.x + this.offsetX(), d.height));
            } else this.selectionEntity.addQuad(new lemongine.Vector3(f.x, f.y, 0), new lemongine.Point(), new lemongine.Point(), !0, new lemongine.Point(d.x - f.x, d.get_bottom() - f.y));
            this.cursorEntity.addQuad(new lemongine.Vector3(Math.max(-this.offsetX(), c.x), c.y, 0), new lemongine.Point(), new lemongine.Point(), !0, new lemongine.Point(1, c.height));
        }
        this.selectionEntity.resetUnusedQuads();
        this.cursorEntity.resetUnusedQuads();
        this.cursorsDirty = !1;
    },
    scrollToCursor: function () {
        this.cursorBlinkOffset = Main.Instance.tick;
        for (var b = null, a = new lemongine.Rectangle(), c = lemongine.Mathz.MAX_INT(), d = 0, f = this.cursors; d < f.length;) {
            var g = f[d];
            ++d;
            var k = this.textFieldEntity.characterRectangle(g.end),
                h = Math.max(this.scrollPosition.x - k.x, k.get_right() - (this.scrollPosition.x + this.size.x - 1)) | 0;
            if (0 >= h) break;
            h < c && (c = h, a = k, b = g);
        }
        null != b && (a.x < this.scrollPosition.x ? this.scrollPosition.x = a.x : a.get_right() - this.size.x + 1 > this.scrollPosition.x && (b = a.get_right() - this.size.x, this.scrollPosition.x = b + 1));
        this.textFieldEntity.calculatedWidth + 1 > this.size.x && this.scrollPosition.x > this.textFieldEntity.calculatedWidth - this.size.x + 1 && (this.scrollPosition.x = this.textFieldEntity.calculatedWidth - this.size.x + 1);
        if (this.scrollPosition.x < -this.leftScrollPadding || this.textFieldEntity.calculatedWidth + 1 <= this.size.x) this.scrollPosition.x = -this.leftScrollPadding;
    },
    setSelection: function (b, a) {
        this.cursors = [{
            start: b,
            end: a,
            anchor: null
        }];
        this.cursorsDirty = !0;
        this.scrollToCursor();
        return this.cursors[0];
    },
    selectAll: function () {
        this.setSelection(0, this.get_text().length);
    },
    clearCursors: function () {
        this.setSelection(this.get_text().length, this.get_text().length);
    },
    containsPoint: function (b) {
        return lemongine.Mathz.pointInTransformedRectangle(new lemongine.Point(b.x + this.offsetX(), b.y), new lemongine.Rectangle(0, 0, this.size.x, this.size.y), this.transform);
    },
    indexAtPoint: function (b) {
        return this.textFieldEntity.indexAtPoint(new lemongine.Point(b.x, b.y));
    },
    screenPointToLocalPoint: function (b) {
        b = this.transform.inverse().apply(new lemongine.Vector3(b.x - this.offsetX(), b.y));
        return new lemongine.Point(b.x + this.scrollPosition.x, b.y + this.scrollPosition.y);
    },
    cleanText: function (b) {
        b = this.textFieldEntity.font.cleanText(b);
        return b.replace(this.allowedRegex.r, "");
    },
    get_text: function () {
        return this.textFieldEntity.text;
    },
    set_text: function (b) {
        null != this.customTextInputParser && (b = this.customTextInputParser(b));
        b = this.cleanText(b);
        -1 < this.maxLength && (b = HxOverrides.substr(b, 0, this.maxLength));
        this.textFieldEntity.text != b && (this.textFieldEntity.setText(b), this.clearCursors());
        return b;
    },
    set_leftScrollPadding: function (b) {
        this.scrollPosition.x == -this.leftScrollPadding && (this.scrollPosition.x = -b);
        return this.leftScrollPadding = b;
    },
    set_focused: function (b) {
        b ? lemongine.InputField.focus != this && (null != lemongine.InputField.focus ? lemongine.InputField.focus.set_focused(!1) : lemongine.InputField.registerListeners(), lemongine.InputField.focus = this, this.cursorBlinkOffset = Main.Instance.tick, lemongine.InputField.regainFocus()) : lemongine.InputField.focus == this && (lemongine.InputField.focus = null, lemongine.InputField.regainFocus());
        return this.focused = b;
    },
    set_maxLength: function (b) {
        -1 < b && this.get_text().length > b && (this.textFieldEntity.insertText("", b, -1), this.clearCursors(), this.scrollToCursor());
        return this.maxLength = b;
    },
    get_length: function () {
        return this.get_text().length;
    },
    set_allowedCharacters: function (b) {
        if (this.allowedCharacters == b) return b;
        this.allowedCharacters = b;
        this.updateAllowedCharacters();
        return b;
    },
    updateAllowedCharacters: function () {
        this.allowedRegex = "" == this.allowedCharacters ? this.multiline ? new EReg("^", "g") : new EReg("[\n\r]", "g") : new EReg("[^" + this.allowedCharacters + "]", "g");
        var b = this.cleanText(this.get_text());
        b != this.get_text() && (this.clearCursors(), this.textFieldEntity.setText(b));
    },
    set_multiline: function (b) {
        this.multiline != b && (this.multiline = b, this.updateAllowedCharacters());
        return b;
    },
    set_isPassword: function (b) {
        this.isPassword != b && (this.isPassword = b, this.textFieldEntity.set_isPassword(b), this.cursorsDirty = !0);
        return b;
    },
    set_passwordCharacter: function (b) {
        this.textFieldEntity.passwordCharacter != b && (this.textFieldEntity.set_passwordCharacter(b), this.cursorsDirty = !0);
        return b;
    },
    set_wordWrap: function (b) {
        this.wordWrap != b && (this.textFieldEntity.setWordWrap(this.size.x | 0), this.wordWrap = b, this.cursorsDirty = !0);
        return b;
    },
    __class__: lemongine.InputField
}