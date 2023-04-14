const { Pokemon } = require('.');

module.exports = class Normal extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = 'Normal';
  }
};
