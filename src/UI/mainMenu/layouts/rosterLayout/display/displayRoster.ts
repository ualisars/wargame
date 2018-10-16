import {
  unitRosterWidth,
  unitRosterHeight,
  titleHeight
} from '../../../../../config/mainMenu';
import {mainMenuCtx} from '../../../../../config/context';
import {displayRosterTitle} from '.';

export const displayRoster = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(0,titleHeight, unitRosterWidth, unitRosterHeight);
  displayRosterTitle();
}
