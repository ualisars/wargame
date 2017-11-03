import AIPersonality from './strategyModule/AIPersonality';
import HidedEmenies from './store/HidedEnemies';
import {getInitialPropeties} from './analyzeModule/unitAnalyze';
import {playersUnits, computersUnits} from '../store/unitStore';
import {
  calculateTotalPower,
  playerPower,
  computerPower
} from './analyzeModule/powerAnalyze';
export let personality:any;
export let hidedEmenies:any;

export let initialNumberOfUnits:number;
export let initialNumberOfEnemies:number;
export let initialUnitsHealth:number;
export let initialEnemiesHealth:number;


export const setUpInitialProperties = () => {
  initialNumberOfUnits = computersUnits.length;
  initialNumberOfEnemies = playersUnits.length;
  initialUnitsHealth = computerPower.totalHealth;
  initialEnemiesHealth = playerPower.totalHealth;
}

export const firstStage = () => {
  return new Promise(resolve => {
    personality = new AIPersonality();
    hidedEmenies = new HidedEmenies();
    personality.setBehaviour();
    calculateTotalPower();
    resolve();
  });
}


export const setUpAI = () => {
  firstStage().then(() => setUpInitialProperties());
}
