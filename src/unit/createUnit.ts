import {
  playersUnits,
  computersUnits,
  units,
  incUnitId
} from '../store/unitStore';
import {drawUnit} from './unitActions';

import {chooseUnitType} from './unitActions';

// create Unit and immediatly push it into units array
export let createUnit = (type:string, x:number, y:number, radius:number, controlBy:string) => {
  let unit:any;
  unit = chooseUnitType(type, x, y, radius, controlBy);
  units.push(unit);
  if(controlBy === 'player') playersUnits.push(unit);
  else if(controlBy === 'computer') computersUnits.push(unit);
  drawUnit(unit);
  incUnitId();
  return unit;
}
