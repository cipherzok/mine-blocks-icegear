haxe.Timer = function (b) {
    var a = this;
    this.id = setInterval(function () {
        a.run();
    }, b);
}
m["haxe.Timer"] = haxe.Timer
haxe.Timer.__name__ = "haxe.Timer"
haxe.Timer.delay = function (b, a) {
    var c = new haxe.Timer(a);
    c.run = function () {
        c.stop();
        b();
    };
    return c;
}
haxe.Timer.prototype = {
    stop: function () {
        null != this.id && (clearInterval(this.id), this.id = null);
    },
    run: function () {},
    __class__: haxe.Timer
}