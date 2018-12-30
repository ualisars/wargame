import {assert} from 'chai';
import {
  getSurroundedAllies,
  getSurroundedEnemies
} from '../../../src/utils/surrounded';
import {createUnit} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('surroundedUtils test', () => {

  describe('getSurroundedEnemies test', () => {
    let unit: Unit, enemy1: Unit, enemy2: Unit, enemy3: Unit;
    let enemy1ID: number;
    let enemy2ID: number;
    let enemy3ID: number;
    before(() => {
      unit = createUnit('lightInfantry', 280, 520,'player');
      enemy1 = createUnit('lightInfantry', 280, 440, 'computer');
      enemy2 = createUnit('lightInfantry', 760, 320, 'computer');
      enemy3 = createUnit('lightInfantry', 320, 520, 'computer');
  
      enemy1ID = enemy1.id;
      enemy2ID = enemy2.id;
      enemy3ID = enemy3.id;
      removeAllUnits();
    });

    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
    });

    it('enemy1 and enemy3 should be in surroundedEnemies', (done) => {
      const surroundedEnemies:Unit[] = getSurroundedEnemies(unit);
      let pass:boolean = true;
      for(let ally of surroundedEnemies) {
        if(ally.id === enemy1ID || ally.id === enemy3ID) {
           // pass
        } else {
          pass = false;
        }
      }
      assert.equal(pass, true);
      done();
    });
  });


  describe('getSurroundedAllies test', () => {
    let unit:Unit, ally1:Unit, ally2:Unit, ally3:Unit;
    before(() => {
      unit = createUnit('archers', 280, 520, 'player');
      ally1 = createUnit('archers', 280, 440, 'player');
      ally2 = createUnit('archers', 760, 320, 'player');
      ally3 = createUnit('archers', 320, 520, 'player');
      removeAllUnits();
    });

    after(() => {
      removeUnit(unit);
      removeUnit(ally1);
      removeUnit(ally2);
      removeUnit(ally3);
    });

    it('only ally1 and ally3 should be in the surroundedAllies', (done) => {
      const surroundedAllies:Unit[] = getSurroundedAllies(unit);
      let pass:boolean = true;
      for(let ally of surroundedAllies) {
        if(ally.id === ally1.id || ally.id === ally3.id) {
           // pass
        } else {
          pass = false;
        }
      }
      assert.equal(pass, true);
      done();
    });
  });
});
