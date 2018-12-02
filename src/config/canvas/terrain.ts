import {
  MAP_WIDTH,
  MAP_HEIGHT
} from '..';

export const terrain:any = document.getElementById('terrain');

if(terrain) {
  terrain.width = MAP_WIDTH;
  terrain.height = MAP_HEIGHT;
}
