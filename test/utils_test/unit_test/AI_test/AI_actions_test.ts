import {assert} from 'chai';

import {createUnit} from '../../../../src/unit/create';
import {
  getBestEnemyByProperty,
  getBestUnitByProperty,
  getClosestUnitToNode,
  getClosestUnitToOtherUnit,
  getNotFightingUnits,
  getWorstEnemyByProperty,
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

  describe('getBestEnemyByProperty test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'player');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'player');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'player');
      unit4 = createUnit('Militia', 160, 480, 5, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
    });

    it('fastest enemy should be HeavyCavalry', () => {
      let fastestEnemy:Unit = getBestEnemyByProperty('speed');
      assert.equal(fastestEnemy.id, unit1.id);
    });

    it('enemy with best meleeDamage should be Hoplites', () => {
      let enemyWithBestMeleeDamage:Unit = getBestEnemyByProperty('meleeDamage');
      assert.equal(enemyWithBestMeleeDamage.id, unit3.id);
    });
  });

  describe('getWorstEnemyByProperty test', () => {
    let enemy1:Unit, enemy2:Unit, enemy3:Unit, enemy4:Unit;

    before(() => {
      removeAllUnits();
      enemy1 = createUnit('HeavyCavalry', 400, 280, 5, 'player');
      enemy2 = createUnit('HeavyInfantry', 560, 240, 5, 'player');
      enemy3 = createUnit('Hoplites', 920, 80, 5, 'player');
      enemy4 = createUnit('Militia', 160, 480, 5, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
      removeUnit(enemy4);
    });

    it('slowest enemy should be Hoplites', () => {
      let slowestEnemy:Unit = getWorstEnemyByProperty('speed');
      assert.equal(slowestEnemy.id, enemy3.id);
    });

    it('enemy with worst meleeDamage should be Militia', () => {
      let enemyWithWorstMeleeDamage:Unit = getWorstEnemyByProperty('meleeDamage');
      assert.equal(enemyWithWorstMeleeDamage.id, enemy4.id);
    });

    it('enemy with worst armour should be Militia', () => {
      let enemyWithWorstArmour:Unit = getWorstEnemyByProperty('armour');
      assert.equal(enemyWithWorstArmour.id, enemy4.id);
    });
  });


  describe('getNotFightingUnits test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let exclusion:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      unit5 = createUnit('Scouts', 1200, 480, 5, 'computer');
      unit2.setIsFightingToTrue();
      exclusion.push(unit1);
      exclusion.push(unit5);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
      removeUnit(unit5);
    });

    it('not figthing units without exclusion should unit1, unit3, unit4 and unit5', () => {
      let notFigthingUnits:Unit[] = getNotFightingUnits();
      let pass:boolean = true;
      for(let unit of notFigthingUnits) {
        if(unit.id === unit1.id || unit.id === unit3.id || unit.id === unit4.id || unit.id === unit5.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('not figthing units with exclusion should unit3, unit4', () => {
      let notFigthingUnits:Unit[] = getNotFightingUnits(exclusion);
      let pass:boolean = true;
      for(let unit of notFigthingUnits) {
        if(unit.id === unit3.id || unit.id === unit4.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });
  })
});
