icegear.on("dispenseItem", function (event) {
    const id = event.itemArray[0];
    if (id === "cbook") {
        const extras = event.itemArray[3].h;
        if (extras.command) {
            icegear.game.interpretCommand(extras.command);
            if (extras.uses) {
                extras.uses--;
                if (extras.uses === 0) event.block.removeFromInventory(event.slotIndex);
            }
        }
        event.canceled = true;
    }
});

