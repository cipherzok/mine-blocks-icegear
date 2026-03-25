lemongine.Geom = function () {}
m["lemongine.Geom"] = lemongine.Geom
lemongine.Geom.__name__ = "lemongine.Geom"
lemongine.Geom.createQuad = function (b, a, c, d) {
    null == d && (d = !1);
    null == c && (c = !1);
    null == a && (a = 1);
    null == b && (b = 1);
    b /= 2;
    a /= 2;
    c = c ? new lemongine.Mesh([-b, -a, 0, -b, a, 0, b, -a, 0, b, -a, 0, -b, a, 0, b, a, 0, b, -a, 0, b, a, 0, -b, -a, 0, -b, -a, 0, b, a, 0, -b, a, 0], null, [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1]) : new lemongine.Mesh([-b, -a, 0, -b, a, 0, b, -a, 0, b, -a, 0, -b, a, 0, b, a, 0], null, [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]);
    c.generateNormals();
    return d ? c.toIndexed() : c;
}
lemongine.Geom.createQuadBackface = function (b, a, c) {
    null == c && (c = !1);
    null == a && (a = 1);
    null == b && (b = 1);
    b /= 2;
    a /= 2;
    a = new lemongine.Mesh([-b, -a, 0, b, -a, 0, -b, a, 0, b, -a, 0, b, a, 0, -b, a, 0], null, [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]);
    a.generateNormals();
    return c ? a.toIndexed() : a;
}
lemongine.Geom.quadMatrixHelper = function (b, a, c, d) {
    null == c && (c = !1);
    null == lemongine.Geom.quadCorners && (lemongine.Geom.quadCorners = [new lemongine.Vector3(), new lemongine.Vector3(), new lemongine.Vector3(), new lemongine.Vector3()]);
    var f = a.apply(lemongine.Geom.quadCorners[0].set(b.x, b.y), !0),
        g = a.apply(lemongine.Geom.quadCorners[1].set(b.x + b.width, b.y), !0),
        k = a.apply(lemongine.Geom.quadCorners[2].set(b.x, b.y + b.height), !0);
    b = a.apply(lemongine.Geom.quadCorners[3].set(b.x + b.width, b.y + b.height), !0);
    null == d && (d = []);
    c ? (d[0] = g.x, d[1] = g.y, d[2] = 0, d[3] = b.x, d[4] = b.y, d[5] = 0, d[6] = f.x, d[7] = f.y, d[8] = 0, d[9] = f.x, d[10] = f.y, d[11] = 0, d[12] = b.x, d[13] = b.y, d[14] = 0, d[15] = k.x, d[16] = k.y) : (d[0] = f.x, d[1] = f.y, d[2] = 0, d[3] = k.x, d[4] = k.y, d[5] = 0, d[6] = g.x, d[7] = g.y, d[8] = 0, d[9] = g.x, d[10] = g.y, d[11] = 0, d[12] = k.x, d[13] = k.y, d[14] = 0, d[15] = b.x, d[16] = b.y);
    d[17] = 0;
    return d;
}
lemongine.Geom.quadUVs = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]
lemongine.Geom.flippedQuadUVs = [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1]