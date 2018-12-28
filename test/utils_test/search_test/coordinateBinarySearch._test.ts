import { assert } from "chai";
import { coordinateBinarySearch } from "../../../src/utils/search/binarySearch";
import { MAP_WIDTH, gridSize } from "../../../src/config";
import MapNode from "../../../src/map/nodes/MapNode";

describe("search utils test", () => {
    describe("coordinateBinarySearch test", () => {
        let elements = MAP_WIDTH / gridSize;
        describe("search 30", () => {
            let searchValue;
            let foundValue: MapNode[];
            before(() => {
                searchValue = 30;
                foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            });
            it("found value x should be 0", () => {
                assert.equal(foundValue[0].x, 0);
            });
        });
        describe("search 40", () => {
            let searchValue;
            let foundValue: MapNode[];
            before(() => {
                searchValue = 40;
                foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            });
            it("found value should be 40", () => {
                assert.equal(foundValue[0].x, 40);
            });
        });
        describe("search 70", () => {
            let searchValue;
            let foundValue: MapNode[];
            before(() => {
                searchValue = 70;
                foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            });
            it("found value should be 40", () => {
                assert.equal(foundValue[0].x, 40);
            });
        });
        describe("search 633", () => {
            let searchValue;
            let foundValue: MapNode[];
            before(() => {
                searchValue = 633;
                foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            });
            it("found value should be 600", () => {
                assert.equal(foundValue[0].x, 600);
            });
        });
    });
});