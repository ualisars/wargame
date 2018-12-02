import {
  MAP_WIDTH,
  CANVAS_HEIGHT
} from '../../../config';
import {
  dragAndDropCanvasCtx,
  mainMenuCtx
} from '../../../config/context';


export const clearMainMenu = () => {
  mainMenuCtx.clearRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
  dragAndDropCanvasCtx.clearRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
}
