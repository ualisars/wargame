import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {rosterWidth} from './unitRoster';
import {
  chosenUnitsWidth,
  chosenUnitsHeight
} from './army';

export const infoWidth = Math.round(WIDTH / 3);
export const infoHeight = HEIGHT - 100;

export const displayInfo = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(chosenUnitsWidth + rosterWidth, 0, infoWidth, infoHeight);
}
