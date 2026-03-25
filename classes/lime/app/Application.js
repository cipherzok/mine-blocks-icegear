lime.app.Application = function () {
    this.onCreateWindow = new lime.app._Event_lime_ui_Window_Void();
    this.onUpdate = new lime.app._Event_Int_Void();
    this.onExit = new lime.app._Event_Int_Void();
    null == lime.app.Application.current && (lime.app.Application.current = this);
    this.meta = new haxe.ds.StringMap();
    this.modules = [];
    this.__windowByID = new haxe.ds.IntMap();
    this.__windows = [];
    this.__backend = new lime._internal.backend.html5.HTML5Application(this);
    this.__registerLimeModule(this);
    this.__preloader = new lime.utils.Preloader();
    this.__preloader.onProgress.add(F(this, this.onPreloadProgress));
    this.__preloader.onComplete.add(F(this, this.onPreloadComplete));
}
m["lime.app.Application"] = lime.app.Application
lime.app.Application.__name__ = "lime.app.Application"
lime.app.Application.__super__ = lime.app.Module
lime.app.Application.prototype = z(lime.app.Module.prototype, {
    createWindow: function (b) {
        b = this.__createWindow(b);
        this.__addWindow(b);
        return b;
    },
    exec: function () {
        lime.app.Application.current = this;
        return this.__backend.exec();
    },
    onGamepadAxisMove: function (b, a, c) {},
    onGamepadButtonDown: function (b, a) {},
    onGamepadButtonUp: function (b, a) {},
    onGamepadConnect: function (b) {},
    onGamepadDisconnect: function (b) {},
    onJoystickAxisMove: function (b, a, c) {},
    onJoystickButtonDown: function (b, a) {},
    onJoystickButtonUp: function (b, a) {},
    onJoystickConnect: function (b) {},
    onJoystickDisconnect: function (b) {},
    onJoystickHatMove: function (b, a, c) {},
    onKeyDown: function (b, a) {},
    onKeyUp: function (b, a) {},
    onModuleExit: function (b) {},
    onMouseDown: function (b, a, c) {},
    onMouseMove: function (b, a) {},
    onMouseMoveRelative: function (b, a) {},
    onMouseUp: function (b, a, c) {},
    onMouseWheel: function (b, a, c) {},
    onPreloadComplete: function () {},
    onPreloadProgress: function (b, a) {},
    onRenderContextLost: function () {},
    onRenderContextRestored: function (b) {},
    onTextEdit: function (b, a, c) {},
    onTextInput: function (b) {},
    onTouchCancel: function (b) {},
    onTouchEnd: function (b) {},
    onTouchMove: function (b) {},
    onTouchStart: function (b) {},
    onWindowActivate: function () {},
    onWindowClose: function () {},
    onWindowCreate: function () {},
    onWindowDeactivate: function () {},
    onWindowDropFile: function (b) {},
    onWindowEnter: function () {},
    onWindowExpose: function () {},
    onWindowFocusIn: function () {},
    onWindowFocusOut: function () {},
    onWindowFullscreen: function () {},
    onWindowLeave: function () {},
    onWindowMove: function (b, a) {},
    onWindowMinimize: function () {},
    onWindowResize: function (b, a) {},
    onWindowRestore: function () {},
    render: function (b) {},
    update: function (b) {},
    __addWindow: function (b) {
        if (null != b) {
            this.__windows.push(b);
            this.__windowByID.h[b.id] = b;
            var a = this;
            b.onClose.add(function () {
                a.__onWindowClose(b);
            }, !1, -1E4);
            null == this.__window && (this.__window = b, b.onActivate.add(F(this, this.onWindowActivate)), b.onRenderContextLost.add(F(this, this.onRenderContextLost)), b.onRenderContextRestored.add(F(this, this.onRenderContextRestored)), b.onDeactivate.add(F(this, this.onWindowDeactivate)), b.onDropFile.add(F(this, this.onWindowDropFile)), b.onEnter.add(F(this, this.onWindowEnter)), b.onExpose.add(F(this, this.onWindowExpose)), b.onFocusIn.add(F(this, this.onWindowFocusIn)), b.onFocusOut.add(F(this, this.onWindowFocusOut)), b.onFullscreen.add(F(this, this.onWindowFullscreen)), b.onKeyDown.add(F(this, this.onKeyDown)), b.onKeyUp.add(F(this, this.onKeyUp)), b.onLeave.add(F(this, this.onWindowLeave)), b.onMinimize.add(F(this, this.onWindowMinimize)), b.onMouseDown.add(F(this, this.onMouseDown)), b.onMouseMove.add(F(this, this.onMouseMove)), b.onMouseMoveRelative.add(F(this, this.onMouseMoveRelative)), b.onMouseUp.add(F(this, this.onMouseUp)), b.onMouseWheel.add(F(this, this.onMouseWheel)), b.onMove.add(F(this, this.onWindowMove)), b.onRender.add(F(this, this.render)), b.onResize.add(F(this, this.onWindowResize)), b.onRestore.add(F(this, this.onWindowRestore)), b.onTextEdit.add(F(this, this.onTextEdit)), b.onTextInput.add(F(this, this.onTextInput)), this.onWindowCreate());
            this.onCreateWindow.dispatch(b);
        }
    },
    __createWindow: function (b) {
        b = new lime.ui.Window(this, b);
        return -1 == b.id ? null : b;
    },
    __registerLimeModule: function (b) {
        b.onUpdate.add(F(this, this.update));
        b.onExit.add(F(this, this.onModuleExit), !1, 0);
        b.onExit.add(F(this, this.__onModuleExit), !1, -1E3);
        for (b = lime.ui.Gamepad.devices.iterator(); b.hasNext();) this.__onGamepadConnect(b.next());
        lime.ui.Gamepad.onConnect.add(F(this, this.__onGamepadConnect));
        for (b = lime.ui.Joystick.devices.iterator(); b.hasNext();) this.__onJoystickConnect(b.next());
        lime.ui.Joystick.onConnect.add(F(this, this.__onJoystickConnect));
        lime.ui.Touch.onCancel.add(F(this, this.onTouchCancel));
        lime.ui.Touch.onStart.add(F(this, this.onTouchStart));
        lime.ui.Touch.onMove.add(F(this, this.onTouchMove));
        lime.ui.Touch.onEnd.add(F(this, this.onTouchEnd));
    },
    __removeWindow: function (b) {
        null != b && this.__windowByID.h.hasOwnProperty(b.id) && (this.__window == b && (this.__window = null), HxOverrides.remove(this.__windows, b), this.__windowByID.remove(b.id), b.close(), this.__checkForAllWindowsClosed());
    },
    __checkForAllWindowsClosed: function () {
        0 == this.__windows.length && lime.system.System.exit(0);
    },
    __onGamepadConnect: function (b) {
        this.onGamepadConnect(b);
        var a = this,
            c = function (c, d) {
                a.onGamepadAxisMove(b, c, d);
            };
        b.onAxisMove.add(c);
        var d = this;
        c = function (a) {
            d.onGamepadButtonDown(b, a);
        };
        b.onButtonDown.add(c);
        var f = this;
        c = function (a) {
            f.onGamepadButtonUp(b, a);
        };
        b.onButtonUp.add(c);
        var l = this;
        b.onDisconnect.add(function () {
            l.onGamepadDisconnect(b);
        });
    },
    __onJoystickConnect: function (b) {
        this.onJoystickConnect(b);
        var a = this,
            c = function (c, d) {
                a.onJoystickAxisMove(b, c, d);
            };
        b.onAxisMove.add(c);
        var d = this;
        c = function (a) {
            d.onJoystickButtonDown(b, a);
        };
        b.onButtonDown.add(c);
        var f = this;
        c = function (a) {
            f.onJoystickButtonUp(b, a);
        };
        b.onButtonUp.add(c);
        var l = this;
        b.onDisconnect.add(function () {
            l.onJoystickDisconnect(b);
        });
        var g = this;
        c = function (a, c) {
            g.onJoystickHatMove(b, a, c);
        };
        b.onHatMove.add(c);
    },
    __onModuleExit: function (b) {
        this.onExit.canceled || (this.__unregisterLimeModule(this), this.__backend.exit(), lime.app.Application.current == this && (lime.app.Application.current = null));
    },
    __onWindowClose: function (b) {
        if (this.__window == b) this.onWindowClose();
        this.__removeWindow(b);
    },
    __unregisterLimeModule: function (b) {
        b.onUpdate.remove(F(this, this.update));
        b.onExit.remove(F(this, this.__onModuleExit));
        b.onExit.remove(F(this, this.onModuleExit));
        lime.ui.Gamepad.onConnect.remove(F(this, this.__onGamepadConnect));
        lime.ui.Joystick.onConnect.remove(F(this, this.__onJoystickConnect));
        lime.ui.Touch.onCancel.remove(F(this, this.onTouchCancel));
        lime.ui.Touch.onStart.remove(F(this, this.onTouchStart));
        lime.ui.Touch.onMove.remove(F(this, this.onTouchMove));
        lime.ui.Touch.onEnd.remove(F(this, this.onTouchEnd));
    },
    __class__: lime.app.Application
})