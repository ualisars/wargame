export let selectedUnitInRoster:any = null;

export const selectUnitInRoster = (unit:any) => {
  console.log('selectUnitInRoster');
  console.log('unit:', unit);
  if(unit) {
    console.log('unit');
    selectedUnitInRoster = unit;
  } else {
    console.log('null');
    selectedUnitInRoster = null;
  }
  console.log('selectedUnitInRoster', selectedUnitInRoster);
}
