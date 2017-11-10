import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';

import {displayRoster} from './unitRoster';
import {displayChosenUnits} from './chosenUnits';
import {displayInfo} from './info';
import {displayTitle} from './title';
import {dragAndDrop} from './dragAndDrop';

export const launchMainMenu = () => {
  //mainMenuCtx.fillStyle = 'red';
  mainMenuCtx.fillRect(0, 0, WIDTH, HEIGHT);
  displayRoster();
  displayChosenUnits();
  displayInfo();
  displayTitle();
  dragAndDrop();
}
