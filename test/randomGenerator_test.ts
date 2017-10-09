import { expect, should, assert} from 'chai';
import {randomizeMeleeDamage} from '../src/utils/randomGenerator';

describe('randomGenerator tests', function() {
  describe('meeleAttack', function() {
    let meeleAttack = 10;
    let randomAttack1 = randomizeMeleeDamage(meeleAttack);
    let randomAttack2 = randomizeMeleeDamage(meeleAttack);
    let randomAttack3 = randomizeMeleeDamage(meeleAttack);
    let randomAttack4 = randomizeMeleeDamage(meeleAttack);
    let randomAttack5 = randomizeMeleeDamage(meeleAttack);
    it('randomAttack should be more or equal than 8', function() {
      console.log('randomAttack', randomAttack1);
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
