import {dragAndDropCanvasCtx} from '../../../../../config/context';
import {
  armyImgHeight,
  armyImgWidth
} from '../armySettings';

export const drawRemoveIcon = (unit:any) => {
  const rightTopX:number = unit.armyPosition.x + armyImgWidth;
  const rightTopY:number = unit.armyPosition.y;

  let line1X0:number = rightTopX - 15;
  let line1Y0:number = rightTopY + 15;
  let line1X1:number = rightTopX - 5;
  let line1Y1:number = rightTopY + 4;

  let line2X0:number = line1X0;
  let line2Y0:number = line1Y1;
  let line2X1:number = line1X1;
  let line2Y1:number = line1Y0;

  let width:number = Math.round(armyImgWidth / 4);
  let height:number = Math.round(armyImgHeight / 4);
  dragAndDropCanvasCtx.fillStyle = 'rgb(200, 0,0)';
  dragAndDropCanvasCtx.beginPath();
  dragAndDropCanvasCtx.moveTo(line1X0, line1Y0);
  dragAndDropCanvasCtx.lineTo(line1X1, line1Y1);
  dragAndDropCanvasCtx.stroke();
  dragAndDropCanvasCtx.beginPath();
  dragAndDropCanvasCtx.fillStyle = 'red';
  dragAndDropCanvasCtx.moveTo(line2X0, line2Y0);
  dragAndDropCanvasCtx.lineTo(line2X1, line2Y1);
  dragAndDropCanvasCtx.stroke();
}
