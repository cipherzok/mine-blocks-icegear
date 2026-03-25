haxe.ds.BalancedTree = function () {}
m["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree
haxe.ds.BalancedTree.__name__ = "haxe.ds.BalancedTree"
haxe.ds.BalancedTree.__interfaces__ = [haxe.IMap]
haxe.ds.BalancedTree.prototype = {
    set: function (b, a) {
        this.root = this.setLoop(b, a, this.root);
    },
    get: function (b) {
        for (var a = this.root; null != a;) {
            var c = this.compare(b, a.key);
            if (0 == c) return a.value;
            a = 0 > c ? a.left : a.right;
        }
        return null;
    },
    exists: function (b) {
        for (var a = this.root; null != a;) {
            var c = this.compare(b, a.key);
            if (0 == c) return !0;
            a = 0 > c ? a.left : a.right;
        }
        return !1;
    },
    keys: function () {
        var b = [];
        this.keysLoop(this.root, b);
        return new haxe.iterators.ArrayIterator(b);
    },
    setLoop: function (b, a, c) {
        if (null == c) return new haxe.ds.TreeNode(null, b, a, null);
        var d = this.compare(b, c.key);
        if (0 == d) return new haxe.ds.TreeNode(c.left, b, a, c.right, null == c ? 0 : c._height);
        if (0 > d) return this.balance(this.setLoop(b, a, c.left), c.key, c.value, c.right);
        b = this.setLoop(b, a, c.right);
        return this.balance(c.left, c.key, c.value, b);
    },
    keysLoop: function (b, a) {
        null != b && (this.keysLoop(b.left, a), a.push(b.key), this.keysLoop(b.right, a));
    },
    balance: function (b, a, c, d) {
        var f = null == b ? 0 : b._height,
            g = null == d ? 0 : d._height;
        return f > g + 2 ? (f = b.left, g = b.right, (null == f ? 0 : f._height) >= (null == g ? 0 : g._height) ? new haxe.ds.TreeNode(b.left, b.key, b.value, new haxe.ds.TreeNode(b.right, a, c, d)) : new haxe.ds.TreeNode(new haxe.ds.TreeNode(b.left, b.key, b.value, b.right.left), b.right.key, b.right.value, new haxe.ds.TreeNode(b.right.right, a, c, d))) : g > f + 2 ? (f = d.right, g = d.left, (null == f ? 0 : f._height) > (null == g ? 0 : g._height) ? new haxe.ds.TreeNode(new haxe.ds.TreeNode(b, a, c, d.left), d.key, d.value, d.right) : new haxe.ds.TreeNode(new haxe.ds.TreeNode(b, a, c, d.left.left), d.left.key, d.left.value, new haxe.ds.TreeNode(d.left.right, d.key, d.value, d.right))) : new haxe.ds.TreeNode(b, a, c, d, (f > g ? f : g) + 1);
    },
    compare: function (b, a) {
        return Reflect.compare(b, a);
    },
    __class__: haxe.ds.BalancedTree
}