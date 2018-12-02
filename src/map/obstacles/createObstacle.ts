import { gridSize } from '../../config';
import {
  deleteObjectFromArray,
  drawObstacle
} from '../../utils';

export const createOneObstacle = (map:any[], positionX:number, positionY:number, type:string='forest') => {
  let node = {
    x: positionX,
    y: positionY
  };
  if(type === 'forest') drawObstacle(node.x, node.y, gridSize, gridSize, './src/img/terrain/trees.png');
  else if(type === 'mountain') drawObstacle(node.x, node.y, gridSize, gridSize,'./src/img/terrain/mountain.png');
  else if(type === 'river') drawObstacle(node.x, node.y, gridSize, gridSize,'./src/img/terrain/river.jpg');
  return deleteObjectFromArray(node, map)
}
