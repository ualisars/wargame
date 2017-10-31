import AIPersonality from './AIPersonality';
import HidedEmenies from '../store/HidedEnemies';
export let personality = new AIPersonality();
export let hidedEmeniesStore = new HidedEmenies();
personality.setBehaviour();
