import {gridSize} from '../../config';
import {assignCurrentlyChosenUnit} from '../../store/unit/currentlyChosenUnit';
import Unit from '../types/Unit';


export const onChooseUnit = (units:Unit[], mouseX:number, mouseY:number) => {
  let foundUnit = null;
  for(let unit of units) {
    let bottomRightX = unit.x + gridSize;
    let bottomRightY = unit.y + gridSize;
    if(mouseX >= unit.x && mouseX < bottomRightX && mouseY >= unit.y && mouseY < bottomRightY) {
      console.log('unit', unit.name, ' was chosen');
      unit.isCurrentlyChosen = true;
      foundUnit = unit;
    }
  }
  assignCurrentlyChosenUnit(foundUnit);
}
