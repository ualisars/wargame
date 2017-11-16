import {
  mainMenuCtx,
  armyLayoutWidth,
  unitRosterWidth,
  titleHeight,
} from './mainMenuSettings';

const unitInfoTitleX:number = armyLayoutWidth + unitRosterWidth + 170;
const unitInfoTitleY:number = titleHeight + 60;
const propertyStartX:number = unitInfoTitleX - 100;
const propertyStartY:number = unitInfoTitleY + 30;
const valueStartX:number = propertyStartX + 200;
const valueStartY:number = unitInfoTitleY + 30;

export const unitInfo = () => {
  displayTitle();
  displayUnitInfo();
}

const displayTitle = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Unit Info:', unitInfoTitleX, unitInfoTitleY);
}

const displayUnitInfo = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Property:', propertyStartX, propertyStartY);
  mainMenuCtx.fillText('Value', valueStartX, valueStartY);
}
