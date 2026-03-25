lemongine.shader.GradientRadial = function () {}
m["lemongine.shader.GradientRadial"] = lemongine.shader.GradientRadial
lemongine.shader.GradientRadial.__name__ = "lemongine.shader.GradientRadial"
lemongine.shader.GradientRadial.getShader = function () {
    null == lemongine.shader.GradientRadial.shader && (lemongine.shader.GradientRadial.shader = new lemongine.ShaderProgram("lemongine.shader.gradientradial", lemongine.shader.GradientRadial.getFragmentShader(), lemongine.shader.GradientRadial.getVertexShader()), lemongine.shader.GradientRadial.shader.setBuiltInBuffers("vertexPosition", "modelMatrix", "cameraMatrix", "projectionMatrix"), lemongine.shader.GradientRadial.shader.setUniform("colori", [0, 0, 0, 1], "float4"), lemongine.shader.GradientRadial.shader.setUniform("coloro", [0, 0, 0, 1], "float4"), lemongine.shader.GradientRadial.shader.setUniform("position", [.5, .5, 0, 1], "float4"), lemongine.shader.GradientRadial.shader.setAttrib("uv", "float", 2));
    return lemongine.shader.GradientRadial.shader;
}
lemongine.shader.GradientRadial.setupEntity = function (b, a, c, d, f) {
    null != c && b.setUniform("colori", c.toFloatArray());
    null != d && b.setUniform("coloro", d.toFloatArray());
    null != f && b.setUniform("position", [f.x, f.y, f.width, f.height]);
    null != a && b.setAttrib("uv", a);
}
lemongine.shader.GradientRadial.getFragmentShader = function () {
    return "precision mediump float;\r\n\t\t\tvarying vec2 uvF;\r\n\r\n\t\t\tuniform vec4 colori;\r\n\t\t\tuniform vec4 coloro;\r\n\t\t\tuniform vec4 position;\r\n\t\t\t\r\n\t\t\tvoid main() {\r\n\r\n\t\t\t\tfloat distToPosition = length(uvF-position.xy);\r\n\t\t\t\tfloat percent = clamp((distToPosition-position.z)/(position.w-position.z), 0.0, 1.0);\r\n\r\n\t\t\t\tgl_FragColor = vec4(colori*(1.0-percent) + coloro*(percent));\r\n\t\t\t}\r\n\t\t\t";
}
lemongine.shader.GradientRadial.getVertexShader = function () {
    return "precision highp float;\r\n\t\t\tattribute vec3 vertexPosition;\r\n\t\t\t\r\n\t\t\tattribute vec2 uv;\r\n\t\t\tvarying vec2 uvF;\r\n\t\t\t\r\n\t\t\tuniform mat4 projectionMatrix;\r\n\t\t\tuniform mat4 cameraMatrix;\r\n\t\t\tuniform mat4 modelMatrix;\r\n\t\t\t\r\n\t\t\tvoid main () {\r\n\t\t\t\tuvF = uv;\r\n\t\t\t\t\r\n\t\t\t\tgl_Position = projectionMatrix * cameraMatrix * modelMatrix * vec4(vertexPosition, 1.0);\r\n\t\t\t}\r\n\t\t\t";
}