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

export const neighbours = (node:any) => {
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
    let n = neighbours(node);
    node.neighbours = n;
  }
}

export const createOneObstacle = (positionX:number, positionY:number, type:string='forest') => {
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
map = createObstacles(120, 160, 120, 160, 'river');
map = createObstacles(660, 820, 180, 200, 'river');
map = createObstacles(900, 1180, 180, 200, 'river');
map = createOneObstacle(300, 340, 'mountain');
map = createObstacles(280, 320, 360, 380, 'mountain');
map = createObstacles(740, 760, 420, 500, 'forest');
map = createObstacles(960, 1000, 440, 460, 'forest');
map = createObstacles(980, 1000, 440, 520, 'forest');
addNeighbours(map);
