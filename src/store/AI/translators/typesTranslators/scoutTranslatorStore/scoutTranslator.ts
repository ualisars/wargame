let computerHasTooManyScouts: boolean = false;
let playerHasTooManyScouts: boolean = false;

let computerHasManyScouts: boolean = false;
let playerHasManyScouts: boolean = false;

let computerHasFewScouts: boolean = false;
let playerHasFewScouts: boolean = false;

let computerHasNoScouts: boolean = false;
let playerHasNoScouts: boolean = false;

let computerHasMoreScouts: boolean = false;
let playerHasMoreScouts: boolean = false;
let equalNumberOfScouts: boolean = false;

let noScouts: boolean = false;

const setComputerHasTooManyScouts = () => {
    computerHasTooManyScouts = true;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasTooManyScouts = () => {
    playerHasTooManyScouts = true;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = false;
    noScouts = false;
}

const setComputerHasManyScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = true;
    computerHasFewScouts = false;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasManyScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = true;
    playerHasFewScouts = false;
    playerHasNoScouts = false;
    noScouts = false;
}

const setComputerHasFewScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasFewScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = true;
    playerHasNoScouts = false;
    noScouts = false;
}

const setComputerHasNoScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = true;
}

const setPlayerHasNoScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = true;
}

const setComputerHasMoreScouts = () => {
    computerHasMoreScouts = true;
    playerHasMoreScouts = false;
    equalNumberOfScouts = false;
    noScouts = false;
}

const setPlayerHasMoreScouts = () => {
    computerHasMoreScouts = false;
    playerHasMoreScouts = true;
    equalNumberOfScouts = false;
    noScouts = false;
}

const setEqualNumberOfScouts = () => {
    computerHasMoreScouts = false;
    playerHasMoreScouts = false;
    equalNumberOfScouts = true;
}

const setNoScouts = () => {
    resetScoutsTranslatorStore();
    computerHasNoScouts = true;
    playerHasNoScouts = true;
    equalNumberOfScouts = true;
    noScouts = true;
}

const resetScoutsTranslatorStore = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = false;

    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = false;

    computerHasMoreScouts = false;
    playerHasMoreScouts = false;
    equalNumberOfScouts = false;
    noScouts = false;
}

export {
    computerHasTooManyScouts,
    playerHasTooManyScouts,
    computerHasManyScouts,
    playerHasManyScouts,
    computerHasFewScouts,
    playerHasFewScouts,
    computerHasNoScouts,
    playerHasNoScouts,
    computerHasMoreScouts,
    playerHasMoreScouts,
    equalNumberOfScouts,
    noScouts,

    setComputerHasTooManyScouts,
    setPlayerHasTooManyScouts,
    setComputerHasManyScouts,
    setPlayerHasManyScouts,
    setComputerHasFewScouts,
    setPlayerHasFewScouts,
    setComputerHasNoScouts,
    setPlayerHasNoScouts,
    setComputerHasMoreScouts,
    setPlayerHasMoreScouts,
    setEqualNumberOfScouts,
    setNoScouts,
    resetScoutsTranslatorStore
}