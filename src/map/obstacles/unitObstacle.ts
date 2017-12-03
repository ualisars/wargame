import {deleteObjectFromArray} from '../../utils';

export const createUnitObstacle = (map:any[], positionX:number, positionY:number) => {
  let node = {
    x: positionX,
    y: positionY
  };
  return deleteObjectFromArray(node, map)
}
