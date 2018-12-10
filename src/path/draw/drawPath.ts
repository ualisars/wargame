import { gridSize, MAP_WIDTH, MAP_HEIGHT } from '../../config';
import { pathCtx } from '../../config/context/context';
import { Unit } from '../../unit';
import { currentlyChosenUnit } from '../../store/unit/currentlyChosenUnit';
import { getNodeFromMap } from '../../utils';

export const drawPath = (unit: Unit, path:any[], startIndex: number = 0) => {
  if(currentlyChosenUnit.id === unit.id) {
    clearPath();
    if(startIndex != 0) {
      startIndex -= 1;
    }
    for(let i = startIndex; i != path.length - 1; ++i) {
      let currentNodeCenterX = path[i].x + (gridSize / 2);
      let currentNodeCenterY = path[i].y + (gridSize / 2);
      let nextNodeCenterX = path[i + 1].x + (gridSize / 2);
      let nextNodeCenterY = path[i + 1].y + (gridSize / 2);
      pathCtx.save();
      pathCtx.strokeStyle = 'yellow';
      pathCtx.beginPath();
      pathCtx.moveTo(currentNodeCenterX, currentNodeCenterY);
      pathCtx.lineTo(nextNodeCenterX, nextNodeCenterY);
      pathCtx.stroke();
      if(i == path.length - 2) {
        let radius = Math.round(gridSize / 4);
        pathCtx.beginPath();
        pathCtx.arc(nextNodeCenterX, nextNodeCenterY, radius, 0, Math.PI*2);
        pathCtx.fill();
        pathCtx.closePath();
        
      }
      pathCtx.restore();
    }
  }
}

export const clearPath = () => {
  pathCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
}

export const clearCurrentNode = (unit: Unit) => {
  let node = getNodeFromMap(unit.x, unit.y);
  pathCtx.clearRect(node.x, node.y, gridSize, gridSize);
}
