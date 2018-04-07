import {gridSize} from '../../../config';
import Unit from '../../../unit/types/Unit';

export const addUnitIntoArray = (unit:Unit, arr:any[]):any[] => {
  let updatedArr = Object.assign([], arr);
  if(!isUnitInArray(unit, arr)) {
    updatedArr.push(unit);
  }
  return updatedArr;
}

export const deleteUnitFromArray = (unit:Unit, arr:any[]):any[] => {
  let updatedArr:Unit[] = arr.filter((el) => {
    if(el.id === unit.id) {
      return false;
    }
    return true;
  });
  return updatedArr;
}

export const deleteUnitFromArmy = (unit:any, arr:any[]):any[] => {
  let updatedArr = arr.filter((el) => {
    if(el.armyPosition.x === unit.armyPosition.x && el.armyPosition.y === unit.armyPosition.y) {
      return false;
    }
    return true;
  });
  return updatedArr;
}

export const getDistanceBetweenTwoUnitsInGrids = (unit1:Unit, unit2:Unit):number => {
  let unit1X:number = unit1.currentNode.x;
  let unit1Y:number = unit1.currentNode.y;
  let unit2X:number = unit2.currentNode.x;
  let unit2Y:number = unit2.currentNode.y;
  let distanceX:number = Math.abs(unit1X - unit2X) / gridSize;
  let distanceY:number = Math.abs(unit1Y - unit2Y) / gridSize;
  let distance:number = distanceX + distanceY;
  return distance;
}

export const isUnitInArray = (checkedUnit:Unit, arr:any[]):boolean => {
  if(arr.length !== 0) {
    for(let unit of arr) {
      if(unit.id === checkedUnit.id) {
        return true;
      }
    }
  }
  return false;
}
