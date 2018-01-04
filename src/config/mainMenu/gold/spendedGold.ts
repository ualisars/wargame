import {side} from '../sides/side';

export let playerSpendedGold:number = 0;
export let computerSpendedGold:number = 0;

export const increaseSpendedGold = (gold:number) => {
  if(side === 'computer') {
    computerSpendedGold += gold;
  }
  else if(side === 'player') {
    playerSpendedGold += gold;
  }
}

export const decreaseSpendedGold = (gold:number) => {
  // console.log('gold', gold);
  // console.log('side:',side);
  if(side === 'computer') {
    //console.log('computerSpendedGold before:', computerSpendedGold);
    computerSpendedGold -= gold;
    //console.log('computerSpendedGold after:', computerSpendedGold);
  }
  else if(side === 'player') {
    //console.log('playerSpendedGold before', playerSpendedGold);
    playerSpendedGold -= gold;
    //console.log('playerSpendedGold after', playerSpendedGold);
  }
}
