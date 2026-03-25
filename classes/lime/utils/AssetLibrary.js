lime.utils.AssetLibrary = function () {
    this.types = new haxe.ds.StringMap();
    this.sizes = new haxe.ds.StringMap();
    this.preload = new haxe.ds.StringMap();
    this.paths = new haxe.ds.StringMap();
    this.pathGroups = new haxe.ds.StringMap();
    this.classTypes = new haxe.ds.StringMap();
    this.cachedText = new haxe.ds.StringMap();
    this.cachedImages = new haxe.ds.StringMap();
    this.cachedFonts = new haxe.ds.StringMap();
    this.cachedBytes = new haxe.ds.StringMap();
    this.cachedAudioBuffers = new haxe.ds.StringMap();
    this.onChange = new lime.app._Event_Void_Void();
    this.bytesTotal = this.bytesLoaded = 0;
}
m["lime.utils.AssetLibrary"] = lime.utils.AssetLibrary
lime.utils.AssetLibrary.__name__ = "lime.utils.AssetLibrary"
lime.utils.AssetLibrary.fromBundle = function (b) {
    if (Object.prototype.hasOwnProperty.call(b.data.h, "library.json")) {
        var a = lime.utils.AssetManifest.fromBytes(b.data.h["library.json"]);
        if (null != a) {
            if (null == a.libraryType) var c = new lime.utils.AssetLibrary();else if (c = m[a.libraryType], null != c) c = Type.createInstance(c, a.libraryArgs);else return lime.utils.Log.warn("Could not find library type: " + a.libraryType, {
                fileName: "lime/utils/AssetLibrary.hx",
                lineNumber: 122,
                className: "lime.utils.AssetLibrary",
                methodName: "fromBundle"
            }), null;
            c.__fromBundle(b, a);
            return c;
        }
    } else return c = new lime.utils.AssetLibrary(), c.__fromBundle(b), c;
    return null;
}
lime.utils.AssetLibrary.fromManifest = function (b) {
    if (null == b) return null;
    if (null == b.libraryType) var a = new lime.utils.AssetLibrary();else if (a = m[b.libraryType], null != a) a = Type.createInstance(a, b.libraryArgs);else return lime.utils.Log.warn("Could not find library type: " + b.libraryType, {
        fileName: "lime/utils/AssetLibrary.hx",
        lineNumber: 160,
        className: "lime.utils.AssetLibrary",
        methodName: "fromManifest"
    }), null;
    a.__fromManifest(b);
    return a;
}
lime.utils.AssetLibrary.loadFromBytes = function (b, a) {
    return lime.utils.AssetManifest.loadFromBytes(b, a).then(function (a) {
        return lime.utils.AssetLibrary.loadFromManifest(a);
    });
}
lime.utils.AssetLibrary.loadFromFile = function (b, a) {
    return lime.utils.AssetManifest.loadFromFile(b, a).then(function (a) {
        return lime.utils.AssetLibrary.loadFromManifest(a);
    });
}
lime.utils.AssetLibrary.loadFromManifest = function (b) {
    b = lime.utils.AssetLibrary.fromManifest(b);
    return null != b ? b.load() : lime.app.Future.withError("Could not load asset manifest");
}
lime.utils.AssetLibrary.prototype = {
    exists: function (b, a) {
        a = null != a ? js.Boot.__cast(a, String) : null;
        b = this.types.h[b];
        return null == b || b != a && ("SOUND" != a && "MUSIC" != a || "MUSIC" != b && "SOUND" != b) && "BINARY" != a && null != a && ("BINARY" != b || "TEXT" != a) ? !1 : !0;
    },
    getAsset: function (b, a) {
        switch (a) {
        case "BINARY":
            return this.getBytes(b);
        case "FONT":
            return this.getFont(b);
        case "IMAGE":
            return this.getImage(b);
        case "MUSIC":
        case "SOUND":
            return this.getAudioBuffer(b);
        case "TEMPLATE":
            throw haxe.Exception.thrown("Not sure how to get template: " + b);
        case "TEXT":
            return this.getText(b);
        default:
            throw haxe.Exception.thrown("Unknown asset type: " + a);
        }
    },
    getAudioBuffer: function (b) {
        return Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h, b) ? this.cachedAudioBuffers.h[b] : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? lime.media.AudioBuffer.fromBytes(js.Boot.__cast(Type.createInstance(this.classTypes.h[b], []), haxe.io.Bytes)) : lime.media.AudioBuffer.fromFile(this.getPath(b));
    },
    getBytes: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b)) return this.cachedBytes.h[b];
        if (Object.prototype.hasOwnProperty.call(this.cachedText.h, b)) {
            var a = vb.ofString(this.cachedText.h[b]);
            return this.cachedBytes.h[b] = a;
        }
        return Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? js.Boot.__cast(Type.createInstance(this.classTypes.h[b], []), haxe.io.Bytes) : vb.fromFile(this.getPath(b));
    },
    getFont: function (b) {
        return Object.prototype.hasOwnProperty.call(this.cachedFonts.h, b) ? this.cachedFonts.h[b] : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? js.Boot.__cast(Type.createInstance(this.classTypes.h[b], []), lime.text.Font) : lime.text.Font.fromFile(this.getPath(b));
    },
    getImage: function (b) {
        return Object.prototype.hasOwnProperty.call(this.cachedImages.h, b) ? this.cachedImages.h[b] : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? js.Boot.__cast(Type.createInstance(this.classTypes.h[b], []), lime.graphics.Image) : lime.graphics.Image.fromFile(this.getPath(b));
    },
    getPath: function (b) {
        return Object.prototype.hasOwnProperty.call(this.paths.h, b) ? this.paths.h[b] : Object.prototype.hasOwnProperty.call(this.pathGroups.h, b) ? this.pathGroups.h[b][0] : null;
    },
    getText: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedText.h, b)) return this.cachedText.h[b];
        b = this.getBytes(b);
        return null == b ? null : b.getString(0, b.length);
    },
    isLocal: function (b, a) {
        if (Object.prototype.hasOwnProperty.call(this.classTypes.h, b)) return !0;
        a = js.Boot.__cast(a, String);
        if (null == a) return Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b) || Object.prototype.hasOwnProperty.call(this.cachedText.h, b) || Object.prototype.hasOwnProperty.call(this.cachedImages.h, b) || Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h, b) ? !0 : Object.prototype.hasOwnProperty.call(this.cachedFonts.h, b);
        switch (a) {
        case "FONT":
            return Object.prototype.hasOwnProperty.call(this.cachedFonts.h, b);
        case "IMAGE":
            return Object.prototype.hasOwnProperty.call(this.cachedImages.h, b);
        case "MUSIC":
        case "SOUND":
            return Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h, b);
        default:
            return Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b) ? !0 : Object.prototype.hasOwnProperty.call(this.cachedText.h, b);
        }
    },
    loadAsset: function (b, a) {
        switch (a) {
        case "BINARY":
            return this.loadBytes(b);
        case "FONT":
            return this.loadFont(b);
        case "IMAGE":
            return this.loadImage(b);
        case "MUSIC":
        case "SOUND":
            return this.loadAudioBuffer(b);
        case "TEMPLATE":
            throw haxe.Exception.thrown("Not sure how to load template: " + b);
        case "TEXT":
            return this.loadText(b);
        default:
            throw haxe.Exception.thrown("Unknown asset type: " + a);
        }
    },
    load: function () {
        if (this.loaded) return lime.app.Future.withValue(this);
        if (null == this.promise) {
            this.promise = new lime.app.Promise();
            this.bytesLoadedCache = new haxe.ds.StringMap();
            this.assetsLoaded = 0;
            this.assetsTotal = 1;
            for (var b = Object.keys(this.preload.h), a = b.length, c = 0; c < a;) {
                var d = b[c++];
                if (this.preload.h[d]) {
                    lime.utils.Log.verbose("Preloading asset: " + d + " [" + this.types.h[d] + "]", {
                        fileName: "lime/utils/AssetLibrary.hx",
                        lineNumber: 408,
                        className: "lime.utils.AssetLibrary",
                        methodName: "load"
                    });
                    var f = this.types.h[d];
                    if (null != f) switch (f) {
                    case "BINARY":
                        this.assetsTotal++;
                        f = this.loadBytes(d);
                        f.onProgress(function (a, b) {
                            return function (c, d) {
                                b[0].load_onProgress(a[0], c, d);
                            };
                        }([d], [this]));
                        f.onError(function (a, b) {
                            return function (c) {
                                b[0].load_onError(a[0], c);
                            };
                        }([d], [this]));
                        f.onComplete(function (a, b) {
                            return function (c) {
                                b[0].loadBytes_onComplete(a[0], c);
                            };
                        }([d], [this]));
                        break;
                    case "FONT":
                        this.assetsTotal++;
                        f = this.loadFont(d);
                        f.onProgress(function (a, b) {
                            return function (c, d) {
                                b[0].load_onProgress(a[0], c, d);
                            };
                        }([d], [this]));
                        f.onError(function (a, b) {
                            return function (c) {
                                b[0].load_onError(a[0], c);
                            };
                        }([d], [this]));
                        f.onComplete(function (a, b) {
                            return function (c) {
                                b[0].loadFont_onComplete(a[0], c);
                            };
                        }([d], [this]));
                        break;
                    case "IMAGE":
                        this.assetsTotal++;
                        f = this.loadImage(d);
                        f.onProgress(function (a, b) {
                            return function (c, d) {
                                b[0].load_onProgress(a[0], c, d);
                            };
                        }([d], [this]));
                        f.onError(function (a, b) {
                            return function (c) {
                                b[0].load_onError(a[0], c);
                            };
                        }([d], [this]));
                        f.onComplete(function (a, b) {
                            return function (c) {
                                b[0].loadImage_onComplete(a[0], c);
                            };
                        }([d], [this]));
                        break;
                    case "MUSIC":
                    case "SOUND":
                        this.assetsTotal++;
                        f = this.loadAudioBuffer(d);
                        f.onProgress(function (a, b) {
                            return function (c, d) {
                                b[0].load_onProgress(a[0], c, d);
                            };
                        }([d], [this]));
                        f.onError(function (a, b) {
                            return function (c) {
                                b[0].loadAudioBuffer_onError(a[0], c);
                            };
                        }([d], [this]));
                        f.onComplete(function (a, b) {
                            return function (c) {
                                b[0].loadAudioBuffer_onComplete(a[0], c);
                            };
                        }([d], [this]));
                        break;
                    case "TEXT":
                        this.assetsTotal++, f = this.loadText(d), f.onProgress(function (a, b) {
                            return function (c, d) {
                                b[0].load_onProgress(a[0], c, d);
                            };
                        }([d], [this])), f.onError(function (a, b) {
                            return function (c) {
                                b[0].load_onError(a[0], c);
                            };
                        }([d], [this])), f.onComplete(function (a, b) {
                            return function (c) {
                                b[0].loadText_onComplete(a[0], c);
                            };
                        }([d], [this]));
                    }
                }
            }
            this.__assetLoaded(null);
        }
        return this.promise.future;
    },
    loadAudioBuffer: function (b) {
        return Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h, b) ? lime.app.Future.withValue(this.cachedAudioBuffers.h[b]) : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? lime.app.Future.withValue(lime.media.AudioBuffer.fromBytes(js.Boot.__cast(Type.createInstance(this.classTypes.h[b], []), haxe.io.Bytes))) : Object.prototype.hasOwnProperty.call(this.pathGroups.h, b) ? lime.media.AudioBuffer.loadFromFiles(this.pathGroups.h[b]) : lime.media.AudioBuffer.loadFromFile(this.paths.h[b]);
    },
    loadBytes: function (b) {
        return Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b) ? lime.app.Future.withValue(this.cachedBytes.h[b]) : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? lime.app.Future.withValue(Type.createInstance(this.classTypes.h[b], [])) : vb.loadFromFile(this.getPath(b));
    },
    loadFont: function (b) {
        return Object.prototype.hasOwnProperty.call(this.cachedFonts.h, b) ? lime.app.Future.withValue(this.cachedFonts.h[b]) : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? (b = Type.createInstance(this.classTypes.h[b], []), b.__loadFromName(b.name)) : lime.text.Font.loadFromName(this.getPath(b));
    },
    loadImage: function (b) {
        var a = this;
        return Object.prototype.hasOwnProperty.call(this.cachedImages.h, b) ? lime.app.Future.withValue(this.cachedImages.h[b]) : Object.prototype.hasOwnProperty.call(this.classTypes.h, b) ? lime.app.Future.withValue(Type.createInstance(this.classTypes.h[b], [])) : Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b) ? lime.graphics.Image.loadFromBytes(this.cachedBytes.h[b]).then(function (c) {
            var d = a.cachedBytes;
            Object.prototype.hasOwnProperty.call(d.h, b) && delete d.h[b];
            a.cachedImages.h[b] = c;
            return lime.app.Future.withValue(c);
        }) : lime.graphics.Image.loadFromFile(this.getPath(b));
    },
    loadText: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.cachedText.h, b)) return lime.app.Future.withValue(this.cachedText.h[b]);
        if (Object.prototype.hasOwnProperty.call(this.cachedBytes.h, b) || Object.prototype.hasOwnProperty.call(this.classTypes.h, b)) {
            var a = this.getBytes(b);
            if (null == a) return lime.app.Future.withValue(null);
            a = a.getString(0, a.length);
            this.cachedText.h[b] = a;
            return lime.app.Future.withValue(a);
        }
        return new lime.net._HTTPRequest_String().load(this.getPath(b));
    },
    unload: function () {
        this.cachedBytes.h = Object.create(null);
        this.cachedFonts.h = Object.create(null);
        this.cachedImages.h = Object.create(null);
        this.cachedAudioBuffers.h = Object.create(null);
        this.cachedText.h = Object.create(null);
    },
    __assetLoaded: function (b) {
        this.assetsLoaded++;
        null != b && lime.utils.Log.verbose("Loaded asset: " + b + " [" + this.types.h[b] + "] (" + (this.assetsLoaded - 1) + "/" + (this.assetsTotal - 1) + ")", {
            fileName: "lime/utils/AssetLibrary.hx",
            lineNumber: 637,
            className: "lime.utils.AssetLibrary",
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
    __cacheBreak: function (b) {
        return lime.utils.Assets.__cacheBreak(b);
    },
    __fromBundle: function (b, a) {
        if (null != a) {
            var c = 0;
            for (a = a.assets; c < a.length;) {
                var d = a[c];
                ++c;
                var f = Object.prototype.hasOwnProperty.call(d, "id") ? d.id : d.path;
                var g = b.data.h[d.path];
                if (Object.prototype.hasOwnProperty.call(d, "type")) {
                    var k = d.type;
                    "TEXT" == k ? this.cachedText.h[f] = null != g ? Std.string(g) : null : this.cachedBytes.h[f] = g;
                    this.types.h[f] = d.type;
                } else this.cachedBytes.h[f] = g, this.types.h[f] = "BINARY";
            }
        } else for (c = 0, a = b.paths; c < a.length;) f = a[c], ++c, this.cachedBytes.h[f] = b.data.h[f], this.types.h[f] = "BINARY";
    },
    __fromManifest: function (b) {
        var a = 2 <= b.version,
            c = b.rootPath;
        null == c && (c = "");
        "" != c && (c += "/");
        for (var d = 0, f = b.assets; d < f.length;) {
            var g = f[d];
            ++d;
            var k = a && Object.prototype.hasOwnProperty.call(g, "size") ? g.size : 100;
            var h = Object.prototype.hasOwnProperty.call(g, "id") ? g.id : g.path;
            if (Object.prototype.hasOwnProperty.call(g, "path")) {
                var n = this.paths;
                var x = this.__cacheBreak(this.__resolvePath(c + Std.string(Reflect.field(g, "path"))));
                n.h[h] = x;
            }
            if (Object.prototype.hasOwnProperty.call(g, "pathGroup")) {
                n = Reflect.field(g, "pathGroup");
                x = 0;
                for (var t = n.length; x < t;) {
                    var q = x++;
                    n[q] = this.__cacheBreak(this.__resolvePath(c + n[q]));
                }
                this.pathGroups.h[h] = n;
            }
            this.sizes.h[h] = k;
            this.types.h[h] = g.type;
            Object.prototype.hasOwnProperty.call(g, "preload") && (this.preload.h[h] = Reflect.field(g, "preload"));
            Object.prototype.hasOwnProperty.call(g, "className") && (k = Reflect.field(g, "className"), k = m[k], this.classTypes.h[h] = k);
        }
        d = this.bytesTotal = 0;
        for (f = b.assets; d < f.length;) g = f[d], ++d, h = Object.prototype.hasOwnProperty.call(g, "id") ? g.id : g.path, Object.prototype.hasOwnProperty.call(this.preload.h, h) && this.preload.h[h] && Object.prototype.hasOwnProperty.call(this.sizes.h, h) && (this.bytesTotal += this.sizes.h[h]);
    },
    __resolvePath: function (b) {
        b = StringTools.replace(b, "\\", "/");
        var a = b.indexOf(":");
        StringTools.startsWith(b, "http") && 0 < a ? (a += 3, b = HxOverrides.substr(b, 0, a) + StringTools.replace(HxOverrides.substr(b, a, null), "//", "/")) : b = StringTools.replace(b, "//", "/");
        if (-1 < b.indexOf("./")) {
            b = b.split("/");
            a = [];
            for (var c = 0, d = b.length; c < d;) {
                var f = c++;
                ".." == b[f] ? 0 == f || ".." == a[f - 1] ? a.push("..") : a.pop() : "." == b[f] ? 0 == f && a.push(".") : a.push(b[f]);
            }
            b = a.join("/");
        }
        return b;
    },
    loadAudioBuffer_onComplete: function (b, a) {
        this.cachedAudioBuffers.h[b] = a;
        if (Object.prototype.hasOwnProperty.call(this.pathGroups.h, b)) for (var c = this.pathGroups.h[b], d = Object.keys(this.pathGroups.h), f = d.length, g = 0; g < f;) {
            var k = d[g++];
            if (k != b) for (var h = 0; h < c.length;) if (-1 < this.pathGroups.h[k].indexOf(c[h++])) {
                this.cachedAudioBuffers.h[k] = a;
                break;
            }
        }
        this.__assetLoaded(b);
    },
    loadAudioBuffer_onError: function (b, a) {
        null != a && "" != a ? lime.utils.Log.warn('Could not load "' + b + '": ' + Std.string(a), {
            fileName: "lime/utils/AssetLibrary.hx",
            lineNumber: 883,
            className: "lime.utils.AssetLibrary",
            methodName: "loadAudioBuffer_onError"
        }) : lime.utils.Log.warn('Could not load "' + b + '"', {
            fileName: "lime/utils/AssetLibrary.hx",
            lineNumber: 887,
            className: "lime.utils.AssetLibrary",
            methodName: "loadAudioBuffer_onError"
        });
        this.loadAudioBuffer_onComplete(b, new lime.media.AudioBuffer());
    },
    loadBytes_onComplete: function (b, a) {
        this.cachedBytes.h[b] = a;
        this.__assetLoaded(b);
    },
    loadFont_onComplete: function (b, a) {
        this.cachedFonts.h[b] = a;
        this.__assetLoaded(b);
    },
    loadImage_onComplete: function (b, a) {
        this.cachedImages.h[b] = a;
        this.__assetLoaded(b);
    },
    loadText_onComplete: function (b, a) {
        this.cachedText.h[b] = a;
        this.__assetLoaded(b);
    },
    load_onError: function (b, a) {
        null != a && "" != a ? this.promise.error('Error loading asset "' + b + '": ' + Std.string(a)) : this.promise.error('Error loading asset "' + b + '"');
    },
    load_onProgress: function (b, a, c) {
        if (0 < a) {
            var d = this.sizes.h[b];
            0 < c ? (a /= c, 1 < a && (a = 1), a = Math.floor(a * d)) : a > d && (a = d);
            Object.prototype.hasOwnProperty.call(this.bytesLoadedCache.h, b) ? (d = this.bytesLoadedCache.h[b], a != d && (this.bytesLoaded += a - d)) : this.bytesLoaded += a;
            this.bytesLoadedCache.h[b] = a;
            this.promise.progress(this.bytesLoaded, this.bytesTotal);
        }
    },
    __class__: lime.utils.AssetLibrary
}