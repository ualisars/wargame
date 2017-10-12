export const units:any[] = [];
export const playersUnits: any[] = [];
export const computersUnits: any[] = [];
export let currentlyChosenUnit:any = null;
export let visibleForPlayerUnits:any[] = [];
export let visibleForComputerUnits:any[] = [];

export const assignCurrentlyChosenUnit = (unit:any) => {
  // check unit
  if(unit) {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }

}
