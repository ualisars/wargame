import {
  incUnitId
} from '../store/unitStore';
import {
  playerUnits,
  computerUnits,
  units
} from '../store';
import {drawUnit} from './drawUnit';

import {chooseUnitType} from './unitActions';

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
