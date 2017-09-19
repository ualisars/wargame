import {redrawUnits} from '../unit/unitActions';
import {ctx, WIDTH, HEIGHT} from './mapConfig';
import {drawGrid} from './drawGrid';
import {units} from '../store/unitStore';

export const updateMap = () => {
  console.log('updateMap');
  drawGrid();
  redrawUnits(units);
}
