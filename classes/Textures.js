var Textures = function () {};
m.Textures = Textures
Textures.__name__ = "Textures"
Textures.getTexture = function (b, a) {
    null == a && (a = "");
    "" != a && (b += "[" + a + "]");
    return Object.prototype.hasOwnProperty.call(Textures.blockTextureMap.h, b) ? Textures.blockTextureMap.h[b] : Textures.blockTextureMap.h.missing;
}
Textures.hasTexture = function (b, a) {
    null == a && (a = "");
    "" != a && (b += "[" + a + "]");
    return Object.prototype.hasOwnProperty.call(Textures.blockTextureMap.h, b);
}
Textures.texturePackInit = function () {
    Textures.blockTexturesScene = new lemongine.Scene(0, 0);
    Textures.texturePackJson = {};
    try {
        Textures.texturePackJson = JSON.parse(lime.utils.Assets.getText("assets/images/world/blocks.json"));
    } catch (l) {
        haxe.Log.trace("Couldn't load texture pack JSON! " + Std.string(haxe.Exception.caught(l).unwrap()), {
            fileName: "src/Textures.hx",
            lineNumber: 53,
            className: "Textures",
            methodName: "texturePackInit"
        });
        Textures.state = TextureLoadingState.DONE;
        return;
    }
    Textures.inputTextures = new haxe.ds.StringMap();
    for (var b = 0, a = js.Boot.__cast(Textures.texturePackJson.images, Array).length; b < a;) {
        var c = Textures.texturePackJson.images[b++],
            d = Textures.inputTextures,
            f = c.meta.file;
        c = lemongine.AssetManager.loadImage("assets/images/world/" + c.meta.file);
        d.h[f] = c;
    }
    Textures.state = TextureLoadingState.LOADING_IMAGES;
}
Textures.texturePackCheckImages = function () {
    for (var b = Textures.inputTextures.h, a = Object.keys(b), c = a.length, d = 0; d < c;) if (!b[a[d++]].imageLoaded) return !1;
    Textures.texturePackProcess();
    return !0;
}
Textures.texturePackProcess = function () {
    Textures.blockTexturesScene.setup2D(1024, 1024, lemongine.Color.clear);
    Textures.blockTextures = new lemongine.Image().fromScene(Textures.blockTexturesScene);
    Textures.blockTexturesOccupied = new haxe.ds.IntMap();
    for (var b = 0, a = Math.pow(1024 / Textures.TEXTURE_UNIT_SIZE, 2); b < a;) Textures.blockTexturesUnoccupied.h[b++] = !0;
    var c = new lemongine.Point();
    b = 0;
    for (a = js.Boot.__cast(Textures.texturePackJson.images, Array).length; b < a;) for (var d = Textures.texturePackJson.images[b++], f = 0, g = Reflect.fields(d.textures); f < g.length;) {
        var p = g[f];
        ++f;
        var h = d.meta.unit_size;
        var n = null != Reflect.field(d.textures, p).width ? Reflect.field(d.textures, p).width * h : h;
        var m = null != Reflect.field(d.textures, p).height ? Reflect.field(d.textures, p).height * h : h;
        Textures.nearestUnoccupied(c, Textures.blockTexturesUnoccupied, Math.ceil(n / Textures.TEXTURE_UNIT_SIZE), Math.ceil(m / Textures.TEXTURE_UNIT_SIZE));
        Textures.blockTexturesScene.draw2D(Textures.inputTextures.h[d.meta.file], new lemongine.Point(c.x * Textures.TEXTURE_UNIT_SIZE, c.y * Textures.TEXTURE_UNIT_SIZE), new lemongine.Rectangle(Reflect.field(d.textures, p).x * h, Reflect.field(d.textures, p).y * h, n, m));
        h = 0;
        for (var M = Math.ceil(n / Textures.TEXTURE_UNIT_SIZE); h < M;) for (var x = h++, T = 0, t = Math.ceil(m / Textures.TEXTURE_UNIT_SIZE); T < t;) {
            var w = T++;
            Textures.blockTexturesUnoccupied.remove(1024 / Textures.TEXTURE_UNIT_SIZE * (c.y + w) + (c.x + x));
            Textures.blockTexturesOccupied.h[1024 / Textures.TEXTURE_UNIT_SIZE * (c.y + w) + (c.x + x)] = p;
        }
        h = Textures.blockTextureMap;
        n = new lemongine.Rectangle(c.x * Textures.TEXTURE_UNIT_SIZE, c.y * Textures.TEXTURE_UNIT_SIZE, n, m);
        h.h[p] = n;
    }
    c = Textures.blockTextures.clone(!0);
    b = 0;
    for (a = Reflect.fields(Textures.texturePackJson.compositing); b < a.length;) if (d = a[b], ++b, Object.prototype.hasOwnProperty.call(Textures.blockTextureMap.h, d)) {
        p = [];
        n = Reflect.field(Textures.texturePackJson.compositing, d);
        f = 0;
        for (g = n.length; f < g;) m = f++, Object.prototype.hasOwnProperty.call(n[m], "id") && Object.prototype.hasOwnProperty.call(Textures.blockTextureMap.h, Reflect.field(n[m], "id")) && p.push(new lemongine.Point(Textures.blockTextureMap.h[Reflect.field(n[m], "id")].x, Textures.blockTextureMap.h[Reflect.field(n[m], "id")].y));
        Textures.stackTextures(c, Textures.blockTexturesScene, Textures.blockTextureMap.h[d], p);
    }
    c.destroy();
    c = Textures.blockTextures.clone();
    Textures.blockTexturesScene.clear();
    Textures.blockTexturesScene.draw2D(c);
    Textures.blockTexturesScene.render();
    Textures.state = TextureLoadingState.DONE;
}
Textures.nearestUnoccupied = function (b, a, c, d) {
    for (var f, g = a.keys(); g.hasNext();) {
        var p = g.next();
        f = !1;
        if (!(p % (1024 / Textures.TEXTURE_UNIT_SIZE) > 1024 / Textures.TEXTURE_UNIT_SIZE - c)) {
            for (var k = 0; k < c;) {
                for (var h = k++, n = 0; n < d;) a.h.hasOwnProperty(p + n++ * (1024 / Textures.TEXTURE_UNIT_SIZE) + h) || (f = !0);
                if (f) break;
            }
            if (!f) {
                b.set(p % (1024 / Textures.TEXTURE_UNIT_SIZE), Math.floor(p / (1024 / Textures.TEXTURE_UNIT_SIZE)));
                return;
            }
        }
    }
    haxe.Log.trace("Error! Failed to find available texture spot.", {
        fileName: "src/Textures.hx",
        lineNumber: 167,
        className: "Textures",
        methodName: "nearestUnoccupied"
    });
}
Textures.stackTextures = function (b, a, c, d) {
    a.fillRect(new lemongine.Rectangle(c.x, c.y, c.width, c.height), lemongine.Color.clear, 0, !0);
    for (var f = 0; f < d.length;) {
        var g = d[f];
        ++f;
        a.draw2D(b, new lemongine.Point(c.x, c.y), new lemongine.Rectangle(g.x, g.y, c.width, c.height));
    }
}
Textures.addTexture = function (b, a, c, d) {
    if (!Object.prototype.hasOwnProperty.call(Textures.blockTextureMap.h, b)) {
        for (var f = new lemongine.Point();;) if (Textures.nearestUnoccupied(f, Textures.blockTexturesUnoccupied, Math.ceil(c.width / Textures.TEXTURE_UNIT_SIZE), Math.ceil(c.height / Textures.TEXTURE_UNIT_SIZE)), 0 == f.x && 0 == f.y && 0 < Textures.runtimeBlockTextures.length) {
            null != Textures.runtimeBlockTextures[0].deleteCallback && Textures.runtimeBlockTextures[0].deleteCallback();
            for (var g = 0, p = Math.ceil(Textures.runtimeBlockTextures[0].clip.width / Textures.TEXTURE_UNIT_SIZE); g < p;) for (var h = g++, n = 0, m = Math.ceil(Textures.runtimeBlockTextures[0].clip.height / Textures.TEXTURE_UNIT_SIZE); n < m;) {
                var M = n++;
                Textures.blockTexturesOccupied.remove(1024 / Textures.TEXTURE_UNIT_SIZE * (Textures.runtimeBlockTextures[0].point.y + M) + (Textures.runtimeBlockTextures[0].point.x + h));
                Textures.blockTexturesUnoccupied.h[1024 / Textures.TEXTURE_UNIT_SIZE * (Textures.runtimeBlockTextures[0].point.y + M) + (Textures.runtimeBlockTextures[0].point.x + h)] = !0;
            }
            Textures.runtimeBlockTextures.shift();
        } else break;
        var x = new lemongine.Rectangle(f.x * Textures.TEXTURE_UNIT_SIZE, Textures.blockTexturesScene.get_height() - f.y * Textures.TEXTURE_UNIT_SIZE - Math.ceil(c.height / Textures.TEXTURE_UNIT_SIZE) * Textures.TEXTURE_UNIT_SIZE, Math.ceil(c.width / Textures.TEXTURE_UNIT_SIZE) * Textures.TEXTURE_UNIT_SIZE, Math.ceil(c.height / Textures.TEXTURE_UNIT_SIZE) * Textures.TEXTURE_UNIT_SIZE);
        Textures.blockTexturesScene.fillRect(x, lemongine.Color.clear, 0, !0);
        Textures.blockTexturesScene.draw2DFlipped(a, new lemongine.Point(f.x * Textures.TEXTURE_UNIT_SIZE, Textures.blockTexturesScene.get_height() - f.y * Textures.TEXTURE_UNIT_SIZE - c.height), c);
        g = 0;
        for (p = Math.ceil(c.width / Textures.TEXTURE_UNIT_SIZE); g < p;) for (h = g++, n = 0, m = Math.ceil(c.height / Textures.TEXTURE_UNIT_SIZE); n < m;) M = n++, Textures.blockTexturesUnoccupied.remove(1024 / Textures.TEXTURE_UNIT_SIZE * (f.y + M) + (f.x + h)), Textures.blockTexturesOccupied.h[1024 / Textures.TEXTURE_UNIT_SIZE * (f.y + M) + (f.x + h)] = b;
        a = Textures.blockTextureMap;
        c = new lemongine.Rectangle(f.x * Textures.TEXTURE_UNIT_SIZE, f.y * Textures.TEXTURE_UNIT_SIZE, c.width, c.height);
        a.h[b] = c;
        Textures.runtimeBlockTextures.push({
            id: b,
            point: f,
            clip: x,
            deleteCallback: d
        });
    }
}
Textures.TEXTURE_UNIT_SIZE = 16
Textures.state = TextureLoadingState.DONE
Textures.blockTextureMap = new haxe.ds.StringMap()
Textures.runtimeBlockTextures = []
Textures.blockTexturesUnoccupied = new haxe.ds.IntMap()
Textures.blockTexturesOccupied = new haxe.ds.IntMap()