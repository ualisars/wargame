import {WIDTH, HEIGHT} from '../../map/mapSettings';

export const mainMenu:any = document.getElementById('mainMenu');
export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');
mainMenu.width = WIDTH;
mainMenu.height = HEIGHT;
mainMenu.style.border = "1px solid";

dragAndDropCanvas.width = WIDTH;
dragAndDropCanvas.height = HEIGHT;

export let armyLayoutWidth:number = Math.round(WIDTH / 3);
export let armyLayoutHeight:number = HEIGHT - 140;
export let unitRosterWidth:number = Math.round(WIDTH / 3);
export let unitRosterHeight:number = HEIGHT - 140;
export let infoLayoutWidth:number = Math.round(WIDTH / 3);;
export let infoLayoutHeight:number = HEIGHT - 140;
export let totalGold:number = 400;
export let playerSpendedGold:number = 0;
export let computerSpendedGold:number = 0;
export const titleHeight = 70;
export let side:string = 'player';

export let showBattleSettings:boolean = true;
export let showUnitInfo:boolean = false;

// define 2d context
export const mainMenuCtx = mainMenu.getContext('2d');
export const dragAndDropCanvasCtx = dragAndDropCanvas.getContext('2d');

export const setTotalGold = (gold:number) => {
  totalGold = gold;
}
export const changeBattleSettingsToTrue = () => {
  showBattleSettings = true;
  showUnitInfo = false;
}

export const changeUnitInfoToTrue = () => {
  showBattleSettings = false;
  showUnitInfo = true;
}

export const increaseSpendedGold = (gold:number) => {
  if(side === 'computer') {
    computerSpendedGold += gold;
  }
  else if(side === 'player') {
    playerSpendedGold += gold;
  }
}

export const decreaseSpendedGold = (gold:number) => {
  if(side === 'computer') {
    computerSpendedGold -= gold;
  }
  else if(side === 'player') {
    playerSpendedGold -= gold;
  }
}
