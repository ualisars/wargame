import {expect} from 'chai';
import {translateAll} from '../../../../../../src/AI/processModule/translators';
import {caseAdvantage} from '../../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/cases/caseAdvantage';
import {createUnit} from '../../../../../../src/unit/create';
import {removeAllUnits} from '../../../../../../src/store/unit/units';
import {computerMode} from '../../../../../../src/store/AI/strategy/computerMode';
import {removeUnit} from '../../../../../../src/unit/remove';
import {addToRevealedUnits} from '../../../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../../../src/unit/types/Unit';

describe('strategy OffensivePoints test', () => {

    describe('caseAdvantage (computerLotsOfCavalry, playerLotsOfArchers and no spearmen)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('LightInfantry', 920, 160, 'computer');

            playerUnit1 = createUnit('Archers', 840, 480, 'player');
            playerUnit2 = createUnit('Archers', 280, 440, 'player');
            playerUnit3 = createUnit('Archers', 160, 320, 'player');
            playerUnit4 = createUnit('Archers', 840, 80, 'player');
            playerUnit5 = createUnit('Scouts', 0, 360, 'player');
            playerUnit6 = createUnit('Militia', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();
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

        it('offensivePoints should be in offensive range', () => {
            caseAdvantage();
            let range = computerMode.offensiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfCavalry, playerLotsOfArchers and has spearmen)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('LightInfantry', 920, 160, 'computer');

            playerUnit1 = createUnit('Archers', 840, 480, 'player');
            playerUnit2 = createUnit('Archers', 280, 440, 'player');
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

            translateAll();
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

        it('offensivePoints should be in active range', () => {
            caseAdvantage();
            let range = computerMode.activeRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfCavalry, spearmen and noArchers, playerLotsOfCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('LightInfantry', 920, 160, 'computer');

            playerUnit1 = createUnit('LightCavalry', 840, 480, 'player');
            playerUnit2 = createUnit('LightCavalry', 280, 440, 'player');
            playerUnit3 = createUnit('LightCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('LightCavalry', 840, 80, 'player');
            playerUnit5 = createUnit('LightCavalry', 0, 360, 'player');
            playerUnit6 = createUnit('LightCavalry', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in aggressive range', () => {
            caseAdvantage();
            let range = computerMode.aggresiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfCavalry and no archers, playerLotsOfCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('LightInfantry', 920, 160, 'computer');

            playerUnit1 = createUnit('LightCavalry', 840, 480, 'player');
            playerUnit2 = createUnit('LightCavalry', 280, 440, 'player');
            playerUnit3 = createUnit('LightCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('LightCavalry', 840, 80, 'player');
            playerUnit5 = createUnit('LightCavalry', 0, 360, 'player');
            playerUnit6 = createUnit('LightCavalry', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be aggressive range', () => {
            caseAdvantage();
            let range = computerMode.aggresiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfCavalry and hasArchers, playerLotsOfCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');
            computerUnit7 = createUnit('Archers', 600, 240, 'computer');
            computerUnit8 = createUnit('Archers', 920, 240, 'computer');
            computerUnit9 = createUnit('Archers', 920, 160, 'computer');

            playerUnit1 = createUnit('LightCavalry', 840, 480, 'player');
            playerUnit2 = createUnit('LightCavalry', 280, 440, 'player');
            playerUnit3 = createUnit('LightCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('LightCavalry', 840, 80, 'player');
            playerUnit5 = createUnit('LightCavalry', 0, 360, 'player');
            playerUnit6 = createUnit('LightCavalry', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in active range', () => {
            caseAdvantage();
            let range = computerMode.activeRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (speedAdvantage, computerLotsOfInfantry, playerLotsOfInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('Militia', 280, 200, 'computer');
            computerUnit4 = createUnit('Militia', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 600, 240, 'computer');
            computerUnit8 = createUnit('Militia', 920, 240, 'computer');
            computerUnit9 = createUnit('Militia', 920, 160, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 840, 480, 'player');
            playerUnit2 = createUnit('HeavyInfantry', 280, 440, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 320, 'player');
            playerUnit4 = createUnit('HeavyInfantry', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Pikemen', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in offensive range', () => {
            caseAdvantage();
            let range = computerMode.offensiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfInfantry and hasArchers, playerLotsOfInfantry and hasCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('Militia', 280, 200, 'computer');
            computerUnit4 = createUnit('Militia', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');
            computerUnit7 = createUnit('Archers', 600, 240, 'computer');
            computerUnit8 = createUnit('Archers', 920, 240, 'computer');
            computerUnit9 = createUnit('Militia', 920, 160, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 840, 480, 'player');
            playerUnit2 = createUnit('HeavyInfantry', 280, 440, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('HeavyInfantry', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Pikemen', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in neutral mode', () => {
            caseAdvantage();
            let range = computerMode.neutralRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfInfantry, playerLotsOfInfantry and hasCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('Militia', 280, 200, 'computer');
            computerUnit4 = createUnit('Militia', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');
            computerUnit7 = createUnit('HeavyInfantry', 600, 240, 'computer');
            computerUnit8 = createUnit('HeavyInfantry', 920, 240, 'computer');
            computerUnit9 = createUnit('Militia', 920, 160, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 840, 480, 'player');
            playerUnit2 = createUnit('HeavyInfantry', 280, 440, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('HeavyInfantry', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Pikemen', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in active range', () => {
            caseAdvantage();
            let range = computerMode.activeRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfInfantry, playerLotsOfInfantry, noSpeedAdvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('HeavyInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('HeavyInfantry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');
            computerUnit7 = createUnit('Hoplites', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('Hoplites', 920, 160, 'computer');

            playerUnit1 = createUnit('LightInfantry', 840, 480, 'player');
            playerUnit2 = createUnit('LightInfantry', 280, 440, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 320, 'player');
            playerUnit4 = createUnit('LightInfantry', 840, 80, 'player');
            playerUnit5 = createUnit('Militia', 0, 360, 'player');
            playerUnit6 = createUnit('Militia', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in aggressive range', () => {
            caseAdvantage();
            let range = computerMode.aggresiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfSkirmishers, playerLotsOfSpearmen and noCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Archers', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');
            computerUnit7 = createUnit('Archers', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('Hoplites', 920, 160, 'computer');

            playerUnit1 = createUnit('LightInfantry', 840, 480, 'player');
            playerUnit2 = createUnit('Hoplites', 280, 440, 'player');
            playerUnit3 = createUnit('Hoplites', 160, 320, 'player');
            playerUnit4 = createUnit('Hoplites', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Hoplites', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in offensive range', () => {
            caseAdvantage();
            let range = computerMode.offensiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (computerLotsOfSkirmishers, playerLotsOfCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Archers', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');
            computerUnit7 = createUnit('Hoplites', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('Hoplites', 920, 160, 'computer');

            playerUnit1 = createUnit('LightCavalry', 840, 480, 'player');
            playerUnit2 = createUnit('LightCavalry', 280, 440, 'player');
            playerUnit3 = createUnit('LightCavalry', 160, 320, 'player');
            playerUnit4 = createUnit('LightCavalry', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('LightCavalry', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in defensive range', () => {
            caseAdvantage();
            let range = computerMode.defensiveRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });

    describe('caseAdvantage (other cases)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Archers', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');
            computerUnit7 = createUnit('HeavyInfantry', 600, 240, 'computer');
            computerUnit8 = createUnit('Hoplites', 920, 240, 'computer');
            computerUnit9 = createUnit('Hoplites', 920, 160, 'computer');

            playerUnit1 = createUnit('LightCavalry', 840, 480, 'player');
            playerUnit2 = createUnit('Hoplites', 280, 440, 'player');
            playerUnit3 = createUnit('Hoplites', 160, 320, 'player');
            playerUnit4 = createUnit('Hoplites', 840, 80, 'player');
            playerUnit5 = createUnit('Hoplites', 0, 360, 'player');
            playerUnit6 = createUnit('Hoplites', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateAll();

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

        it('offensivePoints should be in random range', () => {
            caseAdvantage();
            let range = computerMode.randomRange;
            let offensivePoints: number = computerMode.getOffensivePoints();
            expect(offensivePoints).to.be.least(range.min);
            expect(offensivePoints).to.be.at.most(range.max);
        });
    });
}); 