import {
  Archers,
  HeavyCavalry,
  HeavyInfantry,
  Hoplites,
  LightCavalry,
  Militia,
  Peltasts,
  Pikemen,
  Scouts,
  LightInfantry
} from '../../unit/types';

export let roster:any[] = [];

let archersRoster = new Archers(0,0,0,0);
let heavyCavalryRoster = new HeavyCavalry(0,0,0,0);
let heavyInfantryRoster = new HeavyInfantry(0,0,0,0);
let hoplitesRoster = new Hoplites(0,0,0,0);
let lightCavalryRoster = new LightCavalry(0,0,0,0);
let militiaRoster = new Militia(0,0,0,0);
let peltastsRoster = new Peltasts(0,0,0,0);
let pikemenRoster = new Pikemen(0,0,0,0);
let scoutsRoster = new Scouts(0,0,0,0);
let lightInfantryRoster = new LightInfantry(0,0,0,0);

roster.push(archersRoster);
roster.push(heavyCavalryRoster);
roster.push(heavyInfantryRoster);
roster.push(hoplitesRoster);
roster.push(lightCavalryRoster);
roster.push(militiaRoster);
roster.push(peltastsRoster);
roster.push(pikemenRoster);
roster.push(scoutsRoster);
//roster.push(lightInfantryRoster);

for(let unit of roster) {
  unit.selected = false;
}
