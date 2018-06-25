export let computerHasTooManyScouts: boolean = false;
export let playerHasTooManyScouts: boolean = false;

export let computerHasManyScouts: boolean = false;
export let playerHasManyScouts: boolean = false;

export let computerHasFewScouts: boolean = false;
export let playerHasFewScouts: boolean = false;

export let computerHasNoScouts: boolean = false;
export let playerHasNoScouts: boolean = false;

export let computerHasMoreScouts: boolean = false;
export let playerHasMoreScouts: boolean = false;
export let equalNumberOfScouts: boolean = false;

export let noScouts: boolean = false;

export const setComputerHasTooManyScouts = () => {
    computerHasTooManyScouts = true;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = false;
    noScouts = false;
}

export const setPlayerHasTooManyScouts = () => {
    playerHasTooManyScouts = true;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = false;
    noScouts = false;
}

export const setComputerHasManyScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = true;
    computerHasFewScouts = false;
    computerHasNoScouts = false;
    noScouts = false;
}

export const setPlayerHasManyScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = true;
    playerHasFewScouts = false;
    playerHasNoScouts = false;
    noScouts = false;
}

export const setComputerHasFewScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

export const setPlayerHasFewScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = true;
    playerHasNoScouts = false;
    noScouts = false;
}

export const setComputerHasNoScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = true;
}

export const setPlayerHasNoScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = true;
}

export const setComputerHasMoreScouts = () => {
    computerHasMoreScouts = true;
    playerHasMoreScouts = false;
    equalNumberOfScouts = false;
    noScouts = false;
}

export const setPlayerHasMoreScouts = () => {
    computerHasMoreScouts = false;
    playerHasMoreScouts = true;
    equalNumberOfScouts = false;
    noScouts = false;
}

export const setEqualNumberOfScouts = () => {
    computerHasMoreScouts = false;
    playerHasMoreScouts = false;
    equalNumberOfScouts = true;
    noScouts = false;
}

export const setNoScouts = () => {
    resetScoutsTranslatorStore();
    noScouts = true;
}

export const resetScoutsTranslatorStore = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = false;

    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = false;

    computerHasMoreScouts = false;
    playerHasMoreScouts = false;
    equalNumberOfScouts = false;
    noScouts = false;
}