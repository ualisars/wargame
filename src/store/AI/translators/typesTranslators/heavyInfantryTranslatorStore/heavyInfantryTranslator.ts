let computerHasTooManyHeavyInfantry: boolean = false;
let playerHasTooManyHeavyInfantry: boolean = false;

let computerHasManyHeavyInfantry: boolean = false;
let playerHasManyHeavyInfantry: boolean = false;

let computerHasFewHeavyInfantry: boolean = false;
let playerHasFewHeavyInfantry: boolean = false;

let computerHasNoHeavyInfantry: boolean = false;
let playerHasNoHeavyInfantry: boolean = false;

let computerHasMoreHeavyInfantry: boolean = false;
let playerHasMoreHeavyInfantry: boolean = false;
let equalNumberOfHeavyInfantry: boolean = false;

let noHeavyInfantry: boolean = false;

const setComputerHasTooManyHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = true;
    computerHasManyHeavyInfantry = false;
    computerHasFewHeavyInfantry = false;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setPlayerHasTooManyHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = true;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setComputerHasManyHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = true;
    computerHasFewHeavyInfantry = false;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setPlayerHasManyHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = true;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setComputerHasFewHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = false;
    computerHasFewHeavyInfantry = true;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setPlayerHasFewHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = true;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setComputerHasNoHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = false;
    computerHasFewHeavyInfantry = false;
    computerHasNoHeavyInfantry = true;
}

const setPlayerHasNoHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = true;
}

const setComputerHasMoreHeavyInfantry = () => {
    computerHasMoreHeavyInfantry = true;
    playerHasMoreHeavyInfantry = false;
    equalNumberOfHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setPlayerHasMoreHeavyInfantry = () => {
    computerHasMoreHeavyInfantry = false;
    playerHasMoreHeavyInfantry = true;
    equalNumberOfHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setEqualNumberOfHeavyInfantry = () => {
    computerHasMoreHeavyInfantry = false;
    playerHasMoreHeavyInfantry = false;
    equalNumberOfHeavyInfantry = true;
}

const setNoHeavyInfantry = () => {
    resetHeavyInfantryTranslatorStore();
    computerHasNoHeavyInfantry = true;
    playerHasNoHeavyInfantry = true;
    equalNumberOfHeavyInfantry = true;
    noHeavyInfantry = true;
}

const resetHeavyInfantryTranslatorStore = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = false;
    computerHasFewHeavyInfantry = false;
    computerHasNoHeavyInfantry = false;

    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = false;

    computerHasMoreHeavyInfantry = false;
    playerHasMoreHeavyInfantry = false;
    equalNumberOfHeavyInfantry = false;
    noHeavyInfantry = false;
}

export {
    computerHasTooManyHeavyInfantry,
    playerHasTooManyHeavyInfantry,
    computerHasManyHeavyInfantry,
    playerHasManyHeavyInfantry,
    computerHasFewHeavyInfantry,
    playerHasFewHeavyInfantry,
    computerHasNoHeavyInfantry,
    playerHasNoHeavyInfantry,
    computerHasMoreHeavyInfantry,
    playerHasMoreHeavyInfantry,
    equalNumberOfHeavyInfantry,
    noHeavyInfantry,

    setComputerHasTooManyHeavyInfantry,
    setPlayerHasTooManyHeavyInfantry,
    setComputerHasManyHeavyInfantry,
    setPlayerHasManyHeavyInfantry,
    setComputerHasFewHeavyInfantry,
    setPlayerHasFewHeavyInfantry,
    setComputerHasNoHeavyInfantry,
    setPlayerHasNoHeavyInfantry,
    setComputerHasMoreHeavyInfantry,
    setPlayerHasMoreHeavyInfantry,
    setEqualNumberOfHeavyInfantry,
    setNoHeavyInfantry,
    resetHeavyInfantryTranslatorStore
}