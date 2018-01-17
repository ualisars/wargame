import {mainMenuCtx} from '../../../../../config/context';
import {side} from '../../../../../config/mainMenu/sides/side';
import {
  computerSpentGold,
  playerSpentGold
} from '../../../../../config/mainMenu/gold/spentGold';
import {totalGold} from '../../../../../config/mainMenu/gold/totalGold';
import {
  goldX,
  goldY
} from '../upperLayoutSettings';

export const displayRemainGold = () => {
  let spendedGold:number;
  if(side === 'computer') {
    spendedGold = computerSpentGold;
  }
  else if(side === 'player') {
    spendedGold = playerSpentGold;
  }
  if(spendedGold > totalGold) {
    mainMenuCtx.fillStyle = 'red';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.fillText(spendedGold + '/' + totalGold, goldX, goldY);
}
