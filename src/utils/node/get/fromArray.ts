export const getNodeFromArray = (object:any, arr:any[]):any => {
  for(let node of arr) {
    if(node.x === object.x && node.y && object.y) {
      return node;
    }
  }
}
