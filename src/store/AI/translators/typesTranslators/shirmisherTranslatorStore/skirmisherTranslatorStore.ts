export let computerHasTooManySkirmishers: boolean = false;
export let playerHasTooManySkirmishers: boolean = false;

export let computerHasManySkirmishers: boolean = false; // in comparison with all computer units
export let playerHasManySkirmishers: boolean = false; // in comparison with all player units

export let computerHasMoreSkirmishers: boolean = false; // in comparison with player 
export let playerHasMoreSkirmishers: boolean = false; // in comparison with compuer

// skirmishers do not affect the battle result
export let equalNumberOfSkirmishers: boolean = false;
export let skirmisherMinority: boolean = false; 
export let noSkirmishers: boolean = false;


export const setComputerHasTooManySkirmishers = () => {
    computerHasTooManySkirmishers = true;
    computerHasManySkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
} 

export const setPlayerHasTooManySkirmishers = () => {
    playerHasTooManySkirmishers = true;
    playerHasManySkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
}

export const setComputerHasManySkirmishers = () => {
    computerHasTooManySkirmishers = false;
    computerHasManySkirmishers = true;
    skirmisherMinority = false;
    noSkirmishers = false;
}

export const setPlayerHasManySkirmishers = () => {
    playerHasTooManySkirmishers = false;
    playerHasManySkirmishers = true;
    skirmisherMinority = false;
    noSkirmishers = false;
}

export const setComputerHasMoreSkirmishers = () => {
    computerHasMoreSkirmishers = true;
    playerHasMoreSkirmishers = false;
    equalNumberOfSkirmishers = false;
}

export const setPlayerHasMoreSkirmishers = () => {
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = true;
    equalNumberOfSkirmishers = false;
}

export const setEqualNumberOfSkirmishers = () => {
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = false;
    equalNumberOfSkirmishers = true;
}

export const setSkirmisherMinority = () => {
    skirmisherMinority = true;
}

export const setNoSkirmishers = () => {
    setSkirmisherStoreToDefault();
    noSkirmishers = true;
}

export const setSkirmisherStoreToDefault = () => {
    computerHasTooManySkirmishers = false;
    playerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    playerHasManySkirmishers = false;
    computerHasMoreSkirmishers = false;
    equalNumberOfSkirmishers = false;
    playerHasMoreSkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
}