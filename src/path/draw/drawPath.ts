import { gridSize } from '../../config';
import { pathCtx, ctx } from '../../config/context/context';

export const drawPath = (path:any[]) => {
  for(let i = 0; i != path.length - 1; ++i) {
    let currentNodeCenterX = path[i].x + (gridSize / 2);
    let currentNodeCenterY = path[i].y + (gridSize / 2);
    let nextNodeCenterX = path[i + 1].x + (gridSize / 2);
    let nextNodeCenterY = path[i + 1].y + (gridSize / 2);
    ctx.save();
    ctx.strokeStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(currentNodeCenterX, currentNodeCenterY);
    ctx.lineTo(nextNodeCenterX, nextNodeCenterY);
    ctx.stroke();
    if(i == path.length - 2) {
      let radius = Math.round(gridSize / 3);
      ctx.beginPath();
      ctx.arc(nextNodeCenterX, nextNodeCenterY, radius, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
    }
    ctx.restore();
  }
}
