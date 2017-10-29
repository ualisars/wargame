import {gridSize} from '../map/mapSettings';

export const deleteUnitFromArray = (unit:any, arr:any[]):any[] => {
  let updatedArr = arr.filter((el) => {
    if(el.id === unit.id) {
      return false;
    }
    return true;
  });
  return updatedArr;
}

export const getDistanceBetweenTwoUnitsInGrids = (unit1:any, unit2:any):number => {
  let unit1X:number = unit1.currentNode.x;
  let unit1Y:number = unit1.currentNode.y;
  let unit2X:number = unit2.currentNode.x;
  let unit2Y:number = unit2.currentNode.y;
  let distanceX:number = Math.abs(unit1X - unit2X) / gridSize;
  let distanceY:number = Math.abs(unit1Y - unit2Y) / gridSize;
  let distance:number = distanceX + distanceY;
  return distance;
}
