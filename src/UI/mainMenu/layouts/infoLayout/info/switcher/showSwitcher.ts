import {battleSettingSwitcher} from './battleSettingSwitcher';
import {unitInfoSwitcher} from './unitInfoSwitcher';
import {unitInfo} from '../../unitInfo';
import {
  showBattleSettings
} from '../../../../../../config/mainMenu';
import {showTotalGold} from '../../battleInfo/totalGold';

export const showSwither = () => {
  battleSettingSwitcher();
  unitInfoSwitcher();
  if(showBattleSettings) {
    showTotalGold();
  } else {
    unitInfo();
  }
}
