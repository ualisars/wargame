import {
  canvas,
  ctx,
  auxiliaryCanvas,
  auxiliaryCtx,
  drawGrid,
  addNeighbors,
  createNodes,
  map,
  initializeMap
} from '../../map';

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
  getSurroundedBlockedNodes,
  drawBackground
} from '../../utils';

import {
  Unit,
  onChooseUnit,
  assignUnitMoveToPosition,
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
  computerUnits,
  currentlyChosenUnit,
} from '../../store';

// AI testing
import {setUpAI} from '../../AI/setUpAI';
//import {analyzeMap} from './AI/analyzeModule/mapAnalyze';
import {
  analyzeUnits,
  calculateUnitTypes,
  getUnitTypesInPercentage,
  getSurroundedNodes
} from '../../AI/analyzeModule/unitAnalyze';
import {chooseFormation} from '../../AI/strategyModule/formation';
// strategy module
import {
  personality,
  hidedEmenies
} from '../../AI/setUpAI';
import{orderToAttackEnemy} from '../../AI/strategyModule/unitOrders';
import {assignTasks} from '../../AI/strategyModule/assignTask';
import {assignCombatStage} from '../../AI/processModule/mapProcess';
import {calculateTotalPower} from '../../AI/analyzeModule/powerAnalyze';
import {AIMovement} from '../../AI/strategyModule/unitOrders';
import {isBattleEnd, checkWinner} from '../../gameLoop';
import {battleFinish} from '../../config';
import {createArmy} from '../../battle';

export const launchBattle = () => {
  drawBackground('./src/img/terrain/terrain.png');
  initializeMap();
  // createUnit('archers', 40, 80, 15, 'player');
  // createUnit('lightInfantry', 80, 360, 15, 'player');
  // createUnit('lightCavalry', 80, 400, 15, 'player');
  // createUnit('lightCavalry', 40, 440, 15, 'player');
  //
  // createUnit('militia', 1080, 400, 15, 'computer');
  // createUnit('pikemen', 600, 120, 15, 'computer');
  // createUnit('pikemen', 600, 120, 15, 'computer');
  // createUnit('heavyInfantry', 600, 120, 15, 'computer');
  // createUnit('archers', 520, 80, 15, 'computer');


  //drawGrid();
  // console.log('map', map);
  // console.error('units', units);
  // console.error('computersUnits', computerUnits);

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
    console.log('node', getNodeFromMap(x, y, map));
    console.log('surroundedNodes', getSurroundedNodes(currentlyChosenUnit, 1));
    console.log('blockedNodes:', getSurroundedBlockedNodes(currentlyChosenUnit));
  });

  auxiliaryCanvas.addEventListener('contextmenu', (e:any) => {
    console.error('Right Mouse Click');
    e.preventDefault();
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    if(currentlyChosenUnit) {
      let pursuedUnit:any = null;
      for(let computersUnit of computerUnits) {
        let bottomRightX = computersUnit.x + gridSize;
        let bottomRightY = computersUnit.y + gridSize;
        if(x >= computersUnit.x && x < bottomRightX && y >= computersUnit.y && y < bottomRightY) {
          pursuedUnit = computersUnit;
        }
      } // for computer units
      if(pursuedUnit && pursuedUnit.isVisible) {
        if(currentlyChosenUnit.isMoving) { // if unit's moving don't fire pursue function
          currentlyChosenUnit.setUnitToPursue(pursuedUnit);
        } else {
          console.log('computersUnit', pursuedUnit);
          console.error('attack computers unit');
          currentlyChosenUnit.setUnitToPursue(pursuedUnit);
          console.error('currentlyChosenUnit x:', currentlyChosenUnit.x, 'y:', y);
          let startNode = getNodeFromMap(currentlyChosenUnit.x, currentlyChosenUnit.y, map);
          let finishNode = getNodeFromMap(x, y, map);
          console.error('startNode', startNode);
          console.error('finishNode', finishNode);
          console.error('map', map);
          let path:any = aStar(map, startNode, finishNode);
          pursueUnit(currentlyChosenUnit, pursuedUnit, pursuedUnit.x, pursuedUnit.y, 0, path, true);
        }
      } else {
        if(currentlyChosenUnit.isMoving) {
          currentlyChosenUnit.setUnitToPursue(null);
          let startNode = getNodeFromMap(currentlyChosenUnit.x, currentlyChosenUnit.y, map);
          let finishNode = getNodeFromMap(x, y, map);
          assignUnitMoveToPosition(currentlyChosenUnit, finishNode.x, finishNode.y);
        } else {
          console.error('does not pursue any unit');
          currentlyChosenUnit.setUnitToPursue(null);
          let startNode = getNodeFromMap(currentlyChosenUnit.x, currentlyChosenUnit.y, map);
          let finishNode = getNodeFromMap(x, y, map);
          let path:any = aStar(map, startNode, finishNode);
          console.error('startNode', startNode);
          console.error('finishNode', finishNode);
          assignUnitMoveToPosition(currentlyChosenUnit, finishNode.x, finishNode.y);
          updateUnit(currentlyChosenUnit,path, 0, finishNode.x, finishNode.y, null, true);
        }
      }
    }
  }); // on context

  //set behaviour
  //console.log('behaviour', personality.behaviour);

  // setInterval(() => console.log('hidedEmenies', hidedEmenies.store), 4000);
  //
  //createArmy().then(() => {
    // setUpAI(); // set up AI engine
    setInterval(() => spotUnits(units), 1000);
    setInterval(() => {
      if(!battleFinish) {
        checkHealth().
        then(() => meleeCombat());
      }
    }, 800);
    // // // // // // //
    // //AIMovement();
    // setInterval(() => {
    //   if(!battleFinish) {
    //     analyzeMap()
    //     .then(() => {
    //       //AIMovement()
    //       orderToAttackEnemy();
    //     });
    //   }
    // }, 3000);
    // setInterval(() => {
    //   if(!battleFinish) {
    //     analyzeUnits();
    //   }
    // }, 4000);
    //
    // setInterval(() => console.log('types', calculateUnitTypes()), 3000);
    // console.log('percentage', getUnitTypesInPercentage())
    // chooseFormation();
    // setInterval(() => {
    //   if(!battleFinish) {
    //     assignTasks();
    //     console.log('computersUnits', computerUnits);
    //   }
    // }, 10000);
    // assignTasks();
    // // console.log('computersUnits', computersUnits);
    //  setInterval(() => calculateTotalPower(), 8000);
    //
    // setInterval(() => {
    //   if(!battleFinish) {
    //     assignCombatStage();
    //   }
    // }, 10000);
    // setInterval(() => {
    //   if(!battleFinish) {
    //     isBattleEnd();
    //   }
    // }, 3000);
  //});

}
