import {units} from '../../../store/unit/units';
import {isObjectEmpty} from '../../../utils';
import {meleeAttack} from './index';
/*
  Go through all units and
  fire meleeAttack for all enemies that
  unit is currently fighting
*/
export const meleeCombat = () => {
  for(let unit of units) {
    if(!isObjectEmpty(unit.figthAgainst.front)) { // unit have front enemy
      if(!unit.figthAgainst.front.isFighting) { // unit is getting out of combat
        return;
      }
      meleeAttack(unit, unit.figthAgainst.front, 'front');
    }
    if(!isObjectEmpty(unit.figthAgainst.rear)) { // unit have rear enemy
      if(!unit.figthAgainst.rear.isFighting) { // unit is getting out of combat
        return;
      }
      meleeAttack(unit, unit.figthAgainst.rear, 'rear');
    }
    if(unit.figthAgainst.flank.length > 0) { // unit have flnk enemies
      for(let enemy of unit.figthAgainst.flank) {
        if(!enemy.isFighting) { // unit is getting out of combat
          return;
        }
        meleeAttack(unit, enemy, 'flank');
      }
    }
  }
}
