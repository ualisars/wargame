export const getRandomValueInRange = (minValue:number, maxNumber:number): number => {

    return Math.floor(Math.random() * (maxNumber - minValue + 1)) + minValue;

}