/**
  * @file
  * Provides frequently used functions
  * required for AI
  *
  *
*/

import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';
import {
  getDistanceBetweenTwoUnitsInGrids,
  deleteUnitFromArray
} from '../utils';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../node';
import Unit from '../../../unit/types/Unit';

/*
  get closest computer's unit to specific node
*/
export const getClosestUnitToNode = (node:any):Unit => {
  /**
    * The getClosestUnitToNode definition.
    *
    * @param {any} node - Node from which distance will be calculated.
    */
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

export const getWorstEnemyByProperty = (property:string, exclusion:Unit[] = []):Unit => {
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
}

export const getNotFightingUnits = (exclusion:Unit[] = []):Unit[] => {
  let updatedComputersUnits:Unit[] = Object.assign([], computerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
    for(let unit of exclusion) {
      updatedComputersUnits = deleteUnitFromArray(unit, updatedComputersUnits);
    }
  }
  if(updatedComputersUnits.length === 0) {
    return null;
  }
  let notFightingUnits:Unit[] = [];
  for(let unit of updatedComputersUnits) {
    if(!unit.isFighting) {
      notFightingUnits.push(unit);
    }
  }
  return notFightingUnits;
}

export const getClosestEnemyToUnit = (unit:Unit) => {
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

export const getFreeUnits = (exclusion:Unit[] = []):Unit[] => {
  let updatedComputersUnits:Unit[] = Object.assign([], computerUnits);
  if(exclusion.length !== 0) { // delete exceptional units from searhing
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
  if(exclusion.length !== 0) { // delete exceptional units from searhing
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
