'use strict';

const ERROR_MESSAGE = 'Your pet is no longer alive :(';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;

    Object.defineProperty(this, 'isAlive', {
        get: function () {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
    });
}

Pet.prototype.growUp = function () {
    if (!this.isAlive) throw new Error(ERROR_MESSAGE);
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if (!this.isAlive) throw new Error(ERROR_MESSAGE);
    this.fitness + 4 > 10 ? this.fitness = 10 : this.fitness += 4;
}

Pet.prototype.feed = function () {
    if (!this.isAlive) throw new Error(ERROR_MESSAGE);
    this.hunger - 3 < 0 ? this.hunger = 0 : this.hunger -= 3;
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) return ERROR_MESSAGE;
    if (this.hunger >= 5 && this.fitness <= 3) return 'I am hungry AND I need a walk';
    else if (this.fitness <= 3) return 'I need a walk';
    else if (this.hunger >= 5) return 'I am hungry';
    return 'I feel great!';
}

// export Pet constructor for outside usage
module.exports = Pet;
