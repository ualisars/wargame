import {
  mainMenuCtx
} from '../../../../../config/context';
import {
  unitRosterWidth,
  unitRosterHeight,
  titleHeight,
  armyLayoutWidth,
  armyLayoutHeight
} from '../../../../../config/mainMenu';
import {displayArmy} from '../army';

export const displayChosenUnits = () => {
  mainMenuCtx.clearRect(unitRosterWidth, titleHeight, armyLayoutWidth, armyLayoutHeight);
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(unitRosterWidth, titleHeight, armyLayoutWidth, armyLayoutHeight);
  mainMenuCtx.strokeRect(unitRosterWidth, titleHeight, armyLayoutWidth, armyLayoutHeight);
  displayChosenUnitsTitle();
  displayArmy();
}

export const displayChosenUnitsTitle = () => {
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Units', unitRosterWidth + 150, titleHeight + 20);
}
