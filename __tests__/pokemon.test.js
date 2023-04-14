const { Pokemon } = require('../classes');

describe('class Pokemon()', () => {
  describe('should have the following properties:', () => {
    describe('.name -->', () => {
      test(`String: the name it's given, passed as the first argument to the constructor.`, () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        expect(testPokemon.name).toBe('Meowth');
      });
    });
    describe('.hitPoints -->', () => {
      test('Number: the amount of health the Pokemon has, represented as a number. Passed in as the second argument of the constructor.', () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        expect(testPokemon.hitPoints).toBe(25);
      });
    });
    describe('.attackDamage -->', () => {
      test('Number: the amount of damage a Pokemon can inflict. Passed as thrid argument of the constructor.', () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        expect(testPokemon.attackDamage).toBe(4);
      });
    });
    describe('.move -->', () => {
      test('String: the move the Pokemon does when battling, taken as an optional fourth argument to the constructor.', () => {
        const testPokemon = new Pokemon('Meowth', 25, 4, 'fake out');
        expect(testPokemon.move).toBe('fake out');
      });
      test('Defaults to `tackle`.', () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        expect(testPokemon.move).toBe('tackle');
      });
    });
  });
  describe('Should have the following methods:', () => {
    describe('.takeDamage()', () => {
      test('should will take a number and reduce its health by the number given', () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        testPokemon.takeDamage(5);
        expect(testPokemon.hitPoints).toEqual(20);
        testPokemon.takeDamage(5);
        expect(testPokemon.hitPoints).toEqual(15);
      });
    });
    describe('.useMove()', () => {
      test("should return the Pokemon's attackDamage", () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        const logSpy = jest.spyOn(console, 'log');
        expect(testPokemon.useMove()).toEqual(4);
        expect(logSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('.hasFainted()', () => {
      test("returns true when a Pokemon's health is reduced to 0, otherwise return false", () => {
        const testPokemon = new Pokemon('Meowth', 25, 4);
        expect(testPokemon.hasFainted()).toEqual(false);
        testPokemon.takeDamage(25);
        expect(testPokemon.hasFainted()).toEqual(true);
      });
    });
  });
});
