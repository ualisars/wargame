import {
  mainMenu,
  dragAndDropCanvas
} from '../GUI/mainMenu/mainMenuSettings';

import {
  canvas,
  auxiliaryCanvas,
  backgroundCanvas
} from '../map/mapConfig';
import {clearMainMenu} from '../GUI/mainMenu/mainMenuSettings';
import {clearMap} from '../map/createMap';
import {setMainMenuMode} from './globalConfig';
import {launchGame} from './launchGame';

export const activateMainMenuMode = () => {
  dragAndDropCanvas.style.zIndex = '5';
  mainMenu.style.zIndex = '4';
  auxiliaryCanvas.style.zIndex = '3';
  canvas.style.zIndex = '2';
  backgroundCanvas.style.zIndex = '1';
  clearMap();
  setMainMenuMode();
  launchGame();
}
