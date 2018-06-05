import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateTypesRatio,
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
        infantryRatio,
        spearmenRatio,
        lightInfantryRatio,
        heavyInfantryRatio,
        skirmisherRatio,
        cavalryRatio
    } = calculateTypesRatio();

    if(skirmisherRatio >= 60) {
        offensivePoints += getRandomValueInRange(0, 2);
    }

    if(infantryRatio >= 60) {
        if(heavyInfantryRatio >= 40) {
            offensivePoints += getRandomValueInRange(0, 4);
        }

        else if(heavyInfantryRatio >= 30) {
            offensivePoints += getRandomValueInRange(0, 8);
        }

        else {
            offensivePoints += getRandomValueInRange(0, 5);
        }
    } else {
        offensivePoints += getRandomValueInRange(0, 10);
    }
    

    return offensivePoints;
}