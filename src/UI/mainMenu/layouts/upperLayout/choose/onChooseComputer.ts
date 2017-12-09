import {
  computerX0,
  computerX1,
  computerY0,
  computerY1
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
  if(mouseX >= computerX0 && mouseX < computerX1 && mouseY >= computerY0 && mouseY < computerY1) {
    changeToComputer();
    displayChosenUnits();
    displayComputer();
    displayTitle();
  }
}
