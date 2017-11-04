import AIPersonality from './strategyModule/AIPersonality';
import HidedEmenies from './store/HidedEnemies';
import {getInitialPropeties} from './analyzeModule/unitAnalyze';
import {playersUnits, computersUnits} from '../store/unitStore';
import {
  calculateTotalPower,
  calculateInitialPower
} from './analyzeModule/powerAnalyze';
export let personality:any;
export let hidedEmenies:any;

export const firstStage = () => {
  return new Promise(resolve => {
    personality = new AIPersonality();
    hidedEmenies = new HidedEmenies();
    personality.setBehaviour();
    calculateTotalPower();
    calculateInitialPower();
    resolve();
  });
}


export const setUpAI = () => {
  firstStage();
}
