export let battleMode:boolean = false;
export let battleFinish:boolean = false;
export let mainMenuMode:boolean = true;

export const setBattleMode = () => {
  mainMenuMode = false;
  battleMode = true;
}

export const setMainMenuMode = () => {
  mainMenuMode = false;
  battleMode = true;
}

export const finishBattle = () => {
  battleFinish = true;
}
