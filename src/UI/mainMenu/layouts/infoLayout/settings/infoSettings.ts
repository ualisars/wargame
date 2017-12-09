import {
  armyLayoutWidth,
  titleHeight,
  unitRosterWidth
} from '../../../../../config/mainMenu';

export const goldBoxStartX:number = armyLayoutWidth + unitRosterWidth + 100;
export const goldBoxStartY:number = titleHeight + 80;
export let startTotalMoneyTitleX:number = goldBoxStartX + 40;
export let startTotalMoneyTitleY:number = goldBoxStartY - 20;
export const boxWidth:number = 40;
export const boxHeight:number = 40;
export const goldOptions:any[] = [
  200, 300, 400, 600, 1000
];

export const unitInfoTitleX:number = armyLayoutWidth + unitRosterWidth + 170;
export const unitInfoTitleY:number = titleHeight + 60;
export let propertyStartX:number = unitInfoTitleX - 100;
export let propertyStartY:number = unitInfoTitleY + 30;
export let valueStartX:number = propertyStartX + 200;
export let valueStartY:number = unitInfoTitleY + 30;

export const changeY = () => {
  propertyStartY += 30;
  valueStartY += 30;
}

export const setDefault = () => {
  propertyStartX = unitInfoTitleX - 100;
  propertyStartY = unitInfoTitleY + 30;
  valueStartX = propertyStartX + 200;
  valueStartY = unitInfoTitleY + 30;
}
