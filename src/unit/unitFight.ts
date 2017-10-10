import {randomizeMeleeDamage} from '../utils/randomGenerator';

export const checkUnitIsFighting = (unit:any) => {
  if(unit.isFighting) return true;
  return false;
}

export const figthAgainst = (unit:any, opponent:any) => {

}

export const meeleAttack = (attackUnit:any, defendUnit:any) => {
  let initialDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
  let meleeDamage = calculateDamage(attackUnit, initialDamage);
  if(meleeDamage < 1) meleeDamage = 1; // damage cannot be less than 1
  let armour = defendUnit.armour;
  console.error('armour', armour);
  console.error('meeleeDamage', meleeDamage);
  defendUnit.health = defendUnit.health - (meleeDamage - armour);
  attackUnit.condition -= 1;
}

export const meleeCombat = (attackUnit:any, defendUnit:any) => {
  console.error('meeleCombat');
  if(!attackUnit.isFighting || !defendUnit.isFighting || attackUnit.health <= 0 || defendUnit.health <= 0) {
    console.log('not fighting anymore');
    return;
  }
  meeleAttack(attackUnit, defendUnit);
  meeleAttack(defendUnit, attackUnit);
  setInterval(() => {
    meleeCombat(attackUnit, defendUnit)
  }, 3000);
}

// calculate unit melee damage by unit's health and condition
export const calculateDamage = (attackUnit:any, damage:number) => {
  let health = attackUnit.health;
  let condition = attackUnit.condition;
  if(health >= 80 && condition >= 80) {
    return damage;
  }
  else if((health >= 80 && condition >= 50) || (condition >= 80 && health >= 50)) {
    return Math.round(0.9 * damage); // 90% of damage
  }
  else if(health >= 50 && condition >= 50) {
    return Math.round(0.8 * damage);
  }
  else if(health >= 50 || condition >= 50) {
    return Math.round(0.7 * damage);
  }
  else {
    return Math.round(0.6 * damage);
  }
}
