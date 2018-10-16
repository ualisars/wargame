import {
  createComputerArmy,
  createPlayerArmy
} from '..';

export const createArmy = () => {
  return new Promise(resolve => {
    createPlayerArmy().then(() => createComputerArmy());
    resolve();
  });
}
