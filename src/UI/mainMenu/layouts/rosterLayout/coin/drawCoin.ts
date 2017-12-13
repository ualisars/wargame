import {mainMenuCtx} from '../../../../../config/context';

export const drawCoin = (centerX:number, centerY:number, radius:number) => {
  mainMenuCtx.beginPath();
  mainMenuCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  mainMenuCtx.fillStyle = '#ffd700';
  mainMenuCtx.fill();
}
