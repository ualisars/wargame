import {checkAttackSide} from '../attackSide';
/*
  Single time attack, that fires only when one unit
  has rushed in full speed into another
*/
export const charge = (attackUnit:any, defendUnit:any) => {
  let attackAngle = checkAttackAngle(attackUnit, defendUnit);
  console.error('attackAngle', attackAngle);
  let charge = calculateCharge(attackUnit, defendUnit, attackAngle);
  defendUnit.health = Math.round(defendUnit.health - charge);
}

/*
  calculate charge based on position
  of the enemy
*/
export const calculateCharge = (unit:any, enemy:any, chargePosition:string) => {
  if(chargePosition === 'front') {
    let initialCharge = unit.charge - enemy.armour;
    if(initialCharge < 1) {
      return calculateDamageWhenItsLessThanOne(initialCharge);
    }
    return initialCharge;
  }
  else if(chargePosition === 'side') {
    let initialCharge = (unit.charge * 1.5) - enemy.armour;
    if(initialCharge < 1) {
      return calculateDamageWhenItsLessThanOne(initialCharge);
    }
    return initialCharge;
  }
  else if(chargePosition === 'back') {
    return unit.charge; // back of the unit charge calculated without enemy's armour
  }
}
