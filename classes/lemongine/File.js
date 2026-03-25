lemongine.File = function () {}
m["lemongine.File"] = lemongine.File
lemongine.File.__name__ = "lemongine.File"
lemongine.File.openBytes = function (b, a, c, d) {
    null == d && (d = !0);
    null == lemongine.File.inputElement && (lemongine.File.inputElement = window.document.createElement("input"), lemongine.File.inputElement.setAttribute("type", "file"));
    b = b.join(",.");
    0 < b.length && (b = "." + b);
    lemongine.File.inputElement.setAttribute("accept", b);
    lemongine.File.inputElement.onchange = function () {
        lemongine.File.loadFile(lemongine.File.inputElement.files[0], a, c);
    };
    lemongine.File.inputElement.click();
}
lemongine.File.open = function (b, a, c, d) {
    null == d && (d = !0);
    lemongine.File.openBytes(b, function (b, c) {
        null == b && (b = new haxe.io.Bytes(new ArrayBuffer(0)));
        a(b.toString(), c);
    }, c, d);
}
lemongine.File.loadFile = function (b, a, c) {
    var d = new FileReader();
    d.onload = function (c) {
        var d = c.target.result;
        c = c.target.result.indexOf(",") + 1;
        a(haxe.io.Bytes.ofData(haxe.crypto.Base64.decode(d.substr(c)).b.bufferValue), b.name);
        try {
            lemongine.File.inputElement.value = "", "" != lemongine.File.inputElement.value && (lemongine.File.inputElement.type = "text", lemongine.File.inputElement.type = "file");
        } catch (p) {}
    };
    d.onerror = d.onabort = function (a) {
        null != c && c();
    };
    d.readAsDataURL(b);
}
lemongine.File.saveString = function (b, a, c, d, f) {
    null == f && (f = !0);
    f = new lime.ui.FileDialog();
    null != d && f.onCancel.add(d);
    d = function (a) {
        null != c && c();
    };
    f.onSave.add(d);
    d = null != a ? HxOverrides.substr(a, a.lastIndexOf(".") + 1, null) : null;
    f.save(haxe.io.Bytes.ofString(b), d, a);
}
lemongine.File.saveBytes = function (b, a, c, d, f) {
    null == f && (f = !0);
    f = new lime.ui.FileDialog();
    null != d && f.onCancel.add(d);
    f.onSave.add(function (a) {
        null != c && c();
    });
    f.save(b, null != a ? HxOverrides.substr(a, a.lastIndexOf(".") + 1, null) : null, a);
}