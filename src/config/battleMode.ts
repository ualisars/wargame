import {
  mainMenu,
  dragAndDropCanvas
} from '../GUI/mainMenu/mainMenuSettings';

import {
  canvas,
  auxiliaryCanvas,
  backgroundCanvas,
  terrain,
  clearMap
} from '../map';

import {clearMainMenu} from '../GUI/mainMenu/mainMenuSettings';
import {setBattleMode} from './globalConfig';
import {launchGame} from './launchGame';

export const activateBattleMode = () => {
  dragAndDropCanvas.style.zIndex = '0';
  mainMenu.style.zIndex = '0';
  auxiliaryCanvas.style.zIndex = '4';
  canvas.style.zIndex = '3';
  terrain.style.zIndex = '2';
  backgroundCanvas.style.zIndex = '1';
  clearMainMenu();
  setBattleMode();
  launchGame();
}
