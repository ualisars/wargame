import {revealedUnits} from '../../../store/AI/enemies/revealedEnemies';
import {calculateUnitTypes} from '../../analyzeModule/unitAnalyze';
import {calculateRatioBasedOnTotal} from './ratioBasedOnTotal';

export const calculatePlayerTypesRatio = ():any => {

    let playerTypes:any = calculateUnitTypes('revealed');

    let totalNumber: number = revealedUnits.length;

    let infantryNumber:number = playerTypes.infantry;
    let spearmenNumber:number = playerTypes.spearmen;
    let lightInfantryNumber:number = playerTypes.lightInfantry;
    let heavyInfantryNumber:number = playerTypes.heavyInfantry;
    let scoutsNumber:number = playerTypes.scouts;
    let skirmishersNumber:number = playerTypes.skirmishers;
    let cavalryNumber:number = playerTypes.cavalry;

    let playerInfantryRatio:number = calculateRatioBasedOnTotal(infantryNumber, totalNumber);
    let playerSpearmenRatio:number = calculateRatioBasedOnTotal(spearmenNumber, totalNumber);
    let playerLightInfantryRatio:number = calculateRatioBasedOnTotal(lightInfantryNumber, totalNumber);
    let playerHeavyInfantryRatio:number = calculateRatioBasedOnTotal(heavyInfantryNumber, totalNumber);
    let playerScoutsRatio:number = calculateRatioBasedOnTotal(scoutsNumber, totalNumber);
    let playerSkirmisherRatio:number = calculateRatioBasedOnTotal(skirmishersNumber, totalNumber);
    let playerCavalryRatio:number = calculateRatioBasedOnTotal(cavalryNumber, totalNumber)

    return {
        playerInfantryRatio,
        playerSpearmenRatio,
        playerLightInfantryRatio,
        playerHeavyInfantryRatio,
        playerScoutsRatio,
        playerSkirmisherRatio,
        playerCavalryRatio
    }
    
}