import {
  mainMenu,
  dragAndDropCanvas
} from '../../GUI/mainMenu/mainMenuSettings';

import {
  canvas,
  auxiliaryCanvas,
  backgroundCanvas,
  terrain,
  clearMap
} from '../../map';
import {clearMainMenu} from '../../GUI/mainMenu/mainMenuSettings';
import {setMainMenuMode} from '../../config/globalConfig';
import {launchGame} from '../index';

export const activateMainMenuMode = () => {
  dragAndDropCanvas.style.zIndex = '6';
  mainMenu.style.zIndex = '5';
  auxiliaryCanvas.style.zIndex = '4';
  canvas.style.zIndex = '3';
  terrain.style.zIndex = '2'
  backgroundCanvas.style.zIndex = '1';
  clearMap();
  setMainMenuMode();
  launchGame();
}
