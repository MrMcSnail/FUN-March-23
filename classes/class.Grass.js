const { Pokemon } = require('.');

module.exports = class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.type = 'Grass';
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === 'Water';
  }
};
