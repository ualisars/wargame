import {
  updateUnit
} from '../../../../unit';
import {
  getDistanceBetweenTwoUnitsInGrids,
  getNodeFromMap,
  deleteObjectFromArray
} from '../../../../utils';
import {moveTo} from '../../common';
import {aStar} from '../../../../path';
import {initialMap} from '../../../../map/createMap/initialMap';
import Unit from '../../../../unit/types/Unit';

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
  moveTo(unit, finishX, finishY);
}
