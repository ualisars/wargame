import {
  armyLayoutWidth,
  titleHeight,
  unitRosterWidth
} from '../../../../../config/mainMenu';
import {mainMenuCtx} from '../../../../../config/context';
import {side} from '../../../../../config/mainMenu/sides/side';

export const displayPlayer = () => {
  let color:string = '#ccc';
  if(side === 'player') color = '#fff';
  mainMenuCtx.fillStyle = color;
  mainMenuCtx.fillRect(unitRosterWidth, 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.strokeRect(unitRosterWidth, 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '28px serif';
  mainMenuCtx.fillText('Player', armyLayoutWidth + 120, (titleHeight / 2) - 10);
}
