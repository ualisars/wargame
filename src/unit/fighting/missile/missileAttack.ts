import {ctx} from '../map/mapConfig';
import {
  gridSize,
  WIDTH,
  HEIGHT
} from '../config';
import {randomizeMeleeDamage} from '../utils';

export const missileAttack = (unit:any, enemy:any) => {
  if(isEnemyInTheRange) {


  }
}


export const shoot = (unit:any, enemy:any) => {
  let initialDamage = randomizeMeleeDamage(unit.missileAttack);
  let enemyArmour = enemy.armour;
}

export const calculateShootEfficiency = (unit:any, enemy:any) => {

}

/*
  animate arrow or javelins
*/
export const animateShooting = (unit:any, enemy:any) => {

}

/*
  Check the distance between shooting unit and
  the enemy and if distance less than shooting unit
  range return true, mean enemy is reacheable for missileAttack
*/
export const isEnemyInTheRange = (unit:any, enemy:any) => {
  let range = unit.range;
  let distanceX:number = ((unit.currentNode.x - enemy.currentNode.x) / gridSize);
  let distanceY:number = ((unit.currentNode.y - enemy.currentNode.y) / gridSize);
  let distance:number = Math.max(distanceX, distanceY); // get min distance
  if(distance <= range) { // enemy is reacheable for missileAttack
    console.log('enemy is reacheable for missileAttack');
    return true;
  }
  return false;
}

/*
  Calculate missileAttack side
  depends on shooting unit's position and
  enemy's position, return
  backSquare and frontSquare
*/
export const getShootingSide = (unit:any, enemy:any) => {
  if(enemy.isFighting) {
    let enemyPos:any = enemy.currentNode;
    let frontUnitPos:any = enemy.figthAgainst.front;
    let unitPos = unit.currentNode;
    let backQuare = {};
    let frontSquare = {};
    // check angle
    if(enemyPos.x !== frontUnitPos.x && enemyPos.y !== frontUnitPos.y) { // diagon fighting
      if(enemyPos.x < frontUnitPos.x && enemyPos.y > frontUnitPos.y) {
        backQuare = {
          x0: 0,
          x1: enemyPos.x,
          y0: enemyPos.y,
          y1: HEIGHT - gridSize
        };
        frontSquare = {
          x0: frontUnitPos.x,
          x1: WIDTH - gridSize,
          y0: 0,
          y1: frontUnitPos.y
        };
      }
      else if(enemyPos.x > frontUnitPos.x && enemyPos.y < frontUnitPos.y) {
        backQuare = {
          x0: frontUnitPos.x,
          x1: WIDTH - gridSize,
          y0: 0,
          y1: frontUnitPos.y
        }
        frontSquare = {
          x0: 0,
          x1: enemyPos.x,
          y0: enemyPos.y,
          y1: HEIGHT - gridSize
        };
      }

      else if(enemyPos.x < frontUnitPos.x && enemyPos.y < frontUnitPos.y) {
        backQuare = {
          x0: 0,
          x1: enemyPos.x,
          y0: 0,
          y1: enemyPos.y
        }
        frontSquare = {
          x0: frontUnitPos.x,
          x1: WIDTH - gridSize,
          y0: frontUnitPos.y,
          y1: HEIGHT - gridSize
        };
      }
      else {
        backQuare = {
          x0: frontUnitPos.x,
          x1: WIDTH - gridSize,
          y0: frontUnitPos.y,
          y1: HEIGHT - gridSize
        }
        frontSquare = {
          x0: 0,
          x1: enemyPos.x,
          y0: 0,
          y1: enemyPos.y
        };
      }
    }

    // fighting units are located vertically
    else if(enemyPos.x === frontUnitPos.x && enemyPos.y !== frontUnitPos.y) {
      if(enemyPos.y > frontUnitPos.y) {
        backQuare = {
          x0: 0,
          x1: WIDTH - gridSize,
          y0: enemyPos.y + gridSize,
          y1: HEIGHT - gridSize
        }
        frontSquare = {
          x0: 0,
          x1: WIDTH - gridSize,
          y0: 0,
          y1: frontUnitPos.y
        };
      }
      else if(enemyPos.y < frontUnitPos.y) {
        backQuare = {
          x0: 0,
          x1: WIDTH - gridSize,
          y0: 0,
          y1: frontUnitPos.y
        }
        frontSquare = {
          x0: 0,
          x1: WIDTH - gridSize,
          y0: enemyPos.y + gridSize,
          y1: HEIGHT - gridSize
        };
      }
    }
    // fighting units are located horizontally
    else if(enemyPos.x !== frontUnitPos.x && enemyPos.y === frontUnitPos.y) {
      if(enemyPos.x > frontUnitPos.x) {
        backQuare = {
          x0: enemyPos.x,
          x1: WIDTH - gridSize,
          y0: 0,
          y1: HEIGHT - gridSize
        }
        frontSquare = {
          x0: 0,
          x1: frontUnitPos.x,
          y0: 0,
          y1: frontUnitPos.y
        };
      }
      else if(enemyPos.x < frontUnitPos.x) {
        backQuare = {
          x0: 0,
          x1: frontUnitPos.x,
          y0: 0,
          y1: frontUnitPos.y
        }
        frontSquare = {
          x0: enemyPos.x,
          x1: WIDTH - gridSize,
          y0: 0,
          y1: HEIGHT - gridSize
        };
      }
    }
  }
}
