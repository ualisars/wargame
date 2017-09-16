

class Unit {
  name: string;
  quantity: number;
  commanderPositionX: number;
  commanderPositionY: number;
  warriors: any[] = [];

  constructor(name:string, quantity:number, posX:number, posY:number) {
    this.name = name;
    this.quantity = quantity;
    this.commanderPositionX = posX;
    this.commanderPositionY = posX;
  }
  addWarriorToUnit(warrior:any) {
    this.warriors.push(warrior);
  }
}

export default Unit;
