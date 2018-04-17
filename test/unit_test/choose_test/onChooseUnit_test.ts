import {assert} from 'chai';
import {currentlyChosenUnit} from '../../../src/store/unit/currentlyChosenUnit';
import {createUnit} from '../../../src/unit/create';
import {
  onChooseUnit
} from '../../../src/unit/choose';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('ChooseUnit test', () => {

  describe('onChooseUnit test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;
    let units:Unit[];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 480, 200, 'player');
      unit2 = createUnit('scouts', 720, 40, 'player');
      unit3 = createUnit('scouts', 1140, 320, 'player');
      units = [];
      units.push(unit1);
      units.push(unit2);
      units.push(unit3);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit1 should be selected', () => {
      onChooseUnit(units, 500, 210);
      assert.equal(currentlyChosenUnit.id, unit1.id);
      assert.notEqual(currentlyChosenUnit.id, unit2.id);
      assert.notEqual(currentlyChosenUnit.id, unit3.id);
    });

    it('unit2 should be selected', () => {
      onChooseUnit(units, 750, 79);
      assert.notEqual(currentlyChosenUnit.id, unit1.id);
      assert.equal(currentlyChosenUnit.id, unit2.id);
      assert.notEqual(currentlyChosenUnit.id, unit3.id);
    });

    it('unit3 should be selected', () => {
      onChooseUnit(units, 1160, 320);
      assert.notEqual(currentlyChosenUnit.id, unit1.id);
      assert.notEqual(currentlyChosenUnit.id, unit2.id);
      assert.equal(currentlyChosenUnit.id, unit3.id);
    });

    it('no units should be selected', () => {
      onChooseUnit(units, 60, 120);
      assert.equal(currentlyChosenUnit, null);
    });
  });
});
