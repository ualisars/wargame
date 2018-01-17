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
  // console.log('gold', gold);
  // console.log('side:',side);
  if(side === 'computer') {
    //console.log('computerSpendedGold before:', computerSpendedGold);
    computerSpentGold -= gold;
    //console.log('computerSpendedGold after:', computerSpendedGold);
  }
  else if(side === 'player') {
    //console.log('playerSpendedGold before', playerSpendedGold);
    playerSpentGold -= gold;
    //console.log('playerSpendedGold after', playerSpendedGold);
  }
}
