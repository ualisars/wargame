import {map} from '../createMap';
import {
  HEIGHT,
  gridSize,
  WIDTH
} from '../../config';
import {
  deleteObjectFromArray,
  drawObstacle
} from '../../utils';

export const createObstacles = (startX:number, finishX:number, startY:number, finishY:number, type:string='forest') => {
  let newMap:any[] = map;
  console.log('newMap', newMap);
  for(let x = startX; x <= finishX; x += gridSize) {
    for(let y = startY; y <= finishY; y += gridSize) {
      let node = {
        x,
        y
      }
      newMap = deleteObjectFromArray(node, newMap);
      console.log('node', node, 'has been inserted');
      console.log('newMap after', newMap);
      let xLength = Math.abs(startX - finishX);
      let yLength = Math.abs(startY - finishY);
      let src:string;
      if(type === 'forest') src='./src/img/terrain/trees.png';
      else if(type === 'mountain') src='/src/img/terrain/mountain.png';
      else if(type === 'river') src='./src/img/terrain/river.jpg';
      drawObstacle(node.x, node.y, gridSize, gridSize, src);
    }
  }
  return newMap;
}
