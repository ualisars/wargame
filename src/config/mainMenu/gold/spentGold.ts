import {side} from '../sides/side';

export let playerSpentGold:number = 0;
export let computerSpentGold:number = 0;

export const increaseSpentGold = (gold:number) => {
  if(side === 'computer') {
    computerSpentGold += gold;
  }
  else if(side === 'player') {
    playerSpentGold += gold;
  }
}

export const decreaseSpentGold = (gold:number) => {
  if(side === 'computer') {
    computerSpentGold -= gold;
  }
  else if(side === 'player') {
    playerSpentGold -= gold;
  }
}
