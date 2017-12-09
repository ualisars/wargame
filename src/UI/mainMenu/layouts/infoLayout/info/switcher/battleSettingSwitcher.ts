import {mainMenuCtx} from '../../../../settings';
import {
  battleSettingsX,
  battleSettingsY,
  height,
  width
} from '../../settings';
import {showBattleSettings} from '../../../../../../config/mainMenu';

export const battleSettingSwitcher = () => {
  if(showBattleSettings) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(battleSettingsX, battleSettingsY, width, height);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(battleSettingsX, battleSettingsY, width, height);
  // text
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Battle Settings', battleSettingsX + 5, battleSettingsY + 20);
}
