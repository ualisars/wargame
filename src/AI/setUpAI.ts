import AIPersonality from './strategyModule/AIPersonality';
import {getInitialPropeties} from './analyzeModule/unitAnalyze';
import {
  calculateTotalPower,
  calculateInitialPower
} from './analyzeModule/powerAnalyze';
export let personality:any;

export const firstStage = () => {
  return new Promise(resolve => {
    personality = new AIPersonality();
    personality.setBehaviour();
    calculateTotalPower();
    calculateInitialPower();
    resolve();
  });
}

export const setUpAI = () => {
  firstStage();
}
