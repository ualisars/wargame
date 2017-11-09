import {WIDTH, HEIGHT} from '../../map/mapSettings';

export const mainMenu:any = document.getElementById('mainMenu');

mainMenu.width = WIDTH;
mainMenu.height = HEIGHT;
mainMenu.style.border = "1px solid";

// define 2d context
export const mainMenuCtx = mainMenu.getContext("2d");
