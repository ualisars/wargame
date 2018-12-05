import { randomizeMeleeDamage } from '../../../utils/random/meleeDamage';
import {
  calculateDamage,
  calculateDamageBaseOnEnemyPosition
} from '../damage';
import { armourPenetration } from '../armour';
import { removeUnit } from '../../remove';
import { Unit } from '../../types';
import { drawUnitIcon } from '../../../UI/battleUI/unitPanel/icon/drawUnitIcon';

export const meleeAttack = (attackUnit: Unit, defendUnit: Unit, enemyPosition:string='front') => {
  return new Promise(resolve => {
    let initialDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
    let meleeDamage = calculateDamage(attackUnit, initialDamage);
    if(meleeDamage < 1) meleeDamage = 1; // damage cannot be less than 1
    let damage = calculateDamageBaseOnEnemyPosition(meleeDamage, enemyPosition);
    let armour = defendUnit.armour;
    if(defendUnit.health <= 0) {
      console.error('defendUnit is destroyed');
      attackUnit.removeEnemyFromFightAgainst(defendUnit);
      drawUnitIcon(attackUnit);
      removeUnit(defendUnit);
      return;
    }
    defendUnit.health = Math.round(defendUnit.health - (armourPenetration(damage, armour)));
    attackUnit.condition -= 1;
    resolve();
  });
}
