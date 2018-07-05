let computerHasTooManySkirmishers: boolean = false;
let playerHasTooManySkirmishers: boolean = false;

let computerHasManySkirmishers: boolean = false; // in comparison with all computer units
let playerHasManySkirmishers: boolean = false; // in comparison with all player units

let computerHasFewSkirmishers: boolean = false;
let playerHasFewSkirmishers: boolean = false;

let computerHasNoSkirmishers: boolean = false;
let playerHasNoSkirmishers: boolean = false;

let computerHasMoreSkirmishers: boolean = false; // in comparison with player 
let playerHasMoreSkirmishers: boolean = false; // in comparison with compuer

let equalNumberOfSkirmishers: boolean = false;

let noSkirmishers: boolean = false;

const setComputerHasTooManySkirmishers = () => {
    computerHasTooManySkirmishers = true;
    computerHasManySkirmishers = false;
    computerHasFewSkirmishers = false;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
} 

const setPlayerHasTooManySkirmishers = () => {
    playerHasTooManySkirmishers = true;
    playerHasManySkirmishers = false;
    playerHasFewSkirmishers = false;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setComputerHasManySkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = true;
    computerHasFewSkirmishers = false;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasManySkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = true;
    playerHasFewSkirmishers = false;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setComputerHasFewSkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    computerHasFewSkirmishers = true;
    computerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setPlayerHasFewSkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = false;
    playerHasFewSkirmishers = true;
    playerHasNoSkirmishers = false;
    noSkirmishers = false;
}

const setComputerHasNoSkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    computerHasFewSkirmishers = false;
    computerHasNoSkirmishers = true;
}

const setPlayerHasNoSkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = false;
    playerHasFewSkirmishers = false;
    playerHasNoSkirmishers = true;
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
    setNoSkirmishers,
    setEqualNumberOfSkirmishers,
    resetSkirmisherTranslatorStore
}
