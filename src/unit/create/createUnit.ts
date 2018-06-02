import {
 addToUnits
} from '../../store/unit/units';
import {incUnitId} from '../../store/unit/unitId';
import {drawUnit} from '../draw/drawUnit';
import Unit from '../types/Unit';

import {chooseUnitType} from '../choose';

// create Unit and immediatly push it into units array
export let createUnit = (type:string, x:number, y:number, controlBy:string) => {
  let unit:Unit;
  unit = chooseUnitType(type, x, y, controlBy);
  addToUnits(unit);
  drawUnit(unit);
  incUnitId();
  return unit;
}
