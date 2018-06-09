import {computerUnits} from '../../../store/unit/units';
import {calculateUnitTypes} from '../../analyzeModule/unitAnalyze';
import {calculateRatioBasedOnTotal} from './ratioBasedOnTotal';

export const calculateComputerTypesRatio = ():any => {

    let computerTypes:any = calculateUnitTypes();
    let totalNumber: number = computerUnits.length;

    let infantryNumber:number = computerTypes.infantry;
    let spearmenNumber:number = computerTypes.spearmen;
    let lightInfantryNumber:number = computerTypes.lightInfantry;
    let heavyInfantryNumber:number = computerTypes.heavyInfantry;
    let scoutsNumber:number = computerTypes.scouts;
    let skirmishersNumber:number = computerTypes.skirmishers;
    let cavalryNumber:number = computerTypes.cavalry;

    let computerInfantryRatio:number = calculateRatioBasedOnTotal(infantryNumber, totalNumber);
    let computerSpearmenRatio:number = calculateRatioBasedOnTotal(spearmenNumber, totalNumber);
    let computerLightInfantryRatio:number = calculateRatioBasedOnTotal(lightInfantryNumber, totalNumber);
    let computerScoutsRatio:number = calculateRatioBasedOnTotal(scoutsNumber, totalNumber);
    let computerHeavyInfantryRatio:number = calculateRatioBasedOnTotal(heavyInfantryNumber, totalNumber);
    let computerSkirmisherRatio:number = calculateRatioBasedOnTotal(skirmishersNumber, totalNumber);
    let computerCavalryRatio:number = calculateRatioBasedOnTotal(cavalryNumber, totalNumber)
    
    return {
        computerInfantryRatio,
        computerSpearmenRatio,
        computerLightInfantryRatio,
        computerHeavyInfantryRatio,
        computerScoutsRatio,
        computerSkirmisherRatio,
        computerCavalryRatio
    }
    
}