lime.utils.Preloader = function () {
    this.bytesTotalCache = new haxe.ds.StringMap();
    this.bytesLoadedCache2 = new haxe.ds.StringMap();
    this.bytesLoadedCache = new haxe.ds.ObjectMap();
    this.onProgress = new lime.app._Event_Int_Int_Void();
    this.onComplete = new lime.app._Event_Void_Void();
    this.bytesTotal = this.bytesLoaded = 0;
    this.libraries = [];
    this.libraryNames = [];
    this.onProgress.add(F(this, this.update));
}
m["lime.utils.Preloader"] = lime.utils.Preloader
lime.utils.Preloader.__name__ = "lime.utils.Preloader"
lime.utils.Preloader.prototype = {
    addLibrary: function (b) {
        this.libraries.push(b);
    },
    addLibraryName: function (b) {
        -1 == this.libraryNames.indexOf(b) && this.libraryNames.push(b);
    },
    load: function () {
        for (var b = this, a = 0, c = this.libraries; a < c.length;) this.bytesTotal += c[a++].bytesTotal;
        this.loadedLibraries = -1;
        this.preloadStarted = !1;
        a = 0;
        for (c = this.libraries; a < c.length;) {
            var d = [c[a]];
            ++a;
            lime.utils.Log.verbose("Preloading asset library", {
                fileName: "lime/utils/Preloader.hx",
                lineNumber: 134,
                className: "lime.utils.Preloader",
                methodName: "load"
            });
            d[0].load().onProgress(function (a) {
                return function (c, d) {
                    b.bytesLoaded = null == b.bytesLoadedCache.h.__keys__[a[0].__id__] ? b.bytesLoaded + c : b.bytesLoaded + (c - b.bytesLoadedCache.h[a[0].__id__]);
                    b.bytesLoadedCache.set(a[0], c);
                    b.simulateProgress || b.onProgress.dispatch(b.bytesLoaded, b.bytesTotal);
                };
            }(d)).onComplete(function (a) {
                return function (c) {
                    b.bytesLoaded = null == b.bytesLoadedCache.h.__keys__[a[0].__id__] ? b.bytesLoaded + a[0].bytesTotal : b.bytesLoaded + ((a[0].bytesTotal | 0) - b.bytesLoadedCache.h[a[0].__id__]);
                    b.loadedAssetLibrary();
                };
            }(d)).onError(function () {
                return function (a) {
                    lime.utils.Log.error(a, {
                        fileName: "lime/utils/Preloader.hx",
                        lineNumber: 170,
                        className: "lime.utils.Preloader",
                        methodName: "load"
                    });
                };
            }());
        }
        a = 0;
        for (c = this.libraryNames; a < c.length;) ++a, this.bytesTotal += 200;
        this.loadedLibraries++;
        this.preloadStarted = !0;
        this.updateProgress();
    },
    loadedAssetLibrary: function (b) {
        this.loadedLibraries++;
        var a = this.loadedLibraries;
        this.preloadStarted || ++a;
        var c = this.libraries.length + this.libraryNames.length;
        null != b ? lime.utils.Log.verbose("Loaded asset library: " + b + " [" + a + "/" + c + "]", {
            fileName: "lime/utils/Preloader.hx",
            lineNumber: 197,
            className: "lime.utils.Preloader",
            methodName: "loadedAssetLibrary"
        }) : lime.utils.Log.verbose("Loaded asset library [" + a + "/" + c + "]", {
            fileName: "lime/utils/Preloader.hx",
            lineNumber: 201,
            className: "lime.utils.Preloader",
            methodName: "loadedAssetLibrary"
        });
        this.updateProgress();
    },
    start: function () {
        this.complete || this.simulateProgress || !this.preloadComplete || (this.complete = !0, this.onComplete.dispatch());
    },
    update: function (b, a) {},
    updateProgress: function () {
        var b = this;
        this.simulateProgress || this.onProgress.dispatch(this.bytesLoaded, this.bytesTotal);
        if (this.loadedLibraries == this.libraries.length && !this.initLibraryNames) {
            this.initLibraryNames = !0;
            for (var a = 0, c = this.libraryNames; a < c.length;) {
                var d = [c[a]];
                ++a;
                lime.utils.Log.verbose("Preloading asset library: " + d[0], {
                    fileName: "lime/utils/Preloader.hx",
                    lineNumber: 239,
                    className: "lime.utils.Preloader",
                    methodName: "updateProgress"
                });
                lime.utils.Assets.loadLibrary(d[0]).onProgress(function (a) {
                    return function (c, d) {
                        0 < d && (Object.prototype.hasOwnProperty.call(b.bytesTotalCache.h, a[0]) || (b.bytesTotalCache.h[a[0]] = d, b.bytesTotal += d - 200), c > d && (c = d), Object.prototype.hasOwnProperty.call(b.bytesLoadedCache2.h, a[0]) ? b.bytesLoaded += c - b.bytesLoadedCache2.h[a[0]] : b.bytesLoaded += c, b.bytesLoadedCache2.h[a[0]] = c, b.simulateProgress || b.onProgress.dispatch(b.bytesLoaded, b.bytesTotal));
                    };
                }(d)).onComplete(function (a) {
                    return function (c) {
                        c = 200;
                        Object.prototype.hasOwnProperty.call(b.bytesTotalCache.h, a[0]) && (c = b.bytesTotalCache.h[a[0]]);
                        Object.prototype.hasOwnProperty.call(b.bytesLoadedCache2.h, a[0]) ? b.bytesLoaded += c - b.bytesLoadedCache2.h[a[0]] : b.bytesLoaded += c;
                        b.loadedAssetLibrary(a[0]);
                    };
                }(d)).onError(function () {
                    return function (a) {
                        lime.utils.Log.error(a, {
                            fileName: "lime/utils/Preloader.hx",
                            lineNumber: 293,
                            className: "lime.utils.Preloader",
                            methodName: "updateProgress"
                        });
                    };
                }());
            }
        }
        this.simulateProgress || this.loadedLibraries != this.libraries.length + this.libraryNames.length || (this.preloadComplete || (this.preloadComplete = !0, lime.utils.Log.verbose("Preload complete", {
            fileName: "lime/utils/Preloader.hx",
            lineNumber: 306,
            className: "lime.utils.Preloader",
            methodName: "updateProgress"
        })), this.start());
    },
    __class__: lime.utils.Preloader
}