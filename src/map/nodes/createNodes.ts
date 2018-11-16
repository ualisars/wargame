import {
  HEIGHT,
  gridSize,
  WIDTH
} from '../../config';
import MapNode from './MapNode';

export const createNodes = (): MapNode[] => {
  let map: MapNode[] = [];
  let id = 0;
  for(let y = 0; y < HEIGHT; y+= gridSize) {
    for(let x = 0; x < WIDTH; x+= gridSize) {
      let mapNode: MapNode = new MapNode(id, x, y);
      map.push(mapNode);
      id++;
    }
  }
  return map;
}
