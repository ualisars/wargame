import {assert} from 'chai';
import {
    computerSuperiority,
    computerAdvantage,
    forceEquality,
    computerDisadvantage,
    computerCompleteDisadvantage
} from '../../../../src/store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    setComputerSuperiority,   
    setComputerAdvantage,
    setForceEquality,
    setComputerDisadvantage,
    setComputerCompleteDisadvantage,
    resetAllProperties
} from '../../../../src/store/AI/translators/totalAdvantage';

describe('translators store test', () => {

    describe('totalAdvantageTranslator test', () => {

        it('computerSuperiority should be true', (done) => {
            
            setComputerSuperiority();
            
            assert.equal(computerSuperiority, true);
            assert.equal(computerAdvantage, false);
            assert.equal(forceEquality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompleteDisadvantage, false);

            done();

        });


        it('computerAdvantage should be true', (done) => {
            
            setComputerAdvantage();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, true);
            assert.equal(forceEquality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompleteDisadvantage, false);

            done();

        });

        it('equality should be true', (done) => {
            
            setForceEquality();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(forceEquality, true);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompleteDisadvantage, false);

            done();

        });


        it('computerDisadvantage should be true', (done) => {
            
            setComputerDisadvantage();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(forceEquality, false);
            assert.equal(computerDisadvantage, true);
            assert.equal(computerCompleteDisadvantage, false);

            done();

        });


        it('computerCompleteDisadvantage should true', (done) => {
            
            setComputerCompleteDisadvantage();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(forceEquality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompleteDisadvantage, true);

            done();

        });

    });
});

