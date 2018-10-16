import {
    assert,
    expect
} from 'chai';
import AIMode from '../../../../src/store/AI/strategy/AIMode';

describe('Offensive Points Class test', () => {
    let mode: AIMode;
    before(() => {
        mode = new AIMode();
    });
    it("initially offensive points equal to 0", (done) => {
        assert.equal(mode.getOffensivePoints(), 0);
        done();
    });

    it("offensive points in defensive range", (done) => {
        mode.setDefensive();
        const points = mode.getOffensivePoints();
        const minRange = mode.defensiveRange.min; 
        const maxRange = mode.defensiveRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    });
    
    it("offensive points in passive range", (done) => {
        mode.setPassive();
        const points = mode.getOffensivePoints();
        const minRange = mode.passiveRange.min; 
        const maxRange = mode.passiveRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    }); 

    it("offensive points in neutral range", (done) => {
        mode.setNeutral();
        const points = mode.getOffensivePoints();
        const minRange = mode.neutralRange.min; 
        const maxRange = mode.neutralRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    }); 

    it("offensive points in neutral range", (done) => {
        mode.setNeutral();
        const points = mode.getOffensivePoints();
        const minRange = mode.neutralRange.min; 
        const maxRange = mode.neutralRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    }); 

    it("offensive points in active range", (done) => {
        mode.setActive();
        const points = mode.getOffensivePoints();
        const minRange = mode.activeRange.min; 
        const maxRange = mode.activeRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    }); 

    it("offensive points in aggressive range", (done) => {
        mode.setAggressive();
        const points = mode.getOffensivePoints();
        const minRange = mode.aggresiveRange.min; 
        const maxRange = mode.aggresiveRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    }); 

    it("offensive points in offensive range", (done) => {
        mode.setOffensive();
        const points = mode.getOffensivePoints();
        const minRange = mode.offensiveRange.min; 
        const maxRange = mode.offensiveRange.max;
        expect(points).to.be.at.least(minRange);
        expect(points).to.be.at.most(maxRange);
        done();
    });
});