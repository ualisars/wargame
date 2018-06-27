let computerHasTooManyInfantry: boolean = false;
let playerHasTooManyInfantry: boolean = false;

let computerHasManyInfantry: boolean = false;
let playerHasManyInfantry: boolean = false;

let computerHasFewInfantry: boolean = false;
let playerHasFewInfantry: boolean = false;

let computerHasNoInfantry: boolean = false;
let playerHasNoInfantry: boolean = false;

let computerHasMoreInfantry: boolean = false;
let playerHasMoreInfantry: boolean = false;
let equalNumberOfInfantry: boolean = false;

let noInfantry: boolean = false;

const setComputerHasTooManyInfantry = () => {
    computerHasTooManyInfantry = true;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasTooManyInfantry = () => {
    playerHasTooManyInfantry = true;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setComputerHasManyInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = true;
    computerHasFewInfantry = false;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasManyInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = true;
    playerHasFewInfantry = false;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setComputerHasFewInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasFewInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = true;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setComputerHasNoInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasNoInfantry = true;
}

const setPlayerHasNoInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasNoInfantry = true;
}

const setComputerHasMoreInfantry = () => {
    computerHasMoreInfantry = true;
    playerHasMoreInfantry = false;
    equalNumberOfInfantry = false;
    noInfantry = false;
}

const setPlayerHasMoreInfantry = () => {
    computerHasMoreInfantry = false;
    playerHasMoreInfantry = true;
    equalNumberOfInfantry = false;
    noInfantry = false;
}

const setEqualNumberOfInfantry = () => {
    computerHasMoreInfantry = false;
    playerHasMoreInfantry = false;
    equalNumberOfInfantry = true;
    noInfantry = false;
}

const setNoInfantry = () => {
    resetInfantryTranslatorStore();
    noInfantry = true;
}

const resetInfantryTranslatorStore = () => {
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

export {
    computerHasTooManyInfantry,
    playerHasTooManyInfantry,
    computerHasManyInfantry,
    playerHasManyInfantry,
    computerHasFewInfantry,
    playerHasFewInfantry,
    computerHasNoInfantry,
    playerHasNoInfantry,
    computerHasMoreInfantry,
    playerHasMoreInfantry,
    equalNumberOfInfantry,
    noInfantry,

    setComputerHasTooManyInfantry,
    setPlayerHasTooManyInfantry,
    setComputerHasManyInfantry,
    setPlayerHasManyInfantry,
    setComputerHasFewInfantry,
    setPlayerHasFewInfantry,
    setComputerHasNoInfantry,
    setPlayerHasNoInfantry,
    setComputerHasMoreInfantry,
    setPlayerHasMoreInfantry,
    setEqualNumberOfInfantry,
    setNoInfantry,
    resetInfantryTranslatorStore
}


