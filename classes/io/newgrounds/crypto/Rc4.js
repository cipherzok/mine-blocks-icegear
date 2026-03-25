io.newgrounds.crypto.Rc4 = function (b) {
    this.index1 = this.index2 = 0;
    this.perm = new haxe.io.Bytes(new ArrayBuffer(256));
    for (var a = 0; 256 > a;) {
        var c = a++;
        this.perm.b[c] = c & 255;
    }
    var d = 0;
    for (a = 0; 256 > a;) {
        c = a++;
        d = (d + this.perm.b[c] + b.b[c % b.length]) % 256;
        var f = this.perm.b[c];
        this.perm.b[c] = this.perm.b[d] & 255;
        this.perm.b[d] = f & 255;
    }
}
m["io.newgrounds.crypto.Rc4"] = io.newgrounds.crypto.Rc4
io.newgrounds.crypto.Rc4.__name__ = "io.newgrounds.crypto.Rc4"
io.newgrounds.crypto.Rc4.prototype = {
    crypt: function (b) {
        for (var a = new haxe.io.Bytes(new ArrayBuffer(b.length)), c = 0, d = b.length; c < d;) {
            var f = c++;
            this.index1 = (this.index1 + 1) % 256;
            this.index2 = (this.index2 + this.perm.b[this.index1]) % 256;
            var g = this.index1,
                k = this.index2,
                h = this.perm.b[g];
            this.perm.b[g] = this.perm.b[k] & 255;
            this.perm.b[k] = h & 255;
            a.b[f] = (b.b[f] ^ this.perm.b[(this.perm.b[this.index1] + this.perm.b[this.index2]) % 256]) & 255;
        }
        return a;
    },
    __class__: io.newgrounds.crypto.Rc4
}