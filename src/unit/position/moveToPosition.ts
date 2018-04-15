import Unit from '../types/Unit';

export const assignUnitMoveToPosition = (unit:Unit, x:number, y:number) => {
  //console.error('assignMoveToPosition');
  if(unit) {
    unit.moveToNodeX = x;
    unit.moveToNodeY = y;
    console.log(unit.name + ' is moving to node:' + unit.moveToNodeX + ' y:' + unit.moveToNodeY);
  } else {
    console.log('warrior not chosen');
  }
}
