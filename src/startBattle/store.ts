import {map} from '../map/createMap';
import {
  getNodeFromMap,
  deleteObjectFromArray
} from '../utils';
import {
  playerArmy,
  computerArmy
} from '../GUI/mainMenu/units'
import {
  gridSize,
  WIDTH,
  HEIGHT
} from '../config';
import {getRandomNode} from '../AI/actions/mapActions';
import {createUnit} from '../unit/createUnit';

export let playerUnitsNodes:any[] = [];
export let computerUnitsNodes:any[] = [];

const playerX0 = 0;
const playerX1 = gridSize * 2;
const playerY0 = 0;
const playerY1 = HEIGHT;

const computerX0 = WIDTH - (gridSize * 2);
const computerX1 = WIDTH;
const computerY0 = 0;
const computerY1 = HEIGHT;


for(let x = playerX0; x <= playerX1; x += gridSize) {
  for(let y = playerY0; y <= playerY1; y+= gridSize) {
    let node = getNodeFromMap(x,y, map);
    playerUnitsNodes.push(node);
  }
}

for(let x = computerX0; x <= computerX1; x += gridSize) {
  for(let y = computerY0; y <= computerY1; y+= gridSize) {
    let node = getNodeFromMap(x,y, map);
    computerUnitsNodes.push(node);
  }
}

export const deleteNodeFromPlayerNodes = (node:any) => {
  if(node) {
    playerUnitsNodes = deleteObjectFromArray(node, playerUnitsNodes);
  }
}

export const deleteNodeFromComputerNodes = (node:any) => {
  if(node) {
    computerUnitsNodes = deleteObjectFromArray(node, computerUnitsNodes);
  }

}

export const createArmy = () => {
  return new Promise(resolve => {
    createPlayerArmy().then(() => createComputerArmy());
    resolve();
  });
}

export const createPlayerArmy = () => {
  return new Promise(resolve => {
    for(let unit of playerArmy) {
      console.log('playerArmy', playerArmy);
      console.log('createPlayerArmy', unit);
      let node = getRandomNode(playerUnitsNodes);
      console.log('createPlayerArmy randomNode', node);
      let type = unit.name;
      let x = node.x;
      let y = node.y;
      console.log('createPlayerArmy type', type);
      console.log('createPlayerArmy x', x);
      console.log('createPlayerArmy y', y);
      createUnit(type, x, y, 15, 'player');
      //deleteNodeFromPlayerNodes(node);
    }
    resolve();
  })
}

export const createComputerArmy = () => {
    console.log('computerArmy', computerArmy);
    for(let unit of computerArmy) {
      console.log('createComputerArmy', unit);
      let node = getRandomNode(computerUnitsNodes);
      console.log('createComputerArmy randomNode', node);
      let type = unit.name;
      let x = node.x;
      let y = node.y;
      console.log('createComputerArmy type', type);
      console.log('createComputerArmy x', x);
      console.log('createComputerArmy y', y);
      createUnit(type, x, y, 15, 'computer');
      //deleteNodeFromComputerNodes(node);
    }
}
