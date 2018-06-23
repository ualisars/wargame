export let computerHasTooManyLightInfantry: boolean = false;
export let playerHasTooManyLightInfantry: boolean = false;

export let computerHasManyLightInfantry: boolean = false;
export let playerHasManyLightInfantry: boolean = false;

export let computerHasFewLightInfantry: boolean = false;
export let playerHasFewLightInfantry: boolean = false;

export let computerHasNoLightInfantry: boolean = false;
export let playerHasNoLightInfantry: boolean = false;

export let computerHasMoreLightInfantry: boolean = false;
export let playerHasMoreLightInfantry: boolean = false;
export let equalNumberOfLightInfantry: boolean = false;

export let noLightInfantry: boolean = false;

export const setComputerHasTooManyLightInfantry = () => {
    computerHasTooManyLightInfantry = true;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

export const setPlayerHasTooManyLightInfantry = () => {
    playerHasTooManyLightInfantry = true;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

export const setComputerHasManyLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = true;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

export const setPlayerHasManyLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = true;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

export const setComputerHasFewLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

export const setPlayerHasFewLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = true;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

export const setComputerHasNoLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = true;
}

export const setPlayerHasNoLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = true;
}

export const setComputerHasMoreLightInfantry = () => {
    computerHasMoreLightInfantry = true;
    playerHasMoreLightInfantry = false;
    equalNumberOfLightInfantry = false;
    noLightInfantry = false;
}

export const setPlayerHasMoreLightInfantry = () => {
    computerHasMoreLightInfantry = false;
    playerHasMoreLightInfantry = true;
    equalNumberOfLightInfantry = false;
    noLightInfantry = false;
}

export const setEqualNumberOfLightInfantry = () => {
    computerHasMoreLightInfantry = false;
    playerHasMoreLightInfantry = false;
    equalNumberOfLightInfantry = true;
    noLightInfantry = false;
}

export const setNoLightInfantry = () => {
    resetLightInfantryTranslatorStore();
    noLightInfantry = true;
}

export const resetLightInfantryTranslatorStore = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = false;

    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = false;

    computerHasMoreLightInfantry = false;
    playerHasMoreLightInfantry = false;
    equalNumberOfLightInfantry = false;
    noLightInfantry = false;
}