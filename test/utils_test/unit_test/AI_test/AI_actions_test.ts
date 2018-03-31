import {assert} from 'chai';

import {createUnit} from '../../../../src/unit/create';
import {
  getBestUnitByProperty,
  getClosestUnitToNode,
  getClosestUnitToOtherUnit,
  getWorstUnitByProperty
} from '../../../../src/utils/unit/AI';
import {
  removeUnit,
  removeAllUnits
} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';


describe('unitUtils: AI test', () => {

  describe('getClosestUnitToNode test', () => {

    let unit1:Unit, unit2:Unit, unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 280, 200, 5, 'computer');
      unit2 = createUnit('scouts', 480, 80, 5, 'computer');
      unit3 = createUnit('scouts', 480, 160, 5, 'computer');
    });

    let node:any = {x: 400, y: 160};
    // let unit1:Unit = createUnit('scouts', 280, 200, 5, 'computer');
    // let unit2:Unit = createUnit('scouts', 480, 80, 5, 'computer');
    // let unit3:Unit = createUnit('scouts', 480, 160, 5, 'computer');

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit3 with current node {x: 480, y: 160} should be closest to node', (done) => {
      let closestUnit:Unit = getClosestUnitToNode(node);
      assert.notEqual(closestUnit.id, unit1.id);
      assert.notEqual(closestUnit.id, unit2.id);
      assert.equal(closestUnit.id, unit3.id);
      done();
    });
  });

  describe('getClosestUnitToOtherUnit', () => {

    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 400, 280, 5, 'computer');
      unit2 = createUnit('scouts', 560, 240, 5, 'computer');
      unit3 = createUnit('scouts', 920, 80, 5, 'computer');
      unit4 = createUnit('scouts', 160, 480, 5, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
    });

    it('closestUnit to unit1 should be unit2', (done) => {
      let closestUnit:Unit = getClosestUnitToOtherUnit(unit1);
      assert.equal(closestUnit.id, unit2.id);
      done();
    });
  });

  describe('getBestUnitByProperty', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
    });

    it('fastest unit should be HeavyCavalry', () => {
      let fastestUnit:Unit = getBestUnitByProperty('speed');
      assert.equal(fastestUnit.id, unit1.id);
    });

    it('unit with bestMelee damage should be Hoplites', () => {
      let unitWithBestMeleeDamage:Unit = getBestUnitByProperty('meleeDamage');
      assert.equal(unitWithBestMeleeDamage.id, unit3.id);
    });
  });

  describe('getWorstUnitByProperty test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
    });

    it('slowest unit should be Hoplites', () => {
      let slowestUnit:Unit = getWorstUnitByProperty('speed');
      assert.equal(slowestUnit.id, unit3.id);
    });

    it('unit with worst meleeDamage should be Militia', () => {
      let unitWithWorstMeleeDamage:Unit = getWorstUnitByProperty('meleeDamage');
      assert.equal(unitWithWorstMeleeDamage.id, unit4.id);
    });

    it('unit with worst armour should be Militia', () => {
      let unitWithWorstArmour:Unit = getWorstUnitByProperty('armour');
      assert.equal(unitWithWorstArmour.id, unit4.id);
    });
  });
});
