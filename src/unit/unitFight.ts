import {randomizeMeleeDamage} from '../utils/randomGenerator';
import {
  units,
  removeUnit,
  playersUnits,
  computersUnits,
  spottedUnits,
  removeUnitFromSpottedUnits
} from '../store/unitStore';
import {
  ctx,
  gridSize
} from '../map/mapConfig';
import {isObjectEmpty, deleteObjectFromArray} from '../utils/objUtils';

/*
  Single time attack, that fires only when one unit
  has rushed in full speed into another
*/
export const charge = (attackUnit:any, defendUnit:any) => {
  let attackAngle = checkAttackAngle(attackUnit, defendUnit);
  console.error('attackAngle', attackAngle);
  let charge = calculateCharge(attackUnit, defendUnit, attackAngle);
  defendUnit.health = Math.round(defendUnit.health - charge);
}

export const meleeAttack = (attackUnit:any, defendUnit:any, enemyPosition:string='front') => {
  return new Promise(resolve => {
    let initialDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
    let meleeDamage = calculateDamage(attackUnit, initialDamage);
    if(meleeDamage < 1) meleeDamage = 1; // damage cannot be less than 1
    let damage = calculateDamageBaseOnEnemyPosition(meleeDamage, enemyPosition);
    let armour = defendUnit.armour;
    if(defendUnit.health < 1) {
      console.error('defendUnit is destroyed');
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
      meleeAttack(unit, unit.figthAgainst.front, 'front');
    }
    if(!isObjectEmpty(unit.figthAgainst.rear)) { // unit have rear enemy
      meleeAttack(unit, unit.figthAgainst.rear, 'rear');
    }
    if(unit.figthAgainst.flank.length > 0) { // unit have flnk enemies
      for(let enemy of unit.figthAgainst.flank) {
        meleeAttack(unit, enemy, 'flank');
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
        if(unit.controlBy === 'player') { // if unit is destroyed remove it from spottedUnits
          removeUnitFromSpottedUnits(unit);
          console.log('spottedUnits', spottedUnits);
        }
        if(findUnitInFightAgainst(unit).length > 0) { // if unit is figthAgainst some enemies
          for(let enemy of findUnitInFightAgainst(unit)) { // delete this unit from all enemy's fighting
            enemy.removeEnemyFromFightAgainst(unit);
          }
        }
        removeUnit(unit);
        ctx.clearRect(unit.x, unit.y, gridSize, gridSize); // remove unit from the map
      } else { // unit still alive
        isUnitFighting(unit);
        refreshment(unit);
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
  for(let enemy of enemies) {
    let figthAgainst = enemy.figthAgainst;
    if(figthAgainst.front.id === unit.id) { // unit is inside front
      findedUnits.push(enemy);
    }
    else if(figthAgainst.rear.id === unit.id) { // unit is finded as rear unit
      findedUnits.push(enemy);
    }
    for(let flankUnit of figthAgainst.flank) {
      if(flankUnit.id === unit.id) { // unit is finded as flank unit
        findedUnits.push(enemy);
      }
    }
  }
  return findedUnits;
}

/*
  Checks if unit is currently fighting
  with any enemies, if not fighting
  set isFighting property to false
*/
export const isUnitFighting = (unit:any) => {
  let isFighting = false;
  let figthAgainst = unit.figthAgainst;
  if(!isObjectEmpty(figthAgainst.front)) { // unit has enemy in front of it
    isFighting = true;
  }
  else if(!isObjectEmpty(figthAgainst.rear)) { // unit has an enemy from unit's back
    isFighting = true;
  }
  else if(figthAgainst.flank.length !== 0) { // unit has enemy on the side
    isFighting = true;
  }
  if(!isFighting) { // unit not fighting at that moment
    unit.setIsFightingToFalse(); // set isFighting property to false
  }
}

/*
  If unit is not moving and not fighting
  so increase unit's condition
*/
export const refreshment = (unit:any) => {
  if(!unit.isFighting && !unit.isMoving) {
    if(unit.condition < 100) { // condition cannot be more than 100
      unit.increaseCondition(1);
    }
  }
}

/*
  Check in what side of the enemy attack will
  be pointed(front, side, rear)
*/
export const checkAttackAngle = (unit:any, enemy:any) => {
  let enemyCurrNode = enemy.currentNode;
  let unitNode = unit.currentNode;
  if(enemy.figthAgainst.front.id === unit.id) {
    return 'front';
  }

  else if(!enemy.isFighting && enemy.isMoving) { // enemy not fighting but moving
    let enemyNextNode = enemy.nextNode;
    if(enemyNextNode.x === unitNode.x && enemyNextNode.y === unitNode.y) { // enemy in fromt on unit
     return 'front';
    }
    else if(enemyNextNode.x - unitNode.x > gridSize || enemyNextNode.y - unitNode.y > gridSize) { // enemy is going to the other side than unit
      return 'back';
    }
    return 'side';
  }

  else if(enemy.isFighting) { // enemy is fighting
    let frontUnitNode = enemy.figthAgainst.front.currentNode;
    if(unitNode.x === enemyCurrNode.x && unitNode.x === frontUnitNode.x) { // units standing in line
      return 'back';
    }
    else if(unitNode.y === enemyCurrNode.y && unitNode.y === frontUnitNode.y) { //units standing in line
      return 'back';
    }
    // unit is standing in diagonal line, so position is back
    else if(Math.abs(frontUnitNode.x - enemyCurrNode.x) === gridSize && Math.abs(frontUnitNode.x - unitNode.x) === gridSize * 2) {
      return 'back';
    }
    else if(Math.abs(frontUnitNode.y - enemyCurrNode.y) === gridSize && Math.abs(frontUnitNode.y - unitNode.y) === gridSize * 2) {
      return 'back';
    }
    else {
      return 'side';
    }
  }
}

/*
  calculate charge based on position
  of the enemy
*/
export const calculateCharge = (unit:any, enemy:any, chargePosition:string) => {
  if(chargePosition === 'front') {
    let initialCharge = unit.charge - enemy.armour;
    if(initialCharge < 1) {
      return calculateDamageWhenItsLessThanOne(initialCharge);
    }
    return initialCharge;
  }
  else if(chargePosition === 'side') {
    let initialCharge = (unit.charge * 1.5) - enemy.armour;
    if(initialCharge < 1) {
      return calculateDamageWhenItsLessThanOne(initialCharge);
    }
    return initialCharge;
  }
  else if(chargePosition === 'back') {
    return unit.charge; // back of the unit charge calculated without enemy's armour
  }
}
