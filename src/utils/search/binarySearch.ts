import { gridSize } from "../../config";
import { searchMap } from "../../map/createMap/initialMap";
import MapNode from "../../map/nodes/MapNode";

export const findXInSearchMap = (
    left: number,
    right: number,
    searchCoordinate: number,
): MapNode[] => {
    if(right >= left) {
        let medium = Math.floor(left + (right - left) / 2);
        let coordinate = medium * gridSize;
        if(searchCoordinate >= coordinate && searchCoordinate < coordinate + gridSize) {
            return searchMap[coordinate];
        }
        else if(searchCoordinate === coordinate + gridSize) {
            return searchMap[coordinate + gridSize];
        }
        else if(coordinate > searchCoordinate) {
            return findXInSearchMap(left, medium - 1, searchCoordinate);
        }
        else if(coordinate < searchCoordinate) {
            return findXInSearchMap(medium + 1, right, searchCoordinate);
        }
    }
}

export const coordinateYBinarySearch = (
    left: number,
    right: number,
    searchCoordinate: number,
    map: MapNode[]): MapNode => {
    if(right >= left) {
        let medium = Math.floor(left + (right - left) / 2);
        let node: MapNode = map[medium];
        if(!node) {
            return null;
        }
        if(searchCoordinate >= node.y && searchCoordinate < node.y + gridSize) {
            return map[medium];
        }
        else if(searchCoordinate === node.y + gridSize) {
            return map[medium + 1];
        }
        else if(node.y > searchCoordinate) {
            return coordinateYBinarySearch(left, medium - 1, searchCoordinate, map);
        }
        else if(node.y < searchCoordinate) {
            return coordinateYBinarySearch(medium + 1, right, searchCoordinate, map);
        }
    }
}