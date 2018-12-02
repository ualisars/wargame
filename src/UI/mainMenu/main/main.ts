import {
  mainMenu,
  dragAndDropCanvas
} from '../../../config/canvas';
import {
  dragAndDropCanvasCtx,
  mainMenuCtx
} from '../../../config/context';
import {
  decreaseSpentGold,
  increaseSpentGold,
  changeUnitInfoToTrue,
  changeHoveredUnit,
  showUnitInfo,
  hoveredUnit
} from '../../../config/mainMenu';
import {startBattleAvailable} from '../../../config/mainMenu/startBattle/startBattleAvailable';
import {
  addUnitToArmy,
  removeUnitFromArmy
} from '../../../store/roster/army';
import {roster} from '../../../store/roster/roster';
import {selectUnitInRoster} from '../../../store/roster/selectedUnit';
import {selectedUnitInRoster} from '../../../store/roster/selectedUnit';
import {
  rosterImgWidth,
  rosterImgHeight
} from '../layouts/rosterLayout/rosterSettings';
import {isUnitSelectedInRoster} from '../layouts/rosterLayout/unit/isUnitSelectedInRoster';
import {loadImage} from '../../../utils'
import {MAP_WIDTH, CANVAS_HEIGHT} from '../../../config';
import {
  onChoosePlayer,
  onChooseComputer,
  displayTitle
} from '../layouts/upperLayout';
import {
  onChooseUnitInArmy,
  armyImgWidth,
  armyImgHeight,
  displayArmy,
  displayChosenUnits,
} from '../layouts/armyLayout';
import {isUnitShouldBeRemoved} from '../layouts/armyLayout/remove/removeUnit';
import {emptyBox} from '../layouts/armyLayout/army/displayArmy'
import {
  onChooseInfo,
  displayInfo
} from '../layouts/infoLayout';
import {changeTotalGold} from '../layouts/infoLayout';
import {
  isStartBattleAvailable,
  isStartBattleButtonSelected
} from '../layouts/bottomLayout/button';
import {activateBattleMode} from '../../../launch';

export const dragAndDrop = () => {
  dragAndDropCanvas.addEventListener('click', (e:any) => {
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    changeTotalGold(x,y); // test
    onChooseInfo(x,y);
    onChoosePlayer(x, y);
    onChooseComputer(x, y);
    if(isUnitShouldBeRemoved(x,y)) {
      let unit = isUnitShouldBeRemoved(x, y);
      console.log('remove unit:', unit);
      decreaseSpentGold(unit.cost);
      removeUnitFromArmy(unit);
      displayChosenUnits();
      displayTitle(); // redraw totalGold in title
      dragAndDropCanvasCtx.clearRect(0,0, MAP_WIDTH, CANVAS_HEIGHT);
      isStartBattleAvailable();
    }
    if(startBattleAvailable && isStartBattleButtonSelected(x,y)) {
      activateBattleMode();
    }
    if(selectedUnitInRoster) { // add unit to roster
      console.log('unit is added:', isUnitAddedToArmy(x, y));
      if(isUnitAddedToArmy(x,y)) { // draw unit in army list
        let unit = isUnitAddedToArmy(x,y);
        addUnitToArmy(unit);
        displayChosenUnits();
        increaseSpentGold(unit.cost);
        displayTitle(); // redraw totalGold in title
        dragAndDropCanvasCtx.clearRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT); // clear canvas
        isStartBattleAvailable();
      } else {
        displayChosenUnits();
        dragAndDropCanvasCtx.clearRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT); // clear canvas
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
  selectUnitInRoster(selectedUnit);
  changeHoveredUnit(selectedUnit);
  displayInfo();
}

export let onDragUnit = (mouseX:number, mouseY:number) => {
  if(selectedUnitInRoster) {
    let width = rosterImgWidth;
    let height = rosterImgHeight;
    let x = mouseX - (width / 2);
    let y = mouseY - (height / 2);
    loadImage(selectedUnitInRoster.imgSrc, (err:any, img:any) => {
      dragAndDropCanvasCtx.clearRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
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
