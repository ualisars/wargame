import {gridSize, CANVAS_HEIGHT} from '../../config';
import {assignCurrentlyChosenUnit} from '../../store/unit/currentlyChosenUnit';
import Unit from '../types/Unit';
import { playerUnits } from '../../store/unit/units';
import { UNIT_LEFT_PANEL_WIDTH, UNIT_ICON_WIDTH, UNIT_PANEL_HEIGHT, UNIT_ICON_HEIGHT } from '../../UI/battleUI/unitPanel/settings';


export const onChooseUnit = (units:Unit[], mouseX:number, mouseY:number) => {
  let foundUnit = null;
  for(let unit of units) {
    let bottomRightX = unit.x + gridSize;
    let bottomRightY = unit.y + gridSize;
    if(mouseX >= unit.x && mouseX < bottomRightX && mouseY >= unit.y && mouseY < bottomRightY) {
      console.log('unit', unit.name, ' was chosen');
      unit.isCurrentlyChosen = true;
      foundUnit = unit;
      break;
    }
  }

  let startX = UNIT_LEFT_PANEL_WIDTH;
  let y0 = CANVAS_HEIGHT - UNIT_PANEL_HEIGHT;
  let y1 = y0 + UNIT_ICON_HEIGHT;
  for(let i = 0; i < playerUnits.length; ++i) {
    let x0 = startX + (UNIT_ICON_WIDTH * (i + 1));
    let x1 = x0 + UNIT_ICON_WIDTH;
    if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
      let unit = playerUnits[i];
      unit.isCurrentlyChosen = true;
      foundUnit = unit;
      break;
    }
  }
  assignCurrentlyChosenUnit(foundUnit);
}
