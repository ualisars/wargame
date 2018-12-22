export let currentCommandNumber: number;

export const generateCurrentCommandNumber = (): number => { 
    let randomNumber = Math.random();
    currentCommandNumber = randomNumber;
    return randomNumber;
}