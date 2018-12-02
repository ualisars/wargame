import {
  MAP_HEIGHT,
  gridSize,
  MAP_WIDTH
} from '../../config';

export const neighbors = (map: any[], node:any) => {
  let dirs = [
    {x: -gridSize, y: -gridSize},
    {x: 0, y: -gridSize, distance: 10},
    {x: gridSize, y: -gridSize},
    {x: -gridSize, y: 0},
    {x: gridSize, y: 0},
    {x: -gridSize, y: gridSize},
    {x: 0, y: gridSize},
    {x: gridSize, y: gridSize}
  ];
  let result = [];
  for(let dir of dirs) {
    let neighbor = {
      x: node.x + dir.x,
      y: node.y + dir.y
    }
    if(neighbor.x >= 0 && neighbor.x <= MAP_WIDTH && neighbor.y >= 0 && neighbor.y <= MAP_HEIGHT) {
        let finded:boolean = false;
        for(let node of map) {
          if(neighbor.x === node.x && neighbor.y === node.y) {
            finded = true;
          }
        }
        if(finded) {
          result.push({
            x: neighbor.x,
            y: neighbor.y
          });
        }
    }
  }
  return result;
}

export const addNeighbors = (map:any[]) => {
  return new Promise(resolve => {
    for(let node of map) {
      let n = neighbors(map, node);
      node.neighbors = n;
    }
    resolve();
  });
  
}
