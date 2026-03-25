lime.media.AudioManager = function () {}
m["lime.media.AudioManager"] = lime.media.AudioManager
lime.media.AudioManager.__name__ = "lime.media.AudioManager"
lime.media.AudioManager.init = function (b) {
    if (null == lime.media.AudioManager.context) {
        if (null == b && (lime.media.AudioManager.context = new lime.media.AudioContext(), b = lime.media.AudioManager.context, "openal" == b.type)) {
            var a = b.openal,
                c = a.createContext(a.openDevice());
            a.makeContextCurrent(c);
            a.processContext(c);
        }
        lime.media.AudioManager.context = b;
    }
}