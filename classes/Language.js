var Language = function () {};
m.Language = Language
Language.__name__ = "Language"
Language.shortCountdownString = function (b) {
    var a = "";
    60 <= b && (a = Math.floor(b / 60) + "m ");
    return a + (b % 60 + "s");
}
Language.dateString = function (b) {
    b = new Date(1E3 * b);
    return "Jan. Feb. Mar. Apr. May June July Aug. Sep. Oct. Nov. Dec.".split(" ")[b.getMonth()] + " " + b.getDate() + ", " + b.getFullYear();
}