window.icegear = {}

const listeners = {
    projectileBlockCollision: [],
    projectileEntityCollision: [],
    dispenseItem: [],
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

class DispenserEvent {
    constructor(type, block, itemArray, slotIndex) {
        this.type = type;
        this.block = block;
        this.itemArray = itemArray;
        this.slotIndex = slotIndex;
        this.canceled = false;
        emit(this);
    }
}