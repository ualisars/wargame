import { loadingCtx } from "../../config/context/context";
import { loadingCanvas } from "../../config/canvas/loading";
import { MAP_WIDTH, CANVAS_HEIGHT } from "../../config";

export const drawLoadingCanvas = () => {
    loadingCanvas.style.zIndex = '7';
    loadingCtx.fillStyle = '#ccc';
    loadingCtx.fillRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
    loadingCtx.font = "48px serif";
    loadingCtx.fillStyle = "#000";
    let x = (MAP_WIDTH / 2) - 100;
    let y = (CANVAS_HEIGHT / 2) - 50;
    loadingCtx.fillText("Loading...", x, y);
}