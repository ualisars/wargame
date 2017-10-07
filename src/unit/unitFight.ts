import {randomizeMeeleDamage} from '../utils/randomGenerator';

export const checkUnitIsFighting = (unit:any) => {
  if(unit.isFighting) return true;
  return false;
}

export const figthAgainst = (unit:any, opponent:any) => {

}

export const meeleAttack = (attackUnit:any, defendUnit:any) => {
  let meeleeDamage = randomizeMeeleDamage(attackUnit.meeleeDamage);
  defendUnit.health = defendUnit.health - (meeleeDamage - defendUnit.armour);
}
