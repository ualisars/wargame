import { mainMenuCtx } from '../../config/context';
import { MAP_WIDTH, CANVAS_HEIGHT } from '../../config';
import { displayRoster } from '../../UI/mainMenu/layouts/rosterLayout';
import { displayChosenUnits } from '../../UI/mainMenu/layouts/armyLayout';
import { displayInfo } from '../../UI/mainMenu/layouts/infoLayout';
import { displayTitle } from '../../UI/mainMenu/layouts/upperLayout';
import { dragAndDrop } from '../../UI/mainMenu/main';
import { drawBottomLayout } from '../../UI/mainMenu/layouts/bottomLayout';
import { initializeMap } from '../../map/createMap/initialMap';
import { loadIcons, loadUnitIcons } from '../../store/images/unitIconImages';
import { createRoster } from '../../store/roster/roster';
import { drawLoadingCanvas } from '../loading/drawLoadingCanvas';
import { loadingCanvas } from '../../config/canvas/loading';

export const launchMainMenu = () => {
  drawLoadingCanvas();
  initializeMap().then(
    () => {
      loadUnitIcons().then(() => {
        mainMenuCtx.fillRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
        createRoster();
        displayRoster();
        displayChosenUnits();
        displayInfo();
        displayTitle();
        dragAndDrop();
        drawBottomLayout();
        loadIcons();
        loadingCanvas.style.zIndex = '1';
      });
    }
  );
}
