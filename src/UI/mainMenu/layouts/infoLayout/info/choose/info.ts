import {onChooseBattleSettings} from './battleSettings';
import {
  changeBattleSettingsToTrue,
  changeUnitInfoToTrue
} from '../../../../../../config/mainMenu';
import {onChooseUnitInfo} from './unitInfo';
import {displayInfo} from '../display';

export const onChooseInfo = (x:number, y:number) => {
  if(onChooseBattleSettings(x,y)) {
    changeBattleSettingsToTrue();
    displayInfo(); // redraw info
  }
  if(onChooseUnitInfo(x,y)) {
    changeUnitInfoToTrue();
    displayInfo(); // redraw info
  }
}
