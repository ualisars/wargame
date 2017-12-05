export let hoveredUnit:any = null;

export const changeHoveredUnit = (unit:any) => {
  if(unit) {
    hoveredUnit = unit;
  }
}
