var ApplicationMain = function () {};
m.ApplicationMain = ApplicationMain
ApplicationMain.__name__ = "ApplicationMain"
ApplicationMain.main = function () {
    lime.system.System.__registerEntryPoint("Mine Blocks", ApplicationMain.create);
}
ApplicationMain.create = function (b) {
    ManifestResources.init(b);
    var a = new Main();
    a.meta.h.build = "1030";
    a.meta.h.company = "Zanzlanz";
    a.meta.h.file = "Mine Blocks";
    a.meta.h.name = "Mine Blocks";
    a.meta.h.packageName = "com.zanzlanz.mineblocks";
    a.meta.h.version = "1.31.2";
    var c = {
        allowHighDPI: !1,
        alwaysOnTop: !1,
        borderless: !1,
        element: null,
        frameRate: 50,
        height: 414,
        hidden: !1,
        maximized: !1,
        minimized: !1,
        parameters: {},
        resizable: !0,
        title: "Mine Blocks",
        width: 552,
        x: null,
        y: null,
        context: {
            antialiasing: 0,
            background: 16777215,
            colorDepth: 32,
            depth: !0,
            hardware: !0,
            stencil: !0,
            type: null,
            vsync: !1
        }
    };
    if (null == a.__window && null != b) for (var d = 0, f = Reflect.fields(b); d < f.length;) {
        var l = f[d];
        ++d;
        Object.prototype.hasOwnProperty.call(c, l) ? c[l] = Reflect.field(b, l) : Object.prototype.hasOwnProperty.call(c.context, l) && (c.context[l] = Reflect.field(b, l));
    }
    a.createWindow(c);
    d = 0;
    for (f = ManifestResources.preloadLibraries; d < f.length;) a.__preloader.addLibrary(f[d++]);
    d = 0;
    for (f = ManifestResources.preloadLibraryNames; d < f.length;) a.__preloader.addLibraryName(f[d++]);
    a.__preloader.load();
    ApplicationMain.start(a);
}
ApplicationMain.start = function (b) {
    b.exec();
}