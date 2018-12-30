import { assert } from "chai";
import { findXInSearchMap } from "../../../src/utils/search/binarySearch";
import { MAP_WIDTH, gridSize } from "../../../src/config";
import MapNode from "../../../src/map/nodes/MapNode";

describe("search utils test", () => {
    describe("findXInSearchMap test", () => {
        let elements = MAP_WIDTH / gridSize;
        describe("search 30", () => {
            let searchValue;
            let map: MapNode[];
            before(() => {
                searchValue = 30;
                map = findXInSearchMap(0, elements - 1, searchValue);
            });
            it("found value x should be 0", () => {
                assert.equal(map[0].x, 0);
            });
        });
        describe("search 40", () => {
            let searchValue;
            let map: MapNode[];
            before(() => {
                searchValue = 40;
                map = findXInSearchMap(0, elements - 1, searchValue);
            });
            it("found value should be 40", () => {
                assert.equal(map[0].x, 40);
            });
        });
        describe("search 70", () => {
            let searchValue;
            let map: MapNode[];
            before(() => {
                searchValue = 70;
                map = findXInSearchMap(0, elements - 1, searchValue);
            });
            it("found value should be 40", () => {
                assert.equal(map[0].x, 40);
            });
        });
        describe("search 633", () => {
            let searchValue;
            let map: MapNode[];
            before(() => {
                searchValue = 633;
                map = findXInSearchMap(0, elements - 1, searchValue);
            });
            it("found value should be 600", () => {
                assert.equal(map[0].x, 600);
            });
        });
    });
});