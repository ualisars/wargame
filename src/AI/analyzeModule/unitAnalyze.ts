import {
  playersUnits
} from '../../store/unitStore';
import {gridSize} from '../../map/mapSettings';
import {map} from '../../map/createMap';
import {getNodeFromMap} from '../../path/drawPath';

export const analyzeUnit = (unit:any):any => {
  console.log(calculateUnitsToBeware(unit));
}

/*
  Check advantages and disadvantages of the unit
  and decide whether the unit require support or not
*/
export const DoesUnitNeedProtection = (unit:any):boolean => {
  return false;
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
  Calculate how many player's units are nearby
  the computer units
*/
export const getSurroundedNodes = (unit:any, distance:number):any => {
  let nodes:any[] = [];
  let startX = unit.currentNode.x - (distance * gridSize);
  let finishX = unit.currentNode.x + (distance * gridSize);
  let startY = unit.currentNode.y - (distance * gridSize);
  let finishY = unit.currentNode.y + (distance * gridSize);
  for(let x = startX; x <= finishX; x += gridSize) {
    for(let y = startY; y <= finishY; y += gridSize) {
      let node = getNodeFromMap(x, y, map);
      nodes.push(node);
    }
  }
}
