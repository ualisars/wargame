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

    let offensivePoints: number = 0;

    // get ratio for each unit type
    const {
        infantryRatio,
        spearmenRatio,
        lightInfantryRatio,
        heavyInfantryRatio,
        skirmisherRatio,
        cavalryRatio
    } = calculateTypesRatio();

    

    return offensivePoints;
}