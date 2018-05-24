import {assert} from 'chai';
import Strategy from '../../../../src/store/AI/strategy/Strategy';

describe('AI store test', () => {

    describe('Strategy test', () => {

        let strategy:Strategy;

        before(() => {
          strategy = new Strategy();
        });

        it('offensive points should become 30', (done) => {

            strategy.setOffensivePoints(30);
            assert.equal(strategy.getOffensivePoints(), 30);
            done();

        });

        it('defensive points should become 70', (done) => {

            strategy.setDefensivePoints(70);
            assert.equal(strategy.getDefensivePoints(), 70);
            done();
            
        });

        it('pace points should become 20', (done) => {

            strategy.setPacePoints(20);
            assert.equal(strategy.getPacePoints(), 20);
            done();
            
        });

        it('separation points should become 10', (done) => {

            strategy.setSeparationPoints(10);
            assert.equal(strategy.getSeparationPoints(), 10);
            done();
            
        });

        it('defensive points should become 50', (done) => {

            strategy.setDefensivePoints(50);
            assert.equal(strategy.getDefensivePoints(), 50);
            done();
            
        });

        it('pace points should become 40', (done) => {

            strategy.setPacePoints(40);
            assert.equal(strategy.getPacePoints(), 40);
            done();
            
        });
    });

});