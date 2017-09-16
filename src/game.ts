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

import Warrior from './warrior/Warrior';
import {warriors, currentlyChosenWarrior} from './store/warriorStore';
import {
  onChooseWarrior,
  createWarrior,
  assignWarriorMoveToPosition,
} from './warrior/warriorAction';
import {updateWarrior} from './warrior/warriorMovement';

import {
  createUnit,
  onChooseUnit,
  onChangeWarriorPositionInUnit
} from './unit/unitActions';
import {
  units,
  currentlyChosenUnit
} from './store/unitStore';

import {
  calcDestinationAngleInDegrees
} from './unit/unitUtils';

let warrior = createWarrior('barbarian', 80, 160, 5);
createUnit('testUnit', 6, 240, 420);

drawGrid();
console.log('map', map);
console.log('currentlyChosenWarrior', currentlyChosenWarrior);

canvas.addEventListener('click', (e) => {
  console.error('Click');
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  onChooseWarrior(warriors, x, y);
  onChooseUnit(units, currentlyChosenWarrior);
  console.log('currentlyChosenWarrior', currentlyChosenWarrior);
});

// set onClickListener for right mouse event
canvas.addEventListener('contextmenu', (e) => {
  console.error('Right Mouse Click');
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  let startNode = getNodeFromMap(currentlyChosenUnit.commanderPositionX, currentlyChosenUnit.commanderPositionY);
  let finishNode = getNodeFromMap(x, y);
  console.error('startNode', startNode);
  console.error('finishNode', finishNode);
  assignWarriorMoveToPosition(currentlyChosenWarrior, x, y);

  assignWarriorMoveToPosition(currentlyChosenWarrior, x, y);
  console.error('Angle', calcDestinationAngleInDegrees(currentlyChosenUnit, x, y));
  // let path:any = aStar(startNode, finishNode);
  // if(currentlyChosenUnit) {
  //  onChangeWarriorPositionInUnit(currentlyChosenUnit,path, 0, x, y);
  // }

  //drawPath(path);
});
