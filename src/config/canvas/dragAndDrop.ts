import {
  CANVAS_HEIGHT,
  MAP_WIDTH
} from '..';

export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');

if(dragAndDropCanvas) {
  dragAndDropCanvas.width = MAP_WIDTH;
  dragAndDropCanvas.height = CANVAS_HEIGHT;
}
