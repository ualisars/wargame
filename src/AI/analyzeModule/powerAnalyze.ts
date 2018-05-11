import {
  initialComputerPower,
  initialPlayerPower,
} from '../../store/';
import {playerPower} from '../../store/AI/power/playerPower';
import {computerPower} from '../../store/AI/power/computerPower';
import {
  playerUnits,
  computerUnits
} from '../../store/unit/units';
import {revealedUnits} from '../../store/AI/enemies/revealedEnemies';
import {visibleForComputerUnits} from '../../store/unit/visibleUnits';
import {visiblePlayerUnitsPower} from '../../store/AI/power/visiblePlayerUnitsPower';
import {revealedUnitsPower} from '../../store/AI/power/revealedUnitsPower';

export const calculateTotalComputerPower = () => {
  computerPower.resetAllProperties();
  for(let unit of computerUnits) {
    decomposeUnitProps(unit, 'computer');
  }
}

export const calculateTotalPlayerPower = () => {
  playerPower.resetAllProperties();
  for(let unit of playerUnits) {
    decomposeUnitProps(unit);
  }
}

export const calculateRevealedUnitsPower = () => {
  revealedUnitsPower.resetAllProperties();
  for(let unit of revealedUnits) {
    decomposeUnitProps(unit, 'revealedUnits');
  }
}

export const calculateVisiblePlayerPower = () => {
  visiblePlayerUnitsPower.resetAllProperties();
  for(let unit of visibleForComputerUnits) {
    decomposeUnitProps(unit, 'visiblePlayerUnits');
  }
}

export const calculateInitialComputerPower = () => {
  initialComputerPower.resetAllProperties();
  for(let unit of computerUnits) {
    decomposeUnitProps(unit, 'initialComputer');
  }
}

export const calculateInitialPlayerPower = () => {
  initialPlayerPower.resetAllProperties();
  for(let unit of playerUnits) {
    decomposeUnitProps(unit, 'initialPlayer');
  }
}

export const calculateTotalPower = () => {
  calculateTotalComputerPower();
  calculateTotalPlayerPower();
}

export const calculateInitialPower = () => {
  calculateInitialComputerPower();
  calculateInitialPlayerPower();
}

export const decomposeUnitProps = (unit:any, side:string='player') => {
  if(side === 'visiblePlayerUnits') {
    visiblePlayerUnitsPower.incrementQuantity();
    visiblePlayerUnitsPower.addHealth(unit.health);
    visiblePlayerUnitsPower.addSpeed(unit.speed);
    visiblePlayerUnitsPower.addArmour(unit.armour);
    visiblePlayerUnitsPower.addMeleeDamage(unit.meleeDamage);
    visiblePlayerUnitsPower.addMissileDamage(unit.missileDamage);
    visiblePlayerUnitsPower.addDiscipline(unit.discipline);
    visiblePlayerUnitsPower.addMorale(unit.morale);
    visiblePlayerUnitsPower.addCondition(unit.condition);
  }
  if(side === 'player') {
    playerPower.incrementQuantity();
    playerPower.addHealth(unit.health);
    playerPower.addSpeed(unit.speed);
    playerPower.addArmour(unit.armour);
    playerPower.addMeleeDamage(unit.meleeDamage);
    playerPower.addMissileDamage(unit.missileDamage);
    playerPower.addDiscipline(unit.discipline);
    playerPower.addMorale(unit.morale);
    playerPower.addCondition(unit.condition);
  }
  else if(side === 'computer') {
    computerPower.incrementQuantity();
    computerPower.addHealth(unit.health);
    computerPower.addSpeed(unit.speed);
    computerPower.addArmour(unit.armour);
    computerPower.addMeleeDamage(unit.meleeDamage);
    computerPower.addMissileDamage(unit.missileDamage);
    computerPower.addDiscipline(unit.discipline);
    computerPower.addMorale(unit.morale);
    computerPower.addCondition(unit.condition);
  }
  else if(side === 'initialComputer') {
    initialComputerPower.incrementQuantity();
    initialComputerPower.addHealth(unit.health);
    initialComputerPower.addSpeed(unit.speed);
    initialComputerPower.addArmour(unit.armour);
    initialComputerPower.addMeleeDamage(unit.meleeDamage);
    initialComputerPower.addMissileDamage(unit.missileDamage);
    initialComputerPower.addDiscipline(unit.discipline);
    initialComputerPower.addMorale(unit.morale);
    initialComputerPower.addCondition(unit.condition);
  }
  else if(side === 'initialPlayer') {
    initialPlayerPower.incrementQuantity();
    initialPlayerPower.addHealth(unit.health);
    initialPlayerPower.addSpeed(unit.speed);
    initialPlayerPower.addArmour(unit.armour);
    initialPlayerPower.addMeleeDamage(unit.meleeDamage);
    initialPlayerPower.addMissileDamage(unit.missileDamage);
    initialPlayerPower.addDiscipline(unit.discipline);
    initialPlayerPower.addMorale(unit.morale);
    initialPlayerPower.addCondition(unit.condition);
  }

  else if(side === 'revealedUnits') {
    revealedUnitsPower.incrementQuantity();
    revealedUnitsPower.addHealth(unit.health);
    revealedUnitsPower.addSpeed(unit.speed);
    revealedUnitsPower.addArmour(unit.armour);
    revealedUnitsPower.addMeleeDamage(unit.meleeDamage);
    revealedUnitsPower.addMissileDamage(unit.missileDamage);
    revealedUnitsPower.addDiscipline(unit.discipline);
    revealedUnitsPower.addMorale(unit.morale);
    revealedUnitsPower.addCondition(unit.condition);
  }
}
