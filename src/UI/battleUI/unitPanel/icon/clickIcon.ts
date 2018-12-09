import { pathCtx } from "../../../../config/context/context";
import { gridSize, MAP_WIDTH, MAP_HEIGHT } from "../../../../config";
import { getNodeFromMap } from "../../../../utils";

export const drawClickedIcon = (x: number, y: number) => {
    pathCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    let node = getNodeFromMap(x, y);
    if(node) {
        let nodeCenterX = node.x + (gridSize / 2);
        let nodeCenterY = node.y + (gridSize / 2);
        let radius = Math.round(gridSize / 3);
        pathCtx.beginPath();
        pathCtx.arc(nodeCenterX, nodeCenterY, radius, 0, Math.PI*2);
        pathCtx.strokeStyle = "#20ef09";
        pathCtx.stroke();
        pathCtx.closePath();
        setTimeout(() => {
            pathCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
        }, 1000);
    }
}