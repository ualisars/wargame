import {
  playerX1,
  playerY0,
  playerY1
} from '../upperLayoutSettings';
import {
  changeToPlayer
} from '../../../../../config/mainMenu';
import {
  displayPlayer,
  displayTitle
} from '../display';
import {
  unitRosterWidth
} from '../../../../../config/mainMenu';
import {displayChosenUnits} from '../../index';

export const onChoosePlayer = (mouseX:number, mouseY:number) => {
  if(mouseX >= unitRosterWidth && mouseX < playerX1 && mouseY >= playerY0 && mouseY < playerY1) {
    changeToPlayer();
    displayChosenUnits();
    displayPlayer();
    displayTitle();
  }
}
