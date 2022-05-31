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
import { getHingeSidePress } from '../getMacoArticle/getHingeSidePress';
import { getArticlesForType3 } from '../getMacoArticle/getArticlesForType3';
import { getArticlesForType2 } from '../getMacoArticle/getArticlesForType2';
import { getArticlesForType5 } from '../getMacoArticle/getArticlesForType5';

export function makeSingleSet(options) {
  const { quantitySet } = options;
  for (let i = 0; i < quantitySet; i += 1) {
    getShear(options);
    getConerGear(options);
    getGetriebe(options);
    getBottomEndingForGetriebe(options);
    getCenterLocks(options);
    getMicroliftPlate(options);
    getTurningSlantedPlate(options);
    getTopHinge(options);
    getBottomHinge(options);
    getTopDecor(options);
    getBottomDecor(options);
    getHingeSidePress(options);
    getArticlesForType2(options);
    getArticlesForType3(options);
    getArticlesForType5(options);
    getStrikeplates(options);
  }
}
