import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';
import {visibleForComputerUnits} from '../../../store/unit/visibleUnits';
import {hidingEnemies} from '../../../store/AI/enemies/hidingEnemies';
import {changeCombatStage} from '../../../store/AI/stage/combatStage';
import {isEndingStage} from './isEndingStage';

/*
  get stage of the combat
  1. exploration
  2. advance
  3. fight
  4. ending
*/
export const assignCombatStage = ():string => {
  const numberOfEnemies:number = playerUnits.length;
  const numberOfVisibleEnemies:number = visibleForComputerUnits.length;
  const numberOfHidingEmenies:number = hidingEnemies.length;
  const numberOfSpottedEnemies:number = visibleForComputerUnits.length + hidingEnemies.length;
  let percentageOfSpottedUnits:number = Math.round((numberOfSpottedEnemies / numberOfEnemies) * 100);
  let percentageOfVisibleUnits:number = Math.round((numberOfVisibleEnemies / numberOfEnemies) * 100);
  // console.error('percentageOfVisibleUnits', percentageOfVisibleUnits);
  // console.error('percentageOfSpottedUnits', percentageOfSpottedUnits);
  if(isEndingStage()) {
    changeCombatStage('ending');
  }
  else if(percentageOfSpottedUnits < 65) {
    changeCombatStage('exploration');
  }
  else if(percentageOfSpottedUnits >= 65 && percentageOfSpottedUnits < 90) {
    changeCombatStage('advance');
  }
  else if(percentageOfSpottedUnits >= 90) {
    changeCombatStage('fighting');
  }
  else {
    return 'no stage';
  }
}
