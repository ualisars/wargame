import {
  mainMenuCtx,
  unitRosterWidth,
  armyLayoutWidth,
  armyLayoutHeight,
  infoLayoutWidth,
  infoLayoutHeight
} from './mainMenuSettings';

export const displayInfo = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(armyLayoutWidth + unitRosterWidth, 0, infoLayoutWidth, infoLayoutHeight);
}
