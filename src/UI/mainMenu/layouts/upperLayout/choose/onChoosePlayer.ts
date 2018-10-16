import {
  playerSwitcherX1,
  playerSwitcherY0,
  playerSwitcherY1
} from '../upperLayoutSettings';
import {
  changeToPlayer
} from '../../../../../config/mainMenu/sides/side';
import {
  displayPlayer,
  displayTitle
} from '../display';
import {
  unitRosterWidth
} from '../../../../../config/mainMenu';
import {displayChosenUnits} from '../..';

export const onChoosePlayer = (mouseX:number, mouseY:number) => {
  if(mouseX >= unitRosterWidth && mouseX < playerSwitcherX1 && mouseY >= playerSwitcherY0 && mouseY < playerSwitcherY1) {
    changeToPlayer();
    displayChosenUnits();
    displayPlayer();
    displayTitle();
  }
}
