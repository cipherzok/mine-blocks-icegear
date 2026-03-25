var Item = function (b, a, c, d, f) {
    this.enchantmentGlintQuad = -1;
    this.entity = b;
    this.game = d;
    this.set_x(a);
    this.set_y(c);
    this.set_item(f);
    this.setIsEnchanted();
};
m.Item = Item
Item.__name__ = "Item"
Item.prototype = {
    getTick: function () {
        return null == this.game ? Main.Instance.tick : this.game.world.tick;
    },
    renderInit: function (b, a, c) {
        this.renderer = Type.createInstance(BlockData.getItemRenderer(this.get_type()), [b, a, c]).fromItem(this.item);
    },
    destroy: function () {
        null != this.renderer && this.renderer.destroy();
        -1 != this.enchantmentGlintQuad && (this.entity.removeQuad(this.enchantmentGlintQuad), this.enchantmentGlintQuad = -1);
    },
    render: function () {
        if (null != this.entity) if (null == this.renderer ? this.renderInit(this.entity, this.x, this.y) : this.renderer.fromItem(this.item), this.renderer.update(), this.isEnchanted) {
            -1 == this.enchantmentGlintQuad && (this.enchantmentGlintQuad = this.entity.nearestConsecutiveEmpty(1, this.renderer.quadPositions[this.renderer.quadPositions.length - 1] + 1), this.enchantmentGlintTexture = Textures.getTexture("enchantment_glint"));
            var b = this.getTick() / (520 * Main.Instance.get_fps() / 25);
            this.entity.updateQuad(this.enchantmentGlintQuad, new lemongine.Vector3(this.x, this.y), new lemongine.Point(this.enchantmentGlintTexture.x, this.enchantmentGlintTexture.y), new lemongine.Point(this.enchantmentGlintTexture.width, this.enchantmentGlintTexture.height), new lemongine.Point(1, 1), null, [b, 0, b, 1, b + .14285714285714285, 0, b + .14285714285714285, 0, b, 1, b + .14285714285714285, 1]);
        } else -1 != this.enchantmentGlintQuad && (this.entity.removeQuad(this.enchantmentGlintQuad), this.enchantmentGlintQuad = -1);
    },
    getBlockData: function (b) {
        return BlockData.get(this.get_type(), b);
    },
    setIsEnchanted: function () {
        this.isEnchanted = !1;
        if (null != this.get_extras()) for (var b = Object.keys(this.get_extras().h), a = b.length, c = 0; c < a;) if (null != Game.enchantmentNames.h[b[c++]]) {
            this.isEnchanted = !0;
            break;
        }
    },
    get_type: function () {
        return this.item[0];
    },
    get_count: function () {
        return this.item[1];
    },
    get_isTool: function () {
        return 1 == this.getBlockData("tool");
    },
    get_damage: function () {
        return this.item[2];
    },
    get_extras: function () {
        "Object" != lemongine.Helpers.getQualifiedClassName(this.item[3]) && (this.item[3] = new haxe.ds.StringMap());
        return this.item[3];
    },
    set_item: function (b) {
        if (null == b || null == b[0]) b = ["air", 0, 0, new haxe.ds.StringMap()];
        null != this.item && b[0] != this.item[0] && (this.destroy(), this.renderer = null);
        this.item = lemongine.Helpers.clone(b);
        this.setIsEnchanted();
        this.render();
        return this.item;
    },
    setPosition: function (b, a, c) {
        null == c && (c = !0);
        null == this.renderer || this.renderer.get_x() == b && this.renderer.get_y() == a ? (this.set_x(b), this.set_y(a)) : (this.renderer.set_x(b), this.renderer.set_y(a), this.set_x(b), this.set_y(a), c && this.render());
    },
    set_x: function (b) {
        this.x != b && (this.x = b, null != this.renderer && this.renderer.get_x() != this.x && (this.renderer.set_x(this.x), this.render()));
        return b;
    },
    set_y: function (b) {
        this.y != b && (this.y = b, null != this.renderer && this.renderer.get_y() != this.y && (this.renderer.set_y(this.y), this.render()));
        return b;
    },
    __class__: Item
}