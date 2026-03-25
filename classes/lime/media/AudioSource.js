lime.media.AudioSource = function (b, a, c, d) {
    null == d && (d = 0);
    null == a && (a = 0);
    this.onComplete = new lime.app._Event_Void_Void();
    this.buffer = b;
    this.offset = a;
    this.__backend = new lime._internal.backend.html5.HTML5AudioSource(this);
    null != c && 0 != c && this.set_length(c);
    this.set_loops(d);
    null != b && this.init();
}
m["lime.media.AudioSource"] = lime.media.AudioSource
lime.media.AudioSource.__name__ = "lime.media.AudioSource"
lime.media.AudioSource.prototype = {
    init: function () {
        this.__backend.init();
    },
    play: function () {
        this.__backend.play();
    },
    pause: function () {
        this.__backend.pause();
    },
    stop: function () {
        this.__backend.stop();
    },
    get_gain: function () {
        return this.__backend.getGain();
    },
    set_gain: function (b) {
        return this.__backend.setGain(b);
    },
    set_length: function (b) {
        return this.__backend.setLength(b);
    },
    set_loops: function (b) {
        return this.__backend.setLoops(b);
    },
    set_pitch: function (b) {
        return this.__backend.setPitch(b);
    },
    get_position: function () {
        return this.__backend.getPosition();
    },
    __class__: lime.media.AudioSource
}