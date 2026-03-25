shader.GradientRadialMultiple = function () {}
m["shader.GradientRadialMultiple"] = shader.GradientRadialMultiple
shader.GradientRadialMultiple.__name__ = "shader.GradientRadialMultiple"
shader.GradientRadialMultiple.getShader = function () {
    null == shader.GradientRadialMultiple.shader && (shader.GradientRadialMultiple.shader = new lemongine.ShaderProgram("mineblocks.gradientradialmultiple", shader.GradientRadialMultiple.getFragmentShader(), shader.GradientRadialMultiple.getVertexShader()), shader.GradientRadialMultiple.shader.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix", "uv"), shader.GradientRadialMultiple.shader.setAttrib("colori", "float", 4), shader.GradientRadialMultiple.shader.setAttrib("coloro", "float", 4), shader.GradientRadialMultiple.shader.setAttrib("position", "float", 4));
    return shader.GradientRadialMultiple.shader;
}
shader.GradientRadialMultiple.getFragmentShader = function () {
    return "precision mediump float;\r\n\t\t\tvarying vec2 uvF;\r\n\t\t\tvarying vec4 coloriF;\r\n\t\t\tvarying vec4 coloroF;\r\n\t\t\tvarying vec4 positionF;\r\n\t\t\t\r\n\t\t\tvoid main() {\r\n\t\t\t\tfloat distToPosition = length(uvF-positionF.xy);\r\n\t\t\t\tfloat percent = clamp((distToPosition-positionF.z)/(positionF.w-positionF.z), 0.0, 1.0);\r\n\r\n\t\t\t\tgl_FragColor = vec4(coloriF*(1.0-percent) + coloroF*(percent));\r\n\t\t\t}\r\n\t\t\t";
}
shader.GradientRadialMultiple.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\r\n\t\t\tattribute vec2 uv;\r\n\t\t\tattribute vec4 colori;\r\n\t\t\tattribute vec4 coloro;\r\n\t\t\tattribute vec4 position;\r\n\r\n\t\t\tvarying vec2 uvF;\r\n\t\t\tvarying vec4 coloriF;\r\n\t\t\tvarying vec4 coloroF;\r\n\t\t\tvarying vec4 positionF;\r\n\t\t\t\r\n\t\t\tvoid main() {\r\n\r\n\t\t\t\tuvF = uv;\r\n\t\t\t\tcoloriF = colori;\r\n\t\t\t\tcoloroF = coloro;\r\n\t\t\t\tpositionF = position;\r\n\t\t\t\t\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}