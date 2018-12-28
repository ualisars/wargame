import {
  MAP_HEIGHT,
  gridSize,
  MAP_WIDTH
} from '../../config';
import MapNode from './MapNode';

export const createNodes = (): MapNode[] => {
  let map: MapNode[] = [];
  let id = 0;
  for(let x = 0; x < MAP_WIDTH; x += gridSize) {
    for(let y = 0; y < MAP_HEIGHT; y += gridSize) {
      let mapNode: MapNode = new MapNode(id, x, y);
      map.push(mapNode);
      id++;
    }
  }
  return map;
}

export const createSearchMap = (map: MapNode[]) => {
  let searchMap: any = {};
  let currentX: number = 0;
  let currentY: MapNode[] = [];
  for(let i = 0; i < map.length; ++i) {
    currentY.push(map[i]);
    if(i <= map.length - 2 && map[i + 1].x !== currentX) {
      searchMap[currentX] = currentY;
      currentX += gridSize;
      currentY = [];
    }
  }
  searchMap[currentX] = currentY;
  return searchMap;
}
