import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {
  backgroundCanvas,
  backgroundCtx,
  ctx,
  auxiliaryCtx
} from '../../map/mapConfig';

export const drawMessage = (message:string) => {
  // backgroundCtx.clearRect(0, 0, WIDTH, HEIGHT);
  // ctx.clearRect(0,0, WIDTH, HEIGHT);
  ctx.fillStyle = '#000';
  ctx.font = '256px serif';
  ctx.textAlign = 'left';
  ctx.fillText(message, WIDTH / 2 - 400, HEIGHT / 2);
}
