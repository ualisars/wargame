import {drawUnit} from '../..';
import {gridSize} from '../../../config';
import {ctx} from '../../../config/context';
import Unit from '../../types/Unit';
import {updateUnit} from './updateUnit';
import {pursueUnit} from './pursueUnit';
import { pathCtx } from '../../../config/context/context';
import { drawPath } from '../../../path';


export const makeMovementInUpdateUnit = (unit:Unit, currentNode:any, nextNode:any, path:any[], allPath:any[], currX:number, currY:number, i:number, nodeI: number) => {
  // unit has reached destination point
  if(unit.x === nextNode.x && unit.y === nextNode.y) {
    nodeI++;
    updateUnit(unit, allPath, nodeI, currX, currY, null, false);
  }
  if(i >= path.length) {
    return;
  }
  // delete previous state
  let deleteX, deleteY;
  if(i > 0) {
    deleteX = path[i - 1].x - (gridSize * 0.5);
    deleteY = path[i - 1].y - (gridSize * 0.5);
  } else {
    deleteX = path[i].x  - (gridSize * 0.5);
    deleteY = path[i].y - (gridSize * 0.5);
  }
  
  let clearX = unit.centerX - unit.radius;
  let clearY =  unit.centerY - unit.radius;
  let unitDiameter = unit.radius * 2;
  ctx.clearRect(clearX, clearY, unitDiameter, unitDiameter);
  let centerX = path[i].x;
  let centerY = path[i].y;

  // set unit.x and unit.y
  unit.setX(centerX - (gridSize * 0.5));
  unit.setY(centerY - (gridSize * 0.5));

  
  drawUnit(unit);
  drawPath(unit, allPath, nodeI);
  pathCtx.clearRect(deleteX, deleteY, gridSize / 2, gridSize / 2);

  setTimeout(() => {
    i++;
    makeMovementInUpdateUnit(unit, currentNode, nextNode, path, allPath, currX, currY, i, nodeI);
  }, Math.round(1000 / unit.speed));
}

export const makeMovementInPursueUnit = (unit:Unit, pursuedUnit:any, currentNode:any, nextNode:any, path:any[], allPath:any[], currX:number, currY:number, i:number, nodeI: number) => {
  //console.log('makeMovement2');
  if(unit.x === nextNode.x && unit.y === nextNode.y) { // unit reach destination point
    //console.error('unit reached its position');
    nodeI++;
    pursueUnit(unit, pursuedUnit, currX, currY, nodeI, allPath, false);
  }

  if(i >= path.length) {
    return;
  }

  // delete previous state
   let deleteX, deleteY;
   if(i > 0) {
     deleteX = path[i - 1].x - (gridSize * 0.5);
     deleteY = path[i - 1].y - (gridSize * 0.5);
   } else {
     deleteX = path[i].x  - (gridSize * 0.5);
     deleteY = path[i].y - (gridSize * 0.5);
   }
   let clearX = unit.centerX - unit.radius;
   let clearY =  unit.centerY - unit.radius;
   let unitDiameter = unit.radius * 2;
   ctx.clearRect(clearX, clearY, unitDiameter, unitDiameter);
   
   let centerX = path[i].x;
   let centerY = path[i].y;
   unit.setX(centerX - (gridSize * 0.5));
   unit.setY(centerY - (gridSize * 0.5));
   drawUnit(unit);

   setTimeout(() => {
     i++;
     makeMovementInPursueUnit(unit, pursuedUnit, currentNode, nextNode, path, allPath, currX, currY, i, nodeI);
   }, Math.round(1000 / unit.speed));
}
