import {
  Archers,
  HeavyCavalry,
  HeavyInfantry,
  Hoplites,
  LightCavalry,
  Militia,
  Peltasts,
  Pikemen,
  Scouts
} from '../../unit/types';
import {
  isUnitInArray,
  deleteUnitFromArray
} from '../../utils/unitUtils';
import {side} from './mainMenuSettings';

export let roster:any[] = [];
export let selectedUnitInRoster:any = null;
export let playerArmy:any[] = [];
export let computerArmy:any[] = [];

export const addUnitToArmy = (unit:any) => {
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  if(unit) {
      army.push(unit);
      console.log('unit', unit.name, 'is added');
  }
}

export const removeUnitFromArmy = (unit:any) => {
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  if(unit && isUnitInArray(unit, army)) {
    if(side === 'player') {
      playerArmy = deleteUnitFromArray(unit, playerArmy);
    } else {
      computerArmy = deleteUnitFromArray(unit, computerArmy);
    }
  }
}
export const selectUnitInRoster = (unit:any) => {
  if(unit) {
    selectedUnitInRoster = unit;
  } else {
    selectedUnitInRoster = null;
  }
}

let archersRoster = new Archers(0,0,0,0);
let heavyCavalryRoster = new HeavyCavalry(0,0,0,0);
let heavyInfantryRoster = new HeavyInfantry(0,0,0,0);
let hoplitesRoster = new Hoplites(0,0,0,0);
let lightCavalryRoster = new LightCavalry(0,0,0,0);
let militiaRoster = new Militia(0,0,0,0);
let peltastsRoster = new Peltasts(0,0,0,0);
let pikemenRoster = new Pikemen(0,0,0,0);
let scoutsRoster = new Scouts(0,0,0,0);

roster.push(archersRoster);
roster.push(heavyCavalryRoster);
roster.push(heavyInfantryRoster);
roster.push(hoplitesRoster);
roster.push(lightCavalryRoster);
roster.push(militiaRoster);
roster.push(peltastsRoster);
roster.push(pikemenRoster);
roster.push(scoutsRoster);

for(let unit of roster) {
  unit.selected = false;
}
