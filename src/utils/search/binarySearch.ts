import { gridSize } from "../../config";

export const coordinateBinarySearch = (
    left: number,
    right: number,
    searchCoordinate: number
): number => {
    if(right >= left) {
        let medium = Math.floor(left + (right - left) / 2);
        let coordinate = medium * gridSize;
        if(searchCoordinate >= coordinate && searchCoordinate < coordinate + gridSize) {
            return coordinate;
        }
        else if(searchCoordinate === coordinate + gridSize) {
            return coordinate + gridSize;
            
        }
        else if(coordinate > searchCoordinate) {
            return coordinateBinarySearch(left, medium - 1, searchCoordinate);
        }
        else if(coordinate < searchCoordinate) {
            return coordinateBinarySearch(medium + 1, right, searchCoordinate);
        }
    }
}