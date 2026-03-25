lime.media.OpenALAudioContext = function () {}
m["lime.media.OpenALAudioContext"] = lime.media.OpenALAudioContext
lime.media.OpenALAudioContext.__name__ = "lime.media.OpenALAudioContext"
lime.media.OpenALAudioContext.prototype = {
    createContext: function (b, a) {
        return lime.media.openal.ALC.createContext(b, a);
    },
    makeContextCurrent: function (b) {
        return lime.media.openal.ALC.makeContextCurrent(b);
    },
    openDevice: function (b) {
        return lime.media.openal.ALC.openDevice(b);
    },
    processContext: function (b) {},
    __class__: lime.media.OpenALAudioContext
}