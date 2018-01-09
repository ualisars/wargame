import {launchMainMenu} from '../mainMenu/launchMainMenu';
import {launchBattle} from '../battle/launchBattle';
import {
  mainMenuMode,
  battleMode
} from '../../config/global/globalConfig';

export const launchGame = () => {
  if(mainMenuMode) {
    console.log('mainMenuMode', mainMenuMode);
    console.log('battleMode', battleMode);
    launchMainMenu();
  }
  else if(battleMode) {
    console.log('mainMenuMode', mainMenuMode);
    console.log('battleMode', battleMode);
    launchBattle();
  }
}
