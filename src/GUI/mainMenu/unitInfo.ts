import {
  mainMenuCtx,

} from './mainMenuSettings';
import {
  armyLayoutWidth,
  unitRosterWidth,
  titleHeight,
  hoveredUnit
} from '../../config/mainMenu';

const unitInfoTitleX:number = armyLayoutWidth + unitRosterWidth + 170;
const unitInfoTitleY:number = titleHeight + 60;
let propertyStartX:number = unitInfoTitleX - 100;
let propertyStartY:number = unitInfoTitleY + 30;
let valueStartX:number = propertyStartX + 200;
let valueStartY:number = unitInfoTitleY + 30;
const propertyList = [
  'name', 'cost', 'type', 'health', 'speed', 'armour', 'range',
  'mobility', 'meleeDamage', 'missileDamage', 'charge', 'visibility'
]

export const unitInfo = () => {
  displayTitle();
  displayUnitInfo(hoveredUnit);
  console.log('hoveredUnit', hoveredUnit);
}

const displayTitle = () => {
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Unit Info:', unitInfoTitleX, unitInfoTitleY);
}

const displayUnitInfo = (unit:any) => {
  setDefault();
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  if(hoveredUnit) {
    for(let property of propertyList) {
      mainMenuCtx.fillText(property, propertyStartX, propertyStartY);
      mainMenuCtx.fillText(unit[property], valueStartX, valueStartY);
      changeY();
    }
  } else {
      mainMenuCtx.fillText('No unit selected', propertyStartX, propertyStartY);
  }

}

const changeY = () => {
  propertyStartY += 30;
  valueStartY += 30;
}

const setDefault = () => {
  propertyStartX = unitInfoTitleX - 100;
  propertyStartY = unitInfoTitleY + 30;
  valueStartX = propertyStartX + 200;
  valueStartY = unitInfoTitleY + 30;
}
