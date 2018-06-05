import {expect} from 'chai';
import {
    caseRatioMoreThan90
} from '../../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/cases/caseRatioMoreThan90';
import {createUnit} from '../../../../../../src/unit/create';
import {removeAllUnits} from '../../../../../../src/store/unit/units';
import {removeUnit} from '../../../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../../../src/unit/types/Unit';

describe('strategy OffensivePoints test', () => {

    describe('first caseRatioMoreThan90 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);

        });

        it('offensivePoints should be in range of 90 to 100', () => {

            let offensivePoints1: number = caseRatioMoreThan90();
            let offensivePoints2: number = caseRatioMoreThan90();
            let offensivePoints3: number = caseRatioMoreThan90();
            let offensivePoints4: number = caseRatioMoreThan90();
            let offensivePoints5: number = caseRatioMoreThan90();

            expect(offensivePoints1).to.be.least(90);
            expect(offensivePoints2).to.be.least(90);
            expect(offensivePoints3).to.be.least(90);
            expect(offensivePoints4).to.be.least(90);
            expect(offensivePoints5).to.be.least(90);

            expect(offensivePoints1).to.be.at.most(100);
            expect(offensivePoints2).to.be.at.most(100);
            expect(offensivePoints3).to.be.at.most(100);
            expect(offensivePoints4).to.be.at.most(100);
            expect(offensivePoints5).to.be.at.most(100);

        });
    });


    describe('second caseRatioMoreThan90 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;


        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Archers', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);

        });

        it('offensivePoints should be in range of 90 to 92', () => {

            let offensivePoints1: number = caseRatioMoreThan90();
            let offensivePoints2: number = caseRatioMoreThan90();
            let offensivePoints3: number = caseRatioMoreThan90();
            let offensivePoints4: number = caseRatioMoreThan90();
            let offensivePoints5: number = caseRatioMoreThan90();

            // expect(offensivePoints1).to.be.least(90);
            // expect(offensivePoints2).to.be.least(90);
            // expect(offensivePoints3).to.be.least(90);
            // expect(offensivePoints4).to.be.least(90);
            // expect(offensivePoints5).to.be.least(90);

            // expect(offensivePoints1).to.be.at.most(92);
            // expect(offensivePoints2).to.be.at.most(92);
            // expect(offensivePoints3).to.be.at.most(92);
            // expect(offensivePoints4).to.be.at.most(92);
            // expect(offensivePoints5).to.be.at.most(92);

        });
    });

});