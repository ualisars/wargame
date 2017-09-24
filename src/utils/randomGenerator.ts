export const randomizeMeeleDamage = (meeleAttack:number) => {
  let max = meeleAttack - (Math.ceil(meeleAttack * 0.20));
  let min = meeleAttack + (Math.floor(meeleAttack * 0.20));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
