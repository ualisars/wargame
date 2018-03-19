// import { expect, should, assert} from 'chai';
// import {
//   playerUnits
// } from '../src/store/unit/units';
// import {calculateUnitsToBeware} from '../src/AI/analyzeModule/unitAnalyze';
//
// describe('unitAnalyze test', function() {
//   let unit1 = {
//     name: 'LightCavalry',
//     advantageOver: ['Archers', 'Peltasts'],
//     vulnerableAgainst: ['Hoplites', 'Pikemen']
//   }
//   let unit2 = {
//     name: 'Hoplites',
//     advantageOver: ['HeavyCavalry', 'LightCavalry'],
//     vulnerableAgainst: ['Archers', 'Peltasts']
//   }
//   let unit3 = {
//     name: 'Archers',
//     advantageOver: ['Hoplites', 'Pikemen'],
//     vulnerableAgainst: ['HeavyCavalry', 'LightCavalry']
//   }
//   let enemy1 = {
//     name: 'LightCavalry'
//   }
//   let enemy2 = {
//     name: 'Hoplites'
//   }
//   let enemy3 = {
//     name: 'Pikemen'
//   }
//
//   playerUnits.push(enemy1);
//   playerUnits.push(enemy2);
//   playerUnits.push(enemy3);
//
//
//   describe('calculateUnitsToBeware', function() {
//     it('unit1 has to beware 2 units', function() {
//       let vulnerabilities = calculateUnitsToBeware(unit1);
//       assert.equal(vulnerabilities, 2);
//     });
//     it('unit2 has to beware 0 units', function() {
//       let vulnerabilities = calculateUnitsToBeware(unit2);
//       assert.equal(vulnerabilities, 0);
//     });
//     it('unit3 has to beware 1 unit', function() {
//       let vulnerabilities = calculateUnitsToBeware(unit3);
//       assert.equal(vulnerabilities, 1);
//     });
//   });
// });
