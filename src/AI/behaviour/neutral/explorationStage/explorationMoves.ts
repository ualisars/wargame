import {
  updateUnit,
  assignUnitMoveToPosition
} from '../../../../unit';
import {
  getDistanceBetweenTwoUnitsInGrids,
  getNodeFromMap,
  deleteObjectFromArray
} from '../../../../utils';
import {aStar} from '../../../../path';
import {map} from '../../../../map/createMap';
import Unit from '../../../../unit/types/Unit';
import {
  getUnitsByTask,
  getNotFightingUnits,
  getBestUnitByProperty,
  getClosestUnitToOtherUnit,
  getClosestEnemyToUnit,
  getClosestNodeToUnit
} from '../../../../utils/unit/actions';
import {getProtector} from '../../../../utils/unit/protector';
import {isNodeExploredByScout} from '../../../../utils/node/explore';
import {computerControlNodes} from '../../../analyzeModule/mapAnalyze';
import {
  getClosestToEnemyNodes,
  getFarthestNodeFromEnemy
} from '../../../../utils/node/get';
import {getSurroundedNodes} from '../../../../utils/surrounded';
import {getRandomNode} from '../../../../utils/node';

export const neutralExploration = () => {
  scoutsMovement();
}

/*
  Movements that scout units should be
  in exploration stage
*/
export const scoutsMovement = () => {
  const scouts = getUnitsByTask('exploration'); // get scouts from computersUnits
  for(let unit of scouts) {
    let closestEnemy = getClosestEnemyToUnit(unit);
    let distanceToClosestEnemy = getDistanceBetweenTwoUnitsInGrids(unit, closestEnemy);
    if(distanceToClosestEnemy >= 8) {
      explore(unit);
    } else {
      backDown(unit, closestEnemy, computerControlNodes.store);
    }
  }
}

export const backDown = (unit:Unit, enemy:Unit, nodes:any[]) => {
  if(unit.isUnitUnderProtection) { // unit has a protector
    // approach to a protector
    let protector = getProtector(unit);
    let protectorSurroundedNodes = getSurroundedNodes(unit, 2);
    let randomNode = getRandomNode(protectorSurroundedNodes);
    let startNode = getNodeFromMap(unit.x, unit.y, map);
    let finishNode = getNodeFromMap(randomNode.x, randomNode.y, map);
    let path:any = aStar(map, startNode, finishNode);
    if(unit.isMoving) {
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    } else {
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
      updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
    }
  }
  let farthestNode = getFarthestNodeFromEnemy(enemy, nodes);
  unit.setUnitToPursue(null);
  let startNode = getNodeFromMap(unit.x, unit.y, map);
  let finishNode = getNodeFromMap(farthestNode.x, farthestNode.y, map);
  let path:any = aStar(map, startNode, finishNode);
  if(unit.isMoving) {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}

export const explore = (unit:Unit) => {
  console.error('explore');
  const startX = unit.x;
  const startY = unit.y;
  console.error('startX', startX);
  console.error('startY', startY);
  console.error('baseNode', unit.baseNode);
  const finishX = unit.baseNode.x;
  const finishY = unit.baseNode.y;
  console.error('finishX', finishX);
  console.error('finishY', finishY);
  let startNode = getNodeFromMap(startX, startY, map);
  let finishNode = getNodeFromMap(finishX, finishY, map);
  let path:any = aStar(map, startNode, finishNode);
  if(unit.isMoving) {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}
