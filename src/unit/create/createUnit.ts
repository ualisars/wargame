import { addToUnits } from '../../store/unit/units';
import { incUnitId } from '../../store/unit/unitId';
import { drawUnit } from '../draw/drawUnit';
import Unit from '../types/Unit';
import {chooseUnitType} from '../choose';

export let createUnit = (type:string, x:number, y:number, controlBy:string): Unit => {
  if(controlBy === 'player' || controlBy === 'computer') {
    let unit:Unit;
    unit = chooseUnitType(type, x, y, controlBy);
    addToUnits(unit);
    drawUnit(unit);
    incUnitId();
    return unit;
  } else {
    throw new Error("Unit cannot be controlled by " + controlBy);
  }
}

export const createDefaultUnit = (type:string, x:number, y:number, controlBy:string): Unit => {
  if(controlBy === 'player' || controlBy === 'computer') {
    let unit:Unit;
    unit = chooseUnitType(type, x, y, controlBy);
    return unit;
  } else {
    throw new Error("Unit cannot be controlled by " + controlBy);
  }
}
