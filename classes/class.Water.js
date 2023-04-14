const { Pokemon } = require('.');

module.exports = class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.type = 'Water';
  }
};
