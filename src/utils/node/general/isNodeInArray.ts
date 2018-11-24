import MapNode from "../../../map/nodes/MapNode";

export const isNodeInArray = (node: MapNode, arr: MapNode[]): boolean => {
    let found: boolean = false;
    for(let arrNode of arr) {
        if(node.x === arrNode.x && node.y === arrNode.y) {
            found = true;
        }
    }
    return found;
}