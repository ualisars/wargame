/*
  Checks if unit is currently fighting
  with any enemies, if not fighting
  set isFighting property to false
*/
export const isUnitFighting = (unit:any) => {
  let isFighting = false;
  let figthAgainst = unit.figthAgainst;
  if(!isObjectEmpty(figthAgainst.front)) { // unit has enemy in front of it
    isFighting = true;
  }
  else if(!isObjectEmpty(figthAgainst.rear)) { // unit has an enemy from unit's back
    isFighting = true;
  }
  else if(figthAgainst.flank.length !== 0) { // unit has enemy on the side
    isFighting = true;
  }
  if(!isFighting) { // unit not fighting at that moment
    unit.setIsFightingToFalse(); // set isFighting property to false
  }
}
