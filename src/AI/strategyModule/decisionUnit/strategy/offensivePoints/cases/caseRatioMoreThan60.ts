import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateComputerTypesRatio,
    calculateTotalRatio,
    calculateTypesRatio
} from '../../../../../processModule/ratio';
import {getRandomValueInRange} from '../../../../../../utils/random';

export const caseRatioMoreThan60 = (): number => {

    let offensivePoints: number = 0;

     // get ratio for each unit type
     const {
        computerInfantryRatio,
        computerSpearmenRatio,
        computerLightInfantryRatio,
        computerHeavyInfantryRatio,
        computerSkirmisherRatio,
        computerCavalryRatio
    } = calculateComputerTypesRatio();

    const {
        infantryRatio,
        spearmenRatio,
        lightInfantryRatio,
        heavyInfantryRatio,
        skirmisherRatio,
        cavalryRatio
    } = calculateTypesRatio();

    const speedRatio: number = calculateSpeedRatio();

    return offensivePoints;
}