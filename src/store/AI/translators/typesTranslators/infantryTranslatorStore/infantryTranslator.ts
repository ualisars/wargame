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

let computerHasLotsOfInfantry: boolean = false;
let playerHasLotsOfInfantry: boolean = false;

let computerHasInfantry: boolean = false;
let playerHasInfantry: boolean = false;

let noInfantry: boolean;


const setComputerHasTooManyInfantry = () => {
    computerHasTooManyInfantry = true;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasLotsOfInfantry = true;
    computerHasInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasTooManyInfantry = () => {
    playerHasTooManyInfantry = true;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasLotsOfInfantry = true;
    playerHasInfantry = true;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setComputerHasManyInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = true;
    computerHasFewInfantry = false;
    computerHasLotsOfInfantry = true;
    computerHasInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasManyInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = true;
    playerHasFewInfantry = false;
    playerHasNoInfantry = false;
    playerHasLotsOfInfantry = true;
    playerHasInfantry = true;
    noInfantry = false;
}

const setComputerHasFewInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = true;
    computerHasLotsOfInfantry = false;
    computerHasInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasFewInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = true;
    playerHasLotsOfInfantry = false;
    playerHasInfantry = true;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setComputerHasNoInfantry = () => {
    computerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    computerHasFewInfantry = false;
    computerHasNoInfantry = true;
    computerHasLotsOfInfantry = false;
    computerHasInfantry = false;
}

const setPlayerHasNoInfantry = () => {
    playerHasTooManyInfantry = false;
    playerHasManyInfantry = false;
    playerHasFewInfantry = false;
    playerHasNoInfantry = true;
    playerHasLotsOfInfantry = false;
    playerHasInfantry = false;
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
}

const setComputerHasLotsOfInfantry = () => {
    computerHasLotsOfInfantry = true;
    computerHasInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasLotsOfInfantry = () => {
    playerHasLotsOfInfantry = true;
    playerHasInfantry = true;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setComputerHasInfantry = () => {
    computerHasLotsOfInfantry = false;
    computerHasInfantry = true;
    computerHasNoInfantry = false;
    noInfantry = false;
}

const setPlayerHasInfantry = () => {
    playerHasLotsOfInfantry = false;
    playerHasInfantry = true;
    playerHasNoInfantry = false;
    noInfantry = false;
}

const setNoInfantry = () => {
    resetInfantryTranslatorStore();
    computerHasNoInfantry = true;
    playerHasNoInfantry = true;
    equalNumberOfInfantry = true;
    noInfantry = true;
}

const resetInfantryTranslatorStore = () => {
    computerHasTooManyInfantry = false;
    playerHasTooManyInfantry = false;
    computerHasManyInfantry = false;
    playerHasManyInfantry = false;
    computerHasFewInfantry = false;
    playerHasFewInfantry = false;
    computerHasNoInfantry = false;
    playerHasNoInfantry = false;
    computerHasMoreInfantry = false;
    playerHasMoreInfantry = false;
    equalNumberOfInfantry = false;
    computerHasLotsOfInfantry = false;
    playerHasLotsOfInfantry = false;
    computerHasInfantry = false;
    playerHasInfantry = false;
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
    computerHasLotsOfInfantry,
    playerHasLotsOfInfantry,
    computerHasInfantry,
    playerHasInfantry,
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
    setComputerHasLotsOfInfantry,
    setPlayerHasLotsOfInfantry,
    setComputerHasInfantry,
    setPlayerHasInfantry,
    setNoInfantry,
    resetInfantryTranslatorStore
}


