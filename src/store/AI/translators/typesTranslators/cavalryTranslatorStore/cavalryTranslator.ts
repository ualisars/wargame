export let computerHasTooManyCavalry: boolean = false;
export let playerHasTooManyCavalry: boolean = false;

export let computerHasManyCavalry: boolean = false;
export let playerHasManyCavalry: boolean = false;

export let computerHasFewCavalry: boolean = false;
export let playerHasFewCavalry: boolean = false;

export let computerDontHaveCavalry: boolean = false;
export let playerDontHaveCavalry: boolean = false;

export let computerHasMoreCavalry: boolean = false;
export let playerHasMoreCavalry: boolean = false;
export let equalNumberOfCavalry: boolean = false;

export let noCavalry: boolean;


export const setComputerHasTooManyCavalry = () => {
    computerHasTooManyCavalry = true;
    computerHasManyCavalry = false;
    computerHasFewCavalry = false;
    computerDontHaveCavalry = false;
    noCavalry = false;
}

export const setPlayerHasTooManyCavalry = () => {
    playerHasTooManyCavalry = true;
    playerHasManyCavalry = false;
    playerHasFewCavalry = false;
    playerDontHaveCavalry = false;
    noCavalry = false;
}

export const setComputerHasManyCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = true;
    computerHasFewCavalry = false;
    computerDontHaveCavalry = false;
    noCavalry = false;
}

export const setPlayerHasManyCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = true;
    playerHasFewCavalry = false;
    playerDontHaveCavalry = false;
    noCavalry = false;
}

export const setComputerHasFewCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    computerHasFewCavalry = true;
    computerDontHaveCavalry = false;
    noCavalry = false;
}

export const setPlayerHasFewCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = false;
    playerHasFewCavalry = true;
    playerDontHaveCavalry = false;
    noCavalry = false;
}

export const setComputerDontHaveCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    computerHasFewCavalry = false;
    computerDontHaveCavalry = true;
    noCavalry = false;
}

export const setPlayerDontHaveCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = false;
    playerHasFewCavalry = false;
    playerDontHaveCavalry = true;
    noCavalry = false;
}

export const setComputerHasMoreCavalry = () => {
    computerHasMoreCavalry = true;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = false;
    noCavalry = false;
}

export const setPlayerHasMoreCavalry = () => {
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = true;
    equalNumberOfCavalry = false;
    noCavalry = false;
}

export const setEqualNumberOfCavalry = () => {
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = true;
    noCavalry = false;
}

export const setNoCavalry = () => {

    resetCavalryTranslatorStore();
    
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = false;
    noCavalry = true;
}

export const resetCavalryTranslatorStore = () => {
    computerHasTooManyCavalry = false;
    playerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    playerHasManyCavalry = false;
    computerHasFewCavalry = false;
    playerHasFewCavalry = false;
    computerDontHaveCavalry = false;
    playerDontHaveCavalry = false;
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = false;
    noCavalry = false;
}