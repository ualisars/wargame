import {strategy} from '../../../../store/AI/strategy/computerStrategy';
import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateTypesRatio,
    calculateTotalRatio
} from '../../../processModule/ratio';

export const formStrategy = () => {

    const totalRatio: number = calculateTotalRatio();

    // get ratio for each unit type
    const {
        infantryRatio,
        spearmenRatio,
        lightInfantryRatio,
        heavyInfantryRatio,
        skirmisherRatio,
        cavalryRatio
    } = calculateTypesRatio();

}