icegear.on("projectileBlockCollision", explodeArrow);
icegear.on("projectileEntityCollision", explodeArrow);

function explodeArrow(event) {
    const projectile = event.entity;
    if (projectile.entityType === "arrow") {
        icegear.game.interpretCommand(`/explode 5 ${projectile.data.h.x} ${-projectile.data.h.y}`)
        projectile.remove();
        event.canceled = true;
    }
}
