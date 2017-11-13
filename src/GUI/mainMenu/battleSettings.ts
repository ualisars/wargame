import {
  mainMenuCtx,
  armyLayoutWidth,
  unitRosterWidth,
  titleHeight,
  setTotalMoney,
  totalMoney
} from './mainMenuSettings';


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
  let x = armyLayoutWidth + unitRosterWidth + 100;
  let y = titleHeight + 50;
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
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '12px serif';
  mainMenuCtx.textAlign = 'left';
  fillTotalMoney();
  for(let box of moneyBoxes) {
    drawMoneyBox(box.x, box.y, box.money);
  }
}

export const changeTotalMoney = (mouseX:number, mouseY:number) => {
  for(let box of moneyBoxes) {
    if(mouseX >= box.x && mouseX < box.x + boxWidth && mouseY >= box.y && mouseY < box.y + boxHeight) {
      setTotalMoney(box.money);
      console.log('totalMoney', totalMoney);
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
  console.error('x:', x, 'y:', y, 'money:', amount);
  mainMenuCtx.fillRect(x, y, boxWidth, boxHeight);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(x, y, boxWidth, boxHeight);
  mainMenuCtx.font = '12px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText(amount, x  + 10, y + 25);
}
