lime.utils.PackedAssetLibrary = function (b, a) {
    this.positions = new haxe.ds.StringMap();
    this.lengths = new haxe.ds.StringMap();
    lime.utils.AssetLibrary.call(this);
    this.id = b;
    this.type = a;
}
m["lime.utils.PackedAssetLibrary"] = lime.utils.PackedAssetLibrary
lime.utils.PackedAssetLibrary.__name__ = "lime.utils.PackedAssetLibrary"
lime.utils.PackedAssetLibrary.fromBytes = function (b, a) {
    return lime.utils.PackedAssetLibrary.fromManifest(lime.utils.AssetManifest.fromBytes(b, a));
}
lime.utils.PackedAssetLibrary.fromFile = function (b, a) {
    return lime.utils.PackedAssetLibrary.fromManifest(lime.utils.AssetManifest.fromFile(b, a));
}
lime.utils.PackedAssetLibrary.fromManifest = function (b) {
    return lime.utils.AssetLibrary.fromManifest(b);
}
lime.utils.PackedAssetLibrary.loadFromBytes = function (b, a) {
    return lime.utils.AssetLibrary.loadFromBytes(b, a).then(function (a) {
        return lime.app.Future.withValue(a);
    });
}
lime.utils.PackedAssetLibrary.loadFromFile = function (b, a) {
    return lime.utils.AssetLibrary.loadFromFile(b, a).then(function (a) {
        return lime.app.Future.withValue(a);
    });
}
lime.utils.PackedAssetLibrary.loadFromManifest = function (b) {
    return lime.utils.AssetLibrary.loadFromManifest(b).then(function (a) {
        return lime.app.Future.withValue(a);
    });
}
lime.utils.PackedAssetLibrary.__super__ = lime.utils.AssetLibrary
lime.utils.PackedAssetLibrary.prototype = z(lime.utils.AssetLibrary.prototype, {
    getAudioBuffer: function (b) {
        return lime.utils.AssetLibrary.prototype.getAudioBuffer.call(this, b);
    },
    getBytes: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b)) return this.cachedBytes.h[b];
        if (Object.prototype.hasOwnProperty.call(this.cachedText.h, b)) {
            var a = vb.ofString(this.cachedText.h[b]);
            this.cachedBytes.h[b] = a;
        } else if (a = vb.alloc(this.lengths.h[b]), a.blit(0, this.packedData, this.positions.h[b], this.lengths.h[b]), "gzip" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.GZIP);else if ("zip" == this.type || "deflate" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.DEFLATE);
        return a;
    },
    getFont: function (b) {
        return lime.utils.AssetLibrary.prototype.getFont.call(this, b);
    },
    getImage: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedImages.h, b)) return this.cachedImages.h[b];
        var a = vb.alloc(this.lengths.h[b]);
        a.blit(0, this.packedData, this.positions.h[b], this.lengths.h[b]);
        if ("gzip" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.GZIP);else if ("zip" == this.type || "deflate" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.DEFLATE);
        return lime.graphics.Image.fromBytes(a);
    },
    getText: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedText.h, b)) return this.cachedText.h[b];
        if ("gzip" == this.type || "zip" == this.type || "deflate" == this.type) {
            var a = vb.alloc(this.lengths.h[b]);
            a.blit(0, this.packedData, this.positions.h[b], this.lengths.h[b]);
            if ("gzip" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.GZIP);else if ("zip" == this.type || "deflate" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.DEFLATE);
            return a.getString(0, a.length);
        }
        return this.packedData.getString(this.positions.h[b], this.lengths.h[b]);
    },
    isLocal: function (b, a) {
        return !0;
    },
    load: function () {
        var b = this;
        if (this.loaded) return lime.app.Future.withValue(this);
        if (null == this.promise) {
            this.promise = new lime.app.Promise();
            this.bytesLoadedCache = new haxe.ds.StringMap();
            this.assetsLoaded = 0;
            this.assetsTotal = 2;
            for (var a = Object.keys(this.preload.h), c = a.length, d = 0; d < c;) {
                var f = a[d++];
                if (this.preload.h[f]) {
                    var k = this.types.h[f];
                    if (null != k) switch (k) {
                    case "MUSIC":
                    case "SOUND":
                        lime.utils.Log.verbose("Preloading asset: " + f + " [" + this.types.h[f] + "]", {
                            fileName: "lime/utils/PackedAssetLibrary.hx",
                            lineNumber: 189,
                            className: "lime.utils.PackedAssetLibrary",
                            methodName: "load"
                        });
                        this.assetsTotal++;
                        var h = this.loadAudioBuffer(f);
                        h.onProgress(function (a, b) {
                            return function (c, d) {
                                b[0].load_onProgress(a[0], c, d);
                            };
                        }([f], [this]));
                        h.onError(function (a, b) {
                            return function (c) {
                                b[0].loadAudioBuffer_onError(a[0], c);
                            };
                        }([f], [this]));
                        h.onComplete(function (a, b) {
                            return function (c) {
                                b[0].loadAudioBuffer_onComplete(a[0], c);
                            };
                        }([f], [this]));
                        break;
                    case "BINARY":
                    case "FONT":
                    case "IMAGE":
                    case "TEXT":
                        this.assetsTotal++;
                    }
                }
            }
            a = function (a) {
                b.cachedBytes.h[b.id] = a;
                b.packedData = a;
                b.__assetLoaded(b.id);
                a = Object.keys(b.preload.h);
                for (var c = a.length, d = 0; d < c;) {
                    var f = a[d++];
                    if (b.preload.h[f]) {
                        var g = b.types.h[f];
                        if (null != g) switch (g) {
                        case "BINARY":
                            lime.utils.Log.verbose("Preloading asset: " + f + " [" + b.types.h[f] + "]", {
                                fileName: "lime/utils/PackedAssetLibrary.hx",
                                lineNumber: 215,
                                className: "lime.utils.PackedAssetLibrary",
                                methodName: "load"
                            });
                            g = b.loadBytes(f);
                            g.onError(function (a, b) {
                                return function (c) {
                                    b[0].load_onError(a[0], c);
                                };
                            }([f], [b]));
                            g.onComplete(function (a, b) {
                                return function (c) {
                                    b[0].loadBytes_onComplete(a[0], c);
                                };
                            }([f], [b]));
                            break;
                        case "FONT":
                            lime.utils.Log.verbose("Preloading asset: " + f + " [" + b.types.h[f] + "]", {
                                fileName: "lime/utils/PackedAssetLibrary.hx",
                                lineNumber: 222,
                                className: "lime.utils.PackedAssetLibrary",
                                methodName: "load"
                            });
                            g = b.loadFont(f);
                            g.onError(function (a, b) {
                                return function (c) {
                                    b[0].load_onError(a[0], c);
                                };
                            }([f], [b]));
                            g.onComplete(function (a, b) {
                                return function (c) {
                                    b[0].loadFont_onComplete(a[0], c);
                                };
                            }([f], [b]));
                            break;
                        case "IMAGE":
                            lime.utils.Log.verbose("Preloading asset: " + f + " [" + b.types.h[f] + "]", {
                                fileName: "lime/utils/PackedAssetLibrary.hx",
                                lineNumber: 229,
                                className: "lime.utils.PackedAssetLibrary",
                                methodName: "load"
                            });
                            g = b.loadImage(f);
                            g.onError(function (a, b) {
                                return function (c) {
                                    b[0].load_onError(a[0], c);
                                };
                            }([f], [b]));
                            g.onComplete(function (a, b) {
                                return function (c) {
                                    b[0].loadImage_onComplete(a[0], c);
                                };
                            }([f], [b]));
                            break;
                        case "TEXT":
                            lime.utils.Log.verbose("Preloading asset: " + f + " [" + b.types.h[f] + "]", {
                                fileName: "lime/utils/PackedAssetLibrary.hx",
                                lineNumber: 236,
                                className: "lime.utils.PackedAssetLibrary",
                                methodName: "load"
                            }), g = b.loadText(f), g.onError(function (a, b) {
                                return function (c) {
                                    b[0].load_onError(a[0], c);
                                };
                            }([f], [b])), g.onComplete(function (a, b) {
                                return function (c) {
                                    b[0].loadText_onComplete(a[0], c);
                                };
                            }([f], [b]));
                        }
                    }
                }
            };
            this.__assetLoaded(null);
            Object.prototype.hasOwnProperty.call(this.cachedBytes.h, this.id) ? a(this.cachedBytes.h[this.id]) : (c = null == this.rootPath || "" == this.rootPath ? "" : haxe.io.Path.addTrailingSlash(this.rootPath), d = this.getPath(this.id), null == d && (d = this.id), c = haxe.io.Path.join([c, d]), c = this.__cacheBreak(c), k = this, f = this.id, vb.loadFromFile(c).onProgress(function (a, b) {
                k.load_onProgress(f, a, b);
            }).onError((ea = this.promise, F(ea, ea.error))).onComplete(a));
        }
        return this.promise.future;
    },
    loadAudioBuffer: function (b) {
        return lime.utils.AssetLibrary.prototype.loadAudioBuffer.call(this, b);
    },
    loadBytes: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b)) return lime.app.Future.withValue(this.cachedBytes.h[b]);
        var a = vb.alloc(this.lengths.h[b]);
        a.blit(0, this.packedData, this.positions.h[b], this.lengths.h[b]);
        if ("gzip" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.GZIP);else if ("zip" == this.type || "deflate" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.DEFLATE);
        return lime.app.Future.withValue(a);
    },
    loadFont: function (b) {
        return lime.utils.AssetLibrary.prototype.loadFont.call(this, b);
    },
    loadImage: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedImages.h, b)) return lime.app.Future.withValue(this.cachedImages.h[b]);
        var a = vb.alloc(this.lengths.h[b]);
        a.blit(0, this.packedData, this.positions.h[b], this.lengths.h[b]);
        if ("gzip" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.GZIP);else if ("zip" == this.type || "deflate" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.DEFLATE);
        return lime.graphics.Image.loadFromBytes(a);
    },
    loadText: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedText.h, b)) return lime.app.Future.withValue(this.cachedText.h[b]);
        if (Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b)) {
            var a = this.getBytes(b);
            if (null == a) return lime.app.Future.withValue(null);
            a = a.getString(0, a.length);
            this.cachedText.h[b] = a;
            return lime.app.Future.withValue(a);
        }
        if ("gzip" == this.type || "deflate" == this.type) {
            a = vb.alloc(this.lengths.h[b]);
            a.blit(0, this.packedData, this.positions.h[b], this.lengths.h[b]);
            if ("gzip" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.GZIP);else if ("zip" == this.type || "deflate" == this.type) a = vb.decompress(a, lime.utils.CompressionAlgorithm.DEFLATE);
            return lime.app.Future.withValue(a.getString(0, a.length));
        }
        return lime.app.Future.withValue(this.packedData.getString(this.positions.h[b], this.lengths.h[b]));
    },
    unload: function () {},
    __fromManifest: function (b) {
        this.rootPath = b.rootPath;
        lime.utils.AssetLibrary.prototype.__fromManifest.call(this, b);
        var a = 0,
            c = this.bytesTotal = 0;
        for (b = b.assets; c < b.length;) {
            var d = b[c];
            ++c;
            var f = d.id;
            Object.prototype.hasOwnProperty.call(d, "position") && (this.positions.h[f] = Reflect.field(d, "position"));
            Object.prototype.hasOwnProperty.call(d, "length") && (d = Reflect.field(d, "length"), this.lengths.h[f] = d, this.sizes.h[f] = Math.floor(d / 10), a += d);
            Object.prototype.hasOwnProperty.call(this.preload.h, f) && this.preload.h[f] && Object.prototype.hasOwnProperty.call(this.sizes.h, f) && (this.bytesTotal += this.sizes.h[f]);
        }
        this.sizes.h[this.id] = a;
        this.bytesTotal += a;
    },
    __assetLoaded: function (b) {
        this.assetsLoaded++;
        null != b && lime.utils.Log.verbose("Loaded asset: " + b + " [" + this.types.h[b] + "] (" + (this.assetsLoaded - 1) + "/" + (this.assetsTotal - 1) + ")", {
            fileName: "lime/utils/PackedAssetLibrary.hx",
            lineNumber: 458,
            className: "lime.utils.PackedAssetLibrary",
            methodName: "__assetLoaded"
        });
        if (null != b) {
            var a = Object.prototype.hasOwnProperty.call(this.sizes.h, b) ? this.sizes.h[b] : 0;
            if (Object.prototype.hasOwnProperty.call(this.bytesLoadedCache.h, b)) {
                var c = this.bytesLoadedCache.h[b];
                c < a && (this.bytesLoaded += a - c);
            } else this.bytesLoaded += a;
            this.bytesLoadedCache.h[b] = a;
        }
        this.assetsLoaded < this.assetsTotal ? this.promise.progress(this.bytesLoaded, this.bytesTotal) : (this.loaded = !0, this.promise.progress(this.bytesTotal, this.bytesTotal), this.promise.complete(this));
    },
    __class__: lime.utils.PackedAssetLibrary
})