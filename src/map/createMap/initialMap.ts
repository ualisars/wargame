import {
  MAP_WIDTH,
  MAP_HEIGHT,
  gridSize
} from '../../config/map';
import {
  createNodes,
  createOneObstacle,
  createObstacles,
  addNeighbors
} from '..';
import MapNode from '../nodes/MapNode';

export let initialMap:MapNode[] = [];

export const createMap = () => {
  return new Promise(resolve => {
    initialMap = createNodes();
    resolve();
  });
}

export let addObstaclesToMap = () => {
  return new Promise(resolve => {
    initialMap = createObstacles(120, 220, 120, 160, 'river');
    initialMap = createObstacles(640, 800, 160, 160, 'river');
    initialMap = createObstacles(880, 1120, 160, 160, 'river');
    initialMap = createOneObstacle(initialMap, 320, 280, 'mountain');
    initialMap = createObstacles(240, 340, 320, 360, 'mountain');
    initialMap = createObstacles(480, 580, 400, 440, 'forest');
    initialMap = createObstacles(960, 1000, 360, 400, 'forest');
    initialMap = createObstacles(920, 1000, 400, 440, 'forest');
    addNeighbors(initialMap).then(() => resolve());
  });
  
}

export const initializeMap = () => {
  return new Promise(resolve => {
    console.error('initializeMap');
    createMap()
    .then(() => addObstaclesToMap())
    .then(() => {
      console.log('map', initialMap);
      resolve();
    });
  });
}
