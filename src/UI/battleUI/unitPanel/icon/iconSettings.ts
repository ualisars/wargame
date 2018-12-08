import { UNIT_ICON_HEIGHT } from "../settings";

export const attributesHeight: number = 20;
export const healthPointsHeight: number = 10;
export const iconHeight: number = UNIT_ICON_HEIGHT - (attributesHeight + healthPointsHeight);
export const moveIconSrc: string = "./src/img/icons/MoveIcon.png";
export const fightIconSrc: string = "./src/img/icons/Swords.png";
export const swordIconSrc: string = "./src/img/units/icons/sword.png"
export const movementIcon: any = {
    width: 30,
    height: attributesHeight
}
export const fightIcon: any = {
    width: 40,
    height: attributesHeight
}
export const arrowIcon: any = {
    width: 30,
    height: attributesHeight
}