import {map} from '../../../src/map/createMap';
import {
  computerControlNodes,
  playerControlNodes,
  frontNodes,
  explorationNodes
} from '../../../src/AI/analyzeModule/mapAnalyze';
import {
  playerUnits,
  computerUnits,
} from '../../../src/store/unit/units';

const updatedMap = Object.assign([], map);
let playerUnit = {
  id:1,
  visibility: 2,
  currentNode: {
    x: 120,
    y: 240
  }
}

let computerUnit = {
  id:2,
  visibility: 2,
  currentNode: {
    x: 360,
    y: 280
  }
}

playerUnits.push(playerUnit);
computerUnits.push(computerUnit);

console.log('playerUnits', playerUnits);
console.log('computerUnits', computerUnits);
