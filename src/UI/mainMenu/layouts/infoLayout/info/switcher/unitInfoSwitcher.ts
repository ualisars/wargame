import {mainMenuCtx} from '../../../../settings';
import {
  height,
  unitInfoX,
  unitInfoY,
  width
} from '../../infoSettings';
import {
  showUnitInfo
} from '../../../../../../config/mainMenu';

export const unitInfoSwitcher = () => {
  if(showUnitInfo) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(unitInfoX, unitInfoY, width, height);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(unitInfoX, unitInfoY, width, height);
  // text
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Unit Info', unitInfoX + 35, unitInfoY + 20);
}
