import {launchMainMenu} from '../../GUI/mainMenu/mainMenuLaunch';
import {launchBattle} from '../battle/launchBattle';
import {mainMenuMode, battleMode} from '../../config/globalConfig';

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
