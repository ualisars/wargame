import {
  canvas,
  ctx,
  WIDTH,
  HEIGHT,
  gridSize
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

import Unit from './unit/Unit';

import {
  onChooseUnit,
  createUnit,
  assignUnitMoveToPosition,
} from './unit/unitActions';
import {updateUnit} from './unit/unitMovement';

import {
  units,
  playersUnits,
  computersUnits,
  currentlyChosenUnit
} from './store/unitStore';

createUnit('barbarian', 40, 80, 15, 'player');
createUnit('knight', 80, 360, 15, 'player');
createUnit('infantry', 1080, 560, 15, 'computer');

drawGrid();
console.log('map', map);


canvas.addEventListener('click', (e) => {
  console.error('Click');
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  onChooseUnit(playersUnits, x, y);
  console.log('currentlyChosenUnit', currentlyChosenUnit);
});

// set onClickListener for right mouse event
canvas.addEventListener('contextmenu', (e) => {
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
    assignUnitMoveToPosition(currentlyChosenUnit, x, y);
    updateUnit(currentlyChosenUnit,path, 0, x, y);
  }

  //drawPath(path);
});
