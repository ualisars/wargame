import {randomizeMeleeDamage} from '../utils/randomGenerator';
import {
  units,
  removeUnit,
  playersUnits,
  computersUnits
} from '../store/unitStore';
import {
  ctx,
  gridSize
} from '../map/mapConfig';
import {isObjectEmpty, deleteObjectFromArray} from '../utils/objUtils';


export const checkUnitIsFighting = (unit:any) => {
  if(unit.isFighting) return true;
  return false;
}

export const meleeAttack = (attackUnit:any, defendUnit:any, enemyPosition:string='front') => {
  return new Promise(resolve => {
    let initialDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
    let meleeDamage = calculateDamage(attackUnit, initialDamage);
    if(meleeDamage < 1) meleeDamage = 1; // damage cannot be less than 1
    let damage = calculateDamageBaseOnEnemyPosition(meleeDamage, enemyPosition);
    let armour = defendUnit.armour;
    if(defendUnit.health < 1) {
      console.error('defendUnit is destryed');
      return;
    }
    defendUnit.health = Math.round(defendUnit.health - (armourPenetration(damage, armour)));
    console.error(attackUnit.name, 'damage = ', damage);
    console.error(defendUnit.name, 'health = ', defendUnit.health);
    attackUnit.condition -= 1;
    resolve();
  });
}


/*
  Go through all units and
  fire meleeAttack for all enemies that
  unit is currently fighting
*/
export const meleeCombat = () => {
  for(let unit of units) {
    if(!isObjectEmpty(unit.figthAgainst.front)) { // unit have front enemy
      console.error('Attack front enemy');
      meleeAttack(unit, unit.figthAgainst.front);
    }
    if(!isObjectEmpty(unit.figthAgainst.rear)) { // unit have rear enemy
      console.error('Attack rear enemy');
      meleeAttack(unit, unit.figthAgainst.rear);
    }
    if(unit.figthAgainst.flank.length > 0) { // unit have flnk enemies
      for(let enemy of unit.figthAgainst.flank) {
        console.error('Attack rear enemy');
        meleeAttack(unit, enemy);
      }
    }
  }
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

export const armourPenetration = (damage:number, armour:number) => {
  let random = Math.random();
  if(damage > armour) {
    if(random < 0.10) {
      return damage;
    }
    else if(damage < 0.1) {
      return Math.round(damage - (armour / 2));
    }
    else {
      return damage - armour;
    }
  }
  else if(damage <= armour) {
    if(random < 0.2) {
      return 1;
    } else {
      return 0;
    }
  }
}

export const checkHealth = () => {
  return new Promise(resolve => {
    for(let unit of units) {
      if(unit.health <= 0) { // unit is destroyed
        if(findUnitInFightAgainst(unit).length > 0) { // if unit is figthAgainst some enemies
          for(let enemy of findUnitInFightAgainst(unit)) { // delete this unit from all enemy's fighting
            enemy.removeEnemyFromFightAgainst(unit);
          }
        }
        removeUnit(unit);
        ctx.clearRect(unit.x, unit.y, gridSize, gridSize); // remove unit from the map
      }
    }
    resolve();
  });
}

export const findUnitInFightAgainst = (unit:any) => {
  let enemies:any[] = [];
  let findedUnits:any[] = [];
  if(unit.controlBy === 'computer') { // enemies for computer are playersUnits
    enemies = playersUnits;
  }
  else if(unit.controlBy === 'player') { // enemies for player are computersUnits
    enemies = computersUnits;
  }
  console.error('enemies', enemies);
  for(let enemy of enemies) {
    let figthAgainst = enemy.figthAgainst;
    if(figthAgainst.front.id === unit.id) { // unit is inside front
      console.error('unit', unit.name,'was found as front enemy of', enemy.name);
      findedUnits.push(enemy);
    }
    else if(figthAgainst.rear.id === unit.id) { // unit is finded as rear unit
      console.error('unit', unit.name,'was found as rear enemy of', enemy.name);
      findedUnits.push(enemy);
    }
    for(let flankUnit of figthAgainst.flank) {
      if(flankUnit.id === unit.id) { // unit is finded as flank unit
        console.error('unit', unit.name,'was found as flank enemy of', enemy.name);
        findedUnits.push(enemy);
      }
    }
  }
  if(findedUnits.length === 0) {
    console.error('unit is not found as enemy');
  }
  return findedUnits;
}
