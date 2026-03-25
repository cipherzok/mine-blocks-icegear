lemongine.shader.BasicVertexColor = function () {}
m["lemongine.shader.BasicVertexColor"] = lemongine.shader.BasicVertexColor
lemongine.shader.BasicVertexColor.__name__ = "lemongine.shader.BasicVertexColor"
lemongine.shader.BasicVertexColor.getShader = function () {
    null == lemongine.shader.BasicVertexColor.shader && (lemongine.shader.BasicVertexColor.shader = new lemongine.ShaderProgram("lemongine.shader.BasicVertexColor", lemongine.shader.BasicVertexColor.getFragmentShader(), lemongine.shader.BasicVertexColor.getVertexShader()), lemongine.shader.BasicVertexColor.shader.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix"), lemongine.shader.BasicVertexColor.shader.setAttrib("color", "float", 4));
    return lemongine.shader.BasicVertexColor.shader;
}
lemongine.shader.BasicVertexColor.getFragmentShader = function () {
    return "precision mediump float;\r\n\t\t\tvarying vec4 colorF;\r\n\t\t\t\r\n\t\t\tvoid main() {\r\n\t\t\t\tgl_FragColor = vec4(colorF);\r\n\t\t\t}\r\n\t\t\t";
}
lemongine.shader.BasicVertexColor.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\t\r\n\t\t\tattribute vec4 color;\r\n\t\t\tvarying vec4 colorF;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tcolorF = color;\r\n\t\t\t\t\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}