import Unit from '../../../unit/types/Unit';

const setRandomValue = (units:Unit[]):any[] => {
  let updatedUnits:any[] = Object.assign([], units);
  for(let unit of updatedUnits) {
    let randomValue:number = Math.random();
    unit.randomValue = randomValue;
  }
  return updatedUnits;
}

const swap = (arr:any[], a:number, b:number) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export const shuffleUnits = (units:Unit[]):Unit[] => {
  let originalUnits:Unit[] = Object.assign([], units);
  let updatedUnits:any[] = setRandomValue(units);

  for(let i = 0; i < updatedUnits.length; ++i) {
		let min = i;
		for(let j = i + 1; j < units.length; ++j) {
			if(updatedUnits[j].randomValue === updatedUnits[min].randomValue) {
					min = j;
			}
			if(updatedUnits[j].randomValue < updatedUnits[min].randomValue) {
				min = j;
			}
		}
		if(min !== i) {
			swap(originalUnits, min, i);
		}
	}
	return originalUnits;
}
