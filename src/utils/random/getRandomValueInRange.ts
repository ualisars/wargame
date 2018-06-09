export const getRandomValueInRange = (min:number, max:number): number => {

    if(min >= max) {
        throw new Error('invalid min or max');
    }

    if((min > 0 && min < 1) && (max > 0 && max < 1)) {

        let newMin: number = Math.round(min * 100);
        let newMax: number = Math.round(max * 100);

        let random: number = Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;

        return random * 0.01;

    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

}