import { launchMainMenu } from '../mainMenu/launchMainMenu';
import { launchBattle } from '../battle/launchBattle';
import {
  mainMenuMode,
  battleMode
} from '../../config/global/globalConfig';

export const launchGame = () => {
  if(mainMenuMode) {
    launchMainMenu();
  }
  else if(battleMode) {
    launchBattle();
  }
}
