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
import {setBattleMode} from './globalConfig';
import {launchGame} from './launchGame';

export const activateBattleMode = () => {
  dragAndDropCanvas.style.zIndex = '0';
  mainMenu.style.zIndex = '0';
  auxiliaryCanvas.style.zIndex = '3';
  canvas.style.zIndex = '2';
  backgroundCanvas.style.zIndex = '1';
  clearMainMenu();
  setBattleMode();
  launchGame();
}
