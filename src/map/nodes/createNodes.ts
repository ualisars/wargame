import {
  MAP_HEIGHT,
  gridSize,
  MAP_WIDTH
} from '../../config';
import MapNode from './MapNode';

export const createNodes = (): MapNode[] => {
  let map: MapNode[] = [];
  let id = 0;
  for(let y = 0; y < MAP_HEIGHT; y+= gridSize) {
    for(let x = 0; x < MAP_WIDTH; x+= gridSize) {
      let mapNode: MapNode = new MapNode(id, x, y);
      map.push(mapNode);
      id++;
    }
  }
  return map;
}
