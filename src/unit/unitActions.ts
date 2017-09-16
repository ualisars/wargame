import {createWarrior} from '../warrior/warriorAction';
import {gridSize} from '../map/mapConfig';
import {updateWarrior} from '../warrior/warriorMovement';
import Unit from './Unit';

import {
  units,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit
} from '../store/unitStore';

import {
  assignWarriorMoveToPosition,
} from '../warrior/warriorAction';

import {
  getNodeFromMap
} from '../path/drawPath';

import {aStar} from '../path/AStar';

export const onChangeWarriorPositionInUnit = (unit:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number) => {
  let row = unit.quantity / 2;
  let col = Math.ceil(unit.quantity / row);
  for(let warrior of unit.warriors) {
    let startNode = getNodeFromMap(currentlyChosenUnit.commanderPositionX, currentlyChosenUnit.commanderPositionY);
    let finishNode = getNodeFromMap(currentMoveToX, currentMoveToY);
    let path:any = aStar(startNode, finishNode);
    assignWarriorMoveToPosition(warrior, currentMoveToX, currentMoveToY);
    updateWarrior(warrior, path, i, currentMoveToX, currentMoveToY);
    currentMoveToX += gridSize;
    console.log('i', i);
    console.log('currentMoveToX', currentMoveToX);
  }
}

export const addWarriorsToUnit = (unit:any) => {
  let startX = unit.commanderPositionX;
  let startY = unit.commanderPositionY;
  let i = 1;
  let row = unit.quantity / 2;
  let col = Math.ceil(unit.quantity / row);
  let finishX = startX + ((row - 1) * gridSize);
  let finishY = startY + ((col - 1) * gridSize);
  let radius = gridSize / 4;
  for(let y = startX; y <= finishY; y += gridSize) {
    if(i <= unit.quantity) {
      for(let x = startX; x <= finishX;  x+= gridSize) {
        let currentWarrior = createWarrior(unit.name, x, y, radius);
        currentWarrior.assignPosition(i);
        unit.addWarriorToUnit(currentWarrior);
        i++;
      }
    }
  }
}

export const createUnit = (name:string, quantity:number, posX:number, posY: number) => {
  let newUnit = new Unit(name, quantity, posX, posY);
  let radius = gridSize / 4;
  addWarriorsToUnit(newUnit);
  units.push(newUnit);
}

// warriors in the unit have same name as unit that they assigned to
// if warrior with same name is chosen that means that unit also
// has been chosen
export const onChooseUnit = (units:any, currentlyChosenWarrior:any) => {
  let foundedUnit = null;
  if(currentlyChosenWarrior) {
    for(let unit of units) {
      if(currentlyChosenWarrior.name === unit.name) {
        foundedUnit = unit;
      }
    }
  }
  assignCurrentlyChosenUnit(foundedUnit);
  console.log('currentlyChosenUnit', currentlyChosenUnit);
}

let getUnitCommander = (unit:any) => {
  for(let warrior of unit.warriors) {
    if(warrior.positionInUnit === 1) {
      return warrior;
    }
  }
}

export const updateUnit = (unit:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number) => {

}
