import { gridSize } from "../../config";
import { searchMap } from "../../map/createMap/initialMap";
import MapNode from "../../map/nodes/MapNode";

export const coordinateBinarySearch = (
    left: number,
    right: number,
    searchCoordinate: number
): MapNode[] => {
    if(right >= left) {
        let medium = Math.floor(left + (right - left) / 2);
        let coordinate = medium * gridSize;
        if(searchCoordinate >= coordinate && searchCoordinate < coordinate + gridSize) {
            return searchMap[medium];
        }
        else if(searchCoordinate === coordinate + gridSize) {
            return searchMap[medium];
        }
        else if(coordinate > searchCoordinate) {
            return coordinateBinarySearch(left, medium - 1, searchCoordinate);
        }
        else if(coordinate < searchCoordinate) {
            return coordinateBinarySearch(medium + 1, right, searchCoordinate);
        }
    }
}