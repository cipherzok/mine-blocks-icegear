lime.media.AudioContext = function (b) {
    if ("custom" != b) {
        if (null == b || "web" == b) try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext, this.web = new window.AudioContext(), this.type = "web";
        } catch (a) {}
        null == this.web && "web" != b && (this.html5 = new lime.media.HTML5AudioContext(), this.type = "html5");
    } else this.type = "custom";
}
m["lime.media.AudioContext"] = lime.media.AudioContext
lime.media.AudioContext.__name__ = "lime.media.AudioContext"
lime.media.AudioContext.prototype = {
    __class__: lime.media.AudioContext
}