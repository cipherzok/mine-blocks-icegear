lemongine.Mesh = function (b, a, c, d) {
    this.hasUVs = this.isIndexed = this.hasNormals = !1;
    this.set(b, a, c, d);
}
m["lemongine.Mesh"] = lemongine.Mesh
lemongine.Mesh.__name__ = "lemongine.Mesh"
lemongine.Mesh.prototype = {
    set: function (b, a, c, d) {
        this.isIndexed = this.hasUVs = this.hasNormals = !1;
        this.setVertices(b);
        null != a && (this.isIndexed = !0, this.setIndices(a));
        null != c && this.setUVs(c);
        null != d && this.setNormals(d);
    },
    setUVs: function (b) {
        this.hasUVs = !0;
        null == this.uvs && (this.uvs = new lemongine.pieces.Attrib("uv", "float2"));
        this.uvs.setValue(b);
        return this.uvs.value;
    },
    setVertices: function (b) {
        null == this.vertices && (this.vertices = new lemongine.pieces.Attrib("vertex", "float3"));
        this.vertices.setValue(b);
        return this.vertices.value;
    },
    setIndices: function (b) {
        if (!this.isIndexed) return haxe.Log.trace("Error: Mesh is not indexed.", {
            fileName: "lemongine/Mesh.hx",
            lineNumber: 62,
            className: "lemongine.Mesh",
            methodName: "setIndices"
        }), [];
        null == this.indices && (this.indices = new lemongine.pieces.Attrib("~index", "uint3"));
        this.indices.setValue(b);
        return this.indices.value;
    },
    setNormals: function (b) {
        this.hasNormals = !0;
        null == this.normals && (this.normals = new lemongine.pieces.Attrib("normal", "float3"));
        this.normals.setValue(b);
        return this.normals.value;
    },
    getVertices: function () {
        return this.vertices.value;
    },
    getUVs: function () {
        return this.uvs.value;
    },
    getNormals: function () {
        return this.normals.value;
    },
    numVertices: function () {
        return Math.floor(this.vertices.value.length / 3);
    },
    numIndices: function () {
        return null == this.indices ? 0 : this.indices.value.length;
    },
    toIndexed: function () {
        if (this.isIndexed) return haxe.Log.trace("Warning: Mesh is already indexed.", {
            fileName: "lemongine/Mesh.hx",
            lineNumber: 105,
            className: "lemongine.Mesh",
            methodName: "toIndexed"
        }), this;
        for (var b = [], a = [], c, d = [], f = 0, g = Math.floor(this.vertices.value.length / 3); f < g;) {
            var k = f++;
            c = !1;
            for (var h = 0, m = Math.floor(b.length / 3); h < m;) {
                var n = h++;
                if (b[3 * n] == this.vertices.value[3 * k] && b[3 * n + 1] == this.vertices.value[3 * k + 1] && b[3 * n + 2] == this.vertices.value[3 * k + 2] && (!this.hasUVs || a[2 * n] == this.uvs.value[2 * k] && a[2 * n + 1] == this.uvs.value[2 * k + 1])) {
                    d.push(n);
                    c = !0;
                    break;
                }
            }
            c || (b.push(this.vertices.value[3 * k]), b.push(this.vertices.value[3 * k + 1]), b.push(this.vertices.value[3 * k + 2]), this.hasUVs && (a.push(this.uvs.value[2 * k]), a.push(this.uvs.value[2 * k + 1])), d.push(Math.floor(b.length / 3) - 1));
        }
        this.isIndexed = !0;
        this.setIndices(d);
        this.setVertices(b);
        this.hasUVs && this.setUVs(a);
        return this;
    },
    generateNormals: function () {
        if (this.isIndexed) return haxe.Log.trace("Cannot generate normals on indexed mesh.", {
            fileName: "lemongine/Mesh.hx",
            lineNumber: 167,
            className: "lemongine.Mesh",
            methodName: "generateNormals"
        }), this.getNormals();
        for (var b = [], a = new lemongine.Vector3(), c = new lemongine.Vector3(), d = new lemongine.Vector3(), f = new lemongine.Vector3(), g = 0, k = Math.floor(this.numVertices() / 3); g < k;) {
            var h = g++;
            a.set(this.vertices.value[9 * h], this.vertices.value[9 * h + 1], this.vertices.value[9 * h + 2]);
            c.set(this.vertices.value[9 * h + 3], this.vertices.value[9 * h + 4], this.vertices.value[9 * h + 5]);
            d.set(this.vertices.value[9 * h + 6], this.vertices.value[9 * h + 7], this.vertices.value[9 * h + 8]);
            lemongine.Vector3.cross(c.subtract(a), d.subtract(a), f).normalize();
            b.push(f.x);
            b.push(f.y);
            b.push(f.z);
            b.push(f.x);
            b.push(f.y);
            b.push(f.z);
            b.push(f.x);
            b.push(f.y);
            b.push(f.z);
        }
        return this.setNormals(b);
    },
    __class__: lemongine.Mesh
}