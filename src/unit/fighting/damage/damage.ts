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

export const calculateDamageBaseOnEnemyPosition = (damage:number, enemyPosition:string) => {
  if(damage <= 1) {
    return calculateDamageWhenItsLessThanOne(damage);
  }
  if(enemyPosition === 'front') { // front enemy gain 100% damage
    return damage;
  }
  else if(enemyPosition === 'flank') { // flank enemy gain only 30% damage
    let initialDamage =  Math.round(damage * 0.3);
    if(initialDamage <= 1) {
      return calculateDamageWhenItsLessThanOne(initialDamage);
    }
    return initialDamage;
  }
  else if(enemyPosition === 'rear') {
    let initialDamage =  Math.round(damage * 0.1); // back enemy gain only 10% of damage
    if(initialDamage <= 1) {
      return calculateDamageWhenItsLessThanOne(initialDamage);
    }
    return initialDamage;
  }
}

export const calculateDamageWhenItsLessThanOne = (damage:number) => {
  let random = Math.random();
  if(random > 0.5) {
    return 0;
  } else {
    return 1;
  }
}
