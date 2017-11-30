import {WIDTH, HEIGHT} from '../../config';

export const mainMenu:any = document.getElementById('mainMenu');
export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');
mainMenu.width = WIDTH;
mainMenu.height = HEIGHT;
mainMenu.style.border = "1px solid";

dragAndDropCanvas.width = WIDTH;
dragAndDropCanvas.height = HEIGHT;

export const titleHeight = 70;
export let armyLayoutWidth:number = Math.round(WIDTH / 3);
export let armyLayoutHeight:number = HEIGHT - 140;
export let unitRosterWidth:number = Math.round(WIDTH / 3);
export let unitRosterHeight:number = HEIGHT - 140;
export let infoLayoutWidth:number = Math.round(WIDTH / 3);
export let infoLayoutHeight:number = HEIGHT - 140;
// start battle
export let startBattleStartY:number = titleHeight + infoLayoutHeight;
export let startBattleWidth:number = WIDTH;
export let startBattleHeight:number = HEIGHT - (titleHeight + infoLayoutHeight);
export let hoveredUnit:any = null;
// startBattle available
export let startBattleAvailable:boolean = false;
export let playerHasUnits:boolean = false;
export let computerHasUnits:boolean = false;

export let totalGold:number = 400;
export let playerSpendedGold:number = 0;
export let computerSpendedGold:number = 0;

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

export const changeToPlayer = () => {
  side = 'player';
}

export const changeToComputer = () => {
  side = 'computer';
}

export const changeHoveredUnit = (unit:any) => {
  if(unit) {
    hoveredUnit = unit;
  }
}

/*
 set startBattleAvailable to false
*/
export const disableStartBattleButton = () => {
  startBattleAvailable = false;
  console.log('startBattleAvailable:', startBattleAvailable);
}

/*
 set startBattleAvailable to true
*/
export const enableStartBattleButton = () => {
  startBattleAvailable = true;
  console.log('startBattleAvailable:', startBattleAvailable);
}

export const clearMainMenu = () => {
  mainMenuCtx.clearRect(0, 0, WIDTH, HEIGHT);
  dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
}
