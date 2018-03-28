import {assert} from 'chai';
import {
  getSurroundedAllies,
  getSurroundedEnemies
} from '../../../src/utils/surrounded';
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

    let unit:Unit = createUnit('archers', 280, 520, 5, 'player');
    let ally1:Unit = createUnit('archers', 280, 440, 5, 'player');
    let ally2:Unit = createUnit('archers', 760, 320, 5, 'player');
    let ally3:Unit = createUnit('archers', 320, 520, 5, 'player');

    // remove units
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

})
