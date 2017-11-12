import {
  mainMenuCtx,
  mainMenu,
  dragAndDropCanvas,
  unitRosterWidth,
  armyLayoutWidth,
  infoLayoutWidth,
  titleHeight
} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import{
  displayChosenUnits
} from './army';
export const side:string = 'player';

let playerX0 = armyLayoutWidth;
let playerX1 = armyLayoutWidth + (armyLayoutWidth / 2);
let playerY0 = 0
let playerY1 = titleHeight / 2;

let computerX0 = playerX1;
let computerX1 = computerX0 + (armyLayoutWidth / 2);
let computerY0 = 0;
let computerY1 = titleHeight / 2;

let playerWidth = armyLayoutWidth / 2;
let computerWidth = armyLayoutWidth / 2;

export const displayTitle = () => {
  mainMenuCtx.clearRect(0,0, WIDTH, titleHeight);
  mainMenuCtx.fillStyle =  '#2c2f33';
  mainMenuCtx.fillRect(0, 0, WIDTH, titleHeight)
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.font = '38px serif';
  mainMenuCtx.textAlign = 'center';
  displayPlayer();
  displayComputer();
}

export const displayPlayer = () => {
  let color:string = '#ccc';
  if(side === 'player') color = '#fff';
  mainMenuCtx.fillStyle = color;
  mainMenuCtx.fillRect(unitRosterWidth, 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.strokeRect(unitRosterWidth, 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '28px serif';
  mainMenuCtx.fillText('Player', armyLayoutWidth + 120, (titleHeight / 2) - 10);
}

export const displayComputer = () => {
  let color:string = '#ccc';
  if(side === 'computer') color = '#fff';
  mainMenuCtx.fillStyle = color;
  mainMenuCtx.fillRect(unitRosterWidth + (armyLayoutWidth / 2), 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.strokeRect(unitRosterWidth + (armyLayoutWidth / 2), 0, (armyLayoutWidth / 2), (titleHeight / 2));
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '28px serif';
  mainMenuCtx.fillText('Computer', armyLayoutWidth + 300, (titleHeight / 2) - 10);
}

export const changeToPlayer = () => {
  this.side = 'player';
  displayChosenUnits();
}

export const changeToComputer = () => {
  this.side = 'computer';
  displayChosenUnits();
}

export const onChoosePlayer = (mouseX:number, mouseY:number) => {
  if(mouseX >= unitRosterWidth && mouseX < playerX1 && mouseY >= playerY0 && mouseY < playerY1) {
    changeToPlayer();
    displayTitle();
  }
}

export const onChooseComputer = (mouseX:number, mouseY:number) => {
  if(mouseX >= computerX0 && mouseX < computerX1 && mouseY >= computerY0 && mouseY < computerY1) {
    changeToComputer();
    displayComputer();
    displayTitle();
    console.log('side', side);
  }
}
