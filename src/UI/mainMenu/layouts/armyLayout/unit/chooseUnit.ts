import {side} from '../../../../../config/mainMenu/sides/side';
import {dragAndDropCanvasCtx} from '../../../settings';
import {WIDTH, HEIGHT} from '../../../../../config';
import {selectedUnitInRoster} from '../../../../../store/roster/selectedUnit';
import {drawRemoveIcon} from '../icon';
import {
  playerArmy,
  computerArmy
} from '../../../../../store/roster/army';
import {
  armyImgHeight,
  armyImgWidth
} from '../settings';

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
