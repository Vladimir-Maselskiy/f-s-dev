import { getMicroliftPlate } from './getMiсroliftPlate';
import { getTurningSlantedPlate } from './getTurningSlantedPlate';
import { getTopHinge } from './getTopHinge';
import { getBottomHinge } from './getBottomHinge';
import { getTopDecor } from './getTopDecor.js';
import { getBottomDecor } from './getBottomDecor';
import { getShear } from './getShear';
import { getConerGear } from './getConerGear';
import { getGetriebe } from './getGetriebe';
import { getBottomEndingForGetriebe } from './getBottomEndingForGetriebe';
import { getCenterLocks } from './getCenterLocks';
import { getStrikeplates } from './getStrikePlates';

export function makeOrder(width, height, options) {
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
}
