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
import Unit from '../../../unit/types/Unit';
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

export const getBestUnitsByProperty = (units:Unit[], property:string):Unit[] => {
  let updatedUnits:any[] = Object.assign([], units);
  let bestUnits:Unit[] = [];
  let bestUnit:any = updatedUnits[0];
  // get best unit
  for(let i = 0; i < updatedUnits.length; ++i) {
    if(bestUnit[property] < updatedUnits[i][property]) {
      bestUnit = updatedUnits[i];
    }
  }
  // find all best units
  for(let unit of updatedUnits) {
      if(unit[property] === bestUnit[property]) {
        bestUnits.push(unit);
      }
  }
  return bestUnits;
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

/*
  return Units that are closest to the node center
*/
export const findClosestUnitsToTheNodeCenter = (node:any, units:Unit):Unit[] => {
  let updatedUnits:Unit[] = Object.assign([], units);
  // calculate the center of the node
  const centerX:number = node.x + (gridSize * 0.5);
  const centerY:number = node.y + (gridSize * 0.5);
  // find closest units
  let closestUnits:Unit[] = [];
  let closestDistance:number;
  let closestUnit:Unit = updatedUnits[0];
  if(updatedUnits.length > 1) { // more than 1 unit
    for(let i = 1; i < updatedUnits.length; ++i) {
      const closestUnitX:number = closestUnit.x;
      const closestUnitY:number = closestUnit.y;
      const currentUnitX:number = updatedUnits[i].x;
      const currentUnitY:number = updatedUnits[i].y;

      // find difference in X and Y
      const closestUnitDX:number = Math.abs(closestUnitX - centerX);
      const closestUnitDY:number = Math.abs(closestUnitY - centerY);
      const currentUnitDX:number = Math.abs(currentUnitX - centerX);
      const currentUnitDY:number = Math.abs(currentUnitY - centerY);

      // find distance
      const closestUnitDist:number = Math.sqrt(Math.pow(closestUnitDX, 2) + Math.pow(closestUnitDY, 2));
      const currentUnitDist:number = Math.sqrt(Math.pow(currentUnitDX, 2) + Math.pow(currentUnitDY, 2));
      closestDistance = closestUnitDist;
      // compare distance
      if(currentUnitDist < closestUnitDist) {
        // now current unit has become closest unit
        closestUnit = updatedUnits[i];
        closestDistance = currentUnitDist;
      }
    }

    // now add all units with the closestDistance to closestUnits
    for(let unit of updatedUnits) {
      const currentUnitX:number = unit.x;
      const currentUnitY:number = unit.y;

      // find difference in X and Y
      const currentUnitDX:number = Math.abs(currentUnitX - centerX);
      const currentUnitDY:number = Math.abs(currentUnitY - centerY);

      // find distance
      const currentUnitDist:number = Math.sqrt(Math.pow(currentUnitDX, 2) + Math.pow(currentUnitDY, 2));
      if(currentUnitDist === closestDistance) {
        closestUnits.push(unit);
      }
    }
  }

  return closestUnits;
}
