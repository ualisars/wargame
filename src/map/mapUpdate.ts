import {redrawUnits} from '../unit/unitActions';
import {ctx} from './mapConfig';
import {
  WIDTH,
  HEIGHT
} from './mapSettings';
import {drawGrid} from './drawGrid';
import {units} from '../store/unitStore';

export const updateMap = () => {
  console.log('updateMap');
  drawGrid();
  redrawUnits(units);
}
