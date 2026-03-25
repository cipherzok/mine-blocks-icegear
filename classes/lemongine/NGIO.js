lemongine.NGIO = function (b, a, c) {
    this.pingLoopStarted = !1;
    this.medalList = this.scoreboardList = null;
    this.isConnected = this.loggedIn = !1;
    var d = this;
    io.newgrounds.NGLite.create(b);
    io.newgrounds.NGLite.core.setupEncryption(a);
    this.ngio = io.newgrounds.NGLite.core.calls;
    b = window.document.location.href.split("?")[1];
    if (null != b) for (b = b.split("&"), a = 0; a < b.length;) {
        var f = b[a];
        ++a;
        if ("ngio_session_id" == f.split("=")[0]) {
            io.newgrounds.NGLite.core.set_sessionId(f.split("=")[1]);
            b = this.ngio.app.checkSession();
            b.addResponseHandler(function (a) {
                d.isConnected = !0;
                d.startPingLoop();
                d._session = a.result.data.session;
                null != d._session && null != d._session.user && (d.loggedIn = !0);
                null != c && c(d);
            });
            b.sendHelper();
            return;
        }
    }
    b = this.ngio.app.startSession(!0);
    b.addResponseHandler(function (a) {
        d.isConnected = !0;
        d.startPingLoop();
        d._session = a.result.data.session;
        null != d._session && null != d._session.user && (d.loggedIn = !0);
        null != c && c(d);
    });
    b.sendHelper();
}
m["lemongine.NGIO"] = lemongine.NGIO
lemongine.NGIO.__name__ = "lemongine.NGIO"
lemongine.NGIO.prototype = {
    get_user: function () {
        return null == this._session ? null : this._session.user;
    },
    listMedals: function (b) {
        var a = this;
        if (null != this.medalList) b(this.medalList);else {
            var c = this.ngio.medal.getList();
            c.addResponseHandler(function (c) {
                null != c.result && (a.medalList = c.result.data.medals, b(a.medalList));
            });
            c.sendHelper();
        }
    },
    unlockMedal: function (b, a) {
        var c = this;
        this.listMedals(function (d) {
            d = 0;
            for (var f = c.medalList; d < f.length;) {
                var g = f[d];
                ++d;
                if (g.name.toLowerCase() == b.toLowerCase() || g.id.toString() == b) {
                    g.unlocked || (d = c.ngio.medal.unlock(g.id), d.addSuccessHandler(function () {
                        null != a && a();
                    }), d.sendHelper());
                    return;
                }
            }
            haxe.Log.trace("Could not find medal '" + b + "'", {
                fileName: "lemongine/NGIO.hx",
                lineNumber: 110,
                className: "lemongine.NGIO",
                methodName: "unlockMedal"
            });
        });
    },
    listScoreboards: function (b) {
        var a = this;
        if (null != this.scoreboardList) b(this.scoreboardList);else {
            var c = this.ngio.scoreBoard.getBoards();
            c.addResponseHandler(function (c) {
                null != c.result && (a.scoreboardList = c.result.data.scoreboards, b(a.scoreboardList));
            });
            c.sendHelper();
        }
    },
    postScore: function (b, a, c, d) {
        var f = this;
        this.listScoreboards(function (g) {
            g = 0;
            for (var l = f.scoreboardList; g < l.length;) {
                var k = l[g];
                ++g;
                if (k.name.toLowerCase() == b.toLowerCase() || k.id.toString() == b) {
                    g = f.ngio.scoreBoard.postScore(k.id, a, c);
                    g.addSuccessHandler(function () {
                        null != d && d();
                    });
                    g.sendHelper();
                    return;
                }
            }
            haxe.Log.trace("Could not find scoreboard '" + b + "'", {
                fileName: "lemongine/NGIO.hx",
                lineNumber: 159,
                className: "lemongine.NGIO",
                methodName: "postScore"
            });
        });
    },
    startPingLoop: function () {
        this.pingLoopStarted || (this.pingLoopStarted = !0, this._pingLoop());
    },
    _pingLoop: function () {
        this.ngio.gateway.ping().sendHelper();
        haxe.Timer.delay(F(this, this._pingLoop), 3E5);
    },
    __class__: lemongine.NGIO
}