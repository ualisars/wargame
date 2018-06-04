import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateTypesRatio,
    calculateTotalRatio
} from '../../../../../processModule/ratio';

/*
    this function return ratio in range from 90 to 100
*/

export const caseRatioMoreThan90 = (): number => {

    let offensivePoints: number = 100;

    // get ratio for each unit type
    const {
        infantryRatio,
        spearmenRatio,
        lightInfantryRatio,
        heavyInfantryRatio,
        skirmisherRatio,
        cavalryRatio
    } = calculateTypesRatio();

    let deduction: number = 0;

    if(skirmisherRatio >= 60) {
        deduction = 8;
    }

    if(infantryRatio >= 60) {
        if(heavyInfantryRatio >= 40) {
            deduction = 5;
        }

        else if(heavyInfantryRatio >= 30) {
            deduction = 2;
        }

        else {
            deduction = 1;
        }
    }
    

    return offensivePoints;
}