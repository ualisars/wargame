import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {shuffleUnits} from '../../../../src/utils/unit/shuffle';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('unitShuffleUtils test', () => {

  describe('shuffleUnits test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;
    let unit5:Unit, unit6:Unit, unit7:Unit;
    let units:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Militia', 440, 160, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 400, 160, 5, 'computer');
      unit3 = createUnit('HeavyCavalry', 480, 200, 5, 'computer');
      unit4 = createUnit('Pikemen', 360, 120, 5, 'computer');
      unit5 = createUnit('Scouts', 440, 240, 5, 'computer');
      unit6 = createUnit('Militia', 440, 160, 5, 'computer');
      unit7 = createUnit('HeavyInfantry', 400, 160, 5, 'computer');

      units.push(unit1);
      units.push(unit2);
      units.push(unit3);
      units.push(unit4);
      units.push(unit5);
      units.push(unit6);
      units.push(unit7);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
      removeUnit(unit5);
      removeUnit(unit6);
      removeUnit(unit7);
    });

    it(`units should be shuffled and don't have randomValue`, () => {
      const shuffledUnits1:Unit[] = shuffleUnits(units);
      const shuffledUnits2:Unit[] = shuffleUnits(units);
      let pass:boolean = false;

      for(let i = 0; i < shuffledUnits1.length; ++i) {
        if(shuffledUnits1[i].id !== units[i].id) {
          pass = true;
        }
      }

      for(let i = 0; i < shuffledUnits2.length; ++i) {
        if(shuffledUnits2[i].id !== units[i].id) {
          pass = true;
        }
      }

      assert.equal(pass, true);
    });
  });
});
