export let power = {
  quantity: 0,
  totalHealth: 0,
  totalSpeed: 0,
  totalArmour: 0,
  totalMeleeDamage: 0,
  totalMissileDamage: 0,
  totalDiscipline: 0,
  totalMorale: 0,
  totalCondition: 0
}

export const incrementQuantity = () => {
  power.quantity += 1;
}

export const decrementQuantity = () => {
  power.quantity -= 1;
}

export const addHealth = (health:number) => {
  power.totalHealth += health;
}

export const addSpeed = (speed:number) => {
  power.totalSpeed += speed;
}

export const addArmour = (armour:number) => {
  power.totalArmour += armour;
}

export const addMeleeDamage = (meleeDamage:number) => {
  power.totalMeleeDamage += meleeDamage;
}

export const addMissileDamage = (missileDamage:number) => {
  power.totalMissileDamage += missileDamage;
}

export const addDiscipline = (discipline:number) => {
  power.totalDiscipline += discipline;
}

export const addMorale = (morale:number) => {
  power.totalMorale += morale;
}

export const addCondition= (condition:number) => {
  power.totalCondition += condition;
}

export const resetAllProperties = () => {
  power.quantity = 0;
  power.totalHealth = 0;
  power.totalSpeed = 0;
  power.totalArmour = 0;
  power.totalMeleeDamage = 0;
  power.totalMissileDamage = 0;
  power.totalDiscipline = 0;
  power.totalMorale = 0;
  power.totalCondition = 0;
}
