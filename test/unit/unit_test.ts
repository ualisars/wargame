// import { expect, should, assert} from 'chai';
// import Unit from '../../src/unit/types/Unit';
//
// let unit1 = new Unit('unit1', 100, 100, 5);
// let opponentUnit1 = new Unit('opponentUnit1', 200, 100, 5, 'computer');
// let opponentUnit2 = new Unit('opponentUnit2', 400, 100, 5, 'computer');
//
// const isUnitInFightAgainst = (allyUnit:any, opponentUnitName:string) => {
//   let found = false;
//   for(let name of allyUnit.figthAgainst) {
//     if(opponentUnitName === name) {
//       found = true;
//     }
//   }
//   return found;
// }
//
// describe('Unit Fight tests', function() {
//   describe('addUnitIntoFightAgainst', function() {
//     it(`opponentUnit1 should be in unit1's fight against array`, function() {
//       unit1.addUnitIntoFightAgainst(opponentUnit1.name);
//       let isOpponentUnit1InArray = isUnitInFightAgainst(unit1, opponentUnit1.name);
//       assert.equal(true, isOpponentUnit1InArray);
//     });
//     it(`opponentUnit12 should be in unit1's fight against array`, function() {
//       unit1.addUnitIntoFightAgainst(opponentUnit2.name);
//       let isOpponentUnit2InArray = isUnitInFightAgainst(unit1, opponentUnit2.name);
//       assert.equal(true, isOpponentUnit2InArray);
//     });
//   });
// });
