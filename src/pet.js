'use strict';

const settings = {
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
        this.age = settings.minimumAge;
        this.hunger = settings.minimumHunger;
        this.fitness = settings.maximumFitness;
        this.children = [];
    }

    get isAlive() {
        return this.age < settings.maximumAge
        && this.hunger < settings.maximumHunger
        && this.fitness > settings.minimumFitness;
    }

    growUp() {
        if (!this.isAlive) throw new Error(settings.errorMessage);
        
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk() {
        if (!this.isAlive) throw new Error(settings.errorMessage);

        this.fitness = Math.min(settings.maximumFitness, this.fitness + 4);
    }

    feed() {
        if (!this.isAlive) throw new Error(settings.errorMessage);

        this.hunger = Math.max(settings.minimumHunger, this.hunger - 3);
    }

    checkUp() {
        if (!this.isAlive) return settings.errorMessage;

        if (
            this.hunger >= settings.hungerThreshold
            && this.fitness <= settings.fitnessThreshold
        ) {
            return 'I am hungry AND I need a walk';
        }

        if (this.fitness <= settings.fitnessThreshold) {
            return 'I need a walk';
        }

        if (this.hunger >= settings.hungerThreshold) {
            return 'I am hungry';
        }

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
