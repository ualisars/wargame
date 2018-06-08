import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateComputerTypesRatio,
    calculateTotalRatio
} from '../../../../../processModule/ratio';
import {getRandomValueInRange} from '../../../../../../utils/random';

export const caseRatioMoreThan80 = (): number => {

    let offensivePoints: number = 80;

    // get ratio for each unit type
    const {
        computerInfantryRatio,
        computerSpearmenRatio,
        computerLightInfantryRatio,
        computerHeavyInfantryRatio,
        computerSkirmisherRatio,
        computerCavalryRatio
    } = calculateComputerTypesRatio();

    if(computerSkirmisherRatio >= 0.4) {
        offensivePoints += getRandomValueInRange(0, 2);
    } else {
        if(computerInfantryRatio >= 0.5) {

            if(computerHeavyInfantryRatio + computerSpearmenRatio >= 0.4) {
                offensivePoints += getRandomValueInRange(0, 4);
            }

            else if(computerSpearmenRatio) {
                offensivePoints += getRandomValueInRange(0, 4);
            }
            
            else if(computerHeavyInfantryRatio >= 0.4) {
                offensivePoints += getRandomValueInRange(0, 4);
            }
    
            else if(computerHeavyInfantryRatio >= 0.2) {
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