import {getInitialPropeties} from './analyzeModule/unitAnalyze';
import {
  calculateTotalPower,
  calculateInitialPower
} from './analyzeModule/powerAnalyze';

export const firstStage = () => {
  return new Promise(resolve => {
    calculateTotalPower();
    calculateInitialPower();
    resolve();
  });
}

export const setUpAI = () => {
  firstStage();
}
