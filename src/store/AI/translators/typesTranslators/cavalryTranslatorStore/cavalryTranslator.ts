let computerHasTooManyCavalry: boolean = false;
let playerHasTooManyCavalry: boolean = false;

let computerHasManyCavalry: boolean = false;
let playerHasManyCavalry: boolean = false;

let computerHasFewCavalry: boolean = false;
let playerHasFewCavalry: boolean = false;

let computerHasNoCavalry: boolean = false;
let playerHasNoCavalry: boolean = false;

let computerHasMoreCavalry: boolean = false;
let playerHasMoreCavalry: boolean = false;

let equalNumberOfCavalry: boolean = false;

let noCavalry: boolean;


const setComputerHasTooManyCavalry = () => {
    computerHasTooManyCavalry = true;
    computerHasManyCavalry = false;
    computerHasFewCavalry = false;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasTooManyCavalry = () => {
    playerHasTooManyCavalry = true;
    playerHasManyCavalry = false;
    playerHasFewCavalry = false;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setComputerHasManyCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = true;
    computerHasFewCavalry = false;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasManyCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = true;
    playerHasFewCavalry = false;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setComputerHasFewCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    computerHasFewCavalry = true;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasFewCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = false;
    playerHasFewCavalry = true;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setComputerHasNoCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    computerHasFewCavalry = false;
    computerHasNoCavalry = true;
    noCavalry = false;
}

const setPlayerHasNoCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = false;
    playerHasFewCavalry = false;
    playerHasNoCavalry = true;
    noCavalry = false;
}

const setComputerHasMoreCavalry = () => {
    computerHasMoreCavalry = true;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = false;
    noCavalry = false;
}

const setPlayerHasMoreCavalry = () => {
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = true;
    equalNumberOfCavalry = false;
    noCavalry = false;
}

const setEqualNumberOfCavalry = () => {
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = true;
    noCavalry = false;
}

const setNoCavalry = () => {
    resetCavalryTranslatorStore();
    noCavalry = true;
}

const resetCavalryTranslatorStore = () => {
    computerHasTooManyCavalry = false;
    playerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    playerHasManyCavalry = false;
    computerHasFewCavalry = false;
    playerHasFewCavalry = false;
    computerHasNoCavalry = false;
    playerHasNoCavalry = false;
    computerHasMoreCavalry = false;
    playerHasMoreCavalry = false;
    equalNumberOfCavalry = false;
    noCavalry = false;
}

export {
    computerHasTooManyCavalry,
    playerHasTooManyCavalry,
    computerHasManyCavalry,
    playerHasManyCavalry,
    computerHasFewCavalry,
    playerHasFewCavalry,
    computerHasNoCavalry,
    playerHasNoCavalry,
    computerHasMoreCavalry,
    playerHasMoreCavalry,
    equalNumberOfCavalry,
    noCavalry,

    setComputerHasTooManyCavalry,
    setPlayerHasTooManyCavalry,
    setComputerHasManyCavalry,
    setPlayerHasManyCavalry,
    setComputerHasFewCavalry,
    setPlayerHasFewCavalry,
    setComputerHasNoCavalry,
    setPlayerHasNoCavalry,
    setComputerHasMoreCavalry,
    setPlayerHasMoreCavalry,
    setEqualNumberOfCavalry,
    setNoCavalry,
    resetCavalryTranslatorStore
}