import {
  boxWidth,
  boxHeight,
  goldBoxStartX,
  goldBoxStartY,
  goldOptions,
  startTotalMoneyTitleX,
  startTotalMoneyTitleY
} from '../../settings';
import {
  mainMenuCtx
} from '../../../../settings';
import {
  setTotalGold
} from '../../../../../../config/mainMenu';
import {displayTitle} from '../../title';
import {drawMoneyBox} from '../moneyBox';

export let goldBoxes:any[] = [];

export const changeTotalGold = (mouseX:number, mouseY:number) => {
  for(let box of goldBoxes) {
    if(mouseX >= box.x && mouseX < box.x + boxWidth && mouseY >= box.y && mouseY < box.y + boxHeight) {
      setTotalGold(box.gold);
      showTotalGold();
      displayTitle(); // redraw totalGold in the titleComponent
    }
  }
}

export const fillTotalGold = () => {
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

export const showTotalGold = () => {
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
