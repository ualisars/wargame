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
        console.log('computerUnits weight', unit.weight);
        totalComputerWeight += unit.weight;
    }

    for(let unit of revealedUnits) {
        console.log('playerUnit weight', unit.weight);
        totalPlayerWeight += unit.weight;
    }

    console.log('computer units length', computerUnits.length);
    console.log('revealed units length', revealedUnits.length);

    console.log('computer units total', totalComputerWeight);
    console.log('revealed units total', totalPlayerWeight);

    averageComputerWeight = Math.round(totalComputerWeight / computerUnits.length);
    
    averagePlayerWeight = Math.round(totalPlayerWeight / revealedUnits.length);

    console.log('computer units average', averageComputerWeight);
    console.log('revealed units average', averagePlayerWeight);

    ratio = calculatePercentRatio(averageComputerWeight, averagePlayerWeight);

    return ratio;

}