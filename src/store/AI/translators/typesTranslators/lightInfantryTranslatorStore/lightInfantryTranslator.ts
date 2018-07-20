let computerHasTooManyLightInfantry: boolean = false;
let playerHasTooManyLightInfantry: boolean = false;

let computerHasManyLightInfantry: boolean = false;
let playerHasManyLightInfantry: boolean = false;

let computerHasFewLightInfantry: boolean = false;
let playerHasFewLightInfantry: boolean = false;

let computerHasNoLightInfantry: boolean = false;
let playerHasNoLightInfantry: boolean = false;

let computerHasMoreLightInfantry: boolean = false;
let playerHasMoreLightInfantry: boolean = false;

let equalNumberOfLightInfantry: boolean = false;

let computerHasLotsOfLightInfantry: boolean = false;
let playerHasLotsOfLightInfantry: boolean = false;

let computerHasLightInfantry: boolean = false;
let playerHasLightInfantry: boolean = false;

let noLightInfantry: boolean;


const setComputerHasTooManyLightInfantry = () => {
    computerHasTooManyLightInfantry = true;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasLotsOfLightInfantry = true;
    computerHasLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasTooManyLightInfantry = () => {
    playerHasTooManyLightInfantry = true;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasLotsOfLightInfantry = true;
    playerHasLightInfantry = true;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setComputerHasManyLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = true;
    computerHasFewLightInfantry = false;
    computerHasLotsOfLightInfantry = true;
    computerHasLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasManyLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = true;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = false;
    playerHasLotsOfLightInfantry = true;
    playerHasLightInfantry = true;
    noLightInfantry = false;
}

const setComputerHasFewLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = true;
    computerHasLotsOfLightInfantry = false;
    computerHasLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasFewLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = true;
    playerHasLotsOfLightInfantry = false;
    playerHasLightInfantry = true;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setComputerHasNoLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = true;
    computerHasLotsOfLightInfantry = false;
    computerHasLightInfantry = false;
}

const setPlayerHasNoLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = true;
    playerHasLotsOfLightInfantry = false;
    playerHasLightInfantry = false;
}

const setComputerHasMoreLightInfantry = () => {
    computerHasMoreLightInfantry = true;
    playerHasMoreLightInfantry = false;
    equalNumberOfLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasMoreLightInfantry = () => {
    computerHasMoreLightInfantry = false;
    playerHasMoreLightInfantry = true;
    equalNumberOfLightInfantry = false;
    noLightInfantry = false;
}

const setEqualNumberOfLightInfantry = () => {
    computerHasMoreLightInfantry = false;
    playerHasMoreLightInfantry = false;
    equalNumberOfLightInfantry = true;
}

const setComputerHasLotsOfLightInfantry = () => {
    computerHasLotsOfLightInfantry = true;
    computerHasLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasLotsOfLightInfantry = () => {
    playerHasLotsOfLightInfantry = true;
    playerHasLightInfantry = true;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setComputerHasLightInfantry = () => {
    computerHasLotsOfLightInfantry = false;
    computerHasLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasLightInfantry = () => {
    playerHasLotsOfLightInfantry = false;
    playerHasLightInfantry = true;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setNoLightInfantry = () => {
    resetLightInfantryTranslatorStore();
    computerHasNoLightInfantry = true;
    playerHasNoLightInfantry = true;
    equalNumberOfLightInfantry = true;
    noLightInfantry = true;
}

const resetLightInfantryTranslatorStore = () => {
    computerHasTooManyLightInfantry = false;
    playerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    playerHasFewLightInfantry = false;
    computerHasNoLightInfantry = false;
    playerHasNoLightInfantry = false;
    computerHasMoreLightInfantry = false;
    playerHasMoreLightInfantry = false;
    equalNumberOfLightInfantry = false;
    computerHasLotsOfLightInfantry = false;
    playerHasLotsOfLightInfantry = false;
    computerHasLightInfantry = false;
    playerHasLightInfantry = false;
    noLightInfantry = false;
}

export {
    computerHasTooManyLightInfantry,
    playerHasTooManyLightInfantry,
    computerHasManyLightInfantry,
    playerHasManyLightInfantry,
    computerHasFewLightInfantry,
    playerHasFewLightInfantry,
    computerHasNoLightInfantry,
    playerHasNoLightInfantry,
    computerHasMoreLightInfantry,
    playerHasMoreLightInfantry,
    equalNumberOfLightInfantry,
    computerHasLotsOfLightInfantry,
    playerHasLotsOfLightInfantry,
    computerHasLightInfantry,
    playerHasLightInfantry,
    noLightInfantry,

    setComputerHasTooManyLightInfantry,
    setPlayerHasTooManyLightInfantry,
    setComputerHasManyLightInfantry,
    setPlayerHasManyLightInfantry,
    setComputerHasFewLightInfantry,
    setPlayerHasFewLightInfantry,
    setComputerHasNoLightInfantry,
    setPlayerHasNoLightInfantry,
    setComputerHasMoreLightInfantry,
    setPlayerHasMoreLightInfantry,
    setEqualNumberOfLightInfantry,
    setComputerHasLotsOfLightInfantry,
    setPlayerHasLotsOfLightInfantry,
    setComputerHasLightInfantry,
    setPlayerHasLightInfantry,
    setNoLightInfantry,
    resetLightInfantryTranslatorStore
}
