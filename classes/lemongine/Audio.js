lemongine.Audio = function () {}
m["lemongine.Audio"] = lemongine.Audio
lemongine.Audio.__name__ = "lemongine.Audio"
lemongine.Audio.stopAll = function (b) {
    if (null != b) switch (b._hx_index) {
    case 0:
        for (b = lemongine.Audio.sfxChannel.keys(); b.hasNext();) b.next().stop();
        break;
    case 1:
        for (b = lemongine.Audio.musicChannel.keys(); b.hasNext();) b.next().stop();
        break;
    case 2:
        for (b = lemongine.Audio.ambienceChannel.keys(); b.hasNext();) b.next().stop();
    } else {
        for (b = lemongine.Audio.musicChannel.keys(); b.hasNext();) b.next().stop();
        for (b = lemongine.Audio.ambienceChannel.keys(); b.hasNext();) b.next().stop();
        for (b = lemongine.Audio.sfxChannel.keys(); b.hasNext();) b.next().stop();
    }
}
lemongine.Audio.updateVolumes = function () {
    for (var b = lemongine.Audio.sfxChannel.keys(); b.hasNext();) {
        var a = b.next();
        a.set_volume(a.volume);
    }
    for (b = lemongine.Audio.musicChannel.keys(); b.hasNext();) a = b.next(), a.set_volume(a.volume);
    for (b = lemongine.Audio.ambienceChannel.keys(); b.hasNext();) a = b.next(), a.set_volume(a.volume);
}
lemongine.Audio.set_masterVolume = function (b) {
    if (b == lemongine.Audio.masterVolume) return b;
    lemongine.Audio.masterVolume = b;
    for (var a = lemongine.Audio.sfxChannel.keys(); a.hasNext();) {
        var c = a.next();
        c.set_volume(c.volume);
    }
    for (a = lemongine.Audio.musicChannel.keys(); a.hasNext();) c = a.next(), c.set_volume(c.volume);
    for (a = lemongine.Audio.ambienceChannel.keys(); a.hasNext();) c = a.next(), c.set_volume(c.volume);
    return b;
}
lemongine.Audio.set_musicVolume = function (b) {
    if (b == lemongine.Audio.musicVolume) return b;
    lemongine.Audio.musicVolume = b;
    for (var a = lemongine.Audio.musicChannel.keys(); a.hasNext();) {
        var c = a.next();
        c.set_volume(c.volume);
    }
    return b;
}
lemongine.Audio.sfxChannel = new haxe.ds.ObjectMap()
lemongine.Audio.musicChannel = new haxe.ds.ObjectMap()
lemongine.Audio.ambienceChannel = new haxe.ds.ObjectMap()
lemongine.Audio.masterVolume = 1
lemongine.Audio.sfxVolume = 1
lemongine.Audio.musicVolume = 1
lemongine.Audio.ambienceVolume = 1