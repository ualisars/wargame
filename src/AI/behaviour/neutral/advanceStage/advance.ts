import {
  visibleForComputerUnits,
  spottedUnits,
  computerUnits
} from '../../../../store/unitStore';
import {
  getClosestUnitToOtherUnit,
  getBestUnitByProperty
} from '../../../actions/unitActions';
import {getRandomNode} from '../../../actions/mapActions';
import {getSurroundedNodes} from '../../../analyzeModule/unitAnalyze';
import {
  getNodeFromMap
} from '../../../../utils';
import {aStar} from '../../../../path/AStar';
import {map} from '../../../../map/createMap';
import {updateUnit} from '../../../../unit/unitMovement';
import {assignUnitMoveToPosition} from '../../../../unit/unitActions';


export const advance = () => {
  let nodes = getNodesToOccupy();
  for(let unit of computerUnits) {
    if(unit.task !== 'exploration') {
      let node = getRandomNode(nodes);
      let startNode = getNodeFromMap(unit.x, unit.y, map);
      let finishNode = getNodeFromMap(node.x, node.y, map);
      let path:any = aStar(map, startNode, finishNode);
      if(unit.isMoving) {
        console.log('order to unit');
        console.log(unit.name, 'to go to', finishNode);
        unit.setUnitToPursue(null);
        assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
      } else {
        console.log('order to unit');
        console.log(unit, 'to go to', finishNode);
        unit.setUnitToPursue(null);
        assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
        updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
      }
    }
  }
}

export const getCentralNode = () => {
  let strongestUnit = getBestUnitByProperty('meleeDamage');
  let enemies:any[] = [];
  for(let enemy of visibleForComputerUnits) {
    enemies.push(enemy);
  }
  for(let enemy of spottedUnits) {
    enemies.push(enemy);
  }
  let closestEnemy = getClosestUnitToOtherUnit(strongestUnit, enemies);
  return closestEnemy.currentNode;
}

export const getNodesToOccupy = () => {
  let centralNode = getCentralNode();
  let nodes = getSurroundedNodes(centralNode, 6);
  return nodes;
}
