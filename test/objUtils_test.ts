import { expect, should, assert} from 'chai';
import {
  deleteObjectFromArray,
  isObjectInArray,
  getNodeFromArray,
  isObjectEmpty,
  isUnitInArray
} from '../src/utils/objUtils';

import {
  isObjectInMapKeys
} from '../src/path/aStarUtils';

let open:any = [];

let node1 = {x: 12, y: 30, fScore: 3000};
let node2 = {x: 11, y: 31, fScore: 4000};
let node3 = {x: 22, y: 300, fScore: 2700};
let node4 = {x: 120, y: 230, fScore: 1200};
let node5 = {x: 27, y: 47, fScore: 6700};
let node6 = {x: 39, y: 52, fScore: 2800};
let node7 = {x: 121, y: 222, fScore: 3080, neighbours: [node1, node4, node6]};

let closed = [
  node2,
  node4,
  node5
]

open.push(node1);
open.push(node2);
open.push(node3);
open.push(node4);
open.push(node5);
open.push(node6);
open.push(node7);

let from:any = new Map();
from.set(node1, node5);
from.set(node2, node3);
from.set(node6, node4);
from.set(node5, node2);

describe('Object Utils Tests', function() {
  describe('getNodeFromArray', function() {
    it('find node2 {x: 11, y: 31, fScore: 4000}', function() {
      let currentNode = {
        x: 11,
        y: 31
      }
      let findedNode = getNodeFromArray(currentNode, open);
      assert.equal(findedNode.x, 11);
      assert.equal(findedNode.y, 31);
      assert.equal(findedNode.fScore, 4000);
    });
  });

  describe('isObjectInMapKeys', function() {
    it('return for node2 shoule be true ', function() {
      assert.equal(isObjectInMapKeys(node2, from), true);
    });
    it('return for node3 should be false ', function() {
      assert.equal(isObjectInArray(node3, from), false);
    });
    it('return for node4 should be false ', function() {
      assert.equal(isObjectInArray(node4, from), false);
    });
  });

  describe('IsObjectInArray', function() {
    it('find node {x: 11, y: 31, fScore: 4000}', function() {
      assert.equal(isObjectInArray(node2, open), true);
    });
    it('find node {x: 12, y: 30, fScore: 3000}', function() {
      assert.equal(isObjectInArray(node1, open), true);
    });
    it('find node {x: 134, y: 94, fScore: 6589}', function() {
      assert.equal(isObjectInArray({x: 134, y: 94, fScore: 6589}, open), false);
    });
  });

  describe('isObjectEmpty', function() {
    let obj1 = {};
    let obj2 = {front: {enemy: 2}};
    it('Object1 is an empty object', function() {
      assert.equal(isObjectEmpty(obj1), true);
    });
    it('Object2 is not empty object', function() {
      assert.equal(isObjectEmpty(obj2), false);
    });
  });

  describe('isUnitInArray', function() {
    let unit1 = {id: 7};
    let unit2 = {id: 17};
    let arr = [
      {id: 1},
      {id: 7},
      {id: 12},
      {id: 114},
      {id: 527},
    ]
    it('Unit with id:7 should be in array', function() {
      assert.equal(isUnitInArray(unit1, arr), true);
    });
    it('Unit with id:17 should not be in array', function() {
      assert.equal(isUnitInArray(unit2, arr), false);
    });
  });

});
