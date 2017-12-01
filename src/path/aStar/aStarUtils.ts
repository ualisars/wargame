export const getMinFScore = (open:any[]) => {
  let min = 0;
  for(let i = 1; i < open.length - 1; ++i) {
    if(open[min].fScore > open[i].fScore) {
      min = i;
    }
  }
  return open[min];
}

export const unclosedNeigbours = (current:any, closed:any) => {
  let neighboursNotInClosed = [];
  for(let neighbour of current.neighbours) {
    let isInClosed:boolean = false;
    for(let node of closed) {
      if(neighbour.x === node.x && neighbour.y === node.y) {
        isInClosed = true;
      }
    }
    if(!isInClosed) {
      neighboursNotInClosed.push(neighbour);
    }
  }
  return neighboursNotInClosed;
}

export const isObjectInMapKeys = (object:any, map:any) => {
  let arr:any[] = Array.from(map);
  let result:boolean = false;
  for(let i = 0; i < arr.length; ++i) {
    //console.log('object', object);
    if(arr[i][0].x === object.x && arr[i][0].y === object.y) {
      result = true;
    }
  }
  return result;
}
