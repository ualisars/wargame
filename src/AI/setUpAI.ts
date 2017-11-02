import AIPersonality from './strategyModule/AIPersonality';
import HidedEmenies from './store/HidedEnemies';
export let personality = new AIPersonality();
export let hidedEmenies = new HidedEmenies();
personality.setBehaviour();
