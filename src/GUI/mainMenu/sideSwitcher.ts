import {
  mainMenuCtx,
  mainMenu,
  dragAndDropCanvas
} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {rosterWidth} from './unitRoster';
import {infoWidth} from './info';
import{
  chosenUnitsWidth,
  displayChosenUnits
} from './army';
export const side:string = 'player';

export const titleHeight = 70;
let playerX0 = chosenUnitsWidth;
let playerX1 = chosenUnitsWidth + (chosenUnitsWidth / 2);
let playerY0 = 0
let playerY1 = titleHeight / 2;

let computerX0 = playerX1;
let computerX1 = computerX0 + (chosenUnitsWidth / 2);
let computerY0 = 0;
let computerY1 = titleHeight / 2;

let playerWidth = chosenUnitsWidth / 2;
let computerWidth = chosenUnitsWidth / 2;

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
  mainMenuCtx.fillRect(rosterWidth, 0, (chosenUnitsWidth / 2), (titleHeight / 2));
  mainMenuCtx.strokeRect(rosterWidth, 0, (chosenUnitsWidth / 2), (titleHeight / 2));
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '28px serif';
  mainMenuCtx.fillText('Player', chosenUnitsWidth + 120, (titleHeight / 2) - 10);
}

export const displayComputer = () => {
  let color:string = '#ccc';
  if(side === 'computer') color = '#fff';
  mainMenuCtx.fillStyle = color;
  mainMenuCtx.fillRect(rosterWidth + (chosenUnitsWidth / 2), 0, (chosenUnitsWidth / 2), (titleHeight / 2));
  mainMenuCtx.strokeRect(rosterWidth + (chosenUnitsWidth / 2), 0, (chosenUnitsWidth / 2), (titleHeight / 2));
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '28px serif';
  mainMenuCtx.fillText('Computer', chosenUnitsWidth + 300, (titleHeight / 2) - 10);
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
  if(mouseX >= rosterWidth && mouseX < playerX1 && mouseY >= playerY0 && mouseY < playerY1) {
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
