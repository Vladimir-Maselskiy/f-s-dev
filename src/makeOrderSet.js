import { refs } from './refs';
import { getShear } from './getShear';
import { getConerGear } from './getConerGear';
import { getGetriebe } from './getGetriebe';
import { getBottomEndingForGetriebe } from './getBottomEndingForGetriebe';
import { getCenterLocks } from './getCenterLocks';
import { getStrikeplates } from './getStrikePlates';
import { orderList } from './addArticleToOrderList';
import { getMicroliftPlate } from './getMiсroliftPlate';
import { getTurningSlantedPlate } from './getTurningSlantedPlate';
import { getTopHinge } from './getTopHinge';
import { getBottomHinge } from './getBottomHinge';
import { getTopDecor } from './getTopDecor.js';
import { getBottomDecor } from './getBottomDecor';

export function makeOrderSet() {
  const width = Number(refs.widthInput.value);
  const height = Number(refs.hightInput.value);

  getShear(width);
  getConerGear();
  getGetriebe(height);
  getBottomEndingForGetriebe(height);
  getCenterLocks(width, height);
  getStrikeplates();
  getMicroliftPlate();
  getTurningSlantedPlate();
  getTopHinge();
  getBottomHinge();
  getTopDecor();
  getBottomDecor();

  // console.log(shear);
  // console.log(conerGear);
  // console.log(getriebe);
  // console.log(bottomEndingForGetriebe);
  // console.log(centerLocks);
  // console.log(strikePlates);

  console.log('width: ', width, '   height: ', height);
  console.log(orderList);
}
