import { eventCtx } from "../../../../config/context/context";
import { gridSize, MAP_WIDTH, MAP_HEIGHT } from "../../../../config";
import { getNodeFromMap } from "../../../../utils";

export const drawClickedIcon = (x: number, y: number) => {
    eventCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    let node = getNodeFromMap(x, y);
    if(node) {
        let nodeCenterX = node.x + (gridSize / 2);
        let nodeCenterY = node.y + (gridSize / 2);
        let radius = Math.round(gridSize / 3);
        eventCtx.beginPath();
        eventCtx.arc(nodeCenterX, nodeCenterY, radius, 0, Math.PI*2);
        eventCtx.strokeStyle = "#20ef09";
        eventCtx.stroke();
        eventCtx.closePath();
        setTimeout(() => {
            eventCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
        }, 1000);
    }
}