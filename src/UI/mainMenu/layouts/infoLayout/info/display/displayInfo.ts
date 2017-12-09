import {
  mainMenuCtx
} from '../../../../settings';
import {
  armyLayoutWidth,
  unitRosterWidth,
  titleHeight,
  infoLayoutWidth,
  infoLayoutHeight
} from '../../../../../../config/mainMenu';
import {showSwither} from '../switcher';

export const displayInfo = () => {
  mainMenuCtx.clearRect(armyLayoutWidth + unitRosterWidth, titleHeight, infoLayoutWidth, infoLayoutHeight);
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(armyLayoutWidth + unitRosterWidth, titleHeight, infoLayoutWidth, infoLayoutHeight);
  showSwither();
}
