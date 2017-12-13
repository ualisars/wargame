import {
  HEIGHT,
  WIDTH
} from '../../../config';
import {
  dragAndDropCanvasCtx,
  mainMenuCtx
} from '../../../config/context';


export const clearMainMenu = () => {
  mainMenuCtx.clearRect(0, 0, WIDTH, HEIGHT);
  dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
}
