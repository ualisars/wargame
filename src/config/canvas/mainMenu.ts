import {MAP_WIDTH, CANVAS_HEIGHT} from '..';

export const mainMenu:any = document.getElementById('mainMenu');

if(mainMenu) {
  mainMenu.width = MAP_WIDTH;
  mainMenu.height = CANVAS_HEIGHT;
  mainMenu.style.border = "1px solid";
}
