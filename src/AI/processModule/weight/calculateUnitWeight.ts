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
    let percentage: number = 0;
    if(enemies.length === 0) {
        return;
    }
    if(confortableUnits / enemies.length >= 0.5) {
        percentage += 70;
    }
    else if(confortableUnits / enemies.length >= 0.3) {
        percentage += 50;
    }
    else if(confortableUnits / enemies.length >= 0.2) {
        percentage += 40;
    }
    if(uncomfortableUnits / enemies.length >= 0.5) {
        percentage -= 40;
    }
    else if(uncomfortableUnits / enemies.length >= 0.3) {
        percentage -= 30;
    }
    else if(uncomfortableUnits / enemies.length >= 0.2) {
        percentage -= 20;
    }
    unit.increaseWeightInPercentage(percentage);
}

const calculateComfortableUnitsNumber = (unit:Unit): number => {
    let enemies: Unit[];
    let comfortableUnitsNumber: number = 0;
    if(unit.controlBy === 'computer') {
        enemies = Object.assign([], revealedUnits);
    } 
    else if(unit.controlBy === 'player') {
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
    else if(unit.controlBy === 'player') {
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