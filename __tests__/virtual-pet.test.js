// require Pet constructor function
const Pet = require('../src/virtual-pet.js');

let fido, bronson;
beforeEach(() => {
    fido = new Pet('Fido');
    bronson = new Pet('Bronson');
})

describe('Pet', () => {
    test('Returns an instance of Pet', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });
    test('Returns the pets name', () => {
        expect(fido.name).toBe('Fido');
        expect(bronson.name).toBe('Bronson');
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
});
