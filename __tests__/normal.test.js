const { Pokemon, Normal } = require('../classes');

describe('class Normal()', () => {
  test('should extend Pokemon', () => {
    const normalPokemon = new Normal('Norman', 100, 13);

    expect(normalPokemon).toBeInstanceOf(Normal);
    expect(normalPokemon).toBeInstanceOf(Pokemon);
  });
  describe('should have the following properties', () => {
    describe('.type -->', () => {
      test('String: `Normal`', () => {
        const normalPokemon = new Normal('Norman', 100, 13);
        console.log('normalPokemon: ', normalPokemon);
        expect(normalPokemon.type).toBe('Normal');
      });
    });
  });
});
