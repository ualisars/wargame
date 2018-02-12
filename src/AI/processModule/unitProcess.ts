import {
  playerUnits,
  computerUnits
} from '../../store/unit/units';

import {
  calculateSurroundedEnemyPower,
  calculateSurroundedAlliesPower,
  calculatePowerAdvantageInTheArea,
  calculateUnitsToBeware,
} from '../analyzeModule/unitAnalyze';
import {
  getSurroundedAllies,
  getSurroundedEnemies
} from '../../utils/surrounded';
import {
  getUnitsMaxProperty,
  getUnitsMinProperty
} from '../../utils';
import {
  getUnitsByTask,
  getScoutsNumber,
  getUnitById
} from '../../utils/unit/actions';
import {
  HEIGHT,
  gridSize
} from '../../config/map';
import {getNodeFromMap} from '../../utils/node/get/fromMap';
import {map} from '../../map/createMap';
import {shuffleID} from '../../utils/unit/shuffle';


/*
  (DoesUnitNeedProtection)
  Check advantages and disadvantages of the unit
  and decide whether the unit require support or not
  Unit need protection if
  1. Player has unit that is dangerous for this unit(e.g unit is archer,
    but player has cavalry in the roster)
  2. Unit is not mobile and vulnerable for flank attack
*/
export const doesUnitNeedProtection = (unit:any):boolean => {
  let unitsToBeware = calculateUnitsToBeware(unit);
  if(unit.type === 'skirmishers' && unitsToBeware > 0) {
      return true;
  }
  if(unit.type === 'spearmen' && playerUnits.length > 1) {
    return true;
  }
  return false;
}

/*
  Show how many units need protection
*/
export const howManyUnitsNeedProtection = ():number => {
  let units:number = 0;
  for(let unit of computerUnits) {
    if(doesUnitNeedProtection) {
      units++;
    }
  }
  return units;
}

/*
  (DoesUnitNeedHelp)
  Unit need help if:
  1. Player has more units nearby
  2. Player has more total power nearby this specific unit
  3. Unit is flanked
  return value is range from 0 to 100,
  0 unit does not need any help
  1 - unit need help urgently
*/
export const DoesUnitNeedHelp = (unit:any):number => {
  let requireHelp:number = 0;
  let numberOfEnemies:number = getSurroundedEnemies(unit).length;
  let numberOfAllies:number = getSurroundedAllies(unit).length;
  let unitsToBeware = calculateUnitsToBeware(unit);
  let enemyQtyAdvantage = numberOfEnemies - numberOfAllies; // enemy number advantage
  if(numberOfEnemies === 1) { // unit would fight only against one enemy
    let chance = possibilityToDestroyEnemy(unit, getSurroundedEnemies(unit)[0]);
    if(chance == 'very low') {
      requireHelp += 90;
    }
    else if(chance == 'low') {
      requireHelp += 70;
    }
    else if(chance == 'medium') {
      requireHelp += 30;
    }
  }
  if(unit.mobility === 1 && (enemyQtyAdvantage >= 1 && enemyQtyAdvantage <=2)) {
    requireHelp += 20;
  }
  if(unit.mobility === 1 && (enemyQtyAdvantage >= 3)) {
    requireHelp += 80;
  }
  if((unit.mobility > 1 && unit.mobility <= 3) && (enemyQtyAdvantage >= 2 && enemyQtyAdvantage <=4)) {
    requireHelp += 20;
  }
  if(unit.mobility > 3 && enemyQtyAdvantage >= 4) {
    requireHelp += 40;
  }
  return requireHelp;
}

export const possibilityToDestroyEnemy = (unit:any, enemy:any):string => {
  let possibility:string;
  let unitHealth = unit.health;
  let enemyHealth = enemy.health;
  let unitDamage = unit.meleeDamage - enemy.armour;
  let enemyDamage = enemy.meleeDamage - unit.armour;
  let unitAttemps = Math.floor(enemyHealth / unitDamage); // how many strikes does unit need to destroy enemy
  let enemyAttemps = Math.floor(unitHealth / enemyDamage); // how many strikes does enemy need to destroy unit
  if(unitAttemps - enemyAttemps >= -2 && unitAttemps - enemyAttemps < 3) {
    possibility = 'medium';
  }
  else if(unitAttemps - enemyAttemps >= 3 && unitAttemps - enemyAttemps < 8) {
    possibility = 'high';
  }
  else if(unitAttemps - enemyAttemps >= 8) {
    possibility = 'very high';
  }
  else if(unitAttemps - enemyAttemps <= -3 && unitAttemps - enemyAttemps > -8) {
      possibility = 'low';
  }
  else if(unitAttemps - enemyAttemps <= -8) {
    possibility = 'very low';
  }
  return possibility;
}

export const chanceUnitToFlee = (unit:any):string => {
  let chance:string;
  let unitSpeed = unit.speed;
  let surroundedEnemies = getSurroundedEnemies(unit);
  let enemySpeed = getUnitsMaxProperty(surroundedEnemies, 'speed');
  let diffInSpeed = unitSpeed - enemySpeed;
  if(diffInSpeed > -10 && diffInSpeed <= 10) {
    chance = 'medium';
  }
  else if(diffInSpeed > 10 && diffInSpeed <= 20) {
    chance = 'high';
  }
  else if(diffInSpeed > 20) {
    chance = 'very high';
  }
  else if(diffInSpeed < -10 && diffInSpeed >= -20) {
    chance = 'low';
  }
  else if(diffInSpeed < -20) {
    chance = 'very low';
  }
  return chance;
}

/*
  Split exploration node
  between scouts
*/

const checkDifference = (baseNode1:any, baseNode2:any):number => {
  const y1:number = baseNode1.y;
  const y2:number = baseNode2.y;
  // console.log('y1', y1);
  // console.log('y2', y2);
  const diff = Math.abs(y1 - y2);
  return diff;
}

export const divideExplorationZone = () => {
  let numberOfScouts:number = getScoutsNumber();
  let scouts:any = getUnitsByTask('exploration');
  // console.error('divideExplorationZone');
  // console.error('numberOfScouts', numberOfScouts);
  if(numberOfScouts > 1) {
    let ids = shuffleID(scouts);
    for(let i = 0; i < ids.length; ++i) {
      let x:number = 0;
      let y:number;
      let id:number = ids[i].id;
      let unit:any = getUnitById(id, computerUnits);
      //console.log('unit', i, unit);
      if(i === 0) { // first scout
        y = 0;
      }
      else if(i === 1) { // second unit
        y = HEIGHT - gridSize;
      }
      else if(i === 2) { // third unit
        y = (HEIGHT - gridSize) / 2;
      }
      else { // more than 4 units
        //console.log('more than 4 units');
        const firstScoutId:number = ids[i - 3].id;
        const secondScoutId:number = ids[i - 2].id;
        const thirdScoutId:number = ids[i - 1].id;
        // console.log('firstScoutId', firstScoutId);
        // console.log('secondScoutId', secondScoutId);
        // console.log('thirdScoutId', thirdScoutId);
        const firstScoutBaseNode:any = getUnitById(firstScoutId, scouts).baseNode;
        const secondScoutBaseNode:any = getUnitById(secondScoutId, scouts).baseNode;
        const thirdScoutBaseNode:any = getUnitById(thirdScoutId, scouts).baseNode;
        // console.log('firstScoutBaseNode', firstScoutBaseNode);
        // console.log('secondScoutBaseNode', secondScoutBaseNode);
        // console.log('thirdScoutBaseNode', thirdScoutBaseNode);
        // check difference between between 3 previous scouts
        const d1:number = checkDifference(firstScoutBaseNode, thirdScoutBaseNode);
        const d2:number = checkDifference(secondScoutBaseNode, thirdScoutBaseNode);
        // console.log('d1 for unit', unit.id, ' = ', d1);
        // console.log('d2 for unit', unit.id, ' = ', d2);
        if(d1 === d2) {
          // same difference
          let random = Math.random();
          if(random < 0.5) {
            y = Math.abs(firstScoutBaseNode.y - thirdScoutBaseNode.y) / 2;
          } else {
            y = Math.abs(secondScoutBaseNode.y - thirdScoutBaseNode.y) / 2;
          }
        }
        else if(d1 > d2) {
          y = Math.abs(firstScoutBaseNode.y - thirdScoutBaseNode.y) / 2;
        }
        else if(d1 < d2) {
          y = Math.abs(secondScoutBaseNode.y - thirdScoutBaseNode.y) / 2;
        }
      }
      // assign base node for unit
      let node = getNodeFromMap(x, y, map);
      unit.assignBaseNode(node);
      //console.error('unit', unit.id, 'baseNode', unit.baseNode);
    } // end of ids for loop
    //console.error('scouts base nodes', scouts);
  }
}
