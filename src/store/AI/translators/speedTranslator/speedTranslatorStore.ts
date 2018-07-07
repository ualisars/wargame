let speedSuperiority: boolean = false;
let speedAdvantage: boolean = false;
let equalSpeed: boolean = false;
let speedDisadvantage: boolean = false;
let speedCompleteDisadvantage: boolean = false;

const setSpeedSuperiority = () => {
    setDefault();
    speedSuperiority = true;
}

const setSpeedAdvantage = () => {
    setDefault();
    speedAdvantage = true;
} 

const setEqualSpeed = () => {
    setDefault();
    equalSpeed = true;
}

const setSpeedDisadvantage = () => {
    setDefault();
    speedDisadvantage = true;
}

const setSpeedCompleteDisadvantage = () => {
    setDefault();
    speedCompleteDisadvantage = true;
}

const setDefault = () => {
    speedSuperiority = false;
    speedAdvantage = false;
    equalSpeed = false;
    speedDisadvantage = false;
    speedCompleteDisadvantage = false;
}

export {
    speedSuperiority,
    speedAdvantage,
    equalSpeed,
    speedDisadvantage,
    speedCompleteDisadvantage,

    setSpeedSuperiority,
    setSpeedAdvantage,
    setEqualSpeed,
    setSpeedDisadvantage,
    setSpeedCompleteDisadvantage
}