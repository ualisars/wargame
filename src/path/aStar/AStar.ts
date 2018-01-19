import {neighbors} from '../../map';
import {
  deleteObjectFromArray,
  isObjectInArray
} from '../../utils';

import {
  getMinFScore,
  unclosedNeigbours,
  isObjectInMapKeys
} from './aStarUtils';

export const aStar = (map:any[], startNode:any, finishNode:any) => {
  // the set of currently discovered nodes that are not evaluated yet
  // Initially only the start node is known
  let open:any[] = [];

  // the set of nodes that already evaluated
  let closed:any[] = [];
  startNode.gScore = 0;
  startNode.fScore = startNode.gScore + h(startNode, finishNode)
  open.push(startNode);

  // for each node, which node is can most efficiently be reached from
  // if a node can be reached from many nodes, cameFrom will eventially
  // contain the most efficient previous step
  let from = new Map();
  // For each node, the cost of getting from the start node to that node.
  while(open) {
    let current:any = getMinFScore(open);
    //console.log('current', current);
    if(current.x === finishNode.x && current.y === finishNode.y) {
      //console.error('Path', reconstructPath(from, current));
      return reconstructPath(from, current);
    }
    open = deleteObjectFromArray(current, open);
    closed.push(current);
    for(let neighbour of unclosedNeigbours(current, closed)) {
      let tempG = current.gScore + neighbour.distance;
      if(!isObjectInArray(neighbour, open) || tempG < neighbour.gScore) {
        from.set(neighbour, current);
        neighbour.gScore = tempG;
        neighbour.fScore = neighbour.gScore + h(neighbour, finishNode);
      }
      if(!isObjectInArray(neighbour, open)) { // create function
        let nodeNeighbours = neighbors(map, neighbour);
        neighbour.neighbours = nodeNeighbours;
        open.push(neighbour);
      }
    }
  }
  return 0; // failure
}

export const h = (startNode:any, finishNode:any) => {
//function heuristic(node) =
  // dx = abs(node.x - goal.x)
  // dy = abs(node.y - goal.y)
  // return D * (dx + dy) + (D2 - 2 * D) * min(dx, dy)
  let D = 10; // cost of moving horizontally
  let D2 = 14; // cost of moving diagonally
  let dx = Math.abs(startNode.x - finishNode.x);
  let dy = Math.abs(startNode.y - finishNode.y);
  return D * (dx + dy) + (D2 - 2 * D) * Math.min(dx, dy);
}



export const reconstructPath = (from:any, current:any) => {
  // function reconstruct_path(cameFrom, current)
  //   total_path := [current]
  //   while current in cameFrom.Keys:
  //       current := cameFrom[current]
  //       total_path.append(current)
  //   return total_path
  let reversePath:any[] = [current];
  let totalPath:any[] = [];
  while(isObjectInMapKeys(current, from)) {
    current = from.get(current);
    reversePath.push(current);
  }
  for(let i = reversePath.length - 1; i >= 0; i--) {
    totalPath.push(reversePath[i]);
  }
  return totalPath;
}
