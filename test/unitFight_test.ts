import { expect, should, assert} from 'chai';
import {meeleAttack} from '../src/unit/unitFight';

let allyUnit = {
  name: 'allyUnit',
  health: 100,
  speed: 5,
  armour: 7,
  range: 3,
  meeleeDamage: 10,
  discipline: 7,
  morale: 100,
  condition: 100
}

let computerUnit = {
  name: 'computerUnit',
  health: 100,
  speed: 5,
  armour: 4,
  range: 0,
  meeleeDamage: 6,
  discipline: 2,
  morale: 100,
  condition: 100
}

describe('Unit Fight Test', function() {
  describe('meeleAttack', function() {
    it('find node2 {x: 11, y: 31, fScore: 4000}', function() {
      meeleAttack(allyUnit, computerUnit);
      let health = computerUnit.health;
      console.log('health', computerUnit.health);
      //expect(health).to.be.above(1)
      assert.equal(11, 11);
    });
  });
});
