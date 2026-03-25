haxe.http.HttpBase = function (b) {
    this.url = b;
    this.headers = [];
    this.params = [];
    this.emptyOnData = F(this, this.onData);
}
m["haxe.http.HttpBase"] = haxe.http.HttpBase
haxe.http.HttpBase.__name__ = "haxe.http.HttpBase"
haxe.http.HttpBase.prototype = {
    setParameter: function (b, a) {
        for (var c = 0, d = this.params.length; c < d;) {
            var f = c++;
            if (this.params[f].name == b) {
                this.params[f] = {
                    name: b,
                    value: a
                };
                return;
            }
        }
        this.params.push({
            name: b,
            value: a
        });
    },
    addParameter: function (b, a) {
        this.params.push({
            name: b,
            value: a
        });
    },
    onData: function (b) {},
    onBytes: function (b) {},
    onError: function (b) {},
    onStatus: function (b) {},
    hasOnData: function () {
        return F(this, this.onData) != this.emptyOnData;
    },
    success: function (b) {
        this.responseBytes = b;
        this.responseAsString = null;
        if (this.hasOnData()) this.onData(this.get_responseData());
        this.onBytes(this.responseBytes);
    },
    get_responseData: function () {
        null == this.responseAsString && null != this.responseBytes && (this.responseAsString = this.responseBytes.getString(0, this.responseBytes.length, haxe.io.Encoding.UTF8));
        return this.responseAsString;
    },
    __class__: haxe.http.HttpBase
}