import {
  totalGold
} from '../../../../../../config/mainMenu/gold/totalGold';
import {
  mainMenuCtx,
} from '../../../../settings';
import {
  boxHeight,
  boxWidth
} from '../../infoSettings';

export const drawMoneyBox = (x:number, y:number, amount:number) => {
  if(amount === totalGold) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(x, y, boxWidth, boxHeight);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(x, y, boxWidth, boxHeight);
  mainMenuCtx.font = '12px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText(amount, x  + 10, y + 25);
}
