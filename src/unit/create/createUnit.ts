import {
  playerUnits,
  computerUnits,
  units
} from '../../store/unit/units';
import {incUnitId} from '../../store/unit/unitId';
import {drawUnit} from '../draw/drawUnit';

import {chooseUnitType} from '../actions/unitActions';

// create Unit and immediatly push it into units array
export let createUnit = (type:string, x:number, y:number, radius:number, controlBy:string) => {
  let unit:any;
  unit = chooseUnitType(type, x, y, radius, controlBy);
  units.push(unit);
  if(controlBy === 'player') playerUnits.push(unit);
  else if(controlBy === 'computer') computerUnits.push(unit);
  drawUnit(unit);
  incUnitId();
  return unit;
}
