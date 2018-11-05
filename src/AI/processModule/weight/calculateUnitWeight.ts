import Unit from '../../../unit/types/Unit';
import { computerUnits, playerUnits } from '../../../store/unit/units';
import { revealedUnits } from '../../../store/AI/enemies/revealedEnemies';

export const calculateUnitWeight = (unit:Unit) => {
    let enemies: Unit[];
    if(unit.controlBy === 'computer') {
        enemies = Object.assign([], playerUnits);
    } 
    else if(unit.controlBy === 'player') {
        enemies = Object.assign([], computerUnits);
    }
    const confortableUnits = calculateComfortableUnitsNumber(unit);
    const uncomfortableUnits = calculateUncomfortableUnitsNumber(unit);
    if(enemies.length / confortableUnits >= 0.5) {
        unit.increaseWeightInPercentage(50);
    }
    else if(enemies.length / confortableUnits >= 0.3) {
        unit.increaseWeightInPercentage(30);
    }
    if(enemies.length / uncomfortableUnits >= 0.5) {
        unit.increaseWeightInPercentage(-50);
    }
    else if(enemies.length / uncomfortableUnits >= 0.3) {
        unit.increaseWeightInPercentage(-20);
    }
}

const calculateComfortableUnitsNumber = (unit:Unit): number => {
    let enemies: Unit[];
    let comfortableUnitsNumber: number = 0;
    if(unit.controlBy === 'computer') {
        enemies = Object.assign([], revealedUnits);
    } 
    else if(unit.controlBy == 'player') {
        enemies = Object.assign([], computerUnits);
    }
    for(let enemy of enemies) {
        for(let confortableUnit of unit.advantageOver) {
            if(enemy.name === confortableUnit) {
                comfortableUnitsNumber += 1;
                break;
            }
        }
    }
    return comfortableUnitsNumber;
}

const calculateUncomfortableUnitsNumber = (unit: Unit): number => {
    let enemies: Unit[];
    let unconfortableUnitsNumber: number = 0;
    if(unit.controlBy === 'computer') {
        enemies = Object.assign([], revealedUnits);
    } 
    else if(unit.controlBy == 'player') {
        enemies = Object.assign([], computerUnits);
    }
    for(let enemy of enemies) {
        for(let confortableUnit of unit.vulnerableAgainst) {
            if(enemy.name === confortableUnit) {
                unconfortableUnitsNumber += 1;
                break;
            }
        }
    }
    return unconfortableUnitsNumber;
}