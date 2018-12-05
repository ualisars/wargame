import {
  mainMenu,
  dragAndDropCanvas
} from '../../config/canvas';
import {
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

export const activateBattleMode = () => {
  setBattleMode().then(() => {
    clearMainMenu();
    createArmy().then(() => loadUnitIcons())
    .then(() => {
      dragAndDropCanvas.style.zIndex = '0';
      mainMenu.style.zIndex = '0';
      auxiliaryCanvas.style.zIndex = '4';
      canvas.style.zIndex = '3';
      terrain.style.zIndex = '2';
      backgroundCanvas.style.zIndex = '1';
      launchGame()
    });
  });
}
