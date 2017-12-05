export let showBattleSettings:boolean = true;
export let showUnitInfo:boolean = false;

export const changeBattleSettingsToTrue = () => {
  showBattleSettings = true;
  showUnitInfo = false;
}

export const changeUnitInfoToTrue = () => {
  showBattleSettings = false;
  showUnitInfo = true;
}
