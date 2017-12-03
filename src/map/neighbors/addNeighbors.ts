import {
  HEIGHT,
  gridSize,
  WIDTH
} from '../../config';

export const neighbors = (map: any[], node:any) => {
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
    let neighbor = {
      x: node.x + dir.x,
      y: node.y + dir.y,
      distance: dir.distance
    }
    if(neighbor.x >= 0 && neighbor.x <= WIDTH && neighbor.y >= 0 && neighbor.y <= HEIGHT) {
        let finded:boolean = false;
        for(let node of map) {
          if(neighbor.x === node.x && neighbor.y === node.y) {
            finded = true;
          }
        }
        if(finded) {
          result.push({
            x: neighbor.x,
            y: neighbor.y,
            distance: neighbor.distance,
          });
        }
    }
  }
  return result;
}

export const addNeighbors = (map:any[]) => {
  for(let node of map) {
    let n = neighbors(map, node);
    node.neighbours = n;
  }
}
