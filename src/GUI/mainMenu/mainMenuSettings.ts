import {WIDTH, HEIGHT} from '../../map/mapSettings';

export const mainMenu:any = document.getElementById('mainMenu');
export const dragAndDropCanvas:any = document.getElementById('dragAndDrop');
mainMenu.width = WIDTH;
mainMenu.height = HEIGHT;
mainMenu.style.border = "1px solid";

dragAndDropCanvas.width = WIDTH;
dragAndDropCanvas.height = HEIGHT;

export let armyLayoutWidth:number = Math.round(WIDTH / 3);
export let armyLayoutHeight:number = HEIGHT - 100;
export let sideSwitcherWidth:number = 100;
export let sideSwitcherHeight:number = 100;
export let unitRosterWidth:number = Math.round(WIDTH / 3);
export let unitRosterHeight:number = HEIGHT - 100;
export let infoLayoutWidth:number = Math.round(WIDTH / 3);;
export let infoLayoutHeight:number = HEIGHT - 100;

// define 2d context
export const mainMenuCtx = mainMenu.getContext('2d');
export const dragAndDropCanvasCtx = dragAndDropCanvas.getContext('2d')
