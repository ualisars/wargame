import { defaultUnits } from '../unit/defaultUnits';

export let roster: any[] = [];

export const createRoster = () => {
  for(let unit of defaultUnits) {
    roster.push(unit);
  }

  for(let unit of roster) {
    unit.selected = false;
  }
}


