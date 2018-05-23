export const calculatePercentRatio = (computerNumber:number, playerNumber:number):number => {
    
    let computerRatio:number = 0;
    const totalNumber:number = computerNumber + playerNumber;
    
    computerRatio = (Math.round((computerNumber * 100) / totalNumber)) * 0.01;

    return computerRatio;
    
}