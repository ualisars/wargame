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

let computerHasLotsOfCavalry: boolean = false;
let playerHasLotsOfCavalry: boolean = false;

let computerHasCavalry: boolean = false;
let playerHasCavalry: boolean = false;

let noCavalry: boolean;


const setComputerHasTooManyCavalry = () => {
    computerHasTooManyCavalry = true;
    computerHasManyCavalry = false;
    computerHasFewCavalry = false;
    computerHasLotsOfCavalry = true;
    computerHasCavalry = true;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasTooManyCavalry = () => {
    playerHasTooManyCavalry = true;
    playerHasManyCavalry = false;
    playerHasFewCavalry = false;
    playerHasLotsOfCavalry = true;
    playerHasCavalry = true;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setComputerHasManyCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = true;
    computerHasFewCavalry = false;
    computerHasLotsOfCavalry = true;
    computerHasCavalry = true;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasManyCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = true;
    playerHasFewCavalry = false;
    playerHasNoCavalry = false;
    playerHasLotsOfCavalry = true;
    playerHasCavalry = true;
    noCavalry = false;
}

const setComputerHasFewCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    computerHasFewCavalry = true;
    computerHasLotsOfCavalry = false;
    computerHasCavalry = true;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasFewCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = false;
    playerHasFewCavalry = true;
    playerHasLotsOfCavalry = false;
    playerHasCavalry = true;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setComputerHasNoCavalry = () => {
    computerHasTooManyCavalry = false;
    computerHasManyCavalry = false;
    computerHasFewCavalry = false;
    computerHasNoCavalry = true;
    computerHasLotsOfCavalry = false;
    computerHasCavalry = false;
    noCavalry = false;
}

const setPlayerHasNoCavalry = () => {
    playerHasTooManyCavalry = false;
    playerHasManyCavalry = false;
    playerHasFewCavalry = false;
    playerHasNoCavalry = true;
    playerHasLotsOfCavalry = false;
    playerHasCavalry = false;
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
}

const setComputerHasLotsOfCavalry = () => {
    computerHasLotsOfCavalry = true;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasLotsOfCavalry = () => {
    playerHasLotsOfCavalry = true;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setComputerHasCavalry = () => {
    computerHasCavalry = true;
    computerHasNoCavalry = false;
    noCavalry = false;
}

const setPlayerHasCavalry = () => {
    playerHasCavalry = true;
    playerHasNoCavalry = false;
    noCavalry = false;
}

const setNoCavalry = () => {
    resetCavalryTranslatorStore();
    computerHasNoCavalry = true;
    playerHasNoCavalry = true;
    equalNumberOfCavalry = true;
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
    computerHasLotsOfCavalry = false;
    playerHasLotsOfCavalry = false;
    computerHasCavalry = false;
    playerHasCavalry = false;
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
    computerHasLotsOfCavalry,
    playerHasLotsOfCavalry,
    computerHasCavalry,
    playerHasCavalry,
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
    setComputerHasLotsOfCavalry,
    setPlayerHasLotsOfCavalry,
    setComputerHasCavalry,
    setPlayerHasCavalry,
    setNoCavalry,
    resetCavalryTranslatorStore
}