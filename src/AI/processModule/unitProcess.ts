import {
  getSurroundedEnemies,
  calculateSurroundedEnemyPower,
  getSurroundedAllies,
  calculateSurroundedAlliesPower,
  calculatePowerAdvantageInTheArea
} from '../analyzeModule/unitAnalyze';

import {
  getUnitsMaxProperty,
  getUnitsMinProperty
} from '../../unit/unitUtils';

/*
  (DoesUnitNeedProtection)
  Check advantages and disadvantages of the unit
  and decide whether the unit require support or not
  Unit need protection if
  1. Player has unit that is dangerous for this unit(e.g unit is archer,
    but player has cavalry in the roster)
  2. Unit is not mobile and vulnerable for flank attack
*/
export const DoesUnitNeedProtection = (unit:any):boolean => {
  let numberOfEnemies:number = getSurroundedEnemies(unit).length;
  let numberOfAllies:number = getSurroundedAllies(unit).length;
  if(numberOfEnemies === numberOfAllies) { // in this area computer and player has equal number of units
    let {health, speed, armour, meleeDamage, missileDamage, condition} = calculatePowerAdvantageInTheArea(unit);
    if(health < 0 && meleeDamage < 0 && armour < 0 && condition < 0) {
      return true;
    }
  }
  return false;
}
/*
  (DoesUnitNeedHelp)
  Unit need help if:
  1. Player has more units nearby
  2. Player has more total power nearby this specific unit
  3. Unit is flanked
  return value is range from 0 to 1,
  0 unit does not need any help
  1 - unit need help urgently
*/
export const DoesUnitNeedHelp = (unit:any):number => {
  return 0;
}

export const possibilityToDestroyEnemy = (unit:any, enemy:any) => {
  let possibility:string;
  let unitHealth = unit.health;
  let enemyHealth = enemy.health;
  let unitDamage = unit.meleeDamage - enemy.armour;
  let enemyDamage = enemy.meleeDamage - unit.armour;
  let unitAttemps = Math.floor(enemyHealth / unitDamage); // how many strikes does unit need to destroy enemy
  let enemyAttemps = Math.floor(unitHealth / enemyDamage); // how many strikes does enemy need to destroy unit
  if(unitAttemps - enemyAttemps >= -2 && unitAttemps - enemyAttemps < 3) {
    possibility = 'medium';
  }
  else if(unitAttemps - enemyAttemps >= 3 && unitAttemps - enemyAttemps < 8) {
    possibility = 'high';
  }
  else if(unitAttemps - enemyAttemps >= 8) {
    possibility = 'very high';
  }
  else if(unitAttemps - enemyAttemps <= -3 && unitAttemps - enemyAttemps > -8) {
      possibility = 'low';
  }
  else if(unitAttemps - enemyAttemps <= -8) {
    possibility = 'very low';
  }
}

export const chanceUnitToFlee = (unit:any) => {
  let unitSpeed = unit.speed;
  let surroundedEnemies = getSurroundedEnemies(unit);
  for(let enemy of surroundedEnemies) {
    
  }
}
