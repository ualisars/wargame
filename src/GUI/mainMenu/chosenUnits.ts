import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {
  rosterWidth,
  rosterHeight
} from './unitRoster';

export const chosenUnitsWidth = Math.round(WIDTH / 3);
export const chosenUnitsHeight = HEIGHT - 100;

export const displayChosenUnits = () => {
  mainMenuCtx.fillStyle = 'red';
  mainMenuCtx.fillRect(rosterWidth, 0, chosenUnitsWidth, chosenUnitsHeight);
}
