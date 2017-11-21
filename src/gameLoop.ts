import {
  computersUnits,
  playersUnits
} from './store/unitStore';
import {finishBattle} from './config/globalConfig';
import {drawMessage} from './GUI/afterBattle/menu';

export const isBattleEnd = () => {
  let computerNumber = computersUnits.length;
  let playerNumber = playersUnits.length;
  if(computerNumber === 0 || playerNumber === 0) {
    finishBattle();
    checkWinner();
  }
}

export const checkWinner = () => {
  let computerNumber = computersUnits.length;
  let playerNumber = playersUnits.length;
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
