lemongine.shader.BasicColor = function () {}
m["lemongine.shader.BasicColor"] = lemongine.shader.BasicColor
lemongine.shader.BasicColor.__name__ = "lemongine.shader.BasicColor"
lemongine.shader.BasicColor.getShader = function () {
    null == lemongine.shader.BasicColor.shader && (lemongine.shader.BasicColor.shader = new lemongine.ShaderProgram("lemongine.shader.BasicColor", lemongine.shader.BasicColor.getFragmentShader(), lemongine.shader.BasicColor.getVertexShader()), lemongine.shader.BasicColor.shader.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix"), lemongine.shader.BasicColor.shader.setUniform("color", [1, 1, 1, 1], "float4"));
    return lemongine.shader.BasicColor.shader;
}
lemongine.shader.BasicColor.setupEntity = function (b, a) {
    null == a ? b.setUniform("color", [1, 1, 1, 1]) : b.setUniform("color", [G.toFloat(a.r) / G.toFloat(255), G.toFloat(a.g) / G.toFloat(255), G.toFloat(a.b) / G.toFloat(255), G.toFloat(a.a) / G.toFloat(255)]);
}
lemongine.shader.BasicColor.getFragmentShader = function () {
    return "precision mediump float;\r\n\t\t\tuniform vec4 color;\r\n\t\t\t\r\n\t\t\tvoid main() {\r\n\t\t\t\tgl_FragColor = vec4(color);\r\n\t\t\t}\r\n\t\t\t";
}
lemongine.shader.BasicColor.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}