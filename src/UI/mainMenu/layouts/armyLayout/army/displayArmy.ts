import {
  mainMenuCtx,
  dragAndDropCanvasCtx
} from '../../../../../config/context';
import {side} from '../../../../../config/mainMenu/sides/side';
import {
  playerArmy,
  computerArmy,
  removeUnitFromArmy
} from '../../../../../store/roster/army';
import {loadImage} from '../../../../../utils';
import {
  unitRosterWidth,
  unitRosterHeight,
  titleHeight,
  armyLayoutWidth,
  armyLayoutHeight
} from '../../../../../config/mainMenu';
import {
  armyImgHeight,
  armyImgWidth
} from '../armySettings';

export let emptyBox:any;

export const displayArmy = (i:number = 1, x:number=unitRosterWidth+20, y:number=titleHeight+60) => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  // console.log('army', army);
  if(army.length >= 1 && army.length >= i) {
    loadImage(army[i - 1].imgSrc, (err:any, img:any) => {
      army[i - 1].armyPosition = {
        x,
        y
      };
      mainMenuCtx.drawImage(img, x, y, armyImgWidth, armyImgHeight);
      x += armyImgWidth + 10;
      if(i % 5 === 0) {
        y += armyImgHeight + 15;
        x = unitRosterWidth + 20;
      }
      i++;
      displayArmy(i,x,y);
    });
  } else {
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
    console.log('emptyBox:', emptyBox);
    return;
  }
}
