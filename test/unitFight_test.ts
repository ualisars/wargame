import { expect, should, assert} from 'chai';
import {
  meeleAttack,
  calculateDamage
} from '../src/unit/unitFight';

let allyUnit = {
  name: 'allyUnit',
  health: 100,
  speed: 5,
  armour: 7,
  range: 3,
  meleeDamage: 10,
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
  meleeDamage: 6,
  discipline: 2,
  morale: 100,
  condition: 100
}

describe('Unit Fight Test', function() {
  describe('meeleAttack', function() {
    meeleAttack(allyUnit, computerUnit);
    let health = computerUnit.health;
    it('Health should be at least 92', function() {
      expect(health).to.be.least(92);
    });
    it('Health should be at most 96', function() {
      expect(health).to.be.most(96);
    });
  });
  describe('calculateDamage tests', function() {
    let initialDamage = 10;
    let units = [
      {health: 100, condition: 85},
      {health: 78, condition: 85},
      {health: 55, condition: 78},
      {health: 30, condition: 54},
      {health: 22, condition: 10},
    ]
    it('Damage should be 10', function() {
      let damage = calculateDamage(units[0], initialDamage);
      assert.equal(damage, 10);
    });
    it('Damage should be 9', function() {
      let damage = calculateDamage(units[1], initialDamage);
      assert.equal(damage, 9);
    });
    it('Damage should be 8', function() {
      let damage = calculateDamage(units[2], initialDamage);
      assert.equal(damage, 8);
    });
    it('Damage should be 7', function() {
      let damage = calculateDamage(units[3], initialDamage);
      assert.equal(damage, 7);
    });
    it('Damage should be 7', function() {
      let damage = calculateDamage(units[4], initialDamage);
      assert.equal(damage, 6);
    });
  });
});
