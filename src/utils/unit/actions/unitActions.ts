import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';

import {gridSize} from '../../../config/map';
import {
  getDistanceBetweenTwoUnitsInGrids,
  deleteUnitFromArray
} from '../utils';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../node';
/*
  get closest computer's unit to specific node
*/
export const getClosestUnitToNode = (node:any):any => {
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

/*
  get closestNode from nodes array to specific unit
*/
export const getClosestNodeToUnit = (unit:any, nodes:any):any => {
  let closestNode:any = nodes[0];
  for(let i = 1; i < nodes.length; ++i) {
    let closestNodeDistance = getDistanceBetweenUnitAndNodeInGrids(unit, closestNode);
    let nodeDistance = getDistanceBetweenUnitAndNodeInGrids(unit, nodes[i]);
    if(nodeDistance < closestNodeDistance) {
      closestNode = nodes[i];
    }
  }
  return closestNode;
}

export const getClosestUnitToOtherUnit = (unit:any, array:any[] = computerUnits):any => {
  let updatedComputersUnits = Object.assign([], deleteUnitFromArray(unit, array));
  if(updatedComputersUnits.length === 0) { // only one unit remained
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
  if(exclusion.length !== 0) { // delete exceptional units from searhing
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
  if(exclusion.length !== 0) { // delete exceptional units from searhing
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
  if(exclusion.length !== 0) { // delete exceptional units from searhing
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

export const getWorstEnemyByProperty = (property:string, exclusion:any[] = []):any => {
  let updatedPlayerUnits = Object.assign([], playerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
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

export const getNotFightingUnits = (exclusion:any[] = []):any[] => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let notFightingUnits:any[] = [];
  for(let unit of updatedComputersUnits) {
    if(!unit.isFighting) {
      notFightingUnits.push(unit);
    }
  }
  return notFightingUnits;
}

export const getClosestEnemyToUnit = (unit:any) => {
  let updatedPlayerUnits = Object.assign([], deleteUnitFromArray(unit, playerUnits));
  if(updatedPlayerUnits.length === 0) { // only one unit remained
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

export const getFreeUnits = (exclusion:any[] = []):any => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let freeUnits:any[] = [];
  for(let unit of updatedComputersUnits) {
    if(!unit.task) {
      freeUnits.push(unit);
    }
  }
  return freeUnits;
}

export const getUnitsByTask = (task:string, exclusion:any[] = []):any => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let units:any[] = [];
  for(let unit of updatedComputersUnits) {
    if(unit.task === task) {
      units.push(unit);
    }
  }
  return units;
}

export const getUnitsByPropertyValue = (property:string, value:any, exclusion:any[]=[]):any[] => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let units:any[] = [];
  for(let unit of updatedComputersUnits) {
    if(unit[property] === value) {
      units.push(unit);
    }
  }
  return units;
}

/*
  return total number of scouts
*/
export const getScoutsNumber = () => {
  for(let unit of computerUnits) {
      let scouts = getUnitsByTask('exploration');
      return scouts.length;
  }
}

export const getUnitById = (id:number, units:any[]):any => {
  for(let unit of units) {
    if(id === unit.id) {
      return unit;
    }
  }
}
