export const stopMoving = (unit:any, currentNode:any) => {
  unit.setIsMovingToFalse();
  unit.setCurrentNode(currentNode);
  unit.setNextNode(currentNode); 
}
