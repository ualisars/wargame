import {
  computerSwitcherX0,
  computerSwitcherX1,
  computerSwitcherY0,
  computerSwitcherY1
} from '../upperLayoutSettings';
import {
  changeToComputer
} from '../../../../../config/mainMenu';
import {
  displayComputer,
  displayTitle
} from '../display';

import {displayChosenUnits} from '../../index';

export const onChooseComputer = (mouseX:number, mouseY:number) => {
  if(mouseX >= computerSwitcherX0 && mouseX < computerSwitcherX1 && mouseY >= computerSwitcherY0 && mouseY < computerSwitcherY1) {
    changeToComputer();
    displayChosenUnits();
    displayComputer();
    displayTitle();
  }
}
