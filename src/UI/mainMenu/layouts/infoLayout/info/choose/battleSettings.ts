import {
  battleSettingsX,
  battleSettingsY,
  height,
  width
} from '../../infoSettings';

export const onChooseBattleSettings = (mouseX:number, mouseY:number) => {
  let x0 = battleSettingsX;
  let x1 = battleSettingsX + width;
  let y0 = battleSettingsY;
  let y1 = battleSettingsY + height;
  if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
    return true;
  }
  return false;
}
