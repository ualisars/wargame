import {
  mainMenuCtx,
  unitRosterWidth,
  armyLayoutWidth,
  armyLayoutHeight,
  infoLayoutWidth,
  infoLayoutHeight,
  titleHeight,
  showBattleSettings,
  showUnitInfo
} from './mainMenuSettings';

export const displayInfo = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(armyLayoutWidth + unitRosterWidth, 0, infoLayoutWidth, infoLayoutHeight);
  showSwither();
}

export const showSwither = () => {
  battleSettingsSwither();
  unitInfoSwither();
}

export const battleSettingsSwither = () => {
  let width = 160;
  let height = 30;
  let startX = armyLayoutWidth + unitRosterWidth + 50;
  let startY = titleHeight;
  if(showBattleSettings) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(startX, startY, width, height);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(startX, startY, width, height);
  // text
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Battle Settings', startX + 5, startY + 20);
}

export const unitInfoSwither = () => {
  let width = 160;
  let height = 30;
  let startX = armyLayoutWidth + unitRosterWidth + 50 + width + 20;
  let startY = titleHeight;
  if(showUnitInfo) {
    mainMenuCtx.fillStyle = '#fff';
  } else {
    mainMenuCtx.fillStyle = '#cdd1d6';
  }
  mainMenuCtx.fillRect(startX, startY, width, height);
  mainMenuCtx.fillStyle = '#000';
  mainMenuCtx.strokeRect(startX, startY, width, height);
  // text
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Unit Info', startX + 35, startY + 20);
}
