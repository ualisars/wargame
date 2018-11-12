import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';
import {
  getDistanceBetweenTwoUnitsInGrids,
  deleteUnitFromArray
} from '../general';
import { getDistanceBetweenUnitAndNodeInGrids } from '../../node';
import Unit from '../../../unit/types/Unit';


export const getClosestUnitToNode = (node:any): Unit => {
  let closestUnit:any = computerUnits[0];
  for(let i = 1; i < computerUnits.length; ++i) {
    let closestUnitDistance = getDistanceBetweenUnitAndNodeInGrids(closestUnit, node);
    let unitDistance = getDistanceBetweenUnitAndNodeInGrids(computerUnits[i], node);
    if(unitDistance < closestUnitDistance) {
      closestUnit = computerUnits[i];
    }
  }
  return closestUnit;
}

export const getClosestUnitToOtherUnit = (unit:Unit, units:Unit[] = computerUnits):any => {
  let updatedComputersUnits = Object.assign([], deleteUnitFromArray(unit, units));
  if(updatedComputersUnits.length === 0) {
    return unit;
  }
  let closestUnit:any = updatedComputersUnits[0];
  for(let i = 1; i < updatedComputersUnits.length; ++i) {
    let closestUnitDistance = getDistanceBetweenTwoUnitsInGrids(closestUnit, unit);
    let unitDistance = getDistanceBetweenTwoUnitsInGrids(updatedComputersUnits[i], unit);
    if(unitDistance < closestUnitDistance) {
      closestUnit = updatedComputersUnits[i];
    }
  }
  return closestUnit;
}

export const getBestUnitByProperty = (property:string, exclusion:any[] = []):any => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let bestUnit = updatedComputersUnits[0];
  for(let i = 0; i < updatedComputersUnits.length; ++i) {
    if(bestUnit[property] < updatedComputersUnits[i][property]) {
      bestUnit = updatedComputersUnits[i];
    }
  }
  return bestUnit;
}

export const getWorstUnitByProperty = (property:string, exclusion:any[] = []):any => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let worstUnit = updatedComputersUnits[0];
  for(let i = 0; i < updatedComputersUnits.length; ++i) {
    if(worstUnit[property] > updatedComputersUnits[i][property]) {
      worstUnit = updatedComputersUnits[i];
    }
  }
  return worstUnit;
}

export const getBestEnemyByProperty = (property:string, exclusion:any[] = []):any => {
  let updatedPlayerUnits = Object.assign([], playerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedPlayerUnits = deleteUnitFromArray(unit, updatedPlayerUnits);
    }
  }
  if(updatedPlayerUnits.length === 0) {
    return null;
  }
  let bestUnit = updatedPlayerUnits[0];
  for(let i = 0; i < updatedPlayerUnits.length; ++i) {
    if(bestUnit[property] < updatedPlayerUnits[i][property]) {
      bestUnit = updatedPlayerUnits[i];
    }
  }
  return bestUnit;
}

export const getWorstEnemyByProperty = (property:string, exclusion:Unit[] = []):Unit => {
  let updatedPlayerUnits = Object.assign([], playerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedPlayerUnits = deleteUnitFromArray(unit, updatedPlayerUnits);
    }
  }
  if(updatedPlayerUnits.length === 0) {
    return null;
  }
  let worstUnit = updatedPlayerUnits[0];
  for(let i = 0; i < updatedPlayerUnits.length; ++i) {
    if(worstUnit[property] > updatedPlayerUnits[i][property]) {
      worstUnit = updatedPlayerUnits[i];
    }
  }
  return worstUnit;
}

export const getNotFightingUnits = (exclusion:Unit[] = []):Unit[] => {
  let updatedComputerUnits:Unit[] = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputerUnits = deleteUnitFromArray(unit, updatedComputerUnits);
    }
  }
  if(updatedComputerUnits.length === 0) {
    return null;
  }
  let notFightingUnits:Unit[] = [];
  for(let unit of updatedComputerUnits) {
    if(!unit.isFighting) {
      notFightingUnits.push(unit);
    }
  }
  return notFightingUnits;
}

export const getClosestEnemyToUnit = (unit:Unit) => {
  let updatedPlayerUnits = Object.assign([], deleteUnitFromArray(unit, playerUnits));
  if(updatedPlayerUnits.length === 0) {
    return null;
  }
  let closestUnit:any = updatedPlayerUnits[0];
  for(let i = 1; i < updatedPlayerUnits.length; ++i) {
    let closestUnitDistance = getDistanceBetweenTwoUnitsInGrids(closestUnit, unit);
    let unitDistance = getDistanceBetweenTwoUnitsInGrids(updatedPlayerUnits[i], unit);
    if(unitDistance < closestUnitDistance) {
      closestUnit = updatedPlayerUnits[i];
    }
  }
  return closestUnit;
}

export const getFreeUnits = (exclusion:Unit[] = []):Unit[] => {
  let updatedComputersUnits:Unit[] = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let freeUnits:Unit[] = [];
  for(let unit of updatedComputersUnits) {
    if(!unit.task) {
      freeUnits.push(unit);
    }
  }
  return freeUnits;
}

export const getUnitsByTask = (task:string, exclusion:Unit[] = []):Unit[] => {
  let updatedComputersUnits:Unit[] = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let units:Unit[] = [];
  for(let unit of updatedComputersUnits) {
    if(unit.task === task) {
      units.push(unit);
    }
  }
  return units;
}

export const getUnitsByPropertyValue = (property:string, value:any, exclusion:Unit[]=[]):Unit[] => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let units:Unit[] = [];
  for(let unit of updatedComputersUnits) {
    if(unit[property] === value) {
      units.push(unit);
    }
  }
  return units;
}

export const getUnitsWhereValue = (property:string, operator:string, value:any, exclusion:Unit[] = []):Unit[] => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) {
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }

  let units:Unit[] = [];
  for(let unit of updatedComputersUnits) {
    operator.toLowerCase();
    if(operator === '=' || operator === 'equal' || operator === '==' || operator === '===') {
      if(unit[property] == value) {
        units.push(unit);
      }
    }
    else if(operator === '>' || operator === 'greater') {
      if(unit[property] > value) {
        units.push(unit);
      }
    }
    else if(operator === '>=' || operator === '>==' || operator === 'greaterOrEqual') {
      if(unit[property] >= value) {
        units.push(unit);
      }
    }
    else if(operator === '<' || operator === 'less') {
      if(unit[property] < value) {
        units.push(unit);
      }
    }
    else if(operator === '<=' || operator === '<==' || operator === 'lessOrEqual') {
      if(unit[property] <= value) {
        units.push(unit);
      }
    }
  }
  return units;
}

export const getDangerousUnits = (unit: Unit): Unit[] => {
  let enemies: Unit[] = [];
  let dangerousEnemies: Unit[] = [];
  if(unit.controlBy === 'computer') {
    enemies = Object.assign([], playerUnits);
  } 
  else if(unit.controlBy === 'player') {
    enemies = Object.assign([], computerUnits);
  }

  for(let enemy of enemies) {
    for(let dangerousEnemy of unit.vulnerableAgainst) {
      if(enemy.name == dangerousEnemy) {
        dangerousEnemies.push(enemy);
        break;
      }
    }
  }
  
  return dangerousEnemies;
}

export const containsDangerousUnits = (unit: Unit, units: Unit[]): boolean => {
  for(let enemy of units) {
    for(let dangerousEnemy of unit.vulnerableAgainst) {
      if(enemy.name == dangerousEnemy) {
        return true;
      }
    }
  }
  return false;
}

export const isEnemyDangerousForUnit = (unit: Unit, enemy: Unit) => {
  for(let dangerousEnemy of unit.vulnerableAgainst) {
    if(enemy.name == dangerousEnemy) {
      return true;
    }
  }
  return false;
}

export const isEnemyVulnerableToUnit = (unit: Unit, enemy: Unit) => {
  for(let vulnerableEnemy of unit.advantageOver) {
    if(enemy.name == vulnerableEnemy) {
      return true;
    }
  }
  return false;
}

export const getScoutsNumber = ():number => {
  for(let unit of computerUnits) {
      let scouts:Unit[] = getUnitsByTask('exploration');
      return scouts.length;
  }
}
