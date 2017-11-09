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

export const roster:any[] = [];

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
