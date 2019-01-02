import {gridSize} from '../../config';
export const getMinFScore = (open:any[]) => {
  let min = 0;
  for(let i = 1; i < open.length - 1; ++i) {
    if(open[min].fScore > open[i].fScore) {
      min = i;
    }
  }
  return open[min];
}

export const unclosedNeigbors = (current:any, closed:any) => {
  let neighborsNotInClosed = [];
  for(let neighbor of current.neighbors) {
    let isInClosed:boolean = false;
    for(let node of closed) {
      if(neighbor.x === node.x && neighbor.y === node.y) {
        isInClosed = true;
      }
    }
    if(!isInClosed) {
      neighborsNotInClosed.push(neighbor);
    }
  }
  return neighborsNotInClosed;
}

export const isObjectInMapKeys = (object:any, map:any) => {
  let arr:any[] = Array.from(map);
  let result:boolean = false;
  for(let i = 0; i < arr.length; ++i) {
    if(arr[i][0].x === object.x && arr[i][0].y === object.y) {
      result = true;
    }
  }
  return result;
}

export const getNeighborDistance = (currentNode:any, neighbor:any) => {
  let dx = Math.abs(currentNode.x - neighbor.x);
  let dy = Math.abs(currentNode.y - neighbor.y);
  if(dx !== 0 && dy !== 0) {
    return 14;
  } else {
    return 10;
  }
}
