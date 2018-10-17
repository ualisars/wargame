import {WIDTH, HEIGHT} from '..';

export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');

if(dragAndDropCanvas) {
  dragAndDropCanvas.width = WIDTH;
  dragAndDropCanvas.height = HEIGHT;
}
