import { MAP_WIDTH, MAP_HEIGHT, gridSize } from "../../config";

class MapNode {
    id: number;
    x: number;
    y: number;

    constructor(id: number, x: number, y: number) {
        if(x % gridSize !== 0 || y % gridSize !== 0) {
            throw new Error("Node coordinates do not corresponds to map grid size");
        }
        if(x >= 0 && x <= MAP_WIDTH && y >= 0 && y <= MAP_HEIGHT) {
            this.id = id;
            this.x = x;
            this.y = y;
        } else {
            throw new Error("Node is out of bound");
        }
    }
}

export default MapNode;