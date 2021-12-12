// require Pet constructor function
const Pet = require('../src/virtual-pet.js');

describe('Pet', () => {
    test('Returns an instance of Pet', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });
    test('Returns the pets name', () => {
        const fido = new Pet('Fido');
        expect(fido.name).toEqual('Fido');
    });
});
