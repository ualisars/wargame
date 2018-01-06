import {
  startBattleHeight,
  startBattleStartY,
  startBattleWidth
} from '../../../../../config/mainMenu';
import {
  mainMenuCtx
} from '../../../../../config/context';

export const fillLayout = () => {
  mainMenuCtx.clearRect(0, startBattleStartY, startBattleWidth, startBattleHeight);
  mainMenuCtx.fillStyle = '#2c2f33';
  mainMenuCtx.fillRect(0, startBattleStartY, startBattleWidth, startBattleWidth);
}
