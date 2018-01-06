import {
  height,
  unitInfoX,
  unitInfoY,
  width
} from '../../infoSettings';

export const onChooseUnitInfo = (mouseX:number, mouseY:number) => {
  let x0 = unitInfoX;
  let x1 = unitInfoX + width;
  let y0 = unitInfoY;
  let y1 = unitInfoY + height;
  if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
    return true;
  }
  return false;
}
