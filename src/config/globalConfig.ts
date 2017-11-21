export let mainMenuMode:boolean = true;
export let battleMode:boolean = false;
export let battleFinish:boolean = false;

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
