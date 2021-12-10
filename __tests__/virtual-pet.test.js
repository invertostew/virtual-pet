// require Pet constructor function
const Pet = require('../src/virtual-pet.js');

describe('Pet', () => {
    test('Returns an instance of Pet', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });
});
