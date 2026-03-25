var UI = function () {};
m.UI = UI
UI.__name__ = "UI"
UI.resetFocus = function () {
    lemongine.InputField.focus = null;
}
UI.checkbox = function (b, a, c, d, f, g, p, h) {
    null == h && (h = -1);
    null == p && (p = !1);
    var l = !1;
    a = Main.buttonBehavior(a, p, d, f, 0 > h ? 14 : h, 15, function () {
        l = !0;
        g();
    }, !1);
    l && (c = !c);
    b.addQuad(new lemongine.Vector3(d, f, 0), new lemongine.Point(c ? 14 : 0, 128 + (p ? 30 : 2 != a ? 0 : 15)), new lemongine.Point(14, 15));
}
UI.radio = function (b, a, c, d, f, g, p, h, m) {
    null == m && (m = -1);
    null == h && (h = !1);
    var l = !1;
    a = Main.buttonBehavior(a, c == d || h, f, g, 0 > m ? 14 : m, 15, function () {
        l = !0;
        p();
    }, !1);
    l && (c = d);
    b.addQuad(new lemongine.Vector3(f, g, 0), new lemongine.Point(91 + (c == d ? 14 : 0), 128 + (h ? 30 : 2 != a ? 0 : 15)), new lemongine.Point(14, 15));
}
UI.numericStepper = function (b, a, c, d, f, g, p, h, m, x) {
    b.add9Slice(new lemongine.Rectangle(d, f, g, 22), new lemongine.Rectangle(28, 150, 4, 4), new lemongine.Rectangle(2, 1, 1, 1));
    if (null == UI.fields.h[a]) {
        var l = TextCache.get(a, null == c ? "null" : "" + c, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.black, 1.6, lemongine.TextAlignment.CENTER, 1.5),
            Q = UI.fields;
        l = {
            textField: l,
            input: new lemongine.InputField(l, new lemongine.Point(g / 1.6, 11.25), 1.6)
        };
        Q.h[a] = l;
        UI.fields.h[a].input.set_allowedCharacters("0-9");
    }
    UI.fields.h[a].textField.layer = b.layer + 1;
    UI.fields.h[a].input.updateLayers();
    var B = Main.buttonBehavior(a + "Up", !1, d + g, f, 21, 10, null, !1);
    2 == B && (Q = Main.Instance.mouseDown(), l = Main.Instance.get_fps() / 6 | 0, 1 == (G.toFloat(Q) % G.toFloat(l) | 0) && (c = lemongine.Mathz.clamp(p, h, c + m), UI.fields.h[a].input.set_text(null == c ? "null" : "" + c), x(c)));
    b.addQuad(new lemongine.Vector3(d + g, f), new lemongine.Point(28 + 21 * B, 128), new lemongine.Point(21, 10));
    B = Main.buttonBehavior(a + "Down", !1, d + g, f + 10, 21, 12, null, !1);
    2 == B && (Q = Main.Instance.mouseDown(), l = Main.Instance.get_fps() / 6 | 0, 1 == (G.toFloat(Q) % G.toFloat(l) | 0) && (c = lemongine.Mathz.clamp(p, h, c - m), UI.fields.h[a].input.set_text(null == c ? "null" : "" + c), x(c)));
    b.addQuad(new lemongine.Vector3(d + g, f + 10), new lemongine.Point(28 + 21 * B, 138), new lemongine.Point(21, 12));
    UI.fields.h[a].input.transform.reset().scale2D(1.6).translate(d + 8, f + 4);
    UI.fields.h[a].input.set_maxLength(3);
    UI.fields.h[a].input.containsPoint(Main.Instance.mouse) ? UI.fields.h[a].input.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (UI.fields.h[a].input.set_focused(!0), UI.fields.h[a].input.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : UI.fields.h[a].input.focused && 1 == Main.Instance.mouseDown() && UI.fields.h[a].input.set_focused(!1);
    UI.fields.h[a].input.get_text() != (null == c ? "null" : "" + c) && (c = lemongine.Mathz.clamp(p, h, Std.parseInt(UI.fields.h[a].input.get_text())), UI.fields.h[a].input.get_text() != (null == c ? "null" : "" + c) && UI.fields.h[a].input.set_text(null == c ? "null" : "" + c), x(c));
    UI.fields.h[a].input.update(Main.Instance.scene);
}
UI.textfield = function (b, a, c, d, f, g, p, h, m, x, M, ka, T, t, w, q) {
    null == w && (w = !0);
    null == T && (T = !1);
    null == ka && (ka = !1);
    null == M && (M = "");
    null == x && (x = "");
    null == m && (m = 30);
    null == q && (q = Fonts.get_volter());
    w && b.add9Slice(new lemongine.Rectangle(d, f, g, p * (q.height - 2) + 9 | 0), new lemongine.Rectangle(28, 150, 4, 4), new lemongine.Rectangle(2, 1, 1, 1));
    if (null == UI.fields.h[a]) {
        var l = TextCache.get(a, c, new lemongine.Point(), q, lemongine.Color.black, p, T ? lemongine.TextAlignment.CENTER : lemongine.TextAlignment.LEFT, 1.5);
        w = UI.fields;
        l = {
            textField: l,
            input: new lemongine.InputField(l, new lemongine.Point(g / p - 4, q.height), p)
        };
        w.h[a] = l;
    }
    UI.fields.h[a].textField.layer = b.layer + 1;
    UI.fields.h[a].input.updateLayers();
    UI.fields.h[a].input.transform.reset().scale2D(p).translate(d + (T ? g / 2 | 0 : 4) / p, f + 4 / p);
    UI.fields.h[a].input.set_maxLength(m);
    UI.fields.h[a].input.set_allowedCharacters(x);
    UI.fields.h[a].input.set_isPassword(ka);
    UI.fields.h[a].input.set_passwordCharacter("\u2022");
    Main.Instance.confirmationDialog.visible || (UI.fields.h[a].input.containsPoint(Main.Instance.mouse) ? UI.fields.h[a].input.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (UI.fields.h[a].input.set_focused(!0), UI.fields.h[a].input.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : UI.fields.h[a].input.focused && 1 == Main.Instance.mouseDown() && UI.fields.h[a].input.set_focused(!1));
    c != UI.fields.h[a].input.get_text() && (null != t && (UI.fields.h[a].input.set_text(t(UI.fields.h[a].input.get_text())), UI.fields.h[a].textField.text = UI.fields.h[a].input.get_text()), c = UI.fields.h[a].input.get_text(), h(c));
    UI.fields.h[a].input.update(Main.Instance.scene);
    "" == UI.fields.h[a].input.get_text() && "" != M && (c = TextCache.get(a + "Placeholder", M, new lemongine.Point(d + (T ? g / 2 | 0 : 4) + p, f + 4), q, new lemongine.Color(-7829368), p, T ? lemongine.TextAlignment.CENTER : lemongine.TextAlignment.LEFT, 1.5), c.layer = b.layer + 1, Main.Instance.scene.draw(c));
    return UI.fields.h[a].input;
}
UI.dynamicText = function (b, a, c, d, f, g, p) {
    if (null == UI.fields.h[a]) {
        var l = TextCache.get(a, c, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, p, lemongine.TextAlignment.LEFT, 1.5),
            h = UI.fields;
        g = {
            textField: l,
            input: new lemongine.InputField(l, new lemongine.Point(g / p, 11.25), p)
        };
        h.h[a] = g;
        UI.fields.h[a].input.readonly = !0;
        UI.fields.h[a].input.setSelection(0, 0);
    }
    UI.fields.h[a].textField.layer = b.layer + 1;
    UI.fields.h[a].input.updateLayers();
    UI.fields.h[a].input.transform.reset().scale2D(p).translate(d, f);
    UI.fields.h[a].input.containsPoint(Main.Instance.mouse) ? UI.fields.h[a].input.focused || (Main.Instance.cursor = lime.ui.MouseCursor.TEXT, 1 == Main.Instance.mouseDown() && (UI.fields.h[a].input.set_focused(!0), UI.fields.h[a].input.mouseDownHandler(Main.Instance.mouse.x, Main.Instance.mouse.y, 0))) : UI.fields.h[a].input.focused && 1 == Main.Instance.mouseDown() && UI.fields.h[a].input.set_focused(!1);
    UI.fields.h[a].input.get_text() != c && (UI.fields.h[a].input.set_text(c), UI.fields.h[a].input.setSelection(0, 0));
    UI.fields.h[a].input.update(Main.Instance.scene);
}
UI.dropdown = function (b, a, c, d, f, l, p, h, m) {
    null == m && (m = !1);
    var Q = Main.buttonBehavior(a, m, f, l, p + 22, 22, null, !1);
    2 == Q && 1 == Main.Instance.mouseDown() && (null != UI.currentDropdown && 1 == UI.currentDropdown.open && UI.currentDropdown.id == a ? UI.currentDropdown.open = !1 : UI.currentDropdown = {
        open: !0,
        id: a,
        options: c,
        index: d,
        onChange: h,
        x: f,
        y: l + 22,
        width: p + 22,
        scrollPosition: 0
    });
    null != UI.currentDropdown && 1 == UI.currentDropdown.open && UI.currentDropdown.id == a && (Q = 2);
    if (m) {
        h = new lemongine.Rectangle(f, l, p, 22);
        var B = new lemongine.Rectangle(28 + (0 == Q ? 0 : 27), 154, 5, 22),
            x = new lemongine.Rectangle(3, 3, 1, 16),
            T = new haxe.ds.StringMap(),
            w = lemongine.Mathz.repeatArray([.4, .4, .4, 1], 6);
        T.h.color = w;
        w = lemongine.Mathz.repeatArray([.13333333333333333, .13333333333333333, .13333333333333333, 0], 6);
        T.h.colorOffset = w;
        b.add9Slice(h, B, x, 0, T);
        h = new lemongine.Vector3(f + p, l);
        B = new lemongine.Point(33 + (0 == Q ? 0 : 27), 154);
        x = new lemongine.Point(22, 22);
        T = new haxe.ds.StringMap();
        w = lemongine.Mathz.repeatArray([.4, .4, .4, 1], 6);
        T.h.color = w;
        w = lemongine.Mathz.repeatArray([.13333333333333333, .13333333333333333, .13333333333333333, 0], 6);
        T.h.colorOffset = w;
        b.addQuad(h, B, x, !0, null, null, null, T);
    } else b.add9Slice(new lemongine.Rectangle(f, l, p, 22), new lemongine.Rectangle(28 + (0 == Q ? 0 : 27), 154, 5, 22), new lemongine.Rectangle(3, 3, 1, 16)), b.addQuad(new lemongine.Vector3(f + p, l), new lemongine.Point(33 + (0 == Q ? 0 : 27), 154), new lemongine.Point(22, 22));
    0 < c.length && (a = TextCache.get(a, c[d], new lemongine.Point(f + 6, l + 5), Fonts.get_volter(), m ? new lemongine.Color(-12303292) : lemongine.Color.black, 1.3, lemongine.TextAlignment.LEFT, 1.5), a.setUniform("mask", [-1, 0, (p - 4) / 1.3, 16.923076923076923]), a.layer = b.layer + 1, Main.Instance.scene.draw(a));
}
UI.leftClickMenu = function (b, a, c, d, f, g, p, k, h) {
    null == h && (h = !1);
    d = Main.buttonBehavior(b, h, d, f, g, p, null, !1);
    2 == d && 1 == Main.Instance.mouseDown() && (null != UI.currentDropdown && 1 == UI.currentDropdown.open && UI.currentDropdown.id == b ? UI.currentDropdown.open = !1 : UI.currentDropdown = {
        open: !0,
        id: b,
        options: a,
        index: c,
        onChange: k,
        x: Main.Instance.mouse.x | 0,
        y: Main.Instance.mouse.y | 0,
        width: 150,
        scrollPosition: 0
    });
    null != UI.currentDropdown && 1 == UI.currentDropdown.open && UI.currentDropdown.id == b && (d = 2);
    return d;
}
UI.rightClickMenu = function (b, a, c, d, f, g, p, k, h) {
    null == h && (h = !1);
    2 == Main.buttonBehaviorRightClick(b, h, d, f, g, p, null) && 1 == Main.Instance.rightMouseDown() && (null != UI.currentDropdown && 1 == UI.currentDropdown.open && UI.currentDropdown.id == b ? UI.currentDropdown.open = !1 : UI.currentDropdown = {
        open: !0,
        id: b,
        options: a,
        index: c,
        onChange: k,
        x: Main.Instance.mouse.x | 0,
        y: Main.Instance.mouse.y | 0,
        width: 150,
        scrollPosition: 0
    });
}
UI.drawDropdown = function () {
    if (null != UI.currentDropdown && UI.currentDropdown.open) {
        if (null == UI.dropdownEntity) {
            var b = lemongine.AssetManager.getImage("ui"),
                a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            UI.dropdownEntity = new lemongine.QuadPoolEntity(b, null, a, c);
            UI.dropdownEntity.isTransparent = !0;
            UI.dropdownEntity.layer = 50;
        }
        UI.dropdownEntity.clearPool(!1, !0);
        var f = !1;
        if (6 <= UI.currentDropdown.options.length) {
            var l = UI.currentDropdown.y,
                p = 20 * UI.currentDropdown.options.length;
            0 == Main.Instance.mouseDown() && new lemongine.Rectangle(UI.currentDropdown.x, l, UI.currentDropdown.width - 22, 110).containsPoint(Main.Instance.mouse) && (0 < Main.Instance.mouseWheelDelta ? UI.currentDropdown.scrollPosition = Math.max(0, UI.currentDropdown.scrollPosition - 8) : 0 > Main.Instance.mouseWheelDelta && (UI.currentDropdown.scrollPosition = Math.min(p - 110, UI.currentDropdown.scrollPosition + 8)));
            b = UI.dropdownEntity;
            a = new lemongine.Vector3(UI.currentDropdown.x + UI.currentDropdown.width - 22, l);
            var h = new lemongine.Point(96, 0),
                m = new lemongine.Point(1, 1),
                x = new lemongine.Point(22, 110);
            c = new haxe.ds.StringMap();
            d = lemongine.Mathz.repeatArray([.8588235294117647, .8627450980392157, .8666666666666667, 1], 6);
            c.h.color = d;
            b.addQuad(a, h, m, !0, x, null, null, c);
            c = Main.buttonBehavior(UI.currentDropdown.id + "ScrollUp", !1, UI.currentDropdown.x + UI.currentDropdown.width - 22, l, 22, 20, null, !1);
            UI.dropdownEntity.addQuad(new lemongine.Vector3(UI.currentDropdown.x + UI.currentDropdown.width - 22, l), new lemongine.Point(128 + 22 * c, 170), new lemongine.Point(22, 20), !0, new lemongine.Point(22, 20));
            2 == c && (UI.currentDropdown.scrollPosition = Math.max(0, UI.currentDropdown.scrollPosition - 4), f = !0);
            c = Main.buttonBehavior(UI.currentDropdown.id + "ScrollDown", !1, UI.currentDropdown.x + UI.currentDropdown.width - 22, l + 110 - 20 | 0, 22, 20, null, !1);
            UI.dropdownEntity.addQuad(new lemongine.Vector3(UI.currentDropdown.x + UI.currentDropdown.width - 22, l + 110 - 20 + 1 | 0), new lemongine.Point(128 + 22 * c, 203), new lemongine.Point(22, 20), !0, new lemongine.Point(22, 20));
            2 == c && (UI.currentDropdown.scrollPosition = Math.min(p - 110, UI.currentDropdown.scrollPosition + 4), f = !0);
            c = Math.max(12, 70 * Math.min(1, 110 / Math.max(1, p))) | 0;
            b = new lemongine.Rectangle(UI.currentDropdown.x + UI.currentDropdown.width - 22, l + 20 + Math.min(70 - c, (70 - c) * UI.currentDropdown.scrollPosition / (p - 110)), 22, c + 1);
            c = Main.buttonBehavior(UI.currentDropdown.id + "Scrollbar", !1, b.x | 0, b.y | 0, b.width | 0, b.height | 0, null, !1);
            G.gt(Main.Instance.mouseDown(), 0) && Main.Instance.getUIHover() == UI.currentDropdown.id + "Scrollbar" && (1 == Main.Instance.mouseDown() && (UI.scrollMousePosition = Main.Instance.mouse.y - b.y), c = 2, f = !0, UI.currentDropdown.scrollPosition = lemongine.Mathz.clamp(0, p - 110, (Main.Instance.mouse.y - UI.scrollMousePosition - (l + 22)) / 66 * p));
            UI.dropdownEntity.add9Slice(b, new lemongine.Rectangle(128 + 22 * c, 190, 22, 3), new lemongine.Rectangle(1, 1, 20, 1), 0, null, 1);
            UI.dropdownEntity.addQuad(new lemongine.Vector3(b.x, (b.get_centerY() | 0) - 5), new lemongine.Point(128 + 22 * c, 193), new lemongine.Point(22, 10), !0, new lemongine.Point(22, 10));
            b = l - (UI.currentDropdown.scrollPosition | 0);
            c = 0;
            for (p = UI.currentDropdown.options.length; c < p;) d = [c++], b < l - 20 || b > l + 110 || (h = Math.max(UI.currentDropdown.y, b) | 0, m = Math.min(UI.currentDropdown.y + 110, b + 20) | 0, a = Main.buttonBehavior(UI.currentDropdown.id + "Index" + d[0], !1, UI.currentDropdown.x, h, UI.currentDropdown.width - 22, m - h, function (a) {
                return function () {
                    UI.currentDropdown.open = !1;
                    UI.currentDropdown.onChange(a[0], UI.currentDropdown.options[a[0]]);
                };
            }(d), !1), 0 < a && (f = !0), UI.dropdownEntity.add9Slice(new lemongine.Rectangle(UI.currentDropdown.x, h, UI.currentDropdown.width - 22, m - h), new lemongine.Rectangle(82 + (0 < a ? 6 : UI.currentDropdown.index == d[0] ? 3 : 0), 154, 3, 20), new lemongine.Rectangle(1, 1, 1, 18)), a = TextCache.get("dropDownIndex" + d[0], UI.currentDropdown.options[d[0]], new lemongine.Point(UI.currentDropdown.x + 4, b + 4), Fonts.get_volter(), lemongine.Color.black, 1.3, lemongine.TextAlignment.LEFT, 1.5), a.setUniform("mask", [-1, (l + 1 - (b + 4)) / 1.3, (UI.currentDropdown.width - 22) / 1.3, 83.07692307692308]), a.layer = 51, Main.Instance.scene.draw(a)), b += 20;
        } else for (c = 0, p = UI.currentDropdown.options.length; c < p;) l = [c++], a = Main.buttonBehavior(UI.currentDropdown.id + "Index" + l[0], !1, UI.currentDropdown.x, UI.currentDropdown.y + 20 * l[0], UI.currentDropdown.width, 20, function (a) {
            return function () {
                UI.currentDropdown.open = !1;
                UI.currentDropdown.onChange(a[0], UI.currentDropdown.options[a[0]]);
            };
        }(l), !1), 0 < a && (f = !0), UI.dropdownEntity.add9Slice(new lemongine.Rectangle(UI.currentDropdown.x, UI.currentDropdown.y + 20 * l[0], UI.currentDropdown.width, 20), new lemongine.Rectangle(82 + (0 < a ? 6 : UI.currentDropdown.index == l[0] ? 3 : 0), 154, 3, 20), new lemongine.Rectangle(1, 1, 1, 18)), a = TextCache.get("dropDownIndex" + l[0], UI.currentDropdown.options[l[0]], new lemongine.Point(UI.currentDropdown.x + 4, UI.currentDropdown.y + 20 * l[0] + 4), Fonts.get_volter(), lemongine.Color.black, 1.3, lemongine.TextAlignment.LEFT, 1.5), a.setUniform("mask", [-1, 0, (UI.currentDropdown.width - 6) / 1.3, 20]), a.layer = 51, Main.Instance.scene.draw(a);
        1 != Main.Instance.mouseDown() || 0 != f || new lemongine.Rectangle(UI.currentDropdown.x, UI.currentDropdown.y - 22, UI.currentDropdown.width, 22).containsPoint(Main.Instance.mouse) || (UI.currentDropdown.open = !1);
        Main.Instance.scene.draw(UI.dropdownEntity);
    }
}
UI.fields = new haxe.ds.StringMap()
UI.scrollMousePosition = 0