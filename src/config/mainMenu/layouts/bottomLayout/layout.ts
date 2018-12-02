import {MAP_WIDTH, CANVAS_HEIGHT} from '../../..';
import {
  infoLayoutHeight
} from '..';
import {titleHeight} from '../upperLayout';
// start battle
export let startBattleStartY:number = titleHeight + infoLayoutHeight;
export let startBattleHeight:number = CANVAS_HEIGHT - (titleHeight + infoLayoutHeight);
export let startBattleWidth:number = MAP_WIDTH;
