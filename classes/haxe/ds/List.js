haxe.ds.List = function () {
    this.length = 0;
}
m["haxe.ds.List"] = haxe.ds.List
haxe.ds.List.__name__ = "haxe.ds.List"
haxe.ds.List.prototype = {
    add: function (b) {
        b = new haxe.ds._List.ListNode(b, null);
        null == this.h ? this.h = b : this.q.next = b;
        this.q = b;
        this.length++;
    },
    push: function (b) {
        this.h = b = new haxe.ds._List.ListNode(b, this.h);
        null == this.q && (this.q = b);
        this.length++;
    },
    pop: function () {
        if (null == this.h) return null;
        var b = this.h.item;
        this.h = this.h.next;
        null == this.h && (this.q = null);
        this.length--;
        return b;
    },
    isEmpty: function () {
        return null == this.h;
    },
    __class__: haxe.ds.List
}