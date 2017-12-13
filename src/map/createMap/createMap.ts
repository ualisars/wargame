import {canvas} from '../../config/canvas';
import {ctx} from '../../config/context';
import {
  WIDTH,
  HEIGHT,
  gridSize
} from '../../config';

import {
  deleteObjectFromArray,
} from '../../utils';
import {
  createNodes,
  createOneObstacle,
  createObstacles,
  addNeighbors
} from '../index';

export let map:any[] = [];

export const createMap = () => {
  return new Promise(resolve => {
    map = createNodes();
    resolve();
  });
}

export let addObstaclesToMap = () => {
  map = createObstacles(120, 220, 120, 160, 'river');
  map = createObstacles(640, 800, 160, 160, 'river');
  map = createObstacles(880, 1120, 160, 160, 'river');
  map = createOneObstacle(map, 320, 280, 'mountain');
  map = createObstacles(240, 340, 320, 360, 'mountain');
  map = createObstacles(480, 580, 400, 440, 'forest');
  map = createObstacles(960, 1000, 360, 400, 'forest');
  map = createObstacles(920, 1000, 400, 440, 'forest');
  addNeighbors(map);
}

export const initializeMap = () => {
  createMap()
  .then(() => addObstaclesToMap());
}
