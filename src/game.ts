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
  currentlyChosenUnit
} from './store/unitStore';

createUnit('barbarian', 40, 80, 15, 'player');
createUnit('knight', 80, 360, 15, 'player');
createUnit('infantry', 1080, 400, 15, 'computer');

drawGrid();
console.log('map', map);

canvas.addEventListener('click', (e:any) => {
  console.error('Click');
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  onChooseUnit(units, x, y);
  console.log('currentlyChosenUnit', currentlyChosenUnit);
});

// set onClickListener for right mouse event
canvas.addEventListener('contextmenu', (e:any) => {
  console.error('Right Mouse Click');
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    let startNode = getNodeFromMap(currentlyChosenUnit.x, currentlyChosenUnit.y, map);
    let finishNode = getNodeFromMap(x, y, map);
    let path:any = aStar(map, startNode, finishNode);
    console.error('startNode', startNode);
    console.error('finishNode', finishNode);
    assignUnitMoveToPosition(currentlyChosenUnit, finishNode.x, finishNode.y);
    updateUnit(currentlyChosenUnit,path, 0, finishNode.x, finishNode.y);
  }
});

auxiliaryCanvas.onmousemove = (e:any) => {
  let mouseX = e.offsetX; // get X
  let mouseY = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    for(let unit of computersUnits) {
      let bottomRightX = unit.x + gridSize;
      let bottomRightY = unit.y + gridSize;
      if(mouseX >= unit.x && mouseX < bottomRightX && mouseY >= unit.y && mouseY < bottomRightY) {
        auxiliaryCtx.fillStyle = '#000';
        auxiliaryCtx.font = "15px Arial";
        auxiliaryCtx.fillText("Attack", unit.x, unit.y + gridSize / 2);
      } else {
        auxiliaryCtx.clearRect(0, 0, WIDTH, HEIGHT);
      }
    }
  }
}

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
    for(let computersUnit of computersUnits) {
      let bottomRightX = computersUnit.x + gridSize;
      let bottomRightY = computersUnit.y + gridSize;
      if(x >= computersUnit.x && x < bottomRightX && y >= computersUnit.y && y < bottomRightY) {
        console.log('computersUnit', computersUnit);
        currentlyChosenUnit.setUnitToPursue(computersUnit);
        let startNode = getNodeFromMap(currentlyChosenUnit.x, currentlyChosenUnit.y, map);
        let finishNode = getNodeFromMap(x, y, map);
        let path:any = aStar(map, startNode, finishNode);
        pursueUnit(currentlyChosenUnit, computersUnit, computersUnit.x, computersUnit.y, 0, path);
      } else {
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

    //////////////////////////////////////////////////////////////////////////
    // let startNode = getNodeFromMap(currentlyChosenUnit.x, currentlyChosenUnit.y, map);
    // let finishNode = getNodeFromMap(x, y, map);
    // let path:any = aStar(map, startNode, finishNode);
    // console.error('startNode', startNode);
    // console.error('finishNode', finishNode);
    // assignUnitMoveToPosition(currentlyChosenUnit, x, y);
    // updateUnit(currentlyChosenUnit,path, 0, x, y);
  }
});

//setInterval(updateMap, 40);
