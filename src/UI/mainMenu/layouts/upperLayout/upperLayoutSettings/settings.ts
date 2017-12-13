import {
  armyLayoutWidth,
  titleHeight
} from '../../../../../config/mainMenu';

export let playerSwitcherX0 = armyLayoutWidth;
export let playerSwitcherX1 = armyLayoutWidth + (armyLayoutWidth / 2);
export let playerSwitcherY0 = 0
export let playerSwitcherY1 = titleHeight / 2;

export let computerSwitcherX0 = playerSwitcherX1;
export let computerSwitcherX1 = computerSwitcherX0 + (armyLayoutWidth / 2);
export let computerSwitcherY0 = 0;
export let computerSwitcherY1 = titleHeight / 2;

export let playerSwitcherWidth = armyLayoutWidth / 2;
export let computerSwitcherWidth = armyLayoutWidth / 2;

export const goldX:number = playerSwitcherX0 + playerSwitcherWidth;
export const goldY:number = (titleHeight / 2) + 25;
