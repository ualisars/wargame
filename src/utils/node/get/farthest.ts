import {
  getMinValueFromNodes,
  getMaxValueFromNodes,
  getNodeFromMap,
  getDistanceBetweenUnitAndNodeInGrids
} from '../..';

export const getFarthestNodeFromEnemy = (enemy:any, nodes:any[]):any => {
  let farthestNode:any = nodes[0];
  for(let i = 0; i < nodes.length; ++i) {
    let farthestNodeDistance = getDistanceBetweenUnitAndNodeInGrids(enemy, farthestNode);
    let nodeDistance = getDistanceBetweenUnitAndNodeInGrids(enemy, nodes[i]);
    if(nodeDistance > farthestNodeDistance) {
      farthestNode = nodes[i];
    }
  }
  return farthestNode;
}

/*
  get fathestNodes of the area
  by the x ordinate, nodes located close
  to the edge of the map
*/
export const getFarthestXNodes = (nodes:any[]):any[] => {
  let farthestNodes:any[] = [];
  let minValue = getMinValueFromNodes('x', nodes);
  let maxValue = getMaxValueFromNodes('x', nodes);
  for(let node of nodes) {
    if(node.x === minValue || node.x === maxValue) {
      farthestNodes.push(node);
    }
  }
  return farthestNodes;
}
