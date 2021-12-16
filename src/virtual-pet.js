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

class Pet {
    constructor(name) {
        this.name = name;
        this.age = MINIMUM_AGE;
        this.hunger = MINIMUM_HUNGER;
        this.fitness = MAXIMUM_FITNESS;
        this.children = [];
    }

    get isAlive() {
        return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    }

    growUp() {
        if (!this.isAlive) throw new Error(ERROR_MESSAGE);
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk() {
        if (!this.isAlive) throw new Error(ERROR_MESSAGE);
        this.fitness = Math.min(MAXIMUM_FITNESS, this.fitness + 4);
    }

    feed() {
        if (!this.isAlive) throw new Error(ERROR_MESSAGE);
        this.hunger = Math.max(MINIMUM_HUNGER, this.hunger - 3);
    }

    checkUp() {
        if (!this.isAlive) return ERROR_MESSAGE;
        else if (this.hunger >= HUNGER_THRESHOLD && this.fitness <= FITNESS_THRESHOLD) return 'I am hungry AND I need a walk';
        else if (this.fitness <= FITNESS_THRESHOLD) return 'I need a walk';
        else if (this.hunger >= HUNGER_THRESHOLD) return 'I am hungry';
        return 'I feel great!';
    }

    haveBaby(name) {
        const babyPet = new BabyPet(this, name);
        this.children.push(babyPet);
    }
}

class BabyPet extends Pet {
    constructor(parent, name) {
        super(name);
        this.parent = parent;
    }

    findParent() {
        return `My parent is ${this.parent.name}!`;
    }
}

module.exports = {
    Pet,
    BabyPet
};
