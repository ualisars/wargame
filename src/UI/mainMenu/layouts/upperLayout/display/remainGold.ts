import {mainMenuCtx} from '../../../settings';
import {side} from '../../../../../config/mainMenu/sides/side';
import {
  computerSpendedGold,
  playerSpendedGold
} from '../../../../../config/mainMenu/gold/spendedGold';
import {totalGold} from '../../../../../config/mainMenu/gold/totalGold';
import {
  goldX,
  goldY
} from '../upperLayoutSettings';

export const displayRemainGold = () => {
  let spendedGold:number;
  if(side === 'computer') {
    spendedGold = computerSpendedGold;
  }
  else if(side === 'player') {
    spendedGold = playerSpendedGold;
  }
  if(spendedGold > totalGold) {
    mainMenuCtx.fillStyle = 'red';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.fillText(spendedGold + '/' + totalGold, goldX, goldY);
}
