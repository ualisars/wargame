import {MAP_WIDTH, CANVAS_HEIGHT} from '../../config';

export const drawMessage = (ctx: CanvasRenderingContext2D, message:string) => {
  ctx.fillStyle = '#000';
  ctx.font = '256px serif';
  ctx.textAlign = 'left';
  ctx.fillText(message, MAP_WIDTH / 2 - 400, CANVAS_HEIGHT / 2);
}
