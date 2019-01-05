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

export const launchMainMenu = () => {
  initializeMap().then(
    () => {
      loadUnitIcons().then(() => {
        mainMenuCtx.fillRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
        displayRoster();
        displayChosenUnits();
        displayInfo();
        displayTitle();
        dragAndDrop();
        drawBottomLayout();
        loadIcons();
      });
    }
  );
}
