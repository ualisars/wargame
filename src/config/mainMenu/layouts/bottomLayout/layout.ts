import {WIDTH, HEIGHT} from '../../../../config';
import {
  infoLayoutHeight,
  titleHeight
} from '../index';
// start battle
export let startBattleStartY:number = titleHeight + infoLayoutHeight;
export let startBattleHeight:number = HEIGHT - (titleHeight + infoLayoutHeight);
export let startBattleWidth:number = WIDTH;
