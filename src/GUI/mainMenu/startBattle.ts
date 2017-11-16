import {
  mainMenuCtx,
  startBattleStartY,
  startBattleWidth,
  startBattleHeight
} from './mainMenuSettings';

let startBattleButtonX:number = Math.round(startBattleWidth / 3) + 120;
let startBattleButtonY:number = startBattleStartY + 15;
let startBattleButtonWidth:number = 200;
let startBattleButtonHeight:number = 40;
let startBattleTextX:number = startBattleButtonX + 30;
let startBattleTextY:number = startBattleButtonY + 30;

export const startBattle = () => {
  fillLayout();
  showStartBattleButton();
  showText();
}

const fillLayout = () => {
  mainMenuCtx.clearRect(0, startBattleStartY, startBattleWidth, startBattleHeight);
  mainMenuCtx.fillStyle = '#2c2f33';
  mainMenuCtx.fillRect(0, startBattleStartY, startBattleWidth, startBattleHeight);
}

export const showStartBattleButton = () => {
  mainMenuCtx.fillStyle = '#ccc';
  mainMenuCtx.fillRect(startBattleButtonX, startBattleButtonY, startBattleButtonWidth, startBattleButtonHeight);
}

export const showText = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '32px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Start Battle', startBattleTextX, startBattleTextY);
}

//export const isStartBattleButtonSelected = (mouseX:)
