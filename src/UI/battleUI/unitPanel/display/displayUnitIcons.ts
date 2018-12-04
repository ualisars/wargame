import { playerUnits } from "../../../../store/unit/units";
import { UNIT_PANEL_HEIGHT, UNIT_LEFT_PANEL_WIDTH, UNIT_ICON_WIDTH, UNIT_ICON_HEIGHT } from "../settings";
import { CANVAS_HEIGHT } from "../../../../config";
import { drawUnitIcon } from "../icon/drawUnitIcon";

export const displayUnitIcons = () => {
    let dispayHalfOfImage: boolean = false;
    let k = (dispayHalfOfImage) ? 0.5 : 1;
    let x = UNIT_LEFT_PANEL_WIDTH;
    let y = CANVAS_HEIGHT - UNIT_PANEL_HEIGHT;
    for(let unit of playerUnits) {
        drawUnitIcon(x, y, unit, dispayHalfOfImage);
        x += UNIT_ICON_WIDTH * k;
    }
}