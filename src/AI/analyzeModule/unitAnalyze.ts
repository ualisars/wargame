import { playerPower } from '../../store/AI/power/playerPower';
import { computerPower } from '../../store/AI/power/computerPower';
import {
  playerUnits,
  computerUnits
} from '../../store/unit/units';
import { revealedUnits } from '../../store/AI/enemies/revealedEnemies';
import {
  getSurroundedAllies,
  getSurroundedEnemies
} from '../../utils/surrounded';
import { Unit } from '../../unit';

export const calculateUnitsToBeware = (unit: Unit):number => {
  let unitsToBeware: number = 0;
  if(playerUnits.length !== 0) {
    for(let enemy of playerUnits) {
      if(unit.vulnerableAgainst.length !== 0) {
        for(let vulnerability of unit.vulnerableAgainst) {
          if(vulnerability === enemy.name) {
            unitsToBeware++;
          }
        }
      }
    }
  }
  return unitsToBeware;
}

export const calculateSurroundedEnemyPower = (unit: Unit) => {
  let power = {
    health: 0,
    speed: 0,
    armour: 0,
    meleeDamage: 0,
    missileDamage: 0,
    morale: 0,
    condition: 0
  }
  let surroundedEnemies = getSurroundedEnemies(unit);
  if(surroundedEnemies.length !== 0) {
    for(let enemy of surroundedEnemies) {
      power.health += enemy.health;
      power.speed += enemy.speed;
      power.armour += enemy.armour;
      power.meleeDamage += enemy.meleeDamage;
      power.missileDamage += enemy.missileDamage;
      power.morale += enemy.morale;
      power.condition += enemy.condition;
    }
  }
  return power;
}

/*
  Calculate how many player's units and their power nearby
  the computer units
*/
export const calculateSurroundedAlliesPower = (unit: Unit) => {
  let power = {
    health: 0,
    speed: 0,
    armour: 0,
    meleeDamage: 0,
    missileDamage: 0,
    morale: 0,
    condition: 0
  }
  let surroundedAllies = getSurroundedAllies(unit);
  if(surroundedAllies.length !== 0) {
    for(let enemy of surroundedAllies) {
      power.health += enemy.health;
      power.speed += enemy.speed;
      power.armour += enemy.armour;
      power.meleeDamage += enemy.meleeDamage;
      power.missileDamage += enemy.missileDamage;
      power.morale += enemy.morale;
      power.condition += enemy.condition;
    }
  }
  return power;
}

/*
  Calculate the difference between computer's and
  player's power in the small area
*/

export const calculatePowerAdvantageInTheArea = (unit: Unit) => {
  let playerPower = calculateSurroundedEnemyPower(unit);
  let computerPower = calculateSurroundedAlliesPower(unit);
  let health = computerPower.health - playerPower.health;
  let speed = computerPower.speed - playerPower.speed;
  let armour = computerPower.armour - playerPower.armour;
  let meleeDamage = computerPower.meleeDamage - playerPower.meleeDamage;
  let missileDamage = computerPower.missileDamage - playerPower.missileDamage;
  let condition = computerPower.condition - playerPower.condition;
  let morale = computerPower.morale - playerPower.morale;
  return {
    health,
    speed,
    armour,
    meleeDamage,
    missileDamage,
    condition,
    morale
  }
}

export const calculateUnitTypes = (side:string='computer'):any => {
  let types:any = {
    infantry: 0,
    spearmen: 0,
    lightInfantry: 0,
    heavyInfantry: 0,
    scouts: 0,
    skirmishers: 0,
    cavalry: 0
  }

  let units:Unit[];

  if(side === 'computer') {
    units = Object.assign([], computerUnits);
  } 
  else if(side === 'revealed') {
    units = Object.assign([], revealedUnits);
  }
  else if(side === 'player') {
    units = Object.assign([], playerUnits);
  } else {
    throw new Error('incorrect side argument');
  }

  for(let unit of units) {
    if(unit.type === 'infantry' || unit.type === 'spearmen' || unit.type === 'scouts') {
      types.infantry += 1;
    }
    if(unit.type === 'spearmen') {
      types.spearmen += 1;
    }
    if(unit.type === 'infantry' && unit.name !== 'HeavyInfantry') {
      types.lightInfantry += 1;
    }
    if(unit.name === 'HeavyInfantry') {
      types.heavyInfantry += 1;
    }
    if(unit.type === 'scouts') {
      types.scouts += 1;
    }
    if(unit.type === 'skirmishers') {
      types.skirmishers += 1;
    }
    if(unit.type === 'cavalry') {
      types.cavalry += 1;
    }
  }
  
  return types;
}

export const getUnitTypesInPercentage = ():any => {
  let percentage = {
    infantry: 0,
    spearmen: 0,
    lightInfantry: 0,
    heavyInfantry: 0,
    scouts: 0,
    skirmishers: 0,
    cavalry: 0
  }
  let types = calculateUnitTypes();
  let totalUnits = computerUnits.length;
  percentage.infantry = Math.round((types.infantry / totalUnits) * 100);
  percentage.spearmen = Math.round((types.spearmen / totalUnits) * 100);
  percentage.lightInfantry = Math.round((types.lightInfantry / totalUnits) * 100);
  percentage.heavyInfantry = Math.round((types.heavyInfantry / totalUnits) * 100);
  percentage.scouts = Math.round((types.scouts / totalUnits) * 100);
  percentage.skirmishers = Math.round((types.skirmishers / totalUnits) * 100);
  percentage.cavalry = Math.round((types.cavalry / totalUnits) * 100);
  return percentage;
}

export const getInitialPropeties = ():any => {
  return {
    initialNumberOfUnits: computerUnits.length,
    initialNumberOfEnemies: playerUnits.length,
    initialUnitsHealth: computerPower.totalHealth,
    initialEnemiesHealth: playerPower.totalHealth
  }
}
