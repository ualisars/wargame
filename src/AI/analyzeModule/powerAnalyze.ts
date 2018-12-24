import { initialComputerPower } from '../../store/AI/power/initialComputerPower';
import { initialPlayerPower } from '../../store/AI/power/initialPlayerPower';
import { playerPower } from '../../store/AI/power/playerPower';
import { computerPower } from '../../store/AI/power/computerPower';
import {
  playerUnits,
  computerUnits
} from '../../store/unit/units';
import { revealedUnits } from '../../store/AI/enemies/revealedEnemies';
import { visibleForComputerUnits } from '../../store/unit/visibleUnits';
import { visiblePlayerUnitsPower } from '../../store/AI/power/visiblePlayerUnitsPower';
import { revealedUnitsPower } from '../../store/AI/power/revealedUnitsPower';
import Power from '../../store/AI/power/Power';
import { Unit } from '../../unit';

export const calculateTotalComputerPower = (): Power => {
  let localPower = new Power();
  computerPower.resetAllProperties();
  for(let unit of computerUnits) {
    decomposeUnitProps(unit, 'computer');
    decomposePower(localPower, unit);
  }
  return localPower;
}

export const calculateTotalPlayerPower = (): Power => {
  let localPower = new Power();
  playerPower.resetAllProperties();
  for(let unit of playerUnits) {
    decomposeUnitProps(unit);
    decomposePower(localPower, unit);
  }
  return localPower;
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
    decomposePower(visiblePlayerUnitsPower, unit);
  }
  if(side === 'player') {
    decomposePower(playerPower, unit);
  }
  else if(side === 'computer') {
    decomposePower(computerPower, unit);
  }
  else if(side === 'initialComputer') {
    decomposePower(initialComputerPower, unit);
  }
  else if(side === 'initialPlayer') {
    decomposePower(initialPlayerPower, unit);
  }

  else if(side === 'revealedUnits') {
    decomposePower(revealedUnitsPower, unit);
  }
}

export const decomposePower = (power: Power, unit: Unit) => {
  power.incrementQuantity();
  power.addHealth(unit.health);
  power.addSpeed(unit.speed);
  power.addArmour(unit.armour);
  power.addMeleeDamage(unit.meleeDamage);
  power.addMissileDamage(unit.missileDamage);
  power.addDiscipline(unit.discipline);
  power.addMorale(unit.morale);
  power.addCondition(unit.condition);
}