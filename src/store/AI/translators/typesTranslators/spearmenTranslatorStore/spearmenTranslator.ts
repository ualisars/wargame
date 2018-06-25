export let computerHasTooManySpearmen: boolean = false;
export let playerHasTooManySpearmen: boolean = false;

export let computerHasManySpearmen: boolean = false;
export let playerHasManySpearmen: boolean = false;

export let computerHasFewSpearmen: boolean = false;
export let playerHasFewSpearmen: boolean = false;

export let computerHasNoSpearmen: boolean = false;
export let playerHasNoSpearmen: boolean = false;

export let computerHasMoreSpearmen: boolean = false;
export let playerHasMoreSpearmen: boolean = false;
export let equalNumberOfSpearmen: boolean = false;

export let noSpearmen: boolean = false;

export const setComputerHasTooManySpearmen = () => {
    computerHasTooManySpearmen = true;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

export const setPlayerHasTooManySpearmen = () => {
    playerHasTooManySpearmen = true;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

export const setComputerHasManySpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = true;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

export const setPlayerHasManySpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = true;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

export const setComputerHasFewSpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

export const setPlayerHasFewSpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = true;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

export const setComputerHasNoSpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = true;
}

export const setPlayerHasNoSpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = true;
}

export const setComputerHasMoreSpearmen = () => {
    computerHasMoreSpearmen = true;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = false;
    noSpearmen = false;
}

export const setPlayerHasMoreSpearmen = () => {
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = true;
    equalNumberOfSpearmen = false;
    noSpearmen = false;
}

export const setEqualNumberOfSpearmen = () => {
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = true;
    noSpearmen = false;
}

export const setNoSpearmen = () => {
    resetSpearmenTranslatorStore();
    noSpearmen = true;
}

export const resetSpearmenTranslatorStore = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = false;

    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;

    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = false;
    noSpearmen = false;
}