import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';
import {
  initialPlayerPower,
  initialComputerPower
} from '../../../store';
import {computerPower} from '../../../store/AI/power/computerPower';
import {playerPower} from '../../../store/AI/power/playerPower';

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
