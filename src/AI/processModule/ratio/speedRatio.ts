import {revealedUnits} from '../../../store/AI/enemies/revealedEnemies';
import {computerUnits} from '../../../store/unit/units';
import {calculatePercentRatio} from './percentRatio';

export const calculateSpeedRatio = () => {
    
    let totalComputerSpeed: number = 0;
    let totalPlayerSpeed: number = 0;
    let averageComputerSpeed: number;
    let averagePlayerSpeed: number;
    let ratio: number = 0;

    // calculate total computer speed
    for(let unit of computerUnits) {
        totalComputerSpeed += unit.speed; 
    }

    // calculate total player speed
    for(let unit of revealedUnits) {
        totalPlayerSpeed += unit.speed; 
    }

    // measure average speed
    averageComputerSpeed = Math.round(totalComputerSpeed / computerUnits.length);
    averagePlayerSpeed = Math.round(totalPlayerSpeed / revealedUnits.length);

    // find ratio
    ratio = calculatePercentRatio(averageComputerSpeed, averagePlayerSpeed);

    return ratio;
    
}