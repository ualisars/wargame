import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {rosterWidth} from './unitRoster';
import {
  chosenUnitsWidth,
  chosenUnitsHeight
} from './chosenUnits';

export const infoWidth = Math.round(WIDTH / 3);
export const infoHeight = HEIGHT - 100;

export const displayInfo = () => {
  mainMenuCtx.fillStyle = 'blue';
  mainMenuCtx.fillRect(chosenUnitsWidth + rosterWidth, 0, infoWidth, infoHeight);
}
