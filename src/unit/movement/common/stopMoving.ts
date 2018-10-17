import Unit from '../../types/Unit';

export const stopMoving = (unit:Unit, currentNode:any) => {
  unit.setIsMovingToFalse();
  unit.setCurrentNode(currentNode);
  unit.setNextNode(currentNode);
}
