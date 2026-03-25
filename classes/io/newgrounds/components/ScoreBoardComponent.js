io.newgrounds.components.ScoreBoardComponent = function (b) {
    this._core = b;
}
m["io.newgrounds.components.ScoreBoardComponent"] = io.newgrounds.components.ScoreBoardComponent
io.newgrounds.components.ScoreBoardComponent.__name__ = "io.newgrounds.components.ScoreBoardComponent"
io.newgrounds.components.ScoreBoardComponent.__super__ = io.newgrounds.components.Component
io.newgrounds.components.ScoreBoardComponent.prototype = z(io.newgrounds.components.Component.prototype, {
    getBoards: function () {
        return new io.newgrounds.Call(this._core, "ScoreBoard.getBoards");
    },
    postScore: function (b, a, c) {
        return new io.newgrounds.Call(this._core, "ScoreBoard.postScore", !0, !0).addComponentParameter("id", b).addComponentParameter("value", a).addComponentParameter("tag", c, null);
    },
    __class__: io.newgrounds.components.ScoreBoardComponent
})