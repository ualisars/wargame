import {isObjectEmpty} from '../index';
/*
  Analyze chance to get out from the combat
  and provide conclusion in boolean form
  unit is out of combat ot continue fighting
*/
export const isUnitOutOfCombat = (unit:any) => {
  let chance = 1;
  let numberOfEnemy:number = 0;
  let unitSpeed:number = unit.speed;
  let unitMobility:number = unit.mobility;
  let totalEnemySpeed:number = 0;
  let unitHasEnemyInTheBack:boolean = false;

  if(!isObjectEmpty(unit.figthAgainst.front)) { // unit is fighting with enemy in front of it
    numberOfEnemy++; // increase number of enemy
    totalEnemySpeed += unit.figthAgainst.front.speed; // add front enemy's speed to the total enemy speed
  }
  if(!isObjectEmpty(unit.figthAgainst.rear)) { // unit is fighting with enemy in the back
    numberOfEnemy++; // increase number of enemy
    totalEnemySpeed += unit.figthAgainst.rear.speed; // add rear enemy's speed to the total enemy speed
    unitHasEnemyInTheBack = true;
  }
  if(unit.figthAgainst.flank.length > 0) {
    for(let enemy of unit.figthAgainst.flank) { // loop through all flank units
      numberOfEnemy++;
      totalEnemySpeed += enemy.speed;
    }
  }

  // every enemy is descrease chance to retriete
  if(numberOfEnemy === 1) {
    chance -= 0.5;
  }
  else if(numberOfEnemy === 2) {
    chance -= 1;
  }
  else if(numberOfEnemy > 2 && numberOfEnemy <= 4) {
    chance -= 2;
  }
  else if(numberOfEnemy > 4) {
    chance -= 4;
  }

  // enemy has backed unit
  if(unitHasEnemyInTheBack) {
    chance -= 5;
  }

  // descrease chance based on unit's condition
  if(unit.condition >= 50 && unit.condition < 80) {
    chance -= 1;
  }
  else if(unit.condition >= 25 && unit.condition < 50) {
    chance -= 2;
  }
  else if(unit.condition < 25) {
    chance -= 4;
  }

  // increase chance based on speed advantage
  if(unit.speed >= totalEnemySpeed) { // unit has speed advantage
    if((unit.speed / totalEnemySpeed) >=4) {
      chance += 5;
    }
    else if((unit.speed / totalEnemySpeed) > 2 && (unit.speed / totalEnemySpeed) < 4) {
      chance += 4;
    }
    else if((unit.speed / totalEnemySpeed) >= 2) {
      chance += 3;
    }
    else {
      chance += 2;
    }
  } else { // unit doesn't have speed advantage
    if(totalEnemySpeed / unit.speed <= 1.25) { // enemies don't have total speed advantage
      chance += 1;
    }
  }

  //increase chance based on mobility
  if(unit.mobility >= 2 && unit.mobility < 3) {
    chance += 0.5;
  }
  else if(unitMobility >= 3 && unitMobility < 5) {
    chance += 1;
  }
  else if(unitMobility === 5) {
    chance += 1.5;
  }
  else if(unitMobility >= 5 && unitMobility < 7) {
    chance += 2;
  }
  else if(unitMobility >= 7 && unitMobility < 8) {
    chance += 3;
  }
  else if(unitMobility >= 8) {
    chance += 4;
  }

  // chance cannot be less that 0 and greater than 1
  if(chance <= 0) chance = 0.1;
  if(chance >= 1) chance = 0.9;

  let random = Math.random();
  if(random >= 0 && random <= chance) {
    return true;
  }
  return false;
}
