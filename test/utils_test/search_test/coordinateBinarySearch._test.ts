import { assert } from "chai";
import { coordinateBinarySearch } from "../../../src/utils/search/binarySearch";
import { MAP_WIDTH, gridSize } from "../../../src/config";

describe("search utils test", () => {
    describe("coordinateBinarySearch test", () => {
        let elements = MAP_WIDTH / gridSize;
        describe("search 30", () => {
            let searchValue = 30;
            let foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            it("found value should be 0", () => {
                assert.equal(foundValue, 0);
            });
        });
        describe("search 40", () => {
            let searchValue = 40;
            let foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            it("found value should be 40", () => {
                assert.equal(foundValue, 40);
            });
        });
        describe("search 70", () => {
            let searchValue = 70;
            let foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            it("found value should be 40", () => {
                assert.equal(foundValue, 40);
            });
        });
        describe("search 633", () => {
            let searchValue = 633;
            let foundValue = coordinateBinarySearch(0, elements - 1, searchValue);
            it("found value should be 600", () => {
                assert.equal(foundValue, 600);
            });
        });
    });
});