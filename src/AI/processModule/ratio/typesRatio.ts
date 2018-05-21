import {calculateUnitTypes} from '../../analyzeModule/unitAnalyze';

export const calculateTypesRatio = () => {

    let computerTypes:any = calculateUnitTypes();
    let playerTypes:any = calculateUnitTypes('player');


}

export const calculatePercentRatio = (computerUnits:number, playerUnits:number):number => {
    
    let computerRatio:number = 0;
    const totalUnits:number = computerUnits + playerUnits;
    
    computerRatio = (Math.round((computerUnits * 100) / totalUnits)) * 0.01;

    return computerRatio;

}