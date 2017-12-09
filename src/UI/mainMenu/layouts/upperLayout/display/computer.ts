import {
  armyLayoutWidth,
  titleHeight,
  unitRosterWidth
} from '../../../../../config/mainMenu';
import {mainMenuCtx} from '../../../settings';
import {side} from '../../../../../config/mainMenu/sides/side';

export const displayComputer = () => {
  let color:string = '#ccc';
  if(side === 'computer') color = '#fff';
  mainMenuCtx.fillStyle = color;
  mainMenuCtx.fillRect(unitRosterWidth + (armyLayoutWidth / 2), 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.strokeRect(unitRosterWidth + (armyLayoutWidth / 2), 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '28px serif';
  mainMenuCtx.fillText('Computer', armyLayoutWidth + 300, (titleHeight / 2) - 10);
}
