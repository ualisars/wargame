import { Unit, calculateDamage, armourPenetration } from "../../../unit";

export const simulateFight = (unit: Unit, enemy: Unit) => {
    let attacks: number = 1;
    const unitHealthBeforeFight = unit.health;
    const enemyHealthBeforeFight = enemy.health;
    let unitHealthRemain: number = 100;
    let enemyHealthRemain: number = 100;
    let unitHealth = unit.health;
    let enemyHealth = enemy.health;
    while(unitHealth > 0 && enemyHealth > 0) {
        let unitDamage = calculateDamage(unit, unit.meleeDamage);
        let enemyDamage = calculateDamage(enemy, enemy.meleeDamage);
        unitHealth -= armourPenetration(enemyDamage, unit.armour);
        enemyHealth -= armourPenetration(unitDamage, enemy.armour);
        attacks += 1;
    }
    let unitPercentageRemain = Math.round(unitHealth * 100 / unitHealthBeforeFight);
    let enemyPercentageRemain = Math.round(enemyHealth * 100 / enemyHealthBeforeFight);
    unitHealthRemain = unitPercentageRemain >= 0 ? unitPercentageRemain : 0;
    enemyHealthRemain = enemyPercentageRemain >= 0 ? enemyPercentageRemain: 0;
    return {
        unitHealthRemain,
        enemyHealthRemain,
        unitHealth,
        enemyHealth,
        attacks
    }
} 