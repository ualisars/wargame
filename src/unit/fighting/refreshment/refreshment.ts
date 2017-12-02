/*
  If unit is not moving and not fighting
  so increase unit's condition
*/
export const refreshment = (unit:any) => {
  if(!unit.isFighting && !unit.isMoving) {
    if(unit.condition < 100) { // condition cannot be more than 100
      unit.increaseCondition(1);
    }
  }
}
