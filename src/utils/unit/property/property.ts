/*
  find property with min value among units
  e.g unit1.speed = 6
      unit2.speed = 18
      return 6
*/
export const getUnitsMinProperty = (property:any, units:any[]):number => {
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
  e.g unit1.speed = 17
      unit2.speed = 10
      return 17
*/
export const getUnitsMaxProperty = (property:any, units:any[]):number => {
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
