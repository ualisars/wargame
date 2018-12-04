import { UNIT_ICON_WIDTH, UNIT_ICON_HEIGHT } from "../settings";
import { ctx } from "../../../../config/context";
import { loadImage } from "../../../../utils";
import { moveIconSrc, movementIcon, fightIcon, fightIconSrc, arrowIcon, attributesHeight, healthPointsHeight, iconHeight } from "./iconSettings";
import { Unit } from "../../../../unit";

export const drawUnitIcon = (x: number, y: number, unit: Unit, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    const initialX = x;
    let iconWidth = UNIT_ICON_WIDTH * k;
    ctx.strokeRect(x, y, iconWidth, UNIT_ICON_HEIGHT);
    drawMovementIcon(x, y, half);
    x += movementIcon.width * k;
    drawFightIcon(x, y, half);
    x += fightIcon.width * k;
    drawArrowIcon(x, y, half);
    x = initialX;
    y += attributesHeight;
    fillHealthPoints(x, y, half);
    y += healthPointsHeight;
    drawIcon(x, y, unit, half);
}

export const drawMovementIcon = (x: number, y: number, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    loadImage(moveIconSrc, (err: any, img: any) => {
        ctx.drawImage(img, x, y,  movementIcon.width * k, movementIcon.height);
    });
}

export const drawFightIcon = (x: number, y: number, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    loadImage(fightIconSrc, (err: any, img: any) => {
        ctx.drawImage(img, x, y,  fightIcon.width * k, fightIcon.height);
    });
}

export const drawArrowIcon = (x: number, y: number, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    ctx.strokeRect(x, y, arrowIcon.width * k, arrowIcon.height);
}

export const fillHealthPoints = (x: number, y: number, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, UNIT_ICON_WIDTH * k, healthPointsHeight);
}

export const drawIcon = (x: number, y: number, unit: Unit, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    loadImage(unit.imgSrc, (err: any, img: any) => {
        ctx.drawImage(img, x, y, UNIT_ICON_WIDTH * k, iconHeight);
    });
}