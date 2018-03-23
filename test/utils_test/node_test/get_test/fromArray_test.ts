import {assert} from 'chai';
import {
  getNodeFromArray
} from '../../../../src/utils/node/get';

describe('NodeUtils: get: fromArray test', () => {

  let arr:any[] = [
    {x: 40, y: 200},
    {x: 0, y: 0},
    {x: 360, y: 600},
    {x: 0, y: 240},
    {x: 120, y: 100}
  ];

  describe('getNodeFromArray test', () => {
    it('node should be {x: 360, y: 600}', () => {
      let node:any = getNodeFromArray({x: 360, y: 600}, arr);
      assert.equal(node.x, 360);
      assert.equal(node.y, 600);
    });

    it('node should be {x: 0, y: 240}', () => {
      let queryNode = {x: 0, y: 240};
      let node:any = getNodeFromArray(queryNode, arr);
      assert.equal(node.x, 0);
      assert.equal(node.y, 240);
    });

  });

});
