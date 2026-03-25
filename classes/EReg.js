var EReg = function (b, a) {
    this.r = new RegExp(b, a.split("u").join(""));
};
m.EReg = EReg
EReg.__name__ = "EReg"
EReg.prototype = {
    match: function (b) {
        this.r.global && (this.r.lastIndex = 0);
        this.r.m = this.r.exec(b);
        this.r.s = b;
        return null != this.r.m;
    },
    split: function (b) {
        return b.replace(this.r, "#__delim__#").split("#__delim__#");
    },
    __class__: EReg
}