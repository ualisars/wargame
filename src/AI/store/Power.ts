class Power {
  quantity = 0;
  totalHealth = 0;
  totalSpeed = 0;
  totalArmour = 0;
  totalMeleeDamage = 0;
  totalMissileDamage = 0;
  totalDiscipline = 0;
  totalMorale = 0;
  totalCondition = 0;

  incrementQuantity() {
    this.quantity += 1;
  }

  decrementQuantity() {
    this.quantity -= 1;
  }

  addHealth(health:number) {
    this.totalHealth += health;
  }

  addSpeed(speed:number) {
    this.totalSpeed += speed;
  }

  addArmour(armour:number) {
    this.totalArmour += armour;
  }

  addMeleeDamage(meleeDamage:number) {
    this.totalMeleeDamage += meleeDamage;
  }

  addMissileDamage(missileDamage:number) {
    this.totalMissileDamage += missileDamage;
  }

  addDiscipline(discipline:number) {
    this.totalDiscipline += discipline;
  }

  addMorale(morale:number) {
    this.totalMorale += morale;
  }

  addCondition(condition:number) {
    this.totalCondition += condition;
  }

  resetAllProperties() {
    this.quantity = 0;
    this.totalHealth = 0;
    this.totalSpeed = 0;
    this.totalArmour = 0;
    this.totalMeleeDamage = 0;
    this.totalMissileDamage = 0;
    this.totalDiscipline = 0;
    this.totalMorale = 0;
    this.totalCondition = 0;
  }

}

export default Power;
