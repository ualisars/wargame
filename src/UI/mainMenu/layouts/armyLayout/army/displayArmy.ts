import { mainMenuCtx } from '../../../../../config/context';
import { side } from '../../../../../config/mainMenu/sides/side';
import {
  playerArmy,
  computerArmy
} from '../../../../../store/roster/army';
import {
  unitRosterWidth,
  titleHeight
} from '../../../../../config/mainMenu';
import {
  armyImgHeight,
  armyImgWidth
} from '../armySettings';
import { unitIconImages } from '../../../../../store/images/unitIconImages';

export let emptyBox:any;

export const displayArmy = (i:number = 1) => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }

  if(army.length >= 1 && army.length >= i) {
    let unit = army[i - 1];
    let x = unit.armyPosition.x;
    let y = unit.armyPosition.y;
    mainMenuCtx.drawImage(unitIconImages[unit.name], x, y, armyImgWidth, armyImgHeight);
    i++;
    displayArmy(i);
  } else {
    // draw empty box
    let unitNumber = army.length;
    let marginWidth = armyImgWidth + 10;
    let marginHeight = armyImgHeight + 15;
    let defaultWidth = unitRosterWidth + 20;
    let x:number;
    let y:number;
    if(army.length === 0) { // if no units in army
      x = unitRosterWidth+20; // x and y default
      y = titleHeight+60;
    } else { // there are units remain in army
      let prevX = army[army.length - 1].armyPosition.x; // x and y last unit's
      let prevY = army[army.length - 1].armyPosition.y; // army position x and
      if(unitNumber % 5 === 0) {
        x = defaultWidth;
        y = prevY + marginHeight;
      } else {
        x = prevX + marginWidth;
        y = prevY;
      }
    }

    if(i <= 10) {
      mainMenuCtx.fillStyle = '#fff';
      mainMenuCtx.fillRect(x, y, armyImgWidth, armyImgHeight);
      mainMenuCtx.fillStyle = '#000';
      mainMenuCtx.strokeRect(x, y, armyImgWidth, armyImgHeight);

      emptyBox = {
        i,
        x,
        y,
        filled: false
      };
    } else {
      emptyBox = {
        i,
        x,
        y,
        filled: true
      };
    }   
    return;
  }
}
