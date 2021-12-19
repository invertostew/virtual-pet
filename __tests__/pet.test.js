'use strict';

const {
    Pet,
    BabyPet
} = require('../src/pet.js');

const ERROR_MESSAGE = 'Your pet is no longer alive :(';

let fido, bronson;
beforeEach(() => {
    fido = new Pet('Fido');
    bronson = new Pet('Bronson');
});

describe('Pet', () => {
    test('Returns an instance of Pet', () => {
        expect(fido).toBeInstanceOf(Pet);
    });
    test('Returns the pets name', () => {
        expect(fido.name).toBe('Fido');
        expect(bronson.name).toBe('Bronson');
    });
    test('Pet should have an empty children array', () => {
        expect(Array.isArray(fido.children)).toBe(true);
        expect(fido.children).toEqual([]);
    });
    test('Pet should be able to have children', () => {
        fido.haveBaby('Fido Jr');
        expect(fido.children).toEqual([
            {
                name: 'Fido Jr',
                age: 0,
                hunger: 0,
                fitness: 10,
                children: [],
                parent: fido
            }
        ]);
    });
});

describe('growUp', () => {
    test('Returns the initial age (should be 0)', () => {
        expect(fido.age).toBe(0);
        expect(bronson.age).toBe(0);
    });
    test('growUp increases the age property by 1', () => {
        expect(fido.age).toBe(0);
        fido.growUp();
        expect(fido.age).toBe(1);
        fido.growUp();
        expect(fido.age).toBe(2);
    });
    test('Returns the initial hunger (should be 0)', () => {
        expect(fido.hunger).toBe(0);
        expect(bronson.hunger).toBe(0);
    });
    test('growUp increases the hunger property by 5', () => {
        expect(fido.hunger).toBe(0);
        fido.growUp();
        expect(fido.hunger).toBe(5);
        fido.growUp();
        expect(fido.hunger).toBe(10);
    });
    test('Returns the initial fitness (should be 10)', () => {
        expect(fido.fitness).toBe(10);
        expect(bronson.fitness).toBe(10);
    });
    test('growUp decreases the fitness property by 3', () => {
        expect(fido.fitness).toBe(10);
        fido.growUp();
        expect(fido.fitness).toBe(7);
        fido.growUp();
        expect(fido.fitness).toBe(4);
    });
    test(`growUp should throw error: "${ERROR_MESSAGE}"`, () => {
        fido.age = 30;
        expect(fido.isAlive).toBe(false);
        expect(() => {
            fido.growUp();
        }).toThrowError(new Error(ERROR_MESSAGE));
    });
});

describe('walk', () => {
    test('fitness property can not go above 10', () => {
        expect(fido.fitness).toBe(10);
        fido.walk();
        expect(fido.fitness).toBe(10);

        bronson.fitness = 9;
        bronson.walk();
        expect(bronson.fitness).toBe(10);
    });
    test('walk increases the fitness property by 4', () => {
        fido.fitness = 5;
        fido.walk();
        expect(fido.fitness).toBe(9);

        bronson.fitness = 2;
        bronson.walk();
        expect(bronson.fitness).toBe(6);
    });
    test(`walk should throw error: "${ERROR_MESSAGE}"`, () => {
        fido.age = 30;
        expect(fido.isAlive).toBe(false);
        expect(() => {
            fido.walk();
        }).toThrowError(new Error(ERROR_MESSAGE));
    });
});

describe('feed', () => {
    test('hunger property can not go below 0', () => {
        fido.hunger = 2;
        fido.feed();
        expect(fido.hunger).toBe(0);
    });
    test('feed decreases the hunger property by 3', () => {
        bronson.hunger = 5;
        bronson.feed();
        expect(bronson.hunger).toBe(2);
        bronson.hunger = 7;
        bronson.feed();
        expect(bronson.hunger).toBe(4);
    });
    test(`feed should throw error: "${ERROR_MESSAGE}"`, () => {
        fido.age = 30;
        expect(fido.isAlive).toBe(false);
        expect(() => {
            fido.feed();
        }).toThrowError(new Error(ERROR_MESSAGE));
    });
});

describe('checkUp', () => {
    test('Return "I need a walk" if fitness is 3 or less', () => {
        fido.fitness = 3;
        expect(fido.checkUp()).toEqual('I need a walk');
    });
    test('Return "I am hungry" if hunger is 5 or more', () => {
        fido.hunger = 5;
        expect(fido.checkUp()).toEqual('I am hungry');
    });
    test('Return "I am hungry AND I need a walk" if hunger is 5 or more AND fitness is 3 or less', () => {
        fido.fitness = 3;
        fido.hunger = 5;
        expect(fido.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    test('Return "I feel great!" if none of the above are true', () => {
        expect(fido.checkUp()).toEqual('I feel great!');
    });
    test(`Return "${ERROR_MESSAGE}" if isAlive is false`, () => {
        fido.age = 30;
        expect(fido.checkUp()).toEqual(ERROR_MESSAGE);
    });
});

describe('isAlive', () => {
    test('Return false if fitness is 0 or less', () => {
        fido.fitness = 0;
        expect(fido.isAlive).toBe(false);
    });
    test('Return false if hunger is 10 or more', () => {
        fido.hunger = 10;
        expect(fido.isAlive).toBe(false);
    });
    test('Return false if age is 30 or more', () => {
        fido.age = 30;
        expect(fido.isAlive).toBe(false);
    });
    test('Return true if none of the above are true', () => {
        expect(fido.isAlive).toBe(true);
    });
});

describe('BabyPet', () => {
    beforeEach(() => {
        fido.haveBaby('Fido Jr');
        fido.haveBaby('Odif');
    });
    test('Returns an instance of BabyPet', () => {
        expect(fido.children[0]).toBeInstanceOf(BabyPet);
        expect(fido.children[1]).toBeInstanceOf(BabyPet);
    });
    test('Returns the baby pets name', () => {
        expect(fido.children[0].name).toBe('Fido Jr');
        expect(fido.children[1].name).toBe('Odif');
    });
});

describe('findParent', () => {
    beforeEach(() => {
        fido.haveBaby('Fido Jr');
        fido.haveBaby('Odif');
        bronson.haveBaby('Bronson Jr');
        bronson.haveBaby('Nosnorb');
    });
    test('BabyPet can find its parent', () => {
        expect(fido.children[0].findParent()).toEqual('My parent is Fido!');
        expect(fido.children[1].findParent()).toEqual('My parent is Fido!');
        expect(bronson.children[0].findParent()).toEqual('My parent is Bronson!');
        expect(bronson.children[1].findParent()).toEqual('My parent is Bronson!');
    });
});
