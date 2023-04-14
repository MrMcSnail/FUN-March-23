const { Pokemon, Grass, Water } = require('../classes');

describe('classGrass()', () => {
  test('should extend Pokemon', () => {
    const grassPokemon = new Grass('Norman', 100, 13);

    expect(grassPokemon).toBeInstanceOf(Grass);
    expect(grassPokemon).toBeInstanceOf(Pokemon);
  });
  describe('should have the following properties', () => {
    describe('.type -->', () => {
      test('String: `Grass`', () => {
        const grassPokemon = new Grass('Norman', 100, 13);

        expect(grassPokemon.type).toBe('Grass');
      });
    });
    describe('should have the following methods', () => {
      describe('isEffectiveAgainst()', () => {
        test('should return true when passed a Water Pokemon', () => {
          const grassPokemon = new Grass('bob', 20, 0);
          const waterPokemon = new Water('blob', 100, 30);

          expect(grassPokemon.isEffectiveAgainst(waterPokemon)).toBe(true);
        });
      });
    });
  });
});
