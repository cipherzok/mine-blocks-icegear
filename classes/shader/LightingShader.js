shader.LightingShader = function () {}
m["shader.LightingShader"] = shader.LightingShader
shader.LightingShader.__name__ = "shader.LightingShader"
shader.LightingShader.getShader = function () {
    null == shader.LightingShader.shader && (shader.LightingShader.shader = new lemongine.ShaderProgram("mineblocks.lightingshader", shader.LightingShader.getFragmentShader(), shader.LightingShader.getVertexShader()), shader.LightingShader.shader.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix", "uvPosition"));
    return shader.LightingShader.shader;
}
shader.LightingShader.getFragmentShader = function () {
    return "precision mediump float;\r\n\t\t\tvarying vec2 uvPositionF;\r\n\t\t\tuniform sampler2D texture;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tvec4 src = texture2D(texture, uvPositionF.xy);\r\n\r\n\t\t\t\tgl_FragColor = vec4(.0, .0, .0, 1.0-src.r);\r\n\t\t\t}\r\n\t\t\t";
}
shader.LightingShader.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\tattribute vec2 uvPosition;\r\n\t\t\t\r\n\t\t\tvarying vec2 uvPositionF;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tuvPositionF = uvPosition;\r\n\t\t\t\t\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}