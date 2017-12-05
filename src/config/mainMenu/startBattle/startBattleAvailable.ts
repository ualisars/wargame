export let startBattleAvailable:boolean = false;

/*
 set startBattleAvailable to false
*/
export const disableStartBattleButton = () => {
  startBattleAvailable = false;
  console.log('startBattleAvailable:', startBattleAvailable);
}

/*
 set startBattleAvailable to true
*/
export const enableStartBattleButton = () => {
  startBattleAvailable = true;
  console.log('startBattleAvailable:', startBattleAvailable);
}
