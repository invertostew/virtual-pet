'use strict';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function () {
    this.age += 1;
}

// export Pet constructor for outside usage
module.exports = Pet;
