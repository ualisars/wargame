import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';

export const rosterWidth = Math.round(WIDTH / 3);
export const rosterHeight = HEIGHT - 100;

export const displayRoster = () => {
  mainMenuCtx.fillStyle = 'green';
  mainMenuCtx.fillRect(0,0, rosterWidth, rosterHeight);
}
