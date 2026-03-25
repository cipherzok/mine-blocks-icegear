screens.MenuChicken = function (b) {
    this.lastEgg = -1;
    this.eatTimer = this.jumpTimer = 0;
    this.golden = !1;
    this.target = this.movementTimer = this.seedsEaten = this.layTimer = 0;
    this.headFlipped = !1;
    this.direction = !0;
    this.animation = this.animationTick = 0;
    this.size = 1.3;
    this.clickOffset = new lemongine.Point();
    this.dragging = !1;
    this.speed = new lemongine.Point();
    this.position = new lemongine.Point();
    this.id = 0;
    this.position.set(b.x, b.y);
    this.speed.set(0, -8);
    this.movementTimer = Math.floor((10 * Math.random() + 3) * Main.Instance.get_fps());
    this.setLayTimer();
    this.target = -1;
    new particles.Particle_SS_Mining(this.position.x, this.position.y);
    new particles.Particle_SS_Mining(this.position.x, this.position.y);
    new particles.Particle_SS_Mining(this.position.x, this.position.y);
    new particles.Particle_SS_Mining(this.position.x, this.position.y);
    new particles.Particle_SS_Mining(this.position.x, this.position.y);
    new particles.Particle_SS_Mining(this.position.x, this.position.y);
    this.id = screens.MenuChicken.chickenNum++;
}
m["screens.MenuChicken"] = screens.MenuChicken
screens.MenuChicken.__name__ = "screens.MenuChicken"
screens.MenuChicken.prototype = {
    setLayTimer: function () {
        this.layTimer = Math.floor((30 * Math.random() + 15) * Main.Instance.get_fps());
    },
    makeSound: function () {
        Main.Instance.MUTED || (screens.MenuChicken.soundCarousel = ++screens.MenuChicken.soundCarousel % 5, lemongine.AssetManager.getSound(["chicken1", "chicken2", "chicken3"][Math.floor(3 * Math.random())] + "_" + screens.MenuChicken.soundCarousel).play(GlobalSave.soundVol / 100, this.position.x / Main.Instance.scene.get_width() - .5, 0, 0, 1, !0, 1.5 - this.size / 4 + .1 * (Math.random() - .5)));
    },
    __class__: screens.MenuChicken
}
screens.MenuChicken.chickenNum = 0
screens.MenuChicken.soundCarousel = 0