lemongine.Lemongine = function () {
    this.firstInteraction = !1;
    this.eventRegistry = new haxe.ds.EnumValueMap();
    this.mouseButtonsUp = [-1, -1, -1];
    this.mouseButtonsDown = [-1, -1, -1];
    this.mouseLast = new lemongine.Point(0, 0);
    this.mouse = new lemongine.Point(0, 0);
    this.mouseWheelDelta = 0;
    this.touches = new haxe.ds.IntMap();
    this.isUp = new haxe.ds.IntMap();
    this.isDownRepeat = new haxe.ds.IntMap();
    this.isDown = new haxe.ds.IntMap();
    this.wasDown = new haxe.ds.IntMap();
    this.isDownDouble = new haxe.ds.IntMap();
    this.doubleKeyPressMaxDuration = .3;
    this.keyRemap = new haxe.ds.IntMap();
    this.focus = !0;
    this.hadPreRun = this.enginePaused = !1;
    this.cursor = lime.ui.MouseCursor.DEFAULT;
    this.__internal_scale = 1;
    this.viewportScaleSnap = !1;
    this.viewportScale = 1;
    this.sceneImage = new lemongine.Image();
    this.preloadProgress = this.tick = 0;
    this.preloadComplete = !1;
    this.lemongineFrame = "firstFrame";
    lime.app.Application.call(this);
    this.__internal_scene = new lemongine.Scene(1, 1);
    this.scene = new lemongine.Scene(1, 1);
}
m["lemongine.Lemongine"] = lemongine.Lemongine
lemongine.Lemongine.__name__ = "lemongine.Lemongine"
lemongine.Lemongine.adStartCallback = u.zanzlanz.adStartCallback = function () {
    Main.Instance.set_enginePaused(!0);
}
lemongine.Lemongine.adEndCallback = u.zanzlanz.adEndCallback = function () {
    Main.Instance.set_enginePaused(!1);
}
lemongine.Lemongine.requestInterstitial = function () {
    window.runInterstitial && window.runInterstitial();
}
lemongine.Lemongine.__super__ = lime.app.Application
lemongine.Lemongine.prototype = z(lime.app.Application.prototype, {
    initialize: function () {},
    loop: function () {},
    loadAssets: function () {},
    onPreloadComplete: function () {
        this.preloadComplete = !0;
    },
    onPreloadProgress: function (b, a) {
        this.preloadProgress = b / a;
    },
    render: function (b) {
        this.renderContext = b;
        switch (this.lemongineFrame) {
        case "firstFrame":
            this.checkHardwareAcceleration();
            if (null != b.webgl2) lemongine.Lemongine.gl = uc.fromWebGL2RenderContext(b.webgl2), lemongine.Lemongine.gl.getExtension("EXT_color_buffer_float");else if (null != b.webgl) lemongine.Lemongine.gl = b.webgl;else if (null != b.gl) lemongine.Lemongine.gl = b.gl;else {
                this.fatalError("You don't have WebGL enabled. This game needs it!\nSee here for advice: zanz.net/webgl");
                haxe.Log.trace("You don't have WebGL enabled! Try updating your browser or following the advice on https://zanz.net/webgl.", {
                    fileName: "lemongine/Lemongine.hx",
                    lineNumber: 127,
                    className: "lemongine.Lemongine",
                    methodName: "render"
                });
                break;
            }
            this.calculatedFPS = this.currentFPS = this.get_fps();
            this.lastFrameTime = new Date().getTime() / 1E3;
            this.scene.setDimensions(this.__window.__width, this.__window.__height, !0);
            lemongine.Renderer.activate(this.scene);
            this.lemongineFrame = this.preloadComplete ? "loadAssets" : "preload";
            lemongine.Renderer.globalInitialize();
            this.addFirstInteractionCallbacks();
            break;
        case "initialize":
            this.initialize();
            null != this.splash ? (this.preSplash(), this.currentScreen = this.splash, this.lemongineFrame = "screenLoadAssets") : (this.hadPreRun || (this.hadPreRun = !0, this.preRun()), this.lemongineFrame = "run");
            break;
        case "loadAssets":
            0 == lemongine.AssetManager.numImages && this.loadAssets();
            lemongine.AssetManager.numImagesLoaded == lemongine.AssetManager.numImages && (this.lemongineFrame = "initialize");
            break;
        case "preload":
            this.preloadComplete && (this.lemongineFrame = "loadAssets");
            this.__internal_scene.clear();
            this.scene.clear();
            this.scene.fillRect(new lemongine.Rectangle(.25 * this.scene.get_width() + 1, .5 * this.scene.get_height() - 5, .5 * this.scene.get_width() - 2, 10), new lemongine.Color(-12566464));
            this.scene.fillRect(new lemongine.Rectangle(.25 * this.scene.get_width(), .5 * this.scene.get_height() - 5 + 1, .5 * this.scene.get_width(), 8), new lemongine.Color(-12566464));
            this.scene.fillRect(new lemongine.Rectangle(.25 * this.scene.get_width() + 2, .5 * this.scene.get_height() - 3, (.5 * this.scene.get_width() - 4) * this.preloadProgress, 6), new lemongine.Color(-9408400));
            this.scene.render();
            this.sceneImage.fromGLTexture(this.scene.get_width(), this.scene.get_height(), this.scene.get_glTexture());
            this.__internal_scene.draw2DFlipped(this.sceneImage);
            this.__internal_scene.render();
            break;
        case "run":
            this.doFrame();
            break;
        case "screenInitialize":
            lemongine.AssetManager.numImagesLoaded == lemongine.AssetManager.numImages && (this.currentScreen.initialize(), this.lemongineFrame = "screenRun");
            break;
        case "screenLoadAssets":
            this.currentScreen.loadAssets();
            this.lemongineFrame = "screenInitialize";
            break;
        case "screenRun":
            this.__internal_scene.clear();
            this.currentScreen.scene.clear();
            this.currentScreen.run() && (this.hadPreRun || (this.hadPreRun = !0, this.preRun()), this.lemongineFrame = "run");
            this.currentScreen.scene.render();
            this.sceneImage.fromGLTexture(this.currentScreen.scene.get_width(), this.currentScreen.scene.get_height(), this.currentScreen.scene.get_glTexture());
            this.__internal_scene.draw2DFlipped(this.sceneImage);
            this.__internal_scene.render();
            break;
        case "stall":
            break;
        default:
            haxe.Log.trace("Frame '" + this.lemongineFrame + "' doesn't exist!", {
                fileName: "lemongine/Lemongine.hx",
                lineNumber: 206,
                className: "lemongine.Lemongine",
                methodName: "render"
            });
        }
    },
    preSplash: function () {},
    preRun: function () {},
    doFrame: function () {
        lemongine.Renderer.resetCallCount();
        this.enginePaused || (this.__internal_scene.clear(), this.scene.clear(), this.loop(), this.runEvents(lemongine.Event.TICK, [this.tick]), this.scene.render(), this.sceneImage.fromGLTexture(this.scene.get_width(), this.scene.get_height(), this.scene.get_glTexture()), this.__internal_scene.draw2DFlipped(this.sceneImage), this.__internal_scene.render(), this.tick++);
        this.mouseWheelDelta = 0;
        this.__window.set_cursor(this.cursor);
        this.cursor = lime.ui.MouseCursor.DEFAULT;
        this.calculatedFPS += (1 / Math.max(.001, new Date().getTime() / 1E3 - this.lastFrameTime) - this.calculatedFPS) / 10;
        this.lastFrameTime = new Date().getTime() / 1E3;
        0 == (G.toFloat(this.tick) % G.toFloat(5) | 0) && (this.currentFPS = Math.floor(10 * this.calculatedFPS) / 10);
        this.mouseLast.set(this.mouse.x, this.mouse.y);
    },
    getActualScale: function () {
        return this.__internal_scale;
    },
    set_fps: function (b) {
        this.__window.__backend.setFrameRate(b);
        return b;
    },
    get_fps: function () {
        return this.__window.__backend.getFrameRate() | 0;
    },
    set_enginePaused: function (b) {
        this.enginePaused = b;
        lemongine.Audio.updateVolumes();
        return b;
    },
    onWindowResize: function (b, a) {
        null != lemongine.Lemongine.gl && lemongine.Renderer.activate(this.__internal_scene, !0);
    },
    addEventListener: function (b, a) {
        this.eventRegistry.exists(b) || this.eventRegistry.set(b, []);
        -1 == this.eventRegistry.get(b).indexOf(a) && this.eventRegistry.get(b).push(a);
    },
    removeEventListener: function (b, a) {
        this.eventRegistry.exists(b) && HxOverrides.remove(this.eventRegistry.get(b), a);
    },
    runEvents: function (b, a) {
        if (this.eventRegistry.exists(b)) {
            var c = 0;
            for (b = this.eventRegistry.get(b); c < b.length;) b[c++].apply(null, a);
        }
    },
    keyDownDouble: function (b) {
        this.keyRemap.h.hasOwnProperty(b) && (b = this.keyRemap.h[b]);
        return this.isDownDouble.h.hasOwnProperty(b) ? this.tick - this.isDownDouble.h[b] + 1 : 0;
    },
    keyDown: function (b) {
        this.keyRemap.h.hasOwnProperty(b) && (b = this.keyRemap.h[b]);
        return this.isDown.h.hasOwnProperty(b) ? this.tick - this.isDown.h[b] + 1 : 0;
    },
    keyUp: function (b) {
        this.keyRemap.h.hasOwnProperty(b) && (b = this.keyRemap.h[b]);
        return this.isUp.h.hasOwnProperty(b) ? this.tick - this.isUp.h[b] + 1 : 0;
    },
    mouseDown: function () {
        return -1 < this.mouseButtonsDown[0] ? this.tick - this.mouseButtonsDown[0] + 1 : 0;
    },
    mouseUp: function () {
        return -1 < this.mouseButtonsUp[0] ? this.tick - this.mouseButtonsUp[0] + 1 : 0;
    },
    rightMouseDown: function () {
        return -1 < this.mouseButtonsDown[2] ? this.tick - this.mouseButtonsDown[2] + 1 : 0;
    },
    rightMouseUp: function () {
        return -1 < this.mouseButtonsUp[2] ? this.tick - this.mouseButtonsUp[2] + 1 : 0;
    },
    onKeyDown: function (b, a) {
        this.keyRemap.h.hasOwnProperty(b) && (b = this.keyRemap.h[b]);
        this.isDown.h.hasOwnProperty(b) || (this.wasDown.h.hasOwnProperty(b) && G.toFloat(this.tick - this.wasDown.h[b]) / this.calculatedFPS <= this.doubleKeyPressMaxDuration && (this.isDownDouble.h[b] = this.tick), this.isDown.h[b] = this.tick, this.isUp.remove(b), this.runEvents(lemongine.Event.KEY_DOWN, [b, a]));
        this.isDownRepeat.h[b] = this.tick;
        this.runEvents(lemongine.Event.KEY_DOWN_REPEAT, [b, a]);
    },
    onKeyUp: function (b, a) {
        this.keyRemap.h.hasOwnProperty(b) && (b = this.keyRemap.h[b]);
        this.isDown.h.hasOwnProperty(b) && (this.wasDown.h[b] = this.isDown.h[b]);
        this.isDownDouble.remove(b);
        this.isDown.remove(b);
        this.isDownRepeat.remove(b);
        this.isUp.h.hasOwnProperty(b) || (this.isUp.h[b] = this.tick, this.runEvents(lemongine.Event.KEY_UP, [b, a]));
    },
    setMousePosition: function (b, a) {
        b = this.screenToSceneX(b);
        this.mouse.x = Math.floor(b);
        b = this.screenToSceneY(a);
        this.mouse.y = Math.floor(b);
    },
    screenToSceneX: function (b) {
        return (b - (lime.app.Application.current.__window.__width - this.scene.get_width() * this.getActualScale()) / 2) / this.getActualScale();
    },
    screenToSceneY: function (b) {
        return (b - (lime.app.Application.current.__window.__height - this.scene.get_height() * this.getActualScale()) / 2) / this.getActualScale();
    },
    onMouseMove: function (b, a) {
        this.setMousePosition(b, a);
        this.runEvents(lemongine.Event.MOUSE_MOVE, [this.mouse.x, this.mouse.y]);
    },
    onMouseDown: function (b, a, c) {
        this.setMousePosition(b, a);
        0 <= c && 2 >= c && (this.mouseButtonsDown[c] = this.tick, this.mouseButtonsUp[c] = -1);
        this.runEvents(lemongine.Event.MOUSE_DOWN, [this.mouse.x, this.mouse.y, c]);
    },
    onMouseUp: function (b, a, c) {
        this.setMousePosition(b, a);
        0 <= c && 2 >= c && (this.mouseButtonsUp[c] = this.tick, this.mouseButtonsDown[c] = -1);
        this.__window.onMouseUp.cancel();
        this.runEvents(lemongine.Event.MOUSE_UP, [this.mouse.x, this.mouse.y, c]);
    },
    onMouseWheel: function (b, a, c) {
        0 != a && (this.mouseWheelDelta += 0 < a ? 1 : -1, this.runEvents(lemongine.Event.MOUSE_WHEEL, [this.mouseWheelDelta]));
    },
    onTextInput: function (b) {
        this.runEvents(lemongine.Event.TEXT_INPUT, [b]);
    },
    onWindowFocusIn: function () {
        this.focus = !0;
        this.runEvents(lemongine.Event.FOCUS_IN, []);
    },
    onWindowFocusOut: function () {
        this.focus = !1;
        this.runEvents(lemongine.Event.FOCUS_OUT, []);
        for (var b = this.isDown.keys(); b.hasNext();) {
            var a = b.next();
            this.isUp.h[a] = this.tick;
            this.wasDown.h[a] = this.isDown.h[a];
            this.isDown.remove(a);
        }
    },
    onWindowActivate: function () {
        this.focus = !1;
        this.runEvents(lemongine.Event.ACTIVATE, []);
    },
    onTouchStart: function (b) {
        lime.app.Application.prototype.onTouchStart.call(this, b);
        var a = this.touches,
            c = b.id,
            d = {
                id: b.id,
                x: this.screenToSceneX(b.x * lime.app.Application.current.__window.__width),
                y: this.screenToSceneY(b.y * lime.app.Application.current.__window.__height),
                tick: this.tick,
                dx: b.dx * lime.app.Application.current.__window.__width / this.getActualScale(),
                dy: b.dy * lime.app.Application.current.__window.__height / this.getActualScale()
            };
        a.h[c] = d;
        this.runEvents(lemongine.Event.TOUCH_START, [b.id, this.screenToSceneX(b.x * lime.app.Application.current.__window.__width), this.screenToSceneY(b.y * lime.app.Application.current.__window.__height)]);
    },
    onTouchMove: function (b) {
        lime.app.Application.prototype.onTouchMove.call(this, b);
        null != this.touches.h[b.id] && (this.touches.h[b.id].x = this.screenToSceneX(b.x * lime.app.Application.current.__window.__width), this.touches.h[b.id].y = this.screenToSceneY(b.y * lime.app.Application.current.__window.__height), this.touches.h[b.id].dx = b.dx / this.getActualScale(), this.touches.h[b.id].dy = b.dy / this.getActualScale(), this.runEvents(lemongine.Event.TOUCH_MOVE, [b.id, this.screenToSceneX(b.x * lime.app.Application.current.__window.__width), this.screenToSceneY(b.y * lime.app.Application.current.__window.__height)]));
    },
    onTouchEnd: function (b) {
        lime.app.Application.prototype.onTouchEnd.call(this, b);
        this.runEvents(lemongine.Event.TOUCH_END, [b.id, this.screenToSceneX(b.x * lime.app.Application.current.__window.__width), this.screenToSceneY(b.y * lime.app.Application.current.__window.__height)]);
        this.touches.remove(b.id);
    },
    onTouchCancel: function (b) {
        lime.app.Application.prototype.onTouchCancel.call(this, b);
        this.runEvents(lemongine.Event.TOUCH_END, [b.id, this.screenToSceneX(b.x * lime.app.Application.current.__window.__width), this.screenToSceneY(b.y * lime.app.Application.current.__window.__height)]);
        this.touches.remove(b.id);
    },
    addFirstInteractionCallbacks: function () {
        var b = this,
            a = null;
        a = function (c, d, f) {
            b.firstInteraction = !0;
            b.removeEventListener(lemongine.Event.MOUSE_DOWN, a);
        };
        this.addEventListener(lemongine.Event.MOUSE_DOWN, a);
    },
    fatalError: function (b) {
        this.lemongineFrame = "stall";
        var a = js.Boot.__cast(window.document.querySelector("canvas"), HTMLCanvasElement),
            c = js.Boot.__cast(a.cloneNode(!1), HTMLCanvasElement);
        a.parentNode.replaceChild(c, a);
        a = c.getContext("2d");
        a.fillStyle = "#EE2200";
        a.fillRect(0, 0, c.width, c.height);
        a.fillStyle = "#012f4f";
        a.fillRect(2, 2, c.width - 4, c.height - 4);
        a.font = "20px Verdana";
        a.fillStyle = "#FFFFFF";
        b = b.split("\n");
        for (var d = 0, f = b.length; d < f;) {
            var g = d++;
            a.fillText(b[g], 30, c.height / 2 + 20 + 30 * g, c.width - 60);
        }
        a.font = "16px Verdana";
        a.fillStyle = "#237bbb";
        a.fillText("You can reach me with email or on Twitter. Visit Zanzlanz.com.", 30, c.height / 2 + 80, c.width - 60);
        a.font = "64px Verdana";
        a.fillStyle = "#237bbb";
        a.fillText("Oof", 25, c.height / 2 + 20 - 40, c.width - 60);
    },
    checkHardwareAcceleration: function () {
        var b = js.Boot.__cast(window.document.createElement("canvas"), HTMLCanvasElement);
        null == b.getContext("webgl", {
            failIfMajorPerformanceCaveat: !0
        }) && null == b.getContext("experimental-webgl", {
            failIfMajorPerformanceCaveat: !0
        }) && (null != b.getContext("webgl") || null != b.getContext("experimental-webgl") ? (haxe.Log.trace("Hardware Acceleration is turned off on your browser. The game will run slowly, especially when the window is large. Enable Hardware Acceleration, or see https://zanz.net/webgl for details!", {
            fileName: "lemongine/Lemongine.hx",
            lineNumber: 524,
            className: "lemongine.Lemongine",
            methodName: "checkHardwareAcceleration"
        }), window.hardwareAccelerationWarning && window.hardwareAccelerationWarning()) : haxe.Log.trace("WebGL appears to be disabled. See https://zanz.net/webgl for details.", {
            fileName: "lemongine/Lemongine.hx",
            lineNumber: 527,
            className: "lemongine.Lemongine",
            methodName: "checkHardwareAcceleration"
        }));
    },
    __class__: lemongine.Lemongine
})