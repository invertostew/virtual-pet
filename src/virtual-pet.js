'use strict';

const MINIMUM_AGE = 0;
const MAXIMUM_AGE = 30;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_FITNESS = 10;
const FITNESS_THRESHOLD = 3;
const HUNGER_THRESHOLD = 5;
const ERROR_MESSAGE = 'Your pet is no longer alive :(';

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];

    Object.defineProperty(this, 'isAlive', {
        get: function () {
            return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
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
    this.fitness = Math.min(MAXIMUM_FITNESS, this.fitness + 4);
}

Pet.prototype.feed = function () {
    if (!this.isAlive) throw new Error(ERROR_MESSAGE);
    this.hunger = Math.max(MINIMUM_HUNGER, this.hunger - 3);
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) return ERROR_MESSAGE;
    else if (this.hunger >= HUNGER_THRESHOLD && this.fitness <= FITNESS_THRESHOLD) return 'I am hungry AND I need a walk';
    else if (this.fitness <= FITNESS_THRESHOLD) return 'I need a walk';
    else if (this.hunger >= HUNGER_THRESHOLD) return 'I am hungry';
    return 'I feel great!';
}

Pet.prototype.haveBaby = function (name) {
    const babyPet = new BabyPet(this, name);
    this.children.push(babyPet);
    return this.children.findIndex(baby => baby === babyPet);
}

function BabyPet(parent, name) {
    Pet.call(this, name);

    this.parent = parent;
}

BabyPet.prototype = Object.create(Pet.prototype);
BabyPet.prototype.constructor = BabyPet;

BabyPet.prototype.findParent = function () {
    return `My parent is ${this.parent.name}!`;
}

module.exports = {
    Pet,
    BabyPet
};
