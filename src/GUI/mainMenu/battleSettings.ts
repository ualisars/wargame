import {
  mainMenuCtx,

} from './mainMenuSettings';
import {
  armyLayoutWidth,
  unitRosterWidth,
  titleHeight,
  setTotalGold,
  totalGold
} from '../../config/mainMenu';
import {displayTitle} from './sideSwitcher';

const goldBoxStartX:number = armyLayoutWidth + unitRosterWidth + 100;
const goldBoxStartY:number = titleHeight + 80;
let startTotalMoneyTitleX:number = goldBoxStartX + 40;
let startTotalMoneyTitleY:number = goldBoxStartY - 20;

const goldOptions:any[] = [
  200, 300, 400, 600, 1000
];
let goldBoxes:any[] = [];

const boxWidth:number = 40;
const boxHeight:number = 40;
export const battleSettings = () => {
  showTotalMoney();
}

const fillTotalGold = () => {
  goldBoxes = [];
  let x = goldBoxStartX;
  let y = goldBoxStartY;
  for(let gold of goldOptions) {
    goldBoxes.push({
      x,
      y,
      gold
    });
    x += boxWidth + 5;
  }
}

const showTotalMoney = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Total Money:', startTotalMoneyTitleX, startTotalMoneyTitleY);
  mainMenuCtx.font = '12px serif';
  fillTotalGold();
  for(let box of goldBoxes) {
    drawMoneyBox(box.x, box.y, box.gold);
  }
}

export const changeTotalMoney = (mouseX:number, mouseY:number) => {
  for(let box of goldBoxes) {
    if(mouseX >= box.x && mouseX < box.x + boxWidth && mouseY >= box.y && mouseY < box.y + boxHeight) {
      setTotalGold(box.gold);
      showTotalMoney();
      displayTitle(); // redraw totalGold in the titleComponent
    }
  }
}

export const drawMoneyBox = (x:number, y:number, amount:number) => {
  if(amount === totalGold) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(x, y, boxWidth, boxHeight);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(x, y, boxWidth, boxHeight);
  mainMenuCtx.font = '12px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText(amount, x  + 10, y + 25);
}
