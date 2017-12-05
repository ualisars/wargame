import {
  mainMenuCtx,

  dragAndDropCanvasCtx
} from './mainMenuSettings';

import {
  unitRosterWidth,
  unitRosterHeight,
  titleHeight,
  armyLayoutWidth,
  armyLayoutHeight,
  side
} from '../../config/mainMenu';
import {WIDTH, HEIGHT} from '../../config';
import {
  playerArmy,
  computerArmy,
  selectedUnitInRoster,
  removeUnitFromArmy
} from '../../store/roster';
import {loadImage} from '../../utils';

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

export const onChooseUnitInArmy = (mouseX:number, mouseY:number) => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  let selectedUnit:any = null;
  // console.error('army', army);
  for(let unit of army) {
      let x0:number = unit.armyPosition.x;
      let x1:number = x0 + armyImgWidth;
      let y0:number = unit.armyPosition.y;
      let y1:number = y0 + armyImgHeight;
      if(mouseX >= x0 && mouseX < x1 && mouseY > y0 && mouseY < y1) {
        selectedUnit = unit;
      } else {
        if(!selectedUnitInRoster) { // unit is not dragged
          dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        }
      }
  }
  // console.log('selectedUnit', selectedUnit);
  if(selectedUnit) {
    drawRemoveIcon(selectedUnit);
  }
}

export const drawRemoveIcon = (unit:any) => {
  drawCloseImageForUnit(unit);
}

export const drawCloseImageForUnit = (unit:any) => {
  const rightTopX:number = unit.armyPosition.x + armyImgWidth;
  const rightTopY:number = unit.armyPosition.y;

  let line1X0:number = rightTopX - 15;
  let line1Y0:number = rightTopY + 15;
  let line1X1:number = rightTopX - 5;
  let line1Y1:number = rightTopY + 4;

  let line2X0:number = line1X0;
  let line2Y0:number = line1Y1;
  let line2X1:number = line1X1;
  let line2Y1:number = line1Y0;

  let width:number = Math.round(armyImgWidth / 4);
  let height:number = Math.round(armyImgHeight / 4);
  dragAndDropCanvasCtx.fillStyle = 'rgb(200, 0,0)';
  dragAndDropCanvasCtx.beginPath();
  dragAndDropCanvasCtx.moveTo(line1X0, line1Y0);
  dragAndDropCanvasCtx.lineTo(line1X1, line1Y1);
  dragAndDropCanvasCtx.stroke();
  dragAndDropCanvasCtx.beginPath();
  dragAndDropCanvasCtx.fillStyle = 'red';
  dragAndDropCanvasCtx.moveTo(line2X0, line2Y0);
  dragAndDropCanvasCtx.lineTo(line2X1, line2Y1);
  dragAndDropCanvasCtx.stroke();
}

export const isUnitShouldBeRemoved = (mouseX:number, mouseY:number) => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  for(let unit of army) {
    let x0 = unit.armyPosition.x + armyImgWidth - 15;
    let x1 = unit.armyPosition.x + armyImgWidth - 5;
    let y0 = unit.armyPosition.y + 4;
    let y1 = unit.armyPosition.y + 15;
    // console.log('x0', x0, 'x1', x1);
    // console.log('y0', y0, 'y1', y1);
    if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
      return unit;
    }
  }
  return null;
}
