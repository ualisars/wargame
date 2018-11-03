import {
    computerUnits,
    playerUnits
  } from '../../store/unit/units';
  import {getSurroundedNodes} from './getSurroundedNodes';
  import {getNodeFromMap} from '../node/get/fromMap';
  import {deleteUnitFromArray, isUnitInArray} from '../unit/general';
  import Unit from '../../unit/types/Unit';
  
  export const getSurroundedUnits = (
      unit: Unit, 
      units: Unit[], 
      range: number = 3, 
      countOneself: boolean = false
    ): Unit[] => {
    let surroundedUnits:Unit[] = [];
    let updatedUnits:Unit[] = Object.assign([], units);
    
    if(!countOneself && isUnitInArray(unit, updatedUnits)) {
        updatedUnits = deleteUnitFromArray(unit, updatedUnits);
    }
    
    let nodes = getSurroundedNodes(unit, range);
    for(let node of nodes) {
      for(let currentUnit of updatedUnits) {
        let currentUnitNode = getNodeFromMap(currentUnit.x, currentUnit.y);
        if(node.x === currentUnitNode.x && node.y === currentUnitNode.y) {
          surroundedUnits.push(currentUnit);
        }
      }
    }
    return surroundedUnits;
  }