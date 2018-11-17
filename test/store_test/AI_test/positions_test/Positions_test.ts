import { assert } from 'chai';
import Positions from "../../../../src/store/AI/positions/Positions";
import { Unit, createUnit } from '../../../../src/unit';
import { removeAllUnits } from '../../../../src/store/unit/units';
import { removeUnit } from '../../../../src/unit/remove';
import { getNodeFromMap } from '../../../../src/utils';

describe('AI store Positions test', () => {
    let unit1:Unit, unit2: Unit, unit3: Unit, unit4: Unit;
    let positions = new Positions();
    before(() => {
        removeAllUnits();
        unit1 = createUnit('Archers', 40, 40, 'computer');
        unit2 = createUnit('Pikemen', 320, 520, 'computer');
        unit3 = createUnit('Hoplites', 1120, 320, 'computer');
        unit4 = createUnit('HeavyCavalry', 120, 280, 'computer');
    });
    after(() => {
       removeUnit(unit1);
       removeUnit(unit2);
       removeUnit(unit3);
       removeUnit(unit4);
    });
    it("unit1 position should be 400, 440", (done) => {
        let node = getNodeFromMap(400, 440);
        positions.addPosition(unit1.id, node);
        const position = positions.getPositionByUnitId(unit1.id);
        assert.equal(position.x, 400);
        assert.equal(position.y, 440);
        done();
    });
    it("unit2 position should remain the same", (done) => {
        positions.addPosition(unit2.id, unit2.currentNode);
        const position = positions.getPositionByUnitId(unit2.id);
        assert.equal(position.x, unit2.x);
        assert.equal(position.y, unit2.y);
        done();
    });
    it("unit3 position should be 160, 320", (done) => {
        let node = getNodeFromMap(160, 320);
        positions.addPosition(unit3.id, node);
        const position = positions.getPositionByUnitId(unit3.id);
        assert.equal(position.x, 160);
        assert.equal(position.y, 320);
        done();
    });
    it("unit4 position should be 600, 200", (done) => {
        let node = getNodeFromMap(600, 200);
        positions.addPosition(unit4.id, node);
        const position = positions.getPositionByUnitId(unit4.id);
        assert.equal(position.x, 600);
        assert.equal(position.y, 200);
        done();
    });
    it("unit1 should not have position", (done) => {
        positions.clearPositions();
        const position = positions.getPositionByUnitId(unit4.id);
        assert.equal(position, null);
        done();
    });
});