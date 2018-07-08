import {assert} from 'chai';
import {
    meleeSuperiority,
    meleeAdvantage,
    equalMelee,
    meleeDisadvantage,
    meleeCompleteDisadvantage
} from '../../../../src/store/AI/translators/meleeTranslator/meleeTranslatorStore';
import {
    setMeleeSuperiority,
    setMeleeAdvantage,
    setEqualMelee,
    setMeleeDisadvantage,
    setMeleeCompleteDisadvantage
} from '../../../../src/store/AI/translators/meleeTranslator';

describe('translators store test', () => {

    describe('meleeTranslatorStore test', () => {

        it('meleeSuperiority is true', (done) => {
            
            setMeleeSuperiority();

            assert.equal(meleeSuperiority, true);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, false);

            done();
        });

        it('meleeAdvantage is true', (done) => {
            
            setMeleeAdvantage();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, true);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, false);

            done();
        });

        it('equalMelee is true', (done) => {
            
            setEqualMelee();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, true);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, false);

            done();
        });

        it('meleeDisadvantage is true', (done) => {
            
            setMeleeDisadvantage();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, true);
            assert.equal(meleeCompleteDisadvantage, false);

            done();
        });

        it('meleeCompleteDisadvantage is true', (done) => {
            
            setMeleeCompleteDisadvantage();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, true);

            done();
        });
    });
});