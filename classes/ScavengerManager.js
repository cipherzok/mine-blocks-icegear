var ScavengerManager = function () {};
m.ScavengerManager = ScavengerManager
ScavengerManager.__name__ = "ScavengerManager"
ScavengerManager.openSocket = function (b, a) {
    null == a && (a = !1);
    null != ScavengerManager.socket ? null != b && b() : (ScavengerManager.socketConnecting = !0, ScavengerManager.packetHandlers.h["0"] = ScavengerManager.packetFromServer_welcome, ScavengerManager.packetHandlers.h["1"] = ScavengerManager.packetFromServer_displayNameChanged, ScavengerManager.packetHandlers.h["2"] = ScavengerManager.packetFromServer_createParty, ScavengerManager.packetHandlers.h["3"] = ScavengerManager.packetFromServer_removePlayer, ScavengerManager.packetHandlers.h["4"] = ScavengerManager.packetFromServer_joinParty, ScavengerManager.packetHandlers.h["5"] = ScavengerManager.packetFromServer_heartbeat, ScavengerManager.packetHandlers.h["6"] = ScavengerManager.packetFromServer_restart, ScavengerManager.packetHandlers.h["7"] = ScavengerManager.packetFromServer_plusConnected, ScavengerManager.packetHandlers.h["8"] = ScavengerManager.packetFromServer_serverChatMessage, ScavengerManager.socket = haxe.net.WebSocket.create(ScavengerManager.WEBSOCKET_URI + (a ? "?rt=" + ScavengerManager.rejoinToken : "")), ScavengerManager.socket.onmessageString = function (a) {
        var b = HxOverrides.substr(a, 0, a.indexOf(";"));
        if (null != ScavengerManager.packetHandlers.h[b]) ScavengerManager.packetHandlers.h[b](HxOverrides.substr(a, a.indexOf(";") + 1, null));else haxe.Log.trace("Unknown packet: " + b, {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 133,
            className: "ScavengerManager",
            methodName: "openSocket"
        });
    }, ScavengerManager.socket.onopen = function () {
        ScavengerManager.socketConnecting = !1;
        haxe.Log.trace("Socket opened", {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 138,
            className: "ScavengerManager",
            methodName: "openSocket"
        });
        a ? Main.Instance.confirmationDialog.isOpenToDialog("serverRestarting") && Main.Instance.confirmationDialog.close() : ScavengerManager.initScavengerState();
        null != b && b();
    }, ScavengerManager.socket.onerror = function (b) {
        a ? haxe.Timer.delay(ScavengerManager.tryReconnect, 3E3) : (Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Connection Error", "There was an error connecting to the server." + ("" != ScavengerManager.serverWarning ? "\n\n" + ScavengerManager.serverWarning : "\n\nDouble check your connection to Mine Blocks, or adjust your firewall settings.") + "\n\n[URI: " + ScavengerManager.WEBSOCKET_URI + "]", "Okay")), ScavengerManager.closeSocketState());
    }, ScavengerManager.socket.onclose = function (a) {
        ScavengerManager.isRejoiningAfterRestart() ? (ScavengerManager.socketConnecting = !0, haxe.Log.trace("Socket closed, but reconnecting", {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 168,
            className: "ScavengerManager",
            methodName: "openSocket"
        })) : ScavengerManager.closeSocketState();
    });
}
ScavengerManager.get_socketConnected = function () {
    return null != ScavengerManager.socket ? ScavengerManager.socket.get_readyState() == haxe.net.ReadyState.Open : !1;
}
ScavengerManager.getScavengerServer = function (b, a) {
    var c = new haxe.ds.StringMap();
    c.h.v = "1.31.2";
    c.h.p = b;
    lemongine.Web.send("https://mineblocks.com/1/scripts/connectScavenger", !0, c, function (c) {
        if ("1" != HxOverrides.substr(c, 0, 1)) {
            if ("0" == HxOverrides.substr(c, 0, 1)) switch (HxOverrides.substr(c, 1, 1)) {
            case "1":
                c = "No server found that supports version 1.31.2. Please try a newer version of Mine Blocks.";
                break;
            case "2":
                c = "That party requires a newer version of Mine Blocks. Try playing on the same version as the host.";
                break;
            case "3":
                c = "That party requires an older version of Mine Blocks. Try playing on the same version as the host.";
                break;
            case "4":
                c = "No server found that supports version 1.31.2.";
                break;
            case "5":
                c = "Party code '" + b + "' not recognized.";
                break;
            case "6":
                c = "Sorry, Scavenger Hunt is under maintenance right now! Check the Mine Blocks Discord in case of any announcements.";
                break;
            case "7":
                c = HxOverrides.substr(c, 2, null);
                break;
            default:
                c = "Unknown error code:\n" + HxOverrides.substr(c, 1, null);
            } else c = "An unknown error occurred while matching you to a Scavenger Hunt server. Check your connection to the MineBlocks.com website.";
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Connection Error", c, "Okay"));
        } else ScavengerManager.WEBSOCKET_URI = lemongine.Web.parseVariables(HxOverrides.substr(c, 1, null)).h.s, "wss://" != HxOverrides.substr(ScavengerManager.WEBSOCKET_URI, 0, 6) && "ws://" != HxOverrides.substr(ScavengerManager.WEBSOCKET_URI, 0, 5) && (ScavengerManager.WEBSOCKET_URI = "wss://" + ScavengerManager.WEBSOCKET_URI), null != a && a();
    }, function (a) {
        Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Connection Error", "Double check your connection to the MineBlocks.com website, or adjust your firewall settings.", "Okay"));
    });
}
ScavengerManager.fetchPartyDeeplink = function () {
    ScavengerManager.chatDisabled = null != window.isChatEnabled ? window.isChatEnabled() : !1;
    var b = window.document.location.href.split("?")[1];
    if (null != b) {
        b = b.split("&");
        for (var a = 0; a < b.length;) {
            var c = b[a];
            ++a;
            if ("party" == c.split("=")[0]) {
                ScavengerManager.partyDeeplink = c.split("=")[1];
                if (7 == ScavengerManager.partyDeeplink.length) {
                    Game.deeplink = DEEPLINK.JOIN_PARTY;
                    return;
                }
                ScavengerManager.partyDeeplink = "";
                break;
            } else if ("instantJoin" == c.split("=")[0]) {
                Game.deeplink = DEEPLINK.CREATE_PARTY;
                return;
            }
        }
    }
    ScavengerManager.partyDeeplink = null != window.getInvite ? window.getInvite() : "";
    7 == ScavengerManager.partyDeeplink.length ? Game.deeplink = DEEPLINK.JOIN_PARTY : ScavengerManager.partyDeeplink = "";
}
ScavengerManager.copyPartyLinkCallback = function (b) {
    null == b && (b = "");
    "" == b && (b = "https://mineblocks.com/1/join/" + ScavengerManager.partyToken);
    lime.system.Clipboard.set_text("Let's play Mine Blocks Scavenger Hunt! Party code: " + ScavengerManager.partyToken + " \n" + b);
}
ScavengerManager.initScavengerState = function () {
    ScavengerManager.partyToken = "";
    ScavengerManager.rejoinToken = "";
    ScavengerManager.creatingParty = !1;
    ScavengerManager.isHost = !1;
    ScavengerManager.isSpectating = !1;
    ScavengerManager.members = [];
    ScavengerManager.userMember = null;
    ScavengerManager.initNewGame();
    ScavengerManager.resetMemberScores();
}
ScavengerManager.initNewGame = function () {
    ScavengerManager.items = [];
    ScavengerManager.alreadyAttemptedToCollect = new haxe.ds.StringMap();
}
ScavengerManager.resetMemberScores = function () {
    for (var b = 0, a = ScavengerManager.members.length; b < a;) {
        var c = b++,
            d = ScavengerManager.members[c];
        d.handItem = [];
        d.itemsFound = [];
        d.isItemFound = [];
        d.score = 0;
        d.setPlacement(c + 1, 1);
    }
}
ScavengerManager.sortMemberScores = function () {
    for (var b = [], a = 0, c = ScavengerManager.members; a < c.length;) b.push(c[a++]);
    b.sort(function (a, b) {
        return (b.isSpectator || !b.joinedGame ? -1 : b.score) - (a.isSpectator || !a.joinedGame ? -1 : a.score);
    });
    a = 0;
    for (c = b.length; a < c;) {
        var d = a++;
        b[d].setPlacement(d + 1, 1);
    }
}
ScavengerManager.closeSocket = function (b) {
    null == b && (b = !1);
    null != ScavengerManager.socket && (ScavengerManager.socket.close(), b ? ScavengerManager.socket = null : ScavengerManager.closeSocketState());
}
ScavengerManager.closeSocketState = function () {
    ScavengerManager.socket = null;
    ScavengerManager.socketConnecting = !1;
    ScavengerManager.leaveGame();
    haxe.Log.trace("Socket closed", {
        fileName: "src/ScavengerManager.hx",
        lineNumber: 332,
        className: "ScavengerManager",
        methodName: "closeSocketState"
    });
}
ScavengerManager.packetToServer_joinParty = function (b) {
    ScavengerManager.get_socketConnected() && (Console.clearAll(), ScavengerManager.socket.sendString("jp" + b + "," + ScavengerManager.username + "," + ScavengerManager.getBytesFromImage(SkinLoader.frames.skin)), ScavengerManager.packetToServer_connectPlus());
}
ScavengerManager.packetToServer_leaveParty = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("lp");
}
ScavengerManager.packetToServer_createParty = function () {
    ScavengerManager.get_socketConnected() && (ScavengerManager.creatingParty = !0, ScavengerManager.socket.sendString("cp" + ScavengerManager.username + "," + ScavengerManager.getBytesFromImage(SkinLoader.frames.skin)), ScavengerManager.packetToServer_connectPlus());
}
ScavengerManager.getBytesFromImage = function (b) {
    return haxe.crypto.Base64.encode(b.getPixels());
}
ScavengerManager.packetToServer_connectPlus = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("pc" + GlobalSave.plusAccessToken);
}
ScavengerManager.packetToServer_foundItem = function (b) {
    ScavengerManager.get_socketConnected() && (b = Std.string(b[0]) + ";" + (null == Game.makeDynamicMap(b[3]).h.type ? "" : Game.makeDynamicMap(b[3]).h.type), null == ScavengerManager.alreadyAttemptedToCollect.h[b] && (ScavengerManager.alreadyAttemptedToCollect.h[b] = !0, ScavengerManager.socket.sendString("fi" + b)));
}
ScavengerManager.packetToServer_sendChat = function (b, a) {
    ScavengerManager.get_socketConnected() && (null != a ? ScavengerManager.socket.sendString("sw" + a.id + ";" + b) : ScavengerManager.socket.sendString("sc" + b));
}
ScavengerManager.packetToServer_heartbeat = function (b, a, c, d, f, g, p, k, h, n, m, x) {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("hb" + Math.round(100 * b) / 100 + ";" + Math.round(100 * a) / 100 + ";" + Math.round(100 * c) / 100 + ";" + Math.round(100 * d) / 100 + ";" + f + ";" + g + ";" + p + ";" + (k ? "1" : "0") + ";" + (h ? "1" : "0") + ";" + n + ";" + m + ";" + x);
}
ScavengerManager.packetToServer_changeDisplayName = function (b, a) {
    null == a && (a = !1);
    ScavengerManager.get_socketConnected() && (GlobalSave.scavengerUsername = b, GlobalSave.save(), ScavengerManager.socket.sendString("cd" + b + (a ? "," + ScavengerManager.getBytesFromImage(SkinLoader.frames.skin) : "")));
}
ScavengerManager.packetToServer_playSolo = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("ps");
}
ScavengerManager.packetToServer_add30s = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("a3");
}
ScavengerManager.packetToServer_headSpin = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("hs");
}
ScavengerManager.packetToServer_joinLate = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("jl");
}
ScavengerManager.packetToServer_throwDirtBall = function (b, a) {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("db" + b + ";" + a);
}
ScavengerManager.packetToServer_destroyDirtBall = function (b, a) {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("dk" + b + ";" + (a ? 1 : 0));
}
ScavengerManager.packetToServer_changeHandItem = function (b) {
    if (ScavengerManager.get_socketConnected()) if (null == b) ScavengerManager.socket.sendString("ch");else {
        if ("" == b[2] || null == b[2]) b[2] = 0;
        b = '["' + Std.string(b[0]) + '",' + Std.string(b[1]) + "," + Std.string(b[2]) + "," + JSON.stringify(lemongine.Helpers.objectifyObjectsInMap(b[3])) + "]";
        ScavengerManager.socket.sendString("ch" + b);
    }
}
ScavengerManager.packetToServer_kickMember = function (b) {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("km" + b.id);
}
ScavengerManager.packetToServer_ping = function () {
    ScavengerManager.get_socketConnected() && ScavengerManager.socket.sendString("pg");
}
ScavengerManager.tryReconnect = function () {
    0 < ScavengerManager.rejoinAttempts-- ? (ScavengerManager.closeSocket(!0), ScavengerManager.openSocket(null, !0)) : (ScavengerManager.rejoinToken = "", ScavengerManager.closeSocket(), Main.Instance.confirmationDialog.isOpenToDialog("serverRestarting") && Main.Instance.confirmationDialog.close(), Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Reconnect", "Sorry, the server attempted to restart, but there was an error reconnecting to the server in time.\n\nPlease try again later.", "Okay")));
}
ScavengerManager.packetFromServer_restart = function (b) {
    b = b.split(";");
    "1" != b[0] ? ScavengerManager.socket.close() : (ScavengerManager.rejoinToken = b[1], ScavengerManager.rejoinTimestamp = new Date(), ScavengerManager.socket.close(), "" != b[4] && (ScavengerManager.WEBSOCKET_URI = b[3]), haxe.Timer.delay(ScavengerManager.tryReconnect, Math.floor(1E3 * parseFloat(b[2]))), ScavengerManager.rejoinAttempts = Math.floor((parseFloat(b[3]) - parseFloat(b[2]) - 1) / 3), Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Hold On", "The server is restarting. Attempting to automatically reconnect..."), "serverRestarting"));
}
ScavengerManager.packetFromServer_welcome = function (b) {
    "1" == HxOverrides.substr(b, 0, 1) ? ScavengerManager.userID = HxOverrides.substr(b, 1, null) : ("1" == HxOverrides.substr(b, 1, null) && Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Too Many Connections", "Sorry, the server has too many connections right now. Please try again later!")), haxe.Log.trace("Error joining: " + HxOverrides.substr(b, 1, null), {
        fileName: "src/ScavengerManager.hx",
        lineNumber: 519,
        className: "ScavengerManager",
        methodName: "packetFromServer_welcome"
    }));
}
ScavengerManager.packetFromServer_heartbeat = function (b) {
    try {
        var a = JSON.parse(b);
        for (b = 0; b < a.length;) {
            var c = a[b];
            ++b;
            switch (Std.string(Reflect.field(c, "p"))) {
            case "0":
                var d = Reflect.field(c, "m");
                if (d.id == ScavengerManager.userID) continue;
                var f = Scavenger_Member.fromPacket(d);
                ScavengerManager.addMember(f);
                Console.newLine(f.username + " joined the party!", 0, Colors.palette.greyB);
                break;
            case "1":
                1 == Reflect.field(c, "r") && (ScavengerManager.rejoinToken = "", ScavengerManager.rejoinTimestamp = null);
                0 < Reflect.field(c, "i") && (ScavengerManager.secondsForIntro = Reflect.field(c, "i"));
                -1E3 >= Reflect.field(c, "s") ? ScavengerManager.startTime = null : ScavengerManager.startTime = new Date(new Date().getTime() + 1E3 * -Reflect.field(c, "s"));
                -1E3 >= Reflect.field(c, "e") ? ScavengerManager.endTime = null : (ScavengerManager.endTime = new Date(new Date().getTime() + 1E3 * Reflect.field(c, "e")), ScavengerManager.secondsForGameplay = Math.round((ScavengerManager.getEndTime() - ScavengerManager.getStartTime() - 1E3 * ScavengerManager.secondsForIntro) / 1E3));
                break;
            case "10":
                ScavengerManager.getMember(Reflect.field(c, "m")).hasPlus = "1" == Reflect.field(c, "v");
                break;
            case "11":
                ScavengerManager.addMemberToGame(ScavengerManager.getMember(Reflect.field(c, "m")));
                break;
            case "12":
                if (!ScavengerManager.userMember.joinedGame) continue;
                var g = ScavengerManager.getMember(Reflect.field(c, "m")),
                    p = Reflect.field(c, "i"),
                    k = parseFloat(Reflect.field(c, "x")),
                    m = parseFloat(Reflect.field(c, "y")),
                    x = parseFloat(Reflect.field(c, "s")),
                    M = parseFloat(Reflect.field(c, "a"));
                null != Main.Instance.game && Main.Instance.game.throwDirtBall(p, k, m, x, M, g.id);
                break;
            case "13":
                if (!ScavengerManager.userMember.joinedGame) continue;
                null != Main.Instance.game && Main.Instance.game.removeDirtBall(Reflect.field(c, "i"), "1" == Reflect.field(c, "h"));
                break;
            case "14":
                var ka = parseFloat(Reflect.field(c, "s"));
                ScavengerManager.afkTimer = new Date(new Date().getTime() + 1E3 * ka);
                Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Still Here?", ScavengerManager.afkTimerMessage(), "I'm here!", function () {
                    return function () {
                        ScavengerManager.packetToServer_ping();
                    };
                }()), "afkWarning");
                break;
            case "2":
                "menu" != Main.Instance.frame && ScavengerManager.runExitGame(!1);
                ScavengerManager.initNewGame();
                0 == Reflect.field(c, "l") ? ScavengerManager.resetMemberScores() : ScavengerManager.sortMemberScores();
                var T = [Reflect.field(c, "s")],
                    t = Reflect.field(c, "i");
                ScavengerManager.items = [];
                for (var q = 0; q < t.length;) {
                    var C = t[q];
                    ++q;
                    null == C ? ScavengerManager.items.push(null) : ScavengerManager.items.push(ScavengerManager.packetItemToScavengerItem(C));
                }
                ScavengerManager.secondsFromEndToReveal = Reflect.field(c, "r");
                Main.Instance.fadeOut(.5, function (a) {
                    return function () {
                        Main.Instance.set_frame("game");
                        var b = new World();
                        Main.Instance.game = new Game(b, Main.Instance.scene, !0, a[0], !1, 0, !1, !1, !0);
                        lemongine.Audio.stopAll();
                        Main.Instance.fadeIn();
                    };
                }(T));
                break;
            case "3":
                if (ScavengerManager.userMember.joinedGame) {
                    var v = ["1" == Reflect.field(c, "a")],
                        r = [parseFloat(Reflect.field(c, "c"))];
                    Main.Instance.fadeOut(.5, function (a, b) {
                        return function () {
                            ScavengerManager.runExitGame(b[0], a[0]);
                        };
                    }(r, v));
                } else ScavengerManager.runExitGame(!1);
                break;
            case "4":
                if (!ScavengerManager.userMember.joinedGame) continue;
                var K = Reflect.field(c, "i");
                q = 0;
                for (var la = K.length; q < la;) {
                    var A = q++;
                    ScavengerManager.items[ScavengerManager.items.length - K.length + A] = ScavengerManager.packetItemToScavengerItem(K[A]);
                    ScavengerManager.items[ScavengerManager.items.length - K.length + A].spawnSparkles = !0;
                }
                null != Main.Instance.game && (Main.Instance.game.revealFinalItems(), Main.Instance.game.lastRightTooltipItemsShown = null);
                lemongine.AssetManager.getSound("scavengerReveal_" + (5 * Math.random() | 0)).play(.6 * GlobalSave.soundVol / 100);
                Console.newLine("The final items have been revealed!", 0, Colors.palette.greyB);
                break;
            case "5":
                var y = ScavengerManager.getMember(Reflect.field(c, "m")),
                    ja = y.addItemFromPacket(Reflect.field(c, "i"));
                if (ScavengerManager.userMember.joinedGame) {
                    null != Main.Instance.game && (Main.Instance.game.lastRightTooltipItemsShown = null);
                    null != y.latestItemForLeaderboard && (y.latestItemForLeaderboard.destroy(), y.latestItemForLeaderboard = null);
                    var G = ScavengerManager.items[ja.index];
                    null == G ? Console.newLine(y.username + " found a seeecret item for " + ja.score + " points!", 0, Colors.palette.greyB) : Console.newLine(y.username + " found " + Main.Instance.game.getItemName(Game.item(G.id, 1, 0, G.extras)) + " for " + ja.score + " points!", 0, Colors.palette.greyB);
                }
                q = 1;
                for (var H = 0, E = ScavengerManager.members; H < E.length;) {
                    var hc = E[H];
                    ++H;
                    hc != y && (hc.score >= y.score + ja.score ? ++q : hc.placement < y.placement && hc.setPlacement(hc.placement + 1, .1 * (hc.placement - y.placement)));
                }
                y.setPlacement(q, .05 * (q - y.placement));
                y.score += ja.score;
                break;
            case "6":
                if (!ScavengerManager.userMember.joinedGame) continue;
                var L = ScavengerManager.getMember(Reflect.field(c, "m")),
                    bc = Reflect.field(c, "h").split(";"),
                    O = L.mobData,
                    N = parseFloat(bc[0]);
                O.h.x = N;
                var fa = L.mobData,
                    P = parseFloat(bc[1]);
                fa.h.y = P;
                var u = L.mobData,
                    Y = parseFloat(bc[2]);
                u.h.xSpeed = Y;
                var S = L.mobData,
                    z = parseFloat(bc[3]);
                S.h.ySpeed = z;
                var F = L.mobData,
                    ea = parseFloat(bc[4]);
                F.h.characterCurrentFrame = ea;
                var Z = L.mobData,
                    ab = parseFloat(bc[5]);
                Z.h.characterFrameNumber = ab;
                var hd = L.mobData,
                    ba = parseFloat(bc[6]);
                hd.h.characterFrameTimer = ba;
                L.mobData.h.sneaking = "1" == bc[7];
                L.mobData.h.wasSprinting = "1" == bc[8];
                var U = L.mobData,
                    Ua = parseFloat(bc[9]);
                U.h.collideY = Ua;
                var da = L.mobData,
                    D = parseFloat(bc[10]);
                da.h.dimension = D;
                var hb = L.mobData,
                    ha = parseFloat(bc[11]);
                hb.h.dead = ha;
                L.mobData.h.lastTick = Main.Instance.tick;
                ScavengerManager.lastSeenSomeone = Main.Instance.tick;
                break;
            case "7":
                ScavengerManager.getMember(Reflect.field(c, "m")).headRotation = 0;
                break;
            case "8":
                if (ScavengerManager.chatDisabled) continue;
                var R = ScavengerManager.getMember(Reflect.field(c, "m")),
                    qa = Reflect.field(c, "d"),
                    ib = "1" == Reflect.field(c, "w");
                "game" != Main.Instance.frame && "chat" != Main.Instance.mainMenu.scavengerSelectedTab && Main.Instance.mainMenu.unreadChats++;
                ib ? R == ScavengerManager.userMember ? Console.newLine(R.username + " [to " + ScavengerManager.getMember(Reflect.field(c, "m2")).username + "]: " + qa, R.username.length + 2) : Console.newLine("[whisper] " + R.username + ": " + qa, R.username.length + 2) : Console.newLine(R.username + ": " + qa, R.username.length + 2);
                R != ScavengerManager.userMember && lemongine.AssetManager.getSound("scavengerChat_" + (5 * Math.random() | 0)).play(GlobalSave.soundVol / 100);
                break;
            case "9":
                if (!ScavengerManager.userMember.joinedGame) continue;
                var ca = ScavengerManager.getMember(Reflect.field(c, "m")),
                    wa = JSON.parse(Reflect.field(c, "i"));
                null != wa && null != wa[3] && (wa[3] = lemongine.Helpers.mappifyObjectsInMap(wa[3]));
                ca.handItem = wa;
                break;
            default:
                haxe.Log.trace("Unknown packet: " + Std.string(c), {
                    fileName: "src/ScavengerManager.hx",
                    lineNumber: 764,
                    className: "ScavengerManager",
                    methodName: "packetFromServer_heartbeat"
                });
            }
        }
    } catch (ej) {
        q = haxe.Exception.caught(ej), haxe.Log.trace("Error parsing heartbeat: " + Std.string(q), {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 768,
            className: "ScavengerManager",
            methodName: "packetFromServer_heartbeat"
        }), a = q.get_stack(), haxe.Log.trace("Stack: " + (null == a ? "null" : Yi.toString(a)), {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 769,
            className: "ScavengerManager",
            methodName: "packetFromServer_heartbeat"
        });
    }
}
ScavengerManager.timeWaitingToRejoin = function () {
    return ScavengerManager.isRejoiningAfterRestart() ? new Date().getTime() - ScavengerManager.rejoinTimestamp.getTime() : 0;
}
ScavengerManager.getStartTime = function () {
    return null == ScavengerManager.startTime ? -1 : ScavengerManager.startTime.getTime() + ScavengerManager.timeWaitingToRejoin();
}
ScavengerManager.getEndTime = function () {
    return null == ScavengerManager.endTime ? -1 : ScavengerManager.endTime.getTime() + ScavengerManager.timeWaitingToRejoin();
}
ScavengerManager.isRejoiningAfterRestart = function () {
    return "" != ScavengerManager.rejoinToken;
}
ScavengerManager.handleWhisper = function (b) {
    b = lemongine.Helpers.trim(b);
    "@" == HxOverrides.substr(b, 0, 1) && (b = HxOverrides.substr(b, 1, null));
    for (var a = null, c = 0, d = ScavengerManager.members; c < d.length;) {
        var f = d[c];
        ++c;
        (null == a || f.username.toLowerCase().length > a.username.length) && 0 == b.toLowerCase().indexOf(f.username.toLowerCase() + " ") && (a = f);
    }
    if (null == a) return Console.newLine("[INFO] Whisper not sent. Double check you spelled their name right.", 0, Colors.palette.greyB), !1;
    ScavengerManager.packetToServer_sendChat(lemongine.Helpers.trim(HxOverrides.substr(b, a.username.length, null)), a);
    return !0;
}
ScavengerManager.runExitGame = function (b, a) {
    null == a && (a = 1);
    if (null != ScavengerManager.userMember && ScavengerManager.userMember.joinedGame) {
        b && ScavengerManager.doAdIfCan(Math.random() < a);
        b = [];
        a = 0;
        for (T = ScavengerManager.members; a < T.length;) {
            var c = T[a];
            ++a;
            if (c.isSpectator || !c.joinedGame) break;
            for (var d = c.username, f = c.id, g = c.score, p = c.placement, k = c.isItemFound, h = Array(k.length), m = 0, M = k.length; m < M;) {
                var x = m++;
                h[x] = null != k[x];
            }
            b.push(new Scavenger_CompleteLeaderboard_Entry(d, f, g, p, h, c.mobHeadRect, c.hasPlus));
            c == ScavengerManager.userMember && null != Main.Instance.API && Main.Instance.API.postScore("Scavenger Hunt", c.score);
        }
        a = 0;
        for (T = ScavengerManager.members; a < T.length;) T[a++].joinedGame = !0;
        b.sort(function (a, b) {
            return a.placement - b.placement;
        });
        c = [];
        a = 0;
        for (T = ScavengerManager.items; a < T.length;) d = T[a], ++a, null != d && c.push(new Scavenger_Item(d.id, null == d.extras.h.type ? "" : d.extras.h.type));
        for (ScavengerManager.completeLeaderboards.unshift(new Scavenger_CompleteLeaderboard(ScavengerManager.startTime, ScavengerManager.endTime, c, b)); 10 < ScavengerManager.completeLeaderboards.length;) ScavengerManager.completeLeaderboards.pop();
        Main.Instance.mainMenu.set_scavengerSelectedTab("leaderboard");
        Main.Instance.mainMenu.setLookingAtLeaderboard(0);
    } else {
        a = 0;
        for (var T = ScavengerManager.members; a < T.length;) T[a++].joinedGame = !0;
    }
    for (b = 0; b < ScavengerManager.members.length;) ScavengerManager.members[b].removeOnGameOver ? ScavengerManager.members.splice(b, 1) : ++b;
    Main.Instance.set_frame("menu");
    lemongine.Audio.stopAll();
    Main.Instance.fadeIn();
}
ScavengerManager.packetFromServer_joinParty = function (b) {
    if ("1" == HxOverrides.substr(b, 0, 1)) {
        if (1 == b.length) null != ScavengerManager.joinPartyCallback && ScavengerManager.joinPartyCallback();else try {
            var a = JSON.parse(HxOverrides.substr(b, 1, null));
            ScavengerManager.partyToken = a.t;
            ScavengerManager.host = a.h;
            ScavengerManager.isSpectating = 1 == a.sp;
            ScavengerManager.startTime = -1E3 >= a.s ? null : new Date(new Date().getTime() + 1E3 * -a.s);
            -1E3 >= a.e ? ScavengerManager.endTime = null : (ScavengerManager.endTime = new Date(new Date().getTime() + 1E3 * a.e), ScavengerManager.secondsForGameplay = Math.round((ScavengerManager.getEndTime() - ScavengerManager.getStartTime() - 1E3 * ScavengerManager.secondsForIntro) / 1E3));
            0 < a.i && (ScavengerManager.secondsForIntro = a.i);
            b = 0;
            for (var c = a.m.length; b < c;) ScavengerManager.addMember(Scavenger_Member.fromPacket(a.m[b++]));
            ScavengerManager.isHost = !1;
            Console.newLine(ScavengerManager.userMember.username + " joined the party!", 0, Colors.palette.greyB);
            0 >= ScavengerManager.getSecondsUntilStartTime() && 60 < ScavengerManager.getSecondsUntilEndTime() && Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Wanna Hop In?", ScavengerManager.joinLateConfirmationMessage(), "Let me in!", function () {
                ScavengerManager.packetToServer_joinLate();
            }, "Close"), "joinLateConfirmation");
            null != ScavengerManager.joinPartyCallback && ScavengerManager.joinPartyCallback();
        } catch (d) {
            haxe.Log.trace("Error parsing join party packet: " + Std.string(haxe.Exception.caught(d)), {
                fileName: "src/ScavengerManager.hx",
                lineNumber: 918,
                className: "ScavengerManager",
                methodName: "packetFromServer_joinParty"
            });
        }
    } else "022" == b ? Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Late to the Party", "The invite code you entered didn't match an active party. Maybe there was a typo?", "Okay")) : "023" == b ? Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Join Rejected", "Sorry, you're not able to enter this party.", "Okay")) : "024" == b && Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Full Party", "Sorry, this party already reached full capacity. Wait for someone to drop out, or try making a new party in the meantime.", "Okay")), haxe.Log.trace("Error joining party: " + b, {
        fileName: "src/ScavengerManager.hx",
        lineNumber: 940,
        className: "ScavengerManager",
        methodName: "packetFromServer_joinParty"
    });
}
ScavengerManager.joinLateConfirmationMessage = function () {
    return "You missed the start of the game, but you can still join if you want!\n\nThere's " + Language.shortCountdownString(Math.ceil(ScavengerManager.getSecondsUntilEndTime())) + " remaining on the timer.";
}
ScavengerManager.afkTimerMessage = function () {
    var b = Math.ceil(Math.max(0, ScavengerManager.afkTimer.getTime() / 1E3 - new Date().getTime() / 1E3));
    return "Please confirm you're still playing.\n\nClosing lobby in " + b + " second" + (1 == b ? "" : "s") + ".";
}
ScavengerManager.leaveGame = function () {
    ScavengerManager.initScavengerState();
    Main.Instance.set_frame("menu");
    Main.Instance.mainMenu.gotoScavengerFrame(screens.ScavengerFrames.LOBBY);
    ScavengerManager.partyToken = "";
    null != window.hideInvite && window.hideInvite();
}
ScavengerManager.packetFromServer_removePlayer = function (b) {
    if (b == ScavengerManager.userID) ScavengerManager.leaveGame();else for (var a = 0, c = ScavengerManager.members.length; a < c;) {
        var d = a++;
        if (ScavengerManager.members[d].id == b) {
            Console.newLine(ScavengerManager.members[d].username + " left the party.", 0, Colors.palette.greyB);
            "menu" == Main.Instance.frame ? ScavengerManager.members.splice(d, 1) : ScavengerManager.members[d].removeOnGameOver = !0;
            break;
        }
    }
}
ScavengerManager.packetFromServer_createParty = function (b) {
    ScavengerManager.creatingParty = !1;
    if ("1" == HxOverrides.substr(b, 0, 1)) try {
        var a = JSON.parse(HxOverrides.substr(b, 1, null));
        ScavengerManager.partyToken = a.t;
        ScavengerManager.host = a.h;
        ScavengerManager.startTime = null;
        ScavengerManager.endTime = null;
        b = 0;
        for (var c = a.m.length; b < c;) {
            var d = b++;
            ScavengerManager.addMember(new Scavenger_Member(a.m[d].id, a.m[d].n, !1, a.m[d].s, 1 == a.m[d].p));
        }
        ScavengerManager.isHost = !0;
        Console.newLine(ScavengerManager.userMember.username + " joined the party!", 0, Colors.palette.greyB);
        Main.Instance.mainMenu.gotoScavengerFrame(screens.ScavengerFrames.LOBBY);
        Main.Instance.mainMenu.set_scavengerSelectedTab("players");
        null != window.showInvite && window.showInvite(ScavengerManager.partyToken);
    } catch (f) {
        haxe.Log.trace("Error parsing create party packet: " + Std.string(haxe.Exception.caught(f)), {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 1006,
            className: "ScavengerManager",
            methodName: "packetFromServer_createParty"
        });
    } else haxe.Log.trace("Error creating party: " + HxOverrides.substr(b, 1, null), {
        fileName: "src/ScavengerManager.hx",
        lineNumber: 1009,
        className: "ScavengerManager",
        methodName: "packetFromServer_createParty"
    });
}
ScavengerManager.packetFromServer_displayNameChanged = function (b) {
    if ("1" == HxOverrides.substr(b, 0, 1)) try {
        var a = JSON.parse(HxOverrides.substr(b, 1, null));
        null == a.m && (a.m = ScavengerManager.userID);
        var c = ScavengerManager.getMember(a.m);
        null != c && (c.username = a.u, null != a.s && c.updateSkin(a.s));
        a.m == ScavengerManager.userID && (ScavengerManager.username = a.u, null != Main.Instance.mainMenu.scavengerDisplayNameCallback && Main.Instance.mainMenu.scavengerDisplayNameCallback());
    } catch (d) {
        a = haxe.Exception.caught(d).unwrap(), haxe.Log.trace("Couldn't read new username (" + b + "):", {
            fileName: "src/ScavengerManager.hx",
            lineNumber: 1030,
            className: "ScavengerManager",
            methodName: "packetFromServer_displayNameChanged",
            customParams: [null == a ? "null" : Std.string(a)]
        });
    } else {
        switch (b) {
        case "020":
            Main.Instance.mainMenu.scavengerNameErrorMessage = "Couldn't connect.";
            break;
        case "030":
            Main.Instance.mainMenu.scavengerNameErrorMessage = "Name is too short.";
            break;
        case "031":
            Main.Instance.mainMenu.scavengerNameErrorMessage = "Name is too long.";
            break;
        case "032":
            Main.Instance.mainMenu.scavengerNameErrorMessage = "Name contains invalid characters.";
            break;
        case "033":
        case "034":
            Main.Instance.mainMenu.scavengerNameErrorMessage = "Name is unavailable.";
        }
        Main.Instance.mainMenu.gotoScavengerFrame(screens.ScavengerFrames.DISPLAY_NAME_CHANGE);
    }
}
ScavengerManager.packetFromServer_plusConnected = function (b) {
    "1" == HxOverrides.substr(b, 0, 1) ? null != ScavengerManager.userMember && (ScavengerManager.userMember.hasPlus = !0) : haxe.Log.trace("Couldn't connect to plus: " + HxOverrides.substr(b, 1, null), {
        fileName: "src/ScavengerManager.hx",
        lineNumber: 1052,
        className: "ScavengerManager",
        methodName: "packetFromServer_plusConnected"
    });
}
ScavengerManager.packetFromServer_serverChatMessage = function (b) {
    Console.newLine(b);
}
ScavengerManager.getHostMember = function () {
    for (var b = 0, a = ScavengerManager.members; b < a.length;) {
        var c = a[b];
        ++b;
        if (c.id == ScavengerManager.host) return c;
    }
    return null;
}
ScavengerManager.doAdIfCan = function (b) {
    null == b && (b = !1);
    if (!Plus.subscriptionActive) {
        var a = ScavengerManager.getHostMember();
        null != a && a.hasPlus || (b ? Main.Instance.adDialog.request() : InterstitialManager.run());
    }
}
ScavengerManager.addMember = function (b) {
    for (var a = 0, c = ScavengerManager.members; a < c.length;) if (c[a++].id == b.id) return;
    b.id == ScavengerManager.userID && (ScavengerManager.userMember = b);
    b.id == ScavengerManager.host ? ScavengerManager.members.unshift(b) : ScavengerManager.members.push(b);
    b.joinedGame && ScavengerManager.addMemberToGame(b);
}
ScavengerManager.addMemberToGame = function (b) {
    b.joinedGame = !0;
    for (var a = 0, c = ScavengerManager.members; a < c.length;) {
        var d = c[a];
        ++a;
        if (d != b && d.removeOnGameOver && d.username == b.username) {
            HxOverrides.remove(ScavengerManager.members, d);
            a = 0;
            for (c = ScavengerManager.members; a < c.length;) {
                var f = c[a];
                ++a;
                f.placement > d.placement && f.setPlacement(f.placement - 1, 0);
            }
            break;
        }
    }
    f = 1;
    a = 0;
    for (c = ScavengerManager.members; a < c.length;) d = c[a], ++a, d != b && (d.joinedGame ? f < d.placement && (f = d.placement) : d.setPlacement(d.placement + 1, 1));
    b.setPlacement(f + 1, 1);
    null != Main.Instance.game && Main.Instance.game.addScavengerMob(b);
}
ScavengerManager.getMember = function (b) {
    for (var a = 0, c = ScavengerManager.members.length; a < c;) {
        var d = a++;
        if (ScavengerManager.members[d].id == b) return ScavengerManager.members[d];
    }
    return null;
}
ScavengerManager.getSecondsUntilEndTime = function () {
    return (ScavengerManager.getEndTime() - new Date().getTime()) / 1E3;
}
ScavengerManager.getSecondsUntilStartTime = function () {
    return (ScavengerManager.getStartTime() - new Date().getTime()) / 1E3;
}
ScavengerManager.packetItemToScavengerItem = function (b) {
    return new Scavenger_Item(b.id, b.type, b.tt);
}
ScavengerManager.WEBSOCKET_URI = "wss://sh1.mineblocks.com:8080"
ScavengerManager.socketConnecting = !1
ScavengerManager.socketConnected = !1
ScavengerManager.packetHandlers = new haxe.ds.StringMap()
ScavengerManager.partyDeeplink = ""
ScavengerManager.serverWarning = ""
ScavengerManager.chatDisabled = !1
ScavengerManager.username = ""
ScavengerManager.userID = ""
ScavengerManager.secondsForIntro = 0
ScavengerManager.secondsForGameplay = 0
ScavengerManager.items = []
ScavengerManager.alreadyAttemptedToCollect = new haxe.ds.StringMap()
ScavengerManager.completeLeaderboards = []
ScavengerManager.members = []
ScavengerManager.partyToken = ""
ScavengerManager.host = ""
ScavengerManager.isHost = !1
ScavengerManager.isSpectating = !1
ScavengerManager.creatingParty = !1
ScavengerManager.rejoinToken = ""
ScavengerManager.rejoinAttempts = 0
ScavengerManager.lastSeenSomeone = 0
ScavengerManager.paymentLink1Month = ""
ScavengerManager.paymentLink12Months = ""
ScavengerManager.paymentPrice1Month = 0
ScavengerManager.paymentPrice12Months = 0