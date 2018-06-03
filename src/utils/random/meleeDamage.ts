export const randomizeMeleeDamage = (meleeAttack:number) => {
    let max = meleeAttack - (Math.ceil(meleeAttack * 0.20));
    let min = meleeAttack + (Math.floor(meleeAttack * 0.20));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}