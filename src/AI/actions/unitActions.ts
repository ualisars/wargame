import {
  computersUnits,
  playersUnits
} from '../../store/unitStore';

import {gridSize} from '../../map/mapSettings';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../utils/nodeUtils';
import {getDistanceBetweenTwoUnitsInGrids} from '../../utils/unitUtils';
import {deleteUnitFromArray} from '../../utils/unitUtils';

/*
  get closest computer's unit to specific node
*/
export const getClosestUnitToNode = (node:any):any => {
  let closestUnit:any = computersUnits[0];
  for(let i = 1; i < computersUnits.length; ++i) {
    let closestUnitDistance = getDistanceBetweenUnitAndNodeInGrids(closestUnit, node);
    let unitDistance = getDistanceBetweenUnitAndNodeInGrids(computersUnits[i], node);
    if(unitDistance < closestUnitDistance) {
      closestUnit = computersUnits[i];
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

export const getClosestUnitToOtherUnit = (unit:any, array:any[] = computersUnits):any => {
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
  let updatedComputersUnits = Object.assign([], computersUnits);
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
  let updatedComputersUnits = Object.assign([], computersUnits);
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

export const getNotFightingUnits = (exclusion:any[] = []):any[] => {
  let updatedComputersUnits = Object.assign([], computersUnits);
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
  let updatedPlayerUnits = Object.assign([], deleteUnitFromArray(unit, playersUnits));
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
  let updatedComputersUnits = Object.assign([], computersUnits);
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
  let updatedComputersUnits = Object.assign([], computersUnits);
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
  let updatedComputersUnits = Object.assign([], computersUnits);
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
