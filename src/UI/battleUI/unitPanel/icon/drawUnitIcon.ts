import { UNIT_ICON_WIDTH, UNIT_ICON_HEIGHT, UNIT_LEFT_PANEL_WIDTH, UNIT_PANEL_HEIGHT } from "../settings";
import { ctx } from "../../../../config/context";
import { movementIcon, fightIcon, fightIconSrc, arrowIcon, attributesHeight, healthPointsHeight, iconHeight } from "./iconSettings";
import { Unit } from "../../../../unit";
import { getUnitPositionInArray } from "../../../../utils/unit/general/generalUtils";
import { playerUnits } from "../../../../store/unit/units";
import { CANVAS_HEIGHT } from "../../../../config";
import { movementIconImage, fightIconImage, unitIconImages } from "../../../../store/images/unitIconImages";
import { currentlyChosenUnit } from "../../../../store/unit/currentlyChosenUnit";

export const drawUnitIcon = (unit: Unit, half: boolean = false) => {
    if(unit.controlBy === 'player') {
        let unitIndex = getUnitPositionInArray(unit.id, playerUnits) + 1;
        let startX = UNIT_LEFT_PANEL_WIDTH;
        let x = startX + (UNIT_ICON_WIDTH * unitIndex);
        let y = CANVAS_HEIGHT - UNIT_PANEL_HEIGHT;
        ctx.clearRect(x, y, UNIT_ICON_WIDTH, UNIT_ICON_HEIGHT);
        let k = (half) ? 0.5 : 1;
        const initialX = x;
        let iconWidth = UNIT_ICON_WIDTH * k;
        ctx.strokeRect(x, y, iconWidth, UNIT_ICON_HEIGHT);
        drawMovementIcon(x, y, unit, half);
        x += movementIcon.width * k;
        drawFightIcon(x, y, unit, half);
        x += fightIcon.width * k;
        drawArrowIcon(x, y, half);
        x = initialX;
        y += attributesHeight;
        fillHealthPoints(x, y, unit, half);
        y += healthPointsHeight;
        drawIcon(x, y, unit, half);
    }
}

export const drawMovementIcon = (x: number, y: number, unit: Unit, half: boolean = false) => {
    if(unit.isMoving) {
        let k = (half) ? 0.5 : 1;
        ctx.drawImage(movementIconImage, x, y,  movementIcon.width * k, movementIcon.height);
    }
}

export const drawFightIcon = (x: number, y: number, unit: Unit, half: boolean = false) => {
    if(unit.isFighting) {
        let k = (half) ? 0.5 : 1;
        ctx.drawImage(fightIconImage, x, y,  fightIcon.width * k, fightIcon.height);
    }
}

export const drawArrowIcon = (x: number, y: number, half: boolean = false) => {
   // todo add arrow icon
}

export const fillHealthPoints = (x: number, y: number, unit: Unit, half: boolean = false) => {
    let k = (half) ? 0.5 : 1;
    let width = UNIT_ICON_WIDTH * k;
    let initialHealth = unit.initialHealth;
    let healthPercentage = Math.round((unit.health / initialHealth) * 100) * 0.01;
    let healthPointsWidth = width * healthPercentage;
    if(healthPercentage >= 0.7) ctx.fillStyle = "green";
    else if(healthPercentage >= 0.4 && healthPercentage < 0.7) ctx.fillStyle = "yellow";
    else if(healthPercentage > 0 && healthPercentage < 0.4) ctx.fillStyle = "red";
    if(healthPointsWidth < 0) healthPointsWidth = 0;
    ctx.fillRect(x, y, healthPointsWidth, healthPointsHeight);
}

export const drawIcon = (x: number, y: number, unit: Unit, half: boolean = false) => {
    ctx.save();
    if(!currentlyChosenUnit || (currentlyChosenUnit && currentlyChosenUnit.id !== unit.id)) {
        ctx.filter = 'brightness(0.8)';
    }
    let k = (half) ? 0.5 : 1;
    ctx.drawImage(unitIconImages[unit.name], x, y, UNIT_ICON_WIDTH * k, iconHeight);
    ctx.restore();
}