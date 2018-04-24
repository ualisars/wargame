import Unit from '../../../unit/types/Unit';

export const stopMoving = (unit:Unit, currentNode:any) => {
  unit.setIsMovingToFalse();
  unit.setCurrentNode(currentNode);
  unit.setNextNode(currentNode);
}
