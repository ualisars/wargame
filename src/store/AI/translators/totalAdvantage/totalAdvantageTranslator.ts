let computerSuperiority: boolean = false;
let computerAdvantage: boolean = false;
let forceEquality: boolean = false;
let computerDisadvantage: boolean = false;
let computerCompleteDisadvantage: boolean = false;

const setComputerSuperiority = () => {
    resetAllProperties();
    computerSuperiority = true;
}

const setComputerAdvantage = () => {
    resetAllProperties();
    computerAdvantage = true;
}

const setForceEquality = () => {
    resetAllProperties();
    forceEquality = true;
}

const setComputerDisadvantage = () => {
    resetAllProperties();
    computerDisadvantage = true;
}


const setComputerCompleteDisadvantage = () => {
    resetAllProperties();
    computerCompleteDisadvantage = true;
}

const resetAllProperties = () => {
    computerSuperiority = false;
    forceEquality = false;
    computerAdvantage = false;
    computerDisadvantage = false;
    computerCompleteDisadvantage = false;
}

export {
    computerSuperiority,
    computerAdvantage,
    forceEquality,
    computerDisadvantage,
    computerCompleteDisadvantage,

    setComputerSuperiority,   
    setComputerAdvantage,
    setForceEquality,
    setComputerDisadvantage,
    setComputerCompleteDisadvantage,
    resetAllProperties
}


