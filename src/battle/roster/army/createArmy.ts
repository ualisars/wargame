import {
  createComputerArmy,
  createPlayerArmy
} from '../index';

export const createArmy = () => {
  return new Promise(resolve => {
    createPlayerArmy().then(() => createComputerArmy());
    resolve();
  });
}
