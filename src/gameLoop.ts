import {
  computerUnits,
  playerUnits,
  units
} from './store/unit/units';
import { drawMessage } from './UI/messages/drawMessage';
import { meleeCombat, spotUnits } from './unit';
import { finishBattle } from './config/global/globalConfig';
import {
  mainMenu,
  dragAndDropCanvas,
  canvas,
  auxiliaryCanvas,
  backgroundCanvas,
  terrain
} from './config/canvas';
import { eventCanvas } from './config/canvas/event';
import { pathCanvas } from './config/canvas/path';
import { loadingCanvas } from './config/canvas/loading';
import { battleResultCanvas } from './config/canvas/battleResult';
import { battleResultCtx } from './config/context/context';

export const battleListener = () => {
  spotUnits(units);
  meleeCombat();
  setTimeout(() => {
   battleListener();
  }, 600);
}

export const isBattleEnd = () => {
  let computerNumber = computerUnits.length;
  let playerNumber = playerUnits.length;
  if(computerNumber === 0 || playerNumber === 0) {
    showBattleResultCanvas();
    finishBattle();
    checkWinner(computerNumber, playerNumber);
  }
}

export const checkWinner = (computerNumber: number, playerNumber: number) => {
  if(computerNumber === 0) {
    drawMessage(battleResultCtx, 'Victory');
  }
  else if(playerNumber === 0) {
    drawMessage(battleResultCtx, 'Defeat');
  }
}

export const showBattleResultCanvas = () => {
  dragAndDropCanvas.style.zIndex = '0';
  mainMenu.style.zIndex = '0';
  battleResultCanvas.style.zIndex = '7';
  auxiliaryCanvas.style.zIndex = '6';
  eventCanvas.style.zIndex = '5';
  canvas.style.zIndex = '4';
  pathCanvas.style.zIndex = '3';
  terrain.style.zIndex = '2';
  backgroundCanvas.style.zIndex = '1';
  loadingCanvas.style.zIndex = '0'; 
}
