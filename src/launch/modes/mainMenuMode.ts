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
import { eventCanvas } from '../../config/canvas/event';
import { pathCanvas } from '../../config/canvas/path';

export const activateMainMenuMode = () => {
  dragAndDropCanvas.style.zIndex = '6';
  mainMenu.style.zIndex = '5';
  auxiliaryCanvas.style.zIndex = '4';
  canvas.style.zIndex = '3';
  terrain.style.zIndex = '2'
  eventCanvas.style.zIndex = '1';
  pathCanvas.style.zIndex = '1';
  backgroundCanvas.style.zIndex = '1';
  clearMap();
  setMainMenuMode();
  launchGame();
}
