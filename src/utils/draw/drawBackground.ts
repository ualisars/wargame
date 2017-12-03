import {backgroundCtx} from '../../map';
import {loadImage} from '../../utils';
import {WIDTH, HEIGHT} from '../../config';

export const drawBackground = (src:string) => {
  loadImage(src, (err:any, img:any) => {
    backgroundCtx.drawImage(img, 0, 0, WIDTH, HEIGHT);
  });
}
