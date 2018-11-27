import { Unit } from "../../../unit";
import { gridSize } from "../../../config";
import MapNode from "../../../map/nodes/MapNode";
import { getNodeFromMap } from "../../node";

export const getInterceptionNodes = (unit: Unit): MapNode[] => {
    let node = unit.currentNode;
    let interceptedNodes: MapNode[] = [];
    for(let x = node.x - gridSize; x <= node.x + gridSize; x += gridSize) {
        let interceptedNode = getNodeFromMap(x, node.y);
        if(interceptedNode && x !== node.x) {
            interceptedNodes.push(interceptedNode);
        }
    }
    for(let y = node.y - gridSize; y <= node.y + gridSize; y += gridSize) {
        let interceptedNode = getNodeFromMap(node.x, y);
        if(interceptedNode && y != node.y) {
            interceptedNodes.push(interceptedNode);
        }
    }
    return interceptedNodes;
}