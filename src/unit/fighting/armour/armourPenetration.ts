export const armourPenetration = (damage:number, armour:number) => {
  let random = Math.random();
  if(damage > armour) {
    if(random < 0.10) {
      return damage;
    }
    else if(damage < 0.1) {
      return Math.round(damage - (armour / 2));
    }
    else {
      return damage - armour;
    }
  }
  else if(damage <= armour) {
    if(random < 0.2) {
      return 1;
    } else {
      return 0;
    }
  }
}
