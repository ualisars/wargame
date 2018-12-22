export let currentCommandNumber: number;

export const setCurrentCommandNumber = (): number => { 
    let randomNumber = Math.random();
    currentCommandNumber = randomNumber;
    return randomNumber;
}