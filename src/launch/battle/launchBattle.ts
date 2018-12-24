import { initialMap } from '../../map/createMap/initialMap';
import { auxiliaryCanvas } from '../../config/canvas';
import { auxiliaryCtx } from '../../config/context';
import {
  MAP_WIDTH,
  MAP_HEIGHT,
  gridSize
} from '../../config';
import {
  getNodeFromMap,
  drawBackground
} from '../../utils';
import {getSurroundedBlockedNodes} from '../../utils/node';
import {onChooseUnit} from '../../unit';
import {
  units,
  computerUnits
} from '../../store/unit/units';
import {
  attackEnemy,
  moveTo
} from '../../unit/movement';
import { currentlyChosenUnit } from '../../store/unit/currentlyChosenUnit';
import { getSurroundedNodes } from '../../utils/surrounded';
import { battleMode } from '../../config/global/globalConfig';
import { displayUnitIcons } from '../../UI/battleUI/unitPanel/display/displayUnitIcons';
import { battleListener, isBattleEnd } from '../../gameLoop';
import { moveUnits } from '../../AI/strategyModule/controlUnit/moveUnits';
import { redrawPlayerUnits } from '../../unit/draw/drawUnit';
import { drawClickedIcon } from '../../UI/battleUI/unitPanel/icon/clickIcon';
import { clearPath } from '../../path/draw/drawPath';
import { computerAction } from '../../AI/strategyModule/controlUnit/computerAction';

export const launchBattle = () => {
  console.log('battle mode', battleMode);
  console.log('monitor: height', window.screen.availHeight, 'width:',window.screen.availWidth);
  auxiliaryCanvas.addEventListener('mousemove', (e:any) => {
    let mouseX = e.offsetX; // get X
    let mouseY = e.offsetY; // get Y
    if(currentlyChosenUnit) {
      let pointedUnit = null;
      for(let unit of computerUnits) {
        let finishX = unit.x + gridSize;
        let finishY = unit.y + gridSize;
        if((mouseX >= unit.x && mouseX < finishX) && (mouseY >= unit.y && mouseY < finishY)) {
          pointedUnit = unit;
        }
      }

      if(pointedUnit && pointedUnit.isVisible) {
        auxiliaryCtx.fillStyle = '#000';
        auxiliaryCtx.font = "14px Arial";
        auxiliaryCtx.fillText("Attack", pointedUnit.x, pointedUnit.y + gridSize / 2);
      } else {
        auxiliaryCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
      }
    }
  });

  auxiliaryCanvas.addEventListener('click', (e:any) => {
    console.error('Click');
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    onChooseUnit(units, x, y);
    console.log('currentlyChosenUnit', currentlyChosenUnit);
    console.log('node', getNodeFromMap(x, y));
    redrawPlayerUnits();
    displayUnitIcons();
    clearPath();
  });

  auxiliaryCanvas.addEventListener('contextmenu', (e:any) => {
    e.preventDefault();
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    if(currentlyChosenUnit) {
      let pursuedUnit:any = null;
      for(let computerUnit of computerUnits) {
        let bottomRightX = computerUnit.x + gridSize;
        let bottomRightY = computerUnit.y + gridSize;
        if(x >= computerUnit.x && x < bottomRightX && y >= computerUnit.y && y < bottomRightY) {
          pursuedUnit = computerUnit;
        }
      } // for computer units
      if(pursuedUnit && pursuedUnit.isVisible) {
        attackEnemy(currentlyChosenUnit, pursuedUnit);
      } else {
        moveTo(currentlyChosenUnit, x, y);
        drawClickedIcon(x, y);
      }
      clearPath();
    }
  }); // on context

 
  drawBackground('./src/img/terrain/terrain.png');
  computerAction();
  displayUnitIcons();
  battleListener();
  moveUnits();
  setInterval(() => {
    isBattleEnd();
  }, 15000);
}




