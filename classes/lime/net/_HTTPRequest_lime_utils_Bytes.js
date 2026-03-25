lime.net._HTTPRequest_lime_utils_Bytes = function (b) {
    lime.net._HTTPRequest.AbstractHTTPRequest.call(this, b);
}
m["lime.net._HTTPRequest_lime_utils_Bytes"] = lime.net._HTTPRequest_lime_utils_Bytes
lime.net._HTTPRequest_lime_utils_Bytes.__name__ = "lime.net._HTTPRequest_lime_utils_Bytes"
lime.net._HTTPRequest_lime_utils_Bytes.__super__ = lime.net._HTTPRequest_Bytes
lime.net._HTTPRequest_lime_utils_Bytes.prototype = z(lime.net._HTTPRequest_Bytes.prototype, {
    fromBytes: function (b) {
        return vb.fromBytes(b);
    },
    __class__: lime.net._HTTPRequest_lime_utils_Bytes
})