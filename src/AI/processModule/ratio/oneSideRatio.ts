export const calculateOneSideRatio = (calculated:number, total:number):number => {

    let computerRatio:number = 0;
    let stringRatio: string;
    let processedRatio: number;
    
    computerRatio = (Math.round((calculated * 100) / total)) * 0.01;
    stringRatio = computerRatio.toFixed(2);
    processedRatio = Number(stringRatio);

    return processedRatio;
    
}