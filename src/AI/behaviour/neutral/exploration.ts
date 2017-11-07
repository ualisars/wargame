import {updateUnit} from '../../../unit/unitMovement';
import {assignUnitMoveToPosition} from '../../../unit/unitActions';
import {getDistanceBetweenTwoUnitsInGrids} from '../../../utils/unitUtils';
import {deleteObjectFromArray} from '../../../utils/objUtils';
import {
  getNodeFromMap
} from '../../../path/drawPath';
import {aStar} from '../../../path/AStar';
import {map} from '../../../map/createMap';

import {computersUnits} from '../../../store/unitStore';
import {
  getUnitsByTask,
  getNotFightingUnits,
  getBestUnitByProperty,
  getClosestUnitToOtherUnit,
  getClosestEnemyToUnit,
  getClosestNodeToUnit,
  isNodeExploredByScout,
  getProtector
} from '../../actions/unitActions';
import {
  computerControlNodes,
  getClosestToEnemyNodes,
  getFarthestNodeFromEnemy
} from '../../analyzeModule/mapAnalyze';
import {getSurroundedNodes} from '../../analyzeModule/unitAnalyze';
import {getRandomNode} from '../../actions/mapActions';

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

export const backDown = (unit:any, enemy:any, nodes:any[]) => {
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

export const explore = (unit:any) => {
  let nodes = getClosestToEnemyNodes(computerControlNodes.store);
  let node = getClosestNodeToUnit(unit, nodes);
  while(isNodeExploredByScout(node)) {
    nodes = deleteObjectFromArray(node, nodes);
    node = getClosestNodeToUnit(unit, nodes);
  }
  console.error('chosen nodes:', nodes);
  unit.setUnitToPursue(null);
  let startNode = getNodeFromMap(unit.x, unit.y, map);
  let finishNode = getNodeFromMap(node.x, node.y, map);
  let path:any = aStar(map, startNode, finishNode);
  if(unit.isMoving) {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}
