import {
  drawGrid,
  addNeighbors,
  createNodes,
} from '../../map';
import {
  initializeMap
} from '../../map/createMap';
import {initialMap} from '../../map/createMap/initialMap';
import {
  auxiliaryCanvas,
  canvas
} from '../../config/canvas';
import {
  auxiliaryCtx,
  ctx
} from '../../config/context';

import {
  WIDTH,
  HEIGHT,
  gridSize,
} from '../../config';


import {
  aStar
} from '../../path';
import {
  getNodeFromMap,
  drawBackground
} from '../../utils';
import {getSurroundedBlockedNodes} from '../../utils/node';

import {
  Unit,
  onChooseUnit,
  createUnit,
  updateUnit,
  pursueUnit,
  spotUnits,
  meleeCombat,
  checkHealth
} from '../../unit';

import {
  units,
  playerUnits,
  computerUnits
} from '../../store/unit/units';
import {
  attackEnemy,
  moveTo
} from '../../unit/movement';
import {currentlyChosenUnit} from '../../store/unit/currentlyChosenUnit';

// AI testing
import {setUpAI} from '../../AI/setUpAI';
//import {analyzeMap} from './AI/analyzeModule/mapAnalyze';
import {
  analyzeUnits,
  calculateUnitTypes,
  getUnitTypesInPercentage,
} from '../../AI/analyzeModule/unitAnalyze';
import {getSurroundedNodes} from '../../utils/surrounded';
import {chooseFormation} from '../../AI/strategyModule/controlUnit/formation';
// strategy module
import {
  hidingEnemies
} from '../../store/AI/enemies/hidingEnemies';
import {createArmy} from '../../battle';

export const launchBattle = () => {
  drawBackground('./src/img/terrain/terrain.png');
  createArmy();


  //drawGrid();

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
        let finishX = pointedUnit.x + gridSize;
        let finishY = pointedUnit.y + gridSize;
        auxiliaryCtx.fillStyle = '#000';
        auxiliaryCtx.font = "14px Arial";
        auxiliaryCtx.fillText("Attack", pointedUnit.x, pointedUnit.y + gridSize / 2);
      } else {
        auxiliaryCtx.clearRect(0, 0, WIDTH, HEIGHT);
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
    console.error('map', initialMap);
    console.log('node', getNodeFromMap(x, y));
    // test delete in deployment
    if(currentlyChosenUnit) {
      console.log('surroundedNodes', getSurroundedNodes(currentlyChosenUnit, 1));
      console.log('blockedNodes:', getSurroundedBlockedNodes(currentlyChosenUnit));
    }
  });

  auxiliaryCanvas.addEventListener('contextmenu', (e:any) => {
    console.error('Right Mouse Click');
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
      }
    }
  }); // on context
}
