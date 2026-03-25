lime.ui.Window = function (b, a) {
    this.clickCount = 0;
    this.onTextInput = new lime.app._Event_String_Void();
    this.onTextEdit = new lime.app._Event_String_Int_Int_Void();
    this.onRestore = new lime.app._Event_Void_Void();
    this.onResize = new lime.app._Event_Int_Int_Void();
    this.onRenderContextRestored = new lime.app._Event_lime_graphics_RenderContext_Void();
    this.onRenderContextLost = new lime.app._Event_Void_Void();
    this.onRender = new lime.app._Event_lime_graphics_RenderContext_Void();
    this.onMove = new lime.app._Event_Float_Float_Void();
    this.onMouseWheel = new lime.app._Event_Float_Float_lime_ui_MouseWheelMode_Void();
    this.onMouseUp = new lime.app._Event_Float_Float_Int_Void();
    this.onMouseMoveRelative = new lime.app._Event_Float_Float_Void();
    this.onMouseMove = new lime.app._Event_Float_Float_Void();
    this.onMouseDown = new lime.app._Event_Float_Float_lime_ui_MouseButton_Void();
    this.onMinimize = new lime.app._Event_Void_Void();
    this.onMaximize = new lime.app._Event_Void_Void();
    this.onLeave = new lime.app._Event_Void_Void();
    this.onKeyUp = new lime.app._Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void();
    this.onKeyDown = new lime.app._Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void();
    this.onFullscreen = new lime.app._Event_Void_Void();
    this.onFocusOut = new lime.app._Event_Void_Void();
    this.onFocusIn = new lime.app._Event_Void_Void();
    this.onExpose = new lime.app._Event_Void_Void();
    this.onEnter = new lime.app._Event_Void_Void();
    this.onDropFile = new lime.app._Event_String_Void();
    this.onDeactivate = new lime.app._Event_Void_Void();
    this.onClose = new lime.app._Event_Void_Void();
    this.onActivate = new lime.app._Event_Void_Void();
    this.application = b;
    this.__attributes = null != a ? a : {};
    Object.prototype.hasOwnProperty.call(this.__attributes, "parameters") && (this.parameters = this.__attributes.parameters);
    this.__height = this.__width = 0;
    this.__fullscreen = !1;
    this.__scale = 1;
    this.__y = this.__x = 0;
    this.__title = Object.prototype.hasOwnProperty.call(this.__attributes, "title") ? this.__attributes.title : "";
    this.id = -1;
    this.__backend = new lime._internal.backend.html5.HTML5Window(this);
}
m["lime.ui.Window"] = lime.ui.Window
lime.ui.Window.__name__ = "lime.ui.Window"
lime.ui.Window.prototype = {
    close: function () {
        this.__backend.close();
    },
    set_cursor: function (b) {
        return this.__backend.setCursor(b);
    },
    set_fullscreen: function (b) {
        return this.__fullscreen = this.__backend.setFullscreen(b);
    },
    __class__: lime.ui.Window
}