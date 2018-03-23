import {assert} from 'chai';
import {
  getFarthestNodeFromEnemy,
  getFarthestXNodes
} from '../../../../src/utils/node/get';
import {createUnit} from '../../../../src/unit/create';

describe('NodeUtils: get: farthest nodes test', () => {

  // add cavalry to hidingEnemies
  let enemy = createUnit('lightInfantry', 80, 40, 5, 'player');

  let nodes:any[] = [
    {x: 80, y: 80},
    {x: 240, y: 120},
    {x: 400, y: 500},
    {x: 400, y: 0},
    {x: 180, y: 300},
    {x: 0, y: 200}
  ];

  describe('getFarthestNodeFromEnemy', () => {

    it('fathestNode should be {x: 400, y: 120}', () => {
        let node = getFarthestNodeFromEnemy(enemy, nodes);
        assert.equal(node.x, 400);
        assert.equal(node.y, 500);
    });

  });

  describe('getFarthestXNodes', () => {
    it('farthestXNodes are {x: 400, y: 500},{x: 400, y: 0} and {x: 0, y: 200}', () => {
      let farthestXNodes:any[] = getFarthestXNodes(nodes);
      let pass:boolean = true;

      for(let node of farthestXNodes) {
        if((node.x === 400 || node.x === 0) && (node.y === 500 || node.y === 0 || node.y === 200)) {
          // pass ramains the same
        } else {
          pass = false;
        }
      }

      assert.equal(pass, true);
    });
  });

});
