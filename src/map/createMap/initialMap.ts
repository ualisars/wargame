import {
  createNodes,
  createOneObstacle,
  createObstacles,
  addNeighbors
} from '..';
import MapNode from '../nodes/MapNode';
import { createSearchMap } from '../nodes/createNodes';

export let initialMap:MapNode[] = [];
export let searchMap: any = {};

export const createMap = () => {
  return new Promise(resolve => {
    initialMap = createNodes();
    resolve();
  });
}

export const initializeSearchMap = (map: MapNode[]) => {
  return new Promise(resolve => {
      searchMap = createSearchMap(map);
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
    resolve();
  });
}

export const initializeMap = () => {
  return new Promise(resolve => {
    console.error('initializeMap');
    createMap()
    .then(() => addObstaclesToMap())
    .then(() => {
      addNeighbors(initialMap).then(() => initializeSearchMap(initialMap).then(() => {
        resolve();
      }));
    });
  });
}
