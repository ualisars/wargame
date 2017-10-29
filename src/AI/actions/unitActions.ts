import {
  computersUnits
} from '../../store/unitStore';

import {gridSize} from '../../map/mapSettings';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../utils/nodeUtils';

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

export const chooseNearestUnitToOtherUnit = (unit:any) => {

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
