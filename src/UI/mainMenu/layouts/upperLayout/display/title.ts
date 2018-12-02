import {
  displayComputer,
  displayPlayer,
  displayRemainGold
} from '.';
import {
  titleHeight
} from '../../../../../config/mainMenu';
import {
  MAP_WIDTH
} from '../../../../../config';
import {mainMenuCtx} from '../../../../../config/context';
import {side} from '../../../../../config/mainMenu/sides/side';

export const displayTitle = () => {
  mainMenuCtx.clearRect(0,0, MAP_WIDTH, titleHeight);
  mainMenuCtx.fillStyle =  '#2c2f33';
  mainMenuCtx.fillRect(0, 0, MAP_WIDTH, titleHeight)
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.font = '38px serif';
  mainMenuCtx.textAlign = 'center';
  displayPlayer();
  displayComputer();
  displayRemainGold();
}
