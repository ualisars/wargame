import {
  canvas,
  ctx,
  WIDTH,
  HEIGHT,
  gridSize,
  auxiliaryCanvas,
  auxiliaryCtx
} from './map/mapConfig';

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

import {spotUnits} from './unit/unitRange';

createUnit('barbarian', 40, 80, 15, 'player');
createUnit('knight', 80, 360, 15, 'player');
createUnit('infantry', 1080, 400, 15, 'computer');
createUnit('infantry2', 600, 120, 15, 'computer');

drawGrid();
console.log('map', map);
console.error('units', units);
console.error('computersUnits', computersUnits);

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

    if(pointedUnit) {
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
    if(pursuedUnit) {
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
        pursueUnit(currentlyChosenUnit, pursuedUnit, pursuedUnit.x, pursuedUnit.y, 0, path);
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
        updateUnit(currentlyChosenUnit,path, 0, finishNode.x, finishNode.y);
      }
    }
  }
}); // on context

//setInterval(() => spotUnits(units), 1000);
