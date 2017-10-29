import { expect, should, assert} from 'chai';
import {
  deleteUnitFromArray
} from '../src/utils/unitUtils';
import {
  isUnitInArray
} from '../src/utils/objUtils';

describe('Unit utils test', function() {
  describe('deleteUnitFromArray', function() {
    let unit = {
      id: 5
    }
    let arr = [
      {id: 2},
      {id: 5},
      {id: 10}
    ]
    it('array should not contain unit after deletion', function() {
      let updatedArr = deleteUnitFromArray(unit, arr);
      assert.equal(isUnitInArray(unit, updatedArr), false);
    });
  });
});
