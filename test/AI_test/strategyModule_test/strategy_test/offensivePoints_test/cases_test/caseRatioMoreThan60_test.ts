import {expect} from 'chai';
import {
    caseRatioMoreThan60
} from '../../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/cases';
import {createUnit} from '../../../../../../src/unit/create';
import {removeAllUnits} from '../../../../../../src/store/unit/units';
import {removeUnit} from '../../../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../../../src/unit/types/Unit';

describe('strategy OffensivePoints test', () => {

    describe('caseRatioMoreThan60 test speedRatio > 0.7', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 600, 240, 'computer');
            computerUnit8 = createUnit('LightCavalry', 920, 240, 'computer');
            computerUnit9 = createUnit('LightCavalry', 920, 160, 'computer');

            playerUnit1 = createUnit('Archers', 840, 480, 'player');
            playerUnit2 = createUnit('Pikemen', 280, 440, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 320, 'player');
            playerUnit4 = createUnit('Pikemen', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Hoplites', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);
            removeUnit(computerUnit7);
            removeUnit(computerUnit8);
            removeUnit(computerUnit9);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });

        it('offensivePoints should be in range from 50 to 100', () => {


            let offensivePoints1: number = caseRatioMoreThan60();
            let offensivePoints2: number = caseRatioMoreThan60();
            let offensivePoints3: number = caseRatioMoreThan60();
            let offensivePoints4: number = caseRatioMoreThan60();
            let offensivePoints5: number = caseRatioMoreThan60();

            expect(offensivePoints1).to.be.least(50);
            expect(offensivePoints2).to.be.least(50);
            expect(offensivePoints3).to.be.least(50);
            expect(offensivePoints4).to.be.least(50);
            expect(offensivePoints5).to.be.least(50);

            expect(offensivePoints1).to.be.at.most(100);
            expect(offensivePoints2).to.be.at.most(100);
            expect(offensivePoints3).to.be.at.most(100);
            expect(offensivePoints4).to.be.at.most(100);
            expect(offensivePoints5).to.be.at.most(100);

        });


    });

    describe('caseRatioMoreThan60 test speedRatio >= 0.6 && speedRatio < 0.7', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Militia', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('Archers', 840, 480, 'player');
            playerUnit2 = createUnit('Pikemen', 280, 440, 'player');
            playerUnit3 = createUnit('Archers', 160, 320, 'player');
            playerUnit4 = createUnit('Archers', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Hoplites', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

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

        it('offensivePoints should be in range from 40 to 100', () => {


            let offensivePoints1: number = caseRatioMoreThan60();
            let offensivePoints2: number = caseRatioMoreThan60();
            let offensivePoints3: number = caseRatioMoreThan60();
            let offensivePoints4: number = caseRatioMoreThan60();
            let offensivePoints5: number = caseRatioMoreThan60();

            expect(offensivePoints1).to.be.least(40);
            expect(offensivePoints2).to.be.least(40);
            expect(offensivePoints3).to.be.least(40);
            expect(offensivePoints4).to.be.least(40);
            expect(offensivePoints5).to.be.least(40);

            expect(offensivePoints1).to.be.at.most(100);
            expect(offensivePoints2).to.be.at.most(100);
            expect(offensivePoints3).to.be.at.most(100);
            expect(offensivePoints4).to.be.at.most(100);
            expect(offensivePoints5).to.be.at.most(100);

        });


    });

    describe('caseRatioMoreThan60 test speedRatio >= 0.4 && speedRatio < 0.6', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('Militia', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('HeavyInfantry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('Archers', 840, 480, 'player');
            playerUnit2 = createUnit('Pikemen', 280, 440, 'player');
            playerUnit3 = createUnit('Militia', 160, 320, 'player');
            playerUnit4 = createUnit('Archers', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Hoplites', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

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

        it('offensivePoints should be in range from 30 to 95', () => {


            let offensivePoints1: number = caseRatioMoreThan60();
            let offensivePoints2: number = caseRatioMoreThan60();
            let offensivePoints3: number = caseRatioMoreThan60();
            let offensivePoints4: number = caseRatioMoreThan60();
            let offensivePoints5: number = caseRatioMoreThan60();

            expect(offensivePoints1).to.be.least(30);
            expect(offensivePoints2).to.be.least(30);
            expect(offensivePoints3).to.be.least(30);
            expect(offensivePoints4).to.be.least(30);
            expect(offensivePoints5).to.be.least(30);

            expect(offensivePoints1).to.be.at.most(95);
            expect(offensivePoints2).to.be.at.most(95);
            expect(offensivePoints3).to.be.at.most(95);
            expect(offensivePoints4).to.be.at.most(95);
            expect(offensivePoints5).to.be.at.most(95);

        });


    });

    describe('caseRatioMoreThan60 test speedRatio < 0.4', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('Pikemen', 480, 80, 'computer');
            computerUnit5 = createUnit('Pikemen', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 840, 480, 'player');
            playerUnit2 = createUnit('LightCavalry', 280, 440, 'player');
            playerUnit3 = createUnit('LightCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('LightCavalry', 840, 80, 'player');
            playerUnit5 = createUnit('LightCavalry', 0, 360, 'player');
            playerUnit6 = createUnit('Archers', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

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

        it('offensivePoints should be in range from 0 to 90', () => {


            let offensivePoints1: number = caseRatioMoreThan60();
            let offensivePoints2: number = caseRatioMoreThan60();
            let offensivePoints3: number = caseRatioMoreThan60();
            let offensivePoints4: number = caseRatioMoreThan60();
            let offensivePoints5: number = caseRatioMoreThan60();

            expect(offensivePoints1).to.be.least(0);
            expect(offensivePoints2).to.be.least(0);
            expect(offensivePoints3).to.be.least(0);
            expect(offensivePoints4).to.be.least(0);
            expect(offensivePoints5).to.be.least(0);

            expect(offensivePoints1).to.be.at.most(90);
            expect(offensivePoints2).to.be.at.most(90);
            expect(offensivePoints3).to.be.at.most(90);
            expect(offensivePoints4).to.be.at.most(90);
            expect(offensivePoints5).to.be.at.most(90);

        });


    });
});