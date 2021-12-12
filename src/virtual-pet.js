'use strict';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    this.fitness + 4 > 10 ? this.fitness = 10 : this.fitness += 4;
}

Pet.prototype.feed = function () {
    this.hunger - 3 < 0 ? this.hunger = 0 : this.hunger -= 3;
}

Pet.prototype.checkUp = function () {
    if (this.hunger >= 5 && this.fitness <= 3) return 'I am hungry AND I need a walk';
    else if (this.fitness <= 3) return 'I need a walk';
    else if (this.hunger >= 5) return 'I am hungry';
    return 'I feel great!';
}

// export Pet constructor for outside usage
module.exports = Pet;
