import {
  computersUnits,
  playersUnits
} from './store/unitStore';

export const isBattleEnd = () => {
  let computerNumber = computersUnits.length;
  let playerNumber = playersUnits.length;
  isVictory(computerNumber);
  isDefeat(playerNumber);
}

export const isVictory = (computerNumber:number) => {
  if(computerNumber === 0) {
    console.error('victory');
  }
}

export const isDefeat = (playerNumber:number) => {
  if(playerNumber === 0) {
    console.error('defeat');
  }
}
