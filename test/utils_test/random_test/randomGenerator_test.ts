import {assert, expect} from 'chai';
import {randomizeMeleeDamage} from '../../../src/utils';

describe('randomUtils test', function() {
  describe('randomGenerator test', function() {
    let meleeAttack = 10;
    let randomAttack1 = randomizeMeleeDamage(meleeAttack);
    let randomAttack2 = randomizeMeleeDamage(meleeAttack);
    let randomAttack3 = randomizeMeleeDamage(meleeAttack);
    let randomAttack4 = randomizeMeleeDamage(meleeAttack);
    let randomAttack5 = randomizeMeleeDamage(meleeAttack);
    it('randomAttack should be more or equal than 8', function() {
      expect(randomAttack1).to.be.least(8);
      expect(randomAttack2).to.be.least(8);
      expect(randomAttack3).to.be.least(8);
      expect(randomAttack4).to.be.least(8);
      expect(randomAttack5).to.be.least(8);
    });
    it('randomAttack should be less or equal to 12', function() {
      expect(randomAttack1).to.be.at.most(12);
      expect(randomAttack2).to.be.at.most(12);
      expect(randomAttack3).to.be.at.most(12);
      expect(randomAttack4).to.be.at.most(12);
      expect(randomAttack5).to.be.at.most(12);
    });
  });
});
