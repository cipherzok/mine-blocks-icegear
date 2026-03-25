lemongine.Camera = function (b) {
    this.projectionMatrix = new lemongine.Matrix4();
    this.cameraType = lemongine.CameraType.PERSPECTIVE;
    this.aspect = this.orthographicScale = 1;
    this.fovAngle = 90;
    this.clipFar = 1E5;
    this.clipNear = .1;
    this.transform = new lemongine.Matrix4();
    this.rotation = new lemongine.Vector3(0, 0, 0);
    this.position = new lemongine.Vector3(0, 0, 0);
    switch (b._hx_index) {
    case 0:
        this.setPerspectiveMatrix();
        break;
    case 1:
        this.setOrthographicMatrix();
    }
}
m["lemongine.Camera"] = lemongine.Camera
lemongine.Camera.__name__ = "lemongine.Camera"
lemongine.Camera.prototype = {
    resize: function (b, a) {
        if (this.cameraType == lemongine.CameraType.PERSPECTIVE) this.aspect != b / a && (this.aspect = b / a, this.setPerspectiveMatrix(this.fovAngle));else if (this.aspect != b / a || this.orthographicScale != a) this.aspect = b / a, this.setOrthographicMatrix(a);
    },
    setPerspectiveMatrix: function (b) {
        null == b && (b = 90);
        this.fovAngle = b;
        this.cameraType = lemongine.CameraType.PERSPECTIVE;
        this.projectionMatrix.setPerspectiveMatrix(b, this.aspect, this.clipNear, this.clipFar);
    },
    setOrthographicMatrix: function (b) {
        null == b && (b = 1);
        this.cameraType = lemongine.CameraType.ORTHOGRAPHIC;
        this.orthographicScale = b;
        this.projectionMatrix.setOrthographicMatrix(b, this.aspect, this.clipNear, this.clipFar);
    },
    setPosition: function (b, a, c) {
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        this.position.set(b, a, c);
    },
    setRotation: function (b, a, c) {
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        this.rotation.set(b, a, c);
    },
    lookAt: function (b, a) {
        null == a && (a = 0);
        b = b.clone().subtract(this.position).normalize();
        this.rotation.x = Math.asin(-b.y);
        this.rotation.y = Math.atan2(b.x, -b.z);
        this.rotation.z = a;
    },
    updateTransform: function () {
        this.transform.reset().translate(-this.position.x, -this.position.y, -this.position.z).rotate(-this.rotation.y, new lemongine.Vector3(0, 1, 0)).rotate(-this.rotation.x, new lemongine.Vector3(1, 0, 0)).rotate(-this.rotation.z, new lemongine.Vector3(0, 0, 1));
    },
    getTransformValues: function () {
        this.updateTransform();
        return this.transform.values.slice();
    },
    __class__: lemongine.Camera
}