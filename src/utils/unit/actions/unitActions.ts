import {
  computerUnits,
  playerUnits,
  units
} from '../../../store/unit/units';

import {gridSize} from '../../../config/map';
import {
  getDistanceBetweenTwoUnitsInGrids,
  deleteUnitFromArray
} from '../utils';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../node';
import Unit from '../../../unit/types/Unit';


/*
  get closestNode from nodes array to specific unit
*/
export const getClosestNodeToUnit = (unit:Unit, nodes:any):any => {
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

/*
  return Units that are closest to the node center
*/
export const findClosestUnitsToTheNodeCenter = (node:any, units:Unit[]):Unit[] => {
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
      const closestUnitX:number = closestUnit.centerX;
      const closestUnitY:number = closestUnit.centerY;
      const currentUnitX:number = updatedUnits[i].centerX;
      const currentUnitY:number = updatedUnits[i].centerY;

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
  }

  // now add all units with the closestDistance to closestUnits
  for(let unit of updatedUnits) {
    const currentUnitX:number = unit.centerX;
    const currentUnitY:number = unit.centerY;

    // find difference in X and Y
    const currentUnitDX:number = Math.abs(currentUnitX - centerX);
    const currentUnitDY:number = Math.abs(currentUnitY - centerY);

    // find distance
    const currentUnitDist:number = Math.sqrt(Math.pow(currentUnitDX, 2) + Math.pow(currentUnitDY, 2));
    if(currentUnitDist === closestDistance) {
      closestUnits.push(unit);
    }
  }

  return closestUnits;
}
