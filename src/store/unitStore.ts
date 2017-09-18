export const units:any[] = [];
export const playersUnits: any[] = [];
export const computersUnits: any[] = [];
export let currentlyChosenUnit:any = null;

export const assignCurrentlyChosenUnit = (unit:any) => {
  // check unit
  if(unit) {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }

}
