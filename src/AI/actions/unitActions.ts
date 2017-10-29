import {
  computersUnits
} from '../../store/unitStore';

import {gridSize} from '../../map/mapSettings';
import {
  getDistanceBetweenUnitAndNodeInGrids,
  getDistanceBetweenTwoUnitsInGrids
} from '../../utils/nodeUtils';
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
  let closestUnit:any = updatedComputersUnits[0];
  for(let i = 1; i < updatedComputersUnits.length; ++i) {
    let closestUnitDistance = getDistanceBetweenTwoUnitsInGrids(closestUnit, unit);
    let unitDistance = getDistanceBetweenTwoUnitsInGrids(computersUnits[i], unit);
    if(unitDistance < closestUnitDistance) {
      closestUnit = computersUnits[i];
    }
  }
  return closestUnit;
}

export const chooseFastestUnit = ():any => {

}

export const chooseStrongestUnit = ():any => {

}

export const chooseUnitWithMoreHealth = ():any => {

}

export const getNotFightingUnits = ():any[] => {
  let notFightingUnits:any[] = [];
  return notFightingUnits;
}
