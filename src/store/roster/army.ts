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
  let updatedUnit = Object.assign({}, unit);
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
    updatedUnit.armyPosition = { // assign armyPosition
      x: playerArmyPositionX,
      y: playerArmyPositionY,
    };

  } else {
    army = computerArmy;
    updatedUnit.armyPosition = { // assign armyPosition
      x: computerArmyPositionX,
      y: computerArmyPositionY
    };
  }
  if(unit) {
      army.push(updatedUnit);
  }
  if(side === 'player') {
    changePlayerArmyPosition();
  } else {
    changeComputerArmyPosition();
  }
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
      rearrangePlayerArmyPosition();
    } else {
      computerArmy = deleteUnitFromArmy(unit, computerArmy);
      rearrangeComputerArmyPosition();
    }
  }
}

export const changePlayerArmyPosition = () => {
  let i = playerArmy.length;
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  if(i % 5 === 0) {
    playerArmyPositionX = defaultWidth;
    playerArmyPositionY += marginHeight;
  } else {
    playerArmyPositionX += marginWidth;
  }
}

export const changeComputerArmyPosition = () => {
  let i = computerArmy.length;
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  if(i % 5 === 0) {
    computerArmyPositionX = defaultWidth;
    computerArmyPositionY += marginHeight;
  } else {
    computerArmyPositionX += marginWidth;
  }
}

export const rearrangePlayerArmyPosition = () => {
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  let x:number= unitRosterWidth + 20;
  let y:number= titleHeight + 60;
  let i = 1;
  for(let unit of playerArmy) {
    unit.armyPosition = { // assign armyPosition
      x,
      y
    };
    if(i % 5 === 0) {
      x = defaultWidth;
      y += marginHeight;
    } else {
      x += marginWidth;
    }
    i++;
  }
  if(playerArmy.length !== 0) {
    playerArmyPositionX = playerArmy[playerArmy.length - 1].armyPosition.x;
    playerArmyPositionY = playerArmy[playerArmy.length - 1].armyPosition.y;
  } else {
    playerArmyPositionX = unitRosterWidth + 20;
    playerArmyPositionY = titleHeight + 60;
  }
}

export const rearrangeComputerArmyPosition = () => {
  let marginWidth = armyImgWidth + 10;
  let marginHeight = armyImgHeight + 15;
  let defaultWidth = unitRosterWidth + 20;
  let x:number= unitRosterWidth + 20;
  let y:number= titleHeight + 60;
  let i = 1;
  for(let unit of computerArmy) {
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
  if(computerArmy.length !== 0) {
    computerArmyPositionX = computerArmy[computerArmy.length - 1].armyPosition.x;
    computerArmyPositionY = computerArmy[computerArmy.length - 1].armyPosition.y;
  } else {
    computerArmyPositionX = unitRosterWidth + 20;;
    computerArmyPositionY = titleHeight + 60;
  }
}
