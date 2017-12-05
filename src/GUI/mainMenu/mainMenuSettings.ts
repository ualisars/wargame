import {WIDTH, HEIGHT} from '../../config';

export const mainMenu:any = document.getElementById('mainMenu');
export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');
mainMenu.width = WIDTH;
mainMenu.height = HEIGHT;
mainMenu.style.border = "1px solid";

dragAndDropCanvas.width = WIDTH;
dragAndDropCanvas.height = HEIGHT;


// define 2d context
export const mainMenuCtx = mainMenu.getContext('2d');
export const dragAndDropCanvasCtx = dragAndDropCanvas.getContext('2d');

export const clearMainMenu = () => {
  mainMenuCtx.clearRect(0, 0, WIDTH, HEIGHT);
  dragAndDropCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
}
