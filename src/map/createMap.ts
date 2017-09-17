import {
  canvas,
  ctx,
  WIDTH,
  HEIGHT,
  gridSize
} from '../map/mapConfig';

import {
  deleteObjectFromArray,
} from '../utils/objUtils';

export const createNodes = () => {
  let map:any[] = [];
  let value = 1;
  let id = 0;
  for(let y = 0; y <= HEIGHT; y+= gridSize) {
    for(let x = 0; x <= WIDTH; x+= gridSize) {
      map.push({
        id: id,
        x: x,
        y: y,
        value: value,
        neighbours: []
      });
      id++;
    }
  }
  return map;
}

export const neighbours = (map: any[], node:any) => {
  let dirs = [
    {x: -gridSize, y: -gridSize, distance: 14},
    {x: 0, y: -gridSize, distance: 10},
    {x: gridSize, y: -gridSize, distance: 14},
    {x: -gridSize, y: 0, distance: 10},
    {x: gridSize, y: 0, distance: 10},
    {x: -gridSize, y: gridSize, distance: 14},
    {x: 0, y: gridSize, distance: 10},
    {x: gridSize, y: gridSize, distance: 14}
  ];
  let result = [];
  for(let dir of dirs) {
    let neighbour = {
      x: node.x + dir.x,
      y: node.y + dir.y,
      distance: dir.distance
    }
    if(neighbour.x >= 0 && neighbour.x < WIDTH && neighbour.y >= 0 && neighbour.y < HEIGHT) {
        let finded:boolean = false;
        for(let node of map) {
          if(neighbour.x === node.x && neighbour.y === node.y) {
            finded = true;
          }
        }
        if(finded) {
          result.push({
            x: neighbour.x,
            y: neighbour.y,
            distance: neighbour.distance,
          });
        }
    }
  }
  return result;
}

export const addNeighbours = (map:any[]) => {
  for(let node of map) {
    let n = neighbours(map, node);
    node.neighbours = n;
  }
}

export const createUnitObstacle = (map:any[], positionX:number, positionY:number) => {
  let node = {
    x: positionX,
    y: positionY
  };
  return deleteObjectFromArray(node, map)
}

export const createOneObstacle = (map:any[], positionX:number, positionY:number, type:string='forest') => {
  let node = {
    x: positionX,
    y: positionY
  };
  if(type === 'forest') ctx.fillStyle = 'green';
  else if(type === 'mountain') ctx.fillStyle = '#8B4513';
  else if(type === 'river') ctx.fillStyle = 'blue';
  ctx.fillRect(positionX, positionY, gridSize, gridSize);
  return deleteObjectFromArray(node, map)
}

export const createObstacles = (startX:number, finishX:number, startY:number, finishY:number, type:string='forest') => {
  let newMap:any[] = map;
  for(let x = startX; x <= finishX; x += gridSize) {
    for(let y = startY; y <= finishY; y += gridSize) {
      let node = {
        x,
        y
      }
      newMap = deleteObjectFromArray(node, newMap);
      if(type === 'forest') ctx.fillStyle = 'green';
      else if(type === 'mountain') ctx.fillStyle = '#8B4513';
      else if(type === 'river') ctx.fillStyle = 'blue';
      let xLength = Math.abs(startX - finishX);
      let yLength = Math.abs(startY - finishY);
      ctx.fillRect(x, y, gridSize, gridSize);
    }
  }
  return newMap;
}

export let map = createNodes();
map = createObstacles(120, 220, 120, 160, 'river');
map = createObstacles(640, 800, 160, 160, 'river');
map = createObstacles(880, 1120, 160, 160, 'river');
map = createOneObstacle(map, 320, 280, 'mountain');
map = createObstacles(240, 340, 320, 360, 'mountain');
map = createObstacles(480, 580, 440, 480, 'forest');
map = createObstacles(960, 1000, 360, 400, 'forest');
map = createObstacles(920, 1000, 400, 500, 'forest');
addNeighbours(map);
