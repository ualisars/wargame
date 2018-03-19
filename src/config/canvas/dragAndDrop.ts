import {WIDTH, HEIGHT} from '../index';

export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');

if(dragAndDropCanvas) {
  dragAndDropCanvas.width = WIDTH;
  dragAndDropCanvas.height = HEIGHT;
}
