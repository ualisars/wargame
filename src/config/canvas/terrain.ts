import {
  WIDTH,
  HEIGHT
} from '../../config';

export const terrain:any = document.getElementById('terrain');

if(terrain) {
  terrain.width = WIDTH;
  terrain.height = HEIGHT;
}
