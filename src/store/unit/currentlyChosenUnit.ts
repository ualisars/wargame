import Unit from '../../unit/types/Unit';

export let currentlyChosenUnit:Unit = null;

export const assignCurrentlyChosenUnit = (unit:Unit) => {
  if(unit) {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }
}
