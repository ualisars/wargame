import {
  playersUnits,
  computersUnits
} from '../../store/unitStore';
import {gridSize} from '../../map/mapSettings';
import {map} from '../../map/createMap';
import {getNodeFromMap} from '../../path/drawPath';

export const analyzeUnit = (unit:any):any => {
  //console.log(calculateUnitsToBeware(unit));
  console.log('surrounded enemy power:', calculateSurroundedEnemyPower(unit));
}

export const analyzeUnits = ():any => {
  for(let unit of computersUnits) {
    console.log('surrounded enemy power:', calculateSurroundedEnemyPower(unit));
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
  for(let enemy of playersUnits) {
    for(let vulnerability of unit.vulnerableAgainst) {
      if(vulnerability === enemy.name) {
        unitsToBeware++;
      }
    }
  }
  return unitsToBeware;
}

/*
  return nodes that surround unit in some distance
*/
export const getSurroundedNodes = (unit:any, distance:number):any[] => {
  let nodes:any[] = [];
  let startX = unit.currentNode.x - (distance * gridSize);
  let finishX = unit.currentNode.x + (distance * gridSize);
  let startY = unit.currentNode.y - (distance * gridSize);
  let finishY = unit.currentNode.y + (distance * gridSize);
  for(let x = startX; x <= finishX; x += gridSize) {
    for(let y = startY; y <= finishY; y += gridSize) {
      let node = getNodeFromMap(x, y, map);
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
  console.log('nodes', nodes);
  for(let node of nodes) {
    for(let enemy of playersUnits) {
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
  console.log('nodes', nodes);
  for(let node of nodes) {
    for(let enemy of computersUnits) {
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
