import Unit from '../../types/Unit';
import { drawUnitIcon } from '../../../UI/battleUI/unitPanel/icon/drawUnitIcon';

export const stopMoving = (unit:Unit, currentNode:any) => {
  unit.setIsMovingToFalse();
  unit.setCurrentNode(currentNode);
  unit.setNextNode(currentNode);
  drawUnitIcon(unit);
}
