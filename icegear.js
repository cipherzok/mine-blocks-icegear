window.icegear = {}

const listeners = {
    projectileBlockCollision: [],
    projectileEntityCollision: []
}

icegear.on = function (type, listener) {
    listeners[type].push(listener);
}

function emit(event) {
    for (const listener of listeners[event.type]) {
        listener(event);
    }
}

class EntityEvent {
    constructor(type, entity) {
        this.type = type;
        this.entity = entity;
        this.canceled = false;
        emit(this);
    }
}