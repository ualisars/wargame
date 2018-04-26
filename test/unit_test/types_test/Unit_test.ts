import {assert} from 'chai';

import {
  createUnit
} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';
import {isUnitInArray} from '../../../src/utils/unit/general';
import {isObjectEmpty} from '../../../src/utils';
import {
  computerUnits,
  playerUnits,
  units
} from '../../../src/store/unit/units';

describe('Unit class test', () => {

  describe('unit setX and setY test', () => {
    let unit:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 480, 200, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
    });

    it('unitX should be 500', (done) => {
      unit.setX(500);
      assert.equal(unit.x, 500);
      done();
    });

    it('unitY should be 221', (done) => {
      unit.setY(221);
      assert.equal(unit.y, 221);
      done();
    });
  });

  describe('unit setIsMoving test', () => {
    let unit:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 480, 200, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
    });

    it('unit should moving', (done) => {
      unit.setIsMovingToTrue();
      assert.equal(unit.isMoving, true);
      done();
    });

    it('unit should not moving', (done) => {
      unit.setIsMovingToFalse();
      assert.equal(unit.isMoving, false);
      done();
    });
  });

  describe('setUnitToPursue test' , () => {
    let unit:Unit;
    let enemy:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 480, 200, 'player');
      enemy = createUnit('HeavyCavalry', 600, 240, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy);
    });

    it('Unit should pursue enemy', (done) => {
      unit.setUnitToPursue(enemy);
      assert.equal(unit.unitToPursue.id, enemy.id);
      done();
    });

    it('Unit should pursue enemy', (done) => {
      unit.setUnitToPursueToNull();
      assert.equal(unit.unitToPursue, null);
      done()
    });
  });

  describe('setIsFighting test', () => {
    let unit:Unit;


    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 480, 200, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
    });

    it('unit should be fighting ', (done) => {
      unit.setIsFightingToTrue();
      assert.equal(unit.isFighting, true);
      done();
    });

    it('unit should not be fighting ', (done) => {
      unit.setIsFightingToFalse();
      assert.equal(unit.isFighting, false);
      done();
    });
  });

  describe('assignMoveToPosition test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 480, 200, 'player');
      unit2 = createUnit('Hoplites', 720, 40, 'computer');
      unit3 = createUnit('Archers', 1140, 320, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit1 has to move to node {x: 480, y: 320}', () => {
      unit1.assignMoveToPosition(508, 357);
      assert.equal(unit1.moveToNode.x, 480);
      assert.equal(unit1.moveToNode.y, 320);
    });

    it('unit2 has to move to node {x: 360, y: 200}', () => {
      unit2.assignMoveToPosition(376, 223);
      assert.equal(unit2.moveToNode.x, 360);
      assert.equal(unit2.moveToNode.y, 200);
    });

    it('unit3 has to move to node {x: 520, y: 80}', () => {
      unit3.assignMoveToPosition(538, 107);
      assert.equal(unit3.moveToNode.x, 520);
      assert.equal(unit3.moveToNode.y, 80);
    });
  });


  describe('assignEnemy test', () => {
    let unit:Unit;
    let enemy1:Unit, enemy2:Unit, enemy3:Unit;
    let enemy4:Unit, enemy5:Unit, enemy6:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
      enemy1 = createUnit('Scouts', 480, 280, 'computer');
      enemy2 = createUnit('Hoplites', 480, 240, 'computer');
      enemy3 = createUnit('Militia', 440, 320, 'computer');
      enemy4 = createUnit('HeavyInfantry', 400, 280, 'computer');
      enemy5 = createUnit('Hoplites', 400, 240, 'computer');
      enemy6 = createUnit('HeavyCavalry', 480, 320, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
      removeUnit(enemy4);
      removeUnit(enemy5);
      removeUnit(enemy6);
    });

    it('enemy1 should be front enemy for unit', (done) => {
      unit.assignEnemy(enemy1);
      assert.equal(unit.figthAgainst.front.id, enemy1.id);
      done();
    });

    it('enemy2 should be flank enemy for unit', (done) => {
      unit.assignEnemy(enemy2);
      assert.equal(isUnitInArray(enemy2, unit.figthAgainst.flank), true);
      done();
    });

    it('enemy3 should be flank enemy for unit', (done) => {
      unit.assignEnemy(enemy3);
      assert.equal(isUnitInArray(enemy3, unit.figthAgainst.flank), true);
      done();
    });

    it('enemy4 should be rear enemy for unit', (done) => {
      unit.assignEnemy(enemy4);
      assert.equal(unit.figthAgainst.rear.id, enemy4.id);
      done();
    });

    it('enemy5 should be flank enemy for unit', (done) => {
      unit.assignEnemy(enemy5);
      assert.equal(isUnitInArray(enemy5, unit.figthAgainst.flank), true);
      done();
    });

    it('enemy6 should be flank enemy for unit', (done) => {
      unit.assignEnemy(enemy6);
      assert.equal(isUnitInArray(enemy6, unit.figthAgainst.flank), true);
      done();
    });


  });


  describe('removeEnemyFromFlank test', () => {
    let unit:Unit;
    let enemy1:Unit, enemy2:Unit, enemy3:Unit;
    let enemy4:Unit, enemy5:Unit, enemy6:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
      enemy1 = createUnit('Scouts', 480, 280, 'computer');
      enemy2 = createUnit('Hoplites', 480, 240, 'computer');
      enemy3 = createUnit('Militia', 440, 320, 'computer');
      enemy4 = createUnit('HeavyInfantry', 400, 280, 'computer');
      enemy5 = createUnit('Hoplites', 400, 240, 'computer');
      enemy6 = createUnit('HeavyCavalry', 480, 320, 'computer');
      unit.assignEnemy(enemy1);
      unit.assignEnemy(enemy2);
      unit.assignEnemy(enemy3);
      unit.assignEnemy(enemy4);
      unit.assignEnemy(enemy5);
      unit.assignEnemy(enemy6);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
      removeUnit(enemy4);
      removeUnit(enemy5);
      removeUnit(enemy6);
    });

    it('enemy2 should no longer be in the unit flank enemies', (done) => {
      unit.removeEnemyFromFlank(enemy2);
      assert.equal(isUnitInArray(enemy1, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy2, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy3, unit.figthAgainst.flank), true);
      assert.equal(isUnitInArray(enemy4, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy5, unit.figthAgainst.flank), true);
      assert.equal(isUnitInArray(enemy6, unit.figthAgainst.flank), true);
      done();
    });

    it('enemy3 should no longer be in the unit flank enemies', (done) => {
      unit.removeEnemyFromFlank(enemy3);
      assert.equal(isUnitInArray(enemy1, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy2, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy3, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy4, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy5, unit.figthAgainst.flank), true);
      assert.equal(isUnitInArray(enemy6, unit.figthAgainst.flank), true);
      done();
    });

    it('enemy5 should no longer be in the unit flank enemies', (done) => {
      unit.removeEnemyFromFlank(enemy5);
      assert.equal(isUnitInArray(enemy1, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy2, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy3, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy4, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy5, unit.figthAgainst.flank), false);
      assert.equal(isUnitInArray(enemy6, unit.figthAgainst.flank), true);
      done();
    });

  });


  describe('increaseCondition and decreaseCondition test', () => {
    let unit1:Unit;
    let unit2:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Pikemen', 440, 280, 'player');
      unit2 = createUnit('Scouts', 480, 280, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
    });

    it('unit1 condition should equal to 100, and unit2 condition is 79', (done) => {
      unit1.increaseCondition(4);
      unit2.decreaseCondition(21);
      assert.equal(unit1.condition, 100);
      assert.equal(unit2.condition, 79);
      done();
    });

    it('unit1 condition should equal to 98, and unit2 condition is 81', (done) => {
      unit1.decreaseCondition(1);
      unit1.decreaseCondition(1);
      unit2.increaseCondition(1);
      unit2.increaseCondition(1);
      assert.equal(unit1.condition, 98);
      assert.equal(unit2.condition, 81);
      done();
    });
  });

  describe('arrangeFightAgainst test', () => {
    let unit:Unit;
    let enemy1:Unit;
    let enemy2:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
      enemy1 = createUnit('Scouts', 480, 240, 'computer');
      enemy2 = createUnit('Scouts', 400, 280, 'computer');

      // explicitly assign enemy 1 to a flank
      unit.figthAgainst.flank.push(enemy1);
      unit.figthAgainst.rear = enemy2;


    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
    });

    it('enemy2 shoudl become front enemy and enemy3 flank', (done) => {
      unit.arrangeFightAgainst();
      assert.equal(unit.figthAgainst.front.id, enemy1.id);
      assert.equal(isUnitInArray(enemy2, unit.figthAgainst.flank), true);
      done();
    });
  });


  describe('removeEnemyFromFightAgainst test', () => {
    let unit:Unit;
    let enemy1:Unit, enemy2:Unit, enemy3:Unit;
    let enemy4:Unit, enemy5:Unit, enemy6:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
      enemy1 = createUnit('Scouts', 480, 280, 'computer');
      enemy2 = createUnit('Hoplites', 480, 240, 'computer');
      enemy3 = createUnit('Militia', 440, 320, 'computer');
      enemy4 = createUnit('HeavyInfantry', 400, 280, 'computer');
      enemy5 = createUnit('Hoplites', 400, 240, 'computer');
      enemy6 = createUnit('HeavyCavalry', 480, 320, 'computer');
      unit.assignEnemy(enemy1);
      unit.assignEnemy(enemy2);
      unit.assignEnemy(enemy3);
      unit.assignEnemy(enemy4);
      unit.assignEnemy(enemy5);
      unit.assignEnemy(enemy6);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
      removeUnit(enemy4);
      removeUnit(enemy5);
      removeUnit(enemy6);
    });

    it('enemy4 should be removed from figthAgainst', (done) => {

      unit.removeEnemyFromFightAgainst(enemy4);
      assert.equal(isUnitInArray(enemy4, unit.figthAgainst.flank), false);
      assert.notEqual(unit.figthAgainst.front.id, enemy4.id);
      assert.notEqual(unit.figthAgainst.rear.id, enemy4.id);
      done();
    });

    it('enemy2 should be removed from figthAgainst', (done) => {

      unit.removeEnemyFromFightAgainst(enemy2);
      assert.equal(isUnitInArray(enemy2, unit.figthAgainst.flank), false);
      assert.notEqual(unit.figthAgainst.front.id, enemy2.id);
      assert.notEqual(unit.figthAgainst.rear.id, enemy2.id);

      done();
    });

    it('enemy3 should be removed from figthAgainst', (done) => {

      unit.removeEnemyFromFightAgainst(enemy3);
      assert.equal(isUnitInArray(enemy3, unit.figthAgainst.flank), false);
      assert.notEqual(unit.figthAgainst.front.id, enemy3.id);
      assert.notEqual(unit.figthAgainst.rear.id, enemy3.id);
      done();
    });

    it('enemy1 should no longer be in figthAgainst', (done) => {

      unit.removeEnemyFromFightAgainst(enemy1);
      assert.equal(isUnitInArray(enemy1, unit.figthAgainst.flank), false);
      assert.notEqual(unit.figthAgainst.front.id, enemy1.id);
      assert.notEqual(unit.figthAgainst.rear.id, enemy1.id);
      assert.equal(unit.figthAgainst.flank.length, 0);
      done();
    });

    it('enemy6 should no longer be in figthAgainst', (done) => {

      unit.removeEnemyFromFightAgainst(enemy6);
      assert.equal(isUnitInArray(enemy6, unit.figthAgainst.flank), false);
      assert.notEqual(unit.figthAgainst.front.id, enemy6.id);
      assert.equal(unit.figthAgainst.front.id, enemy5.id);
      assert.notEqual(unit.figthAgainst.rear.id, enemy6.id);
      assert.equal(unit.figthAgainst.flank.length, 0);
      assert.equal(isObjectEmpty(unit.figthAgainst.rear), true);
      done();
    });

    it('no units should be inside figthAgainst', (done) => {

      unit.removeEnemyFromFightAgainst(enemy5);
      assert.equal(unit.figthAgainst.flank.length, 0);
      assert.equal(isObjectEmpty(unit.figthAgainst.front), true);
      assert.equal(isObjectEmpty(unit.figthAgainst.rear), true);
      done();
    });

  });

  describe('clearFightAgainst test', () => {
    let unit:Unit;
    let enemy1:Unit, enemy2:Unit, enemy3:Unit;
    let enemy4:Unit, enemy5:Unit, enemy6:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
      enemy1 = createUnit('Scouts', 480, 280, 'computer');
      enemy2 = createUnit('Hoplites', 480, 240, 'computer');
      enemy3 = createUnit('Militia', 440, 320, 'computer');
      enemy4 = createUnit('HeavyInfantry', 400, 280, 'computer');
      enemy5 = createUnit('Hoplites', 400, 240, 'computer');
      enemy6 = createUnit('HeavyCavalry', 480, 320, 'computer');
      unit.assignEnemy(enemy1);
      unit.assignEnemy(enemy2);
      unit.assignEnemy(enemy3);
      unit.assignEnemy(enemy4);
      unit.assignEnemy(enemy5);
      unit.assignEnemy(enemy6);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
      removeUnit(enemy4);
      removeUnit(enemy5);
      removeUnit(enemy6);
    });

    it('figthAgainst should be empty', (done) => {
      unit.clearFightAgainst();
      assert.equal(unit.figthAgainst.flank.length, 0);
      assert.equal(isObjectEmpty(unit.figthAgainst.front), true);
      assert.equal(isObjectEmpty(unit.figthAgainst.rear), true);
      done();
    })
  });


  describe('setCurrentNode test', () => {
    let unit:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
    });

    it('unit currentNode should be {x: 280, y: 80}', (done) => {
      let node = {x:301, y:118};
      unit.setCurrentNode(node);
      assert.equal(unit.currentNode.x, 280);
      assert.equal(unit.currentNode.y, 80);
      done();
    });

    it('unit currentNode should be {x: 600, y: 240}', (done) => {
      let node = {x:600, y:240};
      unit.setCurrentNode(node);
      assert.equal(unit.currentNode.x, 600);
      assert.equal(unit.currentNode.y, 240);
      done();
    });

    it('unit currentNode should be {x: 640, y: 40}', (done) => {
      let node = {x: 659, y:64};
      unit.setCurrentNode(node);
      assert.equal(unit.currentNode.x, 640);
      assert.equal(unit.currentNode.y, 40);
      done();
    });
  });

  describe('setNextNode test', () => {
    let unit:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('Pikemen', 440, 280, 'player');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
    });

    it('unit nextNode should be {x: 280, y: 80}', (done) => {
      let node = {x:301, y:118};
      unit.setNextNode(node);
      assert.equal(unit.nextNode.x, 280);
      assert.equal(unit.nextNode.y, 80);
      done();
    });

    it('unit nextNode should be {x: 600, y: 240}', (done) => {
      let node = {x:600, y:240};
      unit.setNextNode(node);
      assert.equal(unit.nextNode.x, 600);
      assert.equal(unit.nextNode.y, 240);
      done();
    });

    it('unit nextNode should be {x: 640, y: 40}', (done) => {
      let node = {x: 659, y:64};
      unit.setNextNode(node);
      assert.equal(unit.nextNode.x, 640);
      assert.equal(unit.nextNode.y, 40);
      done();
    });
  });


  describe('assignTask test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Scouts', 480, 280, 'computer');
      unit2 = createUnit('Hoplites', 640, 320, 'computer');
      unit3 = createUnit('Militia', 1080, 560, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit1 task should be exploration', (done) => {
      unit1.assignTask('exploration');
      assert.equal(unit1.task, 'exploration');
      done();
    });

    it('unit2 task should be patrol', (done) => {
      unit2.assignTask('patrol');
      assert.equal(unit1.task, 'exploration');
      assert.equal(unit2.task, 'patrol');
      done();
    });

    it('unit3 task should be holdPosition', (done) => {
      unit3.assignTask('holdPosition');
      assert.equal(unit1.task, 'exploration');
      assert.equal(unit2.task, 'patrol');
      assert.equal(unit3.task, 'holdPosition');
      done();
    });
    //
    it('unit1 task should be protection', (done) => {
      unit1.assignTask('protection');
      assert.equal(unit1.task, 'protection');
      assert.equal(unit2.task, 'patrol');
      assert.equal(unit3.task, 'holdPosition');
      done();
    });
  });

  describe('clearTask test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Scouts', 480, 280, 'computer');
      unit2 = createUnit('Hoplites', 640, 320, 'computer');
      unit3 = createUnit('Militia', 1080, 560, 'computer');

      unit1.assignTask('exploration');
      unit2.assignTask('patrol');
      unit3.assignTask('holdPosition');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit1 and unit2 tasks should be empty', () => {
      unit1.clearTask();
      unit2.clearTask();

      assert.equal(unit1.task, '');
      assert.equal(unit2.task, '');
      assert.equal(unit3.task, 'holdPosition');
    })
  });

  describe('isUnitUnderProtection test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Scouts', 480, 280, 'computer');
      unit2 = createUnit('Hoplites', 640, 320, 'computer');
      unit3 = createUnit('Militia', 1080, 560, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit1, unit2 and unit3 should be under protection', (done) => {
      unit1.setIsUnitUnderProtectionToTrue();
      unit2.setIsUnitUnderProtectionToTrue();
      unit3.setIsUnitUnderProtectionToTrue();
      assert.equal(unit1.isUnitUnderProtection, true);
      assert.equal(unit2.isUnitUnderProtection, true);
      assert.equal(unit3.isUnitUnderProtection, true);
      done();
    });

    it('only unit2 should be under protection', (done) => {
      unit1.setIsUnitUnderProtectionToFalse();
      unit3.setIsUnitUnderProtectionToFalse();
      assert.equal(unit1.isUnitUnderProtection, false);
      assert.equal(unit2.isUnitUnderProtection, true);
      assert.equal(unit3.isUnitUnderProtection, false);
      done();
    });
  });

  describe('assignUnitToProtect test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;
    let unit4:Unit, unit5:Unit, unit6:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Scouts', 480, 280, 'computer');
      unit2 = createUnit('Hoplites', 640, 320, 'computer');
      unit3 = createUnit('Militia', 1080, 560, 'computer');
      unit4 = createUnit('Archers', 480, 280, 'computer');
      unit5 = createUnit('LightCavalry', 640, 320, 'computer');
      unit6 = createUnit('HeavyCavalry', 1080, 560, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
      removeUnit(unit5);
      removeUnit(unit6);
    });

    it('unit6 should protect unit4 and unit3 should protect unit2', (done) => {
      unit6.assignUnitToProtect(unit4.id);
      unit3.assignUnitToProtect(unit2.id);
      assert.equal(unit6.unitToProtect, unit4.id);
      assert.equal(unit3.unitToProtect, unit2.id);
      done();
    });

    it('unit3 should not protect any units', (done) => {
      unit3.clearUnitToProtect();
      assert.equal(unit6.unitToProtect, unit4.id);
      assert.equal(unit3.unitToProtect, null);
      done();
    });
  });

  describe('setIsUnitNeedHelp test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Scouts', 480, 280, 'computer');
      unit2 = createUnit('Hoplites', 640, 320, 'computer');
      unit3 = createUnit('Militia', 1080, 560, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit1 and unit2 need help', (done) => {
      unit1.setIsUnitNeedHelpToTrue();
      unit2.setIsUnitNeedHelpToTrue();

      assert.equal(unit1.isUnitNeedHelp, true);
      assert.equal(unit2.isUnitNeedHelp, true);
      assert.equal(unit3.isUnitNeedHelp, false);
      done();
    });

    it(' only unit1 should need help', (done) => {
      unit1.setIsUnitNeedHelpToTrue();
      unit2.setIsUnitNeedHelpToFalse();

      assert.equal(unit1.isUnitNeedHelp, true);
      assert.equal(unit2.isUnitNeedHelp, false);
      assert.equal(unit3.isUnitNeedHelp, false);
      done();
    });
  });

});
