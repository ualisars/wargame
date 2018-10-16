import {WIDTH, HEIGHT} from '../../..';
import {
  infoLayoutHeight
} from '..';
import {titleHeight} from '../upperLayout';
// start battle
export let startBattleStartY:number = titleHeight + infoLayoutHeight;
export let startBattleHeight:number = HEIGHT - (titleHeight + infoLayoutHeight);
export let startBattleWidth:number = WIDTH;
