import {assert} from 'chai';
import {
  getClosestToEnemyNodes,
  getClosestToEnemySideNodes
} from '../../../../src/utils/node/get';
import {
  hidingEnemies,
  addToHidingEnemies,
  removeFromHidingEnemies
} from '../../../../src/store/AI/enemies/hidingEnemies';
import {createUnit} from '../../../../src/unit/create';

describe('NodeUtils: get: closestToEnemy test', () => {

  // add cavalry to hidingEnemies
  let cavalry = createUnit('lightInfantry', 130, 60, 5, 'player');
  before(() => {
    // beforeEach:namedFun
    addToHidingEnemies(cavalry);
  });

  // remove cavalry from hidingEnemies
  after(() => {
    removeFromHidingEnemies(cavalry);
  });

  let nodes:any[] = [
    {x: 200, y: 400},
    {x: 20, y: 300},
    {x: 120, y: 60},
    {x: 80, y: 240},
    {x: 200, y: 20},
    {x: 20, y: 100},
    {x: 160, y: 220}
  ];

  describe('getClosestToEnemySideNodes', () => {

    it('closest nodes should be {x: 20, y:300} and {x: 20, y:100}', () => {
      let pass:boolean;
      let closestNodes:any[] = getClosestToEnemySideNodes(nodes);
      for(let node of closestNodes) {
        if(node.x === 20 && (node.y === 300 || node.y === 100)) {
          pass = true;
        } else {
          pass = false;
        }
      }
      assert.equal(pass, true);
    });
  });

  describe('getClosestToEnemyNodes', () => {

    it('closestNode to enemy should be {x: 120, y: 60}', () => {
      let closestNodes:any[] = getClosestToEnemyNodes(nodes);
      let pass:boolean;
      for(let node of closestNodes) {
        if(node.x === 120 && node.y === 60) {
          pass = true;
        } else {
          pass = false;
        }
      }
      assert.equal(pass, true);
    });
  });
});
