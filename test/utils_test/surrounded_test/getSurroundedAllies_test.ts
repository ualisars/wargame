import {assert} from 'chai';
import {getSurroundedAllies} from '../../../src/utils/surrounded';
import {createUnit} from '../../../src/unit/create';
import {removeUnit} from '../../../src/store/unit/units';
import Unit from '../../../src/unit/types/Unit';

describe('surroundedUtils test', () => {

  describe('getSurroundedAllies test', () => {
    let unit:Unit = createUnit('lightInfantry', 280, 520, 5, 'player');
    let ally1:Unit = createUnit('lightInfantry', 280, 440, 5, 'player');
    let ally2:Unit = createUnit('lightInfantry', 760, 320, 5, 'player');
    let ally3:Unit = createUnit('lightInfantry', 320, 520, 5, 'player');

    let ally1ID:number = ally1.id;
    let ally2ID:number = ally2.id;
    let ally3ID:number = ally3.id;

    // remove units
    after(() => {
      removeUnit(unit);
      removeUnit(ally1);
      removeUnit(ally2);
      removeUnit(ally3);
    });

    it('ally1 and ally3 should be in the surroundedAllies', () => {
      const surroundedAllies:Unit[] = getSurroundedAllies(unit);
      let pass:boolean = true;
      for(let ally of surroundedAllies) {
        if(ally.id === ally1ID || ally.id === ally3ID) {
           // pass
        } else {
          pass = false;
        }
      }

      assert.equal(pass, true);
    });
  });
})
