export const units:any[] = [];
export let currentlyChosenUnit:any = null;

export const assignCurrentlyChosenUnit = (unit:any) => {
  // check unit
  if(unit) {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }

}
