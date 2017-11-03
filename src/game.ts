import {
  canvas,
  ctx,
  auxiliaryCanvas,
  auxiliaryCtx
} from './map/mapConfig';

import {
  WIDTH,
  HEIGHT,
  gridSize,
} from './map/mapSettings';

import {drawGrid} from './map/drawGrid';
import {
  addNeighbours,
  createNodes,
  map
} from './map/createMap';
import {showObstacles} from './map/mapUtils';
import {h, aStar} from './path/AStar';
import {
  drawPath,
  getNodeFromMap
} from './path/drawPath';

import {updateMap} from './map/mapUpdate';

import Unit from './unit/Unit';

import {
  onChooseUnit,
  createUnit,
  assignUnitMoveToPosition,
} from './unit/unitActions';
import {
  updateUnit,
  pursueUnit
} from './unit/unitMovement';

import {
  units,
  playersUnits,
  computersUnits,
  currentlyChosenUnit,
} from './store/unitStore';

import {spotUnits} from './unit/unitSpotting';
import {meleeCombat, checkHealth} from './unit/unitFight'

// AI testing
import {setUpAI} from './AI/setUpAI';
import {analyzeMap} from './AI/analyzeModule/mapAnalyze';
import {
  analyzeUnits,
  calculateUnitTypes,
  getUnitTypesInPercentage,
} from './AI/analyzeModule/unitAnalyze';
import {chooseFormation} from './AI/strategyModule/formation';
// strategy module
import {
  personality,
  hidedEmenies
} from './AI/setUpAI';
import{orderToAttackEnemy} from './AI/strategyModule/unitOrders';
import {assignTasks} from './AI/strategyModule/unitStrategy';
import {getCombatStage} from './AI/processModule/mapProcess';
import {calculateTotalPower} from './AI/analyzeModule/powerAnalyze';


createUnit('archers', 40, 80, 15, 'player');
createUnit('scouts', 80, 360, 15, 'player');
createUnit('lightCavalry', 80, 400, 15, 'player');
createUnit('hoplites', 40, 440, 15, 'player');

createUnit('militia', 1080, 400, 15, 'computer');
createUnit('pikemen', 600, 120, 15, 'computer');
createUnit('militia', 840, 400, 15, 'computer');
createUnit('archers', 520, 80, 15, 'computer');

drawGrid();
console.log('map', map);
console.error('units', units);
console.error('computersUnits', computersUnits);

setUpAI(); // set up AI engine

auxiliaryCanvas.addEventListener('mousemove', (e:any) => {
  let mouseX = e.offsetX; // get X
  let mouseY = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    let pointedUnit = null;
    for(let unit of computersUnits) {
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
});

auxiliaryCanvas.addEventListener('contextmenu', (e:any) => {
  console.error('Right Mouse Click');
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    let pursuedUnit:any = null;
    for(let computersUnit of computersUnits) {
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
console.log('behaviour', personality.behaviour);

// setInterval(() => console.log('hidedEmenies', hidedEmenies.store), 4000);
//
setInterval(() => spotUnits(units), 1000);
setInterval(() => {
  checkHealth().
  then(() => meleeCombat());
}, 1000);
//
// setInterval(() => analyzeMap(), 9000);
// setInterval(() => analyzeUnits(), 4000);
// setInterval(() => orderToAttackEnemy(), 2000);
//setInterval(() => console.log('types', calculateUnitTypes()), 3000);
// console.log('percentage', getUnitTypesInPercentage())
// console.log('formation', chooseFormation());
// setInterval(() => {
//   assignTasks();
//   console.log('computersUnits', computersUnits);
// }, 10000);
// assignTasks();
// console.log('computersUnits', computersUnits);
setInterval(() => calculateTotalPower(), 8000);

setInterval(() => console.error('combat stage: ', getCombatStage()), 10000);
