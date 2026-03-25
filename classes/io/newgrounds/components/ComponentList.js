io.newgrounds.components.ComponentList = function (b) {
    this._core = b;
    this.app = new io.newgrounds.components.AppComponent(this._core);
    this.cloudSave = new io.newgrounds.components.CloudSaveComponent(this._core);
    this.event = new io.newgrounds.components.EventComponent(this._core);
    this.gateway = new io.newgrounds.components.GatewayComponent(this._core);
    this.loader = new io.newgrounds.components.LoaderComponent(this._core);
    this.medal = new io.newgrounds.components.MedalComponent(this._core);
    this.scoreBoard = new io.newgrounds.components.ScoreBoardComponent(this._core);
}
m["io.newgrounds.components.ComponentList"] = io.newgrounds.components.ComponentList
io.newgrounds.components.ComponentList.__name__ = "io.newgrounds.components.ComponentList"
io.newgrounds.components.ComponentList.prototype = {
    __class__: io.newgrounds.components.ComponentList
}