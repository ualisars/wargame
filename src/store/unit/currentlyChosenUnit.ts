import Unit from '../../unit/types/Unit';

export let currentlyChosenUnit:Unit = null;

export const assignCurrentlyChosenUnit = (unit:Unit) => {
  if(unit && unit.controlBy === "player") {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }
}
