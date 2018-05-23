export const calculatePercentRatio = (computerNumber:number, playerNumber:number):number => {
    
    let computerRatio:number = 0;
    let stringRatio: string;
    let processedRatio: number;
    const totalNumber:number = computerNumber + playerNumber;
    
    computerRatio = (Math.round((computerNumber * 100) / totalNumber)) * 0.01;
    stringRatio = computerRatio.toFixed(2);
    processedRatio = Number(stringRatio);

    return processedRatio;
    
}