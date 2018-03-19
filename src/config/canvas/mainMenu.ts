import {WIDTH, HEIGHT} from '../index';;

export const mainMenu:any = document.getElementById('mainMenu');

if(mainMenu) {
  mainMenu.width = WIDTH;
  mainMenu.height = HEIGHT;
  mainMenu.style.border = "1px solid";
}
