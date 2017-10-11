import {randomizeMeleeDamage} from '../utils/randomGenerator';

export const checkUnitIsFighting = (unit:any) => {
  if(unit.isFighting) return true;
  return false;
}

export const figthAgainst = (unit:any, opponent:any) => {

}

export const meleeAttack = (attackUnit:any, defendUnit:any) => {
  return new Promise(resolve => {
    let initialDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
    let meleeDamage = calculateDamage(attackUnit, initialDamage);
    if(meleeDamage < 1) meleeDamage = 1; // damage cannot be less than 1
    let armour = defendUnit.armour;
    defendUnit.health = defendUnit.health - (meleeDamage - armour);
    console.error(attackUnit.name, 'damage = ', meleeDamage);
    console.error(defendUnit.name, 'health = ', defendUnit.health);
    attackUnit.condition -= 1;
    resolve();
  });
}

export const meleeCombat = (attackUnit:any, defendUnit:any, i:number) => {
  if(i >= 10) return;
  if(!attackUnit) { // attackUnit is destroyed
    return;
  }
  if(!defendUnit) { // defendUnit is destroyed
    return;
  }
  console.error('meeleCombat');
  if(!attackUnit.isFighting || !defendUnit.isFighting || attackUnit.health <= 0 || defendUnit.health <= 50) {
    console.log('not fighting anymore');
    return;
  }
  // Promise.all([meeleAttack(attackUnit, defendUnit), meeleAttack(defendUnit, attackUnit)])
  meleeAttack(attackUnit, defendUnit)
  .then(() => {
    i++;
    console.error('i', i);
    setInterval(() => {
      meleeCombat(attackUnit, defendUnit, i)
    }, 3000);
  });
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
