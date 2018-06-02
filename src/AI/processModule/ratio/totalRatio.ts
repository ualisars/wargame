import {revealedUnits} from '../../../store/AI/enemies/revealedEnemies';
import {computerUnits} from '../../../store/unit/units';
import {calculatePercentRatio} from './percentRatio';

export const calculateTotalRatio = () => {

    let averageComputerWeight: number;
    let averagePlayerWeight: number;

    let totalComputerWeight: number = 0;
    let totalPlayerWeight: number = 0;

    let ratio: number = 0;

    for(let unit of computerUnits) {
        totalComputerWeight += unit.weight;
    }

    for(let unit of revealedUnits) {
        totalPlayerWeight += unit.weight;
    }

    averageComputerWeight = Math.round(totalComputerWeight / computerUnits.length);
    
    averagePlayerWeight = Math.round(totalPlayerWeight / revealedUnits.length);

    ratio = calculatePercentRatio(averageComputerWeight, averagePlayerWeight);

    return ratio;

}