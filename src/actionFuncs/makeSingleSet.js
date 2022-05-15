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
