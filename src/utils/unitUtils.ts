export const deleteUnitFromArray = (unit:any, arr:any[]):any[] => {
  let updatedArr = arr.filter((el) => {
    if(el.id === unit.id) {
      return false;
    }
    return true;
  });
  return updatedArr;
}
