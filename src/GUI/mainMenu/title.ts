import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {rosterWidth} from './unitRoster';

export const titleHeight = 70;
export const displayTitle = () => {
  mainMenuCtx.fillStyle =  '#2c2f33';
  mainMenuCtx.fillRect(0, 0, WIDTH, titleHeight)
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.font = '48px serif';
  mainMenuCtx.textAlign = 'center';
  mainMenuCtx.fillText('Web Wargame', WIDTH / 3 + 200, 50);
}
