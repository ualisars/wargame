import {
  rosterImgHeight,
  rosterImgWidth
} from '../rosterSettings';
import {roster} from '../../../../../store/roster/roster';

export const isUnitSelectedInRoster = (mouseX:number, mouseY:number) => {
  for(let unit of roster) {
    let x0 = unit.x;
    let x1 = x0 + rosterImgWidth;
    let y0 = unit.y;
    let y1 = y0 + rosterImgHeight;
    if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
      return unit;
    }
  }
  return null;
}
