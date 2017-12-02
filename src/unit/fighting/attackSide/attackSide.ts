import {gridSize} from '../../../config';
/*
  Check in what side of the enemy attack will
  be pointed(front, side, rear)
*/
export const checkAttackSide = (unit:any, enemy:any) => {
  let enemyCurrNode = enemy.currentNode;
  let unitNode = unit.currentNode;
  if(enemy.figthAgainst.front.id === unit.id) {
    return 'front';
  }

  else if(!enemy.isFighting && enemy.isMoving) { // enemy not fighting but moving
    let enemyNextNode = enemy.nextNode;
    if(enemyNextNode.x === unitNode.x && enemyNextNode.y === unitNode.y) { // enemy in fromt on unit
     return 'front';
    }
    else if(enemyNextNode.x - unitNode.x > gridSize || enemyNextNode.y - unitNode.y > gridSize) { // enemy is going to the other side than unit
      return 'back';
    }
    return 'side';
  }

  else if(enemy.isFighting) { // enemy is fighting
    let frontUnitNode = enemy.figthAgainst.front.currentNode;
    if(unitNode.x === enemyCurrNode.x && unitNode.x === frontUnitNode.x) { // units standing in line
      return 'back';
    }
    else if(unitNode.y === enemyCurrNode.y && unitNode.y === frontUnitNode.y) { //units standing in line
      return 'back';
    }
    // unit is standing in diagonal line, so position is back
    else if(Math.abs(frontUnitNode.x - enemyCurrNode.x) === gridSize && Math.abs(frontUnitNode.x - unitNode.x) === gridSize * 2) {
      return 'back';
    }
    else if(Math.abs(frontUnitNode.y - enemyCurrNode.y) === gridSize && Math.abs(frontUnitNode.y - unitNode.y) === gridSize * 2) {
      return 'back';
    }
    else {
      return 'side';
    }
  }
}
