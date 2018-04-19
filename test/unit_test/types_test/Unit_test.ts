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

});
