import {fillLayout} from './fillLayout';
import {showStartBattleButton} from '../button';
import {showText} from '../button';

export const drawBottomLayout = () => {
  fillLayout();
  showStartBattleButton();
  showText();
}
