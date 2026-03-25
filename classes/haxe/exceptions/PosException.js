haxe.exceptions.PosException = function (b, a, c) {
    haxe.Exception.call(this, b, a);
    this.posInfos = null == c ? {
        fileName: "(unknown)",
        lineNumber: 0,
        className: "(unknown)",
        methodName: "(unknown)"
    } : c;
    this.__skipStack++;
}
m["haxe.exceptions.PosException"] = haxe.exceptions.PosException
haxe.exceptions.PosException.__name__ = "haxe.exceptions.PosException"
haxe.exceptions.PosException.__super__ = haxe.Exception
haxe.exceptions.PosException.prototype = z(haxe.Exception.prototype, {
    toString: function () {
        return "" + haxe.Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
    },
    __class__: haxe.exceptions.PosException
})