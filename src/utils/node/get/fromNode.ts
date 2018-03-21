/*
  Get min value of the node from the array
*/
export const getMinValueFromNodes = (searchValue:any, nodes:any[]):any => {
  let min = nodes[0];
  for(let i = 1; i < nodes.length; ++i) {
    if(min[searchValue] > nodes[i][searchValue]) {
      min = nodes[i];
    }
  }
  return min[searchValue];
}

/*
  Get min value of the node from the array
*/
export const getMaxValueFromNodes = (searchValue:any,nodes:any[]):any => {
  let max = nodes[0];
  for(let i = 1; i < nodes.length; ++i) {
    if(max[searchValue] < nodes[i][searchValue]) {
      max = nodes[i];
    }
  }
  return max[searchValue];
}
