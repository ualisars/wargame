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

let noSpearmen: boolean = false;


const setComputerHasTooManySpearmen = () => {
    computerHasTooManySpearmen = true;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasTooManySpearmen = () => {
    playerHasTooManySpearmen = true;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setComputerHasManySpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = true;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasManySpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = true;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setComputerHasFewSpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = true;
    computerHasNoSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasFewSpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = true;
    playerHasNoSpearmen = false;
    noSpearmen = false;
}

const setComputerHasNoSpearmen = () => {
    computerHasTooManySpearmen = false;
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = true;
}

const setPlayerHasNoSpearmen = () => {
    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = true;
}

const setComputerHasMoreSpearmen = () => {
    computerHasMoreSpearmen = true;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = false;
    noSpearmen = false;
}

const setPlayerHasMoreSpearmen = () => {
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = true;
    equalNumberOfSpearmen = false;
    noSpearmen = false;
}

const setEqualNumberOfSpearmen = () => {
    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = true;
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
    computerHasManySpearmen = false;
    computerHasFewSpearmen = false;
    computerHasNoSpearmen = false;

    playerHasTooManySpearmen = false;
    playerHasManySpearmen = false;
    playerHasFewSpearmen = false;
    playerHasNoSpearmen = false;

    computerHasMoreSpearmen = false;
    playerHasMoreSpearmen = false;
    equalNumberOfSpearmen = false;
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
    setNoSpearmen,
    resetSpearmenTranslatorStore 
}