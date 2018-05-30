import {strategy} from '../../../../store/AI/strategy/computerStrategy';
import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateTypesRatio
} from '../../../processModule/ratio';

export const formStrategy = () => {

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