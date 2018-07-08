let meleeSuperiority: boolean = false;
let meleeAdvantage: boolean = false;
let equalMelee: boolean = false;
let meleeDisadvantage: boolean = false;
let meleeCompleteDisadvantage: boolean = false;


const setMeleeSuperiority = () => {
    setDefault();
    meleeSuperiority = true;
}

const setMeleeAdvantage = () => {
    setDefault();
    meleeAdvantage = true;
}

const setEqualMelee = () => {
    setDefault();
    equalMelee = true;
}

const setMeleeDisadvantage = () => {
    setDefault();
    meleeDisadvantage = true;
}

const setMeleeCompleteDisadvantage = () => {
    setDefault();
    meleeCompleteDisadvantage = true;
}

const setDefault = () => {
    meleeSuperiority = false;
    meleeAdvantage = false;
    equalMelee = false;
    meleeDisadvantage = false;
    meleeCompleteDisadvantage = false;
}

export {
    meleeSuperiority,
    meleeAdvantage,
    equalMelee,
    meleeDisadvantage,
    meleeCompleteDisadvantage,

    setMeleeSuperiority,
    setMeleeAdvantage,
    setEqualMelee,
    setMeleeDisadvantage,
    setMeleeCompleteDisadvantage
}