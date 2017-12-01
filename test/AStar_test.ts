import { expect, should, assert} from 'chai';

import {
  getMinFScore,
  unclosedNeigbours,
  isObjectInMapKeys
} from '../src/path';

import {
  deleteObjectFromArray,
  isObjectInArray,
} from '../src/utils';

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

describe('A* Algorithm tests', function() {
  describe('getMinFScore', function() {
    it('min value should be 1200, return node is {node: {x: 12, y: 30, fScore: 1200}', function() {
      assert.equal(getMinFScore(open).fScore, 1200);
    });
  });


  describe('Delete node from map', function() {
    it('Delete node {x: 27, y: 52, fScore: 2800}', function() {
      let updatedOpen = deleteObjectFromArray(node6, open);
      assert.equal(isObjectInArray(node6, updatedOpen), false);
    });
  });

  describe('unclosedNeigbours', function() {
    it('Check neighbours of node7 is in closed', function() {
      let neighboursNotInClosed = unclosedNeigbours(node7, closed);
      console.log('neighboursNotInClosed', neighboursNotInClosed);
      assert.equal(isObjectInArray(node1, neighboursNotInClosed), true);
      assert.equal(isObjectInArray(node6, neighboursNotInClosed), true);
      assert.equal(isObjectInArray(node4, neighboursNotInClosed), false);
    });
  });

});
