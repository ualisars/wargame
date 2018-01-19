import {computerUnits} from '../../../../store/unit/units';
import {visibleForComputerUnits} from '../../../../store/unit/visibleUnits';
import {spottedUnits} from '../../../../store/unit/spottedUnits';
import {
  getClosestUnitToOtherUnit,
  getBestUnitByProperty
} from '../../../../utils/unit/actions';
import {getRandomNode} from '../../../../utils/node';
import {getSurroundedNodes} from '../../../../utils/surrounded';
import {
  getNodeFromMap
} from '../../../../utils';
import {aStar} from '../../../../path';
import {map} from '../../../../map/createMap';
import {updateUnit} from '../../../../unit/movement/unitMovement';
import {assignUnitMoveToPosition} from '../../../../unit/actions/unitActions';


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
