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

export function makeSingleSet(width, height, quantitySet, options) {
  for (let i = 0; i < quantitySet; i += 1) {
    getShear(width);
    getConerGear();
    getGetriebe(height);
    getBottomEndingForGetriebe(height);
    getCenterLocks(width, height);
    getMicroliftPlate(options);
    getTurningSlantedPlate(options);
    getTopHinge(options);
    getBottomHinge();
    getTopDecor();
    getBottomDecor();
    getStrikeplates(options);
  }
}
