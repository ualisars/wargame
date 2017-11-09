import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';

export const launchMainMenu = () => {
  mainMenuCtx.fillStyle = 'red';
  mainMenuCtx.fillRect(0, 0, WIDTH, HEIGHT);
}
