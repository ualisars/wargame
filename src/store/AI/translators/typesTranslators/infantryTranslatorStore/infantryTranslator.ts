export let computerHasTooManyInfantry: boolean = false;
export let playerHasTooManyInfantry: boolean = false;

export let computerHasManyInfantry: boolean = false;
export let playerHasManyInfantry: boolean = false;

export let computerHasFewInfantry: boolean = false;
export let playerHasFewInfantry: boolean = false;

export let computerHasNoInfantry: boolean = false;
export let playerHasNoInfantry: boolean = false;

export let computerHasMoreInfantry: boolean = false;
export let playerHasMoreInfantry: boolean = false;
export let equalNumberOfInfantry: boolean = false;

export let noInfantry: boolean = false;

export const setComputerHasTooManyInfantry = () => {
    computerHasTooManyInfantry = true;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasNoInfantry = false;
    noInfantry = false;
}

export const setPlayerHasTooManyInfantry = () => {
    playerHasTooManyInfantry = true;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasNoInfantry = false;
    noInfantry = false;
}

export const setComputerHasManyInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = true;
    computerHasFewInfantry = false;
    computerHasNoInfantry = false;
    noInfantry = false;
}

export const setPlayerHasManyInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = true;
    playerHasFewInfantry = false;
    playerHasNoInfantry = false;
    noInfantry = false;
}

export const setComputerHasFewInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

export const setPlayerHasFewInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = true;
    playerHasNoInfantry = false;
    noInfantry = false;
}

export const setComputerHasNoInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasNoInfantry = true;
}

export const setPlayerHasNoInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasNoInfantry = true;
}

export const setComputerHasMoreInfantry = () => {
    computerHasMoreInfantry = true;
    playerHasMoreInfantry = false;
    equalNumberOfInfantry = false;
    noInfantry = false;
}

export const setPlayerHasMoreInfantry = () => {
    computerHasMoreInfantry = false;
    playerHasMoreInfantry = true;
    equalNumberOfInfantry = false;
    noInfantry = false;
}

export const setEqualNumberOfInfantry = () => {
    computerHasMoreInfantry = false;
    playerHasMoreInfantry = false;
    equalNumberOfInfantry = true;
    noInfantry = false;
}

export const setNoInfantry = () => {
    resetInfantryTranslatorStore();
    noInfantry = true;
}

export const resetInfantryTranslatorStore = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasNoInfantry = false;

    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasNoInfantry = false;

    computerHasMoreInfantry = false;
    playerHasMoreInfantry = false;
    equalNumberOfInfantry = false;
    noInfantry = false;
}


