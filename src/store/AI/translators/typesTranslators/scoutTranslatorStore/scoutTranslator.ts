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

let computerHasLotsOfScouts: boolean = false;
let playerHasLotsOfScouts: boolean = false;

let computerHasScouts: boolean = false;
let playerHasScouts: boolean = false;

let noScouts: boolean;


const setComputerHasTooManyScouts = () => {
    computerHasTooManyScouts = true;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasLotsOfScouts = true;
    computerHasScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasTooManyScouts = () => {
    playerHasTooManyScouts = true;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasLotsOfScouts = true;
    playerHasScouts = true;
    playerHasNoScouts = false;
    noScouts = false;
}

const setComputerHasManyScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = true;
    computerHasFewScouts = false;
    computerHasLotsOfScouts = true;
    computerHasScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasManyScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = true;
    playerHasFewScouts = false;
    playerHasNoScouts = false;
    playerHasLotsOfScouts = true;
    playerHasScouts = true;
    noScouts = false;
}

const setComputerHasFewScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = true;
    computerHasLotsOfScouts = false;
    computerHasScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasFewScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = true;
    playerHasLotsOfScouts = false;
    playerHasScouts = true;
    playerHasNoScouts = false;
    noScouts = false;
}

const setComputerHasNoScouts = () => {
    computerHasTooManyScouts = false;
    computerHasManyScouts = false;
    computerHasFewScouts = false;
    computerHasNoScouts = true;
    computerHasLotsOfScouts = false;
    computerHasScouts = false;
}

const setPlayerHasNoScouts = () => {
    playerHasTooManyScouts = false;
    playerHasManyScouts = false;
    playerHasFewScouts = false;
    playerHasNoScouts = true;
    playerHasLotsOfScouts = false;
    playerHasScouts = false;
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

const setComputerHasLotsOfScouts = () => {
    computerHasFewScouts = false;
    computerHasLotsOfScouts = true;
    computerHasScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasLotsOfScouts = () => {
    playerHasFewScouts = false;
    playerHasLotsOfScouts = true;
    playerHasScouts = true;
    playerHasNoScouts = false;
    noScouts = false;
}

const setComputerHasScouts = () => {
    computerHasLotsOfScouts = false;
    computerHasScouts = true;
    computerHasNoScouts = false;
    noScouts = false;
}

const setPlayerHasScouts = () => {
    playerHasLotsOfScouts = false;
    playerHasScouts = true;
    playerHasNoScouts = false;
    noScouts = false;
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
    playerHasTooManyScouts = false;
    computerHasManyScouts = false;
    playerHasManyScouts = false;
    computerHasFewScouts = false;
    playerHasFewScouts = false;
    computerHasNoScouts = false;
    playerHasNoScouts = false;
    computerHasMoreScouts = false;
    playerHasMoreScouts = false;
    equalNumberOfScouts = false;
    computerHasLotsOfScouts = false;
    playerHasLotsOfScouts = false;
    computerHasScouts = false;
    playerHasScouts = false;
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
    computerHasLotsOfScouts,
    playerHasLotsOfScouts,
    computerHasScouts,
    playerHasScouts,
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
    setComputerHasLotsOfScouts,
    setPlayerHasLotsOfScouts,
    setComputerHasScouts,
    setPlayerHasScouts,
    setNoScouts,
    resetScoutsTranslatorStore
}