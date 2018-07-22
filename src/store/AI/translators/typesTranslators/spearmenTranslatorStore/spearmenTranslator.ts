let computerHasTooManySpearmen: boolean = false;
let playerHasTooManySpearmen: boolean = false;

let computerHasManySpearmen: boolean = false;
let playerHasManySpearmen: boolean = false;

let computerHasFewSpearmen: boolean = false;
let playerHasFewSpearmen: boolean = false;

let computerHasNoSpearmen: boolean = false;
let playerHasNoSpearmen: boolean = false;

let computerHasMoreSpearmen: boolean = false;
let playerHasMoreSpearmen: boolean = false;

let equalNumberOfSpearmen: boolean = false;

let computerHasLotsOfSpearmen: boolean = false;
let playerHasLotsOfSpearmen: boolean = false;

let computerHasSpearmen: boolean = false;
let playerHasSpearmen: boolean = false;

let noSpearmen: boolean;


const setComputerHasTooManySpearmen = () => {
    computerHasTooManySpearmen = true;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasLotsOfSpearmen = true;
    computerHasSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasTooManySpearmen = () => {
    playerHasTooManySpearmen = true;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasLotsOfSpearmen = true;
    playerHasSpearmen = true;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setComputerHasManySpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = true;
    computerHasFewSpearmen = false;
    computerHasLotsOfSpearmen = true;
    computerHasSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasManySpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = true;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;
    playerHasLotsOfSpearmen = true;
    playerHasSpearmen = true;
    noSpearmen = false;
}

const setComputerHasFewSpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = true;
    computerHasLotsOfSpearmen = false;
    computerHasSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasFewSpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = true;
    playerHasLotsOfSpearmen = false;
    playerHasSpearmen = true;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setComputerHasNoSpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = true;
    computerHasLotsOfSpearmen = false;
    computerHasSpearmen = false;
}

const setPlayerHasNoSpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = true;
    playerHasLotsOfSpearmen = false;
    playerHasSpearmen = false;
}

const setComputerHasMoreSpearmen = () => {
    computerHasMoreSpearmen = true;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = false;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasMoreSpearmen = () => {
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = true;
    equalNumberOfSpearmen = false;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setEqualNumberOfSpearmen = () => {
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = true;
}

const setComputerHasLotsOfSpearmen = () => {
    computerHasFewSpearmen = false;
    computerHasLotsOfSpearmen = true;
    computerHasSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasLotsOfSpearmen = () => {
    playerHasFewSpearmen = false;
    playerHasLotsOfSpearmen = true;
    playerHasSpearmen = true;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setComputerHasSpearmen = () => {
    computerHasLotsOfSpearmen = false;
    computerHasSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasSpearmen = () => {
    playerHasLotsOfSpearmen = false;
    playerHasSpearmen = true;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setNoSpearmen = () => {
    resetSpearmenTranslatorStore();
    computerHasNoSpearmen = true;
    playerHasNoSpearmen = true;
    equalNumberOfSpearmen = true;
    noSpearmen = true;
}

const resetSpearmenTranslatorStore = () => {
    computerHasTooManySpearmen = false;
    playerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    playerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    playerHasFewSpearmen = false;
    computerHasNoSpearmen = false;
    playerHasNoSpearmen = false;
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = false;
    computerHasLotsOfSpearmen = false;
    playerHasLotsOfSpearmen = false;
    computerHasSpearmen = false;
    playerHasSpearmen = false;
    noSpearmen = false;
}

export {
    computerHasTooManySpearmen,
    playerHasTooManySpearmen,
    computerHasManySpearmen,
    playerHasManySpearmen,
    computerHasFewSpearmen,
    playerHasFewSpearmen,
    computerHasNoSpearmen,
    playerHasNoSpearmen,
    computerHasMoreSpearmen,
    playerHasMoreSpearmen,
    equalNumberOfSpearmen,
    computerHasLotsOfSpearmen,
    playerHasLotsOfSpearmen,
    computerHasSpearmen,
    playerHasSpearmen,
    noSpearmen,

    setComputerHasTooManySpearmen,
    setPlayerHasTooManySpearmen,
    setComputerHasManySpearmen,
    setPlayerHasManySpearmen,
    setComputerHasFewSpearmen,
    setPlayerHasFewSpearmen,
    setComputerHasNoSpearmen,
    setPlayerHasNoSpearmen,
    setComputerHasMoreSpearmen,
    setPlayerHasMoreSpearmen,
    setEqualNumberOfSpearmen,
    setComputerHasLotsOfSpearmen,
    setPlayerHasLotsOfSpearmen,
    setComputerHasSpearmen,
    setPlayerHasSpearmen,
    setNoSpearmen,
    resetSpearmenTranslatorStore
}