import {randomizeMeleeDamage} from '../utils/randomGenerator';

export const checkUnitIsFighting = (unit:any) => {
  if(unit.isFighting) return true;
  return false;
}

export const figthAgainst = (unit:any, opponent:any) => {

}

export const meeleAttack = (attackUnit:any, defendUnit:any) => {
  let meleeDamage = randomizeMeleeDamage(attackUnit.meleeDamage);
  let health = defendUnit.health;
  console.error('health', health);
  let armour = defendUnit.armour;
  console.error('armour', armour);
  console.error('meeleeDamage', meleeDamage);
  defendUnit.health = defendUnit.health - (meleeDamage - armour);
}

export const meleeCombat = (attackUnit:any, defendUnit:any) => {
  console.error('meeleCombat');
  console.error('defendUnit health', defendUnit.health);
  console.error('meeleCombat attackUnit', attackUnit);
  console.error('meeleCombat defendUnit', defendUnit);
  if(!attackUnit.isFighting || !defendUnit.isFighting || attackUnit.health <= 0 || defendUnit.health <= 0) {
    console.log('not fighting anymore');
    return;
  }
  meeleAttack(attackUnit, defendUnit);
  meeleAttack(defendUnit, attackUnit);
  setInterval(() => {
    meleeCombat(attackUnit, defendUnit)
  }, 3000);
}
