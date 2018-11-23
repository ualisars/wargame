import {
  computerUnits,
  playerUnits,
  units
} from './store/unit/units';
import {finishBattle} from './config';
import {drawMessage} from './UI/messages/drawMessage';
import { spotEnemy, isUnitSpottedByEnemy } from './unit';

export const battleListener = () => {
  for(let unit of units) {
    spotEnemy(unit);
    isUnitSpottedByEnemy(unit)
  }
  setTimeout(() => {
   battleListener();
  }, 30);
}

export const isBattleEnd = () => {
  let computerNumber = computerUnits.length;
  let playerNumber = playerUnits.length;
  if(computerNumber === 0 || playerNumber === 0) {
    finishBattle();
    checkWinner();
  }
}

export const checkWinner = () => {
  let computerNumber = computerUnits.length;
  let playerNumber = playerUnits.length;
  if(computerNumber === 0) {
    console.error('victory');
    drawMessage('Victory');
  }
  else if(playerNumber === 0) {
    finishBattle();
    console.error('defeat');
    drawMessage('Defeat');
  }
}
