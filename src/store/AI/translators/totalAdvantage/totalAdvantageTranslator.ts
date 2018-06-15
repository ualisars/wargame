export let computerCompletelyAdvantage: boolean;
export let computerAdvantage: boolean;
export let computerDisadvantage: boolean;
export let computerCompletelyDisadvantage: boolean;


export const setComputerCompletelyAdvantageToTrue = () => {
    resetAllProperties();
    computerCompletelyAdvantage = true;
}

export const setComputerAdvantageToTrue = () => {
    resetAllProperties();
    computerAdvantage = true;
}

export const setComputerDisadvantageToTrue = () => {
    resetAllProperties();
    computerDisadvantage = true;
}


export const setComputerCompletelyDisadvantageToTrue = () => {
    resetAllProperties();
    computerCompletelyDisadvantage = true;
}

const resetAllProperties = () => {
    computerCompletelyAdvantage = false;
    computerAdvantage = false;
    computerDisadvantage = false;
    computerCompletelyDisadvantage = false;
}


