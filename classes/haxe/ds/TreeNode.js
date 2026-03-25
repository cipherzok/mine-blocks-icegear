haxe.ds.TreeNode = function (b, a, c, d, f) {
    null == f && (f = -1);
    this.left = b;
    this.key = a;
    this.value = c;
    this.right = d;
    -1 == f ? (b = this.left, a = this.right, b = (null == b ? 0 : b._height) > (null == a ? 0 : a._height) ? this.left : this.right, this._height = (null == b ? 0 : b._height) + 1) : this._height = f;
}
m["haxe.ds.TreeNode"] = haxe.ds.TreeNode
haxe.ds.TreeNode.__name__ = "haxe.ds.TreeNode"
haxe.ds.TreeNode.prototype = {
    __class__: haxe.ds.TreeNode
}