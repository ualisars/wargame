import {
  mainMenuCtx,
  armyLayoutWidth,
  unitRosterWidth,
  titleHeight,
  setTotalMoney,
  totalMoney
} from './mainMenuSettings';

const moneyBoxStartX:number = armyLayoutWidth + unitRosterWidth + 100;
const moneyBoxStartY:number = titleHeight + 80;

const moneyOptions:any[] = [
  200, 300, 400, 600, 1000
];
let moneyBoxes:any[] = [];

const boxWidth:number = 40;
const boxHeight:number = 40;
export const battleSettings = () => {
  showTotalMoney();
}

const fillTotalMoney = () => {
  moneyBoxes = [];
  let x = moneyBoxStartX;
  let y = moneyBoxStartY;
  for(let money of moneyOptions) {
    moneyBoxes.push({
      x,
      y,
      money
    });
    x += boxWidth + 5;
  }
}

const showTotalMoney = () => {
  let startTotalMoneyTitleX:number = moneyBoxStartX + 40;
  let startTotalMoneyTitleY:number = moneyBoxStartY - 20;
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Total Money:', startTotalMoneyTitleX, startTotalMoneyTitleY);
  mainMenuCtx.font = '12px serif';
  fillTotalMoney();
  for(let box of moneyBoxes) {
    drawMoneyBox(box.x, box.y, box.money);
  }
}

export const changeTotalMoney = (mouseX:number, mouseY:number) => {
  for(let box of moneyBoxes) {
    if(mouseX >= box.x && mouseX < box.x + boxWidth && mouseY >= box.y && mouseY < box.y + boxHeight) {
      setTotalMoney(box.money);
      showTotalMoney();
    }
  }
}

export const drawMoneyBox = (x:number, y:number, amount:number) => {
  if(amount === totalMoney) {
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
