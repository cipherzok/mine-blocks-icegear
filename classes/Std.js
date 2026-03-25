var Std = function () {};
m.Std = Std
Std.__name__ = "Std"
Std.string = function (b) {
    return js.Boot.__string_rec(b, "");
}
Std.parseInt = function (b) {
    b = parseInt(b);
    return isNaN(b) ? null : b;
}