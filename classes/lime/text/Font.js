lime.text.Font = function (b) {
    null != b && (this.name = b);
    this.__init || (void 0 == this.ascender && (this.ascender = 0), void 0 == this.descender && (this.descender = 0), void 0 == this.height && (this.height = 0), void 0 == this.numGlyphs && (this.numGlyphs = 0), void 0 == this.underlinePosition && (this.underlinePosition = 0), void 0 == this.underlineThickness && (this.underlineThickness = 0), void 0 == this.unitsPerEM && (this.unitsPerEM = 0), null != this.__fontID ? lime.utils.Assets.isLocal(this.__fontID) && this.__fromBytes(lime.utils.Assets.getBytes(this.__fontID)) : null != this.__fontPath && this.__fromFile(this.__fontPath));
}
m["lime.text.Font"] = lime.text.Font
lime.text.Font.__name__ = "lime.text.Font"
lime.text.Font.fromFile = function (b) {
    if (null == b) return null;
    var a = new lime.text.Font();
    a.__fromFile(b);
    return a;
}
lime.text.Font.loadFromName = function (b) {
    return new lime.text.Font().__loadFromName(b);
}
lime.text.Font.__measureFontNode = function (b) {
    var a = window.document.createElement("span");
    a.setAttribute("aria-hidden", "true");
    var c = window.document.createTextNode("BESbswy");
    a.appendChild(c);
    c = a.style;
    c.display = "block";
    c.position = "absolute";
    c.top = "-9999px";
    c.left = "-9999px";
    c.fontSize = "300px";
    c.width = "auto";
    c.height = "auto";
    c.lineHeight = "normal";
    c.margin = "0";
    c.padding = "0";
    c.fontVariant = "normal";
    c.whiteSpace = "nowrap";
    c.fontFamily = b;
    window.document.body.appendChild(a);
    return a;
}
lime.text.Font.prototype = {
    __fromBytes: function (b) {
        this.__fontPath = null;
    },
    __fromFile: function (b) {
        this.__fontPath = b;
    },
    __loadFromName: function (b) {
        var a = this,
            c = new lime.app.Promise();
        this.name = b;
        var d = D.navigator.userAgent.toLowerCase(),
            f = 0 <= d.indexOf(" safari/") && 0 > d.indexOf(" chrome/");
        d = new EReg("(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)", "i").match(d);
        if (!f && !d && window.document.fonts && (ea = window.document.fonts, F(ea, ea.load))) window.document.fonts.load("1em '" + b + "'").then(function (b) {
            c.complete(a);
        }, function (d) {
            lime.utils.Log.warn('Could not load web font "' + b + '"', {
                fileName: "lime/text/Font.hx",
                lineNumber: 640,
                className: "lime.text.Font",
                methodName: "__loadFromName"
            });
            c.complete(a);
        });else {
            var g = lime.text.Font.__measureFontNode("'" + b + "', sans-serif"),
                k = lime.text.Font.__measureFontNode("'" + b + "', serif"),
                h = g.offsetWidth,
                m = k.offsetWidth,
                n = -1,
                x = 0,
                t,
                q;
            n = window.setInterval(function () {
                x += 1;
                t = g.offsetWidth != h || k.offsetWidth != m;
                q = 3E3 <= 50 * x;
                if (t || q) window.clearInterval(n), g.parentNode.removeChild(g), k.parentNode.removeChild(k), k = g = null, q && lime.utils.Log.warn('Could not load web font "' + b + '"', {
                    fileName: "lime/text/Font.hx",
                    lineNumber: 675,
                    className: "lime.text.Font",
                    methodName: "__loadFromName"
                }), c.complete(a);
            }, 50);
        }
        return c.future;
    },
    __class__: lime.text.Font
}