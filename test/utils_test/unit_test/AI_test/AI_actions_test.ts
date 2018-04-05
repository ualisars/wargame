import {assert} from 'chai';

import {createUnit} from '../../../../src/unit/create';
import {
  getBestEnemyByProperty,
  getBestUnitByProperty,
  getClosestEnemyToUnit,
  getClosestUnitToNode,
  getClosestUnitToOtherUnit,
  getFreeUnits,
  getNotFightingUnits,
  getScoutsNumber,
  getUnitsByTask,
  getUnitsByPropertyValue,
  getUnitsWhereValue,
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
    let exclusion:Unit[] = [];
    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      exclusion.push(unit1);
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

    it('fastest unit without HeavyCavalry should be Militia', () => {
      let fastestUnit:Unit = getBestUnitByProperty('speed', exclusion);
      assert.equal(fastestUnit.id, unit4.id);
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

    it('slowest unit without Hoplites should be HeavyInfantry', () => {
      let slowestUnit:Unit = getWorstUnitByProperty('speed', [unit3]);
      assert.equal(slowestUnit.id, unit2.id);
    });

    it('slowest unit without Hoplites and HeavyInfantry should be Militia', () => {
      let slowestUnit:Unit = getWorstUnitByProperty('speed', [unit2, unit3]);
      assert.equal(slowestUnit.id, unit4.id);
    });

    it('unit with worst meleeDamage should be Militia', () => {
      let unitWithWorstMeleeDamage:Unit = getWorstUnitByProperty('meleeDamage');
      assert.equal(unitWithWorstMeleeDamage.id, unit4.id);
    });

    it('unit with worst armour should be Militia', () => {
      let unitWithWorstArmour:Unit = getWorstUnitByProperty('armour');
      assert.equal(unitWithWorstArmour.id, unit4.id);
    });

    it('unit with worst armour without Militia should be Hoplites', () => {
      let unitWithWorstArmour:Unit = getWorstUnitByProperty('armour', [unit4]);
      assert.equal(unitWithWorstArmour.id, unit3.id);
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

    it('fastest enemy without HeavyCavalry and Militia should be HeavyInfantry', () => {
      let fastestEnemy:Unit = getBestEnemyByProperty('speed', [unit1, unit4]);
      assert.equal(fastestEnemy.id, unit2.id);
    });

    it('enemy with best meleeDamage should be Hoplites', () => {
      let enemyWithBestMeleeDamage:Unit = getBestEnemyByProperty('meleeDamage');
      assert.equal(enemyWithBestMeleeDamage.id, unit3.id);
    });

    it('enemy with best meleeDamage without Hoplites and HeavyCavalry should be HeavyInfantry', () => {
      let enemyWithBestMeleeDamage:Unit = getBestEnemyByProperty('meleeDamage', [unit1, unit3]);
      assert.equal(enemyWithBestMeleeDamage.id, unit2.id);
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

    it('slowest enemy without Hoplites should be HeavyInfantry', () => {
      let slowestEnemy:Unit = getWorstEnemyByProperty('speed', [enemy3]);
      assert.equal(slowestEnemy.id, enemy2.id);
    });

    it('slowest enemy without Hoplites and HeavyInfantry should be Militia', () => {
      let slowestEnemy:Unit = getWorstEnemyByProperty('speed', [enemy2, enemy3]);
      assert.equal(slowestEnemy.id, enemy4.id);
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
  });

  describe('getClosestEnemyToUnit test', () => {
    let unit:Unit, ally1:Unit, ally2:Unit;
    let enemy1:Unit, enemy2:Unit, enemy3:Unit, enemy4:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('HeavyCavalry', 440, 160, 5, 'player');
      ally1 = createUnit('HeavyCavalry', 0, 320, 5, 'player');
      ally2 = createUnit('HeavyCavalry', 880, 280, 5, 'player');
      enemy1 = createUnit('HeavyCavalry', 400, 280, 5, 'player');
      enemy2 = createUnit('HeavyInfantry', 560, 240, 5, 'player');
      enemy3 = createUnit('Hoplites', 920, 80, 5, 'player');
      enemy4 = createUnit('Militia', 160, 480, 5, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(ally1);
      removeUnit(ally2);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
      removeUnit(enemy4);
    });

    it('closest enemy to unit should be enemy1', () => {
      let closestEnemy:Unit = getClosestEnemyToUnit(unit);
      assert.equal(closestEnemy.id, enemy1.id);
      assert.notEqual(closestEnemy.id, enemy2.id);
      assert.notEqual(closestEnemy.id, enemy3.id);
      assert.notEqual(closestEnemy.id, enemy4.id);
      assert.notEqual(closestEnemy.id, unit.id);
      assert.notEqual(closestEnemy.id, ally1.id);
      assert.notEqual(closestEnemy.id, ally2.id);
    });
  });


  describe('getFreeUnits test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let exclusion:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      unit5 = createUnit('Scouts', 1200, 480, 5, 'computer');
      unit1.assignTask('exploration');
      unit3.assignTask('patrol');
      exclusion.push(unit2);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
      removeUnit(unit5);
    });

    it('freeUnits without exclusion should be unit2, unit4 and unit5', () => {
      let freeUnits:Unit[] = getFreeUnits();
      let pass:boolean = true;
      for(let freeUnit of freeUnits) {
        if(freeUnit.id === unit2.id) {
            // pass
        }
        else if(freeUnit.id === unit4.id) {
            // pass
        }
        else if(freeUnit.id === unit5.id) {
            // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('freeUnits without unit2 should be unit4 and unit5', () => {
      let freeUnits:Unit[] = getFreeUnits([unit2]);
      let pass:boolean = true;
      for(let freeUnit of freeUnits) {
        if(freeUnit.id === unit4.id) {
            // pass
        }
        else if(freeUnit.id === unit5.id) {
            // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('freeUnits without unit2 and unit4 should consist only of unit5', () => {
      let freeUnits:Unit[] = getFreeUnits([unit2, unit4]);
      let pass:boolean = true;
      for(let freeUnit of freeUnits) {
        if(freeUnit.id === unit5.id) {
            // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

  });


  describe('getUnitsByTask test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let unit6:Unit, unit7:Unit, unit8:Unit;
    let exclusion:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      unit5 = createUnit('Scouts', 1200, 480, 5, 'computer');
      unit6 = createUnit('Scouts', 600, 40, 5, 'computer');
      unit7 = createUnit('Scouts', 1160, 40, 5, 'computer');
      unit8 = createUnit('Scouts', 560, 520, 5, 'computer');
      unit1.assignTask('exploration');
      unit2.assignTask('holdPosition');
      unit3.assignTask('protection');
      unit4.assignTask('patrol');
      unit5.assignTask('exploration');
      unit6.assignTask('exploration');
      unit7.assignTask('exploration');
      unit8.assignTask('exploration');
      exclusion.push(unit2);
      exclusion.push(unit6);
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
      removeUnit(unit8);
    });

    it('unit1, unit5, unit6, unit7 and unit8 should have exploration task', () => {
      let scouts:Unit[] = getUnitsByTask('exploration');
      let pass:boolean = true;
      for(let scout of scouts) {
          if(scout.id === unit1.id) {
            // pass
          }
          else if(scout.id === unit5.id) {
            // pass
          }
          else if(scout.id === unit6.id) {
            // pass
          }
          else if(scout.id === unit7.id) {
            // pass
          }
          else if(scout.id === unit8.id) {
            // pass
          } else {
            pass = false;
            break;
          }
      }

      assert.equal(pass, true);

    });

    it('without unit6 only unit1, unit5, unit7 and unit8 should have exploration task', () => {
      let scouts:Unit[] = getUnitsByTask('exploration', exclusion);
      let pass:boolean = true;
      for(let scout of scouts) {
          if(scout.id === unit1.id) {
            // pass
          }
          else if(scout.id === unit5.id) {
            // pass
          }
          else if(scout.id === unit7.id) {
            // pass
          }
          else if(scout.id === unit8.id) {
            // pass
          } else {
            pass = false;
            break;
          }
      }

      assert.equal(pass, true);
    });


    it('unit2 should hold position', () => {
      let defenders:Unit[] = getUnitsByTask('holdPosition');
      let pass:boolean = true;
      for(let defender of defenders) {
          if(defender.id === unit2.id) {
            // pass
          } else {
            pass = false;
            break;
          }
      }

      assert.equal(pass, true);
    });

    it('without unit2 no units should holdPosition', () => {
      let defenders:Unit[] = getUnitsByTask('holdPosition', exclusion);
      assert.equal(defenders.length, 0);
    });

    it('unit3 should patrol', () => {
      let patrols:Unit[] = getUnitsByTask('patrol', exclusion);
      let pass:boolean = true;
      for(let patrol of patrols) {
          if(patrol.id === unit4.id) {
            // pass
          } else {
            pass = false;
            break;
          }
      }

      assert.equal(pass, true);
    });

    it('unit4 should protect another unit', () => {
      let protectors:Unit[] = getUnitsByTask('protection', exclusion);
      let pass:boolean = true;
      for(let protector of protectors) {
          if(protector.id === unit3.id) {
            // pass
          } else {
            pass = false;
            break;
          }
      }

      assert.equal(pass, true);
    });

  });


  describe('getUnitsByPropertyValue test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let exclusion:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      unit5 = createUnit('Scouts', 1200, 480, 5, 'computer');
      unit2.health = 80;
      unit3.health = 30;
      unit5.health = 45;
      unit4.condition = 60;
      unit5.condition = 32;
      exclusion.push(unit2);
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

    it('full hp units should be unit1 and unit4', () => {
      let fullHPUnits:Unit[] = getUnitsByPropertyValue('health', 100);
      let pass:boolean = true;
      for(let unit of fullHPUnits) {
        if(unit.id === unit1.id) {
            // pass
        }
        else if(unit.id === unit4.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('units with full condition should be unit1, unit2 and unit3', () => {
      let fullConditionUnits:Unit[] = getUnitsByPropertyValue('condition', 100);
      let pass:boolean = true;
      for(let unit of fullConditionUnits) {
        if(unit.id === unit1.id) {
            // pass
        }
        else if(unit.id === unit2.id) {
          // pass
        }
        else if(unit.id === unit3.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('units with full condition without unit2 should be unit1 and unit3', () => {
      let fullConditionUnits:Unit[] = getUnitsByPropertyValue('condition', 100, exclusion);
      let pass:boolean = true;
      for(let unit of fullConditionUnits) {
        if(unit.id === unit1.id) {
            // pass
        }
        else if(unit.id === unit3.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('unit with condition equal to 32 should be unit5', () => {
      let units:Unit[] = getUnitsByPropertyValue('condition', 32);
      let pass:boolean = false;
      for(let unit of units) {
        if(unit.id === unit5.id) pass = true;
      }

      assert.equal(pass, true);
    });

  });

  describe('getUnitsWhereValue test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let exclusion:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      unit5 = createUnit('Scouts', 1200, 480, 5, 'computer');
      unit2.health = 80;
      unit3.health = 30;
      unit5.health = 45;
      unit4.condition = 60;
      unit5.condition = 32;
      exclusion.push(unit2);
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

    it('units with health more than 50 should unit1, unit2 and unit4', () => {
      let unitWhereHealthMoreThan50:Unit[] = getUnitsWhereValue('health', '>', 50);
      let pass:boolean = true;
      for(let unit of unitWhereHealthMoreThan50) {
        if(unit.id === unit1.id) {
          // pass
        }
        else if(unit.id === unit2.id) {
          // pass
        }
        else if(unit.id === unit4.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('units where condition less or equal to 60 should be unit4 and unit5', () => {
      let unitWhereConditionLessOrEqualTo60:Unit[] = getUnitsWhereValue('condition', '<=', 60);
      let pass:boolean = true;
      for(let unit of unitWhereConditionLessOrEqualTo60) {
        if(unit.id === unit4.id) {
          // pass
        }
        else if(unit.id === unit5.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });

    it('units where condition less or equal to 60 without unit5 should consist only of unit4', () => {
      let unitWhereConditionLessOrEqualTo60:Unit[] = getUnitsWhereValue('condition', 'lessOrEqual', 60, exclusion);
      let pass:boolean = true;
      for(let unit of unitWhereConditionLessOrEqualTo60) {
        if(unit.id === unit4.id) {
          // pass
        } else {
          pass = false;
          break;
        }
      }

      assert.equal(pass, true);
    });
  });

  describe('getScoutsNumber test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let unit6:Unit, unit7:Unit, unit8:Unit;
    let exclusion:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 400, 280, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 240, 5, 'computer');
      unit3 = createUnit('Hoplites', 920, 80, 5, 'computer');
      unit4 = createUnit('Militia', 160, 480, 5, 'computer');
      unit5 = createUnit('Scouts', 1200, 480, 5, 'computer');
      unit6 = createUnit('Scouts', 600, 40, 5, 'computer');
      unit7 = createUnit('Scouts', 1160, 40, 5, 'computer');
      unit8 = createUnit('Scouts', 560, 520, 5, 'computer');
      unit1.assignTask('exploration');
      unit2.assignTask('holdPosition');
      unit3.assignTask('protection');
      unit4.assignTask('patrol');
      unit5.assignTask('exploration');
      unit6.assignTask('exploration');
      unit7.assignTask('exploration');
      unit8.assignTask('exploration');
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
      removeUnit(unit8);
    });

    it('number of scouts should be equal to 5', () => {
      let scoutsNumber:number = getScoutsNumber();
      assert.equal(scoutsNumber, 5);
    });
  });
});
