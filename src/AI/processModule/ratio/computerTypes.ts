import {computerUnits} from '../../../store/unit/units';

export const calculateComputerTypesRatio = (calculated:number, total:number):number => {

    let computerRatio:number = 0;
    let stringRatio: string;
    let processedRatio: number;

    if(!total) {
        throw new Error('total cannot be null or zero');
    }
    
    computerRatio = (Math.round((calculated * 100) / total)) * 0.01;
    stringRatio = computerRatio.toFixed(2);
    processedRatio = Number(stringRatio);

    return processedRatio;
    
}