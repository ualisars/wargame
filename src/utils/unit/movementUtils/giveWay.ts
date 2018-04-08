/*
  Stop one of the units that are goind towards each other
*/
export const giveWay = (unit:any, blockingUnit:any) => {
  if(unit.speed > blockingUnit.speed) {
    return true;
  }
  else if(unit.speed === blockingUnit.speed) {
    if(unit.id < blockingUnit.id) {
      return true;
    }
  }
}
