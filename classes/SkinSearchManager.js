var SkinSearchManager = function (b) {
    this.hasMorePages = this.loading = !0;
    this.search = "";
    this.category = "best";
    this.page = 1;
    this.currentResults = [];
    this.viewer = new SkinTextureManager(b);
};
m.SkinSearchManager = SkinSearchManager
SkinSearchManager.__name__ = "SkinSearchManager"
SkinSearchManager.prototype = {
    hasSkinAtIndex: function (b) {
        return null != this.currentResults[b];
    },
    getSkinPositionByIndex: function (b) {
        return this.viewer.getTextureSlot(Std.string(this.currentResults[b].id)).rect.get_position();
    },
    loadPublicSkins: function (b, a) {
        null == a && (a = !1);
        var c = this,
            d = new haxe.ds.StringMap();
        d.h.page = Std.string(this.page);
        d.h.type = Std.string(this.category);
        "search" == this.category && (d.h.key = this.search);
        if (a) switch (d.h.type = "search", d.h.page = "1", this.page = 0, this.category) {
        case "best":
            d.h.key = "best:true sort:random";
            break;
        case "featured":
            d.h.key = "featured:true sort:random";
            break;
        case "search":
            d.h.key += " sort:random";
            break;
        default:
            d.h.key = "sort:random";
        }
        this.hasMorePages = !1;
        this.loading = !0;
        lemongine.Web.send("https://mineblocks.com/1/scripts/getSkins", !1, d, function (a) {
            a = lemongine.Web.parseVariables(a);
            c.loading = !1;
            null == a.h.s ? null != b && b(!1) : (c.currentResults = [], null != a.h.id1 && c.currentResults.push({
                id: Std.parseInt(a.h.id1),
                name: a.h.n1,
                author: a.h.a1,
                dateString: Language.dateString(parseFloat(a.h.date1))
            }), null != a.h.id2 && c.currentResults.push({
                id: Std.parseInt(a.h.id2),
                name: a.h.n2,
                author: a.h.a2,
                dateString: Language.dateString(parseFloat(a.h.date2))
            }), null != a.h.id3 && c.currentResults.push({
                id: Std.parseInt(a.h.id3),
                name: a.h.n3,
                author: a.h.a3,
                dateString: Language.dateString(parseFloat(a.h.date3))
            }), null != a.h.id4 && c.currentResults.push({
                id: Std.parseInt(a.h.id4),
                name: a.h.n4,
                author: a.h.a4,
                dateString: Language.dateString(parseFloat(a.h.date4))
            }), null != a.h.id5 && (c.hasMorePages = !0), null != b && b(!0));
        }, function (a) {
            c.loading = !1;
            null != b && b(!1);
        });
    },
    __class__: SkinSearchManager
}