import Unit from '../../../unit/types/Unit';

const setRandomValue = (units:any[]):any => {
  for(let unit of units) {
    let randomValue:number = Math.random();
    unit.randomValue = randomValue;
  }
}

const swap = (arr:any[], a:number, b:number) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export const shuffleUnits = (units:Unit[]):Unit[] => {
  let updatedUnits = Object.assign([], units);
  setRandomValue(updatedUnits);
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
			swap(updatedUnits, min, i);
		}
	}
	return updatedUnits;
}
