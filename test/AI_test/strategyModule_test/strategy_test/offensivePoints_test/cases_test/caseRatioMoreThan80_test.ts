/*
import {expect} from 'chai';
import {
    caseRatioMoreThan80
} from '../../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/cases';
import {createUnit} from '../../../../../../src/unit/create';
import {removeAllUnits} from '../../../../../../src/store/unit/units';
import {removeUnit} from '../../../../../../src/unit/remove';
import Unit from '../../../../../../src/unit/types/Unit';

describe('strategy OffensivePoints test', () => {

    describe('first caseRatioMoreThan80 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('HeavyInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('HeavyInfantry', 480, 160, 'computer');
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

        it('offensivePoints should be in range of 80 to 84', () => {

            let offensivePoints1: number = caseRatioMoreThan80();
            let offensivePoints2: number = caseRatioMoreThan80();
            let offensivePoints3: number = caseRatioMoreThan80();
            let offensivePoints4: number = caseRatioMoreThan80();
            let offensivePoints5: number = caseRatioMoreThan80();

            expect(offensivePoints1).to.be.least(80);
            expect(offensivePoints2).to.be.least(80);
            expect(offensivePoints3).to.be.least(80);
            expect(offensivePoints4).to.be.least(80);
            expect(offensivePoints5).to.be.least(80);

            expect(offensivePoints1).to.be.at.most(84);
            expect(offensivePoints2).to.be.at.most(84);
            expect(offensivePoints3).to.be.at.most(84);
            expect(offensivePoints4).to.be.at.most(84);
            expect(offensivePoints5).to.be.at.most(84);

        });
    });


    describe('second caseRatioMoreThan80 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;


        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('Militia', 480, 80, 'computer');
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

        it('offensivePoints should be in range of 80 to 85', () => {

            let offensivePoints1: number = caseRatioMoreThan80();
            let offensivePoints2: number = caseRatioMoreThan80();
            let offensivePoints3: number = caseRatioMoreThan80();
            let offensivePoints4: number = caseRatioMoreThan80();
            let offensivePoints5: number = caseRatioMoreThan80();

            expect(offensivePoints1).to.be.least(80);
            expect(offensivePoints2).to.be.least(80);
            expect(offensivePoints3).to.be.least(80);
            expect(offensivePoints4).to.be.least(80);
            expect(offensivePoints5).to.be.least(80);

            expect(offensivePoints1).to.be.at.most(85);
            expect(offensivePoints2).to.be.at.most(85);
            expect(offensivePoints3).to.be.at.most(85);
            expect(offensivePoints4).to.be.at.most(85);
            expect(offensivePoints5).to.be.at.most(85);

        });
    });

    describe('third caseRatioMoreThan80 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;


        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
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

        it('offensivePoints should be in range of 80 to 90', () => {

            let offensivePoints1: number = caseRatioMoreThan80();
            let offensivePoints2: number = caseRatioMoreThan80();
            let offensivePoints3: number = caseRatioMoreThan80();
            let offensivePoints4: number = caseRatioMoreThan80();
            let offensivePoints5: number = caseRatioMoreThan80();

            expect(offensivePoints1).to.be.least(80);
            expect(offensivePoints2).to.be.least(80);
            expect(offensivePoints3).to.be.least(80);
            expect(offensivePoints4).to.be.least(80);
            expect(offensivePoints5).to.be.least(80);

            expect(offensivePoints1).to.be.at.most(90);
            expect(offensivePoints2).to.be.at.most(90);
            expect(offensivePoints3).to.be.at.most(90);
            expect(offensivePoints4).to.be.at.most(90);
            expect(offensivePoints5).to.be.at.most(90);

        });
    });

    describe('fourth caseRatioMoreThan80 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('HeavyInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
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

        it('offensivePoints should be in range of 80 to 84', () => {

            let offensivePoints1: number = caseRatioMoreThan80();
            let offensivePoints2: number = caseRatioMoreThan80();
            let offensivePoints3: number = caseRatioMoreThan80();
            let offensivePoints4: number = caseRatioMoreThan80();
            let offensivePoints5: number = caseRatioMoreThan80();

            expect(offensivePoints1).to.be.least(80);
            expect(offensivePoints2).to.be.least(80);
            expect(offensivePoints3).to.be.least(80);
            expect(offensivePoints4).to.be.least(80);
            expect(offensivePoints5).to.be.least(80);

            expect(offensivePoints1).to.be.at.most(84);
            expect(offensivePoints2).to.be.at.most(84);
            expect(offensivePoints3).to.be.at.most(84);
            expect(offensivePoints4).to.be.at.most(84);
            expect(offensivePoints5).to.be.at.most(84);

        });
    });

    describe('fifth caseRatioMoreThan80 test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Hoplites', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
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

        it('offensivePoints should be in range of 80 to 84', () => {

            let offensivePoints1: number = caseRatioMoreThan80();
            let offensivePoints2: number = caseRatioMoreThan80();
            let offensivePoints3: number = caseRatioMoreThan80();
            let offensivePoints4: number = caseRatioMoreThan80();
            let offensivePoints5: number = caseRatioMoreThan80();

            expect(offensivePoints1).to.be.least(80);
            expect(offensivePoints2).to.be.least(80);
            expect(offensivePoints3).to.be.least(80);
            expect(offensivePoints4).to.be.least(80);
            expect(offensivePoints5).to.be.least(80);

            expect(offensivePoints1).to.be.at.most(84);
            expect(offensivePoints2).to.be.at.most(84);
            expect(offensivePoints3).to.be.at.most(84);
            expect(offensivePoints4).to.be.at.most(84);
            expect(offensivePoints5).to.be.at.most(84);

        });
    });

});

*/