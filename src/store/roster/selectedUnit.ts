export let selectedUnitInRoster:any = null;

export const selectUnitInRoster = (unit:any) => {
  if(unit) {
    selectedUnitInRoster = unit;
  } else {
    selectedUnitInRoster = null;
  }
}
