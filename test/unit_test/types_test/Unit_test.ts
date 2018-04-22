import {assert} from 'chai';

import {
  createUnit
} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';
import {isUnitInArray} from '../../../src/utils/unit/utils';
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

});
