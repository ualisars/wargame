/*
  find property with min value among units
*/
export const getUnitsMinProperty = (units:any[], property:any):number => {
  if(units.length > 0) {
    let minProperty:number = units[0][property];
    for(let i = 1; i < units.length; ++i) {
      if(minProperty > units[i][property]) {
        minProperty = units[i][property];
      }
    }
    return minProperty;
  }
}

/*
  find property with max value among units
*/
export const getUnitsMaxProperty = (units:any[], property:any):number => {
  if(units.length > 0) {
    let maxProperty:number = units[0][property];
    for(let i = 1; i < units.length; ++i) {
      if(maxProperty < units[i][property]) {
        maxProperty = units[i][property];
      }
    }
    return maxProperty;
  }
}
