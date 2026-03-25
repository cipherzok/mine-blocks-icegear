lime.system.Sensor = function (b, a) {
    this.onUpdate = new lime.app._Event_Float_Float_Float_Void();
    this.type = b;
    this.id = a;
}
m["lime.system.Sensor"] = lime.system.Sensor
lime.system.Sensor.__name__ = "lime.system.Sensor"
lime.system.Sensor.registerSensor = function (b, a) {
    b = new lime.system.Sensor(b, a);
    lime.system.Sensor.sensors.push(b);
    return lime.system.Sensor.sensorByID.h[a] = b;
}
lime.system.Sensor.prototype = {
    __class__: lime.system.Sensor
}
lime.system.Sensor.sensorByID = new haxe.ds.IntMap()
lime.system.Sensor.sensors = []