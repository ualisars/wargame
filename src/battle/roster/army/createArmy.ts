import { createPlayerArmy } from "./playerArmy";
import { createComputerArmy } from "./computerArmy";

export const createArmy = () => {
  return new Promise(resolve => {
    createPlayerArmy().then(() => createComputerArmy());
    resolve();
  });
}
