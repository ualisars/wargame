import {
  deleteUnitFromArray,
  isUnitInArray
} from '../../utils/unitUtils';
import {
  visibleForComputerUnits
} from '../../store/unitStore';

class HidedEmenies {
  hidedEmenies:any[] = [];

  addToHidedEnemies(unit:any){
    if(!isUnitInArray(unit, visibleForComputerUnits)) { // hided enemy cannot be visible at the same time
      let updatedUnit = Object.assign({}, unit);
      if(!isUnitInArray(unit, this.hidedEmenies) && unit.controlBy === 'player') { // unit's already added
        this.hidedEmenies.push(unit);
      }
    }
  }

  removeFromHidedEnemies(unit:any){
    if(isUnitInArray(unit, visibleForComputerUnits)) {
      let updatedUnit = Object.assign({}, unit);
      if(isUnitInArray(unit, this.hidedEmenies)) { // unit should be in the array
        this.hidedEmenies = deleteUnitFromArray(unit, this.hidedEmenies);
      }
    }
  }
}

export default HidedEmenies;
