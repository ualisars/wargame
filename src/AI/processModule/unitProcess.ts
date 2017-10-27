/*
  (DoesUnitNeedProtection)
  Check advantages and disadvantages of the unit
  and decide whether the unit require support or not
  Unit need protection if
  1. Player has unit that is dangerous for this unit(e.g unit is archer,
    but player has cavalry in the roster)
  2. Unit is not mobile and vulnerable for flank attack
*/
export const DoesUnitNeedProtection = (unit:any):boolean => {

  return false;
}
/*
  (DoesUnitNeedHelp)
  Unit need help if:
  1. Player has more units nearby
  2. Player has more total power nearby this specific unit
  3. Unit is flanked
  return value is range from 0 to 1,
  0 unit does not need any help
  1 - unit need help urgently
*/
export const DoesUnitNeedHelp = (unit:any):number => {
  return 0;
}
