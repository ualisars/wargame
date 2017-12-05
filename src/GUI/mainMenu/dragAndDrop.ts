import {
  mainMenu,
  mainMenuCtx,
  dragAndDropCanvas,
  dragAndDropCanvasCtx,
} from './mainMenuSettings';
import {
  decreaseSpendedGold,
  increaseSpendedGold,
  changeUnitInfoToTrue,
  changeHoveredUnit,
  showUnitInfo,
  hoveredUnit,
  startBattleAvailable
} from '../../config/mainMenu';
import {
  roster,
  selectUnitInRoster,
  addUnitToArmy,
  removeUnitFromArmy
} from '../../store/roster';
import {selectedUnitInRoster} from '../../store/roster/selectedUnit';
import {
  rosterImgWidth,
  rosterImgHeight,
  isUnitSelectedInRoster
} from './unitRoster';
import {loadImage} from '../../utils';
import {WIDTH, HEIGHT} from '../../config';
import {
  onChoosePlayer,
  onChooseComputer,
  displayTitle
} from './sideSwitcher';
import {
  emptyBox,
  armyImgWidth,
  armyImgHeight,
  displayArmy,
  displayChosenUnits,
  isUnitShouldBeRemoved
} from './army';
import {onChooseUnitInArmy} from './army';
import {
  onChooseInfo,
  displayInfo
} from './info';
import {changeTotalMoney} from './battleSettings';
import {
  isStartBattleAvailable,
  isStartBattleButtonSelected,
  startBattle
} from './startBattle';

export const dragAndDrop = () => {
  dragAndDropCanvas.addEventListener('click', (e:any) => {
    console.error('Click');
    console.log('roster', roster);
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    changeTotalMoney(x,y); // test
    onChooseInfo(x,y);
    onChoosePlayer(x, y);
    onChooseComputer(x, y);
    if(isUnitShouldBeRemoved(x,y)) {
      let unit = isUnitShouldBeRemoved(x, y);
      console.log('remove unit:', unit);
      decreaseSpendedGold(unit.cost);
      removeUnitFromArmy(unit);
      displayChosenUnits();
      displayTitle(); // redraw totalGold in title
      dragAndDropCanvasCtx.clearRect(0,0, WIDTH, HEIGHT);
      isStartBattleAvailable();
    }
    if(startBattleAvailable && isStartBattleButtonSelected(x,y)) {
      startBattle();
    }
    if(selectedUnitInRoster) {
      console.log('unit is added:', isUnitAddedToArmy(x, y));
      if(isUnitAddedToArmy(x,y)) { // draw unit is army list
        let unit = isUnitAddedToArmy(x,y);
        addUnitToArmy(unit);
        displayChosenUnits();
        increaseSpendedGold(unit.cost);
        displayTitle(); // redraw totalGold in title
        dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT); // clear canvas
        isStartBattleAvailable();
      } else {
        displayChosenUnits();
        dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT); // clear canvas
      }
    }
    onChooseRoster(x, y);
    console.log('onClick selectedUnitInRoster', selectedUnitInRoster);
  });

  dragAndDropCanvas.addEventListener('mousemove', (e:any) => {
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    onDragUnit(x, y);
    onChooseUnitInArmy(x,y);
    if(isUnitSelectedInRoster(x,y)) { // player hover unit in roster
      let unit = isUnitSelectedInRoster(x,y);
      if(hoveredUnit) {
        if(unit.x !== hoveredUnit.x && unit.y !== hoveredUnit) {
          console.log('changeHoveredUnit')
          changeHoveredUnit(unit);
          displayInfo();
        }
      } else {
        changeHoveredUnit(unit);
      }
      if(!showUnitInfo) {
        changeUnitInfoToTrue(); // show unit info
        displayInfo();
      }
    }
  });
}

export let onChooseRoster = (mouseX:number, mouseY:number) => {
  let selectedUnit = null;
  const width = rosterImgWidth;
  const height = rosterImgHeight;
  for(let unit of roster) {
    let x = unit.x;
    let y = unit.y;
    if(mouseX >= x && mouseX < x + width && mouseY >= y && mouseY < y + height) {
      selectedUnit = unit;
    }
  }
  console.log('onChooseRoster selectedUnit', selectedUnit);
  selectUnitInRoster(selectedUnit);
  changeHoveredUnit(selectedUnit);
  displayInfo();
  console.error('onChooseRoster selectedUnitInRoster:', selectedUnitInRoster);
}

export let onDragUnit = (mouseX:number, mouseY:number) => {
  if(selectedUnitInRoster) {
    let width = rosterImgWidth;
    let height = rosterImgHeight;
    let x = mouseX - (width / 2);
    let y = mouseY - (height / 2);
    loadImage(selectedUnitInRoster.imgSrc, (err:any, img:any) => {
      dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      dragAndDropCanvasCtx.drawImage(img, x, y, rosterImgWidth, rosterImgHeight);
    });
  }
}

/*
  show if particular unit has been added to army,
  return box if unit has been down in that box,
  if no boxes chosen return null
*/
export const isUnitAddedToArmy = (mouseX:number, mouseY:number):any => {
  const width = armyImgWidth;
  const height = armyImgHeight;
  let x = emptyBox.x;
  let y = emptyBox.y;
  if(mouseX >= x && mouseX < (x + width) && mouseY >= y && mouseY < (y + height)) {
    return selectedUnitInRoster;
  }
  return null;
}
