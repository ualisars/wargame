import {randomizeMeleeDamage} from '../../../utils/random/meleeDamage';
import {
  calculateDamage,
  calculateDamageBaseOnEnemyPosition
} from '../damage';
import {armourPenetration} from '../armour';
import { removeFromUnits } from '../../../store/unit/units';

export const meleeAttack = (attackUnit:any, defendUnit:any, enemyPosition:string='front') => {
  return new Promise(resolve => {
    let initialDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
    let meleeDamage = calculateDamage(attackUnit, initialDamage);
    if(meleeDamage < 1) meleeDamage = 1; // damage cannot be less than 1
    let damage = calculateDamageBaseOnEnemyPosition(meleeDamage, enemyPosition);
    let armour = defendUnit.armour;
    if(defendUnit.health < 1) {
      console.error('defendUnit is destroyed');
      removeFromUnits(defendUnit);
      attackUnit.removeEnemyFromFightAgainst(defendUnit);
      return;
    }
    defendUnit.health = Math.round(defendUnit.health - (armourPenetration(damage, armour)));
    attackUnit.condition -= 1;
    resolve();
  });
}
