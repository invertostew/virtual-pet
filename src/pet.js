'use strict';

const app = {
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
        this.age = app.minimumAge;
        this.hunger = app.minimumHunger;
        this.fitness = app.maximumFitness;
        this.children = [];
    }

    get isAlive() {
        return this.age < app.maximumAge && this.hunger < app.maximumHunger && this.fitness > app.minimumFitness;
    }

    growUp() {
        if (!this.isAlive) throw new Error(app.errorMessage);
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk() {
        if (!this.isAlive) throw new Error(app.errorMessage);
        this.fitness = Math.min(app.maximumFitness, this.fitness + 4);
    }

    feed() {
        if (!this.isAlive) throw new Error(app.errorMessage);
        this.hunger = Math.max(app.minimumHunger, this.hunger - 3);
    }

    checkUp() {
        if (!this.isAlive) return app.errorMessage;
        else if (this.hunger >= app.hungerThreshold && this.fitness <= app.fitnessThreshold) return 'I am hungry AND I need a walk';
        else if (this.fitness <= app.fitnessThreshold) return 'I need a walk';
        else if (this.hunger >= app.hungerThreshold) return 'I am hungry';
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
