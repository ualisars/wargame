import {
  HEIGHT,
  gridSize,
  WIDTH
} from '../../config';

export const createNodes = () => {
  let map:any[] = [];
  let id = 0;
  for(let y = 0; y < HEIGHT; y+= gridSize) {
    for(let x = 0; x < WIDTH; x+= gridSize) {
      map.push({
        id: id,
        x: x,
        y: y,
      });
      id++;
    }
  }
  return map;
}
