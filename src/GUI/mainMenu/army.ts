import {
  mainMenuCtx,
  unitRosterWidth,
  unitRosterHeight
} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {
  titleHeight,
  side
} from './sideSwitcher';
import {
  armyLayoutWidth,
  armyLayoutHeight
} from './mainMenuSettings';
import {
  playerArmy,
  computerArmy
} from './units';
import {loadImage} from '../../utils/loadImage';

export let armyImgWidth:number = 70;
export let armyImgHeight:number = 70;
export let emptyBox:any;

export const displayChosenUnits = () => {
  mainMenuCtx.clearRect(unitRosterWidth, titleHeight, armyLayoutWidth, armyLayoutHeight);
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(unitRosterWidth, titleHeight, armyLayoutWidth, armyLayoutHeight);
  mainMenuCtx.strokeRect(unitRosterWidth, titleHeight, armyLayoutWidth, armyLayoutHeight);
  displayChosenUnitsTitle();
  displayArmy();
}

const displayChosenUnitsTitle = () => {
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Units', unitRosterWidth + 150, titleHeight + 20);
}

export const displayArmy = (i:number = 1, x:number=unitRosterWidth+20, y:number=titleHeight+60) => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  console.log('army', army);
  if(army.length >= 1 && army.length >= i) {
    loadImage(army[i - 1].imgSrc, (err:any, img:any) => {
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
