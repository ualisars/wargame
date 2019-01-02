import {side} from '../../../../../config/mainMenu/sides/side';
import {
  computerArmy,
  playerArmy
} from '../../../../../store/roster/army';
import {armyImgWidth} from '../armySettings';

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
    if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
      return unit;
    }
  }
  return null;
}
