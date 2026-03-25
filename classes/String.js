String.fromCodePoint = function (b) {
    return 65536 > b ? String.fromCharCode(b) : String.fromCharCode((b >> 10) + 55232) + String.fromCharCode((b & 1023) + 56320);
}
m.String = String
String.__name__ = "String"