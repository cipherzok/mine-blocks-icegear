js.lib._ArrayBuffer.ArrayBufferCompat = function () {}
m["js.lib._ArrayBuffer.ArrayBufferCompat"] = js.lib._ArrayBuffer.ArrayBufferCompat
js.lib._ArrayBuffer.ArrayBufferCompat.__name__ = "js.lib._ArrayBuffer.ArrayBufferCompat"
js.lib._ArrayBuffer.ArrayBufferCompat.sliceImpl = function (b, a) {
    b = new Uint8Array(this, b, null == a ? null : a - b);
    a = new Uint8Array(b.byteLength);
    a.set(b);
    return a.buffer;
}