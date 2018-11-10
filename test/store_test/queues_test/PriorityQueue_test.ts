import { assert } from 'chai';
import PriorityQueue from '../../../src/store/queues/PriorityQueue';
import Positions from '../../../src/store/AI/positions/Positions';
import { Unit, createUnit } from '../../../src/unit';
import { removeAllUnits } from '../../../src/store/unit/units';
import { removeUnit } from '../../../src/unit/remove';

describe('PriorityQueue Test', () => {
    let priorityQueue = new PriorityQueue();
    let unit1:Unit, unit2: Unit, unit3: Unit, unit4: Unit;
    let firstPositions = new Positions();
    let secondPositions = new Positions();
    let thirdPositions = new Positions();
    before(() => {
        removeAllUnits();
        unit1 = createUnit('Archers', 40, 40, 'computer');
        unit2 = createUnit('Pikemen', 320, 520, 'computer');
        unit3 = createUnit('Hoplites', 1120, 320, 'computer');
        unit4 = createUnit('HeavyCavalry', 120, 280, 'computer');

        firstPositions.addPosition(unit1.id, unit1.x, unit1.y);
        firstPositions.addPosition(unit2.id, unit2.x, unit2.y);
        firstPositions.addPosition(unit3.id, unit3.x, unit3.y);
        firstPositions.addPosition(unit4.id, unit4.x, unit4.y);
        priorityQueue.insert(300, firstPositions);

        secondPositions.addPosition(unit1.id, 400, 440);
        secondPositions.addPosition(unit2.id, unit2.x, unit2.y);
        secondPositions.addPosition(unit3.id, 160, 320);
        secondPositions.addPosition(unit4.id, 600, 200);
        priorityQueue.insert(240, secondPositions);

        thirdPositions.addPosition(unit1.id, 560, 160);
        thirdPositions.addPosition(unit2.id, 840, 320);
        thirdPositions.addPosition(unit3.id, 760, 80);
        thirdPositions.addPosition(unit4.id, 480, 200);
        priorityQueue.insert(280, thirdPositions);
    });
    after(() => {
       removeUnit(unit1);
       removeUnit(unit2);
       removeUnit(unit3);
       removeUnit(unit4);
    });
    describe("first position extraction test", () => {
        let effectivePositions: any;
        let positions: Positions;
        before(() => {
            effectivePositions = priorityQueue.extractMax();
            positions = effectivePositions.positions;
        });
        it("first position should be most effective", () => {
            assert.equal(effectivePositions.positionId, 1);
        });
        it("positions efficiency should be 300", (done) => {
            assert.equal(effectivePositions.efficiency, 300);
            done();
        });
        it("unit1 position should be 40, 40", (done) => {
            let position = positions.getPositionByUnitId(unit1.id);
            assert.equal(position.nodeX, 40);
            assert.equal(position.nodeY, 40);
            done();
        });
        it("unit2 position should be 320, 520", (done) => {
            let position = positions.getPositionByUnitId(unit2.id);
            assert.equal(position.nodeX, 320);
            assert.equal(position.nodeY, 520);
            done();
        });
        it("unit3 position should be 1120, 320", (done) => {
            let position = positions.getPositionByUnitId(unit3.id);
            assert.equal(position.nodeX, 1120);
            assert.equal(position.nodeY, 320);
            done();
        });
        it("unit4 position should be 120, 280", (done) => {
            let position = positions.getPositionByUnitId(unit4.id);
            assert.equal(position.nodeX, 120);
            assert.equal(position.nodeY, 280);
            done();
        });       
    });

    describe("second position extraction test", () => {
        let effectivePositions: any;
        let positions: Positions;
        before(() => {
            effectivePositions = priorityQueue.extractMax();
            positions = effectivePositions.positions;
        });
        it("positions efficiency should be 280", (done) => {
            assert.equal(effectivePositions.efficiency, 280);
            done();
        });
        it("third position should be second by efficiency", () => {
            assert.equal(effectivePositions.positionId, 3);
        });
        it("unit1 position should be 560, 160", (done) => {
            let position = positions.getPositionByUnitId(unit1.id);
            assert.equal(position.nodeX, 560);
            assert.equal(position.nodeY, 160);
            done();
        });
        it("unit2 position should be 840 320", (done) => {
            let position = positions.getPositionByUnitId(unit2.id);
            assert.equal(position.nodeX, 840);
            assert.equal(position.nodeY, 320);
            done();
        });
        it("unit3 position should be 760, 80", (done) => {
            let position = positions.getPositionByUnitId(unit3.id);
            assert.equal(position.nodeX, 760);
            assert.equal(position.nodeY, 80);
            done();
        });
        it("unit4 position should be 480, 200", (done) => {
            let position = positions.getPositionByUnitId(unit4.id);
            assert.equal(position.nodeX, 480);
            assert.equal(position.nodeY, 200);
            done();
        });
    });

    describe("third position extraction test", () => {
        let effectivePositions: any;
        let positions: Positions;
        before(() => {
            effectivePositions = priorityQueue.extractMax();
            positions = effectivePositions.positions;
        });
        it("positions efficiency should be 240", (done) => {
            assert.equal(effectivePositions.efficiency, 240);
            done();
        });
        it("second position should be third by efficiency", () => {
            assert.equal(effectivePositions.positionId, 2);
        });
        it("unit1 position should be 400, 400", (done) => {
            let position = positions.getPositionByUnitId(unit1.id);
            assert.equal(position.nodeX, 400);
            assert.equal(position.nodeY, 440);
            done();
        });
        it("unit2 position should be the same", (done) => {
            let position = positions.getPositionByUnitId(unit2.id);
            assert.equal(position.nodeX, unit2.x);
            assert.equal(position.nodeY, unit2.y);
            done();
        });
        it("unit3 position should be 160, 320", (done) => {
            let position = positions.getPositionByUnitId(unit3.id);
            assert.equal(position.nodeX, 160);
            assert.equal(position.nodeY, 320);
            done();
        });
        it("unit4 position should be 600, 200", (done) => {
            let position = positions.getPositionByUnitId(unit4.id);
            assert.equal(position.nodeX, 600);
            assert.equal(position.nodeY, 200);
            done();
        });
    });

    describe("fourth position extraction test", () => {
        it("priority queue should be empty", () => {
            assert.equal(priorityQueue.isEmpty(), true);
        });
    });
});