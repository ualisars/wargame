export let battleMode:boolean = false;
export let battleFinish:boolean = false;
export let mainMenuMode:boolean = true;

export const setBattleMode = () => {
  return new Promise(resolve => {
    mainMenuMode = false;
    battleMode = true;
    resolve();
  });
}

export const setMainMenuMode = () => {
  return new Promise(resolve => {
    mainMenuMode = false;
    battleMode = true;
    resolve();
  });
}

export const finishBattle = () => {
  battleFinish = true;
}
