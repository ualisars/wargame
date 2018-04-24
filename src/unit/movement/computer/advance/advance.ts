import {computerUnits} from '../../../../store/unit/units';
import {visibleForComputerUnits} from '../../../../store/unit/visibleUnits';
import {spottedUnits} from '../../../../store/unit/spottedUnits';
import {moveTo} from '../../common';
import {
  getClosestUnitToOtherUnit,
  getBestUnitByProperty
} from '../../../../utils/unit/AI';
import {getRandomNode} from '../../../../utils/node';
import {getSurroundedNodes} from '../../../../utils/surrounded';
import {
  getNodeFromMap
} from '../../../../utils';

export const advance = () => {
  let nodes = getNodesToOccupy();
  for(let unit of computerUnits) {
    if(unit.task !== 'exploration') {
      let node = getRandomNode(nodes);
      moveTo(unit, node.x, node.y);
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
