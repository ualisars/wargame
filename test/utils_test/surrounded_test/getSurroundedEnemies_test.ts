import {assert} from 'chai';
import {getSurroundedEnemies} from '../../../src/utils/surrounded';
import {createUnit} from '../../../src/unit/create';
import {removeUnit} from '../../../src/store/unit/units';
import Unit from '../../../src/unit/types/Unit';

describe('surroundedUtils test', () => {

  describe('getSurroundedEnemies test', () => {
    let unit:Unit = createUnit('lightInfantry', 280, 520, 5, 'player');
    let enemy1:Unit = createUnit('lightInfantry', 280, 440, 5, 'computer');
    let enemy2:Unit = createUnit('lightInfantry', 760, 320, 5, 'computer');
    let enemy3:Unit = createUnit('lightInfantry', 320, 520, 5, 'computer');

    let enemy1ID:number = enemy1.id;
    let enemy2ID:number = enemy2.id;
    let enemy3ID:number = enemy3.id;

    // remove units
    after(() => {
      removeUnit(unit);
      removeUnit(enemy1);
      removeUnit(enemy2);
      removeUnit(enemy3);
    });

    it('enemy1 and enemy3 should be in surroundedEnemies', () => {
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
    });
  });
});
