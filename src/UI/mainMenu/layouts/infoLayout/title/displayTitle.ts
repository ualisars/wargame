import {
  mainMenuCtx,
  dragAndDropCanvasCtx
} from '../../../settings';
import {
  unitInfoTitleX,
  unitInfoTitleY
} from '../settings';
export const displayTitle = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Unit Info:', unitInfoTitleX, unitInfoTitleY);
}
