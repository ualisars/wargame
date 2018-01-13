import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {visibleForComputerUnits} from '../../store/unit/visibleUnits';

import {hidedEmenies} from '../setUpAI';
import {changeCombatStage} from '../../store/AI/combatStage';

import {
  initialPlayerPower,
  initialComputerPower
} from '../../store';
import {computerPower} from '../../store/AI/power/computerPower';
import {playerPower} from '../../store/AI/power/playerPower';

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
  const numberOfHidedEmenies:number = hidedEmenies.store.length;
  const numberOfSpottedEnemies:number = visibleForComputerUnits.length + hidedEmenies.store.length;
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

export const isEndingStage = ():boolean => {
  let ending:boolean = false;
  const numberOfUnits:number = computerUnits.length;
  const numberOfEnemies:number = playerUnits.length;
  const computerHealth:number = computerPower.totalHealth;
  const playersHealth:number = playerPower.totalHealth;

  // console.error('numberOfUnits', numberOfUnits);
  // console.error('numberOfEnemies', numberOfEnemies);
  // console.error('computerHealth', computerHealth);
  // console.error('playersHealth', playersHealth);

  const initialNumberOfUnits = initialComputerPower.quantity;
  const initialNumberOfEnemies = initialPlayerPower.quantity;
  const initialUnitsHealth = initialComputerPower.totalHealth;
  const initialEnemiesHealth = initialPlayerPower.totalHealth;

  // console.error('initialNumberOfUnits', initialNumberOfUnits);
  // console.error('initialNumberOfEnemies', initialNumberOfEnemies);
  // console.error('initialUnitsHealth', initialUnitsHealth);
  // console.error('initialEnemiesHealth', initialEnemiesHealth);

  const unitLosses:number = 100 - Math.round((numberOfUnits /initialNumberOfUnits) * 100);
  const enemyLosses:number = 100 - Math.round((numberOfEnemies / initialNumberOfEnemies) * 100);
  const unitHealthLosses:number = 100 - Math.round((computerHealth / initialUnitsHealth) * 100);
  const enemyHealthLosses:number = 100 - Math.round((playersHealth /initialEnemiesHealth) * 100);

  // console.error('unitLosses', unitLosses);
  // console.error('enemyLosses', enemyLosses);
  // console.error('unitHealthLosses', unitHealthLosses);
  // console.error('enemyHealthLosses', enemyHealthLosses);
  if(unitLosses >= 60 || enemyLosses >= 60 || unitHealthLosses >= 70 || enemyHealthLosses >= 70) {
    ending = true;
  }
  return ending;
}
