class PlayerPower {
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

}

export default PlayerPower;
