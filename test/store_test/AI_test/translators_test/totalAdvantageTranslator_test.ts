import {assert} from 'chai';
import {
    computerSuperiority,
    computerAdvantage,
    equality,
    computerDisadvantage,
    computerCompletelyDisadvantage
} from '../../../../src/store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    setComputerSuperiority,   
    setComputerAdvantage,
    setEquality,
    setComputerDisadvantage,
    setComputerCompletelyDisadvantage,
    resetAllProperties
} from '../../../../src/store/AI/translators/totalAdvantage';

describe('translators store test', () => {

    describe('totalAdvantageTranslator test', () => {

        it('computerSuperiority should be true', (done) => {
            
            setComputerSuperiority();
            
            assert.equal(computerSuperiority, true);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });


        it('computerAdvantage should be true', (done) => {
            
            setComputerAdvantage();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, true);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });

        it('equality should be true', (done) => {
            
            setEquality();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, true);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });


        it('computerDisadvantage should be true', (done) => {
            
            setComputerDisadvantage();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, true);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });


        it('computerCompletelyDisadvantage should true', (done) => {
            
            setComputerCompletelyDisadvantage();
            
            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, true);

            done();

        });

    });
});

