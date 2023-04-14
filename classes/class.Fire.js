const { Pokemon } = require('.');

module.exports = class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.type = 'fire';
  }
};
