import {
  startBattleButtonX,
  startBattleButtonWidth,
  startBattleButtonY,
  startBattleButtonHeight
} from '../settings';

export const isStartBattleButtonSelected = (mouseX:number, mouseY:number):boolean => {
  let x0 = startBattleButtonX;
  let x1 = x0 + startBattleButtonWidth;
  let y0 = startBattleButtonY;
  let y1 = y0 + startBattleButtonHeight;
  if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
    return true;
  }
  return false;
}
