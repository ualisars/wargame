import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../config';

import {displayRoster} from './unitRoster';
import {displayChosenUnits} from './army';
import {displayInfo} from './info';
import {displayTitle} from './sideSwitcher';
import {dragAndDrop} from './dragAndDrop';
import {startBattleLayout} from './startBattle';

export const launchMainMenu = () => {
  mainMenuCtx.fillRect(0, 0, WIDTH, HEIGHT);
  displayRoster();
  displayChosenUnits();
  displayInfo();
  displayTitle();
  dragAndDrop();
  startBattleLayout();
}
