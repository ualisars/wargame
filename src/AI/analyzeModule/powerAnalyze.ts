import {
  computersUnits,
  visibleForComputerUnits,
  playersUnits
} from '../../store/unitStore';
import PlayerPower from '../store/PlayerPower';
import ComputerPower from '../store/ComputerPower';

export let playerPower = new PlayerPower;
export let computerPower = new ComputerPower;
export let visiblePlayerUnitsPower = new PlayerPower();


export const calculateTotalPlayerPower = () => {
  for(let unit of playersUnits) {
    decomposeUnitProps(unit);
  }
}

export const calculateVisiblePlayerPower = () => {
  for(let unit of visibleForComputerUnits) {
    decomposeUnitProps(unit, 'visiblePlayerUnits');
  }
}

export const calculateTotalComputerPower = () => {
  for(let unit of computersUnits) {
    decomposeUnitProps(unit, 'computer');
  }
}

export const calculateTotalPower = () => {
  calculateTotalComputerPower();
  calculateTotalPlayerPower();
}

export const decomposeUnitProps = (unit:any, side:string='player') => {
  if(side === 'visiblePlayerUnits') {
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
    computerPower.addHealth(unit.health);
    computerPower.addSpeed(unit.speed);
    computerPower.addArmour(unit.armour);
    computerPower.addMeleeDamage(unit.meleeDamage);
    computerPower.addMissileDamage(unit.missileDamage);
    computerPower.addDiscipline(unit.discipline);
    computerPower.addMorale(unit.morale);
    computerPower.addCondition(unit.condition);
  }
}
