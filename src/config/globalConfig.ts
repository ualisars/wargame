export let mainMenuMode:boolean = true;
export let battleMode:boolean = false;

export const setBattleMode = () => {
  mainMenuMode = false;
  battleMode = true;
}

export const setMainMenuMode = () => {
  mainMenuMode = false;
  battleMode = true;
}
