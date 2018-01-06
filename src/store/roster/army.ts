import {side} from '../../config/mainMenu/sides/side';
import {
  unitRosterWidth,
  titleHeight
} from '../../config/mainMenu';
import {
  armyImgHeight,
  armyImgWidth
} from '../../UI/mainMenu/layouts/armyLayout';
import {
  isUnitInArray,
  deleteUnitFromArmy
} from '../../utils';

export let computerArmy:any[] = [];
export let computerArmyPositionX:number = unitRosterWidth + 20;
export let computerArmyPositionY:number = titleHeight + 60;
export let playerArmy:any[] = [];
export let playerArmyPositionX:number = unitRosterWidth + 20;
export let playerArmyPositionY:number = titleHeight + 60;

export const addUnitToArmy = (unit:any) => {
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
    unit.armyPosition = { // assign armyPosition
      x: playerArmyPositionX,
      y: playerArmyPositionY
    };
    changePlayerArmyPosition();
  } else {
    army = computerArmy;
    unit.armyPosition = { // assign armyPosition
      x: computerArmyPositionX,
      y: computerArmyPositionY
    };
    changeComputerArmyPosition();
  }
  if(unit) {
      army.push(unit);
      console.log('unit', unit);
      console.log('unit', unit.name, 'is added');
  }
  console.log('computerArmy', computerArmy);
  console.log('playerArmy', playerArmy);
  console.error('playerArmyPositionX', playerArmyPositionX);
  console.error('playerArmyPositionY', playerArmyPositionY);
}

export const removeUnitFromArmy = (unit:any) => {
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  if(unit && isUnitInArray(unit, army)) {
    if(side === 'player') {
      playerArmy = deleteUnitFromArmy(unit, playerArmy);
    } else {
      computerArmy = deleteUnitFromArmy(unit, computerArmy);
    }
  }
}

export const changePlayerArmyPosition = () => {
  let i = playerArmy.length;
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  if(i % 5 === 0) {
    playerArmyPositionY += marginHeight;
    playerArmyPositionX = defaultWidth;
  } else {
    playerArmyPositionX += marginWidth;
  }
  i++;
}

export const changeComputerArmyPosition = () => {
  let i = computerArmy.length;
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  if(i % 5 === 0) {
    computerArmyPositionY += marginHeight;
    computerArmyPositionX = defaultWidth;
  } else {
    computerArmyPositionX += marginWidth;
  }
  i++;
}

export const rearrangeArmyPosition = () => {
  let army:any[] = [];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  let x:number=unitRosterWidth+20;
  let y:number=titleHeight+60;
  let i = 1;
  for(let unit of army) {
    unit.armyPosition = { // assign armyPosition
      x,
      y
    };
    if(i % 5 === 0) {
      y += marginHeight;
      x = defaultWidth;
    } else {
      x += marginWidth;
    }
    i++;
  }
  if(side === 'player') {
    playerArmyPositionX = army[army.length - 1].armyPositionX;
    playerArmyPositionY = army[army.length - 1].armyPositionY;
  } else {
    computerArmyPositionX = army[army.length - 1].armyPositionX;
    computerArmyPositionY = army[army.length - 1].armyPositionY;
  }
}
