import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {titleHeight} from './title';
import {
  rosterWidth,
  rosterHeight
} from './unitRoster';
import {side} from './title';
import {
  playerArmy,
  computerArmy
} from './units';
import {loadImage} from '../../utils/loadImage';

export const chosenUnitsWidth = Math.round(WIDTH / 3);
export const chosenUnitsHeight = HEIGHT - 100;
export let armyImgWidth:number = 70;
export let armyImgHeight:number = 70;
export let emptyBox:any;

export const displayChosenUnits = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(rosterWidth, 0, chosenUnitsWidth, chosenUnitsHeight);
  mainMenuCtx.strokeRect(rosterWidth, 0, chosenUnitsWidth, chosenUnitsHeight);
  displayChosenUnitsTitle();
  displayArmy();
}

const displayChosenUnitsTitle = () => {
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Units', rosterWidth + 150, titleHeight + 20);
}

export const displayArmy = (i:number = 1, x:number=rosterWidth+20, y:number=titleHeight+60) => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  if(army.length >= 1 && army.length >= i) {
    loadImage(army[i - 1].imgSrc, (err:any, img:any) => {
      mainMenuCtx.drawImage(img, x, y, armyImgWidth, armyImgHeight);
      x += armyImgWidth + 10;
      if(i % 5 === 0) {
        y += armyImgHeight + 15;
        x = rosterWidth + 20;
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
  }
  return;
}
