let computerSuperiority: boolean;
let computerAdvantage: boolean;
let equality: boolean = false;
let computerDisadvantage: boolean;
let computerCompletelyDisadvantage: boolean;

const setComputerSuperiority = () => {
    resetAllProperties();
    computerSuperiority = true;
}

const setComputerAdvantage = () => {
    resetAllProperties();
    computerAdvantage = true;
}

const setEquality = () => {
    resetAllProperties();
    equality = true;
}

const setComputerDisadvantage = () => {
    resetAllProperties();
    computerDisadvantage = true;
}


const setComputerCompletelyDisadvantage = () => {
    resetAllProperties();
    computerCompletelyDisadvantage = true;
}

const resetAllProperties = () => {
    computerSuperiority = false;
    equality = false;
    computerAdvantage = false;
    computerDisadvantage = false;
    computerCompletelyDisadvantage = false;
}

export {
    computerSuperiority,
    computerAdvantage,
    equality,
    computerDisadvantage,
    computerCompletelyDisadvantage,

    setComputerSuperiority,   
    setComputerAdvantage,
    setEquality,
    setComputerDisadvantage,
    setComputerCompletelyDisadvantage,
    resetAllProperties
}


