lemongine.Sound = function (b, a) {
    this.playTimestamp = this.playDuration = 0;
    this.setOnFail = !1;
    this.speed = 1;
    this.pan = 0;
    this.loops = this.volume = 1;
    this.offset = this.duration = 0;
    this.loaded = !1;
    null == a && (a = lemongine.AudioTag.SFX);
    this.tag = a;
    null == b ? new lime.media.AudioSource() : (this.source = b, this.source.onComplete.add(F(this, this.completeEvent)), this.loaded = !0);
}
m["lemongine.Sound"] = lemongine.Sound
lemongine.Sound.__name__ = "lemongine.Sound"
lemongine.Sound.prototype = {
    fromBuffer: function (b) {
        this.buffer = b;
        this.loaded = !0;
        return this;
    },
    completeEvent: function () {
        this.onComplete();
    },
    play: function (b, a, c, d, f, g, k) {
        null == k && (k = 1);
        null == g && (g = !0);
        null == f && (f = 1);
        null == d && (d = 0);
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 1);
        var l = this;
        if (null != this.buffer && (null == this.source && (this.source = new lime.media.AudioSource(this.buffer)), this.tag != lemongine.AudioTag.SFX || 0 != Main.Instance.firstInteraction)) {
            this.set_offset(c);
            this.set_duration(d);
            this.set_loops(f);
            this.set_volume(b);
            this.set_pan(a);
            this.set_speed(k);
            try {
                g && this.source.stop(), this.source.play();
            } catch (B) {
                if (null != this.onFail) this.onFail();
            }
            null != this.source.__backend.parent.buffer.__srcHowl && (null != this.onFail && 0 == this.setOnFail && (this.setOnFail = !0, this.source.__backend.parent.buffer.__srcHowl.on("playerror", function () {
                if (null != l.onFail) l.onFail();
            })), this.source.__backend.parent.buffer.__srcHowl.stereo(a, this.source.__backend.id));
            this.playTimestamp = new Date().getTime() / 1E3;
            this.track();
            0 < d && 0 == f && (null != this.durationTimer && this.durationTimer.stop(), 0 != k && (this.durationTimer = haxe.Timer.delay(F(this, this.stop), Math.floor((d - this.playDuration) / k * 1E3))));
        }
    },
    pause: function () {
        null != this.source && (this.source.pause(), this.playDuration += (new Date().getTime() / 1E3 - this.playTimestamp) * this.speed, null != this.durationTimer && this.durationTimer.stop());
    },
    stop: function () {
        null != this.source && (this.source.stop(), this.untrack(), null != this.durationTimer && this.durationTimer.stop());
    },
    set_offset: function (b) {
        isFinite(b) || (b = 0);
        this.offset = b;
        if (null == this.source) return b;
        this.source.offset = Math.floor(1E3 * b);
        return b;
    },
    set_duration: function (b) {
        isFinite(b) || (b = 0);
        var a = Math.floor(1E3 * b);
        0 >= b && (a = null);
        this.source.set_length(a);
        return this.duration = b;
    },
    set_loops: function (b) {
        isFinite(b) || (b = 1);
        this.loops = b;
        if (null == this.source) return b;
        this.source.set_loops(b - 1);
        return b;
    },
    set_volume: function (b) {
        isFinite(b) || (b = 1);
        this.volume = b;
        if (null == this.source) return b;
        var a = b * lemongine.Audio.masterVolume * (Main.Instance.enginePaused ? 0 : 1);
        switch (this.tag._hx_index) {
        case 0:
            a *= lemongine.Audio.sfxVolume;
            break;
        case 1:
            a *= lemongine.Audio.musicVolume;
            break;
        case 2:
            a *= lemongine.Audio.ambienceVolume;
        }
        this.source.set_gain(a);
        return b;
    },
    set_pan: function (b) {
        isFinite(b) || (b = 0);
        this.pan = b;
        if (null == this.source) return b;
        null != this.source.__backend.parent.buffer.__srcHowl && this.source.__backend.parent.buffer.__srcHowl.stereo(this.pan, this.source.__backend.id);
        return b;
    },
    set_speed: function (b) {
        if (0 == b) return this.pause(), this.speed = b;
        this.playDuration += (new Date().getTime() / 1E3 - this.playTimestamp) * this.speed;
        this.playTimestamp = new Date().getTime() / 1E3;
        this.speed = b;
        0 < this.duration && 0 == this.loops && (null != this.durationTimer && this.durationTimer.stop(), 0 != this.speed && (this.durationTimer = haxe.Timer.delay(F(this, this.stop), Math.floor((this.duration - this.playDuration) / this.speed * 1E3))));
        this.source.set_pitch(this.speed);
        return this.speed;
    },
    track: function () {
        switch (this.tag._hx_index) {
        case 0:
            null == lemongine.Audio.sfxChannel.h.__keys__[this.__id__] && lemongine.Audio.sfxChannel.set(this, !0);
            break;
        case 1:
            null == lemongine.Audio.musicChannel.h.__keys__[this.__id__] && lemongine.Audio.musicChannel.set(this, !0);
            break;
        case 2:
            null == lemongine.Audio.ambienceChannel.h.__keys__[this.__id__] && lemongine.Audio.ambienceChannel.set(this, !0);
        }
    },
    untrack: function () {
        switch (this.tag._hx_index) {
        case 0:
            null != lemongine.Audio.sfxChannel.h.__keys__[this.__id__] && lemongine.Audio.sfxChannel.remove(this);
            break;
        case 1:
            null != lemongine.Audio.musicChannel.h.__keys__[this.__id__] && lemongine.Audio.musicChannel.remove(this);
            break;
        case 2:
            null != lemongine.Audio.ambienceChannel.h.__keys__[this.__id__] && lemongine.Audio.ambienceChannel.remove(this);
        }
    },
    __class__: lemongine.Sound
}