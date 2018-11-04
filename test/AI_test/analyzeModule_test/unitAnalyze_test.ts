import {assert} from 'chai';
import {createUnit} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';
import {isUnitInArray} from '../../../src/utils/unit/general';
import {
    calculateUnitTypes
} from '../../../src/AI/analyzeModule/unitAnalyze';

describe('AI unitAnalyze module test', () => {

    describe('calculateUnitTypes test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });


        it('computer should have 2 cavalry, 1 skirmisher, 1 light infantry, 1 spearmen and 3 infantry', () => {
            let computerTypes:any = calculateUnitTypes();
            assert.equal(computerTypes.infantry, 3);
            assert.equal(computerTypes.spearmen, 1);
            assert.equal(computerTypes.lightInfantry, 1);
            assert.equal(computerTypes.heavyInfantry, 0);
            assert.equal(computerTypes.scouts, 1);
            assert.equal(computerTypes.skirmishers, 1);
            assert.equal(computerTypes.cavalry, 2);

        });

        it('player should have 1 heavyInfantry, 2 light infantry, 2 scouts and 1 spearmen', () => {
            let playerTypes:any = calculateUnitTypes('player');

            assert.equal(playerTypes.infantry, 6);
            assert.equal(playerTypes.spearmen, 1);
            assert.equal(playerTypes.lightInfantry, 2);
            assert.equal(playerTypes.heavyInfantry, 1);
            assert.equal(playerTypes.scouts, 2);
            assert.equal(playerTypes.skirmishers, 0);
            assert.equal(playerTypes.cavalry, 0);
            
        });

    });
});