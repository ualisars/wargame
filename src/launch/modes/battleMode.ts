import {
  mainMenu,
  dragAndDropCanvas,
  canvas,
  auxiliaryCanvas,
  backgroundCanvas,
  terrain
} from '../../config/canvas';
import { setBattleMode } from '../../config';
import { launchGame } from '..';
import { clearMainMenu } from '../../UI/mainMenu/settings/clearMainMenu';
import { createArmy } from '../../battle/roster/army/createArmy';
import { loadUnitIcons } from '../../store/images/unitIconImages';
import { pathCanvas } from '../../config/canvas/path';
import { eventCanvas } from '../../config/canvas/event';
import { loadingCanvas } from '../../config/canvas/loading';
import { drawLoadingCanvas } from '../loading/drawLoadingCanvas';
import { fillUnitToIconMap } from '../../store/images/unitToIconMap';

export const activateBattleMode = () => {
  drawLoadingCanvas();
  setBattleMode().then(() => {
    clearMainMenu();
    fillUnitToIconMap();
    createArmy().then(() => loadUnitIcons())
    .then(() => {
      dragAndDropCanvas.style.zIndex = '0';
      mainMenu.style.zIndex = '0';
      auxiliaryCanvas.style.zIndex = '6';
      eventCanvas.style.zIndex = '5';
      canvas.style.zIndex = '4';
      pathCanvas.style.zIndex = '3';
      terrain.style.zIndex = '2';
      backgroundCanvas.style.zIndex = '1';
      loadingCanvas.style.zIndex = '0';
      launchGame()
    });
  });
}
