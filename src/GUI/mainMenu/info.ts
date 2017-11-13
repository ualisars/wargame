import {
  mainMenuCtx,
  unitRosterWidth,
  armyLayoutWidth,
  armyLayoutHeight,
  infoLayoutWidth,
  infoLayoutHeight,
  titleHeight,
  showBattleSettings,
  showUnitInfo,
  changeBattleSettingsToTrue,
  changeUnitInfoToTrue
} from './mainMenuSettings';
import {battleSettings} from './battleSettings';

export const width = 160;
export const height = 30;
const battleSettingsX = armyLayoutWidth + unitRosterWidth + 50;
const battleSettingsY = titleHeight;
const unitInfoX = armyLayoutWidth + unitRosterWidth + 50 + width + 20;
const unitInfoY = titleHeight;
export const displayInfo = () => {
  mainMenuCtx.clearRect(armyLayoutWidth + unitRosterWidth, titleHeight, infoLayoutWidth, infoLayoutHeight);
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(armyLayoutWidth + unitRosterWidth, titleHeight, infoLayoutWidth, infoLayoutHeight);
  showSwither();
}

export const showSwither = () => {
  battleSettingsSwither();
  unitInfoSwither();
  if(showBattleSettings) {
    battleSettings();
  }
}

export const onChooseInfo = (x:number, y:number) => {
  if(onChooseBattleSettings(x,y)) {
    changeBattleSettingsToTrue();
    displayInfo(); // redraw info
  }
  if(onChooseUnitInfo(x,y)) {
    changeUnitInfoToTrue();
    displayInfo(); // redraw info
  }
}

export const battleSettingsSwither = () => {
  if(showBattleSettings) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(battleSettingsX, battleSettingsY, width, height);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(battleSettingsX, battleSettingsY, width, height);
  // text
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Battle Settings', battleSettingsX + 5, battleSettingsY + 20);
}

export const unitInfoSwither = () => {
  if(showUnitInfo) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(unitInfoX, unitInfoY, width, height);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(unitInfoX, unitInfoY, width, height);
  // text
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Unit Info', unitInfoX + 35, unitInfoY + 20);
}

export const onChooseBattleSettings = (mouseX:number, mouseY:number) => {
  let x0 = battleSettingsX;
  let x1 = battleSettingsX + width;
  let y0 = battleSettingsY;
  let y1 = battleSettingsY + height;
  if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
    console.log('battleSettings has been chosen');
    return true;
  }
  return false;
}

export const onChooseUnitInfo = (mouseX:number, mouseY:number) => {
  let x0 = unitInfoX;
  let x1 = unitInfoX + width;
  let y0 = unitInfoY;
  let y1 = unitInfoY + height;
  if(mouseX >= x0 && mouseX < x1 && mouseY >= y0 && mouseY < y1) {
    console.log('unitInfo is chosen');
    return true;
  }
  return false;
}
