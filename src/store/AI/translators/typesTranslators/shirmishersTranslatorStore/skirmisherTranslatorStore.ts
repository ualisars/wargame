export let computerHasTooManySkirmishers: boolean = false;
export let playerHasTooManySkirmishers: boolean = false;

export let computerHasManySkirmishers: boolean = false; // in comparison with all computer units
export let playerHasManySkirmishers: boolean = false; // in comparison with all player units

export let computerHasMoreSkirmishers: boolean = false; // in comparison with player 
export let playerHasMoreSkirmishers: boolean = false; // in comparison with compuer

// skirmishers do not affect the battle result
export let skirmisherMinority: boolean = false; 
export let noSkirmishers: boolean = false;


export const setComputerHasTooManySkirmishers = () => {
    computerHasTooManySkirmishers = true;
    playerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    playerHasManySkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
} 

export const setPlayerHasTooManySkirmishers = () => {
    computerHasTooManySkirmishers = false;
    playerHasTooManySkirmishers = true;
    computerHasManySkirmishers = false;
    playerHasManySkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
}

export const setComputerHasManySkirmishers = () => {
    computerHasTooManySkirmishers = false;
    playerHasTooManySkirmishers = false;
    computerHasManySkirmishers = true;
    playerHasManySkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
}

export const setPlayerHasManySkirmishers = () => {
    computerHasTooManySkirmishers = false;
    playerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    playerHasManySkirmishers = true;
    skirmisherMinority = false;
    noSkirmishers = false;
}

export const setComputerHasMoreSkirmishers = () => {
    computerHasMoreSkirmishers = true;
    playerHasMoreSkirmishers = false;
}

export const setPlayerHasMoreSkirmishers = () => {
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = true;
}

export const setSkirmisherMinority = () => {
    setDefault();
    skirmisherMinority = true;
}

export const setNoSkirmishers = () => {
    setDefault();
    noSkirmishers = true;
}

const setDefault = () => {
    computerHasTooManySkirmishers = false;
    playerHasTooManySkirmishers = false;
    computerHasManySkirmishers = false;
    playerHasManySkirmishers = false;
    computerHasMoreSkirmishers = false;
    playerHasMoreSkirmishers = false;
    skirmisherMinority = false;
    noSkirmishers = false;
}