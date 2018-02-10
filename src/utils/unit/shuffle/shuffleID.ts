const setRandomValue = (units:any[]):any[] => {
  let ids = [];
  for(let unit of units) {
    let value = Math.random();
    let obj = {
      id: unit.id,
      randomValue: value
    }
    ids.push(obj);
  }
  return ids;
}


const swap = (arr:any[], a:number, b:number) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export const shuffleID = (units:any[]):any[] => {
  let updatedUnits = Object.assign([], units);
  let ids:any[] = setRandomValue(updatedUnits);
  for(let i = 0; i < ids.length; ++i) {
		let min = i;
		for(let j = i + 1; j < ids.length; ++j) {
			if(ids[j].randomValue === ids[min].randomValue) {
					min = j;
			}
			if(ids[j].randomValue < ids[min].randomValue) {
				min = j;
			}
		}
		if(min !== i) {
			swap(ids, min, i);
		}
	}
	return ids;
}
