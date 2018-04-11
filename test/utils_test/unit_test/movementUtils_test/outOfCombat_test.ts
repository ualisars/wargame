import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {
  removeUnit,
  removeAllUnits
} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';

import {calculateChanceToGetOutOfCombat} from '../../../../src/utils/unit/movementUtils';

describe('unitMovementUtils test', () => {

  describe('calculateChanceToGetOutOfCombat test', () => {
    let unit:Unit;
    let enemy1:Unit, enemy2:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('HeavyCavalry', 400, 160, 5, 'computer');
      enemy1 = createUnit('LightInfantry', 320, 120, 5, 'player');
      enemy2 = createUnit('Pikemen', 400, 120, 5, 'player');

      // explicitly assign speed and mobility
      // in order to avoid problem when characterictics will be changed
      unit.speed = 30;
      unit.mobility = 7;
      unit.condition = 45;
      enemy1.speed = 10;
      enemy1.mobility = 3;
      enemy2.speed = 8;
      enemy2.mobility = 1;
      unit.assignEnemy(enemy1);
      unit.assignEnemy(enemy2);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
    });

    it('chance should be equal to 0.7', () => {
      const chance:number = calculateChanceToGetOutOfCombat(unit);
      assert.equal(Number(chance.toFixed(1)), 0.7);
    });
  });
});
