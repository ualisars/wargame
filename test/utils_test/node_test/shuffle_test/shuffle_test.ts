import {assert} from 'chai';
import {shuffleNodes} from '../../../../src/utils/node/shuffle';

describe('NodeUtils: shuffle test', () => {

  describe('shuffleNodes test', () => {
    let nodes:any[] = [
      {x: 0, y: 0},
      {x: 40, y: 0},
      {x: 80, y: 0},
      {x: 120, y: 0},
      {x: 160, y: 0},
      {x: 200, y: 0},
      {x: 240, y: 0},
      {x: 280, y: 0},
      {x: 320, y: 0}
    ];

    const shuffledNodes = shuffleNodes(nodes);

    it('shuffledNodes should be different from nodes', () => {
      let pass:boolean = false;
      // if shuffledNodes contains at least one different values test is passed
      for(let i = 0; i < nodes.length; ++i) {
        if(nodes[i].x !== shuffledNodes[i].x) {
          // arrays contain different value
          pass = true;
        }
      }
      assert.equal(pass, true);
    });
  });
});
