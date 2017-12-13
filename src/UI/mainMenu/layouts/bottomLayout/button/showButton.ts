import {mainMenuCtx} from '../../../../../config/context';
import {startBattleAvailable} from '../../../../../config/mainMenu/startBattle/startBattleAvailable';
import {
  startBattleButtonX,
  startBattleButtonY,
  startBattleButtonWidth,
  startBattleButtonHeight,
  startBattleTextX,
  startBattleTextY
} from '../bottomSettings';

export const showStartBattleButton = () => {
  let color:string;
  if(startBattleAvailable) {
    color = '#fff';
  } else {
    color = '#ccc';
  }
  mainMenuCtx.fillStyle = color;
  mainMenuCtx.fillRect(startBattleButtonX, startBattleButtonY, startBattleButtonWidth, startBattleButtonHeight);
}

export const showText = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '32px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Start Battle', startBattleTextX, startBattleTextY);
}
