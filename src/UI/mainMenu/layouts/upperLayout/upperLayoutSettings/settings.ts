import {
  armyLayoutWidth,
  titleHeight
} from '../../../../../config/mainMenu';

export let playerX0 = armyLayoutWidth;
export let playerX1 = armyLayoutWidth + (armyLayoutWidth / 2);
export let playerY0 = 0
export let playerY1 = titleHeight / 2;

export let computerX0 = playerX1;
export let computerX1 = computerX0 + (armyLayoutWidth / 2);
export let computerY0 = 0;
export let computerY1 = titleHeight / 2;

export let playerWidth = armyLayoutWidth / 2;
export let computerWidth = armyLayoutWidth / 2;

export const goldX:number = playerX0 + playerWidth;
export const goldY:number = (titleHeight / 2) + 25;
