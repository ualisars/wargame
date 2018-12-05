import {
  mainMenu,
  dragAndDropCanvas
} from '../../config/canvas';
import { clearMap } from '../../map';
import {
  canvas,
  auxiliaryCanvas,
  backgroundCanvas,
  terrain
} from '../../config/canvas';
import { setMainMenuMode } from '../../config';
import { launchGame } from '..';

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
