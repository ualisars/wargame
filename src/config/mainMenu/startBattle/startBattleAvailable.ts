export let startBattleAvailable:boolean = false;

export const disableStartBattleButton = () => {
  startBattleAvailable = false;
}

export const enableStartBattleButton = () => {
  startBattleAvailable = true;
}
