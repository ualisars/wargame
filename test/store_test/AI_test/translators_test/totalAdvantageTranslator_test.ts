import {assert} from 'chai';
import {
    computerCompletelyAdvantage,
    computerAdvantage,
    computerDisadvantage,
    computerCompletelyDisadvantage
} from '../../../../src/store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    setComputerCompletelyAdvantageToTrue,
    setComputerAdvantageToTrue,
    setComputerDisadvantageToTrue,
    setComputerCompletelyDisadvantageToTrue
} from '../../../../src/store/AI/translators/totalAdvantage';

describe('translators store test', () => {

    describe('totalAdvantageTranslator test', () => {

        it('computerCompletelyAdvantage should be equal to true', (done) => {
            
            setComputerCompletelyAdvantageToTrue();
            
            assert.equal(computerCompletelyAdvantage, true);
            assert.equal(computerAdvantage, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });


        it('computerAdvantage should be equal to true', (done) => {
            
            setComputerAdvantageToTrue();
            
            assert.equal(computerCompletelyAdvantage, false);
            assert.equal(computerAdvantage, true);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });


        it('computerDisadvantage should be equal to true', (done) => {
            
            setComputerDisadvantageToTrue();
            
            assert.equal(computerCompletelyAdvantage, false);
            assert.equal(computerAdvantage, false);
            assert.equal(computerDisadvantage, true);
            assert.equal(computerCompletelyDisadvantage, false);

            done();

        });


        it('computerCompletelyDisadvantage should be equal to true', (done) => {
            
            setComputerCompletelyDisadvantageToTrue();
            
            assert.equal(computerCompletelyAdvantage, false);
            assert.equal(computerAdvantage, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, true);

            done();

        });

    });
});

