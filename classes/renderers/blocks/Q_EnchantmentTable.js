renderers.blocks.Q_EnchantmentTable = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_EnchantmentTable"] = renderers.blocks.Q_EnchantmentTable
renderers.blocks.Q_EnchantmentTable.__name__ = "renderers.blocks.Q_EnchantmentTable"
renderers.blocks.Q_EnchantmentTable.__super__ = renderers.Q_Base
renderers.blocks.Q_EnchantmentTable.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        var b = Textures.getTexture("enchantment_table", "book_4");
        this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x, this.destination.y - .625, 0), new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1, 1));
    },
    __class__: renderers.blocks.Q_EnchantmentTable
})