import {assert} from 'chai';
import {getRandomNode} from '../../../../src/utils/node/random';

describe('NodeUtils: random test', () => {

    describe('getRandomNode test', () => {
      let nodes:any[] = [
        {x: 0, y: 120},
        {x: 600, y: 340},
        {x: 160, y: 80},
        {x: 240, y: 160},
        {x: 360, y: 40},
        {x: 400, y: 400}
      ];

      let results:any[] = [];
      let result1:any = getRandomNode(nodes);
      let result2:any = getRandomNode(nodes);
      let result3:any = getRandomNode(nodes);
      let result4:any = getRandomNode(nodes);
      let result5:any = getRandomNode(nodes);

      results.push(result1);
      results.push(result2);
      results.push(result3);
      results.push(result4);
      results.push(result5);

      it('results should be different', () => {
        // assume that we cannot randomly get same node 5 time in a row
        let pass:boolean = false;
        for(let i = 0; i < results.length; ++i) {
          for(let j = 0; j < results.length; ++j) {
            if(results[i].x !== results[j].x && results[i].y !== results[j].y) {
              pass = true;
            }
          }
        }

        assert.equal(pass, true);
      });
    });
});
