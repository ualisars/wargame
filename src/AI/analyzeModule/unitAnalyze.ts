import {
  playerUnits,
  computerUnits
} from '../../store/unitStore';
import {gridSize} from '../../map/mapSettings';
import {map} from '../../map/createMap';
import {getNodeFromMap} from '../../path/drawPath';
import {
  playerPower,
  computerPower
} from './powerAnalyze';
import {
  calculateTotalPower
} from '../analyzeModule/powerAnalyze';

export const analyzeUnit = (unit:any):any => {
  //console.log(calculateUnitsToBeware(unit));
  //console.log('surrounded enemy power:', calculateSurroundedEnemyPower(unit));
}

export const analyzeUnits = ():any => {
  for(let unit of computerUnits) {
    //console.log('surrounded enemy power:', calculateSurroundedEnemyPower(unit));
  }
}

export const assignProtector = (unit:any) => {

}

/*
  if player's units are dangerous for
  the unit, it will increase total number of
  the unitsToBeware
*/
export const calculateUnitsToBeware = (unit:any):number => {
  let unitsToBeware:number = 0;
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

/*
  return nodes that surround unit in some distance
*/
export const getSurroundedNodes = (unit:any, distance:number):any[] => {
  //console.log('getSurroundedNodes');
  let nodes:any[] = [];
  let startX = unit.currentNode.x - (distance * gridSize);
  let finishX = unit.currentNode.x + (distance * gridSize);
  let startY = unit.currentNode.y - (distance * gridSize);
  let finishY = unit.currentNode.y + (distance * gridSize);
  for(let y = startY; y <= finishY; y += gridSize) {
    for(let x = startX; x <= finishX; x += gridSize) {
      // console.log('unit x:', unit.currentNode.x, 'y:', unit.currentNode.y);
      // console.log('x:', x, 'y:', y);
      let node = getNodeFromMap(x, y, map);
      //console.log('node:', node);
      if(node) {
          nodes.push(node);
      }
    }
  }
  return nodes;
}

export const getSurroundedEnemies = (unit:any):any[] => {
  let surroundedEnemies:any[] = [];
  let nodes = getSurroundedNodes(unit, 3);
  //console.log('nodes', nodes);
  for(let node of nodes) {
    for(let enemy of playerUnits) {
      if(node.x === enemy.x && node.y === enemy.y) {
        surroundedEnemies.push(enemy);
      }
    }
  }
  return surroundedEnemies;
}

export const getSurroundedAllies = (unit:any):any[] => {
  let surroundedAllies:any[] = [];
  let nodes = getSurroundedNodes(unit, 3);
  //console.log('nodes', nodes);
  for(let node of nodes) {
    for(let enemy of computerUnits) {
      if(node.x === enemy.x && node.y === enemy.y) {
        surroundedAllies.push(enemy);
      }
    }
  }
  return surroundedAllies;
}

/*
  Calculate how many player's units and their power nearby
  the computer units
*/
export const calculateSurroundedEnemyPower = (unit:any) => {
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
export const calculateSurroundedAlliesPower = (unit:any) => {
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

export const calculatePowerAdvantageInTheArea = (unit:any) => {
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

export const calculateUnitTypes = ():any => {
  let types:any = {
    infantry: 0,
    spearmen: 0,
    lightInfantry: 0,
    heavyInfantry: 0,
    scouts: 0,
    skirmishers: 0,
    cavalry: 0
  }
  for(let unit of computerUnits) {
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

/*
  calculate units' types in percentage
  e.g cavalry - 30%, infantry: 40% etc
*/
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
