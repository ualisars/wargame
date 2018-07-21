let computerHasTooManySkirmishers: boolean = false;
let playerHasTooManySkirmishers: boolean = false;

let computerHasManySkirmishers: boolean = false;
let playerHasManySkirmishers: boolean = false;

let computerHasFewSkirmishers: boolean = false;
let playerHasFewSkirmishers: boolean = false;

let computerHasNoSkirmishers: boolean = false;
let playerHasNoSkirmishers: boolean = false;

let computerHasMoreSkirmishers: boolean = false;
let playerHasMoreSkirmishers: boolean = false;

let equalNumberOfSkirmishers: boolean = false;

let computerHasLotsOfSkirmishers: boolean = false;
let playerHasLotsOfSkirmishers: boolean = false;

let computerHasSkirmishers: boolean = false;
let playerHasSkirmishers: boolean = false;

let noSkirmishers: boolean;


const setComputerHasTooManySkirmishers = () => {
    computerHasTooManySkirmishers = true;
    computerHasManySkirmishers = false;
    computerHasFewSkirmishers = false;
    computerHasLotsOfSkirmishers = true;
    computerHasSkirmishers = true;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasTooManySkirmishers = () => {
    playerHasTooManySkirmishers = true;
    playerHasManySkirmishers = false;
    playerHasFewSkirmishers = false;
    playerHasLotsOfSkirmishers = true;
    playerHasSkirmishers = true;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setComputerHasManySkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = true;
    computerHasFewSkirmishers = false;
    computerHasLotsOfSkirmishers = true;
    computerHasSkirmishers = true;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasManySkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = true;
    playerHasFewSkirmishers = false;
    playerHasNoSkirmishers = false;
    playerHasLotsOfSkirmishers = true;
    playerHasSkirmishers = true;
    noSkirmishers = false;
}

const setComputerHasFewSkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    computerHasFewSkirmishers = true;
    computerHasLotsOfSkirmishers = false;
    computerHasSkirmishers = true;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasFewSkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = false;
    playerHasFewSkirmishers = true;
    playerHasLotsOfSkirmishers = false;
    playerHasSkirmishers = true;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setComputerHasNoSkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    computerHasFewSkirmishers = false;
    computerHasNoSkirmishers = true;
    computerHasLotsOfSkirmishers = false;
    computerHasSkirmishers = false;
}

const setPlayerHasNoSkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = false;
    playerHasFewSkirmishers = false;
    playerHasNoSkirmishers = true;
    playerHasLotsOfSkirmishers = false;
    playerHasSkirmishers = false;
}

const setComputerHasMoreSkirmishers = () => {
    computerHasMoreSkirmishers = true;
    playerHasMoreSkirmishers = false;
    equalNumberOfSkirmishers = false;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasMoreSkirmishers = () => {
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = true;
    equalNumberOfSkirmishers = false;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setEqualNumberOfSkirmishers = () => {
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = false;
    equalNumberOfSkirmishers = true;
}

const setComputerHasLotsOfSkirmishers = () => {
    computerHasFewSkirmishers = false;
    computerHasLotsOfSkirmishers = true;
    computerHasSkirmishers = true;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasLotsOfSkirmishers = () => {
    playerHasFewSkirmishers = false;
    playerHasLotsOfSkirmishers = true;
    playerHasSkirmishers = true;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setComputerHasSkirmishers = () => {
    computerHasLotsOfSkirmishers = false;
    computerHasSkirmishers = true;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasSkirmishers = () => {
    playerHasLotsOfSkirmishers = false;
    playerHasSkirmishers = true;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setNoSkirmishers = () => {
    resetSkirmisherTranslatorStore();
    computerHasNoSkirmishers = true;
    playerHasNoSkirmishers = true;
    equalNumberOfSkirmishers = true;
    noSkirmishers = true;
}

const resetSkirmisherTranslatorStore = () => {
    computerHasTooManySkirmishers = false;
    playerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    playerHasManySkirmishers = false;
    computerHasFewSkirmishers = false;
    playerHasFewSkirmishers = false;
    computerHasNoSkirmishers = false;
    playerHasNoSkirmishers = false;
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = false;
    equalNumberOfSkirmishers = false;
    computerHasLotsOfSkirmishers = false;
    playerHasLotsOfSkirmishers = false;
    computerHasSkirmishers = false;
    playerHasSkirmishers = false;
    noSkirmishers = false;
}

export {
    computerHasTooManySkirmishers,
    playerHasTooManySkirmishers,
    computerHasManySkirmishers,
    playerHasManySkirmishers,
    computerHasFewSkirmishers,
    playerHasFewSkirmishers,
    computerHasNoSkirmishers,
    playerHasNoSkirmishers,
    computerHasMoreSkirmishers,
    playerHasMoreSkirmishers,
    equalNumberOfSkirmishers,
    computerHasLotsOfSkirmishers,
    playerHasLotsOfSkirmishers,
    computerHasSkirmishers,
    playerHasSkirmishers,
    noSkirmishers,

    setComputerHasTooManySkirmishers,
    setPlayerHasTooManySkirmishers,
    setComputerHasManySkirmishers,
    setPlayerHasManySkirmishers,
    setComputerHasFewSkirmishers,
    setPlayerHasFewSkirmishers,
    setComputerHasNoSkirmishers,
    setPlayerHasNoSkirmishers,
    setComputerHasMoreSkirmishers,
    setPlayerHasMoreSkirmishers,
    setEqualNumberOfSkirmishers,
    setComputerHasLotsOfSkirmishers,
    setPlayerHasLotsOfSkirmishers,
    setComputerHasSkirmishers,
    setPlayerHasSkirmishers,
    setNoSkirmishers,
    resetSkirmisherTranslatorStore
}
