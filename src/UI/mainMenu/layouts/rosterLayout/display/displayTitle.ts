import {
  titleHeight
} from '../../../../../config/mainMenu';
import {mainMenuCtx} from '../../../../../config/context';
import {displayRosterUnits} from '.';

export const displayRosterTitle = () => {
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Roster', 150, titleHeight + 20);
  displayRosterUnits();
}
