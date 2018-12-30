import {assert} from 'chai';
import MapNode from "../../../src/map/nodes/MapNode";
import { findXInSearchMap, coordinateYBinarySearch } from "../../../src/utils/search/binarySearch";
import { MAP_WIDTH, gridSize, MAP_HEIGHT } from "../../../src/config";

describe("search utils test", () => {
    describe("coordinateBinarySearch test", () => {
        describe("search x: 220, y: 403", () => {
            let searchX: number;
            let searchY: number;
            let xArray: MapNode[];
            let foundNode: MapNode;
            before(() => {
                searchX = 220;
                searchY = 403;
                xArray = findXInSearchMap(0,  MAP_WIDTH / gridSize - 1, searchX);
                foundNode = coordinateYBinarySearch(0, MAP_HEIGHT / gridSize - 1, searchY, xArray);
            });
            it("foundNode x should be 200", () => {
                assert.equal(foundNode.x, 200);
            });
            it("found node y should be 400", () => {
                assert.equal(foundNode.y, 400);
            });
        });

        describe("search x: 29, y: 3", () => {
            let searchX: number;
            let searchY: number;
            let xArray: MapNode[];
            let foundNode: MapNode;
            before(() => {
                searchX = 29;
                searchY = 3;
                xArray = findXInSearchMap(0,  MAP_WIDTH / gridSize - 1, searchX);
                foundNode = coordinateYBinarySearch(0, MAP_HEIGHT / gridSize - 1, searchY, xArray);
            });
            it("foundNode x should be 0", () => {
                assert.equal(foundNode.x, 0);
            });
            it("found node y should be 0", () => {
                assert.equal(foundNode.y, 0);
            });
        });

        describe("search x: 480, y: 160", () => {
            let searchX: number;
            let searchY: number;
            let xArray: MapNode[];
            let foundNode: MapNode;
            before(() => {
                searchX = 480;
                searchY = 160;
                xArray = findXInSearchMap(0,  MAP_WIDTH / gridSize - 1, searchX);
                foundNode = coordinateYBinarySearch(0, MAP_HEIGHT / gridSize - 1, searchY, xArray);
            });
            it("foundNode x should be 480", () => {
                assert.equal(foundNode.x, 480);
            });
            it("found node y should be 160", () => {
                assert.equal(foundNode.y, 160);
            });
        });
    });
});