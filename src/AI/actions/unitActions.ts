import {
  computersUnits
} from '../../store/unitStore';

import {gridSize} from '../../map/mapSettings';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../utils/nodeUtils';
import {getDistanceBetweenTwoUnitsInGrids} from '../../utils/unitUtils';
import {deleteUnitFromArray} from '../../utils/unitUtils';

export const getClosestToNodeUnit = (node:any):any => {
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

export const getClosestUnitToOtherUnit = (unit:any) => {
  let updatedComputersUnits = Object.assign([], deleteUnitFromArray(unit, computersUnits));
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

export const chooseUnitWithMoreHealth = ():any => {

}

export const getNotFightingUnits = ():any[] => {
  let notFightingUnits:any[] = [];
  return notFightingUnits;
}
