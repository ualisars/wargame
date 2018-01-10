import {isObjectInArray} from '../../index';

export const addNodeIntoArray = (node:any, arr:any[]) => {
  let updatedArr = Object.assign([], arr);
  if(!isObjectInArray(node, arr)) {
    updatedArr.push(node);
  }
  return updatedArr;
}
