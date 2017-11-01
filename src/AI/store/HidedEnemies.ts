import {
  deleteUnitFromArray,
  isUnitInArray
} from '../../utils/unitUtils';
import {
  visibleForComputerUnits
} from '../../store/unitStore';

class HidedEmenies {
  store:any[] = [];

  addToHidedEnemies(unit:any){
    if(!isUnitInArray(unit, visibleForComputerUnits)) { // hided enemy cannot be visible at the same time
      let updatedUnit = {
        id: unit.id,
        name: unit.name,
        type: unit.type,
        health: unit.health,
        speed: unit.speed,
        armour: unit.armour,
        range: unit.range,
        mobility: unit.mobility,
        meleeDamage: unit.meleeDamage,
        missileDamage: unit.missileDamage,
        charge: unit.charge,
        discipline: unit.discipline,
        condition: unit.condition,
        node: unit.currentNode,
      }
      if(!isUnitInArray(unit, this.store) && unit.controlBy === 'player') { // unit's already added
        this.store.push(updatedUnit);
      }
    }
  }

  removeFromHidedEnemies(unit:any){
    if(isUnitInArray(unit, visibleForComputerUnits)) {
      if(isUnitInArray(unit, this.store)) { // unit should be in the array
        this.store = deleteUnitFromArray(unit, this.store);
      }
    }
  }
}

export default HidedEmenies;
