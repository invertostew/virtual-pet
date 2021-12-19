'use strict';

const globalVariables = {
    minimumAge: 0,
    maximumAge: 30,
    minimumHunger: 0,
    maximumHunger: 10,
    minimumFitness: 0,
    maximumFitness: 10,
    fitnessThreshold: 3,
    hungerThreshold: 5,
    errorMessage: 'Your pet is no longer alive :('
}

class Pet {
    constructor(name) {
        this.name = name;
        this.age = globalVariables.minimumAge;
        this.hunger = globalVariables.minimumHunger;
        this.fitness = globalVariables.maximumFitness;
        this.children = [];
    }

    get isAlive() {
        return this.age < globalVariables.maximumAge && this.hunger < globalVariables.maximumHunger && this.fitness > globalVariables.minimumFitness;
    }

    growUp() {
        if (!this.isAlive) throw new Error(globalVariables.errorMessage);
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk() {
        if (!this.isAlive) throw new Error(globalVariables.errorMessage);
        this.fitness = Math.min(globalVariables.maximumFitness, this.fitness + 4);
    }

    feed() {
        if (!this.isAlive) throw new Error(globalVariables.errorMessage);
        this.hunger = Math.max(globalVariables.minimumHunger, this.hunger - 3);
    }

    checkUp() {
        if (!this.isAlive) return globalVariables.errorMessage;
        else if (this.hunger >= globalVariables.hungerThreshold && this.fitness <= globalVariables.fitnessThreshold) return 'I am hungry AND I need a walk';
        else if (this.fitness <= globalVariables.fitnessThreshold) return 'I need a walk';
        else if (this.hunger >= globalVariables.hungerThreshold) return 'I am hungry';
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
