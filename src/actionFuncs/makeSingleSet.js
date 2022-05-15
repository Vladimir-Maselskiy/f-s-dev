import { getMicroliftPlate } from '../getMacoArticle/getMiсroliftPlate';
import { getTurningSlantedPlate } from '../getMacoArticle/getTurningSlantedPlate';
import { getTopHinge } from '../getMacoArticle/getTopHinge';
import { getBottomHinge } from '../getMacoArticle/getBottomHinge';
import { getTopDecor } from '../getMacoArticle/getTopDecor.js';
import { getBottomDecor } from '../getMacoArticle/getBottomDecor';
import { getShear } from '../getMacoArticle/getShear';
import { getConerGear } from '../getMacoArticle/getConerGear';
import { getGetriebe } from '../getMacoArticle/Getriebe/getGetriebe';
import { getBottomEndingForGetriebe } from '../getMacoArticle/getBottomEndingForGetriebe';
import { getCenterLocks } from '../getMacoArticle/getCenterLocks';
import { getStrikeplates } from '../getMacoArticle/getStrikePlates';

export function makeSingleSet(options) {
  const { width, height, quantitySet } = options;
  for (let i = 0; i < quantitySet; i += 1) {
    getShear(width);
    getConerGear(options);
    getGetriebe(options);
    getBottomEndingForGetriebe(height);
    getCenterLocks(options);
    getMicroliftPlate(options);
    getTurningSlantedPlate(options);
    getTopHinge(options);
    getBottomHinge();
    getTopDecor();
    getBottomDecor();
    getStrikeplates(options);
  }
}
