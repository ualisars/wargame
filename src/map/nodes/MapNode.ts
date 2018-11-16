import { WIDTH, HEIGHT, gridSize } from "../../config";

class MapNode {
    id: number;
    x: number;
    y: number;

    constructor(id: number, x: number, y: number) {
        if(x % gridSize !== 0 || y % gridSize !== 0) {
            throw new Error("Node coordinates do not corresponds to map grid size");
        }
        if(x >= 0 && x <= WIDTH && y >= 0 && y <= HEIGHT) {
            this.id = id;
            this.x = x;
            this.y = y;
        } else {
            throw new Error("Node is out of bound");
        }
    }
}