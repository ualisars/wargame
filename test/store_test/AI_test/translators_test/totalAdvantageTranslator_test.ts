import {assert} from 'chai';
import {
    computerCompletelyAdvantage,
    computerAdvantage,
    computerDisadvantage,
    computerCompletelyDisadvantage
} from '../../../../src/store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    setComputerCompletelyAdvantageToTrue,
    setComputerCompletelyAdvantageToFalse,
    setComputerAdvantageToTrue,
    setComputerAdvantageToFalse,
    setComputerDisadvantageToTrue,
    setComputerDisadvantageToFalse,
    setComputerCompletelyDisadvantageToTrue,
    setComputerCompletelyDisadvantageToFalse
} from '../../../../src/store/AI/translators/totalAdvantage';

describe('Translators store test', () => {

    describe('totalAdvantageTranslator test', () => {

        it('computerCompletelyAdvantage should be equal to true', (done) => {
            
            setComputerCompletelyAdvantageToTrue();
            
            assert.equal(computerCompletelyAdvantage, true);

            done();

        });

        it('computerCompletelyAdvantage should be equal to false', (done) => {
            
            setComputerCompletelyAdvantageToFalse();
            
            assert.equal(computerCompletelyAdvantage, false);

            done();

        });

        it('computerAdvantage should be equal to true', (done) => {
            
            setComputerAdvantageToTrue();
            
            assert.equal(computerAdvantage, true);

            done();

        });

        it('computerAdvantage should be equal to false', (done) => {
            
            setComputerAdvantageToFalse();
            
            assert.equal(computerAdvantage, false);

            done();

        });

        it('computerDisadvantage should be equal to true', (done) => {
            
            setComputerDisadvantageToTrue();
            
            assert.equal(computerDisadvantage, true);

            done();

        });

        it('computerDisadvantage should be equal to false', (done) => {
            
            setComputerDisadvantageToFalse();
            
            assert.equal(computerDisadvantage, false);

            done();

        });

        it('computerCompletelyDisadvantage should be equal to true', (done) => {
            
            setComputerCompletelyDisadvantageToTrue();
            
            assert.equal(computerCompletelyDisadvantage, true);

            done();

        });

        it('computerCompletelyDisadvantage should be equal to false', (done) => {
            
            setComputerCompletelyDisadvantageToFalse();
            
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });

    });
});

