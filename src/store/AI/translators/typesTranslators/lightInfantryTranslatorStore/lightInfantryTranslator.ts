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

let noLightInfantry: boolean = false;


const setComputerHasTooManyLightInfantry = () => {
    computerHasTooManyLightInfantry = true;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasTooManyLightInfantry = () => {
    playerHasTooManyLightInfantry = true;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setComputerHasManyLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = true;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasManyLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = true;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setComputerHasFewLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = true;
    computerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setPlayerHasFewLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = true;
    playerHasNoLightInfantry = false;
    noLightInfantry = false;
}

const setComputerHasNoLightInfantry = () => {
    computerHasTooManyLightInfantry = false;
    computerHasManyLightInfantry = false;
    computerHasFewLightInfantry = false;
    computerHasNoLightInfantry = true;
}

const setPlayerHasNoLightInfantry = () => {
    playerHasTooManyLightInfantry = false;
    playerHasManyLightInfantry = false;
    playerHasFewLightInfantry = false;
    playerHasNoLightInfantry = true;
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
    noLightInfantry = false;
}

const setNoLightInfantry = () => {
    resetLightInfantryTranslatorStore();
    noLightInfantry = true;
}

const resetLightInfantryTranslatorStore = () => {
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
    setNoLightInfantry,
    resetLightInfantryTranslatorStore
}