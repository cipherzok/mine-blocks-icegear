lemongine.LocalStorage = function (b, a, c, d) {
    null == d && (d = !1);
    null == a && (a = "");
    null == b && (b = "save");
    this.dataToStoreInIndexedDB = this.callbackWhenLoaded = null;
    this.indexedDBStorageReady = !1;
    this.usingindexedDBStorage = !0;
    this.exceededQuota = !1;
    this.data = new haxe.ds.StringMap();
    this.fullPath = "";
    this.name = "save";
    this.name = b;
    this.fullPath = this.validatePath(a + "/" + b);
    this.callbackWhenLoaded = c;
    (this.usingindexedDBStorage = null != window.indexedDB && !d) ? this.initIndexedDB() : (d || haxe.Log.trace("Notice: Falling back to local storage.", {
        fileName: "lemongine/LocalStorage.hx",
        lineNumber: 56,
        className: "lemongine.LocalStorage",
        methodName: "new"
    }), this.initLocalStorage(), null == this.storage && haxe.Log.trace("Error: Storage is inaccessible!", {
        fileName: "lemongine/LocalStorage.hx",
        lineNumber: 58,
        className: "lemongine.LocalStorage",
        methodName: "new"
    }), this.load(), this.callFirstLoadCallback());
}
m["lemongine.LocalStorage"] = lemongine.LocalStorage
lemongine.LocalStorage.__name__ = "lemongine.LocalStorage"
lemongine.LocalStorage.prototype = {
    onExitCallback: function (b) {
        this.save();
    },
    removeSaveOnExitListener: function () {
        Main.Instance.onExit.remove(F(this, this.onExitCallback));
    },
    callFirstLoadCallback: function () {
        null != this.callbackWhenLoaded && (this.callbackWhenLoaded(this), this.callbackWhenLoaded = null);
    },
    initIndexedDB: function () {
        var b = this;
        this.usingindexedDBStorage = !0;
        this.indexedDBStorageReady = !1;
        var a = window.indexedDB.open("lemongine", 1);
        a.onerror = function () {
            haxe.Log.trace("Notice: Falling back to local storage.", {
                fileName: "lemongine/LocalStorage.hx",
                lineNumber: 87,
                className: "lemongine.LocalStorage",
                methodName: "initIndexedDB"
            });
            b.usingindexedDBStorage = !1;
            b.initLocalStorage();
            null == b.storage && haxe.Log.trace("Error: Storage is inaccessible!", {
                fileName: "lemongine/LocalStorage.hx",
                lineNumber: 90,
                className: "lemongine.LocalStorage",
                methodName: "initIndexedDB"
            });
            b.load();
            b.callFirstLoadCallback();
        };
        a.onupgradeneeded = function (a) {
            a.target.result.createObjectStore("saves", {
                keyPath: "name"
            }).transaction.oncomplete = function (a) {
                null != b.dataToStoreInIndexedDB && (b.addDataToIndexedDB(b.dataToStoreInIndexedDB), b.dataToStoreInIndexedDB = null);
            };
        };
        a.onsuccess = function () {
            b.indexedDBStorage = a.result;
            b.indexedDBStorageReady = !0;
            b.initLocalStorage();
            if (null != b.storage.getItem("lemongine:" + b.fullPath)) {
                haxe.Log.trace("Notice: Save data migrated from local storage.", {
                    fileName: "lemongine/LocalStorage.hx",
                    lineNumber: 112,
                    className: "lemongine.LocalStorage",
                    methodName: "initIndexedDB"
                });
                var c = b.storage.getItem("lemongine:" + b.fullPath);
                b.data = haxe.Unserializer.run(c);
                b.save();
                b.storage.removeItem("lemongine:" + b.fullPath);
                b.callFirstLoadCallback();
            } else null != b.storage.getItem("zanzlanz:null/" + b.fullPath) ? (haxe.Log.trace("Notice: Save data migrated from old storage.", {
                fileName: "lemongine/LocalStorage.hx",
                lineNumber: 118,
                className: "lemongine.LocalStorage",
                methodName: "initIndexedDB"
            }), c = b.storage.getItem("zanzlanz:null/" + b.fullPath), b.data = haxe.Unserializer.run(c), b.save(), b.storage.removeItem("zanzlanz:null/" + b.fullPath), b.callFirstLoadCallback()) : b.load();
        };
    },
    addDataToIndexedDB: function (b) {
        var a = this;
        if (this.indexedDBStorageReady) {
            var c = this.indexedDBStorage.transaction(["saves"], "readwrite");
            c.objectStore("saves").put({
                name: "lemongine:" + this.fullPath,
                data: b
            });
            c.oncomplete = function (a) {};
            c.onerror = function (b) {
                null != a.quotaExceededCallback && a.quotaExceededCallback();
            };
        } else this.dataToStoreInIndexedDB = b;
    },
    getDataFromIndexedDB: function (b) {
        var a = this;
        this.indexedDBStorageReady || haxe.Log.trace("Error: IndexedDB not ready - needs to use callback instead.", {
            fileName: "lemongine/LocalStorage.hx",
            lineNumber: 146,
            className: "lemongine.LocalStorage",
            methodName: "getDataFromIndexedDB"
        });
        var c = this.indexedDBStorage.transaction(["saves"], "readwrite"),
            d = c.objectStore("saves").get("lemongine:" + this.fullPath);
        c.oncomplete = function (c) {
            null != d.result ? (c = d.result.data, null == c && (c = haxe.Serializer.run(new haxe.ds.StringMap())), a.data = haxe.Unserializer.run(c)) : a.data = new haxe.ds.StringMap();
            null != b && b(a.data);
            a.callFirstLoadCallback();
        };
        c.onerror = function (c) {
            null != b && b(a.data);
            a.callFirstLoadCallback();
        };
    },
    initLocalStorage: function () {
        this.storage = js.Browser.getLocalStorage();
        null == this.storage ? haxe.Log.trace("Error: Local storage is inaccessible for initialization.", {
            fileName: "lemongine/LocalStorage.hx",
            lineNumber: 174,
            className: "lemongine.LocalStorage",
            methodName: "initLocalStorage"
        }) : null != this.storage.getItem("zanzlanz:null/" + this.fullPath) && (this.data = haxe.Unserializer.run(this.storage.getItem("zanzlanz:null/" + this.fullPath)), this.save(), this.storage.removeItem("zanzlanz:null/" + this.fullPath));
    },
    validatePath: function (b) {
        for (null != lime.system.System.get_applicationStorageDirectory() && (b = lime.system.System.get_applicationStorageDirectory() + "/" + b); -1 != b.indexOf("\\");) b = b.split("\\").join("/");
        for (; -1 != b.indexOf("//");) b = b.split("//").join("/");
        "/" == b.charAt(b.length - 1) && (b = HxOverrides.substr(b, 0, b.length - 1));
        "/" == b.charAt(0) && (b = HxOverrides.substr(b, 1, null));
        return b;
    },
    save: function () {
        if (this.usingindexedDBStorage || null != this.storage) {
            var b = haxe.Serializer.run(this.data);
            if (this.usingindexedDBStorage) this.addDataToIndexedDB(b);else try {
                this.storage.setItem("lemongine:" + this.fullPath, b), this.exceededQuota = !1;
            } catch (a) {
                haxe.Log.trace("Error: Local storage quota exceeded. Could not save data.", {
                    fileName: "lemongine/LocalStorage.hx",
                    lineNumber: 220,
                    className: "lemongine.LocalStorage",
                    methodName: "save"
                }), 0 == this.exceededQuota && (this.exceededQuota = !0, null != this.quotaExceededCallback && this.quotaExceededCallback());
            }
        } else haxe.Log.trace("Error: Local storage is inaccessible for saving.", {
            fileName: "lemongine/LocalStorage.hx",
            lineNumber: 204,
            className: "lemongine.LocalStorage",
            methodName: "save"
        });
    },
    load: function (b) {
        if (!this.usingindexedDBStorage && null == this.storage) return haxe.Log.trace("Error: Local storage is inaccessible for loading.", {
            fileName: "lemongine/LocalStorage.hx",
            lineNumber: 240,
            className: "lemongine.LocalStorage",
            methodName: "load"
        }), null;
        Main.Instance.onExit.has(F(this, this.onExitCallback)) || Main.Instance.onExit.add(F(this, this.onExitCallback));
        if (this.usingindexedDBStorage) this.getDataFromIndexedDB(b);else {
            var a = this.storage.getItem("lemongine:" + this.fullPath);
            null == a && (a = haxe.Serializer.run(new haxe.ds.StringMap()));
            this.data = haxe.Unserializer.run(a);
            this.callFirstLoadCallback();
            null != b && b(this.data);
        }
        return this.data;
    },
    destroy: function () {
        this.removeSaveOnExitListener();
        this.usingindexedDBStorage ? this.indexedDBStorage.transaction(["saves"], "readwrite").objectStore("saves").delete("lemongine:" + this.fullPath) : this.storage.removeItem("lemongine:" + this.fullPath);
        return this;
    },
    __class__: lemongine.LocalStorage
}