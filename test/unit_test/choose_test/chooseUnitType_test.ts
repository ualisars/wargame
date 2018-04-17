import {assert} from 'chai';

import {
  chooseUnitType
} from '../../../src/unit/choose';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('Choose unit test', () => {

  describe('chooseUnitType test', () => {
    it('units should be archers', () => {
      let archers1:Unit = chooseUnitType('archers', 520, 120, 'computer');
      let archers2:Unit = chooseUnitType('Archers', 520, 120, 'computer');

      assert.equal(archers1.name, 'Archers');
      assert.equal(archers2.name, 'Archers');
    });

    it('units should be heavyCavalry', () => {
      let heavyCavalry1:Unit = chooseUnitType('heavyCavalry', 520, 120, 'computer');
      let heavyCavalry2:Unit = chooseUnitType('HeavyCavalry', 520, 120, 'computer');

      assert.equal(heavyCavalry1.name, 'HeavyCavalry');
      assert.equal(heavyCavalry2.name, 'HeavyCavalry');
    });

    it('units should be heavyInfantry', () => {
      let heavyInfantry1:Unit = chooseUnitType('heavyInfantry', 520, 120, 'computer');
      let heavyInfantry2:Unit = chooseUnitType('HeavyInfantry', 520, 120, 'computer');

      assert.equal(heavyInfantry1.name, 'HeavyInfantry');
      assert.equal(heavyInfantry2.name, 'HeavyInfantry');
    });

    it('units should be hoplites', () => {
      let hoplites1:Unit = chooseUnitType('hoplites', 520, 120, 'computer');
      let hoplites2:Unit = chooseUnitType('Hoplites', 520, 120, 'player');

      assert.equal(hoplites1.name, 'Hoplites');
      assert.equal(hoplites2.name, 'Hoplites');
    });

    it('units should be lightCavalry', () => {
      let lightCavalry1:Unit = chooseUnitType('lightCavalry', 520, 120, 'player');
      let lightCavalry2:Unit = chooseUnitType('LightCavalry', 520, 120, 'computer');

      assert.equal(lightCavalry1.name, 'LightCavalry');
      assert.equal(lightCavalry2.name, 'LightCavalry');
    });

    it('units should be lightInfantry', () => {
      let lightInfantry1:Unit = chooseUnitType('lightInfantry', 520, 120, 'player');
      let lightInfantry2:Unit = chooseUnitType('LightInfantry', 520, 120, 'player');

      assert.equal(lightInfantry1.name, 'LightInfantry');
      assert.equal(lightInfantry2.name, 'LightInfantry');
    });

    it('units should be militia', () => {
      let militia1:Unit = chooseUnitType('militia', 520, 120, 'computer');
      let militia2:Unit = chooseUnitType('Militia', 520, 120, 'computer');

      assert.equal(militia1.name, 'Militia');
      assert.equal(militia2.name, 'Militia');
    });

    it('units should be peltasts', () => {
      let peltasts1:Unit = chooseUnitType('peltasts', 520, 120, 'computer');
      let peltasts2:Unit = chooseUnitType('Peltasts', 520, 120, 'player');

      assert.equal(peltasts1.name, 'Peltasts');
      assert.equal(peltasts2.name, 'Peltasts');
    });

    it('units should be pikemen', () => {
      let pikemen1:Unit = chooseUnitType('pikemen', 520, 120, 'player');
      let pikemen2:Unit = chooseUnitType('Pikemen', 520, 120, 'computer');

      assert.equal(pikemen1.name, 'Pikemen');
      assert.equal(pikemen2.name, 'Pikemen');
    });

    it('units should be scouts', () => {
      let scouts1:Unit = chooseUnitType('scouts', 520, 120, 'player');
      let scouts2:Unit = chooseUnitType('Scouts', 520, 120, 'player');

      assert.equal(scouts1.name, 'Scouts');
      assert.equal(scouts2.name, 'Scouts');
    });
  });
});
