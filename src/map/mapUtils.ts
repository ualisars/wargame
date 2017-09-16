import {canvas, ctx} from './mapConfig';

export const createMountains = (map:any[], startX:number, startY:number, width:number, height:number) => {

  for(let node of map) {

  }
}

export const showObstacles = (map:any[], gridSize:number) => {
  for(let node of map) {
    if(node.value === 0) {
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(node.topLeftX, node.topLeftY, gridSize, gridSize)
    }
  }
}

export const neighbours = (node:any) => {
  let dirs = [
    [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]
  ];
  let result = [];
  for(let dir of dirs) {
    result.push(node[0] + dir[0], node[1] + dir[1])
  }
}
