let computerHasTooManyHeavyInfantry: boolean = false;
let playerHasTooManyHeavyInfantry: boolean = false;

let computerHasManyHeavyInfantry: boolean = false;
let playerHasManyHeavyInfantry: boolean = false;

let computerHasFewHeavyInfantry: boolean = false;
let playerHasFewHeavyInfantry: boolean = false;

let computerHasNoHeavyInfantry: boolean = false;
let playerHasNoHeavyInfantry: boolean = false;

let computerHasLotsOfHeavyInfantry: boolean = false;
let playerHasLotsOfHeavyInfantry: boolean = false;

let computerHasHeavyInfantry: boolean = false;
let playerHasHeavyInfantry: boolean = false;

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
    computerHasLotsOfHeavyInfantry = true;
    computerHasHeavyInfantry = true;
}

const setPlayerHasTooManyHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = true;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
    playerHasLotsOfHeavyInfantry = true;
    playerHasHeavyInfantry = true;
}

const setComputerHasManyHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = true;
    computerHasFewHeavyInfantry = false;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
    computerHasLotsOfHeavyInfantry = true;
    computerHasHeavyInfantry = true;
}

const setPlayerHasManyHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = true;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
    playerHasLotsOfHeavyInfantry = true;
    playerHasHeavyInfantry = true;
}

const setComputerHasFewHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = false;
    computerHasFewHeavyInfantry = true;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
    computerHasLotsOfHeavyInfantry = false;
    computerHasHeavyInfantry = true;
}

const setPlayerHasFewHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = true;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
    playerHasLotsOfHeavyInfantry = false;
    playerHasHeavyInfantry = true;
}

const setComputerHasNoHeavyInfantry = () => {
    computerHasTooManyHeavyInfantry = false;
    computerHasManyHeavyInfantry = false;
    computerHasFewHeavyInfantry = false;
    computerHasNoHeavyInfantry = true;
    computerHasLotsOfHeavyInfantry = false;
    computerHasHeavyInfantry = false;
}

const setPlayerHasNoHeavyInfantry = () => {
    playerHasTooManyHeavyInfantry = false;
    playerHasManyHeavyInfantry = false;
    playerHasFewHeavyInfantry = false;
    playerHasNoHeavyInfantry = true;
    playerHasLotsOfHeavyInfantry = false;
    playerHasHeavyInfantry = false;
}

const setComputerHasLotsOfHeavyInfantry = () => {
    computerHasLotsOfHeavyInfantry = true;
    computerHasHeavyInfantry = true;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setPlayerHasLotsOfHeavyInfantry = () => {
    playerHasLotsOfHeavyInfantry = true;
    playerHasHeavyInfantry = true;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setComputerHasHeavyInfantry = () => {
    computerHasLotsOfHeavyInfantry = false;
    computerHasHeavyInfantry = true;
    computerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
}

const setPlayerHasHeavyInfantry = () => {
    playerHasLotsOfHeavyInfantry = false;
    playerHasHeavyInfantry = true;
    playerHasNoHeavyInfantry = false;
    noHeavyInfantry = false;
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

    computerHasLotsOfHeavyInfantry = false;
    computerHasHeavyInfantry = false;
    playerHasLotsOfHeavyInfantry = false;
    playerHasHeavyInfantry = false;
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
    computerHasLotsOfHeavyInfantry,
    playerHasLotsOfHeavyInfantry,
    computerHasHeavyInfantry,
    playerHasHeavyInfantry,

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
    setComputerHasLotsOfHeavyInfantry,
    setPlayerHasLotsOfHeavyInfantry,
    setComputerHasHeavyInfantry,
    setPlayerHasHeavyInfantry,
    resetHeavyInfantryTranslatorStore
}