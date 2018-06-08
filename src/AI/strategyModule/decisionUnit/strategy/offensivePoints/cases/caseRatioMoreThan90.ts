import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateComputerTypesRatio,
    calculateTotalRatio
} from '../../../../../processModule/ratio';
import {getRandomValueInRange} from '../../../../../../utils/random';

/*
    this function return ratio in range from 90 to 100
*/

export const caseRatioMoreThan90 = (): number => {

    let offensivePoints: number = 90;

    // get ratio for each unit type
    const {
        computerInfantryRatio,
        computerSpearmenRatio,
        computerLightInfantryRatio,
        computerHeavyInfantryRatio,
        computerSkirmisherRatio,
        computerCavalryRatio
    } = calculateComputerTypesRatio();

    if(computerSkirmisherRatio >= 0.6) {
        offensivePoints += getRandomValueInRange(0, 2);
    } else {
        if(computerInfantryRatio >= 0.6) {
            if(computerHeavyInfantryRatio >= 0.4) {
                offensivePoints += getRandomValueInRange(0, 4);
            }
    
            else if(computerHeavyInfantryRatio >= 0.3) {
                offensivePoints += getRandomValueInRange(0, 8);
            }
    
            else {
                offensivePoints += getRandomValueInRange(0, 5);
            }
        } else {
            offensivePoints += getRandomValueInRange(0, 10);
        }
    }

    return offensivePoints;
}